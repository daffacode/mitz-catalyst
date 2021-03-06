import { HttpProvider } from 'web3x/providers';
import { Catalyst } from './Catalyst';
declare const networks: {
    ropsten: {
        wss: string;
        http: string;
        contracts: {
            catalyst: {
                address: string;
                class: typeof Catalyst;
            };
        };
    };
    harmony_testnet: {
        wss: string;
        http: string;
        contracts: {
            catalyst: {
                address: string;
                class: typeof Catalyst;
            };
        };
    };
    mainnet: {
        wss: string;
        http: string;
        contracts: {
            catalyst: {
                address: string;
                class: typeof Catalyst;
            };
        };
    };
};
export declare function handlerForNetwork(networkKey: EthNetwork, contractKey: string): {
    provider: HttpProvider;
    network: {
        wss: string;
        http: string;
        contracts: {
            catalyst: {
                address: string;
                class: typeof Catalyst;
            };
        };
    } | {
        wss: string;
        http: string;
        contracts: {
            catalyst: {
                address: string;
                class: typeof Catalyst;
            };
        };
    } | {
        wss: string;
        http: string;
        contracts: {
            catalyst: {
                address: string;
                class: typeof Catalyst;
            };
        };
    };
    contract: any;
} | undefined;
export declare type EthNetwork = keyof typeof networks;
export {};
