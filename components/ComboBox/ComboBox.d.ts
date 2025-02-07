import { ListBoxProps } from '../ListBox/ListBox';
import { dropdownInputVariants } from '../../styles/variants.ts';
import { VariantProps } from 'class-variance-authority';
import { ComboBoxProps as AriaComboBoxProps, InputProps as AriaInputProps, ValidationResult as AriaValidationResult } from 'react-aria-components';
interface ClassNameObject {
    base?: string;
    popover?: string;
    listbox?: string;
}
interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, "children" | "className" | "items" | "onSelectionChange">, VariantProps<typeof dropdownInputVariants> {
    label?: string;
    placeholder?: AriaInputProps["placeholder"];
    description?: string | null;
    errorMessage?: string | ((validation: AriaValidationResult) => string);
    className?: string | ClassNameObject;
    loading?: boolean;
    onSelectionChange?: (selectedItem?: T) => void;
}
/**
 * A ComboBox combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 *
 * Based on `React-aria-components`
 */
declare const ComboBox: <T extends object>({ label, placeholder, description, variant, className, items, menuTrigger, onSelectionChange, idResolver, loading, onLoadMore, ...props }: ComboBoxProps<T> & ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
export { ComboBox };
