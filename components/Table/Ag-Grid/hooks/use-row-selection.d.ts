import { AnyRowSelectionValue, RowSelectionChangeHandler } from '../types';
declare const useRowSelection: (selectionMode?: "single" | "multiple", selectedRowIds?: AnyRowSelectionValue, onRowSelectionChange?: RowSelectionChangeHandler) => {
    internalSelectedIds: Set<string>;
    setInternalSelectedIds: import('../../../../../node_modules/react').Dispatch<import('../../../../../node_modules/react').SetStateAction<Set<string>>>;
    excludedIds: Set<string>;
    allSelected: boolean;
    setAllSelected: import('../../../../../node_modules/react').Dispatch<import('../../../../../node_modules/react').SetStateAction<boolean>>;
    handleSelectAll: () => void;
    handleRowSelect: (id: string, selected: boolean) => void;
};
export { useRowSelection };
