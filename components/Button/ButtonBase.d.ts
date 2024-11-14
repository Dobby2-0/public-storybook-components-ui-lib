import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from '../../../node_modules/react';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';
declare const buttonBaseVariants: (props?: ({
    variant?: "primary" | "secondary" | "ghost" | "delete" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ButtonBaseProps extends Omit<AriaButtonProps, "children">, VariantProps<typeof buttonBaseVariants>, PropsWithChildren {
}
declare const ButtonBase: ({ className, variant, children, ...props }: ButtonBaseProps) => import("react/jsx-runtime").JSX.Element;
export { ButtonBase };
export type { ButtonBaseProps };
