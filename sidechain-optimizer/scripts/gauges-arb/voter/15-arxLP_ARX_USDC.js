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

    const MAINCHAIN_GAUGE = pools[IS_BLUECHIP ? 'BSC_BLUECHIP' : 'BSC_VOTER'].pool50;
    const LP_TOKEN = addresses.arxLP_ARX_USDC;

    const GAUGE_ADDRESS = MAINCHAIN_GAUGE.sideGauge; // This constant should not be changed !!!

    // Strategy parameters
    const STRATEGY_NAME = "Strategy_Arx";
    const strategyParams = [
        [
            GAUGE_ADDRESS,
            addresses.arxFarm,
            deployer.address,
            addresses.arxRouter,
        ],
        [
            addresses.weth, // wbnb
            LP_TOKEN,       // wantAddress
            addresses.arx,  // earnedAddress
            addresses.arx, // token0Address
            addresses.usdc  // token1Address
        ],
        false,
        true,
        1,
        [],  // earnedToToken0Path
        [addresses.arx, addresses.usdc], // earnedToToken1Path
        [addresses.weth, addresses.arx],  // earned2ToEarnedPath
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
