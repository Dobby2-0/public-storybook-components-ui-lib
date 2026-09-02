import { SpellcheckLanguage } from '../../hooks/use-nspell';
interface SpellcheckedInputProps {
    /** The type of the input */
    type?: "text" | "textarea";
    /** The value of the input */
    value?: string;
    /** The placeholder text shown when the input is empty */
    placeholder?: string;
    /** Whether the input should be disabled */
    disabled?: boolean;
    /** Maximum number of characters allowed */
    maxLength?: number;
    /** Language to spellcheck for */
    spellCheckLanguage?: SpellcheckLanguage;
    /** Handler called when the value changes */
    onChange?: (value: string) => void;
    /** Handler called when the input loses focus */
    onBlur?: () => void;
    /** The className of the editor */
    className?: string;
}
declare const SpellcheckedInput: ({ type, value, placeholder, disabled, maxLength, spellCheckLanguage, onChange, onBlur, className, }: SpellcheckedInputProps) => import("react/jsx-runtime").JSX.Element | undefined;
export { SpellcheckedInput };
