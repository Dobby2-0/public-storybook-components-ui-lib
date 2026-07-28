import { EmptyStateContent } from '../../../EmptyState/EmptyState';
import { AgGridReactProps } from 'ag-grid-react';
export interface ClassNameObject {
    base?: string;
    grid?: string;
}
export type RowSelectionValue = "all" | string[] | {
    excludedIds: string[];
};
export type AnyRowSelectionValue = string | string[] | {
    excludedIds: string[];
};
export type RowSelectionChangeHandler = ((selectedIds: RowSelectionValue) => void) | ((selectedId: string | undefined) => void);
export type SortDirection = "ASC" | "DESC";
export type SortValue = Record<string, SortDirection | Record<string, SortDirection>>;
export interface Sort {
    column: string;
    direction?: SortDirection;
    value?: SortValue;
}
export interface RowMenuItem {
    id: string;
    label: string;
    onAction: (rowId: string) => void;
}
export interface BaseAgGridTableProps<RowData extends {
    id: string;
}> extends Omit<Partial<AgGridReactProps<RowData>>, "className"> {
    /** The CSS className for the element. */
    className?: string | ClassNameObject;
    /** Optional: Show row count below the table */
    showRowCount?: boolean;
    /** Optional: Total row count (for infinite mode) */
    totalCount?: number;
    /** Theme type : dobby or classic */
    themeType?: "dobby" | "classic";
    /** optional id for localstorage key */
    id?: string;
    /** Optional: onDetailsClick callback */
    onDetailsClick?: (id: string) => void;
    /** Enable selecting row on row click */
    selectOnRowClick?: boolean;
    /** Optional: add a button at the end of the row, indicating navigation is possible */
    addRowButton?: boolean;
    /** Optional: disable column options */
    disableColumnOptions?: boolean;
    /** Optional: menu items for options dropdown */
    menuItems?: RowMenuItem[];
    /** Optional: Disable row selection based on a condition */
    disableRowSelectionCondition?: (row: RowData) => boolean;
    /** Optional: show skeleton loaders for cient-side row model */
    loading?: boolean;
    /** Optional: customize the empty-state overlay */
    emptyState?: EmptyStateContent;
}
interface SingleSelectionProps {
    selectionMode: "single";
    selectedRowIds?: string;
    onRowSelectionChange?: (selectedId: string | undefined) => void;
}
interface MultipleSelectionWithSelectAllProps {
    selectionMode: "multiple";
    enableSelectAll: true;
    selectedRowIds?: RowSelectionValue;
    onRowSelectionChange?: (selectedIds: RowSelectionValue) => void;
}
interface MultipleSelectionProps {
    selectionMode?: "multiple";
    enableSelectAll?: false;
    selectedRowIds?: string[];
    onRowSelectionChange?: (selectedIds: string[]) => void;
}
interface NoSelectionProps {
    selectionMode?: undefined;
    selectedRowIds?: undefined;
    onRowSelectionChange?: undefined;
}
export type AgGridTableProps<RowData extends {
    id: string;
}> = BaseAgGridTableProps<RowData> & (SingleSelectionProps | MultipleSelectionWithSelectAllProps | MultipleSelectionProps | NoSelectionProps);
export type AgGridTableInternalProps<RowData extends {
    id: string;
}> = BaseAgGridTableProps<RowData> & {
    /** Type of row selection allowed, undefined equals no row selection */
    selectionMode?: "single" | "multiple";
    /** Enable selecting all rows at once, only works when using `selectionMode="multiple"` */
    enableSelectAll?: boolean;
    /** Selected row ids used for row selection (controlled) */
    selectedRowIds?: AnyRowSelectionValue;
    /** Optional: onRowSelectionChange callback */
    onRowSelectionChange?: RowSelectionChangeHandler;
};
export {};
