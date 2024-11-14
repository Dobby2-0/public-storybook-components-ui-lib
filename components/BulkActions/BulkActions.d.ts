import { ListItemWithId } from '../ListBox/ListBox.tsx';
interface BulkAction<T> extends Omit<ListItemWithId, "children"> {
    event: (items: T[]) => void;
}
interface BulkActionsProps<T> {
    /** Array of items on which the action should be performed */
    items: T[];
    /** List of actions available */
    actions: BulkAction<T>[];
    /** Callback function called after executing an action */
    onActionPerformed?: () => void;
}
/**
 * Component to provide the user with the ability to perform an action on multiple items at once
 *
 * Should be used in conjunction with table row selection and Popover component
 */
declare const BulkActions: <T extends object>({ items, actions, onActionPerformed, }: BulkActionsProps<T>) => import("react/jsx-runtime").JSX.Element;
export { BulkActions };
