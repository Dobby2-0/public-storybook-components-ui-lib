import { PagedQueryConfig, PagedResultBase } from './use-paged-query.ts';
import { IDatasource } from 'ag-grid-community';
interface PagedDatasourceResult extends PagedResultBase {
    datasource: IDatasource;
    /** Clears cursor bookkeeping and evicts the cached field, without resetting to page 1. Pair with an AG Grid `refreshInfiniteCache()` (or similar) to refresh in place. */
    invalidateCache: () => void;
}
/**
 * Builds an AgGrid datasource that pages through a GraphQL cursor-paginated
 * query, one page at a time.
 */
declare const usePagedDatasource: <TKey extends string, TNode>({ query, queryVariables, dataPropertyName, options, defaultPageSize, errorMessage, }: PagedQueryConfig<TKey, TNode>) => PagedDatasourceResult;
export { usePagedDatasource };
export type PagedDatasource = PagedDatasourceResult;
