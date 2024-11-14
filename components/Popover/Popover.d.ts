import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
import { PopoverProps as AriaPopoverProps } from 'react-aria-components';
interface PopoverContentProps extends Omit<PopoverProps, "content" | "children">, PropsWithChildren {
    /** Should the popover make use of the popoverDialog component */
    enableDialog?: boolean;
}
interface PopoverContentRef {
    open: () => void;
    close: () => void;
}
declare const PopoverContent: import('../../../node_modules/react').ForwardRefExoticComponent<PopoverContentProps & import('../../../node_modules/react').RefAttributes<PopoverContentRef>>;
interface PopoverProps extends Omit<AriaPopoverProps, "containerPadding" | "children">, PropsWithChildren {
    /** Content to be displayed in the popover element */
    content: ReactNode;
    /** Should an arrow be added to the popover overlay pointing towards the trigger */
    overlayArrow?: boolean;
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
export { Popover, PopoverContent };
export type { PopoverContentRef };
