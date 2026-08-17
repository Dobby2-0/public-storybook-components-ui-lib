import { PagedQueryConfig } from './use-paged-query.ts';
/**
 * Pages through a GraphQL cursor-paginated query and exposes the current
 * page's items directly.
 */
declare const usePagedList: <TKey extends string, TNode>({ query, queryVariables, dataPropertyName, options, defaultPageSize, }: PagedQueryConfig<TKey, TNode>) => {
    readonly items: TNode[];
    readonly page: number;
    readonly totalPages: number;
    readonly totalCount: number;
    readonly loading: boolean;
    readonly error: unknown;
    readonly hasNoResults: boolean;
    readonly goToPage: (targetPage: number) => Promise<void>;
    readonly pageSize: number;
    readonly setPageSize: import('../../../node_modules/react').Dispatch<import('../../../node_modules/react').SetStateAction<number>>;
};
export { usePagedList };
export type PagedList<TKey extends string, TNode> = ReturnType<typeof usePagedList<TKey, TNode>>;
