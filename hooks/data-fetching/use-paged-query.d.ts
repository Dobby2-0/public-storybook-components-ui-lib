import { PaginatedResult } from '../../types/paginated-data.ts';
import { PageInfo } from '../../utils/table.ts';
import { OperationVariables, QueryOptions, TypedDocumentNode } from '@apollo/client';
import { Dispatch, SetStateAction } from '../../../node_modules/react';
interface PagedQueryOptions<TData> extends Pick<QueryOptions<OperationVariables, TData>, "fetchPolicy" | "context" | "errorPolicy"> {
    /** Skip fetching entirely */
    skip?: boolean;
}
interface PagedQueryConfig<TKey extends string, TNode> {
    query: TypedDocumentNode<PaginatedResult<TKey, TNode>, OperationVariables>;
    queryVariables: OperationVariables;
    dataPropertyName: TKey;
    options?: PagedQueryOptions<PaginatedResult<TKey, TNode>>;
    defaultPageSize?: number;
    errorMessage?: string;
}
interface PagedQueryResult<TNode> {
    items: TNode[];
    pageInfo: PageInfo | undefined;
    totalCount: number;
}
export interface PagedResultBase {
    /** Total items matching the query, across all pages. */
    totalCount: number;
    /** True while the current page is being fetched. */
    loading: boolean;
    /** Error from the most recent fetch, if any. */
    error: unknown;
    /** True once loading has finished and totalCount is zero. */
    hasNoResults: boolean;
    /** Current page size. */
    pageSize: number;
    /** Changes the page size; jumps back to page 1, same as `refetch`. */
    setPageSize: Dispatch<SetStateAction<number>>;
    /** Clears cursor bookkeeping, evicts the cached field and resets to page 1 */
    refetch: () => void | Promise<void>;
}
/**
 * Fetches a single page from a cursor-paginated GraphQL connection, given
 * any page index.
 */
declare const usePagedQuery: <TKey extends string, TNode>({ query, queryVariables, dataPropertyName, options, }: PagedQueryConfig<TKey, TNode>) => {
    readonly resolvePage: (targetIndex: number, pageSize: number) => Promise<PagedQueryResult<TNode>>;
    readonly resetCache: () => void;
    readonly invalidateCache: () => void;
};
export { usePagedQuery };
export type { PagedQueryConfig, PagedQueryOptions };
