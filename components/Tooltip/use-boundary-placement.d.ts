import { Placement } from '@react-aria/overlays';
import { RefObject } from '../../../node_modules/react';
interface Correction {
    x: number;
    y: number;
}
interface UseBoundaryPlacementOptions {
    isOpen: boolean;
    triggerRef: RefObject<HTMLElement | null>;
    overlayRef: RefObject<HTMLElement | null>;
    boundaryElement: Element;
    placement: Placement;
    containerPadding: number;
    shouldFlip?: boolean;
}
/**
 * `useOverlayPosition`'s `boundaryElement` option miscalculates when that element is also the
 * overlay's containing block (true for an app's own portal container). This hook replicates its
 * flip/clamp behavior via plain `getBoundingClientRect()` math against the real `boundaryElement`,
 * so `useOverlayPosition` can stay on its own (correct) `document.body` default for everything else.
 */
declare const useBoundaryPlacement: ({ isOpen, triggerRef, overlayRef, boundaryElement, placement, containerPadding, shouldFlip, }: UseBoundaryPlacementOptions) => {
    placement: "left" | "right" | "top" | "bottom" | "end" | "start" | "bottom left" | "bottom right" | "bottom start" | "bottom end" | "top left" | "top right" | "top start" | "top end" | "left top" | "left bottom" | "start top" | "start bottom" | "right top" | "right bottom" | "end top" | "end bottom";
    correction: Correction;
};
export { useBoundaryPlacement };
