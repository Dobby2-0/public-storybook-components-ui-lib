import { Placement } from '@react-aria/overlays';
import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
interface TooltipProps extends PropsWithChildren {
    /** Content to be displayed in the tooltip element */
    content: ReactNode;
    /** Should an arrow be added to the tooltip pointing towards the trigger */
    overlayArrow?: boolean;
    /**
     * Render the component as a Popover instead to support touch screen devices.
     * Clicking the trigger will both open the popover and fire any press/click events registered on the trigger.
     */
    asPopoverOnTouchScreen?: boolean;
    /**
     * Add a wrapper around the trigger.
     * Set to true when not using a button element as a trigger.
     * */
    customTrigger?: boolean;
    /** Optionally disable the tooltip */
    disabled?: boolean;
    /**
     * The placement of the tooltip with respect to the trigger.
     * @default 'top'
     */
    placement?: Placement;
    /**
     * The additional offset applied along the main axis between the tooltip and its trigger.
     * @default 7
     */
    offset?: number;
    /** The additional offset applied along the cross axis between the tooltip and its trigger. */
    crossOffset?: number;
    /**
     * Whether the tooltip should flip its orientation when there is insufficient room for it to render completely.
     * @default true
     */
    shouldFlip?: boolean;
    /**
     * The placement padding that should be applied between the tooltip and the boundary of its container.
     * Negative values allow the tooltip to use unclipped space beyond the container's own edges (e.g. padding
     * an MFE shell renders around the app before its actual clipping boundary).
     */
    containerPadding?: number;
    /** The minimum distance the arrow's edge should be from the edge of the tooltip. */
    arrowBoundaryOffset?: number;
    /** The CSS className for the tooltip element */
    className?: string;
}
/**
 * A tooltip displays a description of an element on hover or focus.
 */
declare const Tooltip: ({ children, content, overlayArrow, asPopoverOnTouchScreen, customTrigger, disabled, placement, offset, crossOffset, shouldFlip, containerPadding, arrowBoundaryOffset, className, }: TooltipProps) => string | number | bigint | boolean | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import('../../../node_modules/react').ReactPortal | import('../../../node_modules/react').ReactElement<unknown, string | import('../../../node_modules/react').JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null | undefined;
export { Tooltip };
export type { TooltipProps };
