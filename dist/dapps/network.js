"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Network = void 0;
const validation_1 = require("../validation");
/**
 * Different supported networks
 * @alpha
 */
var Network;
(function (Network) {
    Network["ETHEREUM"] = "ETHEREUM";
    Network["HARMONY"] = "HARMONY";
    Network["MATIC"] = "MATIC";
})(Network = exports.Network || (exports.Network = {}));
/**
 * @alpha
 */
(function (Network) {
    Network.schema = {
        type: 'string',
        enum: Object.values(Network),
    };
    Network.validate = validation_1.generateValidator(Network.schema);
})(Network = exports.Network || (exports.Network = {}));
//# sourceMappingURL=network.js.map