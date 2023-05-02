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
      // biswapLP_busd_wbnb
      token: constants.BSC.biswapLP_busd_wbnb,
      gauge: '0xa5cc506ac2e593fcbA08a1312E7377442D96E0CC',
      strategy: '0x902F420656F56526Ec9EED94D49109FEdc0781ec',
    },
    // pool3: {
    //   // ARBITRUM volatile_USDC_WETH
    //   gauge: '',
    //   chainId: constants.ARBITRUM.lzChainId
    // },
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
    // pool0: {
    //   // foxLP_stable_USDT_USDC
    //   gauge: '',
    //   allocPts: 500,
    // },
    // pool1: {
    //   // ARBITRUM stable_USDC_USDT
    //   gauge: '',
    //   chainId: constants.ARBITRUM.lzChainId,
    //   allocPts: 250,
    // },
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
