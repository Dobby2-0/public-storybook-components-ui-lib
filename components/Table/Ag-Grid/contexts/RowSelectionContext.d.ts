import { SelectAllMenuItemsBuilder } from '../types';
interface RowSelectionContextProps {
    /** Custom items for the select-all dropdown, replacing the defaults when set */
    selectAllMenuItems?: SelectAllMenuItemsBuilder;
    selectedIds: Set<string>;
    allSelected: boolean;
    excludedIds: Set<string>;
    handleRowSelect: (id: string, selected: boolean) => void;
    handleSelectAll: () => void;
    handleSelectIds: (ids: string[], selected: boolean) => void;
    handleClearSelection: () => void;
    handleSetSelection: (ids: string[]) => void;
    totalCount?: number;
}
declare const RowSelectionContext: import('../../../../../node_modules/react').Context<RowSelectionContextProps>;
export { RowSelectionContext };
export type { RowSelectionContextProps };
