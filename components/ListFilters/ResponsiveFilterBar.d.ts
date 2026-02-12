import { PropsWithChildren } from '../../../node_modules/react';
interface FiltersBlockProps extends PropsWithChildren {
    filterWidth: number;
    className?: string;
    activeFilters?: number;
    forceMobile?: boolean;
    showResetButton?: boolean;
    onReset?: () => Promise<void> | void;
}
declare const ResponsiveFilterBar: ({ activeFilters, filterWidth, className, children, forceMobile, ...props }: FiltersBlockProps) => import("react/jsx-runtime").JSX.Element;
export { ResponsiveFilterBar };
