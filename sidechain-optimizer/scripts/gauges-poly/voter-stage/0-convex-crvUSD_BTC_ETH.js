const hre = require("hardhat");
const pools = require("../../../../pools.js");
const common = require("../common.js");
const addresses = hre.network.config.constants;
const path = require('path');
const scriptName = path.basename(__filename);
const pathAr = __filename.split('/');
const folder = pathAr[pathAr.length - 2];

// async function main() {
//     const deployer = (await hre.ethers.getSigners())[0];

//     // Set constants [START]
//     // Set constants [START]
//     // Set constants [START]
//     const IS_BLUECHIP = folder == 'bluechip'; // This constant should not be changed !!!

//     const MAINCHAIN_GAUGE = pools[IS_BLUECHIP ? 'BSC_BLUECHIP' : 'BSC_VOTER'].pool666;
//     const LP_TOKEN = addresses.crvUSD_BTC_ETH;

//     const GAUGE_ADDRESS = deployer.address; //MAINCHAIN_GAUGE.sideGauge; // This constant should not be changed !!!

//     // Strategy parameters
//     const STRATEGY_NAME = "Strategy_Convex";
//     const strategyParams = [
//         [
//             GAUGE_ADDRESS, // vault
//             addresses.convexFarmAddress, // farmContractAddress
//             deployer.address, // govAddress
//             addresses.uniswapV3Router, // uniRouterAddress
//             addresses.crvUSD_BTC_ETH_POOL, // pool
//         ],
//         [
//             addresses.wmatic, // native = _tokenAddresses[0];
//             LP_TOKEN, // wantAddress = _tokenAddresses[1];
//             addresses.wmatic, // earnedAddress = _tokenAddresses[2];
//             addresses.crv, // rewardToken = _tokenAddresses[3];
//             addresses.usdc, // token0Address = _tokenAddresses[4]; // depositToken
//         ],
//         false, // _useUnderlying
//         3, // _pid
//         9990, // _withdrawFeeFactor
//         addresses.bluechipFeeCollector, // _voterFeeAddress
//         '0x90927a78ad13c0ec9acf546ce0c16248a7e7a86d', // _rewardPool
//         '0x172370d5cd63279efa6d502dab29171933a610af000bb80d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // _rewardToNativePath
//         '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf12700001f42791bca1f2de4661ed88a30c99a7a9449aa84174', // _nativeToDepositPath
//         [
//             5, // poolSize
//             1, // depositIndex
//         ]
//     ]
//     // Set constants [END]
//     // Set constants [END]
//     // Set constants [END]

//     await common.processGauge(
//         scriptName,
//         MAINCHAIN_GAUGE,
//         STRATEGY_NAME,
//         LP_TOKEN,
//         IS_BLUECHIP,
//         strategyParams,
//         deployer
//     );
// }

// main()
//     .then(() => process.exit(0))
//     .catch(error => {
//         console.error(error);
//         process.exit(1);
//     });

module.exports = [
    [
        '0x30D8ffA39cf00c5BC3441584b794cd837DF1457D', // vault
        addresses.convexFarmAddress, // farmContractAddress
        '0x30D8ffA39cf00c5BC3441584b794cd837DF1457D', // govAddress
        addresses.uniswapV3Router, // uniRouterAddress
        addresses.crvUSD_BTC_ETH_POOL, // pool
    ],
    [
        addresses.wmatic, // native = _tokenAddresses[0];
        addresses.crvUSD_BTC_ETH, // wantAddress = _tokenAddresses[1];
        addresses.wmatic, // earnedAddress = _tokenAddresses[2];
        addresses.crv, // rewardToken = _tokenAddresses[3];
        addresses.usdc, // token0Address = _tokenAddresses[4]; // depositToken
    ],
    false, // _useUnderlying
    3, // _pid
    9990, // _withdrawFeeFactor
    addresses.bluechipFeeCollector, // _voterFeeAddress
    '0x90927a78ad13c0ec9acf546ce0c16248a7e7a86d', // _rewardPool
    '0x172370d5cd63279efa6d502dab29171933a610af000bb80d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // _rewardToNativePath
    '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf12700001f42791bca1f2de4661ed88a30c99a7a9449aa84174', // _nativeToDepositPath
    [
        5, // poolSize
        1, // depositIndex
    ]
]