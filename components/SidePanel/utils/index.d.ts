/**
 * Only a press on the overlay itself dismisses the panel: the backdrop and the empty part of the
 * scroll area, never the panel and never content that is portalled elsewhere, like a popover
 */
export declare const isOverlayInteraction: (element: Element) => boolean;
/** Whether the panel is portalled into the page itself, instead of a smaller container */
export declare const isViewportContainer: (container: HTMLElement | null) => boolean;
/**
 * Makes the overlay cover the container the panel is portalled into, instead of the page.
 *
 * The overlay is absolutely positioned, so the container needs to be a positioned element while
 * the panel is mounted. It is only changed when it is not positioned yet, and restored afterwards.
 *
 * Returns the container, which is also the element the panel is portalled into.
 */
export declare const useContainedOverlay: (isMounted: boolean) => HTMLElement | null;
/** Scrolls with the smooth scrolling of the browser, or at once when motion is reduced */
export declare const scrollTo: (element: HTMLElement, left: number) => void;
