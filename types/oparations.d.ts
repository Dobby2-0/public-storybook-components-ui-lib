export declare enum PollState {
    IDLE = "IDLE",
    LOADING = "LOADING",
    ERROR = "ERROR",
    SUCCESS = "SUCCESS"
}
export declare enum OperationStatus {
    RUNNING = "RUNNING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED"
}
export interface OperationEnvelope<TPayload = unknown> {
    traceId: string;
    dobbyUserId: string;
    type: string;
    status: OperationStatus;
    payload: TPayload | null;
    errorMessage?: string | null;
    createdTimestamp: string;
    updatedTimestamp: string;
}
