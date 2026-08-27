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
    totalCount: number;
    loading: boolean;
    error: unknown;
    hasNoResults: boolean;
    pageSize: number;
    setPageSize: Dispatch<SetStateAction<number>>;
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
