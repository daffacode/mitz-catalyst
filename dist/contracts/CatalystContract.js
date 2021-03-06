"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAOContract = void 0;
const utils_1 = require("./utils");
class DAOContract {
    constructor(contract) {
        this.contract = contract;
    }
    async getCount() {
        return parseInt(await this.contract.methods.catalystCount().call());
    }
    getCatalystIdByIndex(index) {
        return this.contract.methods.catalystIds(index).call();
    }
    async getServerData(catalystId) {
        const { id, owner, domain } = await this.contract.methods.catalystById(catalystId).call();
        return { id, domain, owner: owner.toJSON() };
    }
    static withNetwork(networkName) {
        const handler = (0, utils_1.handlerForNetwork)(networkName, 'catalyst');
        if (handler) {
            const { contract } = handler;
            return new DAOContract(contract);
        }
        else {
            throw new Error(`Can not find a network handler for Network="${networkName}`);
        }
    }
}
exports.DAOContract = DAOContract;
//# sourceMappingURL=CatalystContract.js.map