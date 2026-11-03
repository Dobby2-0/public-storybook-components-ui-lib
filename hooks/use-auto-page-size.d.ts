import { RefObject } from '../../node_modules/react';
interface UseFillPageSizeOptions {
    /** Row height of the desktop table, used to fill the container with rows. */
    desktopRowHeight?: number;
    /**
     * @deprecated Mobile lists load on scroll instead of paging, so there is no
     * page to fill. Only used for the deprecated `usePagedList`. Without it,
     * mobile gets the largest mobile page size option.
     */
    mobileRowHeight?: number;
}
/**
 * Picks a page size that fills the observed container height, using
 * whichever row height/options are relevant for the current viewport.
 */
export declare const useAutoPageSize: ({ desktopRowHeight, mobileRowHeight, }: UseFillPageSizeOptions) => {
    readonly containerRef: RefObject<HTMLDivElement | null>;
    readonly pageSize: number | undefined;
};
export {};
