interface UseFileDeleteOptions<T extends {
    id: string;
}> {
    /** Deletes the file by id */
    deleteFile: (item: T) => Promise<{
        success: boolean;
        error?: Error;
    }>;
    /** Returns whether the id belongs to an already-persisted file. Defaults to a valid-UUID check (unsaved files should use a nanoid). */
    isPersisted?: (item: T) => boolean;
    /** Called after the file is removed, whether that meant an API call or just a local removal */
    onDeleted?: (item: T) => void;
    /** Called on failure to delete a persisted file. Defaults to an error toast. */
    onError?: (error: Error, item: T) => void;
}
/**
 * Removes a file: unsaved (unpersisted) files are just dropped locally,
 * persisted ones are deleted via the supplied mutation.
 */
declare const useFileDelete: <T extends {
    id: string;
}>({ deleteFile, isPersisted, onDeleted, onError, }: UseFileDeleteOptions<T>) => {
    removeFile: (item: T) => Promise<void>;
};
export { useFileDelete };
