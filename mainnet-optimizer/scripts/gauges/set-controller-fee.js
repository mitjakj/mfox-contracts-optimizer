const hre = require("hardhat");
const path = require('path');
const scriptName = path.basename(__filename);
const addresses = hre.network.config.constants;
const pools = require("../../../pools.js");
const constants = require("../../../constants.js");

async function main() {
    
    const deployer = (await hre.ethers.getSigners())[0];

    const poolList = pools.BSC_BLUECHIP;
    // const poolList = pools.BSC_VOTER;

    for (gauge of Object.keys(poolList)) {

        const pool = poolList[gauge];
        if (pool.chainId == addresses.lzChainId || (pool.chainId === undefined && addresses.lzChainId == constants.BSC.lzChainId)) {
            console.log(pool);

            const STRAT = await hre.ethers.getContractAt('Strategy_Thena', pool.strategy, deployer);

            tx = await STRAT.setControllerFee(1000); // 10%
            await tx.wait();
        }
    }

    console.log("controllerFee set!");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
