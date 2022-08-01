require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth spice company include kiwi obscure gas'; 
let testAccounts = [
"0xed8e652410c926ac51a1878b242b42c4c63ad89e6a6b15e10974c4ca4fe66e7c",
"0x8e763e651c42008662f3e78bfbb835344828cbec52fc68f049295f552259ee5d",
"0x8ea64676ddff5307c6e464cff334f17d9e1ccdce6b93c288cfec0d288aa1cfc1",
"0x52f3fe1c4be04e2469acaa93277a80be76de0ec3151bd4630a8156c0f6d3d580",
"0x9116e27b353e90e86e24378162220d3a6ad4fa6e60c33524ce79abd9fb41d73d",
"0x42f11f92a558880492ca0f96e119b994f2df5026871ebb11ca3b65922df4bb8c",
"0xf1f065199cd9c1f7891150cb8cc3fca5ad0680adbbcfe87c9178ae76dcdfbad8",
"0x8f1e63e08a1789f46830bd71b24039771b37fdba624dabc37195c6a4531dd088",
"0x0cdb4b33988cab52fc4e203363cb8ffa1285e581b65a19197ca46e80cd1646cf",
"0x6973186780d2099e478a0afe86f9452b38e83ebf887a75a5a84cc9a413ef39e8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


