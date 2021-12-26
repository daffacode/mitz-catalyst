"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildEntityAndFile = void 0;
const types_1 = require("../types");
const Hashing_1 = require("./Hashing");
/**
 * Take all the entity's data, build the entity file with it, and calculate its id
 */
async function buildEntityAndFile({ version, type, pointers, timestamp, content, metadata }) {
    // Make sure that there is at least one pointer
    if (pointers.length === 0) {
        throw new Error(`All entities must have at least one pointer.`);
    }
    if (version === types_1.EntityVersion.V2) {
        throw new Error(`V2 is not supported.`);
    }
    const entity = {
        version,
        type,
        pointers,
        timestamp,
        content,
        metadata
    };
    const entityFile = new TextEncoder().encode(JSON.stringify(entity));
    const entityId = version === types_1.EntityVersion.V3
        ? await Hashing_1.Hashing.calculateBufferHash(entityFile)
        : await Hashing_1.Hashing.calculateIPFSHash(entityFile);
    const entityWithId = {
        id: entityId,
        ...entity
    };
    return { entity: entityWithId, entityFile };
}
exports.buildEntityAndFile = buildEntityAndFile;
//# sourceMappingURL=EntityFactory.js.map