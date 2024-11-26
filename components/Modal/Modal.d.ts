import { VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from '../../../node_modules/react';
import { DialogProps as AriaDialogProps, Modal as AriaModal } from 'react-aria-components';
declare const sheetVariants: (props?: ({
    side?: "left" | "right" | "bottom" | "top" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ModalContentProps extends Omit<ComponentProps<typeof AriaModal>, "children">, VariantProps<typeof sheetVariants> {
    children?: AriaDialogProps["children"];
    role?: AriaDialogProps["role"];
    closeButton?: boolean;
}
interface ModalProps extends Omit<ModalContentProps, "children"> {
    /** The trigger component, e.g. a button, to open the modal */
    trigger: ReactNode;
    /** The title of the modal */
    title?: string;
    /** The content of the modal */
    children: ReactNode;
    /** A function that returns footer content, receiving the close function */
    footer?: (close: () => void) => ReactNode;
    /** ClassName for the overlay background element */
    overlayClassName?: string;
}
/**
 * Modal where you can specify the trigger, title, footer and the content
 *
 * Can also be used as a sheet when setting the side property
 *
 * @example
 * <Modal
 *   trigger={<Button>Open Modal</Button>}
 *   title="Sign up"
 *   footer={(close) => (
 *     <Button onPress={close}>Cancel</Button>
 *   )}>
 *   <p>This is the modal content.</p>
 * </Modal>
 */
declare const Modal: ({ trigger, title, children, footer, overlayClassName, isOpen, onOpenChange, isDismissable, isKeyboardDismissDisabled, ...props }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export { Modal };
