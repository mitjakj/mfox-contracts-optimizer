const hre = require("hardhat");
const utils = require('ethers').utils;
const pools = require("../../../../pools.js");
const common = require("../common.js");
const addresses = hre.network.config.constants;
const path = require('path');
const scriptName = path.basename(__filename);
const pathAr = __filename.split('/');
const folder = pathAr[pathAr.length - 2];

async function main() {
    const deployer = (await hre.ethers.getSigners())[0]; 

    // Set constants [START]
    // Set constants [START]
    // Set constants [START]
    const IS_BLUECHIP = folder == 'bluechip'; // This constant should not be changed !!!

    const MAINCHAIN_GAUGE = pools[IS_BLUECHIP ? 'BSC_BLUECHIP' : 'BSC_VOTER'].pool10;
    const LP_TOKEN = addresses.ramsesLP_YFX_USDC;

    const GAUGE_ADDRESS = MAINCHAIN_GAUGE.sideGauge; // This constant should not be changed !!!

    // Strategy parameters
    const STRATEGY_NAME = "Strategy_Ramses";
    const strategyParams = [
        [
            GAUGE_ADDRESS,
            addresses.ramsesLP_YFX_USDC_GAUGE,
            deployer.address,
            addresses.ramsesRouter
        ],
        [
            LP_TOKEN,       // wantAddress
            addresses.ram,  // earnedAddress
            addresses.yfx, // token0Address
            addresses.usdc  // token1Address
        ],
        true, // isAutoComp
        false, // isStable
        // RAM (v) ETH (v) USDC (v) YFX
        [{from: addresses.ram, to: addresses.weth, stable: false}, {from: addresses.weth, to: addresses.usdc, stable: false}, {from: addresses.usdc, to: addresses.yfx, stable: false}],  // earnedToToken0Path
        [{from: addresses.ram, to: addresses.weth, stable: false}, {from: addresses.weth, to: addresses.usdc, stable: false}],  // earnedToToken1Path
        [{from: addresses.yfx, to: addresses.usdc, stable: false}, {from: addresses.usdc, to: addresses.weth, stable: false}, {from: addresses.weth, to: addresses.ram, stable: false}],  // token0ToEarnedPath
        [{from: addresses.usdc, to: addresses.weth, stable: false}, {from: addresses.weth, to: addresses.ram, stable: false}],  // token1ToEarnedPath
        9990,
        addresses.bluechipFeeCollector
    ]
    // console.log(strategyParams);
    // Set constants [END]
    // Set constants [END]
    // Set constants [END]

    await common.processGauge(
        scriptName,
        MAINCHAIN_GAUGE,
        STRATEGY_NAME,
        LP_TOKEN,
        IS_BLUECHIP,
        strategyParams,
        deployer
    );
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
