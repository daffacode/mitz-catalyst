"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeRequestOptions = exports.applySomeDefaults = exports.applyDefaults = exports.retry = exports.delay = void 0;
const ms_1 = __importDefault(require("ms"));
function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, (0, ms_1.default)(time)));
}
exports.delay = delay;
async function retry(execution, attempts, waitTime = '1s', failedAttemptCallback) {
    while (attempts > 0) {
        try {
            return await execution();
            //     ^^^^^ never remove this "await" keyword, otherwise this function won't
            //           catch the exception and perform the retries
        }
        catch (error) {
            attempts--;
            if (attempts > 0) {
                if (failedAttemptCallback) {
                    failedAttemptCallback(attempts);
                }
                await delay(waitTime);
            }
            else {
                throw error;
            }
        }
    }
    throw new Error('Please specify more than one attempt for the retry function');
}
exports.retry = retry;
/** Add defaults to missing properties in the partial object */
function applyDefaults(defaults, partial) {
    return { ...defaults, ...partial };
}
exports.applyDefaults = applyDefaults;
/** Add some defaults to missing properties in the partial object. This means that the object is not yet complete */
function applySomeDefaults(defaults, partial) {
    return { ...defaults, ...partial };
}
exports.applySomeDefaults = applySomeDefaults;
/**  As headers field is Record<string, string> type, then when merging request Options
     it's needed to merge the array instead of just applying the defaults.           */
function mergeRequestOptions(target, source) {
    const combinedHeaders = {
        ...target?.headers,
        ...source?.headers
    };
    const combinedCookies = {
        ...target?.cookies,
        ...source?.cookies
    };
    return { ...target, ...source, headers: combinedHeaders, cookies: combinedCookies };
}
exports.mergeRequestOptions = mergeRequestOptions;
//# sourceMappingURL=Helper.js.map