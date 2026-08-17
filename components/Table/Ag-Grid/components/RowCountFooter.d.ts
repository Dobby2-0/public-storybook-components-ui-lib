interface RowCountFooterProps {
    show: boolean;
    rowsLoaded: boolean;
    loading?: boolean;
    totalCount?: number;
    rowDataLength?: number;
    className?: string;
}
declare const RowCountFooter: ({ show, rowsLoaded, loading, totalCount, rowDataLength, className, }: RowCountFooterProps) => import("react/jsx-runtime").JSX.Element | null;
export { RowCountFooter };
