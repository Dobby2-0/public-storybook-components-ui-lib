import { PropsWithChildren } from '../../../node_modules/react';
interface FiltersBlockProps extends PropsWithChildren {
    filterWidth: number;
    className?: string;
    activeFilters?: number;
}
declare const ResponsiveFilterBar: ({ activeFilters, filterWidth, className, children, }: FiltersBlockProps) => import("react/jsx-runtime").JSX.Element;
export { ResponsiveFilterBar };
