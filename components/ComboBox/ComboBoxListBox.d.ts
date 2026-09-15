import { ListBox } from '../ListBox/ListBox.tsx';
import { ComponentProps } from '../../../node_modules/react';
interface ComboBoxListBoxProps {
    className?: string;
    defaultInputValue?: string;
    onInputChange?: (value: string) => void;
    inputDebounce?: number;
    inputPlaceholder?: string;
    disableLocalFiltering?: boolean;
}
declare const ComboBoxListBox: <T extends object>({ className, defaultInputValue, onInputChange, inputPlaceholder, inputDebounce, disableLocalFiltering, items, onSelectionChange, selectionMode, selectedKeys, ...props }: ComboBoxListBoxProps & ComponentProps<typeof ListBox<T>>) => import("react/jsx-runtime").JSX.Element;
export { ComboBoxListBox };
export type { ComboBoxListBoxProps };
