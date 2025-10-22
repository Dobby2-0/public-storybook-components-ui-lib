import { AgGridTableProps, RowMenuItem } from '../Ag-grid-table.tsx';
import { ColDef } from 'ag-grid-community';
/** Helper to create selection column */
declare const buildSelectionColumn: <T extends {
    id: string;
}>(selectionMode: AgGridTableProps<T>["selectionMode"], isDobby: boolean, internalSelectedIds: Record<string, boolean>, allSelected: boolean, handleRowSelect: (id: string, selected: boolean) => void, enableSelectAll: boolean | undefined, handleSelectAll: () => void, totalCount: number | undefined) => ColDef<T>[];
/** Helper to create options column */
declare const buildOptionsColumn: <T extends {
    id: string;
}>(addRowButton: boolean, disableColumnOptions: boolean, menuItems: RowMenuItem[] | undefined, isDobby: boolean, onDetailsClick: ((id: string) => void) | undefined) => ColDef<T>[];
/** Helper to disable sorting resizing & dragging columns */
declare const simplifyColumns: <T>(col: ColDef<T>) => ColDef<T>;
export { buildOptionsColumn, buildSelectionColumn, simplifyColumns };
