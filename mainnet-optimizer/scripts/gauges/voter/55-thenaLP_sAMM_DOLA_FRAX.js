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
    const LP_TOKEN = addresses.thenaLP_sAMM_DOLA_FRAX;
    const IS_LP = true;

    const IS_BLUECHIP = folder == 'bluechip'; // This constant should not be changed !!!
    const PID = scriptName.split('-')[0]; // This constant should not be changed !!!
    const GAUGE = pools[IS_BLUECHIP ? 'BSC_BLUECHIP' : 'BSC_VOTER'][`pool${PID}`]; // This constant should not be changed !!!
    const GAUGE_ADDRESS = GAUGE.gauge; // This constant should not be changed !!!
    
    // Strategy parameters
    const STRATEGY_NAME = "Strategy_Thena";
    const strategyParams = [
        [
            GAUGE_ADDRESS,
            addresses.thenaLP_sAMM_DOLA_FRAX_GAUGE,
            deployer.address,
            addresses.thenaRouterV2
        ],
        [
            addresses.wbnb, // wbnb
            LP_TOKEN,       // wantAddress
            addresses.the,  // earnedAddress
            addresses.dola, // token0Address
            addresses.frax  // token1Address
        ],
        true, // isAutoComp
        true, // isStable
        // THE (v) USDT (s) FRAX (s) DOLA
        [{from: addresses.the, to: addresses.usdt, stable: false}, {from: addresses.usdt, to: addresses.frax, stable: true}, {from: addresses.frax, to: addresses.dola, stable: true}],  // earnedToToken0Path
        [{from: addresses.the, to: addresses.usdt, stable: false}, {from: addresses.usdt, to: addresses.frax, stable: true}],  // earnedToToken1Path
        [{from: addresses.dola, to: addresses.frax, stable: true}, {from: addresses.frax, to: addresses.usdt, stable: true}, {from: addresses.usdt, to: addresses.the, stable: false}],  // token0ToEarnedPath
        [{from: addresses.frax, to: addresses.usdt, stable: true}, {from: addresses.usdt, to: addresses.the, stable: false}],  // token1ToEarnedPath
        9990
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
