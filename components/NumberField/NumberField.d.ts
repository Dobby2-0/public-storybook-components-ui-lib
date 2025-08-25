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
}
declare const NumberField: ({ label, description, errorMessage, placeholder, className, hideSteppers, ...props }: NumberFieldProps) => import("react/jsx-runtime").JSX.Element;
export { NumberField };
