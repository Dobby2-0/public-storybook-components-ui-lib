import { PagedQueryConfig, PagedQueryOptions } from './use-paged-query.ts';
import { PaginatedResult } from '../../types/paginated-data.ts';
/**
 * `infinite` loads pages through a datasource; `clientSide` holds only the
 * current page's rows, for what only that row model offers (e.g. per-row heights).
 */
type DesktopRowModel = "infinite" | "clientSide";
interface ResponsiveListConfig<TKey extends string, TNode> extends Omit<PagedQueryConfig<TKey, TNode>, "options"> {
    options?: PagedQueryOptions<PaginatedResult<TKey, TNode>>;
    /**
     * Row model of the desktop table. `getSort` is not used with `clientSide`:
     * put the order in `queryVariables`.
     *
     * @default "infinite"
     */
    desktopRowModel?: DesktopRowModel;
    /**
     * Holds back the desktop table's first request while `defaultPageSize` is
     * passed but still `undefined` (e.g. `useAutoPageSize` hasn't measured the
     * container yet), so the table doesn't fetch a page at the fallback size
     * first. Has no effect when `defaultPageSize` is omitted altogether, or on
     * mobile.
     *
     * @default true
     */
    waitForPageSize?: boolean;
    /** Items-per-page options in the desktop table's footer. Defaults to the table's own. */
    pageSizeOptions?: number[];
    /** Items requested per load on mobile. Defaults to the largest mobile page size option (20). */
    scrollPageSize?: number;
    /** Mobile only: eagerly loads every page instead of waiting for scroll. See `useLoadMoreQuery`. */
    loadAll?: boolean;
    /** Mobile only: backend page-size limit used when re-fetching the loaded items. See `useLoadMoreQuery`. */
    maxPageSize?: number;
}
declare const useResponsiveListImpl: <TKey extends string, TNode>({ options, queryVariables, desktopRowModel, waitForPageSize, pageSizeOptions, scrollPageSize, loadAll, maxPageSize, ...config }: ResponsiveListConfig<TKey, TNode>) => {
    readonly mode: "scroll";
    readonly loading: boolean;
    readonly error: unknown;
    readonly totalCount: number;
    readonly hasNoResults: boolean;
    /** Re-fetches the loaded items in place, e.g. after a mutation. */
    readonly refresh: () => Promise<void>;
    readonly listProps: {
        readonly items: TNode[];
        readonly loading: boolean;
        readonly error: unknown;
        readonly hasNextPage: boolean;
        readonly isLoadingMore: boolean;
        readonly isReloading: boolean;
        readonly handleLoadMore: () => Promise<boolean>;
    };
    readonly rowModel?: undefined;
    readonly pageSize?: undefined;
    readonly tableProps?: undefined;
    /**
     * Evicts the cached pages without resetting to page 1. Pair with the grid's
     * `api.refreshInfiniteCache()` to refresh the current page in place.
     */
    readonly invalidateCache?: undefined;
} | {
    readonly mode: "paged";
    readonly rowModel: "clientSide";
    readonly loading: boolean;
    readonly error: unknown;
    readonly totalCount: number;
    readonly hasNoResults: boolean;
    readonly pageSize: number;
    /** Re-fetches the current page from the network, e.g. after a mutation. */
    readonly refresh: () => void | Promise<void>;
    readonly tableProps: {
        readonly rowModelType: "clientSide";
        readonly rowData: TNode[];
        readonly loading: boolean;
        readonly totalCount: number;
        readonly cacheBlockSize: number;
        readonly pagination: {
            readonly pageSizeOptions: number[] | undefined;
            readonly onPageSizeChange: import('../../../node_modules/react').Dispatch<import('../../../node_modules/react').SetStateAction<number>>;
            readonly page: number;
            readonly totalPages: number;
            readonly onPageChange: (page: number) => void;
        };
        readonly datasource?: undefined;
    };
    readonly listProps?: undefined;
    /**
     * Evicts the cached pages without resetting to page 1. Pair with the grid's
     * `api.refreshInfiniteCache()` to refresh the current page in place.
     */
    readonly invalidateCache?: undefined;
} | {
    readonly mode: "paged";
    readonly rowModel: "infinite";
    readonly loading: boolean;
    readonly error: unknown;
    readonly totalCount: number;
    readonly hasNoResults: boolean;
    readonly pageSize: number;
    /** Re-fetches from the network and resets the table to page 1, e.g. after a mutation. */
    readonly refresh: () => void | Promise<void>;
    /**
     * Evicts the cached pages without resetting to page 1. Pair with the grid's
     * `api.refreshInfiniteCache()` to refresh the current page in place.
     */
    readonly invalidateCache: () => void;
    readonly tableProps: {
        readonly datasource: import('ag-grid-community').IDatasource;
        readonly cacheBlockSize: number;
        readonly totalCount: number;
        readonly pagination: {
            readonly pageSizeOptions: number[] | undefined;
            readonly onPageSizeChange: import('../../../node_modules/react').Dispatch<import('../../../node_modules/react').SetStateAction<number>>;
            readonly page?: undefined;
            readonly totalPages?: undefined;
            readonly onPageChange?: undefined;
        };
        readonly rowModelType?: undefined;
        readonly rowData?: undefined;
        readonly loading?: undefined;
    };
    readonly listProps?: undefined;
};
type ImplResult<TKey extends string, TNode> = ReturnType<typeof useResponsiveListImpl<TKey, TNode>>;
type ScrollList<TKey extends string, TNode> = Extract<ImplResult<TKey, TNode>, {
    mode: "scroll";
}>;
type PagedInfiniteList<TKey extends string, TNode> = Extract<ImplResult<TKey, TNode>, {
    rowModel: "infinite";
}>;
type PagedClientSideList<TKey extends string, TNode> = Extract<ImplResult<TKey, TNode>, {
    rowModel: "clientSide";
}>;
/** What `useResponsiveList` returns; narrow on `mode`. */
type ResponsiveList<TKey extends string, TNode, TRowModel extends DesktopRowModel = "infinite"> = TRowModel extends "clientSide" ? ScrollList<TKey, TNode> | PagedClientSideList<TKey, TNode> : ScrollList<TKey, TNode> | PagedInfiniteList<TKey, TNode>;
/** The `tableProps` of the paged desktop mode, for table components that take them as props. */
type ResponsiveListTableProps<TKey extends string, TNode, TRowModel extends DesktopRowModel = "infinite"> = (TRowModel extends "clientSide" ? PagedClientSideList<TKey, TNode> : PagedInfiniteList<TKey, TNode>)["tableProps"];
/**
 * Data for an overview that is a paged table on desktop and a load-on-scroll
 * list on mobile.
 *
 * Both modes are always mounted, since hooks can't be conditional; the one
 * that isn't active is skipped. Check `mode` to narrow to the matching props:
 * `tableProps` for `AgGridTable`, `listProps` for `CardList`.
 *
 * `defaultPageSize` sets the desktop table's page size (e.g. from
 * `useAutoPageSize`). Mobile loads `scrollPageSize` items per scroll instead.
 *
 * Pass `desktopRowModel: "clientSide"` for a client-side table that holds only
 * the current page; spread `tableProps` onto `AgGridTable`.
 *
 * Sorting: `getSort` is desktop only and infinite only. It runs on every
 * request for the first page (including the very first one) and its result
 * overrides `queryVariables.order`. Mobile only reads `queryVariables`, so keep
 * the initial order in `queryVariables` as well (for example
 * `order: sortToOrder(getSort([]))`) so both modes start in the same order.
 */
declare function useResponsiveList<TKey extends string, TNode>(config: ResponsiveListConfig<TKey, TNode> & {
    desktopRowModel: "clientSide";
}): ResponsiveList<TKey, TNode, "clientSide">;
declare function useResponsiveList<TKey extends string, TNode>(config: ResponsiveListConfig<TKey, TNode> & {
    desktopRowModel?: "infinite";
}): ResponsiveList<TKey, TNode, "infinite">;
export { useResponsiveList };
export type { DesktopRowModel, ResponsiveList, ResponsiveListConfig, ResponsiveListTableProps, };
