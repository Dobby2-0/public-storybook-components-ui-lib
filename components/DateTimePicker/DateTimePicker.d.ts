import { dropdownInputVariants } from '../../styles/variants.ts';
import { VariantProps } from 'class-variance-authority';
import { ReactNode, RefObject } from '../../../node_modules/react';
import { DatePickerProps } from 'react-datepicker';
export interface DateTimePickerProps extends Omit<DatePickerProps, "icon">, VariantProps<typeof dropdownInputVariants> {
    /**  */
    label?: string;
    /**  */
    description?: string;
    /** Custom icon shown inside the picker input */
    icon?: ReactNode;
    /**  */
    defaultDate?: Date;
    /** allow and handle clearing the date */
    onClear?: () => void;
    ref?: RefObject<HTMLInputElement>;
}
/**
 * The Date Time Picker component lets users select a date and or time.
 *
 * Based on `react-datepicker`
 */
declare const DateTimePicker: ({ className, dateFormat, defaultDate, description, icon, label, onChange, selected, variant, showTimeInput, ref, ...props }: DateTimePickerProps) => import("react/jsx-runtime").JSX.Element;
export { DateTimePicker };
