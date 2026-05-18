import { Attachment } from '../FileList/FileList.tsx';
import { PDFToolbarProps } from './PDFToolbar.tsx';
interface PDFViewerProps extends Pick<PDFToolbarProps, "enableDownload" | "customControls"> {
    url: string;
    fileId?: string;
    fileName?: string;
    className?: string;
    onDownloadRequested?: (file: Attachment) => void | Promise<void>;
}
declare const PDFViewer: ({ url, fileId, fileName, className, onDownloadRequested, ...props }: PDFViewerProps) => import("react/jsx-runtime").JSX.Element;
export { PDFViewer };
export type { PDFViewerProps };
