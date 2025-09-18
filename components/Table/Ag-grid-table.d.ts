import { ColDef, GetRowIdParams, IDatasource, SortChangedEvent } from 'ag-grid-community';
import { AgGridReactProps, CustomCellRendererProps } from 'ag-grid-react';
interface ClassNameObject {
    base?: string;
    grid?: string;
}
interface Sort {
    column: string;
    direction?: "ASC" | "DESC";
    value?: Record<string, Sort["direction"]>;
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
    /** enable row selection */
    enableRowSelection?: boolean;
    /** optional id for localstorage key */
    id?: string;
    /** Optional: onDetailsClick callback */
    onDetailsClick?: (id: string) => void;
    /** Optional: onRowSelectionChange callback */
    onRowSelectionChange?: (selectedIds: string[] | "all") => void;
    /** Optional: add a button at the end of the row, indicating navigation is possible */
    addRowButton?: boolean;
    /** Optional: disable column options */
    disableColumnOptions?: boolean;
    /** Optional: menu items for options dropdown */
    menuItems?: {
        id: string;
        label: string;
        onAction: (rowId: string) => void;
    }[];
}
declare const AgGridTable: <RowData extends {
    id: string;
}>({ className, rowData, columnDefs, showRowCount, totalCount, rowModelType, cacheBlockSize, maxConcurrentDatasourceRequests, themeType, onDetailsClick, onRowSelectionChange, enableRowSelection, addRowButton, disableColumnOptions, menuItems, id, ...agGridProps }: AgGridTableProps<RowData>) => import("react/jsx-runtime").JSX.Element;
export { AgGridTable };
export type { ColDef, CustomCellRendererProps, GetRowIdParams, IDatasource, Sort, SortChangedEvent, };
