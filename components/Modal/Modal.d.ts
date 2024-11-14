import { ReactNode } from '../../../node_modules/react';
interface ModalProps {
    /** The trigger component, e.g. a button, to open the modal */
    trigger: ReactNode;
    /** The title of the modal */
    title?: string;
    /** The content of the modal */
    children: ReactNode;
    /** A function that returns footer content, receiving the close function */
    footer?: (close: () => void) => ReactNode;
    /** Determines whether the close button is shown */
    closeButton?: boolean;
}
/**
 * Modal where you can specify the trigger, title, footer and the content
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
declare const Modal: ({ trigger, title, children, footer, closeButton, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export { Modal };
