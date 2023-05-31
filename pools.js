const constants = require("./constants.js");

module.exports = {

  /**
   * BSC - VOTER pools
   */
  BSC_VOTER: {
    pool0: {
      // thenaGammaLP_aWUSDR_USDC -- NOT IN USE !!!
      gauge: '0x3c0efAe965fEa3fC1174A6832a4495eaa018a33d',
      strategy: '0x32f4cD86900D96fbe3B3A07D1a9Ea7d41ad5b2FA',
    },
    pool1: {
      // thenaGammaLP_ankrBNB_BNB
      gauge: '0x2ecBf1eEdcCE4CedbA622c8F4Fae9D902284F548',
      strategy: '0x8a111d4B89E8Fc4ef29eb0c74ACCb30b37e7165c',
    },
    pool2: {
      // thenaGammaLP_ETH_ankrETH
      gauge: '0xf9C4139BD5f46dfA9f6F499931f3AAFEf114a90a',
      strategy: '0xFD2F5f74a42D139A8c5Da9DA77E3a1ef48cbB5Fe',
    },
    pool3: {
      // thenaGammaLP_BNB_stkBNB
      gauge: '0x71106Baf646392b3281C582D83680dAf7102c323',
      strategy: '0x9D989258cd9854A917F550C11782DB855A576F21',
    },
    pool4: {
      // thenaGammaLP_HAY_USDT
      gauge: '0x6583906DEFA187a85143D7c2454B3e4Fa6093fE4',
      strategy: '0xe11580C9e10178b4C3e887305f383cCAD7eB6640',
    },
    pool5: {
      // thenaLP_USDT+_USD+
      gauge: '0x9DBb2a72aa2bdD33eeF9aDEeC4944299119d1F59',
      strategy: '0x29062aaFf47866d3C1C3747AC117a9f8fdB64BDC',
    },
    pool6: {
      // biswapLP_BSW_BNB
      gauge: '0xef3599F14eA60Ae482EC59686eD69fD0C6d44fE7',
      strategy: '0xABf7389830CF920F76d3e34b00e030A189588228',
    },
    // poolxxx: {
    //   // ARBITRUM USDC
    //   chainId: constants.ARBITRUM.lzChainId,
    //   gauge: '0x48EA80D75eC52D05fF540f43493387C0694636e1',
    //   sideGauge: '0x87f94dE1af55B2513928E835f060eA99128b57e8',
    //   strategy: '0xd46b174256159Af9dcd8541280AA5C6600fBBcc9',
    // },
  },

  /**
   * BSC - BLUECHIP pools
   */
  BSC_BLUECHIP: {
    pool0: {
      // biswapLP_DOGE_BNB
      gauge: '0xD0BaEBC952F1f330eDEECE38dbd2Ce7B26fE79a1',
      strategy: '0x0cC9c2cABD7ce8034912c392a23325d0e0F9cFB2',
      allocPts: 0,
    },
    // poolxxx: {
    //   // WETH
    //   chainId: constants.ARBITRUM.lzChainId,
    //   gauge: '0x805107EA43687dA0cb3aDe5f8C9fD10BE688b59C',
    //   sideGauge: '0xc1c6aca9C1581A6A4D5Ca0272e6a16617CDB66a6',
    //   strategy: '0x4d66E9727748E110382559889ea173a4E1a72C69',
    //   allocPts: 250,
    // },
  },

};
