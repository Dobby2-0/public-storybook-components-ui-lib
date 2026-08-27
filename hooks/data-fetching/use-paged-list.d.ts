import { PagedQueryConfig, PagedResultBase } from './use-paged-query.ts';
interface PagedListResult<TNode> extends PagedResultBase {
    items: TNode[];
    page: number;
    totalPages: number;
    goToPage: (targetPage: number) => Promise<void>;
}
/**
 * Pages through a GraphQL cursor-paginated query and exposes the current
 * page's items directly.
 */
declare const usePagedList: <TKey extends string, TNode>({ query, queryVariables, dataPropertyName, options, defaultPageSize, errorMessage, }: PagedQueryConfig<TKey, TNode>) => PagedListResult<TNode>;
export { usePagedList };
export type PagedList<TNode> = PagedListResult<TNode>;
