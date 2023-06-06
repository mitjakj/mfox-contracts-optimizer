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

    const MAINCHAIN_GAUGE = pools[IS_BLUECHIP ? 'BSC_BLUECHIP' : 'BSC_VOTER'].pool26;
    const LP_TOKEN = addresses.solizardLP_sAMM_nfUSDchr_USDC;

    const GAUGE_ADDRESS = MAINCHAIN_GAUGE.sideGauge; // This constant should not be changed !!!

    // Strategy parameters
    const STRATEGY_NAME = "Strategy_Ramses";
    const strategyParams = [
        [
            GAUGE_ADDRESS,
            addresses.solizardLP_sAMM_nfUSDchr_USDC_GAUGE,
            deployer.address,
            addresses.solizardRouter
        ],
        [
            LP_TOKEN,       // wantAddress
            addresses.sliz,  // earnedAddress
            addresses.nfUSDchr, // token0Address
            addresses.usdc  // token1Address
        ],
        true, // isAutoComp
        true, // isStable
        [{from: addresses.sliz, to: addresses.weth, stable: false}, {from: addresses.weth, to: addresses.usdc, stable: false}, {from: addresses.usdc, to: addresses.nfUSDchr, stable: true}],  // earnedToToken0Path
        [{from: addresses.sliz, to: addresses.weth, stable: false}, {from: addresses.weth, to: addresses.usdc, stable: false}],  // earnedToToken1Path
        [{from: addresses.nfUSDchr, to: addresses.usdc, stable: true}, {from: addresses.usdc, to: addresses.weth, stable: false}, {from: addresses.weth, to: addresses.sliz, stable: false}],  // token0ToEarnedPath
        [{from: addresses.usdc, to: addresses.weth, stable: false}, {from: addresses.weth, to: addresses.sliz, stable: false}],  // token1ToEarnedPath
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
