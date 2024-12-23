import { dropdownInputVariants } from '../../styles/variants.ts';
import { VariantProps } from 'class-variance-authority';
import { ComboBoxProps as AriaComboBoxProps, InputProps as AriaInputProps, ValidationResult as AriaValidationResult } from 'react-aria-components';
import { ListBoxBaseProps } from '../ListBox/ListBox';
interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, "children" | "items" | "onSelectionChange">, VariantProps<typeof dropdownInputVariants> {
    label?: string;
    placeholder?: AriaInputProps["placeholder"];
    description?: string | null;
    errorMessage?: string | ((validation: AriaValidationResult) => string);
    onSelectionChange?: (selectedItem?: T) => void;
}
/**
 * A ComboBox combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 *
 * Based on `React-aria-components`
 */
declare const ComboBox: <T extends object>({ label, placeholder, description, variant, className, items, menuTrigger, onSelectionChange, idResolver, ...props }: ComboBoxProps<T> & ListBoxBaseProps<T>) => import("react/jsx-runtime").JSX.Element;
export { ComboBox };
