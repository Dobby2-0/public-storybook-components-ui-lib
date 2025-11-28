import { ModalOverlay } from '../Modal/Modal.tsx';
import { ComponentProps, MouseEventHandler } from '../../../node_modules/react';
type PermissionDeniedModalProps = ComponentProps<typeof ModalOverlay>;
/** Modal shown when camera permission is denied in a native mobile app */
declare const PermissionDeniedModal: (props: PermissionDeniedModalProps) => import("react/jsx-runtime").JSX.Element;
/** Hook to manage permission dialog state and checks */
declare const usePermissionDialog: (acceptedFileTypes?: readonly string[]) => {
    showPermissionDialog: boolean;
    handlePermissionCheck: MouseEventHandler<HTMLInputElement>;
    handlePermissionDialogOpenChange: (open: boolean) => void;
};
export { PermissionDeniedModal, usePermissionDialog };
