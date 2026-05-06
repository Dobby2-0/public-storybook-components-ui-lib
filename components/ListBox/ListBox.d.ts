import { FieldResolver, FieldResolverWithProps, ResolverFunctionWithProps } from '../../types';
import { ComponentProps, ReactNode, Ref } from '../../../node_modules/react';
import { Collection as AriaCollection, Header as AriaHeader, ListBoxItemProps as AriaListBoxItemProps, ListBoxProps as AriaListBoxProps } from 'react-aria-components';
interface ListBoxItemProps<T extends object> extends AriaListBoxItemProps<T> {
    ref?: Ref<HTMLDivElement>;
}
interface ListBoxPropsInternal<T extends object> {
    items: T[];
    /**
     * Field to use as the item id, defaults to "id".<br/>
     * If a function is provided, it will be called with an item as the first argument. It must return a string.
     */
    idResolver?: FieldResolver<T, string>;
    loading?: boolean;
    /** Allows disabling the loader when initial page of data indicates no more pages are available */
    hasNextPage?: boolean;
    /** Callback function called when reaching the bottom of the list. Expects a boolean return to indicate wether more pages are still available */
    onLoadMore?: () => Promise<boolean>;
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
declare const ListBoxWithComponents: (<T extends object>({ items, loading, onLoadMore, hasNextPage, idResolver, ...props }: Omit<AriaListBoxProps<T>, "children"> & ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element) & {
    ListBoxCollection: typeof AriaCollection;
    ListBoxHeader: ({ className, ...props }: ComponentProps<typeof AriaHeader>) => import("react/jsx-runtime").JSX.Element;
    ListBoxSection: <T extends object>(props: import('react-aria-components').ListBoxSectionProps<T> & React.RefAttributes<HTMLElement>) => React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | null;
    ListBoxItem: <T extends object>({ className, children, ref, ...props }: ListBoxItemProps<T>) => import("react/jsx-runtime").JSX.Element;
};
export { ListBoxWithComponents as ListBox };
export type { ListBoxProps };
