const hre = require("hardhat");
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
    const LP_TOKEN = addresses.pcsLP_TWT_BNB;
    const IS_LP = false;

    const IS_BLUECHIP = folder == 'bluechip'; // This constant should not be changed !!!
    const PID = scriptName.split('-')[0]; // This constant should not be changed !!!
    const GAUGE = pools[IS_BLUECHIP ? 'BSC_BLUECHIP' : 'BSC_VOTER'][`pool${PID}`]; // This constant should not be changed !!!
    const GAUGE_ADDRESS = GAUGE.gauge; // This constant should not be changed !!!

    // Strategy parameters
    const STRATEGY_NAME = "Strategy_Biswap";
    const strategyParams = [
        [
            GAUGE_ADDRESS,
            addresses.pcsFarm,
            deployer.address,
            addresses.pcsRouter,
        ],
        [
            addresses.wbnb, // wbnb
            LP_TOKEN,       // wantAddress
            addresses.cake,  // earnedAddress
            addresses.twt, // token0Address
            addresses.wbnb  // token1Address
        ],
        false,
        true,
        8,
        [addresses.cake, addresses.wbnb, addresses.twt],  // earnedToToken0Path
        [addresses.cake, addresses.wbnb], // earnedToToken1Path
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
