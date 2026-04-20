import { ReactNode } from '../../../node_modules/react';
import { NumberFieldProps as AriaNumberFieldProps } from 'react-aria-components';
interface NumberFieldProps extends AriaNumberFieldProps {
    /** Label above the input */
    label?: string;
    /** Additional descriptive text shown below the input */
    description?: string;
    /** Optional error message desplayed below the input and description */
    errorMessage?: string;
    /** Optional placeholder text */
    placeholder?: string;
    /** Optionally hide the stepper buttons */
    hideSteppers?: boolean;
    /** Optional element added before the Textfield input */
    prefix?: ReactNode;
    /** Optional element added after the Textfield input */
    suffix?: ReactNode;
}
declare const NumberField: ({ label, description, errorMessage, placeholder, className, hideSteppers, prefix, suffix, ...props }: NumberFieldProps) => import("react/jsx-runtime").JSX.Element;
export { NumberField };
