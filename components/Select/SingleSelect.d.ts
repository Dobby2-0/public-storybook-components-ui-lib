import { ListBoxProps } from '../ListBox/ListBox.tsx';
import { SelectCommonProps } from './SelectBase';
interface SingleSelectProps<T extends object> extends SelectCommonProps<T> {
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (selectedItem: T | undefined) => void;
    /** Allows the select to be used like a menu */
    keepSelectionClear?: boolean;
}
/**
 * A select component that displays a collapsible list of options and allows a user to select one of them.
 *
 * Based on `React-aria-components`
 */
declare const SingleSelect: <T extends object>({ placeholder, className, items, disallowEmptySelection, selectedKey, defaultSelectedKey, onSelectionChange, idResolver, keepSelectionClear, storageKey, ...props }: SingleSelectProps<T> & ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
export { SingleSelect, type SingleSelectProps };
