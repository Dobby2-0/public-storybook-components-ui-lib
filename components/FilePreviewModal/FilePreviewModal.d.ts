import { Attachment } from '../FileList/FileList.tsx';
interface FilePreviewModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    file?: Attachment;
    title?: string;
    enableDownload?: boolean;
    onDownloadRequested?: () => void;
    className?: string;
}
/**
 * Routes to PDFViewerModal or ImageCarouselModal based on contentType.
 * Falls back to a download for unsupported types.
 */
declare const FilePreviewModal: ({ isOpen, onOpenChange, file, title, enableDownload, onDownloadRequested, className, }: FilePreviewModalProps) => import("react/jsx-runtime").JSX.Element | null;
export { FilePreviewModal };
export type { FilePreviewModalProps };
