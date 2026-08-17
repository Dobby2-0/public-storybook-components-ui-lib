import { ReactNode } from '../../../node_modules/react';
export interface CardListProps<T> {
    /** The items to render. */
    items: T[];
    /** Whether the initial query is still loading. */
    loading?: boolean;
    /** Whether the query encountered an error. */
    error?: unknown;
    /** Whether more pages can be loaded. */
    hasNextPage?: boolean;
    /** Callback fired when the trigger element enters the prefetch area. */
    handleLoadMore?: () => void | Promise<unknown>;
    /** Per-item render function. */
    renderItem: (item: T, index: number) => ReactNode;
    /**
     * Key extractor for each item. Defaults to `item.id` when `T extends {id}`,
     * falling back to the index.
     */
    keyExtractor?: (item: T, index: number) => string | number;
    /** Optional skeleton card renderer shown during initial load and pagination. */
    renderLoadingItem?: (index: number) => ReactNode;
    /** Number of skeleton cards to render when `renderLoadingItem` is set. Defaults to 5. */
    loadingItemCount?: number;
    /**
     * Fallback loading UI used when `renderLoadingItem` is not provided.
     * Defaults to a centered `<Loader />`.
     */
    loadingState?: ReactNode;
    /** Custom error UI. Defaults to `<ErrorPage />`. */
    errorState?: ReactNode;
    /** Custom empty-state UI. Defaults to `<EmptyState />`. */
    emptyState?: ReactNode;
    /**
     * Indicator rendered below the list while loading additional pages.
     * Defaults to skeleton cards when `renderLoadingItem` is provided,
     * otherwise a `<Loader />`.
     */
    loadMoreIndicator?: ReactNode;
    /** Hide the pagination indicator entirely. */
    hideLoadMoreIndicator?: boolean;
    /** Rendered above the item list, inside the scroll container. */
    header?: ReactNode;
    /** Rendered below the item list, inside the scroll container. */
    footer?: ReactNode;
    /**
     * IntersectionObserver rootMargin used to trigger `handleLoadMore`
     * before the trigger element is actually visible. A number is converted to
     * `"${n}px 0px"`. Defaults to `"200px"`.
     */
    prefetchMargin?: string | number;
    /** Class applied to the scrollable container. */
    className?: string;
    /** Class applied to each item wrapper. */
    itemClassName?: string;
    /** Optional: renders a Pagination control below the list instead of infinite-scroll behavior */
    pagination?: {
        currentPage: number;
        totalPages: number;
        onCurrentPageChange: (page: number) => void | Promise<void>;
    };
}
declare const CardList: <T>({ items, loading, error, hasNextPage, handleLoadMore, renderItem, keyExtractor, renderLoadingItem, loadingItemCount, loadingState, errorState, emptyState, loadMoreIndicator, hideLoadMoreIndicator, header, footer, prefetchMargin, className, itemClassName, pagination, }: CardListProps<T>) => import("react/jsx-runtime").JSX.Element;
export { CardList };
