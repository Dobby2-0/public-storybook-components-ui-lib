import { PaginatedResult } from '../../types/paginated-data.ts';
import { DefaultContext, ErrorPolicy, FetchPolicy, OperationVariables, TypedDocumentNode } from '@apollo/client';
interface LoadMoreQueryOptions {
    /** Skip fetching entirely, e.g. while a parent form is in "create" mode. */
    skip?: boolean;
    fetchPolicy?: FetchPolicy;
    context?: DefaultContext;
    errorPolicy?: ErrorPolicy;
}
interface UseLoadMoreQueryConfig<TKey extends string, TNode> {
    query: TypedDocumentNode<PaginatedResult<TKey, TNode>, OperationVariables>;
    queryVariables: OperationVariables;
    dataPropertyName: TKey;
    errorMessage?: string;
    /**
     * Name of the page-size variable inside `queryVariables`. `reload` reads
     * it to know the initial page size, so it can re-request that many items
     * (see `reload` below) instead of collapsing back to it after pages have
     * been appended via `loadMore`.
     */
    pageSizeParam?: string;
    /**
     * Backend-enforced maximum for the page-size variable. `reload` re-fetches
     * the accumulated window as multiple ≤`maxPageSize` requests (via cursor
     * pagination) instead of asking for the whole window at once, which some
     * backends reject outright above a fixed page-size limit. Defaults to 50;
     * override if your backend's actual limit differs.
     */
    maxPageSize?: number;
    options?: LoadMoreQueryOptions;
}
/**
 * Fetches and accumulates a GraphQL cursor-paginated connection for
 * "Load more"-style lists (as opposed to jump-to-page pagination).
 *
 * Unlike `usePaginatedData`, this hook never hands out Apollo's raw
 * `refetch`/`fetchMore` — those let callers bypass the state that keeps
 * `items` consistent, which is exactly what caused a real bug: calling the
 * raw `refetch` after a mutation (e.g. marking a comment read, deleting a
 * recipient) re-ran the query with the original small page size and wiped
 * out everything loaded via "Load more", visually collapsing the list back
 * to page 1. `reload` below is the safe replacement for that use case.
 */
export declare const useLoadMoreQuery: <TKey extends string, TNode>({ query, queryVariables, dataPropertyName, errorMessage, pageSizeParam, maxPageSize, options, }: UseLoadMoreQueryConfig<TKey, TNode>) => {
    /** The flattened array of nodes accumulated across all loaded pages. */
    readonly items: TNode[];
    /** Total number of items matching the query, per the server. */
    readonly totalCount: number;
    /** Whether there are more pages to load. */
    readonly hasNextPage: boolean;
    /** Whether the initial fetch (or a variables change) is in flight. */
    readonly loading: boolean;
    /** Whether `loadMore` is currently in flight. */
    readonly isLoadingMore: boolean;
    /** Whether `reload` is currently in flight. */
    readonly isReloading: boolean;
    /** The error from the most recent failed fetch, if any. */
    readonly error: unknown;
    /** Whether the query has resolved at least once and returned zero results. */
    readonly hasNoResults: boolean;
    /** Loads the next page and appends it. Returns whether more pages remain. */
    readonly loadMore: () => Promise<boolean>;
    /** Re-fetches the currently loaded window in place, without collapsing it. */
    readonly reload: () => Promise<void>;
};
export type LoadMoreQuery<TKey extends string, TNode> = ReturnType<typeof useLoadMoreQuery<TKey, TNode>>;
export {};
