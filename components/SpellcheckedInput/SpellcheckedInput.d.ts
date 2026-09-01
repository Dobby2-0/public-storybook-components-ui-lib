interface SpellcheckedInputProps {
    /** The type of the input */
    type?: "text" | "textarea";
    /** The value of the input */
    value?: string;
    /** Whether the input should be disabled */
    disabled?: boolean;
    /** Handler called when the value changes */
    onChange?: (value: string) => void;
    /** The className of the editor */
    className?: string;
}
declare const SpellcheckedInput: ({ type, value, disabled, onChange, className, }: SpellcheckedInputProps) => import("react/jsx-runtime").JSX.Element | undefined;
export { SpellcheckedInput };
