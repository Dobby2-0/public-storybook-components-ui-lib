import { ComboBoxCommonProps, ComboBoxListBoxProps } from './ComboBoxListBox.tsx';
import { ListBoxProps } from '../ListBox/ListBox.tsx';
import { Key } from 'react-aria-components';
export declare const getDefaultSingleComboBoxValue: (selectedKey?: Key | null, defaultSelectedKey?: Key) => Set<Key> | undefined;
interface SingleComboBoxProps<T extends object> extends ComboBoxCommonProps, Omit<ComboBoxListBoxProps, "className"> {
    /** The currently selected keys in the collection (controlled). */
    selectedKey?: Key;
    /** The initial selected keys in the collection (uncontrolled). */
    defaultSelectedKey?: Key;
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (selectedItem: T | undefined) => void;
    /** Callback triggered when the open state of the popover changes. */
    onOpenChange?: (isOpen: boolean) => void;
    /** Allows the combobox to be used like a menu */
    keepSelectionClear?: boolean;
}
declare const SingleComboBox: <T extends object>({ placeholder, className, items, selectedKey, defaultSelectedKey, onSelectionChange, onOpenChange, idResolver, keepSelectionClear, storageKey, ...props }: SingleComboBoxProps<T> & ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
export { SingleComboBox, type SingleComboBoxProps };
