import { ReactNode } from '../../../node_modules/react';
import { BreadcrumbProps as AriaBreadcrumbProps, BreadcrumbsProps as AriaBreadcrumbsProps } from 'react-aria-components';
interface BreadcrumbsProps extends Omit<AriaBreadcrumbsProps<BreadcrumbItem | "ellipsis">, "children"> {
    /**
     * Array of items used to build the hierarchy
     */
    items: (BreadcrumbItem | "ellipsis")[];
    /**
     * Optional parameter to overwrite the default `<ChevronForward/>` icon used to separate items
     */
    separator?: ReactNode;
}
interface BreadcrumbItem {
    id: string;
    label: ReactNode;
    url?: string;
}
/**
 * Breadcrumb component to display hierarchical order of parent items leading to current item.
 *
 * `BreadcrumbItems` have an optional url to support navigation
 *
 * Based on `react-aria-componets`'s breadcrumbs
 */
declare const Breadcrumbs: ({ items, separator, ...props }: BreadcrumbsProps) => import("react/jsx-runtime").JSX.Element;
declare const BreadcrumbItem: ({ className, ...props }: AriaBreadcrumbProps) => import("react/jsx-runtime").JSX.Element;
export { Breadcrumbs };
export type { BreadcrumbItem };
