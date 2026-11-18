import { Button } from '../Button/Button.tsx';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps, HTMLAttributes, ReactNode } from '../../../node_modules/react';
declare const sidePanelFrameVariants: (props?: ({
    position?: "left" | "right" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ClassNameObject {
    /** The panel itself, use sparingly */
    base?: string;
    /**
     * The region that covers the container the panel is portalled into. It fills the container, use
     * negative insets to let it extend beyond it, e.g. over the padding around the container.
     */
    overlay?: string;
    /** The dimmed backdrop behind the panel, e.g. to change its color */
    backdrop?: string;
}
interface SidePanelProps extends VariantProps<typeof sidePanelFrameVariants> {
    /** Whether the panel is open. The state lives in the application, not in the panel */
    isOpen: boolean;
    /** Called when the panel wants to open or close, e.g. on Escape, a press outside or a swipe */
    onOpenChange: (isOpen: boolean) => void;
    /** Disables closing with Escape, with a press outside the panel and with a swipe */
    preventDismissal?: boolean;
    /** Use `alertdialog` for panels that need a response from the user */
    role?: "dialog" | "alertdialog";
    /** Accessible name, for panels without a `SidePanel.Header` that has a title */
    "aria-label"?: string;
    /** The CSS className for the panel, or an object with classNames for its parts. */
    className?: string | ClassNameObject;
    children?: ReactNode;
}
interface SidePanelHeaderProps {
    /** Title of the panel, also used as its accessible name */
    title?: string;
    /** Hides the close button in the corner of the header */
    hideClose?: boolean;
    className?: string;
    /** Extra header content, rendered after the title */
    children?: ReactNode;
}
type SidePanelBodyProps = HTMLAttributes<HTMLDivElement>;
type SidePanelFooterProps = HTMLAttributes<HTMLDivElement>;
type SidePanelCloseButtonProps = ComponentProps<typeof Button>;
declare const SidePanel: (({ isOpen, onOpenChange, position, preventDismissal, role, "aria-label": ariaLabel, className, children, }: SidePanelProps) => import("react/jsx-runtime").JSX.Element) & {
    Header: ({ title, hideClose, className, children, }: SidePanelHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Body: ({ className, ...props }: SidePanelBodyProps) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ className, ...props }: SidePanelFooterProps) => import("react/jsx-runtime").JSX.Element;
    CloseButton: ({ onPress, ...props }: SidePanelCloseButtonProps) => import("react/jsx-runtime").JSX.Element;
};
export { SidePanel };
export type { SidePanelProps };
