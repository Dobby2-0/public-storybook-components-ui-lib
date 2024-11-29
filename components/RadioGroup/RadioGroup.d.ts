import { RadioGroupProps as AriaRadioGroupProps } from 'react-aria-components';
interface RadioItem {
    id: string;
    label: string;
    disabled?: boolean;
}
interface ClassNameObject {
    group?: string;
    radio?: string;
}
interface RadioGroupProps extends Omit<AriaRadioGroupProps, "className"> {
    /** Label for the radio group */
    label?: string;
    /** items of the radio group */
    items: RadioItem[];
    /** Description for the radio group */
    description?: string;
    /** Additional classes */
    className?: string | ClassNameObject;
}
/**
 * RadioGroup component renders a group of radio buttons with a label and description.
 */
declare const RadioGroup: ({ items, value, defaultValue, onChange, className, ...props }: RadioGroupProps) => import("react/jsx-runtime").JSX.Element;
export { RadioGroup };
export type { RadioGroupProps };
