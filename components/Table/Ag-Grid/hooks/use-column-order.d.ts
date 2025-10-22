import { Column, ColumnMovedEvent, GridApi } from 'ag-grid-community';
declare const useColumnOrder: (columns: Column[] | undefined, api: GridApi | undefined, id?: string) => {
    columnOrder: string[];
    setColumnOrder: import('../../../../../node_modules/react').Dispatch<import('../../../../../node_modules/react').SetStateAction<string[]>>;
    restoreColumnState: (api: GridApi) => void;
    saveColumnState: (api: GridApi) => void;
    handleColumnMoved: (event: ColumnMovedEvent) => void;
    handleTableOptionsOrderChange: (oldIndex: number, newIndex: number) => void;
};
export { useColumnOrder };
