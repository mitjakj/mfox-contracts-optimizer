const hre = require("hardhat");
const path = require('path');
const scriptName = path.basename(__filename);
const addresses = hre.network.config.constants;
const pools = require("../../../../../pools.js");

async function main() {

    const deployer = (await hre.ethers.getSigners())[0];
    
    const POOL = pools.BSC_BLUECHIP.pool1;
    const ZERO_ADDRESS = hre.ethers.constants.AddressZero;
    console.log(POOL);

    // const STRATEGYContract = await ethers.getContractFactory("Strategy_Native");
    // const STRATEGY = await STRATEGYContract.deploy(
    //   [POOL.gauge,ZERO_ADDRESS,ZERO_ADDRESS,ZERO_ADDRESS],
    //   [ZERO_ADDRESS,ZERO_ADDRESS, POOL.token, ZERO_ADDRESS,ZERO_ADDRESS,ZERO_ADDRESS],
    //   true,
    //   0,
    //   [],
    //   [],
    //   [],
    //   [],
    //   [],
    //   10000
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
