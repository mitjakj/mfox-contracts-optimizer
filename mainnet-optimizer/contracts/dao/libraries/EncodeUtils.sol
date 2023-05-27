pragma solidity ^0.8.0;

import './Path.sol';

library EncodeUtils {
    using Path for bytes;

    function decodePath(bytes memory _encodedPath) internal pure returns (address[] memory) {
        uint256 numPools = _encodedPath.numPools();
        address[] memory path = new address[](numPools + 1);
        for (uint256 i; i < numPools; i++) {
            (address tokenA, address tokenB,) = _encodedPath.decodeFirstPool();
            path[i] = tokenA;
            path[i + 1] = tokenB;
            _encodedPath = _encodedPath.skipToken();
        }
        return path;
    }

}