import { AgGridTableProps } from './types';
import { AgGridReact } from 'ag-grid-react';
import { ReactElement, Ref } from '../../../../node_modules/react';
declare const AgGridTable: <RowData extends {
    id: string;
}>(props: AgGridTableProps<RowData> & {
    ref?: Ref<AgGridReact<RowData>>;
}) => ReactElement | null;
export type { AgGridTableProps, RowMenuItem, Sort, SortDirection, SortValue, } from './types';
export type { ColDef, GetRowIdParams, IDatasource, RowClickedEvent, SortChangedEvent, ValueGetterParams, } from 'ag-grid-community';
export type { AgGridReact, CustomCellRendererProps } from 'ag-grid-react';
export { AgGridTable };
