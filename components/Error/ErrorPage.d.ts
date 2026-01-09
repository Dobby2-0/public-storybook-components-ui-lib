import { ReactNode } from '../../../node_modules/react';
interface ErrorPageProps {
    className?: string;
    errorIds?: string[];
    icon?: ReactNode;
    title?: string;
    description?: ReactNode;
}
declare const ErrorPage: ({ className, errorIds, icon, title, description, }: ErrorPageProps) => import("react/jsx-runtime").JSX.Element;
export { ErrorPage };
