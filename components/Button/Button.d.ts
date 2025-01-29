import { VariantProps } from 'class-variance-authority';
import { ReactNode } from '../../../node_modules/react';
import { ButtonBaseProps } from './ButtonBase.tsx';
declare const buttonVariants: (props?: ({
    size?: "default" | "sm" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ButtonProps extends Omit<ButtonBaseProps, "replaceContentWhileLoading">, VariantProps<typeof buttonVariants> {
    /**
     * Content added on the left side of child content
     */
    prefix?: ReactNode;
    /**
     * Content added on the right side of child content
     */
    suffix?: ReactNode;
}
/**
 * Button component supporting multiple style variants and sizes
 *
 * Prefix or suffix elements can be added around the button label with the corresponding parameters
 */
declare const Button: ({ className, size, prefix, suffix, children, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export { Button };
export type { ButtonProps };
