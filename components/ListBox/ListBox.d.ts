import { FieldResolver, FieldResolverWithProps, ResolverFunctionWithProps } from '../../types';
import { ComponentProps, ReactNode } from '../../../node_modules/react';
import { Collection as AriaCollection, Header as AriaHeader, ListBoxItemProps as AriaListBoxItemProps, ListBoxProps as AriaListBoxProps, ListBoxItemProps } from 'react-aria-components';
declare const ListBoxSection: <T extends object>(props: import('react-aria-components').ListBoxSectionProps<T> & React.RefAttributes<HTMLElement>) => React.ReactElement | null;
declare const ListBoxCollection: typeof AriaCollection;
declare const ListBoxHeader: ({ className, ...props }: ComponentProps<typeof AriaHeader>) => import("react/jsx-runtime").JSX.Element;
declare const ListBoxItem: <T extends object>({ className, children, ...props }: AriaListBoxItemProps<T>) => import("react/jsx-runtime").JSX.Element;
interface ListBoxBasePropsInternal<T extends object> {
    items: T[];
    /**
     * Field to use as the item id, defaults to "id".<br/>
     * If a function is provided, it will be called with an item as the first argument. It must return a string.
     */
    idResolver?: FieldResolver<T, string>;
}
interface ListBoxWithItemLabelProps<T extends object> extends ListBoxBasePropsInternal<T> {
    children?: never;
    /**
     * Field to use as the item label, defaults to result of the "itemId" resolution.<br/>
     * If a function is provided, it will be called with an item as the first argument and an object with extra props for the underlying ListBoxItem as the second argument. It must return a ReactNode.
     */
    labelResolver?: FieldResolverWithProps<T, ReactNode, Omit<ListBoxItemProps, "id" | "value" | "textValue">>;
}
interface ListBoxWithChildrenProps<T extends object> extends ListBoxBasePropsInternal<T> {
    /**
     * Function that will be called with an item as the first argument and an object with extra props for the underlying ListBoxItem as the second argument. It must return a ReactNode.
     */
    children: ResolverFunctionWithProps<T, ReactNode, Omit<ListBoxItemProps, "id" | "value" | "textValue">>;
    labelResolver?: never;
}
type ListBoxBaseProps<T extends object> = ListBoxWithItemLabelProps<T> | ListBoxWithChildrenProps<T>;
/**
 * component that displays a list of options and allows a user to select one or more of them
 *
 * Based on `React-aria-components`
 */
declare const ListBox: <T extends object>({ items, idResolver, ...props }: Omit<AriaListBoxProps<T>, "children"> & ListBoxBaseProps<T>) => import("react/jsx-runtime").JSX.Element;
export { ListBox, ListBoxCollection, ListBoxHeader, ListBoxItem, ListBoxSection };
export type { ListBoxBaseProps };
