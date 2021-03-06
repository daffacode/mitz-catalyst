import { EntityType, Pointer, Timestamp, EntityMetadata, Entity, EntityContentItemReference, EntityVersion } from '../types';
/**
 * Take all the entity's data, build the entity file with it, and calculate its id
 */
export declare function buildEntityAndFile({ version, type, pointers, timestamp, content, metadata }: {
    version: EntityVersion;
    type: EntityType;
    pointers: Pointer[];
    timestamp: Timestamp;
    content?: EntityContentItemReference[];
    metadata?: EntityMetadata;
}): Promise<{
    entity: Entity;
    entityFile: Uint8Array;
}>;
