import { ListBox } from '../ListBox/ListBox.tsx';
import { dropdownInputVariants } from '../../styles/variants.ts';
import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, CSSProperties, PropsWithChildren, ReactNode } from '../../../node_modules/react';
import { ButtonProps as AriaButtonProps, PopoverProps as AriaPopoverProps, SelectProps as AriaSelectProps, ValidationResult as AriaValidationResult } from 'react-aria-components';
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
}
interface SelectTriggerProps extends AriaButtonProps {
    loading?: boolean;
}
declare const SelectTrigger: import('../../../node_modules/react').ForwardRefExoticComponent<SelectTriggerProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
interface SelectValueProps extends PropsWithChildren {
    label?: ReactNode;
    showLabelAsPlaceholder?: boolean;
    className?: string;
}
declare const SelectValue: ({ label, showLabelAsPlaceholder, className, children, }: SelectValueProps) => import("react/jsx-runtime").JSX.Element;
interface SelectPopoverProps extends Omit<AriaPopoverProps, "children">, PropsWithChildren {
}
declare const SelectPopover: ({ className, children, ...props }: SelectPopoverProps) => import("react/jsx-runtime").JSX.Element;
declare const SelectListBox: <T extends object>({ className, ...props }: ComponentPropsWithoutRef<typeof ListBox<T>>) => import("react/jsx-runtime").JSX.Element;
interface SelectBaseProps<T extends object> extends Pick<SelectCommonProps<T>, "className" | "variant" | "loading"> {
    label?: string;
    description?: string;
    popoverContent: ReactNode;
    children: ReactNode;
    popoverOpen: boolean;
    onPopoverOpenChange: (isOpen: boolean) => void;
}
declare const SelectBase: <T extends object>({ label, description, className, variant, popoverContent, children, popoverOpen, onPopoverOpenChange, loading, ...props }: SelectBaseProps<T>) => import("react/jsx-runtime").JSX.Element;
export { SelectBase, SelectListBox, SelectPopover, SelectTrigger, SelectValue };
export type { SelectCommonProps };
