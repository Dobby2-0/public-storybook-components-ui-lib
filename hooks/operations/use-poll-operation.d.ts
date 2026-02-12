import { PollState } from '../../types/oparations';
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
 * Hook to poll the status of a backend operation by traceId.
 *
 * - Tracks poll state: IDLE, LOADING, SUCCESS, ERROR.
 * - Polls until the operation completes, fails, or times out.
 * - Shows friendly toast messages automatically on errors or timeouts.
 * - Returns a Promise from `startPolling<TPayload>` with the parsed payload once completed.
 *
 * Usage:
 * const { operationState, startPolling } = usePollOperation();
 * const result = await startPolling<MyPayloadType>(traceId, {
 *   errorMessage: "Custom error for this operation",
 *   timeoutMessage: "Custom timeout message",
 * });
 */
export declare function usePollOperation(options?: PollTimingOptions): {
    readonly operationState: PollOperationState;
    readonly startPolling: <TPayload = unknown>(traceId: string, pollOptions?: StartPollingOptions) => Promise<TPayload | undefined>;
    readonly stopPolling: () => void;
};
export {};
