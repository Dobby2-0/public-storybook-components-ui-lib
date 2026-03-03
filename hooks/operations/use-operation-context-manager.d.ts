import { OperationEnvelope } from '../../types/operations';
export interface OperationContextValue {
    fetchOperationState: (traceId: string) => Promise<OperationEnvelope<unknown> | undefined>;
    resolveOperationSignalRState: (traceId: string, timeoutMs: number) => Promise<OperationEnvelope<unknown>>;
}
export declare const OperationContext: import('../../../node_modules/react').Context<OperationContextValue | null>;
export declare const useOperationContextManager: () => {
    fetchOperationState: (traceId: string) => Promise<OperationEnvelope | undefined>;
    resolveOperationSignalRState: (traceId: string, timeoutMs: number) => Promise<OperationEnvelope>;
};
