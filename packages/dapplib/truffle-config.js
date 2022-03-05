require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture stone renew rifle arrow journey clog army genuine'; 
let testAccounts = [
"0xf9cf71106b8b86d090aa6f45a27ce6a357494790b4724fe217c5deefb2d5776c",
"0xf17cc9daf202b5650b451ec8658a629624b0eef65adeb741ac7fdbb2fc17f31a",
"0x09581d16041b8d0990f408ed39ff91eb1afc9b162179d6a010dc943952c5db7e",
"0xd34dc720ea26b8bc00b92d9f7a0afacc0cc064bd6d62439743d55f1d1037932c",
"0x119e938dc6aadef74fe4e82617ab379e1c2107c40734c46932ae06035e55e6a5",
"0x1554eefc67a4a1b1c8c558ff2113e20f09e70524840ac010fc93bd19aebb6754",
"0x876950c02053fe35c79f28995a4bd55f974dcb09abc5965c628bd3e105d2d757",
"0x5a0034761d70feae757cdd135cd4e07b448016cd8199c4b7e44d312dfb4fc9ed",
"0x4fcdd49179e69c41386c78f83ff34ef88b4543121f344c1a0435e951f3e5d151",
"0x68a9db462b1664fa9cb7603360bdd1b0db7c79b33c9773c7f21916a7ef253feb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

