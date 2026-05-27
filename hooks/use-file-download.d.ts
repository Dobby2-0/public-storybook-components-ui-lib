import { DobbyFile } from '../types';
type FileStatusChecker = (id: string, fileType?: string) => Promise<{
    file?: DobbyFile;
    error?: Error;
    refetch: () => Promise<{
        file?: DobbyFile;
        error?: Error;
    }>;
}>;
type FileLoader = (id: string) => Promise<string | undefined>;
interface UseFileDownloadOptions {
    /** Function to check the uploaded status of the file */
    checkFileStatus: FileStatusChecker;
    /** Function to load the file download URL */
    loadFile: FileLoader;
    /** Timeout in milliseconds for the polling operation, defaults to 30s */
    timeoutMs?: number;
}
/**
 * Provides file download with upload-status polling and timeout.
 * Polling is canceled automatically on unmount.
 */
declare const useFileDownload: ({ checkFileStatus, loadFile, timeoutMs, }: UseFileDownloadOptions) => {
    readonly handleLoadFile: (file: DobbyFile) => Promise<void>;
    readonly cancelPolling: () => void;
    readonly pollUntilUploaded: (id: string, fileType?: string) => Promise<boolean>;
};
export { useFileDownload };
export type { FileLoader, FileStatusChecker, UseFileDownloadOptions };
