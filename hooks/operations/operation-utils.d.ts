export declare const parseOperationPayload: <TPayload>(op: {
    payload?: unknown;
}) => TPayload | undefined;
export declare const DEBUG_OPERATIONS_KEY = "operations-debug";
export declare const dbg: (...args: unknown[]) => void;
