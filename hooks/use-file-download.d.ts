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
/** Hook for downloading files with status polling and timeout. */
declare const useFileDownload: ({ checkFileStatus, loadFile, timeoutMs, }: UseFileDownloadOptions) => {
    readonly handleLoadFile: (file: DobbyFile) => Promise<void>;
};
export { useFileDownload };
