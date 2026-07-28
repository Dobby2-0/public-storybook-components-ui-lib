import { ICellRendererParams, IHeaderParams } from 'ag-grid-community';
interface CheckboxCellRendererParams<T> {
    disableRowSelectionCondition?: (row: T) => boolean;
}
declare const CheckboxCellRenderer: <T extends {
    id: string;
}>(params: ICellRendererParams<T> & CheckboxCellRendererParams<T>) => import("react/jsx-runtime").JSX.Element;
declare const SelectionHeaderCheckbox: (params: IHeaderParams) => import("react/jsx-runtime").JSX.Element;
export { CheckboxCellRenderer, SelectionHeaderCheckbox };
