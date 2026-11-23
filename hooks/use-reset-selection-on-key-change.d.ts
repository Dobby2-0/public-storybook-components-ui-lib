/**
 * Clears the selection when `resetKey` changes, e.g. after the filters changed:
 * the selection then refers to rows of the previous data.
 *
 * Skips the first render, and does nothing while the key stays the same, so
 * paging, a page size change or a plain refetch keep the selection.
 */
declare const useResetSelectionOnKeyChange: (resetKey: string | number | undefined, hasSelection: boolean, clearSelection: () => void) => void;
export { useResetSelectionOnKeyChange };
