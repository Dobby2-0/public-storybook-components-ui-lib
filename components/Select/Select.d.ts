import { ListBoxBaseProps } from '../ListBox/ListBox.tsx';
import { MultiSelectProps } from './MultiSelect.tsx';
import { SingleSelectProps } from './SingleSelect.tsx';
interface SingleSelectBaseProps<T extends object> extends SingleSelectProps<T> {
    selectionMode?: "single";
}
interface MultiSelectBaseProps<T extends object> extends MultiSelectProps<T> {
    selectionMode: "multiple";
}
type SelectProps<T extends object> = SingleSelectBaseProps<T> | MultiSelectBaseProps<T>;
/**
 * A select component that displays a collapsible list of options and allows a user to select one of them.
 *
 * Based on `React-aria-components`
 */
declare const Select: <T extends object>(props: SelectProps<T> & ListBoxBaseProps<T>) => import("react/jsx-runtime").JSX.Element;
export { Select };
export type { MultiSelectBaseProps, SingleSelectBaseProps };
