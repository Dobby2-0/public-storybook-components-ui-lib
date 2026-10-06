import { OperationEnvelope } from '../../types/operations';
export interface OperationContextValue {
    fetchOperationState: (traceId: string) => Promise<OperationEnvelope<unknown> | undefined>;
    resolveOperationSignalRState: (traceId: string, timeoutMs: number) => Promise<OperationEnvelope<unknown>>;
}
export declare const OperationContext: import('../../../node_modules/react').Context<OperationContextValue | null>;
/**
 * Operation updates arrive through the page-wide operations hub owned by
 * `menu-ui` and shared via global-state. `resolveOperationSignalRState` only
 * listens for pushed updates until `timeoutMs`; it never polls. Callers
 * (see `useOperation`) fetch the state once before and once after waiting,
 * so a missed or unavailable hub degrades to a timeout plus a final fetch.
 */
export declare const useOperationContextManager: () => {
    fetchOperationState: (traceId: string) => Promise<OperationEnvelope | undefined>;
    resolveOperationSignalRState: (traceId: string, timeoutMs: number) => Promise<OperationEnvelope>;
};
