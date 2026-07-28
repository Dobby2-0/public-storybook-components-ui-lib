import { AgGridTableProps, RowMenuItem } from '../types';
import { ColDef } from 'ag-grid-community';
interface UseComposedColumnDefsParams<RowData extends {
    id: string;
}> {
    columnDefs?: ColDef<RowData>[] | null;
    isDobby: boolean;
    selectionMode: AgGridTableProps<RowData>["selectionMode"];
    enableSelectAll?: boolean;
    disableRowSelectionCondition?: (row: RowData) => boolean;
    addRowButton?: boolean;
    disableColumnOptions?: boolean;
    menuItems?: RowMenuItem[];
    onDetailsClick?: (id: string) => void;
}
/**
 * Builds the final columnDefs: Selection column + caller's columns + Options column,
 * wrapping non-special columns with a skeleton-loading cell renderer.
 */
declare const useComposedColumnDefs: <RowData extends {
    id: string;
}>({ columnDefs, isDobby, selectionMode, enableSelectAll, disableRowSelectionCondition, addRowButton, disableColumnOptions, menuItems, onDetailsClick, }: UseComposedColumnDefsParams<RowData>) => ColDef<RowData>[];
export { useComposedColumnDefs };
