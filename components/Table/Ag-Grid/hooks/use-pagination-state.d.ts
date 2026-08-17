import { PaginationChangedEvent } from 'ag-grid-community';
export declare const usePaginationState: <RowData extends {
    id: string;
}>() => {
    readonly paginationState: {
        currentPage: number;
        totalPages: number;
    };
    readonly handlePaginationChanged: (event: PaginationChangedEvent<RowData>) => void;
};
