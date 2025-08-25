import { IDatasource } from 'ag-grid-community';
import { MutableRefObject } from '../../node_modules/react';
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
    pageInfoRef: MutableRefObject<PageInfo | undefined>;
    dataPropertyName: string;
}
export declare const useDatasource: (options: CreateDatasourceOptions) => IDatasource;
