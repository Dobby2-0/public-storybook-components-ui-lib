import { PaginatedResult } from '../types/paginated-data.ts';
import { PageInfo } from '../utils/table.ts';
import { OperationVariables, QueryHookOptions, TypedDocumentNode } from '@apollo/client';
interface UsePaginatedDataOptions<TKey extends string, TNode> {
    query: TypedDocumentNode<PaginatedResult<TKey, TNode>, OperationVariables>;
    queryVariables: OperationVariables;
    dataPropertyName: TKey;
    errorMessage?: string;
    options?: QueryHookOptions<PaginatedResult<TKey, TNode>>;
}
/** A custom hook to fetch and manage paginated data using Apollo Client. */
export declare const usePaginatedData: <TKey extends string, TNode>({ query, queryVariables, dataPropertyName, errorMessage, options, }: UsePaginatedDataOptions<TKey, TNode>) => {
    readonly error: import('@apollo/client').ApolloError | undefined;
    readonly fetchMore: <TFetchData = PaginatedResult<TKey, TNode>, TFetchVars extends OperationVariables = OperationVariables>(fetchMoreOptions: import('@apollo/client').FetchMoreQueryOptions<TFetchVars, TFetchData> & {
        updateQuery?: ((previousQueryResult: import('@apollo/client').Unmasked<PaginatedResult<TKey, TNode>>, options: {
            fetchMoreResult: import('@apollo/client').Unmasked<TFetchData>;
            variables: TFetchVars;
        }) => import('@apollo/client').Unmasked<PaginatedResult<TKey, TNode>>) | undefined;
    }) => Promise<import('@apollo/client').ApolloQueryResult<TFetchData>>;
    readonly handleLoadMore: () => Promise<boolean>;
    readonly hasNextPage: boolean;
    readonly items: TNode[];
    readonly loading: boolean;
    readonly pageInfoRef: import('../../node_modules/react').RefObject<PageInfo | undefined>;
    readonly refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<import('@apollo/client').ApolloQueryResult<PaginatedResult<TKey, TNode>>>;
    readonly totalCount: number;
};
export {};
