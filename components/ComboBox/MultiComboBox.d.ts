import { ComboBoxCommonProps, ComboBoxListBoxProps } from './ComboBoxListBox.tsx';
import { ListBoxProps } from '../ListBox/ListBox.tsx';
import { Key } from '@react-types/shared';
interface MultiComboBoxProps<T extends object> extends ComboBoxCommonProps, Omit<ComboBoxListBoxProps, "className"> {
    /** The current value (controlled). */
    value?: readonly Key[];
    /** The default value (uncontrolled). */
    defaultValue?: readonly Key[];
    /**
     * The currently selected keys in the collection (controlled).
     * @deprecated use value instead
     */
    selectedKeys?: Set<Key>;
    /**
     * The initial selected keys in the collection (uncontrolled).
     * @deprecated use defaultValue instead
     */
    defaultSelectedKeys?: Set<Key>;
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (selectedItems: T[]) => void;
    /** Callback triggered when the open state of the popover changes. */
    onOpenChange?: (isOpen: boolean) => void;
}
declare const MultiComboBox: <T extends object>({ label, placeholder, className, items, value, defaultValue, selectedKeys, defaultSelectedKeys, onSelectionChange, onOpenChange, idResolver, storageKey, ...props }: MultiComboBoxProps<T> & ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
export { MultiComboBox, type MultiComboBoxProps };
