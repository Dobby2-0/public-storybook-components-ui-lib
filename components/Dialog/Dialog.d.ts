import { Button } from '../Button/Button.tsx';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps, HTMLAttributes, ReactNode } from '../../../node_modules/react';
declare const dialogFrameVariants: (props?: ({
    size?: "fill" | "sm" | "md" | "lg" | "fullscreen-mobile" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const dialogBodyVariants: (props?: ({
    scroll?: "auto" | "none" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface DialogProps extends VariantProps<typeof dialogFrameVariants> {
    /** Whether the dialog is open. The state lives in the application, not in the dialog */
    isOpen: boolean;
    /** Called when the dialog wants to open or close, e.g. on Escape or a press on the overlay */
    onOpenChange: (isOpen: boolean) => void;
    /** Whether pressing the overlay closes the dialog. Defaults to `true` */
    dismissable?: boolean;
    /** Disables closing with Escape. Independent of `dismissable`, which only covers the overlay */
    isKeyboardDismissDisabled?: boolean;
    /** Use `alertdialog` for dialogs that need a response from the user */
    role?: "dialog" | "alertdialog";
    /** Accessible name, for dialogs without a `Dialog.Header` that has a title */
    "aria-label"?: string;
    /** Extra classes for the dialog frame, use sparingly: prefer a `size` */
    className?: string;
    /** Extra classes for the backdrop behind the dialog */
    overlayClassName?: string;
    children?: ReactNode;
}
interface DialogHeaderProps {
    /** Title of the dialog, also used as its accessible name */
    title?: string;
    /** Hides the close button in the corner of the header */
    hideClose?: boolean;
    className?: string;
    /** Extra header content, rendered after the title */
    children?: ReactNode;
}
interface DialogBodyProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dialogBodyVariants> {
}
type DialogFooterProps = HTMLAttributes<HTMLDivElement>;
type DialogCloseButtonProps = ComponentProps<typeof Button>;
declare const Dialog: (({ isOpen, onOpenChange, size, dismissable, isKeyboardDismissDisabled, role, "aria-label": ariaLabel, className, overlayClassName, children, }: DialogProps) => import("react/jsx-runtime").JSX.Element) & {
    Header: ({ title, hideClose, className, children, }: DialogHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Body: ({ scroll, className, ...props }: DialogBodyProps) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ className, ...props }: DialogFooterProps) => import("react/jsx-runtime").JSX.Element;
    CloseButton: ({ onPress, ...props }: DialogCloseButtonProps) => import("react/jsx-runtime").JSX.Element;
};
export { Dialog };
export type { DialogProps };
