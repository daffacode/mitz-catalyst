import type { EthAddress } from 'mitz-auth';
export declare function getMainnetCatalysts(): Promise<ServerMetadata[]>;
export declare function getRopstenCatalysts(): Promise<ServerMetadata[]>;
export declare type ServerMetadata = {
    address: string;
    owner: EthAddress;
    id: string;
};
