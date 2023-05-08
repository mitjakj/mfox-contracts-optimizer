const constants = require("./constants.js");

module.exports = {

  /**
   * BSC - VOTER pools
   */
  BSC_VOTER: {
    pool0: {
      // single_PHIL
      token: constants.BSC.phil,
      gauge: '0x2AdC3185169D53ef4E447FC219A9f24CDD6FeA90',
      strategy: '0x0cf5af3Cf5A5192F9e1369Fc917E7c9Fae39aC9F',
    },
    pool1: {
      // biswapLP_busd_wbnb -- DEPRECATED
      token: constants.BSC.biswapLP_busd_wbnb,
      gauge: '0xa5cc506ac2e593fcbA08a1312E7377442D96E0CC',
      strategy: '0x902F420656F56526Ec9EED94D49109FEdc0781ec',
    },
    pool2: {
      // ARBITRUM USDC
      gauge: '0x48EA80D75eC52D05fF540f43493387C0694636e1',
      chainId: constants.ARBITRUM.lzChainId
    },
    pool3: {
      // biswapLP_busd_wbnb
      token: constants.BSC.biswapLP_busd_wbnb,
      gauge: '0x2ebf315d92FE35D657e5362a50A5ff8EdF8f5a88',
      strategy: '0xbC1eC6e545f5df5CD7C405d675039408b29C786D',
    },
  },

  /**
   * ARBITRUM - VOTER pools
   */
  ARBITRUM_VOTER: {
    // pool0: {
    //   // volatile_USDC_WETH
    //   gauge: '',
    // },
  },

  /**
   * BSC - BLUECHIP pools
   */
  BSC_BLUECHIP: {
    pool0: {
      // USDT
      token: constants.BSC.usdt,
      gauge: '0xe3882821C1A2d0302e8E7BF7E67e90A933ADfaE2',
      strategy: '0x3091d213Ce67e2B5454bB92C2b53b95C4755a47e',
      allocPts: 500,
    },
    pool1: {
      // BUSD
      token: constants.BSC.busd,
      gauge: '0xa8FAc4db44CA6879CC26dEfdBa71a5c727Ca6D99',
      strategy: '0x80f14FA8305D0cfD9cBfD2E7Aa1A61369d766695',
      allocPts: 250,
    },
    pool2: {
      // WETH
      gauge: '0x805107EA43687dA0cb3aDe5f8C9fD10BE688b59C',
      chainId: constants.ARBITRUM.lzChainId,
      allocPts: 250,
    },
  },

  /**
   * ARBITRUM - BLUECHIP pools
   */
  ARBITRUM_BLUECHIP: {
    // pool0: {
    //   // stable_USDC_USDT
    //   gauge: '',
    // },
  }
};
