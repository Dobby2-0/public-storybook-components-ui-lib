import { Column, GridApi } from 'ag-grid-community';
interface GridApiContextProps {
    api?: GridApi;
    columns?: Column[];
    saveColumnState?: (api: GridApi) => void;
    columnOrder?: string[];
    handleOrderChange?: (oldIndex: number, newIndex: number) => void;
}
declare const GridApiContext: import('../../../../../node_modules/react').Context<GridApiContextProps>;
export { GridApiContext };
export type { GridApiContextProps };
