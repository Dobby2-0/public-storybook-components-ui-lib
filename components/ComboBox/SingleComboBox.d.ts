import { ComboBoxCommonProps, ComboBoxListBoxProps } from './ComboBoxListBox.tsx';
import { ListBoxProps } from '../ListBox/ListBox.tsx';
import { Key } from 'react-aria-components';
interface SingleComboBoxProps<T extends object> extends ComboBoxCommonProps, Omit<ComboBoxListBoxProps, "className"> {
    /** The currently selected keys in the collection (controlled). */
    selectedKey?: Key;
    /** The initial selected keys in the collection (uncontrolled). */
    defaultSelectedKey?: Key;
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (selectedItem: T | undefined) => void;
}
declare const SingleComboBox: <T extends object>({ placeholder, className, items, selectedKey, defaultSelectedKey, onSelectionChange, idResolver, ...props }: SingleComboBoxProps<T> & ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
export { SingleComboBox, type SingleComboBoxProps };
