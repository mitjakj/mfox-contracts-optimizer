// SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

import "./Strategy.sol";

interface ISmartChef {
    function deposit(uint256 _amount) external;
    function withdraw(uint256 _amount) external;
    function userInfo(address _user) external view returns(uint256,uint256);
}

contract Strategy_Syrup is Strategy {
    using SafeERC20 for IERC20;

    constructor(
        address[] memory _addresses,
        address[] memory _tokenAddresses,
        bool _isSingleVault,
        bool _isAutoComp,
        uint256 _pid,
        address[] memory _earnedToToken0Path,
        address[] memory _earnedToToken1Path,
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
    }

    function balanceOfStakedWant() public override view returns (uint256) {
        if (farmContractAddress != address(0)) {
            (uint256 _amount,) = ISmartChef(farmContractAddress).userInfo(address(this));
            return _amount;
        } else {
            return 0;
        }
    }

    function _farm() internal override virtual {
        require(isAutoComp, "!isAutoComp");
        uint256 wantAmt = IERC20(wantAddress).balanceOf(address(this));
        IERC20(wantAddress).safeIncreaseAllowance(farmContractAddress, wantAmt);

        ISmartChef(farmContractAddress).deposit(wantAmt);
    }

    function _unfarm(uint256 _wantAmt) internal override virtual {
        ISmartChef(farmContractAddress).withdraw(_wantAmt);
    }

}