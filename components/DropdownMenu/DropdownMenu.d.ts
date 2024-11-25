import { Content, DropdownMenuProps as DropdownMenuBaseProps, Item } from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, ReactNode } from '../../../node_modules/react';
interface DropdownMenuProps extends Omit<DropdownMenuBaseProps, "onOpenChange"> {
    /** Array of items used to build the hierarchy */
    items: (MenuItem | MenuSeparator)[];
    /** Classes to apply to the dropdown menu*/
    className?: string;
    /** Callback that triggers when the dropdown open state changes */
    onOpenChange?: (open: boolean) => void;
    /** On which side should the content be aligned to the trigger */
    contentAlign?: DropdownMenuContentProps["align"];
    /** Whether to remove the radius on the floating end of the content on the side of the trigger */
    alignContentBorder?: boolean;
}
interface MenuItem {
    id: string;
    label: ReactNode;
    onClick?: DropdownMenuItemProps["onClick"];
    children?: (MenuItem | MenuSeparator)[];
}
interface MenuSeparator {
    separator: boolean;
}
/**
 * DropdownMenu component creates a customizable dropdown menu with support for nested sub-menus and separators.
 *
 * @example
 * <DropdownMenu
 *   items={[
 *     { id: "1", label: "Item 1" },
 *     { separator: true },
 *     {
 *       id: "2", label: "Item 2", children: [
 *         { id: "2.1", label: "Sub Item 2.1" },
 *         { id: "2.2", label: "Sub Item 2.2" }
 *       ]
 *     }
 *   ]}
 *   className="bg-brand-accent rounded-lg">
 *   Trigger Button
 * </DropdownMenu>
 *  */
declare const DropdownMenu: {
    ({ items, className, onOpenChange, contentAlign, alignContentBorder, children, ...props }: DropdownMenuProps): import("react/jsx-runtime").JSX.Element;
    displayName: string | undefined;
};
interface DropdownMenuContentProps extends ComponentPropsWithoutRef<typeof Content> {
    className?: string;
}
interface DropdownMenuItemProps extends ComponentPropsWithoutRef<typeof Item> {
    inset?: boolean;
}
export { DropdownMenu };
