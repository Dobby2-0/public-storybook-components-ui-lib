import { ExcludeNull } from '../../types';
import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from '../../../node_modules/react';
declare const alertVariants: (props?: ({
    variant?: "information" | "confirmation" | "warning" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface AlertProps extends HTMLAttributes<HTMLDivElement>, ExcludeNull<VariantProps<typeof alertVariants>> {
    /**
     * Optional callback function that is triggered when the alert's close button is clicked.
     * Can be used to remove or hide the alert from the view.
     */
    onClose?: () => void;
    /**
     * optional parm to hide the icon in the alert
     */
    hideIcon?: boolean;
}
/**
 * Component that displays an alert to draw attention, supports multiple variants.
 * @example
 * <Alert variant="warning">
 *   <Alert.Title>Warning Title</Alert.Title>
 *   <Alert.Description>Warning message goes here.</Alert.Description>
 * </Alert>
 */
declare const AlertWithSubComponents: import('../../../node_modules/react').ForwardRefExoticComponent<AlertProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>> & {
    Title: import('../../../node_modules/react').ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & import('../../../node_modules/react').RefAttributes<HTMLParagraphElement>>;
    Description: import('../../../node_modules/react').ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & import('../../../node_modules/react').RefAttributes<HTMLParagraphElement>>;
};
export { AlertWithSubComponents as Alert };
export type { AlertProps };
