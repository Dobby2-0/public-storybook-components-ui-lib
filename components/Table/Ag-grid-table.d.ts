import { ColDef, GetRowIdParams, IDatasource, RowClickedEvent, SortChangedEvent } from 'ag-grid-community';
import { AgGridReactProps } from 'ag-grid-react';
interface ClassNameObject {
    base?: string;
    grid?: string;
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
    /** AG Grid getRowId callback */
    getRowId?: (params: GetRowIdParams<RowData>) => string;
    /** AG Grid datasource for infinite mode */
    datasource?: IDatasource;
    /** AG Grid rowModelType */
    rowModelType?: "infinite";
    /** AG Grid cacheBlockSize */
    cacheBlockSize?: number;
    /** AG Grid maxConcurrentDatasourceRequests */
    maxConcurrentDatasourceRequests?: number;
    /** AG Grid onSortChanged callback */
    onSortChanged?: (event: SortChangedEvent) => void;
    /** AG Grid onRowClicked callback */
    onRowClicked?: (event: RowClickedEvent<RowData>) => void;
    /** AG Grid defaultColDef */
    defaultColDef?: ColDef<RowData>;
    /** Theme type : dobby or clasic */
    themeType?: "dobby" | "clasic";
    /** enable row selection */
    enableRowSelection?: boolean;
    /** optional id for localstorage key */
    id?: string;
    /** Optional: onDetailsClick callback */
    onDetailsClick?: (id: string) => void;
    /** Optional: onRowSelectionChange callback */
    onRowSelectionChange?: (selectedIds: string[] | "all") => void;
    /** Optional: disable column options */
    disableColumnOptions?: boolean;
}
declare const AgGridTable: <RowData extends {
    id: string;
}>({ className, rowData, columnDefs, showRowCount, totalCount, getRowId, datasource, rowModelType, cacheBlockSize, maxConcurrentDatasourceRequests, onRowClicked, themeType, onDetailsClick, onRowSelectionChange, enableRowSelection, disableColumnOptions, id, ...agGridProps }: AgGridTableProps<RowData>) => import("react/jsx-runtime").JSX.Element;
export { AgGridTable };
