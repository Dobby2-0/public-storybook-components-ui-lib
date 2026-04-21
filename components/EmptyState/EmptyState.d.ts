import { ReactNode } from '../../../node_modules/react';
export interface EmptyStateContent {
    icon?: ReactNode;
    title?: string;
    description?: string;
    action?: ReactNode;
}
interface EmptyStateProps extends EmptyStateContent {
    className?: string;
}
/**
 * Empty-state placeholder used when a list/table has no results.
 *
 * Shared default between the AgGrid `NoRowsOverlay` and mobile `CardList`.
 */
declare const EmptyState: ({ icon, title, description, action, className, }: EmptyStateProps) => import("react/jsx-runtime").JSX.Element;
export { EmptyState };
