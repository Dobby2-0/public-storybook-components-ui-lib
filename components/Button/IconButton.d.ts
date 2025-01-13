import { ButtonBaseProps } from './ButtonBase.tsx';
/**
 * Icon button component supporting multiple style variants
 *
 * Can only contain an icon, no text
 */
declare const IconButton: ({ className, isLoading, children, ...props }: Omit<ButtonBaseProps, "replaceContentWhileLoading">) => import("react/jsx-runtime").JSX.Element;
export { IconButton };
