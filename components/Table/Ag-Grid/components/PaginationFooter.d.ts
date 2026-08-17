import { AgGridTableProps } from '../types';
interface PaginationFooterProps<RowData extends {
    id: string;
}> {
    pagination: AgGridTableProps<RowData>["pagination"];
    pageSize: number;
    currentPage: number;
    totalPages: number;
    rowsLoaded: boolean;
    loading?: boolean;
    totalCount?: number;
    className?: string;
}
declare const PaginationFooter: <RowData extends {
    id: string;
}>({ pagination, pageSize, currentPage, totalPages, rowsLoaded, loading, totalCount, className, }: PaginationFooterProps<RowData>) => import("react/jsx-runtime").JSX.Element | undefined;
export { PaginationFooter };
