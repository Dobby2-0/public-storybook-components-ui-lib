import { InternalColumnDefinition } from './Table.tsx';
interface TableOptionsProps {
    columns: InternalColumnDefinition[];
    onSelectionChange?: (keys: string[]) => void;
    onColumnSelectionChange?: (key: string, visible: boolean) => void;
    onOrderChange?: (items: string[]) => void;
    onIndexChange?: (oldIndex: number, newIndex: number) => void;
}
declare const TableOptions: ({ columns, onSelectionChange, onColumnSelectionChange, onOrderChange, onIndexChange, }: TableOptionsProps) => import("react/jsx-runtime").JSX.Element;
export { TableOptions };
