import { ComboBoxCommonProps, ComboBoxListBoxProps } from './ComboBoxListBox.tsx';
import { ListBoxProps } from '../ListBox/ListBox.tsx';
import { Key } from 'react-aria-components';
interface MultiComboBoxProps<T extends object> extends ComboBoxCommonProps, Omit<ComboBoxListBoxProps, "className"> {
    /** The currently selected keys in the collection (controlled). */
    selectedKeys?: Set<Key>;
    /** The initial selected keys in the collection (uncontrolled). */
    defaultSelectedKeys?: Set<Key>;
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (selectedItems: T[]) => void;
    /** Callback triggered when the open state of the popover changes. */
    onOpenChange?: (isOpen: boolean) => void;
}
declare const MultiComboBox: <T extends object>({ label, placeholder, className, items, selectedKeys, defaultSelectedKeys, onSelectionChange, onOpenChange, idResolver, ...props }: MultiComboBoxProps<T> & ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
export { MultiComboBox, type MultiComboBoxProps };
