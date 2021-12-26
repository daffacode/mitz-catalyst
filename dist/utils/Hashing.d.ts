import { ContentFileHash, EntityContentItemReference, EntityMetadata } from '../types';
export declare namespace Hashing {
    /**
     * Given a set of files, return a map with their hash
     * @deprecated use calculateIPFSHashes instead
     */
    function calculateHashes<T extends Uint8Array>(files: T[]): Promise<{
        hash: ContentFileHash;
        file: T;
    }[]>;
    /**
     * Return the given buffer's hash
     * @deprecated use calculateIPFSHash instead
     */
    function calculateBufferHash(buffer: Uint8Array): Promise<ContentFileHash>;
    function calculateIPFSHash(buffer: Uint8Array): Promise<ContentFileHash>;
    function calculateIPFSHashes<T extends Uint8Array>(files: T[]): Promise<{
        hash: ContentFileHash;
        file: T;
    }[]>;
    /**
     * Calculates the content hash of multiple files to be used consistently by the builder
     * and other content-based applications when hashes need to be stored on-chain.
     *
     * Returns the CIDv1 of the data prepared to sign
     */
    function calculateMultipleHashesADR32(contents: EntityContentItemReference[], metadata?: EntityMetadata): Promise<{
        data: Uint8Array;
        hash: string;
    }>;
    /**
     * Calculates the content hash of multiple files to be used consistently by the builder
     * and other content-based applications when hashes need to be stored on-chain.
     * @deprecated this is maintained only for compatibility reasons with calculateBufferHash (Qm prefix)
     */
    function calculateMultipleHashesADR32LegacyQmHash(contents: EntityContentItemReference[], metadata?: EntityMetadata): Promise<{
        data: Uint8Array;
        hash: string;
    }>;
}
