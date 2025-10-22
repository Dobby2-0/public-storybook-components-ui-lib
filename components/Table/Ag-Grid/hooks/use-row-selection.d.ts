declare const useRowSelection: (selectionMode?: "single" | "multiple", selectedRowIds?: string[] | "all", onRowSelectionChange?: (selectedIds: string[] | "all") => void) => {
    internalSelectedIds: Record<string, boolean>;
    setInternalSelectedIds: import('../../../../../node_modules/react').Dispatch<import('../../../../../node_modules/react').SetStateAction<Record<string, boolean>>>;
    allSelected: boolean;
    setAllSelected: import('../../../../../node_modules/react').Dispatch<import('../../../../../node_modules/react').SetStateAction<boolean>>;
    handleSelectAll: () => void;
    handleRowSelect: (id: string, selected: boolean) => void;
};
export { useRowSelection };
