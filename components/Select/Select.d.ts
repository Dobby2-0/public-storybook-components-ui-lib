import { VariantProps } from 'class-variance-authority';
import { SelectProps as AriaSelectProps, ValidationResult as AriaValidationResult } from 'react-aria-components';
import { ListItemWithId } from '../ListBox/ListBox.tsx';
declare const selectVariants: (props?: ({
    variant?: "default" | "borderless" | "contrast" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ClassNameObject {
    base?: string;
    popover?: string;
    listbox?: string;
}
interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, "children" | "className">, VariantProps<typeof selectVariants> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: AriaValidationResult) => string);
    items?: Omit<ListItemWithId, "children">[];
    className?: string | ClassNameObject;
}
/**
 * A select component that displays a collapsible list of options and allows a user to select one of them.
 *
 * Based on `React-aria-components`
 */
declare const Select: <T extends object>({ label, description, variant, className, items, ...props }: SelectProps<T>) => import("react/jsx-runtime").JSX.Element;
export { Select };
