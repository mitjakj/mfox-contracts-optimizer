const constants = require("./constants.js");

module.exports = {

  /**
   * BSC - VOTER pools
   */
  BSC_VOTER: {
    // pool0: {
    //   lp: constants.BSC.foxLP_xxxx,
    //   gauge: '',
    // },
    // pool1: {
    //   lp: constants.BSC.foxLP_xxxx,
    //   gauge: '',
    // },
    // pool2: {
    //   // ARBITRUM pool
    //   lp: '', // Not in use in hardhat
    //   gauge: '',
    //   chainId: constants.ARBITRUM.lzChainId
    // },
  },

  /**
   * BSC - BLUECHIP pools
   */
  BSC_BLUECHIP: {
    // pool0: {
    //   lp: constants.BSC.foxLP_xxx,
    //   gauge: '',
    // },
    // pool1: {
    //   // ARBITRUM pool
    //   lp: '', // Not in use in hardhat
    //   gauge: '',
    //   chainId: constants.ARBITRUM.lzChainId
    // },
  },

  /**
   * ARBITRUM - VOTER pools
   */
  ARBITRUM_VOTER: {
    // pool0: {
    //   lp: constants.ARBITRUM.foxLP_xxxx,
    //   gauge: '',
    // },
    // pool1: {
    //   // NOT IN USE !!! -- failed deployment
    // },
  },

  /**
   * ARBITRUM - BLUECHIP pools
   */
  ARBITRUM_BLUECHIP: {
    // pool0: {
    //   lp: constants.ARBITRUM.foxLP_xxxx,
    //   gauge: '',
    // },
  }
};
