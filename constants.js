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
    proxyOFT: '0x6E5b15894106A5e2eA9d26ae45354AD004291eF5', 
    veArt: '0x41c42D2AA40013962d1C184a47606e4718259ff8', 
    veToken: '0x6a07Cc5C621d8A1f8Ce25f449B49FaAD5dCBb8Ee', 

    /* chainlink */
    chainlinkEpochController: '0xF4c0E6238cF8166Bcb11eCbC0519FCc47b086864',
    chainlinkWeeklyEmissionBridge_ARBITRUM: '0xa9b2382d501bb6bA6DC059314FE68Ea4f3a6Dc12',
    chainlinkWeeklyEmissionBridge_POLYGON: '0x3A6eA83967ADAA626Fd6A7119ABe199439f7085f',
    bluechipFeeCollector: '0xB09ee0d4C7AcD7936BFafBFbEa971d51ba8cef0d', 

    /* dao */
    bribeFactory: '0xe6929972bFae2B5dd951573c92df78963236Ae40', 
    gaugeFactory: '0xeA1fE843c043c42228B5E595Ccadc65268A1eBD1', 
    voter: '0x3Bb920C4875411C40981f6eb6959d4e169877A66', // !!!! VERIFY IN CODE HARD-CODED LZ ENDPOINT ADDRESS !!!!
    bluechipVoter: '0xaE0439eC64985D4165d12dDE7F514D092B4C0E23',  // !!!! VERIFY IN CODE HARD-CODED LZ ENDPOINT ADDRESS !!!!
    rewardDistributorToken: '0x49A479A56C79fb344919f695ec928083c5E994E1', 
    rewardDistributorUsdc: '0xEF42D535D15218a6753C605DbaCa81b9C809fde3', 
    minter: '0xddD34FF994cc9d1A9E3464fCA27AD0D4F01b564F', 

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

    /* token */
    token: '0xEB79217B2802dfD54b6135c19a6AA2164bBD3a51', 
    veToken: '0x441b9E685d55F4a9Ee8cF315269ba4fFefB0bc73', 

    /* chainlink */
    bluechipFeeCollector: '0xF2Fc2b5950f323ad90A210f9f1264392261d3Ae9', 

    /* dao */
    bribeFactory: '', 
    gaugeFactory: '0xf999009fF931749a0930B8db02C6Cd888c7DC5ED', 
    voter: '0x01A07719596713bE5aB1C3AeEA76e3f5fde0885d',
    bluechipVoter: '0xF995f72445B14ae8D56523C9A0dE3F03334BFE2C',
    lzReceiver: '0xD99aD5B67c79D4DF30Ff94c895961eCb7A46d1A3', 
    lzReceiverBluechip: '0xFf62D3b653036ab770A60b40C927B23D19192Ee5', 

    /* LZ */
    lzChainId: 110,
    lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',

    /* UpgradableContracts admin */
    timelocker: '',
    proxyAdmin: '',

    /* LPs */

    /* farms */
  },

  POLYGON: {
    /* general */
    weth: '',
    usdt: '',
    usdc: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',

    /* token */
    token: '0x967F4B82D8B7eD38f655CCf084150180c8165AC5', 
    veToken: '0xEB79217B2802dfD54b6135c19a6AA2164bBD3a51', 

    /* chainlink */
    bluechipFeeCollector: '0x3920D9E2bcF06B1Fd9BB5E2691ae5839914b392D', 

    /* dao */
    bribeFactory: '', 
    gaugeFactory: '0x2e3C958784f0caD0DA7DB3FfdB73c80aa9d8e034', 
    voter: '0x3F316559EB4f493C75638425106144261e20F3a2',
    bluechipVoter: '0xf999009fF931749a0930B8db02C6Cd888c7DC5ED',
    lzReceiver: '0x8e0B4Be5aeA18949700673402c9f7484B5880462', 
    lzReceiverBluechip: '0x01A07719596713bE5aB1C3AeEA76e3f5fde0885d', 

    /* LZ */
    lzChainId: 109,
    lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',

    /* UpgradableContracts admin */
    timelocker: '',
    proxyAdmin: '',

    /* LPs */

    /* farms */
  }
};
