import { ReactNode } from '../../../node_modules/react';
import { MenuItemProps as AriaMenuItemProps, MenuProps as AriaMenuProps, MenuTriggerProps as AriaMenuTriggerProps, SeparatorProps as AriaSeparatorProps, PopoverProps } from 'react-aria-components';
interface ClassNameObject {
    base?: string;
    popover?: string;
}
interface MenuBaseProps<T extends object> extends Omit<AriaMenuProps<T>, "items" | "className"> {
    /** The placement of the menu with respect to its trigger element. */
    placement?: PopoverProps["placement"];
    /** The additional offset applied along the main axis between the element and its anchor element. */
    offset?: PopoverProps["offset"];
    /**  */
    className?: string | ClassNameObject;
}
declare const MenuItem: ({ children, className, ...props }: AriaMenuItemProps) => import("react/jsx-runtime").JSX.Element;
declare const MenuSeparator: ({ className, ...props }: AriaSeparatorProps) => import("react/jsx-runtime").JSX.Element;
interface MenuProps<T extends object> extends Omit<AriaMenuProps<T>, "items" | "className">, Omit<AriaMenuTriggerProps, "children">, MenuBaseProps<T> {
    /** Array of items used to build the hierarchy */
    items: (MenuItem | MenuSeparator)[];
    /** Element to be shown as menu trigger */
    children: ReactNode;
}
interface MenuItem extends Omit<AriaMenuItemProps, "children"> {
    label?: ReactNode;
    children?: (MenuItem | MenuSeparator)[];
}
interface MenuSeparator extends AriaSeparatorProps {
    separator?: boolean;
}
declare const Menu: <T extends object>({ items, children, ...props }: MenuProps<T>) => import("react/jsx-runtime").JSX.Element;
export { Menu };
