import { OperationEnvelope } from '../../types/operations';
export interface OperationContextValue {
    fetchOperationState: (traceId: string) => Promise<OperationEnvelope<unknown> | undefined>;
    resolveOperationSignalRState: (traceId: string, timeoutMs: number) => Promise<OperationEnvelope<unknown>>;
}
export declare const OperationContext: import('../../../node_modules/react').Context<OperationContextValue | null>;
/**
 * Operation updates arrive through the page-wide operations hub owned by
 * `menu-ui` and shared via global-state. While no live hub connection exists
 * (standalone dev, startup, reconnecting) the state is polled instead.
 */
export declare const useOperationContextManager: () => {
    fetchOperationState: (traceId: string) => Promise<OperationEnvelope | undefined>;
    resolveOperationSignalRState: (traceId: string, timeoutMs: number) => Promise<OperationEnvelope>;
};
