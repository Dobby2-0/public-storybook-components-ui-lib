import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
interface ClassNameObject {
    base?: string;
    heading?: string;
}
interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
    /** Optional heading element for the panel */
    heading?: ReactNode;
    /** Remove the border underneath the optional heading */
    removeHeadingBorder?: boolean;
    /** Higlight the component, changing the background color */
    highlighted?: boolean;
    /** The CSS className for the element. */
    className?: string | ClassNameObject;
}
/**
 * Basic Card component
 */
declare const Card: import('../../../node_modules/react').ForwardRefExoticComponent<CardProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
/** @deprecated Renamed to `Card`. */
declare const CardBasic: import('../../../node_modules/react').ForwardRefExoticComponent<CardProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
/** @deprecated Renamed to `CardProps`. */
type CardBasicProps = CardProps;
export { Card, CardBasic };
export type { CardBasicProps, CardProps };
