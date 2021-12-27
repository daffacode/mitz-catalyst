import { JSONSchema, ValidateFunction } from '../validation';
import { ChainId } from './chain-id';
/**
 * Different supported chain names
 * @alpha
 */
export declare enum ChainName {
    ETHEREUM_MAINNET = "MAINNET",
    HARMONY_TESTNET = "HARMONY",
    ETHEREUM_ROPSTEN = "ROPSTEN",
    ETHEREUM_RINKEBY = "RINKEBY",
    ETHEREUM_GOERLI = "GOERLI",
    ETHEREUM_KOVAN = "KOVAN",
    MATIC_MAINNET = "MATIC",
    MATIC_MUMBAI = "MUMBAI"
}
/**
 * Get chain id by chain name
 * @alpha
 */
export declare function getChainId(chainName: ChainName): ChainId | null;
/**
 * @alpha
 */
export declare namespace ChainName {
    const schema: JSONSchema<ChainName>;
    const validate: ValidateFunction<ChainName>;
}
//# sourceMappingURL=chain-name.d.ts.map