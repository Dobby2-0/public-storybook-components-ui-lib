import { InternalColumnDefinition } from './Table.tsx';
interface TableOptionsProps {
    columns: InternalColumnDefinition[];
    onSelectionChange?: (keys: string[]) => void;
    onOrderChange?: (items: string[]) => void;
}
declare const TableOptions: ({ columns, onSelectionChange, onOrderChange, }: TableOptionsProps) => import("react/jsx-runtime").JSX.Element;
export { TableOptions };
