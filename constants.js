module.exports = {
  BSC: {
    /* general */
    wbnb: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    usdt: '0x55d398326f99059fF775485246999027B3197955',
    usdc: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    phil: '0xB48837F0C05c0931c7B3DcFDceA0365396c39F3A', 
    busd: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 
    bsw: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1', 

    /* token */
    token: '0xFfc1C2b7f6D4a1b7DD9C349DB11242241EcD8Ddf', 
    proxyOFT: '0xB0Ed98f278E6f74302891dC77f4A1fC26e382b53', 
    veArt: '0xf28672391e37AB540BA53682d295847f036EE391', 
    veToken: '0x481d195135E9263fF5ee6596c19F4717922E3Bf2', 

    /* dao */
    bribeFactory: '0x5C45546bf5E914F78b2979D96968A1a6aa0d04b6', 
    gaugeFactory: '0x231e82f53139BB1d201f66B20266cD427112B1F5', 
    voter: '0x1888c948e0B5EC6c589666b67BefD412326bF199', // !!!! VERIFY IN CODE HARD-CODED LZ ENDPOINT ADDRESS !!!!
    bluechipVoter: '0x718De41f5Bd686d7063132b60b661ccD42C654BA',  // !!!! VERIFY IN CODE HARD-CODED LZ ENDPOINT ADDRESS !!!!
    bluechipFeeCollector: '', 
    rewardDistributorToken: '0xb0E20b19DE6f9Af367060D89FCFFA64D99eE7325', 
    rewardDistributorUsdc: '', 
    minter: '0x4B57807C90eeEC43D07Ccac4c048F3d910620Bd9', 

    /* LZ */
    lzChainId: 102,
    lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',

    /* UpgradableContracts admin */
    timelocker: '0x5d0d83EF1C1f8217cbD0D3D0802E47B8Bcd72207',
    proxyAdmin: '0x326203DF24FFb5319bc87C7915c838F871d6C02D',

    /* LPs */
    biswapLP_busd_wbnb: '0xaCAac9311b0096E04Dfe96b6D87dec867d3883Dc',

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
    token: '0x04aAd814f9f99aa12B5fD3fAf20a544A07C4d8f8', 
    veToken: '0x8FdFEBef76c06Fe88BB3752B77966421c85c93ad', 

    /* dao */
    bribeFactory: '0x947459c46c6Db860a286eA4840ef38ff2b967333', 
    gaugeFactory: '0x433275945D62171F470ABA021F04AbE898B0003e', 
    voter: '0xC334eF762dEBb9C7745099754A39e52403096BEd',
    bluechipVoter: '0x8fBF906A5cCcA19236b5Ca983F46672CEA3f4dB3',
    bluechipFeeCollector: '', 
    lzReceiver: '0x37929B0786fc1Fb5207C52656Aac79C95C39C8ff', 
    lzReceiverBluechip: '0xa397e80DFcecFd182EDd18168a8A6bfD012706DE', 

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
    token: '', 
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
