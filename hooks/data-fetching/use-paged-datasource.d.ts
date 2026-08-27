import { PagedQueryConfig, PagedResultBase } from './use-paged-query.ts';
import { IDatasource } from 'ag-grid-community';
interface PagedDatasourceResult extends PagedResultBase {
    datasource: IDatasource;
}
/**
 * Builds an AgGrid datasource that pages through a GraphQL cursor-paginated
 * query, one page at a time.
 */
declare const usePagedDatasource: <TKey extends string, TNode>({ query, queryVariables, dataPropertyName, options, defaultPageSize, errorMessage, }: PagedQueryConfig<TKey, TNode>) => PagedDatasourceResult;
export { usePagedDatasource };
export type PagedDatasource = PagedDatasourceResult;
