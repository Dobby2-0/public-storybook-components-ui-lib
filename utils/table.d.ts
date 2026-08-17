import { Sort } from '../components/Table/Ag-Grid/Ag-grid-table.tsx';
/** Page size options to be used with a table */
export declare const DEFAULT_PAGE_SIZE_OPTIONS: number[];
/** Page size options to be used with a list of cards */
export declare const DEFAULT_MOBILE_PAGE_SIZE_OPTIONS: number[];
export interface PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
}
/** Recursively gets the sort direction of a column and translates from API to AgGrid format */
export declare const getSortDirection: (sort: Sort | Sort[] | undefined, column: string) => "asc" | "desc" | undefined;
