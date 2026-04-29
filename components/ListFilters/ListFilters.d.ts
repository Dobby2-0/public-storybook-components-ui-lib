import { ComboBox } from '../ComboBox/ComboBox.tsx';
import { Select } from '../Select/Select.tsx';
import { ComponentProps, HTMLAttributes, ReactNode } from '../../../node_modules/react';
type SelectFilterProps = ComponentProps<typeof Select> & {
    /** Type of filter */
    filterType: "single-select" | "multi-select";
};
type ComboBoxFilterProps = ComponentProps<typeof ComboBox> & {
    /** Type of filter */
    filterType: "combobox";
};
type FilterValue = string | string[] | boolean | undefined;
type FilterDefinition = Pick<SelectFilterProps | ComboBoxFilterProps, "filterType" | "items" | "placeholder" | "labelResolver" | "className" | "storageKey" | "hasNextPage" | "loading" | "onLoadMore" | "idResolver" | "disallowEmptySelection"> & {
    /** Unique name of the filter, also used as label/placeholder */
    name: string;
    /** Disables local filtering of combobox */
    disableLocalFiltering?: boolean;
    /** Callback function called when input changes */
    onInputChange?: (value: string) => void;
};
interface FilterBarProps {
    /** Forces the filter bar to be displayed in mobile mode. */
    forceMobile?: boolean;
    /** Definition of all filters. */
    filters?: FilterDefinition[];
    /** Initial values of te filters, uses the filter `name` to link to the component. */
    filterValues?: Record<string, FilterValue>;
    /** Width of each filter component. */
    filterWidth?: number;
    /** Number of currently active filters. (shown on mobile mode). */
    activeFilters?: number;
    /** Callback function called when a filter changes value, returns the value of all "touched" filters. */
    onFilterChange?: (filters: Record<string, FilterValue>) => void;
    /** The CSS className for the element. */
    className?: string;
    /** Enables showing the reset button */
    enableResetButton?: boolean;
    /** Function called when the reset button is clicked, should handle resetting filters to default values. If not provided, the component will clear persisted filter state and refresh window. */
    onResetFilters?: () => Promise<void> | void;
    /**
     * Child elements to be rendered inside the component.
     *
     * @remarks
     * **Note:** Custom children currently does not fuly support reset functionality.
     */
    children?: ReactNode;
    /** Additional props to be passed to each child filter component. */
    childProps?: Partial<HTMLAttributes<HTMLElement>>;
}
/**
 * Component used for presenting various filters for a list of data.
 *
 * Support Single-/MultiSelect & Combobox filters or any custom filter component as children.
 */
declare const ListFilters: ({ filters, filterValues, filterWidth, activeFilters: activeFiltersProp, onFilterChange, className, forceMobile, enableResetButton, onResetFilters, children, childProps, }: FilterBarProps) => import("react/jsx-runtime").JSX.Element;
export { ListFilters };
export type { FilterDefinition, FilterValue };
