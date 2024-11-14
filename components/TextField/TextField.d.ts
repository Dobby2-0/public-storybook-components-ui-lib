import { ReactNode } from '../../../node_modules/react';
import { TextFieldProps as AriaTextFieldProps } from 'react-aria-components';
interface TextFieldProps extends AriaTextFieldProps {
    /** Label above the input */
    label?: string;
    /** Additional descriptive text shown below the input */
    description?: string;
    /** Optional error message desplayed below the input and description */
    errorMessage?: string;
    /** If true, renders a textarea instead of an input */
    textArea?: boolean;
    /** Optional placeholder text */
    placeholder?: string;
    /** Optional element added before the Textfield input */
    prefix?: ReactNode;
    /** Optional element added after the Textfield input */
    suffix?: ReactNode;
}
/**
 *  TextField is a component that allows users to enter text.
 *
 * @example
 * <TextField
 *   label="Your Message"
 *   textArea={true}
 *   description="Please enter your message."
 *   errorMessage="This field is required."
 *   isRequired
 * />
 */
declare const TextField: ({ label, description, errorMessage, textArea, placeholder, prefix, suffix, className, ...props }: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
export { TextField };
