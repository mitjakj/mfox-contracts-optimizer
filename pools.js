const constants = require("./constants.js");

module.exports = {

  /**
   * BSC - VOTER pools
   */
  BSC_VOTER: {
    pool0: {
      // single_PHIL
      gauge: '0x2AdC3185169D53ef4E447FC219A9f24CDD6FeA90',
      strategy: '0x0cf5af3Cf5A5192F9e1369Fc917E7c9Fae39aC9F',
    },
    pool1: {
      // biswapLP_busd_wbnb -- DEPRECATED
      gauge: '0xa5cc506ac2e593fcbA08a1312E7377442D96E0CC',
      strategy: '0x902F420656F56526Ec9EED94D49109FEdc0781ec',
    },
    pool2: {
      // ARBITRUM USDC
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x48EA80D75eC52D05fF540f43493387C0694636e1',
      sideGauge: '0x87f94dE1af55B2513928E835f060eA99128b57e8',
      strategy: '0xd46b174256159Af9dcd8541280AA5C6600fBBcc9',
    },
    pool3: {
      // biswapLP_busd_wbnb
      gauge: '0x2ebf315d92FE35D657e5362a50A5ff8EdF8f5a88',
      strategy: '0xbC1eC6e545f5df5CD7C405d675039408b29C786D',
    },
  },

  /**
   * BSC - BLUECHIP pools
   */
  BSC_BLUECHIP: {
    pool0: {
      // USDT
      gauge: '0xe3882821C1A2d0302e8E7BF7E67e90A933ADfaE2',
      strategy: '0x3091d213Ce67e2B5454bB92C2b53b95C4755a47e',
      allocPts: 0,
    },
    pool1: {
      // BUSD
      gauge: '0xa8FAc4db44CA6879CC26dEfdBa71a5c727Ca6D99',
      strategy: '0x80f14FA8305D0cfD9cBfD2E7Aa1A61369d766695',
      allocPts: 0,
    },
    pool2: {
      // WETH
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x805107EA43687dA0cb3aDe5f8C9fD10BE688b59C',
      sideGauge: '0xc1c6aca9C1581A6A4D5Ca0272e6a16617CDB66a6',
      strategy: '0x4d66E9727748E110382559889ea173a4E1a72C69',
      allocPts: 250,
    },
    pool3: {
      // USDT
      gauge: '0x3F26A0eb2E00356Edff8Bf34Ca60d0F52Dc62196',
      strategy: '0xF81F1774135826D2e2F31752E7efE9964F3bcd38',
      allocPts: 0,
    },
    pool4: {
      // BUSD
      gauge: '0x5351C7439d36dCC9995d0FF7D50acD461F65a4F8',
      strategy: '0x74045EA1dD2059a3cAE7D61443862E7465d00044',
      allocPts: 250,
    },
    pool5: {
      // USDT
      gauge: '0xBd712b91486177462666aDc5BF40b9291d1a9c17',
      strategy: '0xB23D1Edaf6873EC2d88f6Db425e4d6206481b118',
      allocPts: 500,
    },
    pool6: {
      // biswapLP_usdt_wbnb
      gauge: '0xba97E2Aa89f4dF3e114c77BC10Be6cE7f24bf953',
      strategy: '0x825De6d4e64aa8a3BA2e220e501a491Ac9e0f354',
      allocPts: 250,
    },
  },

};
