import { ICellRendererParams, IHeaderParams } from 'ag-grid-community';
interface CheckboxCellRendererParams<T> {
    disableRowSelectionCondition?: (row: T) => boolean;
    alignWithMenu?: boolean;
}
declare const CheckboxCellRenderer: <T extends {
    id: string;
}>(params: ICellRendererParams<T> & CheckboxCellRendererParams<T>) => import("react/jsx-runtime").JSX.Element;
interface SelectionHeaderCheckboxParams<T> {
    /** True when the table renders our own pagination: enables page-level select all + dropdown */
    paginated?: boolean;
    disableRowSelectionCondition?: (row: T) => boolean;
}
declare const SelectionHeaderCheckbox: <T extends {
    id: string;
}>(params: IHeaderParams<T> & SelectionHeaderCheckboxParams<T>) => import("react/jsx-runtime").JSX.Element;
export { CheckboxCellRenderer, SelectionHeaderCheckbox };
