// SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

import "./Strategy.sol";

interface IConvexRewardPool {
    function balanceOf(address account) external view returns (uint256);
    function earned(address account) external view returns (uint256);
    function periodFinish() external view returns (uint256);
    function getReward() external;
    function getReward(address _account, bool _claimExtras) external;
    function getReward(address _account) external;
    function withdrawAndUnwrap(uint256 _amount, bool claim) external;
    function withdrawAllAndUnwrap(bool claim) external;

    // L2 interface
    function withdraw(uint256 _amount, bool _claim) external;
    function withdrawAll(bool claim) external;
}

interface ICurveSwap {
    function remove_liquidity_one_coin(uint256 token_amount, int128 i, uint256 min_amount) external;
    function calc_withdraw_one_coin(uint256 tokenAmount, int128 i) external view returns (uint256);
    function coins(uint256 arg0) external view returns (address);

    function add_liquidity(uint256[2] memory amounts, uint256 min_mint_amount) external payable;
    function add_liquidity(uint256[2] memory amounts, uint256 min_mint_amount, bool _use_underlying) external;
    function add_liquidity(address _pool, uint256[2] memory amounts, uint256 min_mint_amount) external;

    function add_liquidity(uint256[3] memory amounts, uint256 min_mint_amount) external payable;
    function add_liquidity(uint256[3] memory amounts, uint256 min_mint_amount, bool _use_underlying) external payable;
    function add_liquidity(address _pool, uint256[3] memory amounts, uint256 min_mint_amount) external payable;

    function add_liquidity(uint256[4] memory amounts, uint256 min_mint_amount) external payable;
    function add_liquidity(address _pool, uint256[4] memory amounts, uint256 min_mint_amount) external payable;

    function add_liquidity(uint256[5] memory amounts, uint256 min_mint_amount) external payable;
    function add_liquidity(address _pool, uint256[5] memory amounts, uint256 min_mint_amount) external payable;

    function add_liquidity(uint256[6] memory amounts, uint256 min_mint_amount) external payable;
    function add_liquidity(address _pool, uint256[6] memory amounts, uint256 min_mint_amount) external payable;

    function exchange(uint256 i, uint256 j, uint256 dx, uint256 min_dy) external;
}

interface IUniswapRouterV3WithDeadline {
    struct ExactInputParams {
        bytes path;
        address recipient;
        uint256 deadline;
        uint256 amountIn;
        uint256 amountOutMinimum;
    }

    /// @notice Swaps `amountIn` of one token for as much as possible of another along the specified path
    /// @param params The parameters necessary for the multi-hop swap, encoded as `ExactInputParams` in calldata
    /// @return amountOut The amount of the received token
    function exactInput(ExactInputParams calldata params) external payable returns (uint256 amountOut);
}

library UniV3Actions {

    // Uniswap V3 swap with deadline
    function swapV3WithDeadline(address _router, bytes memory _path, uint256 _amount) internal returns (uint256 amountOut) {
        IUniswapRouterV3WithDeadline.ExactInputParams memory swapParams = IUniswapRouterV3WithDeadline.ExactInputParams({
            path: _path,
            recipient: address(this),
            deadline: block.timestamp,
            amountIn: _amount,
            amountOutMinimum: 0
        });
        return IUniswapRouterV3WithDeadline(_router).exactInput(swapParams);
    }
}

contract Strategy_Convex is Strategy {

    address public native;
    address public rewardPool;
    address public rewardToken; // CRV

    bytes public nativeToDepositPath;

    uint256 public poolSize;
    uint256 public depositIndex;

    address public pool;
    address public zap; // not set for now

    bool public useUnderlying;

    struct RewardV3 {
        address token;
        bytes toNativePath; // uniswap path
        uint minAmount; // minimum amount to be swapped to native
    }
    RewardV3[] public rewardsV3; // rewards swapped via uniRouterAddress

    constructor(
        address[] memory _addresses,
        address[] memory _tokenAddresses,
        bool _useUnderlying,
        uint256 _pid,
        uint256 _withdrawFeeFactor,
        address _voterFeeAddress,
        address _rewardPool,
        bytes memory _rewardToNativePath,
        bytes memory _nativeToDepositPath,
        uint256[] memory _params
    ) public {
        vault = _addresses[0];
        farmContractAddress = _addresses[1];
        govAddress = _addresses[2];
        uniRouterAddress = _addresses[3];
        pool = _addresses[4];
        // zap = _addresses[5];

        native = _tokenAddresses[0];
        wantAddress = _tokenAddresses[1];
        earnedAddress = _tokenAddresses[2];
        rewardToken = _tokenAddresses[3];
        token0Address = _tokenAddresses[4]; // depositToken

        pid = _pid;
        isSingleVault = false;
        isAutoComp = true;
        useUnderlying = _useUnderlying;

        withdrawFeeFactor = _withdrawFeeFactor;
        voterFeeAddress = _voterFeeAddress;

        rewardPool = _rewardPool;

        nativeToDepositPath = _nativeToDepositPath;

        rewardsV3.push(RewardV3(rewardToken, _rewardToNativePath, 1000000000000000000)); // should be: 1000000000000000000 == 1 CRV

        poolSize = _params[0];
        depositIndex = _params[1];
    }

    function balanceOfStakedWant() public override view returns (uint256) {
        return IConvexRewardPool(rewardPool).balanceOf(address(this));
    }

    function _unfarm(uint256 _wantAmt) internal override {
        IConvexRewardPool(rewardPool).withdraw(_wantAmt, false);
    }

    function _harvest() internal override {
        IConvexRewardPool(rewardPool).getReward(address(this));
        // swap CRV to WMATIC
        swapRewardsToNative();
    }

    function swapRewardsToNative() internal {
        for (uint i; i < rewardsV3.length; ++i) {
            uint bal = IERC20(rewardsV3[i].token).balanceOf(address(this));
            if (bal >= rewardsV3[i].minAmount) {
                IERC20(rewardsV3[i].token).approve(uniRouterAddress, 0);
                IERC20(rewardsV3[i].token).approve(uniRouterAddress, type(uint).max);

                UniV3Actions.swapV3WithDeadline(uniRouterAddress, rewardsV3[i].toNativePath, bal);
            }
        }
    }

    // Adds liquidity to AMM and gets more LP tokens.
    function addLiquidity() internal {
        uint256 depositBal;
        uint256 depositNativeAmount;
        uint256 nativeBal = IERC20(native).balanceOf(address(this));
        if (token0Address != native) {
            //if (nativeToDepositPath.length > 0) {
                IERC20(native).approve(uniRouterAddress, 0);
                IERC20(native).approve(uniRouterAddress, type(uint).max);

                UniV3Actions.swapV3WithDeadline(uniRouterAddress, nativeToDepositPath, nativeBal);
            // } else {
            //     IUniswapRouterETH(unirouter).swapExactTokensForTokens(nativeBal, 0, nativeToDepositRoute, address(this), block.timestamp);
            // }
            depositBal = IERC20(token0Address).balanceOf(address(this));
        } 
        
        // else {
        //     depositBal = nativeBal;
        //     if (depositNative) {
        //         depositNativeAmount = nativeBal;
        //         IWrappedNative(native).withdraw(depositNativeAmount);
        //     }
        // }

        IERC20(token0Address).approve(pool, 0);
        IERC20(token0Address).approve(pool, depositBal);

        if (poolSize == 2) {
            uint256[2] memory amounts;
            amounts[depositIndex] = depositBal;
            if (useUnderlying) ICurveSwap(pool).add_liquidity(amounts, 0, true);
            else ICurveSwap(pool).add_liquidity{value: depositNativeAmount}(amounts, 0);
        } else if (poolSize == 3) {
            uint256[3] memory amounts;
            amounts[depositIndex] = depositBal;
            if (useUnderlying) ICurveSwap(pool).add_liquidity(amounts, 0, true);
            else if (zap != address(0)) ICurveSwap(zap).add_liquidity{value: depositNativeAmount}(pool, amounts, 0);
            else ICurveSwap(pool).add_liquidity{value: depositNativeAmount}(amounts, 0);
        } else if (poolSize == 4) {
            uint256[4] memory amounts;
            amounts[depositIndex] = depositBal;
            if (zap != address(0)) ICurveSwap(zap).add_liquidity(pool, amounts, 0);
            else ICurveSwap(pool).add_liquidity(amounts, 0);
        } else if (poolSize == 5) {
            uint256[5] memory amounts;
            amounts[depositIndex] = depositBal;
            if (zap != address(0)) ICurveSwap(zap).add_liquidity(pool, amounts, 0);
            else ICurveSwap(pool).add_liquidity(amounts, 0);
        }
    }

    function earn() public override whenNotPaused {
        require(isAutoComp, "!isAutoComp");

        // Harvest farm tokens
        _harvest();

        // Converts farm tokens into want tokens
        uint256 earnedAmt = IERC20(earnedAddress).balanceOf(address(this));

        if (earnedAmt > 0) {
            earnedAmt = distributeFees(earnedAmt);

            addLiquidity();

            lastEarnBlock = block.number;

            _farm();
        }
    }

}