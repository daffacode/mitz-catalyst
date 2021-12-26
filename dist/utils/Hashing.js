"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hashing = void 0;
const cids_1 = __importDefault(require("cids"));
const multihashing_async_1 = __importDefault(require("multihashing-async"));
const ipfs_only_hash_1 = __importDefault(require("ipfs-only-hash"));
var Hashing;
(function (Hashing) {
    /**
     * Given a set of files, return a map with their hash
     * @deprecated use calculateIPFSHashes instead
     */
    async function calculateHashes(files) {
        const entries = Array.from(files).map(async (file) => ({
            hash: await calculateBufferHash(file),
            file
        }));
        return Promise.all(entries);
    }
    Hashing.calculateHashes = calculateHashes;
    /**
     * Return the given buffer's hash
     * @deprecated use calculateIPFSHash instead
     */
    async function calculateBufferHash(buffer) {
        const hash = await (0, multihashing_async_1.default)(buffer, 'sha2-256');
        return new cids_1.default(0, 'dag-pb', hash).toBaseEncodedString();
    }
    Hashing.calculateBufferHash = calculateBufferHash;
    async function calculateIPFSHash(buffer) {
        // CIDv1 requires rawLeaves: true
        return ipfs_only_hash_1.default.of(buffer, { cidVersion: 1, onlyHash: true, rawLeaves: true });
    }
    Hashing.calculateIPFSHash = calculateIPFSHash;
    async function calculateIPFSHashes(files) {
        const entries = Array.from(files).map(async (file) => ({
            hash: await calculateIPFSHash(file),
            file
        }));
        return Promise.all(entries);
    }
    Hashing.calculateIPFSHashes = calculateIPFSHashes;
    function prepareADR32Data(contents, metadata) {
        // Compare both by key and hash
        const sorter = (a, b) => {
            if (a.hash > b.hash)
                return 1;
            else if (a.hash < b.hash)
                return -1;
            else
                return a.file > b.file ? 1 : -1;
        };
        return new TextEncoder().encode(JSON.stringify({
            content: contents.sort(sorter).map((entry) => ({ key: entry.file, hash: entry.hash })),
            metadata
        }));
    }
    /**
     * Calculates the content hash of multiple files to be used consistently by the builder
     * and other content-based applications when hashes need to be stored on-chain.
     *
     * Returns the CIDv1 of the data prepared to sign
     */
    async function calculateMultipleHashesADR32(contents, metadata) {
        const data = prepareADR32Data(contents, metadata);
        return {
            data,
            hash: await Hashing.calculateIPFSHash(data)
        };
    }
    Hashing.calculateMultipleHashesADR32 = calculateMultipleHashesADR32;
    /**
     * Calculates the content hash of multiple files to be used consistently by the builder
     * and other content-based applications when hashes need to be stored on-chain.
     * @deprecated this is maintained only for compatibility reasons with calculateBufferHash (Qm prefix)
     */
    async function calculateMultipleHashesADR32LegacyQmHash(contents, metadata) {
        const data = prepareADR32Data(contents, metadata);
        return {
            data,
            hash: await Hashing.calculateBufferHash(data)
        };
    }
    Hashing.calculateMultipleHashesADR32LegacyQmHash = calculateMultipleHashesADR32LegacyQmHash;
})(Hashing = exports.Hashing || (exports.Hashing = {}));
//# sourceMappingURL=Hashing.js.map