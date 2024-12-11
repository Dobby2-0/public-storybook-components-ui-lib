import { ComboBoxProps as AriaComboBoxProps, InputProps as AriaInputProps, ValidationResult as AriaValidationResult } from 'react-aria-components';
import { ListItemWithId } from '../ListBox/ListBox';
interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, "children" | "items"> {
    label?: string;
    placeholder?: AriaInputProps["placeholder"];
    description?: string | null;
    errorMessage?: string | ((validation: AriaValidationResult) => string);
    items?: Omit<ListItemWithId, "children">[];
}
/**
 * A ComboBox combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 *
 * Based on `React-aria-components`
 */
declare const ComboBox: <T extends object>({ label, placeholder, description, className, items, menuTrigger, ...props }: ComboBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
export { ComboBox };
