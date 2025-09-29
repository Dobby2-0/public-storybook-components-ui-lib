import { ComboBox } from '../ComboBox/ComboBox.tsx';
import { Select } from '../Select/Select.tsx';
import { ComponentProps } from '../../../node_modules/react';
type SelectFilterProps = ComponentProps<typeof Select> & {
    /** Type of filter */
    filterType: "single-select" | "multi-select";
};
type ComboBoxFilterProps = ComponentProps<typeof ComboBox> & {
    /** Type of filter */
    filterType: "combobox";
};
type FilterValue = string | string[] | boolean | undefined;
type FilterDefinition = Pick<SelectFilterProps | ComboBoxFilterProps, "filterType" | "items" | "placeholder" | "labelResolver" | "className"> & {
    /** Unique name of the filter, also used as label/placeholder */
    name: string;
};
interface FilterBarProps {
    /** Forces the filter bar to be displayed in mobile mode. */
    forceMobile?: boolean;
    /** Definition of all filters. */
    filters: FilterDefinition[];
    /** Initial values of te filters, uses the filter `name` to link to the component. */
    filterValues?: Record<string, FilterValue>;
    /** Callback function called whan a filter changes value, returns the value of all "touched" filters. */
    onFilterChange?: (filters: Record<string, FilterValue>) => void;
    /** The CSS className for the element. */
    className?: string;
}
/**
 * Component used for presenting various filters above a table
 *
 * Support Singl-/MultiSelect & Combobox filters
 */
declare const ListFilters: ({ filters, filterValues, onFilterChange, className, forceMobile, }: FilterBarProps) => import("react/jsx-runtime").JSX.Element;
export { ListFilters };
export type { FilterDefinition, FilterValue };
