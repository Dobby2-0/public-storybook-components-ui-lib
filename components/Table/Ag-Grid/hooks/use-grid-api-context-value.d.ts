import { GridApiContextProps } from '../contexts/GridApiContext';
import { ColumnVisibleEvent, GridApi, GridReadyEvent } from 'ag-grid-community';
/**
 * Tracks the grid API/columns and column ordering, assembling the value for
 * GridApiContext.Provider.
 */
declare const useGridApiContextValue: <RowData extends {
    id: string;
}>(id?: string) => {
    api: GridApi<RowData> | undefined;
    contextProviderValue: GridApiContextProps;
    handleGridReady: (event: GridReadyEvent<RowData>) => void;
    handleColumnVisible: (event: ColumnVisibleEvent) => void;
    handleColumnMoved: (event: import('ag-grid-community').ColumnMovedEvent) => void;
};
export { useGridApiContextValue };
