// SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./Strategy.sol";

interface IBabyDogeFarm {
    function stakeTotalShares() external view returns (uint256);
    function deposit(uint256 amount) external;
    function withdraw(uint256 _shares) external;
    function userInfo(address _address) external view returns (uint256, uint256, uint256);
}

contract Strategy_Babydoge is Strategy {
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

    function balanceOfStakedWant() public view override returns (uint256) {
        uint256 totalStakedAmt = IERC20(wantAddress).balanceOf(farmContractAddress);
        uint256 totalShares = IBabyDogeFarm(farmContractAddress).stakeTotalShares();
        (uint256 _shares,,) = IBabyDogeFarm(farmContractAddress).userInfo(address(this));
        
        return _shares * totalStakedAmt / totalShares;
    }

    function _farm() internal override {
        require(isAutoComp, "!isAutoComp");
        uint256 wantAmt = IERC20(wantAddress).balanceOf(address(this));
        IERC20(wantAddress).safeIncreaseAllowance(farmContractAddress, wantAmt);

        IBabyDogeFarm(farmContractAddress).deposit(wantAmt);
    }

    function _unfarm(uint256 _wantAmt) internal override {
        IBabyDogeFarm(farmContractAddress).withdraw(_wantAmt); // <- _wantAmt == shares
    }

    function withdraw(uint256 _wantAmt)
        external
        override
    {
        require(msg.sender == vault, "!vault");
        require(_wantAmt > 0, "_wantAmt <= 0");

        uint256 wantBal = balanceOfWant();
        if (isAutoComp && wantBal < _wantAmt) {
            uint256 _amountToWithdraw = _wantAmt - wantBal;
            uint256 _sharesToWithdraw = _amountToWithdraw * 100 / balanceOfStakedWant();
            _unfarm(_sharesToWithdraw);

            // check that user cannot withdraw more than his shares !!!
            // check that user cannot withdraw more than his shares !!!
            // check that user cannot withdraw more than his shares !!!
            wantBal = balanceOfWant();
        }

        if (_wantAmt > wantBal) {
            _wantAmt = wantBal;
        }

        if (withdrawFeeFactor < withdrawFeeFactorMax) {
            _wantAmt = _wantAmt * withdrawFeeFactor / withdrawFeeFactorMax;
        }

        IERC20(wantAddress).safeTransfer(vault, _wantAmt);
    }

}