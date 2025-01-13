import { ExcludeNull } from '../../types';
import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from '../../../node_modules/react';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';
declare const buttonBaseVariants: (props?: ({
    variant?: "primary" | "secondary" | "delete" | "ghost" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ButtonBaseProps extends Omit<AriaButtonProps, "children">, ExcludeNull<VariantProps<typeof buttonBaseVariants>>, PropsWithChildren {
    /** Disables button and shows loading indicator */
    isLoading?: boolean;
    /** Whether to replace the button content while loading */
    replaceContentWhileLoading?: boolean;
}
declare const ButtonBase: ({ className, variant, isLoading, replaceContentWhileLoading, children, ...props }: ButtonBaseProps) => import("react/jsx-runtime").JSX.Element;
export { ButtonBase };
export type { ButtonBaseProps };
