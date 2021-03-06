import { EthAddress } from 'mitz-auth';
import { EthNetwork } from './utils';
export declare class DAOContract {
    private readonly contract;
    private constructor();
    getCount(): Promise<number>;
    getCatalystIdByIndex(index: number): Promise<CatalystId>;
    getServerData(catalystId: CatalystId): Promise<CatalystData>;
    static withNetwork(networkName: EthNetwork): DAOContract;
}
export declare type CatalystId = string;
export declare type CatalystData = {
    id: CatalystId;
    owner: EthAddress;
    domain: string;
};
