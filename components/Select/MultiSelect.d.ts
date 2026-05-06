import { ListBoxProps } from '../ListBox/ListBox.tsx';
import { SelectCommonProps } from './SelectBase';
import { Key } from '@react-types/shared';
interface MultiSelectProps<T extends object> extends SelectCommonProps<T, "multiple"> {
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (selectedItems: T[]) => void;
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
}
/**
 * A select component that displays a collapsible list of options and allows a user to select one or more of them.
 *
 * Based on `React-aria-components`
 */
declare const MultiSelect: <T extends object>({ label, placeholder, className, items, disallowEmptySelection, value, defaultValue, selectedKeys, defaultSelectedKeys, onSelectionChange, idResolver, storageKey, ...props }: MultiSelectProps<T> & ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
export { MultiSelect, type MultiSelectProps };
