import { PagedRowsResult } from './use-paged-rows.ts';
/**
 * Pages through a GraphQL cursor-paginated query and exposes the current
 * page's items directly.
 *
 * @deprecated Mobile lists are load-on-scroll, not paged. Use
 * `useLoadMoreQuery` together with `CardList`'s `hasNextPage`/`handleLoadMore`
 * instead. Desktop tables page through `usePagedDatasource`, or through
 * `useResponsiveList` with `desktopRowModel: "clientSide"`.
 */
declare const usePagedList: <TKey extends string, TNode>({ query, queryVariables, dataPropertyName, options, defaultPageSize, errorMessage, }: import('./use-paged-query').PagedQueryConfig<TKey, TNode>) => PagedRowsResult<TNode>;
export { usePagedList };
/** @deprecated See `usePagedList`. */
export type PagedList<TNode> = PagedRowsResult<TNode>;
