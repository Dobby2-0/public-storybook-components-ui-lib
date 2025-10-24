import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
interface DatePickerHeaderProps extends ReactDatePickerCustomHeaderProps {
    type?: "day" | "month" | "year";
    onMonthSelect?: () => void;
    onYearSelect?: () => void;
}
declare const DatePickerHeader: ({ type, date, decreaseMonth, decreaseYear, increaseMonth, increaseYear, prevMonthButtonDisabled, prevYearButtonDisabled, nextMonthButtonDisabled, nextYearButtonDisabled, visibleYearsRange, onMonthSelect, onYearSelect, }: DatePickerHeaderProps) => import("react/jsx-runtime").JSX.Element;
export { DatePickerHeader };
