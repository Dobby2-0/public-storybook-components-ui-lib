import { ListBoxBaseProps } from '../ListBox/ListBox.tsx';
import { SelectCommonProps } from './SelectBase';
interface SingleSelectProps<T extends object> extends SelectCommonProps<T> {
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (selectedItem: T | undefined) => void;
}
/**
 * A select component that displays a collapsible list of options and allows a user to select one of them.
 *
 * Based on `React-aria-components`
 */
declare const SingleSelect: <T extends object>({ label, placeholder, description, variant, className, items, disallowEmptySelection, selectedKey, defaultSelectedKey, onSelectionChange, idResolver, ...props }: SingleSelectProps<T> & ListBoxBaseProps<T>) => import("react/jsx-runtime").JSX.Element;
export { SingleSelect, type SingleSelectProps };
