const hre = require("hardhat");
const constants = require("../../../constants.js");

async function main() {
    const addresses = hre.network.config.constants;
    // some ethers.js code to show how to deliver a StoredPayload
    // let endpoint = await ethers.getContract("Endpoint")

    let srcChainId = 9; // TODO !!! 102 = bsc, 110 = arb
    // trustedRemote is the remote + local format
    let trustedRemote = hre.ethers.utils.solidityPack(
        ['address','address'],
        ["0x1888c948e0B5EC6c589666b67BefD412326bF199", "0x37929B0786fc1Fb5207C52656Aac79C95C39C8ff"]
    )
    console.log(trustedRemote);
    // let payload = "0x000000...0000000000" // copy and paste entire payload here
    // let tx = await endpoint.retryPayload(
    //     srcChainId,
    //     trustedRemote,
    //     payload
    // )
    //console.log(tx);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
