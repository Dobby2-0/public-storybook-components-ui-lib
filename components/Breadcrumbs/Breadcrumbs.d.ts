import { Menu } from '../Menu/Menu.tsx';
import { CollectionItem } from '../../types';
import { ComponentProps, ReactNode } from '../../../node_modules/react';
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
    /** callback used when clicking an item without url */
    onItemClick?: (item: BreadcrumbItem) => void;
}
interface BreadcrumbItem extends CollectionItem {
    url?: string;
    menuProps?: BreadcrumbItemMenuProps;
}
interface BreadcrumbItemMenuProps extends Omit<ComponentProps<typeof Menu>, "children"> {
    addDropdownIcon?: boolean;
}
/**
 * Breadcrumb component to display hierarchical order of parent items leading to current item.
 *
 * `BreadcrumbItems` have an optional url to support navigation
 *
 * Based on `react-aria-componets`'s breadcrumbs
 */
declare const Breadcrumbs: ({ items, separator, onItemClick, ...props }: BreadcrumbsProps) => import("react/jsx-runtime").JSX.Element;
declare const BreadcrumbItem: ({ className, ...props }: AriaBreadcrumbProps) => import("react/jsx-runtime").JSX.Element;
export { Breadcrumbs };
export type { BreadcrumbItem };
