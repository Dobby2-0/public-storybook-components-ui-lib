import { ListBoxProps } from '../ListBox/ListBox.tsx';
import { CollectionItem } from '../../types';
import { PropsWithChildren } from '../../../node_modules/react';
interface CommonBulkActionsProps {
    /** Amount of selected items that will be affected by the action */
    count?: number;
}
export interface BulkAction extends CollectionItem {
    /** Function to be called when the action is selected */
    action?: () => Promise<void> | void;
    /** Whether the action should be disabled */
    disabled?: boolean;
    /** Reason for disabling the action, will be shown as tooltip */
    disabledReason?: string;
}
interface BulkActionsPropsWithActions<T extends object> extends CommonBulkActionsProps {
    /** List of actions that can be performed on the selected items */
    actions: ListBoxProps<T>["items"];
    /** The ID of the action that should be selected by default when the component mounts */
    defaultActionId?: BulkAction["id"];
}
type BulkActionsPropsWithChildren = PropsWithChildren & CommonBulkActionsProps;
type BulkActionsProps<T extends object> = BulkActionsPropsWithActions<T> | BulkActionsPropsWithChildren;
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
type BulkActionsPopoverProps = (BulkActionsPropsWithActions<BulkAction> | BulkActionsPropsWithChildren) & {
    isOpen: boolean;
    className?: string;
    /** Optional: provide custom container to position the popover. Defaults to DobbyContext's getContainer */
    getContainer?: () => Element | null | undefined;
};
declare const BulkActionsPopover: ({ isOpen, className, getContainer, ...bulkActionsProps }: BulkActionsPopoverProps) => import('../../../node_modules/react').ReactPortal | null;
declare const BulkActionsWithComponents: ((props: BulkActionsProps<BulkAction>) => import("react/jsx-runtime").JSX.Element) & {
    ConfirmationButton: ({ disabled, tooltipContent, onConfirm: handleConfirmation, className, }: BulkActionsConfirmationButtonProps) => import("react/jsx-runtime").JSX.Element;
    selectClassNames: string;
};
export { BulkActionsWithComponents as BulkActions, BulkActionsPopover };
