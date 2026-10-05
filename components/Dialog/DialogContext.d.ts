interface DialogContextValue {
    close: () => void;
}
declare const DialogContext: import('../../../node_modules/react').Context<DialogContextValue | null>;
/**
 * Returns a function that closes the enclosing Dialog, by calling its `onOpenChange(false)`.
 *
 * Use this to close after async work has succeeded. For a plain cancel button use
 * `Dialog.CloseButton` instead.
 *
 * @throws when used outside of a Dialog
 *
 * @example
 * const close = useDialogClose();
 * const handleConfirm = async () => {
 *   await save();
 *   close();
 * };
 */
declare const useDialogClose: () => () => void;
export { DialogContext, useDialogClose };
