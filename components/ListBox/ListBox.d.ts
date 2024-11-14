import { ComponentProps, ReactNode } from '../../../node_modules/react';
import { Collection as AriaCollection, Header as AriaHeader, ListBoxItemProps as AriaListBoxItemProps, ListBoxProps as AriaListBoxProps, ListBoxItemProps } from 'react-aria-components';
declare const ListBoxSection: <T extends object>(props: import('react-aria-components').SectionProps<T> & React.RefAttributes<HTMLElement>) => React.ReactElement | null;
declare const ListBoxCollection: typeof AriaCollection;
declare const ListBoxHeader: ({ className, ...props }: ComponentProps<typeof AriaHeader>) => import("react/jsx-runtime").JSX.Element;
declare const ListBoxItem: <T extends object>({ className, children, ...props }: AriaListBoxItemProps<T>) => import("react/jsx-runtime").JSX.Element;
interface ListItem extends Omit<ListBoxItemProps, "id" | "value" | "children"> {
    children?: (Omit<ListItemWithoutId, "children"> | Omit<ListItemWithId, "children">)[];
}
interface ListItemWithoutId extends ListItem {
    label: string;
}
interface ListItemWithId extends ListItem {
    id: string;
    label: ReactNode;
}
interface ListBoxProps extends AriaListBoxProps<unknown> {
    items?: (ListItemWithoutId | ListItemWithId)[];
}
/**
 * component that displays a list of options and allows a user to select one or more of them
 *
 * Based on `React-aria-components`
 */
declare const ListBox: ({ items, ...props }: ListBoxProps) => import("react/jsx-runtime").JSX.Element;
export { ListBox, ListBoxCollection, ListBoxHeader, ListBoxItem, ListBoxSection };
export type { ListBoxProps, ListItemWithId, ListItemWithoutId };
