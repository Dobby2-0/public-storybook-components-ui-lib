import { ListBoxProps } from '../ListBox/ListBox.tsx';
import { CollectionItem } from '../../types';
import { PropsWithChildren } from '../../../node_modules/react';
interface CommonBulkActionsProps {
    /** Amount of selected items that will be affected by the action */
    count?: number;
}
interface BulkAction extends CollectionItem {
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
/**
 * Component to provide the user with the ability to perform an action on multiple items at once
 *
 * Usage:
 * - Provide the `actions` prop to use the built-in select-and-confirm UI for bulk actions.
 * - Or, omit `actions` and provide custom `children` to render your own controls inside the bulk actions layout.
 *
 * Should be used in conjunction with table row selection and Popover component
 */
declare const BulkActions: {
    (props: BulkActionsProps<BulkAction>): import("react/jsx-runtime").JSX.Element;
    selectClassNames: string;
};
export { BulkActions };
