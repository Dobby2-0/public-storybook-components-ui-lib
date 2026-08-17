import { PagedQueryConfig } from './use-paged-query.ts';
import { IDatasource } from 'ag-grid-community';
/**
 * Builds an AgGrid datasource that pages through a GraphQL cursor-paginated
 * query, one page at a time.
 */
declare const usePagedDatasource: <TKey extends string, TNode>({ query, queryVariables, dataPropertyName, options, defaultPageSize, }: PagedQueryConfig<TKey, TNode>) => {
    readonly datasource: IDatasource;
    readonly totalCount: number;
    readonly loading: boolean;
    readonly error: unknown;
    readonly hasNoResults: boolean;
    readonly pageSize: number;
    readonly setPageSize: import('../../../node_modules/react').Dispatch<import('../../../node_modules/react').SetStateAction<number>>;
};
export { usePagedDatasource };
export type PagedDatasource<TKey extends string, TNode> = ReturnType<typeof usePagedDatasource<TKey, TNode>>;
