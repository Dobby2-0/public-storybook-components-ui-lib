interface LockedOverlayProps {
    /** The element the overlay covers. It must be `position: relative`. */
    container: HTMLElement | null;
    /** The content inside the container. Its height decides how far the overlay reaches. */
    content: HTMLElement | null;
    /** The elements that are cut out of the overlay. */
    regions: HTMLElement[];
    className?: string;
}
/** How many pixels each cut-out extends beyond its region. */
declare const PADDING = 6;
/**
 * Covers a container with a translucent layer that has the shape of each region cut out,
 * so everything that is not editable looks greyed out. Clicks pass through the overlay.
 * The cut-outs follow the regions when they grow, shrink or move.
 */
declare const LockedOverlay: ({ container, content, regions, className, }: LockedOverlayProps) => import("react/jsx-runtime").JSX.Element | null;
export { PADDING as LOCKED_OVERLAY_PADDING, LockedOverlay };
