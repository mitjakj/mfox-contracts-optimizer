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

    const CHAIN_ID = 0; // 0 for BSC, otherwise set it to constants.{CHAIN}.lzChainId
    const LP_TOKEN = addresses.thenaGammaLP_HAY_USDT;
    const IS_LP = true;

    const IS_BLUECHIP = folder == 'bluechip'; // This constant should not be changed !!!
    const PID = scriptName.split('-')[0]; // This constant should not be changed !!!
    const GAUGE = pools[IS_BLUECHIP ? 'BSC_BLUECHIP' : 'BSC_VOTER'][`pool${PID}`]; // This constant should not be changed !!!
    const GAUGE_ADDRESS = GAUGE.gauge; // This constant should not be changed !!!
    
    // Strategy parameters
    const STRATEGY_NAME = "Strategy_ThenaGamma";
    const strategyParams = [
        [
            GAUGE_ADDRESS,
            addresses.thenaGammaLP_HAY_USDT_GAUGE, // LP GAUGE
            deployer.address,
            addresses.thenaSwapRouter,
            addresses.thenaUniProxy,
        ],
        [
            addresses.wbnb, // wbnb
            LP_TOKEN,       // wantAddress
            addresses.the,  // earnedAddress
            addresses.hay, // token0Address
            addresses.usdt  // token1Address
        ],
        true, // isAutoComp
        true, // isStable
        utils.solidityPack(["address", "address", "address"], [addresses.the, addresses.usdt, addresses.hay]),  // earnedToToken0Path
        utils.solidityPack(["address", "address"], [addresses.the, addresses.usdt]),  // earnedToToken1Path
        utils.solidityPack(["address", "address", "address"], [addresses.hay, addresses.usdt, addresses.the]),  // token0ToEarnedPath
        utils.solidityPack(["address", "address"], [addresses.usdt, addresses.the]),  // token1ToEarnedPath
        9990
    ]
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
