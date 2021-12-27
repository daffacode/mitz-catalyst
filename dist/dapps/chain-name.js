"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainId = exports.ChainName = void 0;
const validation_1 = require("../validation");
const chain_id_1 = require("./chain-id");
/**
 * Different supported chain names
 * @alpha
 */
var ChainName;
(function (ChainName) {
    ChainName["ETHEREUM_MAINNET"] = "MAINNET";
    ChainName["HARMONY_TESTNET"] = "HARMONY";
    ChainName["ETHEREUM_ROPSTEN"] = "ROPSTEN";
    ChainName["ETHEREUM_RINKEBY"] = "RINKEBY";
    ChainName["ETHEREUM_GOERLI"] = "GOERLI";
    ChainName["ETHEREUM_KOVAN"] = "KOVAN";
    ChainName["MATIC_MAINNET"] = "MATIC";
    ChainName["MATIC_MUMBAI"] = "MUMBAI";
})(ChainName = exports.ChainName || (exports.ChainName = {}));
/**
 * Get chain id by chain name
 * @alpha
 */
function getChainId(chainName) {
    switch (chainName) {
        case ChainName.ETHEREUM_MAINNET:
            return chain_id_1.ChainId.ETHEREUM_MAINNET;
        case ChainName.HARMONY_TESTNET:
            return chain_id_1.ChainId.HARMONY_TESTNET;
        case ChainName.ETHEREUM_ROPSTEN:
            return chain_id_1.ChainId.ETHEREUM_ROPSTEN;
        case ChainName.ETHEREUM_RINKEBY:
            return chain_id_1.ChainId.ETHEREUM_RINKEBY;
        case ChainName.ETHEREUM_GOERLI:
            return chain_id_1.ChainId.ETHEREUM_GOERLI;
        case ChainName.ETHEREUM_KOVAN:
            return chain_id_1.ChainId.ETHEREUM_KOVAN;
        case ChainName.MATIC_MAINNET:
            return chain_id_1.ChainId.MATIC_MAINNET;
        case ChainName.MATIC_MUMBAI:
            return chain_id_1.ChainId.MATIC_MUMBAI;
        default:
            return null;
    }
}
exports.getChainId = getChainId;
/**
 * @alpha
 */
(function (ChainName) {
    ChainName.schema = {
        type: 'string',
        enum: Object.values(ChainName),
    };
    ChainName.validate = validation_1.generateValidator(ChainName.schema);
})(ChainName = exports.ChainName || (exports.ChainName = {}));
//# sourceMappingURL=chain-name.js.map