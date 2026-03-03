interface ResolveOperationOptions {
    timeoutMs?: number;
    errorTitle?: string;
}
export declare const useOperation: () => {
    resolveOperation: <TPayload = unknown>(traceId: string, options?: ResolveOperationOptions) => Promise<TPayload | undefined>;
};
export {};
