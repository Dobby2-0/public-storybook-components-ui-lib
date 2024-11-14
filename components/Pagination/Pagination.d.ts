interface PaginationProps {
    /** The currently active page */
    currentPage?: number;
    /** Total amount of pages */
    totalPages: number;
    /** Callback function that triggers when the active page changes */
    onCurrentPageChange?: (pageId: number) => void;
    /** Used to distinguish keys for seperate Pagination instances */
    keyPrefix?: string;
}
/**
 * Pagination component that enables the user to select a specific page from a range of pages.
 */
declare const Pagination: ({ currentPage, onCurrentPageChange, totalPages, keyPrefix, }: PaginationProps) => import("react/jsx-runtime").JSX.Element;
export { Pagination };
