import { CompleteRequestOptions, RequestOptions } from './FetcherConfiguration';
export declare function delay(time: string): Promise<void>;
export declare function retry<T>(execution: () => Promise<T>, attempts: number, waitTime?: string, failedAttemptCallback?: (attemptsLeft: number) => void): Promise<T>;
/** Add defaults to missing properties in the partial object */
export declare function applyDefaults<T, K = T | Partial<T>>(defaults: K, partial?: Partial<T>): K;
/** Add some defaults to missing properties in the partial object. This means that the object is not yet complete */
export declare function applySomeDefaults<T>(defaults: Partial<T>, partial?: Partial<T>): Partial<T>;
/**  As headers field is Record<string, string> type, then when merging request Options
     it's needed to merge the array instead of just applying the defaults.           */
export declare function mergeRequestOptions<T = CompleteRequestOptions | RequestOptions>(target: T, source?: RequestOptions): T;
