import { dropdownInputVariants } from '../../styles/variants.ts';
import { VariantProps } from 'class-variance-authority';
import { ReactNode } from '../../../node_modules/react';
import { DatePickerProps } from 'react-datepicker';
interface DateTimePickerProps extends Omit<DatePickerProps, "icon">, VariantProps<typeof dropdownInputVariants> {
    /**  */
    label?: string;
    /**  */
    description?: string;
    /** Custom icon shown inside the picker input */
    icon?: ReactNode;
    /**  */
    defaultDate?: Date;
}
/**
 * The Date Time Picker component lets users select a date and or time.
 *
 * Based on `react-datepicker`
 */
declare const DateTimePicker: ({ className, dateFormat, defaultDate, description, icon, label, onChange, selected, variant, ...props }: DateTimePickerProps) => import("react/jsx-runtime").JSX.Element;
export { DateTimePicker };
