import { ListBox } from '../ListBox/ListBox.tsx';
import { dropdownInputVariants } from '../../styles/variants.ts';
import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, CSSProperties, PropsWithChildren } from '../../../node_modules/react';
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
}
declare const SelectTrigger: import('../../../node_modules/react').ForwardRefExoticComponent<AriaButtonProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
interface SelectPopoverProps extends Omit<AriaPopoverProps, "children">, PropsWithChildren {
}
declare const SelectPopover: ({ className, children, ...props }: SelectPopoverProps) => import("react/jsx-runtime").JSX.Element;
declare const SelectListBox: <T extends object>({ className, ...props }: ComponentPropsWithoutRef<typeof ListBox<T>>) => import("react/jsx-runtime").JSX.Element;
export { SelectListBox, SelectPopover, SelectTrigger };
export type { SelectCommonProps };
