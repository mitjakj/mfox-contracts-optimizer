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
    bribeFactory: '0x3f637f23CB5CA08b62379C3B8b998902CaD93Dc2', 
    gaugeFactory: '0xf7d0dFaeA82079eF9aCd0B4E7002aCE94E6da6d8', 
    voter: '0x001332312c37A6068a34Eb3b9D5CF927887bDdC5', // !!!! VERIFY IN CODE HARD-CODED LZ ENDPOINT ADDRESS !!!!
    bluechipVoter: '0x763B6ebE3E571b0726C6E250845017Ec25d1453c',  // !!!! VERIFY IN CODE HARD-CODED LZ ENDPOINT ADDRESS !!!!
    bluechipFeeCollector: '0x83F55e1E85e2a06520C8f82Ec51C3D93D28F60B1', 
    rewardDistributorToken: '0x6701042c10c197318Cba7861b5521C5E25EBE617', 
    rewardDistributorUsdc: '', 
    minter: '0xda5fB473f0E31E01E977D32aCF30c2dD0cfDaA2f', 

    /* LZ */
    lzChainId: 102,
    lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',

    /* UpgradableContracts admin */
    timelocker: '0x5d0d83EF1C1f8217cbD0D3D0802E47B8Bcd72207',
    proxyAdmin: '0x326203DF24FFb5319bc87C7915c838F871d6C02D'
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
