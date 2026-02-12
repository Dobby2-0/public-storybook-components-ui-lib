import { ListBox } from '../ListBox/ListBox.tsx';
import { dropdownInputVariants } from '../../styles/variants.ts';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps, CSSProperties } from '../../../node_modules/react';
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
    loading?: boolean;
    isDisabled?: boolean;
    disallowEmptySelection?: boolean;
    /** The storage key for localStorage keying. Should be unique within the MFE. If not provided, localStorage is not used. */
    storageKey?: string;
}
interface ComboBoxListBoxProps {
    className?: string;
    defaultInputValue?: string;
    onInputChange?: (value: string) => void;
    inputDebounce?: number;
    inputPlaceholder?: string;
    disableLocalFiltering?: boolean;
}
declare const ComboBoxListBox: <T extends object>({ className, defaultInputValue, onInputChange, inputPlaceholder, inputDebounce, disableLocalFiltering, items, onSelectionChange, selectionMode, selectedKeys, ...props }: ComboBoxListBoxProps & ComponentProps<typeof ListBox<T>>) => import("react/jsx-runtime").JSX.Element;
export { ComboBoxListBox };
export type { ComboBoxCommonProps, ComboBoxListBoxProps };
