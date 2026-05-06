import { SingleComboBoxProps } from '../ComboBox/SingleComboBox.tsx';
import { ListBoxProps } from '../ListBox/ListBox.tsx';
import * as RPNInput from "react-phone-number-input";
interface CountryEntry {
    label: string;
    value: RPNInput.Country | undefined;
}
declare const CountryComboBox: <T extends CountryEntry>({ className, items, value, defaultValue, onSelectionChange, onOpenChange, idResolver, ...props }: SingleComboBoxProps<T> & ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
declare const FlagComponent: ({ country, countryName }: RPNInput.FlagProps) => import("react/jsx-runtime").JSX.Element;
export { CountryComboBox, FlagComponent };
export type { CountryEntry };
