import { ListBox } from '../ListBox/ListBox.tsx';
import { dropdownInputVariants } from '../../styles/variants.ts';
import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, CSSProperties, PropsWithChildren, ReactNode, Ref } from '../../../node_modules/react';
import { SelectProps as AriaSelectProps, ValidationResult as AriaValidationResult } from 'react-aria-components';
interface ClassNameObject {
    base?: string;
    popover?: string;
    listbox?: string;
}
interface SelectCommonProps<T extends object> extends Omit<AriaSelectProps<T>, "children" | "className" | "style" | "onSelectionChange">, VariantProps<typeof dropdownInputVariants> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: AriaValidationResult) => string);
    className?: string | ClassNameObject;
    style?: CSSProperties;
    disallowEmptySelection?: boolean;
    loading?: boolean;
    ref?: Ref<HTMLButtonElement>;
    /** The storage key for localStorage keying. Should be unique within the MFE. If not provided, localStorage is not used. */
    storageKey?: string;
}
interface SelectValueProps extends PropsWithChildren {
    label?: ReactNode;
    showLabelAsPlaceholder?: boolean;
    className?: string;
}
declare const SelectValue: ({ label, showLabelAsPlaceholder, className, children, }: SelectValueProps) => import("react/jsx-runtime").JSX.Element;
declare const SelectListBox: <T extends object>({ className, ...props }: ComponentPropsWithoutRef<typeof ListBox<T>>) => import("react/jsx-runtime").JSX.Element;
interface SelectBaseProps<T extends object> extends Pick<SelectCommonProps<T>, "className" | "variant" | "loading" | "isDisabled"> {
    label?: string;
    description?: string;
    popoverContent: ReactNode;
    children: ReactNode;
    popoverOpen: boolean;
    onPopoverOpenChange: (isOpen: boolean) => void;
    ref?: Ref<HTMLButtonElement>;
}
declare const SelectBase: <T extends object>({ label, description, className, variant, popoverContent, children, popoverOpen, onPopoverOpenChange, loading, ref, ...props }: SelectBaseProps<T>) => import("react/jsx-runtime").JSX.Element;
export { SelectBase, SelectListBox, SelectValue };
export type { SelectCommonProps };
