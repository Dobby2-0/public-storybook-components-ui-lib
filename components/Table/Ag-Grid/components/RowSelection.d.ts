declare const CheckboxCellRenderer: (selectedIds: Record<string, boolean>, allSelected: boolean, handleRowSelect: (id: string, selected: boolean) => void) => {
    (props: {
        data: {
            id: string;
        };
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectionHeaderCheckbox: (selectedIds: Record<string, boolean>, allSelected: boolean, handleSelectAll: () => void, totalCount?: number) => {
    (): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { CheckboxCellRenderer, SelectionHeaderCheckbox };
