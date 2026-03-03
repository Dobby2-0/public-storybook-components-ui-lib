import { PollState } from '../../types/operations';
type PollOperationState = {
    pollState: PollState.IDLE;
} | {
    pollState: PollState.LOADING;
} | {
    pollState: PollState.ERROR;
    error: Error;
} | {
    pollState: PollState.SUCCESS;
};
interface PollTimingOptions {
    intervalMs?: number;
    timeoutMs?: number;
}
interface StartPollingOptions {
    /** Optional custom error message for general operation failure */
    errorMessage?: string;
    /** Optional custom error message specifically for operation timeout */
    timeoutMessage?: string;
}
/**
 * @deprecated Use `resolveOperation` from `useOperation` instead.
 */
export declare const usePollOperation: (options?: PollTimingOptions) => {
    readonly operationState: PollOperationState;
    readonly startPolling: <TPayload = unknown>(traceId: string, pollOptions?: StartPollingOptions) => Promise<TPayload | undefined>;
    readonly stopPolling: () => void;
};
export {};
