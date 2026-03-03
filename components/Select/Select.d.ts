import { ListBoxProps } from '../ListBox/ListBox.tsx';
import { MultiSelectProps } from './MultiSelect.tsx';
import { SingleSelectProps } from './SingleSelect.tsx';
import { Ref } from '../../../node_modules/react';
interface SingleSelectBaseProps<T extends object> extends SingleSelectProps<T> {
    selectionMode?: "single";
}
interface MultiSelectBaseProps<T extends object> extends Omit<MultiSelectProps<T>, "selectionMode"> {
    selectionMode: "multiple";
}
type SelectProps<T extends object> = SingleSelectBaseProps<T> | (MultiSelectBaseProps<T> & {
    ref?: Ref<HTMLButtonElement>;
});
/**
 * A select component that displays a collapsible list of options and allows a user to select one of them.
 *
 * Based on `React-aria-components`
 */
declare const Select: <T extends object>(props: SelectProps<T> & ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
export { Select };
export type { MultiSelectBaseProps, SingleSelectBaseProps };
