import { RefObject } from '../../node_modules/react';
interface UseFillPageSizeOptions {
    desktopRowHeight?: number;
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
