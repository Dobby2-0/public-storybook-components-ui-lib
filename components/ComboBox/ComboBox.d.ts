import { MultiComboBoxProps } from './MultiComboBox.tsx';
import { SingleComboBoxProps } from './SingleComboBox.tsx';
import { ListBoxProps } from '../ListBox/ListBox';
import { dropdownInputVariants } from '../../styles/variants.ts';
import { VariantProps } from 'class-variance-authority';
import { CSSProperties } from '../../../node_modules/react';
import { InputProps as AriaInputProps, ValidationResult as AriaValidationResult } from 'react-aria-components';
interface ClassNameObject {
    base?: string;
    popover?: string;
    listbox?: string;
}
interface ComboBoxCommonProps extends VariantProps<typeof dropdownInputVariants> {
    label?: string;
    placeholder?: AriaInputProps["placeholder"];
    description?: string;
    errorMessage?: string | ((validation: AriaValidationResult) => string);
    className?: string | ClassNameObject;
    style?: CSSProperties;
    /** show loading indicator on the trigger element */
    loading?: boolean;
    /** show loading indicator at the bottom of the data list */
    listLoading?: boolean;
    isDisabled?: boolean;
    disallowEmptySelection?: boolean;
    /** The storage key for localStorage keying. Should be unique within the MFE. If not provided, localStorage is not used. */
    storageKey?: string;
}
interface SingleComboBoxBaseProps<T extends object> extends SingleComboBoxProps<T> {
    selectionMode?: "single";
}
interface MultiComboBoxBaseProps<T extends object> extends MultiComboBoxProps<T> {
    selectionMode: "multiple";
}
type ComboBoxProps<T extends object> = SingleComboBoxBaseProps<T> | MultiComboBoxBaseProps<T>;
/**
 * A ComboBox combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 *
 * Based on `React-aria-components`
 */
declare const ComboBox: <T extends object>(props: ComboBoxProps<T> & ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
export { ComboBox };
export type { ComboBoxCommonProps, MultiComboBoxBaseProps, SingleComboBoxBaseProps, };
