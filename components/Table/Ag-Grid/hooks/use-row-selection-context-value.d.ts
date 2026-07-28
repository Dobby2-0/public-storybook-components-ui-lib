import { RowSelectionContextProps } from '../contexts/RowSelectionContext.tsx';
import { AnyRowSelectionValue, RowSelectionChangeHandler } from '../types';
/**
 * Wraps useRowSelection and assembles the value for RowSelectionContext.Provider,
 * also returning handleRowSelect directly for callers that need it outside the context
 * (e.g. row-click-to-select).
 */
declare const useRowSelectionContextValue: (selectionMode?: "single" | "multiple", selectedRowIds?: AnyRowSelectionValue, onRowSelectionChange?: RowSelectionChangeHandler, totalCount?: number) => {
    contextValue: RowSelectionContextProps;
    handleRowSelect: (id: string, selected: boolean) => void;
};
export { useRowSelectionContextValue };
