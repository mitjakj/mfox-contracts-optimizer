const hre = require("hardhat");

async function main() {
    const addresses = hre.network.config.constants;
    const investor = (await hre.ethers.getSigners())[1];

    const STRAT = await hre.ethers.getContractAt('Strategy_Thena', '0x2154590d8e7EDCEC14547e869B7deF1595Ee0259', investor);

    console.log(await STRAT.balanceOf());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
