import { Sort } from '../components/Table/Ag-Grid/Ag-grid-table.tsx';
import { IDatasource } from 'ag-grid-community';
import { RefObject } from '../../node_modules/react';
export interface PageInfo {
    hasNextPage: boolean;
    endCursor: string;
}
export interface QueryResponse {
    data: Record<string, {
        edges: {
            node: unknown;
        }[];
        totalCount: number;
    }>;
}
export interface CreateDatasourceOptions {
    refetch: (variables: Record<string, unknown>) => Promise<QueryResponse>;
    fetchMore: (options: {
        variables: Record<string, unknown>;
    }) => Promise<QueryResponse>;
    queryVariables: Record<string, unknown>;
    pageInfoRef: RefObject<PageInfo | undefined>;
    dataPropertyName: string;
}
export declare const useDatasource: (options: CreateDatasourceOptions) => IDatasource;
/** Recursively gets the sort direction of a column and translates from API to AgGrid format */
export declare const getSortDirection: (sort: Sort | Sort[] | undefined, column: string) => "asc" | "desc" | undefined;
