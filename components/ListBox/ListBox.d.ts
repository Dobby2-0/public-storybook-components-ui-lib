import { FieldResolver, FieldResolverWithProps, ResolverFunctionWithProps } from '../../types';
import { ComponentProps, ReactNode } from '../../../node_modules/react';
import { Collection as AriaCollection, Header as AriaHeader, ListBoxItemProps as AriaListBoxItemProps, ListBoxProps as AriaListBoxProps } from 'react-aria-components';
declare const ListBoxSection: <T extends object>(props: import('react-aria-components').ListBoxSectionProps<T> & React.RefAttributes<HTMLElement>) => React.ReactElement | null;
declare const ListBoxCollection: typeof AriaCollection;
declare const ListBoxHeader: ({ className, ...props }: ComponentProps<typeof AriaHeader>) => import("react/jsx-runtime").JSX.Element;
interface ListBoxBaseProps<T> extends AriaListBoxProps<T> {
    onLoadMore?: () => void;
}
declare const ListBoxBase: <T extends object>({ className, onLoadMore, ...props }: ListBoxBaseProps<T>) => import("react/jsx-runtime").JSX.Element;
declare const ListBoxItem: <T extends object>({ className, children, ...props }: AriaListBoxItemProps<T>) => import("react/jsx-runtime").JSX.Element;
interface ListBoxPropsInternal<T extends object> {
    items: T[];
    /**
     * Field to use as the item id, defaults to "id".<br/>
     * If a function is provided, it will be called with an item as the first argument. It must return a string.
     */
    idResolver?: FieldResolver<T, string>;
    loading?: boolean;
    onLoadMore?: ListBoxBaseProps<T>["onLoadMore"];
}
interface ListBoxWithItemLabelProps<T extends object> extends ListBoxPropsInternal<T> {
    children?: never;
    /**
     * Field to use as the item label, defaults to result of the "itemId" resolution.<br/>
     * If a function is provided, it will be called with an item as the first argument and an object with extra props for the underlying ListBoxItem as the second argument. It must return a ReactNode.
     */
    labelResolver?: FieldResolverWithProps<T, ReactNode, Omit<AriaListBoxItemProps, "id" | "value" | "textValue">>;
}
interface ListBoxWithChildrenProps<T extends object> extends ListBoxPropsInternal<T> {
    /**
     * Function that will be called with an item as the first argument and an object with extra props for the underlying ListBoxItem as the second argument. It must return a ReactNode.
     */
    children: ResolverFunctionWithProps<T, ReactNode, Omit<AriaListBoxItemProps, "id" | "value" | "textValue">>;
    labelResolver?: never;
}
type ListBoxProps<T extends object> = ListBoxWithItemLabelProps<T> | ListBoxWithChildrenProps<T>;
/**
 * component that displays a list of options and allows a user to select one or more of them
 *
 * Based on `React-aria-components`
 */
declare const ListBox: <T extends object>({ items, loading, idResolver, ...props }: Omit<AriaListBoxProps<T>, "children"> & ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
export { ListBox, ListBoxBase, ListBoxCollection, ListBoxHeader, ListBoxItem, ListBoxSection, };
export type { ListBoxProps };
