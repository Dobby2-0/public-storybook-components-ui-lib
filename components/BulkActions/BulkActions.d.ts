import { ListBoxProps } from '../ListBox/ListBox.tsx';
import { CollectionItem } from '../../types';
interface BulkActionsProps<T extends object> {
    actions: ListBoxProps<T>["items"];
    /** Array of items on which the action should be performed */
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
/**
 * Component to provide the user with the ability to perform an action on multiple items at once
 *
 * Should be used in conjunction with table row selection and Popover component
 */
declare const BulkActions: ({ actions, count }: BulkActionsProps<BulkAction>) => import("react/jsx-runtime").JSX.Element;
export { BulkActions };
