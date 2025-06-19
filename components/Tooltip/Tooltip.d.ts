import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
import { TooltipProps as AriaTooltipProps } from 'react-aria-components';
interface TooltipProps extends Omit<AriaTooltipProps, "children" | "style">, PropsWithChildren {
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
     * Add a Pressable or Focusable wrapper arround the trigger
     * Set to true when not using a button element as a trigger.
     * */
    customTrigger?: boolean;
}
/**
 * A tooltip displays a description of an element on hover or focus.
 *
 * Based on `react-aria-components`
 */
declare const Tooltip: ({ children, content, overlayArrow, asPopoverOnTouchScreen, customTrigger, ...props }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export { Tooltip };
export type { TooltipProps };
