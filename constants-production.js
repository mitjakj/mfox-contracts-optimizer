module.exports = {
  BSC: {
    /* general */
    wbnb: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    usdt: '0x55d398326f99059fF775485246999027B3197955',
    usdc: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    busd: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 
    bsw: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1', 

    /* token */
    token: '0x967F4B82D8B7eD38f655CCf084150180c8165AC5', 
    proxyOFT: '', 
    veArt: '0x41c42D2AA40013962d1C184a47606e4718259ff8', 
    veToken: '0x6a07Cc5C621d8A1f8Ce25f449B49FaAD5dCBb8Ee', 

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

    /* UpgradableContracts admin */
    timelocker: '',
    proxyAdmin: '',

    /* LPs */

    /* farms */
    biswapFarm: '0xDbc1A13490deeF9c3C12b44FE77b503c1B061739',
    biswapRouter: '0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8',
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

    /* UpgradableContracts admin */
    timelocker: '',
    proxyAdmin: ''
  },

  POLYGON: {
    /* general */
    weth: '',
    usdt: '',
    usdc: '',

    /* LPs */

    /* swap */

    /* token */
    token: '0x967F4B82D8B7eD38f655CCf084150180c8165AC5', 
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
    lzChainId: 109,
    lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',

    /* UpgradableContracts admin */
    timelocker: '',
    proxyAdmin: ''
  }
};
