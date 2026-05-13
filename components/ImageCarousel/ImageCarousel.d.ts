import { Attachment } from '../FileList/FileList.tsx';
import { Settings as SliderSettings } from 'react-slick';
interface ImageCarouselProps extends SliderSettings {
    /** Array of images to display in the carousel. */
    images: Attachment[];
    /** Additional class name for the carousel container. */
    className?: string;
}
/** ImageCarousel component to display a carousel of images. */
declare const ImageCarousel: ({ images, className, ...props }: ImageCarouselProps) => import("react/jsx-runtime").JSX.Element;
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
}
/** component to display the ImageCarousel inside a modal. */
declare const ImageCarouselModal: ({ isOpen, onOpenChange, images, title, className, ...props }: CarouselModalProps) => import("react/jsx-runtime").JSX.Element;
export { ImageCarousel, ImageCarouselModal };
