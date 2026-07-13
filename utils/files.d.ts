/** Initiates a native browser download */
export declare const downloadFile: (url: string, name?: string, mimeType?: string) => Promise<void>;
/** Uploads a file or blob to a presigned URL via HTTP PUT. Throws if the response is not ok. */
export declare const uploadFileToUrl: (url: string, file: File | Blob) => Promise<Response>;
/** Whether an id belongs to an already-persisted attachment, vs. a client-generated id for one not yet saved */
export declare const isPersistedAttachmentId: (id: string) => boolean;
