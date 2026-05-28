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
    /** Whether the query encountered an error. */
    readonly error: import('@apollo/client').ApolloError | undefined;
    /** Apollo fetchMore function for cursor-based pagination. */
    readonly fetchMore: <TFetchData = PaginatedResult<TKey, TNode>, TFetchVars extends OperationVariables = OperationVariables>(fetchMoreOptions: import('@apollo/client').FetchMoreQueryOptions<TFetchVars, TFetchData> & {
        updateQuery?: ((previousQueryResult: import('@apollo/client').Unmasked<PaginatedResult<TKey, TNode>>, options: {
            fetchMoreResult: import('@apollo/client').Unmasked<TFetchData>;
            variables: TFetchVars;
        }) => import('@apollo/client').Unmasked<PaginatedResult<TKey, TNode>>) | undefined;
    }) => Promise<import('@apollo/client').ApolloQueryResult<TFetchData>>;
    /** Loads the next page, returns whether more pages exist. */
    readonly handleLoadMore: () => Promise<boolean>;
    /** Whether there are more pages to load. */
    readonly hasNextPage: boolean;
    /** Whether the initial fetch returned zero results. */
    readonly hasNoResults: boolean;
    /** The flattened array of nodes from all loaded pages. */
    readonly items: TNode[];
    /** Whether a query is currently in flight. */
    readonly loading: boolean;
    /** Whether this query is fetching more data */
    readonly isFetchingMoreData: boolean;
    /** Ref tracking the current page cursor info. */
    readonly pageInfoRef: import('../../node_modules/react').RefObject<PageInfo | undefined>;
    /** Re-executes the query with the given variables. */
    readonly refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<import('@apollo/client').ApolloQueryResult<PaginatedResult<TKey, TNode>>>;
    /** Total number of items matching the query. */
    readonly totalCount: number;
};
export {};
