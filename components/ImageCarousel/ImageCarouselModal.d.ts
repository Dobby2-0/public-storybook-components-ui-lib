import { Attachment } from '../FileList/FileList.tsx';
import { ImageCarouselProps } from './ImageCarousel.tsx';
interface ClassNameObject {
    modal?: string;
    carousel?: string;
}
interface CarouselModalProps extends Omit<ImageCarouselProps, "images" | "className"> {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    images?: Attachment[];
    title?: string;
    className?: string | ClassNameObject;
    /** Whether to show the download button in the header. */
    enableDownload?: boolean;
    /** Called when the user clicks download. Defaults to triggering a file download. */
    onDownloadRequested?: (file: Attachment) => void | Promise<void>;
}
/** component to display the ImageCarousel inside a modal. */
declare const ImageCarouselModal: ({ isOpen, onOpenChange, images, title, className, enableDownload, onDownloadRequested, ...props }: CarouselModalProps) => import("react/jsx-runtime").JSX.Element;
export { ImageCarouselModal };
