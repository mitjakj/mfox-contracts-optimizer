const hre = require("hardhat");

async function main() {
    const addresses = hre.network.config.constants;
    const investor = (await hre.ethers.getSigners())[1];

    const STRAT = await hre.ethers.getContractAt('Strategy_Thena', '0x354a9cc17afC459997c1f31d81f7712cC7Db7733', investor);

    console.log(await STRAT.balanceOf());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
