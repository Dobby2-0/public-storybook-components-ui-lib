import { ICellRendererParams } from 'ag-grid-community';
import { ReactNode } from '../../../../../node_modules/react';
declare const SkeletonCellRenderer: <T>(renderer?: unknown) => {
    (params: ICellRendererParams): string | number | bigint | boolean | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import('../../../../../node_modules/react').ReactPortal | import('../../../../../node_modules/react').ReactElement<unknown, string | import('../../../../../node_modules/react').JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null | undefined;
    displayName: string;
};
export { SkeletonCellRenderer };
