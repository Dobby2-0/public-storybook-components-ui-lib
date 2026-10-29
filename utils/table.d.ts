import { Sort, SortDirection } from '../components/Table/Ag-Grid/Ag-grid-table.tsx';
import { ApplyColumnStateParams, GridApi, SortChangedEvent } from 'ag-grid-community';
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
/** Converts Sort[] model into graphQL ´order´ shape */
export declare const sortToOrder: (sort: Sort[]) => {
    [x: string]: SortDirection | import('../components/Table/Ag-Grid/Ag-grid-table.tsx').SortValue | undefined;
}[];
/** True if any column currently has an active sort. */
export declare const hasActiveSort: (api: GridApi) => boolean;
/**
 * Creates an `onSortChanged` handler that falls back to a default sort when the user
 * clears the last active sort (so the table never ends up without any sorting).
 * `defaultState` defaults to removing the sort from all other columns.
 *
 * @example
 * <AgGridTable
 *   onSortChanged={createDefaultSortHandler({
 *     state: [{colId: "createdAt", sort: "desc"}],
 *   })}
 * />
 */
export declare const createDefaultSortHandler: ({ state, defaultState, ...rest }: ApplyColumnStateParams) => (event: SortChangedEvent) => void;
