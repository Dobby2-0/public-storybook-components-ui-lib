import { AnyRowSelectionValue, RowSelectionChangeHandler } from '../types';
declare const useRowSelection: (selectionMode?: "single" | "multiple", selectedRowIds?: AnyRowSelectionValue, onRowSelectionChange?: RowSelectionChangeHandler, totalCount?: number) => {
    handleClearSelection: () => void;
    handleSelectIds: (ids: string[], selected: boolean) => void;
    handleSetSelection: (ids: string[]) => void;
    internalSelectedIds: Set<string>;
    setInternalSelectedIds: import('../../../../../node_modules/react').Dispatch<import('../../../../../node_modules/react').SetStateAction<Set<string>>>;
    excludedIds: Set<string>;
    allSelected: boolean;
    setAllSelected: import('../../../../../node_modules/react').Dispatch<import('../../../../../node_modules/react').SetStateAction<boolean>>;
    handleSelectAll: () => void;
    handleRowSelect: (id: string, selected: boolean) => void;
};
export { useRowSelection };
