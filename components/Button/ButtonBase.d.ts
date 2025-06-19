import { TooltipProps } from '../Tooltip/Tooltip.tsx';
import { ExcludeNull } from '../../types';
import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from '../../../node_modules/react';
import { ButtonProps as AriaButtonProps, PressEvent } from 'react-aria-components';
declare const buttonBaseVariants: (props?: ({
    variant?: "primary" | "secondary" | "delete" | "ghost" | "basic" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ButtonBaseProps extends Omit<AriaButtonProps, "children" | "onPress">, ExcludeNull<VariantProps<typeof buttonBaseVariants>>, PropsWithChildren {
    /** Disables button and shows loading indicator */
    isLoading?: boolean;
    /** Whether to replace the button content while loading */
    replaceContentWhileLoading?: boolean;
    /** Handler that is called when the press is released over the target */
    onPress?: (e: PressEvent) => void | Promise<void>;
    /** Optional tooltip to show when hovering the button */
    tooltip?: TooltipProps["content"];
    /** Customization options for the tooltip */
    tooltipProps?: Omit<TooltipProps, "content">;
}
declare const ButtonBase: ({ className, variant, isLoading, replaceContentWhileLoading, children, tooltip, tooltipProps, ...props }: ButtonBaseProps) => import("react/jsx-runtime").JSX.Element;
export { ButtonBase };
export type { ButtonBaseProps };
