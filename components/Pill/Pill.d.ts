import { ExcludeNull } from '../../types';
import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes, PropsWithChildren, ReactElement, SVGAttributes } from '../../../node_modules/react';
declare const pillVariants: (props?: ({
    variant?: "warning" | "error" | "accent" | "contrast" | "info-1" | "info-2" | "info-3" | "info-4" | "success" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface PillProps extends HTMLAttributes<HTMLDivElement>, ExcludeNull<VariantProps<typeof pillVariants>>, PropsWithChildren {
    /**
     * Icon to display on the left side of the pill.
     */
    icon?: ReactElement<HTMLAttributes<unknown> | SVGAttributes<unknown>>;
    /**
     * Callback function that is triggered when the alert's close button is clicked.
     */
    onClose?: () => void;
}
/**
 * A flexible Pill component that supports different variants like icons, close buttons, and colors.
 */
export declare const Pill: import('../../../node_modules/react').ForwardRefExoticComponent<PillProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
