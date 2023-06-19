// SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

import "./Strategy.sol";
import "./../interfaces/IXRouter01.sol";

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

contract Strategy_PCS_Stable is Strategy {
    using SafeERC20 for IERC20;

    address public pool;
    uint256 public poolSize;
    uint256 public depositIndex;
    bool public useMetapool;

    constructor(
        address[] memory _addresses,
        address[] memory _tokenAddresses,
        bool _useMetapool,
        uint256 _pid,
        address[] memory _earnedToToken0Path,
        address[] memory _earnedToToken1Path,
        uint256 _withdrawFeeFactor,
        address _voterFeeAddress,
        uint256 _poolSize,
        uint256 _depositIndex
    ) public {
        vault = _addresses[0];
        farmContractAddress = _addresses[1];
        govAddress = _addresses[2];
        uniRouterAddress = _addresses[3];
        pool = _addresses[4];

        wftmAddress = _tokenAddresses[0];
        wantAddress = _tokenAddresses[1];
        earnedAddress = _tokenAddresses[2];
        token0Address = _tokenAddresses[3];

        pid = _pid;
        isSingleVault = false;
        isAutoComp = true;
        useMetapool = _useMetapool;

        earnedToToken0Path = _earnedToToken0Path;
        earnedToToken1Path = _earnedToToken1Path;

        // Reverse path
        for (uint256 i = earnedToToken0Path.length; i > 0; i--) {
            token0ToEarnedPath.push(earnedToToken0Path[i - 1]);
        }
        for (uint256 i = earnedToToken1Path.length; i > 0; i--) {
            token1ToEarnedPath.push(earnedToToken1Path[i - 1]);
        }

        withdrawFeeFactor = _withdrawFeeFactor;
        voterFeeAddress = _voterFeeAddress;

        poolSize = _poolSize;
        depositIndex = _depositIndex;
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
        distributeFees(earnedAmt);

        addLiquidity();

        lastEarnBlock = block.number;

        _farm();
    }


    // Adds liquidity to AMM and gets more LP tokens.
    function addLiquidity() internal {
        if (token0Address != earnedAddress) {
            uint256 earnedAmt = IERC20(earnedAddress).balanceOf(address(this));
            IERC20(earnedAddress).safeIncreaseAllowance(
                uniRouterAddress,
                earnedAmt
            );
            IXRouter01(uniRouterAddress).swapExactTokensForTokens(earnedAmt, 0, earnedToToken0Path, address(this), block.timestamp);
        }

        uint256 depositBal = IERC20(token0Address).balanceOf(address(this));

        IERC20(token0Address).safeIncreaseAllowance(pool, depositBal);

        if (poolSize == 2) {
            uint256[2] memory amounts;
            amounts[depositIndex] = depositBal;
            ICurveSwap(pool).add_liquidity(amounts, 0);
        } else if (poolSize == 3) {
            uint256[3] memory amounts;
            amounts[depositIndex] = depositBal;
            if (useMetapool) ICurveSwap(pool).add_liquidity(wantAddress, amounts, 0);
            else ICurveSwap(pool).add_liquidity(amounts, 0);
        } else if (poolSize == 4) {
            uint256[4] memory amounts;
            amounts[depositIndex] = depositBal;
            if (useMetapool) ICurveSwap(pool).add_liquidity(wantAddress, amounts, 0);
            else ICurveSwap(pool).add_liquidity(amounts, 0);
        } else if (poolSize == 5) {
            uint256[5] memory amounts;
            amounts[depositIndex] = depositBal;
            ICurveSwap(pool).add_liquidity(amounts, 0);
        }
    }

}