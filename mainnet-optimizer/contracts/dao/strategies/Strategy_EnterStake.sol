// SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

import "./Strategy.sol";

interface ISingleFarm {
    // Stake CAKE tokens to MasterChef
    function enterStaking(uint256 _amount) external;

    // Withdraw CAKE tokens from STAKING.
    function leaveStaking(uint256 _amount) external;
}

contract Strategy_EnterStake is Strategy {
    using SafeERC20 for IERC20;

    constructor(
        address[] memory _addresses,
        address[] memory _tokenAddresses,
        bool _isSingleVault,
        bool _isAutoComp,
        uint256 _pid,
        uint256 _withdrawFeeFactor
    ) public {
        vault = _addresses[0];
        farmContractAddress = _addresses[1];
        govAddress = _addresses[2];
        uniRouterAddress = _addresses[3];

        wftmAddress = _tokenAddresses[0];
        wantAddress = _tokenAddresses[1];
        earnedAddress = _tokenAddresses[2];
        token0Address = _tokenAddresses[3];
        token1Address = _tokenAddresses[4];

        pid = _pid;
        isSingleVault = _isSingleVault;
        isAutoComp = _isAutoComp;

        withdrawFeeFactor = _withdrawFeeFactor;
    }

    function _farm() internal override {
        require(isAutoComp, "!isAutoComp");
        uint256 wantAmt = IERC20(wantAddress).balanceOf(address(this));
        IERC20(wantAddress).safeIncreaseAllowance(farmContractAddress, wantAmt);

        ISingleFarm(farmContractAddress).enterStaking(wantAmt);
    }

    function _unfarm(uint256 _wantAmt) internal override {
        ISingleFarm(farmContractAddress).leaveStaking(_wantAmt);
    }

}