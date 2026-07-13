import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
import { PopoverProps as AriaPopoverProps, ContextValue, PopoverContext } from 'react-aria-components';
interface PopoverContentProps extends Omit<PopoverProps, "content" | "children">, PropsWithChildren {
    /** Should the popover make use of the popoverDialog component */
    enableDialog?: boolean;
}
interface PopoverContentRef {
    open: () => void;
    close: () => void;
}
declare const PopoverContent: {
    ({ className, offset, containerPadding, enableDialog, overlayArrow, children, isOpen, onOpenChange, ...props }: PopoverContentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
interface PopoverProps extends Omit<AriaPopoverProps, "children">, PropsWithChildren {
    /** Content to be displayed in the popover element */
    content: ReactNode;
    /** Should an arrow be added to the popover overlay pointing towards the trigger */
    overlayArrow?: boolean;
    /**
     * The placement padding that should be applied between the popover and the boundary of its
     * container. Defaults to 0 (rather than react-aria's own default of 12) so the popover can
     * render flush against the edge of its container instead of always keeping a minimum gap.
     * @default 0
     */
    containerPadding?: number;
}
/**
 * Popover component used to show an overlay relative to a trigger
 *
 * Based on `react-aria-components`
 *
 * @example
 * <Popover content={"Popover Content"}>
 *   <Button>Open popover</Button>
 * </Popover>
 */
declare const Popover: import('../../../node_modules/react').ForwardRefExoticComponent<PopoverProps & import('../../../node_modules/react').RefAttributes<PopoverContentRef>>;
export { Popover, PopoverContent, PopoverContext };
export type { ContextValue, PopoverContentRef, AriaPopoverProps as PopoverProps };
