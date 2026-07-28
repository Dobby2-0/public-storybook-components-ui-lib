interface RowCountFooterProps {
    show: boolean;
    rowsLoaded: boolean;
    loading?: boolean;
    totalCount?: number;
    rowDataLength?: number;
}
declare const RowCountFooter: ({ show, rowsLoaded, loading, totalCount, rowDataLength, }: RowCountFooterProps) => import("react/jsx-runtime").JSX.Element | null;
export { RowCountFooter };
