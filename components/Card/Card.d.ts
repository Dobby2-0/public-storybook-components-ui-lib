import { ButtonProps } from '../Button/Button.tsx';
import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /** Optional heading element for the panel */
    heading?: ReactNode;
    /** Remove the border underneath the optional heading */
    removeHeadingBorder?: boolean;
    /** Should the edit button be shown */
    enableEditing?: boolean;
    /** Sets the initial state of the component for editing */
    defaultEditing?: boolean;
    /** Function called when the editing state changes */
    onEditingChange?: (editing: boolean) => void;
    /** Function called when editing is canceled */
    onCancelEditing?: () => void;
    /** Function called when the user wants to save the changes made */
    onSaveChanges?: () => void | Promise<void>;
    /** Text for the edit button */
    editButtonText?: string;
    /** Extra button props for the save button */
    saveButtonProps?: ButtonProps;
    /** Extra button props for the cancel button */
    cancelButtonProps?: ButtonProps;
}
/**
 * @Deprecated Use the `CardBasic` component from `@dobby2-0/components` instead.
 * */
declare const Card: import('../../../node_modules/react').ForwardRefExoticComponent<CardProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export { Card };
