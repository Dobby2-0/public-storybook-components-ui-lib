import { Attachment } from '../FileList/FileList.tsx';
import { Settings as SliderSettings } from 'react-slick';
import { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
interface ImageCarouselProps extends SliderSettings {
    /** Array of images to display in the carousel. */
    images: Attachment[];
    /** Additional class name for the carousel container. */
    className?: string;
    /** Called with the TransformWrapper ref for each slide, keyed by index. Used by the parent to imperatively call zoom controls on the active slide. */
    onSlideRef?: (index: number, ref: ReactZoomPanPinchRef | null) => void;
}
/** ImageCarousel component to display a carousel of images. */
declare const ImageCarousel: ({ images, className, onSlideRef, ...props }: ImageCarouselProps) => import("react/jsx-runtime").JSX.Element;
export { ImageCarousel };
export type { ImageCarouselProps };
