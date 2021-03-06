"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthStatus = exports.SortingOrder = exports.SortingField = exports.EntityVersion = exports.EntityType = void 0;
var EntityType;
(function (EntityType) {
    EntityType["SCENE"] = "scene";
    EntityType["PROFILE"] = "profile";
    EntityType["WEARABLE"] = "wearable";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
var EntityVersion;
(function (EntityVersion) {
    EntityVersion["V2"] = "v2";
    EntityVersion["V3"] = "v3";
    EntityVersion["V4"] = "v4";
})(EntityVersion = exports.EntityVersion || (exports.EntityVersion = {}));
var SortingField;
(function (SortingField) {
    SortingField["LOCAL_TIMESTAMP"] = "local_timestamp";
    SortingField["ENTITY_TIMESTAMP"] = "entity_timestamp";
})(SortingField = exports.SortingField || (exports.SortingField = {}));
var SortingOrder;
(function (SortingOrder) {
    SortingOrder["ASCENDING"] = "ASC";
    SortingOrder["DESCENDING"] = "DESC";
})(SortingOrder = exports.SortingOrder || (exports.SortingOrder = {}));
var HealthStatus;
(function (HealthStatus) {
    HealthStatus["HEALTHY"] = "Healthy";
    HealthStatus["UNHEALTHY"] = "Unhealthy";
    HealthStatus["DOWN"] = "Down";
})(HealthStatus = exports.HealthStatus || (exports.HealthStatus = {}));
//# sourceMappingURL=types.js.map