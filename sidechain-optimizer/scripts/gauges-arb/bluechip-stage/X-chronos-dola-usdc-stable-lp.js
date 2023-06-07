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

    const CHAIN_ID = hre.network.config.constants.lzChainId
    const LP_TOKEN = addresses.chronosLP_sAMM_DOLA_USDC;
    const IS_LP = true;

    const IS_BLUECHIP = folder == 'bluechip'; // This constant should not be changed !!!
    const PID = scriptName.split('-')[0]; // This constant should not be changed !!!
    const GAUGE = pools[IS_BLUECHIP ? 'BSC_BLUECHIP' : 'BSC_VOTER'][`pool${PID}`]; // This constant should not be changed !!!
    const GAUGE_ADDRESS = GAUGE.gauge; // This constant should not be changed !!!

    // Strategy parameters
    const STRATEGY_NAME = "Strategy_Chronos";
    const strategyParams = [
        [
            GAUGE_ADDRESS,
            addresses.chronosLP_sAMM_DOLA_USDC_GAUGE,
            deployer.address,
            addresses.chronosRouter
        ],
        [
            LP_TOKEN,       // wantAddress
            addresses.chr,  // earnedAddress
            addresses.dola, // token0Address
            addresses.usdc  // token1Address
        ],
        true, // isAutoComp
        true, // isStable
        [{from: addresses.chr, to: addresses.usdc, stable: false},{from: addresses.usdc, to: addresses.dola, stable: true}],  // earnedToToken0Path
        [{from: addresses.chr, to: addresses.usdc, stable: false}],  // earnedToToken1Path
        [{from: addresses.dola, to: addresses.usdc, stable: true},{from: addresses.usdc, to: addresses.chr, stable: false}],  // token0ToEarnedPath
        [{from: addresses.usdc, to: addresses.chr, stable: false}],  // token1ToEarnedPath
        10000
    ]
    // console.log(strategyParams);
    // Set constants [END]
    // Set constants [END]
    // Set constants [END]

    await common.processGauge(
        scriptName,
        GAUGE,
        STRATEGY_NAME,
        LP_TOKEN,
        CHAIN_ID,
        IS_BLUECHIP,
        IS_LP,
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
