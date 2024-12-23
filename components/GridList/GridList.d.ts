import { ListBoxBaseProps } from '../ListBox/ListBox.tsx';
import { GridListProps as AriaGridListProps } from 'react-aria-components';
interface ClassNameObject {
    base?: string;
    item?: string;
    icon?: string;
}
interface GridListProps extends Omit<AriaGridListProps<unknown>, "items" | "className"> {
    className: string | ClassNameObject;
    onOrderChange?: (items: string[]) => void;
}
declare const GridList: <T extends object>({ items, idResolver, className, onOrderChange, ...props }: GridListProps & ListBoxBaseProps<T>) => import("react/jsx-runtime").JSX.Element;
export { GridList };
export type { GridListProps };
