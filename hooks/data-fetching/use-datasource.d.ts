import { Sort } from '../../components/Table/Ag-Grid/types';
import { usePaginatedData } from './use-paginated-data.ts';
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
/** A custom hook to combine paginated data fetching with an Ag-Grid datasource. */
export declare const usePaginatedDatasource: <TKey extends string, TNode>(options: Parameters<typeof usePaginatedData<TKey, TNode>>[0] & {
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
export type PaginatedDatasource<TKey extends string, TNode> = ReturnType<typeof usePaginatedDatasource<TKey, TNode>>;
export {};
