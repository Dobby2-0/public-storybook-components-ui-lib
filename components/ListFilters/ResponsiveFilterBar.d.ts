import { PropsWithChildren } from '../../../node_modules/react';
interface FiltersBlockProps extends PropsWithChildren {
    filterWidth: number;
    className?: string;
    activeFilters?: number;
    forceMobile?: boolean;
}
declare const ResponsiveFilterBar: ({ activeFilters, filterWidth, className, children, forceMobile, }: FiltersBlockProps) => import("react/jsx-runtime").JSX.Element;
export { ResponsiveFilterBar };
