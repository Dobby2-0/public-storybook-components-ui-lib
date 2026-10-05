import { FilterDefinition } from '../components/ListFilters/ListFilters.tsx';
type FilterValue = string | string[] | boolean | undefined;
type FilterConfig = Pick<FilterDefinition, "name" | "filterType" | "storageKey">;
interface UseFilterSearchParamsOptions {
    filters: FilterConfig[];
    /**
     * The default value of each filter. Treated as static unless `resetOnDefaultsChange` is set.
     */
    defaultValues: Record<string, FilterValue>;
    /**
     * Reset the filters to the defaults when the content of `defaultValues` changes after mount.
     * @default false
     */
    resetOnDefaultsChange?: boolean;
}
export declare const useSearchParamFilters: ({ filters, defaultValues, resetOnDefaultsChange, }: UseFilterSearchParamsOptions) => {
    filterValues: Record<string, FilterValue>;
    onFilterChange: (newFilters: Record<string, FilterValue>) => void;
    resetFilters: () => void;
    hasNonDefaultFilters: boolean;
};
export {};
