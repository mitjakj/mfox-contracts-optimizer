const constants = require("./constants.js");

module.exports = {

  /**
   * BSC - VOTER pools
   */
  BSC_VOTER: {
    // pool0: {
    //   // thenaGammaLP_aWUSDR_USDC -- NOT IN USE !!!
    //   gauge: '0x3c0efAe965fEa3fC1174A6832a4495eaa018a33d',
    //   strategy: '0x32f4cD86900D96fbe3B3A07D1a9Ea7d41ad5b2FA',
    // },
    // pool1: {
    //   // thenaGammaLP_ankrBNB_BNB
    //   gauge: '0x2ecBf1eEdcCE4CedbA622c8F4Fae9D902284F548',
    //   strategy: '0x8a111d4B89E8Fc4ef29eb0c74ACCb30b37e7165c',
    // },
    // pool2: {
    //   // thenaGammaLP_ETH_ankrETH
    //   gauge: '0xf9C4139BD5f46dfA9f6F499931f3AAFEf114a90a',
    //   strategy: '0xFD2F5f74a42D139A8c5Da9DA77E3a1ef48cbB5Fe',
    // },
    // pool3: {
    //   // thenaGammaLP_BNB_stkBNB
    //   gauge: '0x71106Baf646392b3281C582D83680dAf7102c323',
    //   strategy: '0x9D989258cd9854A917F550C11782DB855A576F21',
    // },
    // pool4: {
    //   // thenaGammaLP_HAY_USDT
    //   gauge: '0x6583906DEFA187a85143D7c2454B3e4Fa6093fE4',
    //   strategy: '0xe11580C9e10178b4C3e887305f383cCAD7eB6640',
    // },
    // pool5: {
    //   // thenaLP_USDT+_USD+
    //   gauge: '0x9DBb2a72aa2bdD33eeF9aDEeC4944299119d1F59',
    //   strategy: '0x29062aaFf47866d3C1C3747AC117a9f8fdB64BDC',
    // },
    // pool6: {
    //   // biswapLP_BSW_BNB
    //   gauge: '0xef3599F14eA60Ae482EC59686eD69fD0C6d44fE7',
    //   strategy: '0xABf7389830CF920F76d3e34b00e030A189588228',
    // },

    pool7: {
      // magicfoxLP_FOX_USDT
      gauge: '0x79B06b74E6F8bC4d528909d0f9B97966723C2864',
      strategy: '0x4cea8eaA8Ff07aCC7ED30aeBd0D3Cb76FC61cD65',
    },
    pool8: {
      // magicfoxLP_SHROOM_USDT
      gauge: '0x7DBEac78f0991bEc96eEFBdF55F20bD725Ee9973',
      strategy: '0xe511F507ABb5351246335877fA5d2eb84F9ADA4e',
    },

    pool9: {
      // ARBITRUM ramsesLP_TAROT_ETH
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x455b01D5Eb677aD3CfC92B8104FE54F8c8B9dbF7',
      sideGauge: '0x486B68f2FE3dBb916DD93D993B289c83639E0328',
      strategy: '0x06848bdc1A3f3c4e55A7CB69D17Bd530E746fd5d',
    },
    pool10: {
      // ARBITRUM ramsesLP_YFX_USDC
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0xfACC917cE847C71cb24E05E96b21B3421F29b445',
      sideGauge: '0x19F46a58d3cC27abfA3772F9C85f067E3EdE8C7e',
      strategy: '0xE1D89b4B67b0b0d04f13f098857ca478Bb59F274',
    },
    pool11: {
      // ARBITRUM ramsesLP_FBA_USDC
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x8355A88e5c4be5f5A922ECb2ED6fc5946c3e0c88',
      sideGauge: '0x02407cb470bAE7d71153d305Fc970CE0A311E38f',
      strategy: '0x8Fb9349Ff97874eb9e8fDCa9Aab82Bb849E493b4',
    },
    pool12: {
      // ARBITRUM ramsesLP_ETH_RAM
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0xb84DDd2ec6036249Cbdb808027A2D9d059ff0e60',
      sideGauge: '0xB886D714258D50DEd8644d8332294beEbE12Bf38',
      strategy: '0xf18333E9112393d99cD810b6fc2e4e600A8639fd',
    },
    pool13: {
      // biswapLP_BSW_BNB
      gauge: '0xfa06d84C0717565C5510dB216FB1f1145c7D5c10',
      strategy: '0x8a2D512F80929d4e5B7962417929CEef9ea96427',
    },
    pool14: {
      // thenaGammaLP_ankrBNB_BNB
      gauge: '0xf8EC1b305696Be57dd52422BceB98a3dF36315D9',
      strategy: '0x9e3Df0E41FD8A3F5d0d6b7Ba056f2cF372135756',
    },
    pool15: {
      // thenaGammaLP_ETH_ankrETH
      gauge: '0x0021Be87510A5b27939F5107ef5c6Be7a4AaAEEF',
      strategy: '0x068248CE6C84B0c3798BDc98b8ddD6c03f272122',
    },
    pool16: {
      // thenaGammaLP_BNB_stkBNB
      gauge: '0x85bC2EeDaD49cC10546c97D80f02d618896d5AA6',
      strategy: '0x1Dc2A9c53f0c74b5A53f7529503f1040D5b51931',
    },
    pool17: {
      // thenaGammaLP_HAY_USDT
      gauge: '0xF64F4D51a7A7097Ed6E4ae4117Fdba80562d3E27',
      strategy: '0xf4879bDD1EAB244280C1Be1321c4d5063eEB9818',
    },
    pool18: {
      // thenaLP_USDT+_USD+
      gauge: '0x4A6f64119e7B71ABBa4731fcAc024B1307673272',
      strategy: '0x67F091C45B1DbDa4Da160735e1CdD2481821D1E1',
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
    // pool0: {
    //   // biswapLP_DOGE_BNB
    //   gauge: '0xD0BaEBC952F1f330eDEECE38dbd2Ce7B26fE79a1',
    //   strategy: '0x0cC9c2cABD7ce8034912c392a23325d0e0F9cFB2',
    //   allocPts: 0,
    // },
    pool1: {
      // ARBITRUM magicfoxLP_FOX_ETH
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x9DFe34b1265e91615030a3B61C42503d9a396473',
      sideGauge: '0x87C616fF929F0A9C9188FA4B24F10329eB5Ffd7E',
      strategy: '0x05841993decca09D51A979768459608f3920fa13',
      allocPts: 240,
    },
    pool2: {
      // ARBITRUM magicfoxLP_SHROOM_ETH
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x9407f326302487Cc71595fd884Bd564241264ED1',
      sideGauge: '0xA5442c626ae0327eA266e194331a3C0E94a6E841',
      strategy: '0xf2668bE902AF4023f019c84ea9De23634A057B8D',
      allocPts: 240,
    },
    pool3: {
      // biswapLP_DOGE_BNB
      gauge: '0x222E96F1cf6872464335e8ea2D1474Aa0eD1779B',
      strategy: '0xBA56fab7AA79342752198338b24fa58f7E8f9980',
      allocPts: 40,
    },
    pool4: {
      // POLYGON magicfoxLP_FOX_MATIC
      chainId: constants.POLYGON.lzChainId,
      gauge: '0x0947a4291C1aB3Da96Dc074393B58a804e5a61cE',
      sideGauge: '0x35935336cC5F663cc30B6F35202d00Db58d36b32',
      strategy: '0x05841993decca09D51A979768459608f3920fa13',
      allocPts: 240,
    },
    pool5: {
      // POLYGON magicfoxLP_SHROOM_MATIC
      chainId: constants.POLYGON.lzChainId,
      gauge: '0x3a6af8d736277F37Ecf64Bc44854AF70C92c3D36',
      sideGauge: '0x6974e75846875d8Dd9b4661F589b91791484A3A9',
      strategy: '0xf2668bE902AF4023f019c84ea9De23634A057B8D',
      allocPts: 240,
    },
  },

};
