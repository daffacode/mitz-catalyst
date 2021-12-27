import { JSONSchema, ValidateFunction } from '../validation';
/**
 * Different supported networks
 * @alpha
 */
export declare enum Network {
    ETHEREUM = "ETHEREUM",
    HARMONY = "HARMONY",
    MATIC = "MATIC"
}
/**
 * @alpha
 */
export declare namespace Network {
    const schema: JSONSchema<Network>;
    const validate: ValidateFunction<Network>;
}
//# sourceMappingURL=network.d.ts.map