module.exports = {
  BSC: {
    /* general */
    weth: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    usdt: '0x55d398326f99059fF775485246999027B3197955',
    usdc: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',

    /* LPs */

    /* swap */

    /* token */
    token: '0x827D4BE081b7bB2a1e3338d56F4197f31DfD6250', 
    proxyOFT: '0x12C71AB8e05485fe44C4a146821F47319766ce5d', 
    veArt: '0xFA3087288927d755cb8a3d3B00175Acd3EAA9871', 
    veToken: '0xD588e41f409B0062647EaBB6cC09e35D6d93AC70', 

    /* dao */
    bribeFactory: '', 
    gaugeFactory: '', 
    voter: '', // !!!! VERIFY IN CODE HARD-CODED LZ ENDPOINT ADDRESS !!!!
    bluechipVoter: '',  // !!!! VERIFY IN CODE HARD-CODED LZ ENDPOINT ADDRESS !!!!
    bluechipFeeCollector: '', 
    rewardDistributorToken: '', 
    rewardDistributorUsdc: '', 
    minter: '', 

    /* LZ */
    lzChainId: 102,
    lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',
  },

  ARBITRUM: {
    /* general */
    weth: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    usdt: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    usdc: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',

    /* LPs */

    /* swap */

    /* token */
    token: '', 
    veArt: '', 
    veToken: '', 

    /* dao */
    bribeFactory: '', 
    gaugeFactory: '', 
    voter: '',
    bluechipVoter: '',
    bluechipFeeCollector: '', 
    lzReceiver: '', 
    lzReceiverBluechip: '', 

    /* LZ */
    lzChainId: 110,
    lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',
  }
};
