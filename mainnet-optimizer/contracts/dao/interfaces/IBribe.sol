// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

interface IBribe {
    function _deposit(uint amount, uint tokenId) external;
    function _withdraw(uint amount, uint tokenId) external;
    function getRewardForOwner(uint tokenId, address[] memory tokens) external;
    function notifyRewardAmount(address token, uint amount) external;
    function left(address token) external view returns (uint);
    function rewardsListLength() external view returns(uint256);
    function rewardTokens(uint256 idx) external view returns(address);
    function earned(uint256 tokenId, address _rewardToken) external view returns(uint256);
}
