import { PDFToolbarProps } from './PDFToolbar.tsx';
interface PDFViewerProps extends Pick<PDFToolbarProps, "enableDownload" | "customControls"> {
    url: string;
    fileName?: string;
    className?: string;
    onDownloadRequested?: () => void;
}
declare const PDFViewer: ({ url, fileName, className, onDownloadRequested, ...props }: PDFViewerProps) => import("react/jsx-runtime").JSX.Element;
export { PDFViewer };
export type { PDFViewerProps };
