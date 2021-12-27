"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaTransaction = exports.Network = exports.getChainId = exports.ChainName = exports.getChainName = exports.ChainId = void 0;
// export the utils
__exportStar(require("./validation"), exports);
// export all the types
var chain_id_1 = require("./dapps/chain-id");
Object.defineProperty(exports, "ChainId", { enumerable: true, get: function () { return chain_id_1.ChainId; } });
Object.defineProperty(exports, "getChainName", { enumerable: true, get: function () { return chain_id_1.getChainName; } });
var chain_name_1 = require("./dapps/chain-name");
Object.defineProperty(exports, "ChainName", { enumerable: true, get: function () { return chain_name_1.ChainName; } });
Object.defineProperty(exports, "getChainId", { enumerable: true, get: function () { return chain_name_1.getChainId; } });
var network_1 = require("./dapps/network");
Object.defineProperty(exports, "Network", { enumerable: true, get: function () { return network_1.Network; } });
var meta_transactions_1 = require("./dapps/meta-transactions");
Object.defineProperty(exports, "MetaTransaction", { enumerable: true, get: function () { return meta_transactions_1.MetaTransaction; } });
//# sourceMappingURL=index.js.map