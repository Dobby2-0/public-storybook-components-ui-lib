import { PDFToolbarProps } from './PDFToolbar.tsx';
interface PDFViewerProps extends Pick<PDFToolbarProps, "enableDownload" | "customControls"> {
    url: string;
    fileName?: string;
    className?: string;
}
declare const PDFViewer: ({ url, fileName, className, ...props }: PDFViewerProps) => import("react/jsx-runtime").JSX.Element;
export { PDFViewer };
