import { ICellRendererParams, IHeaderParams } from 'ag-grid-community';
declare const CheckboxCellRenderer: <T extends {
    id: string;
}>(selectedIds: Record<string, boolean>, allSelected: boolean, handleRowSelect: (id: string, selected: boolean) => void, disableRowSelectionCondition?: (row: T) => boolean) => {
    (params: ICellRendererParams<T>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectionHeaderCheckbox: (selectedIds: Record<string, boolean>, allSelected: boolean, handleSelectAll: () => void, totalCount?: number) => {
    (params: IHeaderParams): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { CheckboxCellRenderer, SelectionHeaderCheckbox };
