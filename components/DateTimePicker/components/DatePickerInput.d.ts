import { ReactNode, RefObject } from '../../../../node_modules/react';
interface DatePickerInputProps {
    value?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    customIcon?: ReactNode;
    onClear?: () => void;
    ref?: RefObject<HTMLInputElement>;
}
declare const DatePickerInput: ({ value, onClick, className, disabled, customIcon, onClear, ref, ...props }: DatePickerInputProps) => import("react/jsx-runtime").JSX.Element;
export { DatePickerInput };
