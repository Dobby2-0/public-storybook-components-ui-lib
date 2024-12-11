import { ReactNode } from '../../../node_modules/react';
interface DetailPageHeaderProps {
    /** Title to be shown in the header.
     *
     * Will not be displayed when children are set. */
    title?: ReactNode;
    /** Subtitle to be shown in the header.
     *
     * Will not be displayed when children are set. */
    subtitle?: ReactNode;
    /** The CSS className for the element. */
    className?: string;
    /** Should a button with backwards arrow be displayed. */
    enableBackButton?: boolean;
    /** Function to be called when pressing the back button. */
    onBackButtonPress?: () => void;
    /** Optional content for the component.
     *
     * Will be shown instead of a title and subtitle. */
    children?: ReactNode;
}
/**
 * Header component used for detail pages.
 *
 * Can display either title and subtitle or custom children inside the component
 */
declare const DetailPageHeader: ({ title, subtitle, className, enableBackButton, onBackButtonPress, children, }: DetailPageHeaderProps) => import("react/jsx-runtime").JSX.Element;
export { DetailPageHeader };
