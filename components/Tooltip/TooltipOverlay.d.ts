import { Placement } from '@react-aria/overlays';
import { ReactNode, RefObject } from '../../../node_modules/react';
import { TooltipTriggerState } from 'react-stately';
declare const tooltipContentClassName: string;
interface TooltipOverlayProps {
    triggerRef: RefObject<HTMLElement | null>;
    overlayRef: RefObject<HTMLDivElement | null>;
    tooltipId?: string;
    state: TooltipTriggerState;
    isExiting: boolean;
    boundaryElement: Element;
    overlayArrow: boolean;
    placement: Placement;
    offset?: number;
    crossOffset?: number;
    shouldFlip?: boolean;
    containerPadding?: number;
    arrowBoundaryOffset?: number;
    className?: string;
    content: ReactNode;
}
/**
 * Mounted only while the tooltip is open (or exiting), so its enter-animation tracking resets
 * fresh every time it opens, matching the lifetime of the actual DOM node it's watching.
 */
declare const TooltipOverlay: ({ triggerRef, overlayRef, tooltipId, state, isExiting, boundaryElement, overlayArrow, placement, offset, crossOffset, shouldFlip, containerPadding, arrowBoundaryOffset, className, content, }: TooltipOverlayProps) => import("react/jsx-runtime").JSX.Element;
export { tooltipContentClassName, TooltipOverlay };
export type { TooltipOverlayProps };
