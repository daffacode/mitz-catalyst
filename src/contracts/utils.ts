import { Address } from 'web3x/address'
import { Eth } from 'web3x/eth'
import { HttpProvider } from 'web3x/providers'
import { Catalyst } from './Catalyst'

const networks = {
  ropsten: {
    wss: 'wss://ropsten.infura.io/ws/v3/2c902c2e3b8947d3b34bba7ca48635fc',
    http: 'https://ropsten.infura.io/v3/2c902c2e3b8947d3b34bba7ca48635fc',
    contracts: {
      catalyst: {
        address: '0xadd085f2318e9678bbb18b3e0711328f902b374b',
        class: Catalyst
      }
    }
  },
  harmony_testnet: {
    wss: 'wss://api.s0.b.hmny.io',
    http: 'https://api.s0.b.hmny.io',
    contracts: {
      catalyst: {
        address: '0x2a29a82c4e1ff6df3e4cb47297bd02558cd69567',
        class: Catalyst
      }
    }
  },
  mainnet: {
    wss: 'wss://mainnet.infura.io/ws/v3/2c902c2e3b8947d3b34bba7ca48635fc',
    http: 'https://mainnet.infura.io/v3/2c902c2e3b8947d3b34bba7ca48635fc',
    contracts: {
      catalyst: {
        address: '0x4a2f10076101650f40342885b99b6b101d83c486',
        class: Catalyst
      }
    }
  }
}

export function handlerForNetwork(networkKey: EthNetwork, contractKey: string) {
  try {
    const provider = httpProviderForNetwork(networkKey)
    const eth = new Eth(provider)
    const network = networks[networkKey]
    const contract = network.contracts[contractKey]
    const address = Address.fromString(contract.address)
    const contractInstance = new contract.class(eth, address)

    return {
      provider,
      network,
      contract: contractInstance
    }
  } catch (error) {
    return undefined
  }
}

function httpProviderForNetwork(networkKey: string) {
  const network = networks[networkKey]
  const url = network.http
  return new HttpProvider(url)
}

export type EthNetwork = keyof typeof networks
