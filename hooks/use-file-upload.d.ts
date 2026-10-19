interface UploadItem {
    name: string;
    type: string;
    size: number;
    data: File | Blob;
}
type UploadUrlGetter = (item: {
    name: string;
    type: string;
}) => Promise<{
    url: string | undefined;
    fileRef: string | undefined;
    error: Error | undefined;
}>;
interface UseFileUploadOptions<C = unknown> {
    /** Requests a presigned upload URL and a reference to the stored file (a storage key or a file id) */
    getUploadUrl: UploadUrlGetter;
    /** Called after the file is uploaded successfully */
    onUploaded?: (item: UploadItem, fileRef: string, context: C) => void | Promise<void>;
    /** Called on any failure. Defaults to an error toast. */
    onError?: (error: Error, item: UploadItem) => void;
}
/**
 * Uploads a file to a presigned URL and reports the result.
 * Transport-agnostic — the caller supplies how to obtain the presigned URL.
 *
 * The optional second argument to uploadFile() is forwarded to onUploaded unchanged (e.g. a client-generated attachment id).
 */
declare const useFileUpload: <C = unknown>({ getUploadUrl, onUploaded, onError, }: UseFileUploadOptions<C>) => {
    readonly uploadFile: (input: File | UploadItem, context?: C) => Promise<void>;
    readonly isUploading: boolean;
};
export { useFileUpload };
export type { UploadUrlGetter };
