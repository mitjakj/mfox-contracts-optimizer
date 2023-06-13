const hre = require("hardhat");
const addresses = hre.network.config.constants;
const inquirer = require('inquirer');
const constants = require("../../../constants");

exports.processGauge = async function (scriptName, mainchainGauge, strategyName, lpToken, isBluechip, strategyParams, deployer) {
    console.log(mainchainGauge);

    let chainConstants = constants.BSC;
    if (mainchainGauge.chainId == constants.ARBITRUM.lzChainId) {
        chainConstants = constants.ARBITRUM;
    } else if (mainchainGauge.chainId == constants.POLYGON.lzChainId) {
        chainConstants = constants.POLYGON;
    }

    const lpTicker = Object.keys(chainConstants).find(key => chainConstants[key] === lpToken);
    console.log(`LP: ${lpToken} (${lpTicker})`);

    const answer = await inquirer.prompt([{
        name: "action",
        type: "list",
        message: "Choose an action.",
        choices:[
          "Create-gauge",
          "Deploy-strategy",
          "Verify-strategy",
          "Init-strategy",
        ]
    }]);
    
    if (answer.action == "Create-gauge") {
        await createGauge(scriptName, mainchainGauge, lpToken, isBluechip, deployer);

    } else if (answer.action == "Deploy-strategy") {
        await deployStrategy(strategyName, strategyParams);

    } else if (answer.action == "Verify-strategy") {
        console.log("Not supported yet!");

    } else if (answer.action == "Init-strategy") {
        await initStrategy(mainchainGauge, deployer);
    }
}

createGauge = async function (scriptName, mainchainGauge, lpToken, isBluechip, deployer) {
    const PID = scriptName.split('-')[0];
    let VOTER;
    if (isBluechip) {
        VOTER = await hre.ethers.getContractAt('BluechipVoter', addresses.bluechipVoter, deployer);
    } else {
        VOTER = await hre.ethers.getContractAt('VoterV2_1', addresses.voter, deployer);
    }
    const poolLength = await VOTER.length();

    console.log(`Add gauge: ${scriptName}`);

    if (poolLength != PID) {
        console.log('INCORRECT PID!');
        console.log(`Contract expecting PID: ${poolLength}`);
        console.log(`You're trying to add PID: ${PID}`);
        return;
    }

    tx = await VOTER.createGauge(lpToken, mainchainGauge.gauge);
    await tx.wait();
    console.log("sideGauge created");
    const gauge = await VOTER.gaugeList(PID);
    console.log(`sideGauge address: ${gauge}`);
}

deployStrategy = async function (strategyName, strategyParams) {
    const STRATEGYContract = await ethers.getContractFactory(strategyName);
    const STRATEGY = await STRATEGYContract.deploy(...strategyParams);

    console.log("Strategy deployed to: %saddress/%s", hre.network.config.explorer, STRATEGY.address);
}

initStrategy = async function (mainchainGauge, deployer) {
    const GAUGE = await hre.ethers.getContractAt('GaugeV2', mainchainGauge.sideGauge, deployer);
    const tx = await GAUGE.initStrategy(mainchainGauge.strategy);
    tx.wait();
    console.log("GAUGE.initStrategy")
}


// exports.getGaugeToken = async function (gaugeAddress, deployer) {
//     if (gaugeAddress == '') {
//         return '';
//     }
//     const GAUGE = await hre.ethers.getContractAt('GaugeV2', gaugeAddress, deployer);
//     return await GAUGE.TOKEN();
// }