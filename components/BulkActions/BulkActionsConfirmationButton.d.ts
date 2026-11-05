interface ButtonClassNameObject {
    button?: string;
    tooltip?: string;
}
interface BulkActionsConfirmationButtonProps {
    disabled?: boolean;
    tooltipContent?: string;
    onConfirm: () => Promise<void> | void;
    className?: string | ButtonClassNameObject;
}
declare const BulkActionsConfirmationButton: ({ disabled, tooltipContent, onConfirm: handleConfirmation, className, }: BulkActionsConfirmationButtonProps) => import("react/jsx-runtime").JSX.Element;
export { BulkActionsConfirmationButton };
