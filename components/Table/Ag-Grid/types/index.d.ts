import { EmptyStateContent } from '../../../EmptyState/EmptyState';
import { AgGridReactProps } from 'ag-grid-react';
export interface ClassNameObject {
    base?: string;
    grid?: string;
}
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
export interface AgGridTableProps<RowData extends {
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
    /** Type of row selection allowed, undefined equals no row selection */
    selectionMode?: "single" | "multiple";
    /** Enable selecting all rows at once, only works when using `selectionMode="multiple"` */
    enableSelectAll?: boolean;
    /** Selected row ids used for row selection (controlled) */
    selectedRowIds?: string[] | "all";
    /** Optional: onRowSelectionChange callback */
    onRowSelectionChange?: (selectedIds: string[] | "all") => void;
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
