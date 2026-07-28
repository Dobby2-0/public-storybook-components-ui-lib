interface RowSelectionContextProps {
    selectedIds: Set<string>;
    allSelected: boolean;
    excludedIds: Set<string>;
    handleRowSelect: (id: string, selected: boolean) => void;
    handleSelectAll: () => void;
    totalCount?: number;
}
declare const RowSelectionContext: import('../../../../../node_modules/react').Context<RowSelectionContextProps>;
export { RowSelectionContext };
export type { RowSelectionContextProps };
