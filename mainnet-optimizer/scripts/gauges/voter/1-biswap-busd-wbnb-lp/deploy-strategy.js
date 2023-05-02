const hre = require("hardhat");
const path = require('path');
const scriptName = path.basename(__filename);
const addresses = hre.network.config.constants;
const pools = require("../../../../../pools.js");
const POOL = pools.BSC_VOTER.pool1;

async function main() {

    const deployer = (await hre.ethers.getSigners())[0];
    // console.log(POOL);

    // const STRATEGYContract = await ethers.getContractFactory("Strategy_Biswap");
    // const STRATEGY = await STRATEGYContract.deploy(
    //     [
    //         POOL.gauge,
    //         addresses.biswapFarm,
    //         deployer.address,
    //         addresses.biswapRouter,
    //     ],
    //     [
    //         addresses.wbnb, 
    //         POOL.token, 
    //         addresses.bsw,
    //         addresses.wbnb,
    //         addresses.busd
    //     ],
    //     false,
    //     true,
    //     3,
    //     [addresses.bsw, addresses.wbnb],
    //     [addresses.bsw, addresses.wbnb, addresses.busd],
    //     9990
    // );

    // console.log("Strategy deployed to: %saddress/%s", hre.network.config.explorer, STRATEGY.address);

    const GAUGE = await hre.ethers.getContractAt('GaugeV2', POOL.gauge, deployer);
    const tx = await GAUGE.initStrategy(POOL.strategy);
    tx.wait();
    console.log("GAUGE.initStrategy")
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
