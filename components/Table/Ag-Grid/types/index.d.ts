import { EmptyStateContent } from '../../../EmptyState/EmptyState';
import { AgGridReactProps } from 'ag-grid-react';
import { ReactNode } from '../../../../../node_modules/react';
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
/** What a custom select-all menu can use to build and run its items */
export interface SelectAllMenuContext {
    /** Ids of the selectable (loaded, non-disabled) rows on the current page */
    pageIds: string[];
    /** Total row count of the table, if known */
    totalCount?: number;
    /** Selects the selectable rows on the current page (the default "page" item) */
    selectPage: () => void;
    /** Selects everything by emitting `"all"` (the default "all" item) */
    selectAll: () => void;
    /** Replaces the selection with exactly these ids */
    setSelection: (ids: string[]) => void;
    /** Clears the whole selection */
    clearSelection: () => void;
}
export interface SelectAllMenuItem {
    id: string;
    label: ReactNode;
    isDisabled?: boolean;
    onAction: () => void;
}
/** Builds the items of the dropdown next to the select-all header checkbox */
export type SelectAllMenuItemsBuilder = (context: SelectAllMenuContext) => SelectAllMenuItem[];
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
}> extends Omit<Partial<AgGridReactProps<RowData>>, "className" | "pagination"> {
    /** The CSS className for the element. */
    className?: string | ClassNameObject;
    /** Optional: Show row count below the table */
    showRowCount?: boolean;
    /** Optional: Total row count (for infinite mode) */
    totalCount?: number;
    /** Theme type : dobby or classic */
    themeType?: "dobby" | "classic";
    /** Optional: enables sorting for the dobby theme */
    enableDobbySorting?: boolean;
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
    /**
     * Clears the selection whenever this key changes. Derive it from what decides
     * which rows exist (filters, search), never from the page or page size: those
     * keep the selection. `useResponsiveList` provides it in its `tableProps`.
     */
    selectionResetKey?: string | number;
    /** Optional: Disable row selection based on a condition */
    disableRowSelectionCondition?: (row: RowData) => boolean;
    /** Optional: show skeleton loaders for cient-side row model */
    loading?: boolean;
    /** Optional: customize the empty-state overlay */
    emptyState?: EmptyStateContent;
    /**
     * Optional: renders our own Pagination + page-size Select instead of AgGrid's built-in panel.
     * Pass `page` to page the rows yourself: the grid then only holds the current page.
     */
    pagination?: {
        pageSizeOptions?: number[];
        onPageSizeChange: (size: number) => void;
        /** Controlled paging: the current page, from 1. */
        page?: number;
        /** Controlled paging: the total number of pages. */
        totalPages?: number;
        /** Controlled paging: called with the requested page, from 1. */
        onPageChange?: (page: number) => void;
    };
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
    /**
     * Optional: replaces the items of the select-all dropdown, which only shows on
     * tables with our own `pagination`. Without it the table offers "All on this
     * page" and "All (total)". Wrap in `useCallback`: a new function every render
     * re-renders the selection column on every render of the parent.
     */
    selectAllMenuItems?: SelectAllMenuItemsBuilder;
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
    /** Optional: custom items for the select-all dropdown, see `AgGridTableProps` */
    selectAllMenuItems?: SelectAllMenuItemsBuilder;
    /** Selected row ids used for row selection (controlled) */
    selectedRowIds?: AnyRowSelectionValue;
    /** Optional: onRowSelectionChange callback */
    onRowSelectionChange?: RowSelectionChangeHandler;
};
export {};
