import { MultiComboBoxProps } from './MultiComboBox.tsx';
import { SingleComboBoxProps } from './SingleComboBox.tsx';
import { ListBoxProps } from '../ListBox/ListBox';
interface SingleComboBoxBaseProps<T extends object> extends SingleComboBoxProps<T> {
    selectionMode?: "single";
}
interface MultiComboBoxBaseProps<T extends object> extends MultiComboBoxProps<T> {
    selectionMode: "multiple";
}
type ComboBoxProps<T extends object> = SingleComboBoxBaseProps<T> | MultiComboBoxBaseProps<T>;
/**
 * A ComboBox combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 *
 * Based on `React-aria-components`
 */
declare const ComboBox: <T extends object>(props: ComboBoxProps<T> & ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
export { ComboBox };
export type { MultiComboBoxBaseProps, SingleComboBoxBaseProps };
