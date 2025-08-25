import { ReactNode } from '../../../node_modules/react';
interface PDFToolbarProps {
    pages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    scale: number;
    onScaleChange: (scale: number) => void;
    enableDownload?: boolean;
    onDownloadRequested?: () => void;
    customControls?: ReactNode;
}
declare const PDFToolbar: ({ pages, currentPage, onPageChange, scale, onScaleChange, enableDownload, onDownloadRequested, customControls, }: PDFToolbarProps) => import("react/jsx-runtime").JSX.Element;
export { PDFToolbar };
export type { PDFToolbarProps };
