import { Sort } from '../components/Table/Ag-Grid/Ag-grid-table.tsx';
export interface PageInfo {
    hasNextPage: boolean;
    endCursor: string;
}
/** Recursively gets the sort direction of a column and translates from API to AgGrid format */
export declare const getSortDirection: (sort: Sort | Sort[] | undefined, column: string) => "asc" | "desc" | undefined;
