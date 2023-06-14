const constants = require("./constants.js");

module.exports = {

  /**
   * BSC - VOTER pools
   */
  BSC_VOTER: {
    // pool0: {
    //   // thenaGammaLP_aWUSDR_USDC -- NOT IN USE !!!
    //   gauge: '0x3c0efAe965fEa3fC1174A6832a4495eaa018a33d',
    //   strategy: '0x32f4cD86900D96fbe3B3A07D1a9Ea7d41ad5b2FA',
    // },
    // pool1: {
    //   // thenaGammaLP_ankrBNB_BNB
    //   gauge: '0x2ecBf1eEdcCE4CedbA622c8F4Fae9D902284F548',
    //   strategy: '0x8a111d4B89E8Fc4ef29eb0c74ACCb30b37e7165c',
    // },
    // pool2: {
    //   // thenaGammaLP_ETH_ankrETH
    //   gauge: '0xf9C4139BD5f46dfA9f6F499931f3AAFEf114a90a',
    //   strategy: '0xFD2F5f74a42D139A8c5Da9DA77E3a1ef48cbB5Fe',
    // },
    // pool3: {
    //   // thenaGammaLP_BNB_stkBNB
    //   gauge: '0x71106Baf646392b3281C582D83680dAf7102c323',
    //   strategy: '0x9D989258cd9854A917F550C11782DB855A576F21',
    // },
    // pool4: {
    //   // thenaGammaLP_HAY_USDT
    //   gauge: '0x6583906DEFA187a85143D7c2454B3e4Fa6093fE4',
    //   strategy: '0xe11580C9e10178b4C3e887305f383cCAD7eB6640',
    // },
    // pool5: {
    //   // thenaLP_USDT+_USD+
    //   gauge: '0x9DBb2a72aa2bdD33eeF9aDEeC4944299119d1F59',
    //   strategy: '0x29062aaFf47866d3C1C3747AC117a9f8fdB64BDC',
    // },
    // pool6: {
    //   // biswapLP_BSW_BNB
    //   gauge: '0xef3599F14eA60Ae482EC59686eD69fD0C6d44fE7',
    //   strategy: '0xABf7389830CF920F76d3e34b00e030A189588228',
    // },

    pool7: {
      // magicfoxLP_FOX_USDT
      gauge: '0x79B06b74E6F8bC4d528909d0f9B97966723C2864',
      strategy: '0x4cea8eaA8Ff07aCC7ED30aeBd0D3Cb76FC61cD65',
    },
    pool8: {
      // magicfoxLP_SHROOM_USDT
      gauge: '0x7DBEac78f0991bEc96eEFBdF55F20bD725Ee9973',
      strategy: '0xe511F507ABb5351246335877fA5d2eb84F9ADA4e',
    },

    pool9: {
      // ARBITRUM ramsesLP_TAROT_ETH
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x455b01D5Eb677aD3CfC92B8104FE54F8c8B9dbF7',
      sideGauge: '0x486B68f2FE3dBb916DD93D993B289c83639E0328',
      strategy: '0x06848bdc1A3f3c4e55A7CB69D17Bd530E746fd5d',
    },
    pool10: {
      // ARBITRUM ramsesLP_YFX_USDC
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0xfACC917cE847C71cb24E05E96b21B3421F29b445',
      sideGauge: '0x19F46a58d3cC27abfA3772F9C85f067E3EdE8C7e',
      strategy: '0xE1D89b4B67b0b0d04f13f098857ca478Bb59F274',
    },
    pool11: {
      // ARBITRUM ramsesLP_FBA_USDC
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x8355A88e5c4be5f5A922ECb2ED6fc5946c3e0c88',
      sideGauge: '0x02407cb470bAE7d71153d305Fc970CE0A311E38f',
      strategy: '0x8Fb9349Ff97874eb9e8fDCa9Aab82Bb849E493b4',
    },
    pool12: {
      // ARBITRUM ramsesLP_ETH_RAM
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0xb84DDd2ec6036249Cbdb808027A2D9d059ff0e60',
      sideGauge: '0xB886D714258D50DEd8644d8332294beEbE12Bf38',
      strategy: '0xf18333E9112393d99cD810b6fc2e4e600A8639fd',
    },
    pool13: {
      // biswapLP_BSW_BNB
      gauge: '0xfa06d84C0717565C5510dB216FB1f1145c7D5c10',
      strategy: '0x8a2D512F80929d4e5B7962417929CEef9ea96427',
    },
    pool14: {
      // thenaGammaLP_ankrBNB_BNB
      gauge: '0xf8EC1b305696Be57dd52422BceB98a3dF36315D9',
      strategy: '0x9e3Df0E41FD8A3F5d0d6b7Ba056f2cF372135756',
    },
    pool15: {
      // thenaGammaLP_ETH_ankrETH
      gauge: '0x0021Be87510A5b27939F5107ef5c6Be7a4AaAEEF',
      strategy: '0x068248CE6C84B0c3798BDc98b8ddD6c03f272122',
    },
    pool16: {
      // thenaGammaLP_BNB_stkBNB
      gauge: '0x85bC2EeDaD49cC10546c97D80f02d618896d5AA6',
      strategy: '0x1Dc2A9c53f0c74b5A53f7529503f1040D5b51931',
    },
    pool17: {
      // thenaGammaLP_HAY_USDT
      gauge: '0xF64F4D51a7A7097Ed6E4ae4117Fdba80562d3E27',
      strategy: '0xf4879bDD1EAB244280C1Be1321c4d5063eEB9818',
    },
    pool18: {
      // thenaLP_USDT+_USD+
      gauge: '0x4A6f64119e7B71ABBa4731fcAc024B1307673272',
      strategy: '0x67F091C45B1DbDa4Da160735e1CdD2481821D1E1',
    },
    pool19: {
      // pcs-cake-syrup-csix
      gauge: '0x2ED78BB80D738a5C39A26BA7831D47275065b52f',
      strategy: '0x7A367986f2146e6295E52e321dd973E4447bb2FE',
    },
    pool20: {
      // pcsLP-LTC-BNB
      gauge: '0x3EdA393C0f8120380cC810eeADAd0248412058DE',
      strategy: '0x830ce165C0d71a0f10B18d579D1a4Cf2a687FF8a',
    },
    pool21: {
      // pcsLP-XVS-BNB
      gauge: '0xAe28CB1B7150b53541C7b937f02D81b350229a63',
      strategy: '0x60aF05Ad4a42d30cBFcd7fA21138434E823514cF',
    },
    pool22: {
      // pcsLP-TWT-BNB
      gauge: '0x490CbA846b6D18AB00C0058BE1FEEf7DFD5FD090',
      strategy: '0x510D7e7c280f9D89b5a632450e87C843E0286B78',
    },
    pool23: {
      // ampleLP_AMPLE_BNB
      gauge: '0x722D6bb7855BA231D06D6F6190EbD19429014a4b',
      strategy: '0x07E144c87349F30e73AEECb416358e6C72F34a1D',
    },
    pool24: {
      // ample
      gauge: '0xcd3efEE15E92B2e7B75a4802865A844C369EfD28',
      strategy: '0x19F38fcfA31c1985b8FB5fb086c2e9B312990979',
    },
    pool25: {
      // ARBITRUM solizardLP_vAMM_SLIZ_WETH
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0xbF335abA5476F3c86436afb53062851151F207F0',
      sideGauge: '0x6f41e232708Ec2d40A62F5B1e1929Dc4186F3ADf',
      strategy: '0x394bD137c5796a10BbF236bF2b9ed0bc3CA34f48',
    },
    pool26: {
      // ARBITRUM solizardLP_sAMM_nfUSDchr_USDC -- !!! DEPRECATED !!!
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x017611c8fB276422b38A587a3aa8e4502eA395aE',
      sideGauge: '0x01E308AE47b14dAa085FC758e14Cb07c7CDDDdD3',
      strategy: '0x03fcD3B84Aa33F6725D2E0Af19E14aA80AC8667d',
    },
    pool27: {
      // ARBITRUM soluneaLP_vAMM_SLNA_WETH
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x3125369706dd0fe682e1f56f9366402D75dcE93c',
      sideGauge: '0x54d468C5754Cf25edF9908BB5d94B46207DDC346',
      strategy: '0xDa6188fBf5f1fBa231B2Be5e210fAEBA3a03C9f2',
    },
    pool28: {
      // ARBITRUM soluneaLP_vAMM_WETH_ARB
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x7D8Bc4ed64681CC35705F0bB44653F4767420975',
      sideGauge: '0x158B2Cd4ec99Ac91A7D0239E55A3A93E043609F8',
      strategy: '0x501a5919A38C0E9c582049a0e4D7Baa7f9eb53A6',
    },
    pool29: {
      // biswapLP_BSW_BNB
      gauge: '0xf134D293633C5dB224B7BA0e67499Eb3961D81Bc',
      strategy: '0xd4deB9BFdD151AA255f2c90208eEf5A45D9CEBF0',
    },
    pool30: {
      // biswapLP_XRP_BNB
      gauge: '0xCA36855E13f8BB6B1978694fD2B353F4011A7318',
      strategy: '0x64C73EE2A1c8ef75d9B2d71d49f62b3faC9B2689',
    },
    pool31: {
      // biswapLP_ADA_BNB
      gauge: '0x969ec931CdDb9b9f9dbb9e891E6A8671A5BC8d63',
      strategy: '0xBd22B2C0A073021BE39De58271Fc0fc6fF6FADb2',
    },
    pool32: {
      // biswapLP_BNB_LINK
      gauge: '0x6B45b6251fF45a4BbaC9D7ee09191bF07b24EA08',
      strategy: '0x9eD98dc9a0225A31A3D0aE2236Ba094b521F7250',
    },
    pool33: {
      // thenaLP_vAMM_fBOMB_WBNB
      gauge: '0x0F5ae657Ad779A52c1184fE0C7124F03a94D357a',
      strategy: '0x35d347C6608aECF50bc0A57a8d930a4e1FdDdc61',
    },
    pool34: {
      // pcsLP_PEPRO_BNB
      gauge: '0x2e14CDfD56384BCe342a92bb4be78B392bD85BA0',
      strategy: '0x6709dB2e9AD575d9e96c12BDB769b85953487045',
    },
    pool35: {
      // pcsLP_HK_BNB
      gauge: '0x0D78073D3B247d490C99233819b2221A25fAe89B',
      strategy: '0x2514E40F89944DF8075F93F6D7Cfd195dE4b26A9',
    },
    pool36: {
      // pcsLP_PWAGMI_BNB
      gauge: '0x92576eAd24E7F86691393aC38fA058aAdec9eE7c',
      strategy: '0x5ae225D16D75b055Df001993f912F1C2cf97585E',
    },
    pool37: {
      // pcsLP_PEPET_BNB
      gauge: '0xdC1df5E5F1B039Be590438b6d8171eE6f412Eb91',
      strategy: '0xa99598aE8c746c97d2250C16f8Fd788545D29251',
    },
    pool38: {
      // thenaLP_vAMM_USDT_FEAR
      gauge: '0xD18Cc29C3A068D112aFAdD5b34CA291eB7cf72ba',
      strategy: '0xA6A9690895917f8431F419Fc3aDe891B467C7e55',
    },
    pool39: {
      // thenaLP_sAMM_MAI_FRAX
      gauge: '0xd1a1fc918Ad1bbCD037Aa5b4a3B657cfDbCbe667',
      strategy: '0xB452715139248efCd593b27955C535aeC9729D1e',
    },
    pool40: {
      // thenaLP_vAMM_XCAD_BUSD
      gauge: '0x260e26e1a0B6d0569d07fB0b47f23bc96A881c01',
      strategy: '0xD08f5DD3a4630098f739a350d6B3eA322Cc512B7',
    },
    pool41: {
      // thenaLP_sAMM_DOLA_CUSD
      gauge: '0x0C525B5408Ef5312851D2E3E34A4165d17982176',
      strategy: '0xafA86E8a7De07109De3c88119b042929bF922C01',
    },
    pool42: {
      // thenaLP_sAMM_ETH_frxETH
      gauge: '0xC62115039D1fa6beB9100b130412Ccff0d73C63c',
      strategy: '0x57bBe6c361B55F8418a1049679DE699b870594Fb',
    },
    pool43: {
      // thenaLP_vAMM_WBNB_BIFI
      gauge: '0x08C9EDabF52fE0cBE6A54f9F71143272B1260233',
      strategy: '0x2154590d8e7EDCEC14547e869B7deF1595Ee0259',
    },
    pool44: {
      // thenaGammaLP_aWBNB_THE
      gauge: '0x768fA1bb0d5FEAce5FB4c07Ef1B5be9E2b3F8e39',
      strategy: '0x354a9cc17afC459997c1f31d81f7712cC7Db7733',
    },
    pool45: {
      // ARBITRUM ramsesLP_ETH_RAM
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0xF15c7F32a815C9698BD1c04ED1Abf295D141A70d',
      sideGauge: '0xd88043d2b9Ee6B1073cCbf72dC6aeFc6741607a0',
      strategy: '0xdc75e9Be94950acb5fea2216D616c525E86e054E',
    },
    pool46: {
      // pcsLP_CAKE_BNB
      gauge: '0xfF269A44D7eD7a27067017faD723BC7a768D66a8',
      strategy: '0x0BB99eD12D533D0093c14895865eD77063Bc3171',
    },
    pool47: {
      // ARBITRUM solizardLP_sAMM_nfUSDchr_USDC
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0xC2b4b9e20D08de951BfeCCD272fB63584A7a0312',
      sideGauge: '0x2Ce02fdB03EF85045D7D205E7876d42D15A9eba8',
      strategy: '0x1cb3EA512bF6EA8672C7385dc66Be007654FA683',
    },
    pool48: {
      // babyswap_BABY
      gauge: '0x2f4c5725e08cCDCd576d394c214dFAB8ec5dD628',
      strategy: '0xFAa01F2a5f517Ed0512aD82b970549ff4d4D4078',
    },
    pool49: {
      // ARBITRUM arxLP_ARX_WETH
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x6D5DBAdBdeA0387A3891D5e47af4dFeEDAf7651D',
      sideGauge: '0x61648Fe18cEA28E0d0A03Be0feb5248FC5Db97C1',
      strategy: '0x679b407237302fba501Dd304EA4509BA606f5f6A',
    },
    pool50: {
      // ARBITRUM arxLP_ARX_USDC
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0xCA1eC32690c796964d43dF3eE64D8DbF42FEaf26',
      sideGauge: '0x32D3705950BC4f41B7b4fD878AFE6929738e7B1b',
      strategy: '0x57da5186332f9a26758bd278248cdcAbc7Fc2f72',
    },
    pool51: {
      // biswapLP_ETH_BTCB
      gauge: '0xDB8aA2880888fF0D5AbA2ee29f855c4888346d18',
      strategy: '0xcc2aBCdfEdc04fAddA5e01340ec9413fea200816',
    },
    pool52: {
      // biswapLP_ETH_USDT
      gauge: '0xED02754bABdBc659f50f49a4189dDC6Ee3Cc2852',
      strategy: '0x8c37D32BDf1cdFdF8b2bdf3D3ca03ff729CE3b70',
    },
    pool53: {
      // biswapLP_BTCB_WBNB
      gauge: '0x2c22080c98A1c655D068EA479E329eD54bdE70F2',
      strategy: '0xAcd7DEa27fb6373112023E584f52CC58c7A0F43d',
    },
    pool54: {
      // biswapLP_WBNB_BUSD
      gauge: '0xf605435921Aaa65ADEE9675638f371e7BB1b1dc1',
      strategy: '0xE0Ac4C6FAb0eA238e46a68b2a844D75054E209aE',
    },
    pool55: {
      // thenaLP_sAMM_DOLA_FRAX
      gauge: '0x718b3cDB4e61Fa412Aa3De30FD5863DAab6D53F8',
      strategy: '0x1bf575EbADACc8D13452560421162d6c5adc324D',
    },
    pool56: {
      // thenaGammaLP_aBNBx_WBNB
      gauge: '0x4e5CCC55539b180A29d87BbC9aFe4Bcc15FF095C',
      strategy: '0x07ccDf5dE4b6Beed22C89ca781960EAeE038D58D',
    },
    pool57: {
      // thenaGammaLP_aUSDT_WBNB -- FAILED
      gauge: '0x6252AAfc9B50bcE565C7987A31819C23747dF08C',
      strategy: '0x7e6412a01994dF4d9A335720c5104b870941FD0b',
    },
    pool58: {
      // thenaGammaLP_aETH_WBNB
      gauge: '0xC018ae415E3305eA66cE73D9a7162BE4AA76Ac6e',
      strategy: '0xeb9aA8B5eFAB97066049d43e192a8D150A805ca2',
    },
    pool59: {
      // POLYGON 
      chainId: constants.POLYGON.lzChainId,
      gauge: '0xFb228F751B6593b34c542AF5630f2B9C0111b0aF',
      sideGauge: '0x8C267A66aa49359Be643dEE6C672387b01B9b72a',
      strategy: '0x9D9E2001F659fc219FF5AeE8304D8728f0f2eFBe',
    },
    pool60: {
      // ARBITRUM chronosLP_sAMM_USDT_USDC
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x56Ee7a9469882042e1Fa75eF3007aa8b66044225',
      sideGauge: '0xd37966c16bA933b740EA7a0B7F742eBFF649E32B',
      strategy: '0x6cC88C2cCf1dbD7641f8EC814FddCA2138BDB7ad',
    },
    pool61: {
      // ARBITRUM chronosLP_vAMM_WETH_USDC
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x78882e6Bd263bA7AFB6F0ecAefdD8dC4A1D13e1a',
      sideGauge: '0x69A7E3c4Ea2A9E6cC3ffFD3836eB0c222Ed782E0',
      strategy: '0xCb70D502D5AB6c7C42e7666750a5d4F132EF9a83',
    },
    pool62: {
      // ARBITRUM chronosLP_vAMM_WBTC_WETH
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x3d203fc21bc0e4295780496b0FA84740E99E46a0',
      sideGauge: '',
      strategy: '',
    },
    pool63: {
      // ARBITRUM chronosLP_vAMM_ARB_USDC
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0xD80Aa5dfF44D879547dFcfB0B25Ca194Ff4d26AA',
      sideGauge: '',
      strategy: '',
    },

    // poolxxx: {
    //   // ARBITRUM USDC
    //   chainId: constants.ARBITRUM.lzChainId,
    //   gauge: '0x48EA80D75eC52D05fF540f43493387C0694636e1',
    //   sideGauge: '0x87f94dE1af55B2513928E835f060eA99128b57e8',
    //   strategy: '0xd46b174256159Af9dcd8541280AA5C6600fBBcc9',
    // },
  },

  /**
   * BSC - BLUECHIP pools
   */
  BSC_BLUECHIP: {
    // pool0: {
    //   // biswapLP_DOGE_BNB
    //   gauge: '0xD0BaEBC952F1f330eDEECE38dbd2Ce7B26fE79a1',
    //   strategy: '0x0cC9c2cABD7ce8034912c392a23325d0e0F9cFB2',
    //   allocPts: 0,
    // },
    pool1: {
      // ARBITRUM magicfoxLP_FOX_ETH
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x9DFe34b1265e91615030a3B61C42503d9a396473',
      sideGauge: '0x87C616fF929F0A9C9188FA4B24F10329eB5Ffd7E',
      strategy: '0x05841993decca09D51A979768459608f3920fa13',
      allocPts: 0,
    },
    pool2: {
      // ARBITRUM magicfoxLP_SHROOM_ETH
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0x9407f326302487Cc71595fd884Bd564241264ED1',
      sideGauge: '0xA5442c626ae0327eA266e194331a3C0E94a6E841',
      strategy: '0xf2668bE902AF4023f019c84ea9De23634A057B8D',
      allocPts: 0,
    },
    pool3: {
      // biswapLP_DOGE_BNB
      gauge: '0x222E96F1cf6872464335e8ea2D1474Aa0eD1779B',
      strategy: '0xBA56fab7AA79342752198338b24fa58f7E8f9980',
      allocPts: 10,
    },
    pool4: {
      // POLYGON magicfoxLP_FOX_MATIC
      chainId: constants.POLYGON.lzChainId,
      gauge: '0x0947a4291C1aB3Da96Dc074393B58a804e5a61cE',
      sideGauge: '0x35935336cC5F663cc30B6F35202d00Db58d36b32',
      strategy: '0x05841993decca09D51A979768459608f3920fa13',
      allocPts: 0,
    },
    pool5: {
      // POLYGON magicfoxLP_SHROOM_MATIC
      chainId: constants.POLYGON.lzChainId,
      gauge: '0x3a6af8d736277F37Ecf64Bc44854AF70C92c3D36',
      sideGauge: '0x6974e75846875d8Dd9b4661F589b91791484A3A9',
      strategy: '0xf2668bE902AF4023f019c84ea9De23634A057B8D',
      allocPts: 0,
    },
    pool6: {
      // magicfoxLP_SHROOM_WBNB
      gauge: '0x36A2a8B33e25Fcb8BaF98A72656162C160805982',
      strategy: '0xE37192a4AfB7F220A25ed89448CD70aF42103CC7',
      allocPts: 580,
    },
    pool7: {
      // ARBITRUM magicfoxLP_sAMM_wstETH_WETH
      chainId: constants.ARBITRUM.lzChainId,
      gauge: '0xaa3d6861aC71B3B5165cAdb2f0cFF8DC0FbAa43F',
      sideGauge: '0x78535e9211B1EF688FD3664b8A9Fb26d5dC7E64D',
      strategy: '0xa8446B759f9B4312dfa924C02c508a3b7330D302',
      allocPts: 50,
    },
    pool8: {
      // biswapLP_USDT_BUSD
      gauge: '0x5a474486f87ae7fCd0Cce2bb61103a01d1F6B255',
      strategy: '0x38A1e28bfDb6fa90d3dFfa9d06D1976f48321e47',
      allocPts: 120,
    },
    pool9: {
      // biswapLP_USDT_BTCB
      gauge: '0x1d6F6F3f90071C702aE4B56989695c2D657002c2',
      strategy: '0x7c36D8d374693e811Fa629DcFC65778E1B33ef20',
      allocPts: 120,
    },
    pool10: {
      // thenaGammaLP_aUSDT_USDC
      gauge: '0x755095f95700eD9edfe361FE32acf8e35a246DCC',
      strategy: '0xf34135A04AbE2a666Dd0ca369d93dcCeDCc042cB',
      allocPts: 120,
    },
  },

};
