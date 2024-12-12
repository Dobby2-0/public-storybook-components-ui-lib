import { ListBoxProps, ListItemWithId } from '../ListBox/ListBox.tsx';
import { dropdownInputVariants } from '../../styles/variants.ts';
import { VariantProps } from 'class-variance-authority';
import { CSSProperties, PropsWithChildren } from '../../../node_modules/react';
import { ButtonProps as AriaButtonProps, PopoverProps as AriaPopoverProps, SelectProps as AriaSelectProps, ValidationResult as AriaValidationResult } from 'react-aria-components';
declare const SelectTrigger: import('../../../node_modules/react').ForwardRefExoticComponent<AriaButtonProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
interface ClassNameObject {
    base?: string;
    popover?: string;
    listbox?: string;
}
interface SelectPopoverProps extends Omit<AriaPopoverProps, "children">, PropsWithChildren {
}
declare const SelectPopover: ({ className, children, ...props }: SelectPopoverProps) => import("react/jsx-runtime").JSX.Element;
interface SelectListBoxProps extends Omit<ListBoxProps, "items"> {
    items?: Omit<ListItemWithId, "children">[];
}
declare const SelectListBox: ({ className, ...props }: SelectListBoxProps) => import("react/jsx-runtime").JSX.Element;
interface SelectCommonProps<T extends object> extends Omit<AriaSelectProps<T>, "children" | "className" | "style">, VariantProps<typeof dropdownInputVariants> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: AriaValidationResult) => string);
    items?: Omit<ListItemWithId, "children">[];
    className?: string | ClassNameObject;
    multiple?: boolean;
    style?: CSSProperties;
}
export { SelectListBox, SelectPopover, SelectTrigger };
export type { SelectCommonProps };
