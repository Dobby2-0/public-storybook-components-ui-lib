import { ListBoxProps } from '../ListBox/ListBox.tsx';
import { GridListProps as AriaGridListProps } from 'react-aria-components';
interface ClassNameObject {
    base?: string;
    item?: string;
    icon?: string;
}
interface GridListProps extends Omit<AriaGridListProps<unknown>, "items" | "className"> {
    items: ListBoxProps["items"];
    className: string | ClassNameObject;
    onOrderChange?: (items: string[]) => void;
}
declare const GridList: ({ items, className, onOrderChange, ...props }: GridListProps) => import("react/jsx-runtime").JSX.Element;
export { GridList };
export type { GridListProps };
