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

    const MAINCHAIN_GAUGE = pools[IS_BLUECHIP ? 'BSC_BLUECHIP' : 'BSC_VOTER'].pool62;
    const LP_TOKEN = addresses.chronosLP_vAMM_WBTC_WETH;

    const GAUGE_ADDRESS = MAINCHAIN_GAUGE.sideGauge; // This constant should not be changed !!!

    // Strategy parameters
    const STRATEGY_NAME = "Strategy_Chronos";
    const strategyParams = [
        [
            GAUGE_ADDRESS,
            addresses.chronosLP_vAMM_WBTC_WETH_GAUGE,
            deployer.address,
            addresses.chronosRouter
        ],
        [
            LP_TOKEN,       // wantAddress
            addresses.chr,  // earnedAddress
            addresses.wbtc, // token0Address
            addresses.weth  // token1Address
        ],
        true, // isAutoComp
        false, // isStable
        [{from: addresses.chr, to: addresses.weth, stable: false}, {from: addresses.weth, to: addresses.wbtc, stable: false}],  // earnedToToken0Path
        [{from: addresses.chr, to: addresses.weth, stable: false}],  // earnedToToken1Path
        [{from: addresses.wbtc, to: addresses.weth, stable: false}, {from: addresses.weth, to: addresses.chr, stable: false}],  // token0ToEarnedPath
        [{from: addresses.weth, to: addresses.chr, stable: false}],  // token1ToEarnedPath
        9990
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
