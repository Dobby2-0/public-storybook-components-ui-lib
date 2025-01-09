import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /** Optional heading element for the panel */
    heading?: ReactNode;
    /** Should the edit button be shown */
    enableEditing?: boolean;
    /** Sets the initial state of the component for editing */
    defaultEditing?: boolean;
    /** Function called when the editing state changes */
    onEditingChange?: (editing: boolean) => void;
    /** Function called when editing is canceled */
    onCancelEditing?: () => void;
    /** Function called when the user wants to save the changes made */
    onSaveChanges?: () => void;
    editButtonText?: string;
}
declare const Card: import('../../../node_modules/react').ForwardRefExoticComponent<CardProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export { Card };
