import { AuthChain, EthAddress } from 'mitz-auth';
export declare type ContentFileHash = string;
export declare type Timestamp = number;
export declare type EntityId = ContentFileHash;
export declare type Pointer = string;
export declare type EntityMetadata = any;
export declare type EntityContentItemReference = {
    file: string;
    hash: ContentFileHash;
};
export declare enum EntityType {
    SCENE = "scene",
    PROFILE = "profile",
    WEARABLE = "wearable"
}
export declare type Entity = {
    version: EntityVersion;
    id: EntityId;
    type: EntityType;
    pointers: Pointer[];
    timestamp: Timestamp;
    content?: EntityContentItemReference[];
    metadata?: EntityMetadata;
};
export declare type ServerName = string;
export declare type ServerAddress = string;
export declare type ServerStatus = {
    name: ServerName;
    version: EntityVersion;
    currentTime: Timestamp;
    lastImmutableTime: Timestamp;
    historySize: number;
};
export declare enum EntityVersion {
    V2 = "v2",
    V3 = "v3",
    V4 = "v4"
}
export declare type AvailableContentResult = {
    cid: ContentFileHash;
    available: boolean;
}[];
export declare type PartialDeploymentHistory<T extends DeploymentBase> = {
    deployments: T[];
    filters: DeploymentFilters;
    pagination: {
        offset: number;
        limit: number;
        moreData: boolean;
        next?: string;
        lastId?: string;
    };
};
export declare type DeploymentFilters = {
    from?: Timestamp;
    to?: Timestamp;
    deployedBy?: EthAddress[];
    entityTypes?: EntityType[];
    entityIds?: EntityId[];
    pointers?: Pointer[];
    onlyCurrentlyPointed?: boolean;
};
export declare type DeploymentSorting = {
    field?: SortingField;
    order?: SortingOrder;
};
export declare enum SortingField {
    LOCAL_TIMESTAMP = "local_timestamp",
    ENTITY_TIMESTAMP = "entity_timestamp"
}
export declare enum SortingOrder {
    ASCENDING = "ASC",
    DESCENDING = "DESC"
}
export declare type Deployment = DeploymentBase & DeploymentWithPointers & DeploymentWithContent & DeploymentWithMetadata & DeploymentWithAuditInfo;
export declare type DeploymentBase = {
    entityVersion: EntityVersion;
    entityType: EntityType;
    entityId: EntityId;
    entityTimestamp: Timestamp;
    deployedBy: EthAddress;
};
export declare type DeploymentWithPointers = DeploymentBase & {
    pointers: Pointer[];
};
export declare type DeploymentWithContent = DeploymentBase & {
    content?: DeploymentContent[];
};
export declare type DeploymentWithMetadata = DeploymentBase & {
    metadata?: any;
};
export declare type DeploymentWithAuditInfo = DeploymentBase & {
    auditInfo: AuditInfo;
};
export declare type DeploymentContent = {
    key: string;
    hash: string;
};
export declare type AuditInfo = {
    version: EntityVersion;
    authChain: AuthChain;
    localTimestamp: Timestamp;
    overwrittenBy?: EntityId;
    migrationData?: any;
    isDenylisted?: boolean;
    denylistedContent?: ContentFileHash[];
};
export declare type Profile = EntityMetadata;
export declare type LegacyAuditInfo = {
    version: EntityVersion;
    deployedTimestamp: Timestamp;
    authChain: AuthChain;
    overwrittenBy?: EntityId;
    isDenylisted?: boolean;
    denylistedContent?: ContentFileHash[];
    originalMetadata?: {
        originalVersion: EntityVersion;
        data: any;
    };
};
export declare enum HealthStatus {
    HEALTHY = "Healthy",
    UNHEALTHY = "Unhealthy",
    DOWN = "Down"
}
