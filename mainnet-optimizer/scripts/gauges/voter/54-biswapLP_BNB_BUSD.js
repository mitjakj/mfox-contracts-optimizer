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
    const LP_TOKEN = addresses.biswapLP_WBNB_BUSD;
    const IS_LP = false; // set to true if you want ample & wbnb as bribe tokens by default

    const IS_BLUECHIP = folder == 'bluechip'; // This constant should not be changed !!!
    const PID = scriptName.split('-')[0]; // This constant should not be changed !!!
    const GAUGE = pools[IS_BLUECHIP ? 'BSC_BLUECHIP' : 'BSC_VOTER'][`pool${PID}`]; // This constant should not be changed !!!
    const GAUGE_ADDRESS = GAUGE.gauge; // This constant should not be changed !!!

    // Strategy parameters
    const STRATEGY_NAME = "Strategy_Biswap";
    const strategyParams = [
        [
            GAUGE_ADDRESS,
            addresses.biswapFarm, // farm
            deployer.address,
            addresses.biswapRouter, // router
        ],
        [
            addresses.wbnb, // wbnb
            LP_TOKEN,       // wantAddress
            addresses.bsw,  // earnedAddress
            addresses.wbnb, // token0Address
            addresses.busd  // token1Address
        ],
        false, // This constant should not be changed !!!
        true, // This constant should not be changed !!!
        3, // pid
        [addresses.bsw, addresses.wbnb],  // earnedToToken0Path
        [addresses.bsw, addresses.wbnb, addresses.busd], // earnedToToken1Path
        9990 // withdrawFee
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
