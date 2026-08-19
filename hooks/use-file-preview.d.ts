import { Attachment } from '../components/FileList/FileList.tsx';
import { FilePreviewModalProps } from '../components/FilePreviewModal/FilePreviewModal.tsx';
type FilePreviewModalPassthroughProps = Pick<FilePreviewModalProps, "title" | "enableDownload" | "className">;
interface UseFilePreviewOptions extends FilePreviewModalPassthroughProps {
    /** Resolves a fetchable URL for the given attachment. */
    resolveFileUrl: (item: Attachment) => Promise<string> | string;
    /** Called on failure to resolve or download the file. Defaults to an error toast. */
    onError?: (error: Error, item: Attachment) => void;
    /**
     * Overrides the default download behavior (resolveFileUrl + downloadFile)
     * for handleDownload and for the modal's own download fallback/button.
     */
    onDownloadRequested?: FilePreviewModalProps["onDownloadRequested"];
}
/**
 * Allows easy pairing of a FileList with a FilePreviewModal
 */
declare const useFilePreview: ({ resolveFileUrl, onError, onDownloadRequested, ...modalProps }: UseFilePreviewOptions) => {
    readonly handleView: (item: Attachment) => Promise<void>;
    readonly handleDownload: (item: Attachment) => Promise<void>;
    readonly previewModalProps: {
        readonly className?: string;
        readonly title?: string;
        readonly enableDownload?: boolean;
        readonly file: Attachment | undefined;
        readonly isOpen: boolean;
        readonly onOpenChange: import('../../node_modules/react').Dispatch<import('../../node_modules/react').SetStateAction<boolean>>;
        readonly onDownloadRequested: (item: Attachment) => Promise<void>;
    };
};
export { useFilePreview };
export type { UseFilePreviewOptions };
