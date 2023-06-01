const hre = require("hardhat");
const addresses = hre.network.config.constants;
const inquirer = require('inquirer');

exports.processGauge = async function (scriptName, gauge, strategyName, lpToken, chainId, isBluechip, isLP, strategyParams, deployer) {
    console.log(gauge);

    const choices = ["Create-gauge"];
    if (chainId == 0) {
        choices.push("Deploy-strategy");
        choices.push("Verify-strategy");
        choices.push("Init-strategy");
    }

    const answer = await inquirer.prompt([{
        name: "action",
        type: "list",
        message: "Choose an action.",
        choices: choices
    }]);

    if (answer.action == "Create-gauge") {
        await createGauge(scriptName, chainId, lpToken, isBluechip, isLP, deployer);

    } else if (answer.action == "Deploy-strategy") {
        await deployStrategy(strategyName, strategyParams);

    } else if (answer.action == "Verify-strategy") {
        console.log("Not supported yet!");

    } else if (answer.action == "Init-strategy") {
        await initStrategy(gauge, deployer);
    }
}

createGauge = async function (scriptName, chainId, lpToken, isBluechip, isLP, deployer) {
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
    
    if (isBluechip) {
        tx = await VOTER.createGauge(lpToken, chainId);
    } else {
        tx = await VOTER.createGauge(lpToken, chainId, isLP);
    }

    await tx.wait();
    console.log("gauge created");
    const gauge = await VOTER.gaugeList(PID);
    console.log(`gauge address: ${gauge}`);
}

deployStrategy = async function (strategyName, strategyParams) {
    const STRATEGYContract = await ethers.getContractFactory(strategyName);
    const STRATEGY = await STRATEGYContract.deploy(...strategyParams);

    console.log("Strategy deployed to: %saddress/%s", hre.network.config.explorer, STRATEGY.address);
}

initStrategy = async function (gauge, deployer) {
    const GAUGE = await hre.ethers.getContractAt('GaugeV2', gauge.gauge, deployer);
    const tx = await GAUGE.initStrategy(gauge.strategy);
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