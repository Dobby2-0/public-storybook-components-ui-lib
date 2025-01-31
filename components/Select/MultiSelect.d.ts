import { ListBoxBaseProps } from '../ListBox/ListBox.tsx';
import { SelectCommonProps } from './SelectBase';
import { Key } from 'react-aria-components';
interface MultiSelectProps<T extends object> extends SelectCommonProps<T> {
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (selectedItems: T[]) => void;
    /** The currently selected keys in the collection (controlled). */
    selectedKeys?: Set<Key>;
    /** The initial selected keys in the collection (uncontrolled). */
    defaultSelectedKeys?: Set<Key>;
}
/**
 * A select component that displays a collapsible list of options and allows a user to select one or more of them.
 *
 * Based on `React-aria-components`
 */
declare const MultiSelect: <T extends object>({ label, placeholder, description, variant, className, items, disallowEmptySelection, selectedKeys, defaultSelectedKeys, disabledKeys, onSelectionChange, idResolver, ...props }: MultiSelectProps<T> & ListBoxBaseProps<T>) => import("react/jsx-runtime").JSX.Element;
export { MultiSelect, type MultiSelectProps };
