import { ModelUpdatedEvent, RowModelType } from 'ag-grid-community';
/**
 * Tracks empty-state / row-count-footer visibility and supplies skeleton row data
 * while a client-side table is loading.
 */
declare const useGridLoadingState: <RowData extends {
    id: string;
}>(rowData?: RowData[] | null, rowModelType?: RowModelType, loading?: boolean, showRowCount?: boolean) => {
    effectiveRowData: RowData[] | null | undefined;
    isEmptyState: boolean;
    showRowCountInternal: boolean;
    handleModelUpdated: (event: ModelUpdatedEvent<RowData>) => void;
};
export { useGridLoadingState };
