import { PDFViewerProps } from './PDFViewer.tsx';
interface ClassNameObject {
    modal?: string;
    viewer?: string;
}
interface PDFViewerModalProps extends Omit<PDFViewerProps, "url" | "className"> {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    url?: string;
    title?: string;
    className?: string | ClassNameObject;
}
/** A fullscreen modal that displays a PDF viewer */
declare const PDFViewerModal: ({ isOpen, onOpenChange, url, title, className, ...props }: PDFViewerModalProps) => import("react/jsx-runtime").JSX.Element;
export { PDFViewerModal };
