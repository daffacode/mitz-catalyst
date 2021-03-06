"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerForNetwork = void 0;
const address_1 = require("web3x/address");
const eth_1 = require("web3x/eth");
const providers_1 = require("web3x/providers");
const Catalyst_1 = require("./Catalyst");
const networks = {
    ropsten: {
        wss: 'wss://ropsten.infura.io/ws/v3/2c902c2e3b8947d3b34bba7ca48635fc',
        http: 'https://ropsten.infura.io/v3/2c902c2e3b8947d3b34bba7ca48635fc',
        contracts: {
            catalyst: {
                address: '0xadd085f2318e9678bbb18b3e0711328f902b374b',
                class: Catalyst_1.Catalyst
            }
        }
    },
    harmony_testnet: {
        wss: 'wss://api.s0.b.hmny.io',
        http: 'https://api.s0.b.hmny.io',
        contracts: {
            catalyst: {
                address: '0x2a29a82c4e1ff6df3e4cb47297bd02558cd69567',
                class: Catalyst_1.Catalyst
            }
        }
    },
    mainnet: {
        wss: 'wss://mainnet.infura.io/ws/v3/2c902c2e3b8947d3b34bba7ca48635fc',
        http: 'https://mainnet.infura.io/v3/2c902c2e3b8947d3b34bba7ca48635fc',
        contracts: {
            catalyst: {
                address: '0x4a2f10076101650f40342885b99b6b101d83c486',
                class: Catalyst_1.Catalyst
            }
        }
    }
};
function handlerForNetwork(networkKey, contractKey) {
    try {
        const provider = httpProviderForNetwork(networkKey);
        const eth = new eth_1.Eth(provider);
        const network = networks[networkKey];
        const contract = network.contracts[contractKey];
        const address = address_1.Address.fromString(contract.address);
        const contractInstance = new contract.class(eth, address);
        return {
            provider,
            network,
            contract: contractInstance
        };
    }
    catch (error) {
        return undefined;
    }
}
exports.handlerForNetwork = handlerForNetwork;
function httpProviderForNetwork(networkKey) {
    const network = networks[networkKey];
    const url = network.http;
    return new providers_1.HttpProvider(url);
}
//# sourceMappingURL=utils.js.map