module.exports = {
  BSC: {
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

    /* general */
    wbnb: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    usdt: '0x55d398326f99059fF775485246999027B3197955',
    usdc: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    busd: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 
    bsw: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1', 
    the: '0xF4C8E32EaDEC4BFe97E0F595AdD0f4450a863a11',
    frax: '0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40',
    babydoge: '0xc748673057861a797275CD8A068AbB95A902e8de',
    wUSDR: '0x2952beb1326acCbB5243725bd4Da2fC937BCa087',
    ankrBNB: '0x52F24a5e03aee338Da5fd9Df68D2b6FAe1178827',
    weth: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    ankrETH: '0xe05A08226c49b636ACf99c40Da8DC6aF83CE5bB3',
    stkBNB: '0xc2E9d07F66A89c44062459A47a0D2Dc038E4fb16',
    hay: '0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5',
    'usdt+': '0x5335E87930b410b8C5BB4D43c3360ACa15ec0C8C',
    'usd+': '0xe80772Eaf6e2E18B651F160Bc9158b2A5caFCA65',
    doge: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',

    /* LPs */
    thenaGammaLP_aWUSDR_USDC: '0x339685503dD534D27ce4a064314c2E5c7144aa92', 
    thenaGammaLP_aWUSDR_USDC_GAUGE: '0xaD11A9034fB8657ebBB2FdD75f7254C2805F4981', 
    thenaGammaLP_ankrBNB_BNB: '0x754Fd74e22255780a58F125300008781D8318e3A', 
    thenaGammaLP_ankrBNB_BNB_GAUGE: '0x8782fA8e2C973f7Cc19ce28DDf549fD9114F69dA', 
    thenaGammaLP_ETH_ankrETH: '0x5c15842fCC12313C4f94dFB6fad1Af3f989D33e9', 
    thenaGammaLP_ETH_ankrETH_GAUGE: '0x5F8a5C3C094C6eb31d6b99B921dbB34a5151b352', 
    thenaGammaLP_BNB_stkBNB: '0x86b481fCe116DCd01fBeBb963f1358bcc466668C', 
    thenaGammaLP_BNB_stkBNB_GAUGE: '0x796472D20654D8751B481999204B623B264b004E', 
    thenaGammaLP_HAY_USDT: '0xDf0B9b59E92A2554dEdB6F6F4AF6918d79DD54c4', 
    thenaGammaLP_HAY_USDT_GAUGE: '0x2da06b6338f3d503cb2f0ee0e66c8e98a6d8001c', 
    'thenaLP_USDT+_USD+': '0x1561D9618dB2Dcfe954f5D51f4381fa99C8E5689', 
    'thenaLP_USDT+_USD+_GAUGE': '0x3877c2C3D75aE80f2Ed8E9d4d68e3C1BFc77e5A6', 
    biswapLP_BSW_BNB: '0x46492B26639Df0cda9b2769429845cb991591E0A',
    biswapLP_DOGE_BNB: '0x1eF315fa08e0E1B116D97E3dFE0aF292Ed8b7f02',

    /* farms */
    biswapFarm: '0xDbc1A13490deeF9c3C12b44FE77b503c1B061739',
    biswapRouter: '0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8',

    thenaUniProxy: '0x6B3d98406779DDca311E6C43553773207b506Fa6',
    thenaSwapRouter: '0x327Dd3208f0bCF590A66110aCB6e5e6941A4EfA0',
    thenaRouterV2: '0xd4ae6eCA985340Dd434D38F470aCCce4DC78D109',
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
