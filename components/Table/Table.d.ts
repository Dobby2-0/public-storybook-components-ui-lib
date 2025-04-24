import { ReactNode } from '../../../node_modules/react';
import { ColumnProps as AriaColumnProps, TableProps as AriaTableProps, SortDescriptor } from 'react-aria-components';
export interface ColumnProps extends AriaColumnProps {
    isResizable?: boolean;
}
interface ColumnDefinition {
    id: string;
    title: ReactNode;
    defaultHidden?: boolean;
    allowsSorting?: ColumnProps["allowsSorting"];
    isResizable?: ColumnProps["isResizable"];
    width?: ColumnProps["width"];
    defaultWidth?: ColumnProps["defaultWidth"];
    minWidth?: ColumnProps["minWidth"];
    maxWidth?: ColumnProps["maxWidth"];
}
interface InternalColumnDefinition extends ColumnDefinition {
    hidden?: boolean;
    isRowHeader?: ColumnProps["isRowHeader"];
}
interface TableProps extends AriaTableProps {
    /** Default column configuration */
    columns: ColumnDefinition[];
    /** data array with objects conforming to the defined columns */
    dataSource: (Record<"id", string> & Record<string, string | ReactNode>)[];
    /** add a button at the end of the row, indicating navigation is possible */
    addRowButton?: boolean;
    /** optional identifier used for locally storing column configuration */
    id?: string;
    /** disable the options menu for toggling/re-ordering columns */
    disableColumnOptions?: boolean;
}
/**
 * A table displays data in rows and columns and enables a user to navigate its contents via directional navigation keys, and optionally supports row selection and sorting.
 *
 * Based on `React-aria-components`
 */
declare const Table: ({ id, columns, dataSource, addRowButton, onRowAction, disableColumnOptions, ...props }: TableProps) => import("react/jsx-runtime").JSX.Element | undefined;
export { Table };
export type { ColumnDefinition, InternalColumnDefinition, SortDescriptor, TableProps, };
