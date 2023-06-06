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

    const MAINCHAIN_GAUGE = pools[IS_BLUECHIP ? 'BSC_BLUECHIP' : 'BSC_VOTER'].pool28;
    const LP_TOKEN = addresses.soluneaLP_vAMM_WETH_ARB;

    const GAUGE_ADDRESS = MAINCHAIN_GAUGE.sideGauge; // This constant should not be changed !!!

    // Strategy parameters
    const STRATEGY_NAME = "Strategy_Ramses";
    const strategyParams = [
        [
            GAUGE_ADDRESS,
            addresses.soluneaLP_vAMM_WETH_ARB_GAUGE,
            deployer.address,
            addresses.soluneaRouter
        ],
        [
            LP_TOKEN,       // wantAddress
            addresses.slna,  // earnedAddress
            addresses.weth, // token0Address
            addresses.arb  // token1Address
        ],
        true, // isAutoComp
        false, // isStable
        [{from: addresses.slna, to: addresses.weth, stable: false}],  // earnedToToken0Path
        [{from: addresses.slna, to: addresses.weth, stable: false}, {from: addresses.weth, to: addresses.arb, stable: false}],  // earnedToToken1Path
        [{from: addresses.weth, to: addresses.slna, stable: false}],  // token0ToEarnedPath
        [{from: addresses.arb, to: addresses.weth, stable: false}, {from: addresses.weth, to: addresses.slna, stable: false}],  // token1ToEarnedPath
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
