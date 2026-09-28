import { Sort } from '../../components/Table/Ag-Grid/types';
import { useInfiniteQuery } from './use-infinite-query.ts';
import { PaginatedResult } from '../../types/paginated-data.ts';
import { PageInfo } from '../../utils/table.ts';
import { ApolloQueryResult, FetchMoreQueryOptions, OperationVariables } from '@apollo/client';
import { IDatasource, SortModelItem } from 'ag-grid-community';
import { RefObject } from '../../../node_modules/react';
interface CreateDatasourceOptions<TKey extends string, TNode> {
    refetch: (variables: OperationVariables) => Promise<ApolloQueryResult<PaginatedResult<TKey, TNode>>>;
    fetchMore: (options: FetchMoreQueryOptions<OperationVariables, PaginatedResult<TKey, TNode>>) => Promise<ApolloQueryResult<PaginatedResult<TKey, TNode>>>;
    queryVariables: OperationVariables;
    pageInfoRef: RefObject<PageInfo | undefined>;
    dataPropertyName: TKey;
    /**
     * Derives the current Sort[] from Ag-Grid's own sort model
     */
    getSort?: (sortModel: SortModelItem[]) => Sort[];
}
/**
 * Combines `useInfiniteQuery` with an Ag-Grid infinite-row-model datasource
 * built on top of it.
 */
export declare const useInfiniteDatasource: <TKey extends string, TNode>(options: Parameters<typeof useInfiniteQuery<TKey, TNode>>[0] & {
    getSort?: CreateDatasourceOptions<TKey, TNode>["getSort"];
}) => {
    readonly datasource: IDatasource;
    readonly error: import('@apollo/client').ApolloError | undefined;
    readonly fetchMore: <TFetchData = PaginatedResult<TKey, TNode>, TFetchVars extends OperationVariables = OperationVariables>(fetchMoreOptions: FetchMoreQueryOptions<TFetchVars, TFetchData> & {
        updateQuery?: ((previousQueryResult: import('@apollo/client').Unmasked<PaginatedResult<TKey, TNode>>, options: {
            fetchMoreResult: import('@apollo/client').Unmasked<TFetchData>;
            variables: TFetchVars;
        }) => import('@apollo/client').Unmasked<PaginatedResult<TKey, TNode>>) | undefined;
    }) => Promise<ApolloQueryResult<TFetchData>>;
    readonly handleLoadMore: () => Promise<boolean>;
    readonly hasNextPage: boolean;
    readonly hasNoResults: boolean;
    readonly items: TNode[];
    readonly loading: boolean;
    readonly isFetchingMoreData: boolean;
    readonly pageInfoRef: RefObject<PageInfo | undefined>;
    readonly refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<PaginatedResult<TKey, TNode>>>;
    readonly totalCount: number;
};
export type InfiniteDatasource<TKey extends string, TNode> = ReturnType<typeof useInfiniteDatasource<TKey, TNode>>;
/** @deprecated Renamed to `useInfiniteDatasource`. */
export declare const usePaginatedDatasource: <TKey extends string, TNode>(options: Parameters<typeof useInfiniteQuery<TKey, TNode>>[0] & {
    getSort?: CreateDatasourceOptions<TKey, TNode>["getSort"];
}) => {
    readonly datasource: IDatasource;
    readonly error: import('@apollo/client').ApolloError | undefined;
    readonly fetchMore: <TFetchData = PaginatedResult<TKey, TNode>, TFetchVars extends OperationVariables = OperationVariables>(fetchMoreOptions: FetchMoreQueryOptions<TFetchVars, TFetchData> & {
        updateQuery?: ((previousQueryResult: import('@apollo/client').Unmasked<PaginatedResult<TKey, TNode>>, options: {
            fetchMoreResult: import('@apollo/client').Unmasked<TFetchData>;
            variables: TFetchVars;
        }) => import('@apollo/client').Unmasked<PaginatedResult<TKey, TNode>>) | undefined;
    }) => Promise<ApolloQueryResult<TFetchData>>;
    readonly handleLoadMore: () => Promise<boolean>;
    readonly hasNextPage: boolean;
    readonly hasNoResults: boolean;
    readonly items: TNode[];
    readonly loading: boolean;
    readonly isFetchingMoreData: boolean;
    readonly pageInfoRef: RefObject<PageInfo | undefined>;
    readonly refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<PaginatedResult<TKey, TNode>>>;
    readonly totalCount: number;
};
/** @deprecated Renamed to `InfiniteDatasource`. */
export type PaginatedDatasource<TKey extends string, TNode> = InfiniteDatasource<TKey, TNode>;
export {};
