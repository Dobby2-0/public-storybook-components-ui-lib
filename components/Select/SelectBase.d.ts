import { ListBox } from '../ListBox/ListBox.tsx';
import { dropdownInputVariants } from '../../styles/variants.ts';
import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, CSSProperties, PropsWithChildren, ReactNode, RefObject } from '../../../node_modules/react';
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
}
declare const SelectTrigger: import('../../../node_modules/react').ForwardRefExoticComponent<AriaButtonProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
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
interface SelectBaseProps<T extends object> extends Pick<SelectCommonProps<T>, "className" | "variant"> {
    triggerRef: RefObject<HTMLButtonElement>;
    children: ReactNode;
}
declare const SelectBase: <T extends object>({ className, triggerRef, variant, children, }: SelectBaseProps<T>) => import("react/jsx-runtime").JSX.Element;
export { SelectBase, SelectListBox, SelectPopover, SelectTrigger, SelectValue };
export type { SelectCommonProps };
