import { PagedQueryConfig, PagedResultBase } from './use-paged-query.ts';
interface PagedRowsResult<TNode> extends PagedResultBase {
    items: TNode[];
    page: number;
    totalPages: number;
    goToPage: (targetPage: number) => Promise<void>;
}
/**
 * Pages through a GraphQL cursor-paginated query and exposes the current
 * page's items, for tables that hold only one page of rows.
 */
declare const usePagedRows: <TKey extends string, TNode>({ query, queryVariables, dataPropertyName, options, defaultPageSize, errorMessage, }: PagedQueryConfig<TKey, TNode>) => PagedRowsResult<TNode>;
export { usePagedRows };
export type { PagedRowsResult };
