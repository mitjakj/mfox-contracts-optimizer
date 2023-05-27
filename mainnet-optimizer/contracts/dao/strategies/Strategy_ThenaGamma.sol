// SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

import "./Strategy.sol";
import '../libraries/EncodeUtils.sol';
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';

interface IThenaGauge {
    function balanceOf(address _address) external view returns (uint256);
    function deposit(uint256 _amount) external;
    function withdraw(uint256 _amount) external;
    function getReward() external;
}

interface IUniProxy {
    function deposit(uint256 deposit0, uint256 deposit1, address to, address pos, uint256[4] memory minIn) external returns (uint256 shares);
    function getDepositAmount(address pos, address token, uint256 _deposit) external view returns (uint256 amountStart, uint256 amountEnd);
}

contract Strategy_ThenaGamma is Strategy {
    using SafeERC20 for IERC20;

    address public uniProxyAddress;
    bool public isStable;

    bytes public encodedEarnedToToken0Path;
    bytes public encodedEarnedToToken1Path;
    bytes public encodedToken0ToEarnedPath;
    bytes public encodedToken1ToEarnedPath;

    constructor(
        address[] memory _addresses,
        address[] memory _tokenAddresses,
        bool _isAutoComp,
        bool _isStable,
        bytes memory _earnedToToken0Path,
        bytes memory _earnedToToken1Path,
        bytes memory _token0ToEarnedPath,
        bytes memory _token1ToEarnedPath,
        uint256 _withdrawFeeFactor
    ) public {
        vault = _addresses[0];
        farmContractAddress = _addresses[1];
        govAddress = _addresses[2];
        uniRouterAddress = _addresses[3];
        uniProxyAddress = _addresses[4];

        wftmAddress = _tokenAddresses[0];
        wantAddress = _tokenAddresses[1];
        earnedAddress = _tokenAddresses[2];
        token0Address = _tokenAddresses[3];
        token1Address = _tokenAddresses[4];

        isSingleVault = false;
        isAutoComp = _isAutoComp;
        isStable = _isStable;

        encodedEarnedToToken0Path = _earnedToToken0Path;
        encodedEarnedToToken1Path = _earnedToToken1Path;
        encodedToken0ToEarnedPath = _token0ToEarnedPath;
        encodedToken1ToEarnedPath = _token1ToEarnedPath;

        withdrawFeeFactor = _withdrawFeeFactor;
    }

    function balanceOfStakedWant() public view override returns (uint256) {
        if (farmContractAddress != address(0)) {
            return IThenaGauge(farmContractAddress).balanceOf(address(this));
        } else {
            return 0;
        }
    }

    function _farm() internal override {
        require(isAutoComp, "!isAutoComp");
        uint256 wantAmt = IERC20(wantAddress).balanceOf(address(this));
        IERC20(wantAddress).safeIncreaseAllowance(farmContractAddress, wantAmt);

        IThenaGauge(farmContractAddress).deposit(wantAmt);
    }

    function _unfarm(uint256 _wantAmt) internal override {
        IThenaGauge(farmContractAddress).withdraw(_wantAmt);
    }

    function _harvest() internal override {
        IThenaGauge(farmContractAddress).getReward();
    }

    // 1. Harvest farm tokens
    // 2. Converts farm tokens into want tokens
    // 3. Deposits want tokens
    function earn() public override whenNotPaused {
        require(isAutoComp, "!isAutoComp");

        // Harvest farm tokens
        _harvest();

        // Converts farm tokens into want tokens
        uint256 earnedAmt = IERC20(earnedAddress).balanceOf(address(this));

        earnedAmt = distributeFees(earnedAmt);
        (uint256 amt_start, uint256 amt_end) = IUniProxy(uniProxyAddress).getDepositAmount(wantAddress, token0Address, 10000);
        uint256 token1Factor = (amt_start + amt_end) / 2;
        
        uint256 earned0Amt = earnedAmt / 2;
        uint256 earned1Amt = earned0Amt;
        if (isStable) {
            earned0Amt = (earnedAmt * 10000) / (10000 + token1Factor);
            earned1Amt = (earned0Amt * token1Factor) / 10000;
        }

        IERC20(earnedAddress).safeIncreaseAllowance(
            uniRouterAddress,
            earnedAmt
        );
        
        if (earnedAddress != token0Address) {
            // Swap half earned to token0
            _safeV3Swap(
                uniRouterAddress,
                earned0Amt,
                encodedEarnedToToken0Path,
                address(this),
                block.timestamp + routerDeadlineDuration
            );
        }

        if (earnedAddress != token1Address) {
            // Swap half earned to token1
            _safeV3Swap(
                uniRouterAddress,
                earned1Amt,
                encodedEarnedToToken1Path,
                address(this),
                block.timestamp + routerDeadlineDuration
            );
        }

        // Get want tokens, ie. add liquidity
        uint256 token0Amt = IERC20(token0Address).balanceOf(address(this));
        uint256 token1Amt = IERC20(token1Address).balanceOf(address(this));
        if (token0Amt > 0 && token1Amt > 0) {
            if ((token1Amt * 9950) / token0Amt > token1Factor) {
                token1Amt = (token0Amt * token1Factor) / 9960;
            } else if ((token1Amt * 10050) / token0Amt < token1Factor) {
                token0Amt = (token1Amt * 10040) / token1Factor;
            }
            IERC20(token0Address).safeIncreaseAllowance(
                wantAddress,
                token0Amt
            );
            IERC20(token1Address).safeIncreaseAllowance(
                wantAddress,
                token1Amt
            );
            IUniProxy(uniProxyAddress).deposit(
                token0Amt,
                token1Amt,
                address(this),
                wantAddress,
                [uint256(0), uint256(0), uint256(0), uint256(0)]
            );
        }

        lastEarnBlock = block.number;

        _farm();
    }

    function convertDustToEarned() public override whenNotPaused {
        require(isAutoComp, "!isAutoComp");
        require(!isSingleVault, "isSingleVault");

        // Converts dust tokens into earned tokens, which will be reinvested on the next earn().

        // Converts token0 dust (if any) to earned tokens
        uint256 token0Amt = IERC20(token0Address).balanceOf(address(this));
        if (token0Address != earnedAddress && token0Amt > 0) {
            IERC20(token0Address).safeIncreaseAllowance(
                uniRouterAddress,
                token0Amt
            );

            // Swap all dust tokens to earned tokens
            _safeV3Swap(
                uniRouterAddress,
                token0Amt,
                encodedToken0ToEarnedPath,
                address(this),
                block.timestamp + routerDeadlineDuration
            );
        }

        // Converts token1 dust (if any) to earned tokens
        uint256 token1Amt = IERC20(token1Address).balanceOf(address(this));
        if (token1Address != earnedAddress && token1Amt > 0) {
            IERC20(token1Address).safeIncreaseAllowance(
                uniRouterAddress,
                token1Amt
            );

            // Swap all dust tokens to earned tokens
            _safeV3Swap(
                uniRouterAddress,
                token1Amt,
                encodedToken1ToEarnedPath,
                address(this),
                block.timestamp + routerDeadlineDuration
            );
        }
    }

    function _safeV3Swap(
        address _uniRouterAddress,
        uint256 _amountIn,
        bytes memory _encodedPath,
        address _to,
        uint256 _deadline
    ) internal {
        ISwapRouter.ExactInputParams memory params = ISwapRouter.ExactInputParams({
            path: _encodedPath,
            recipient: _to,
            deadline: _deadline,
            amountIn: _amountIn,
            amountOutMinimum: 0
        });
        ISwapRouter(_uniRouterAddress).exactInput(params);
    }
}