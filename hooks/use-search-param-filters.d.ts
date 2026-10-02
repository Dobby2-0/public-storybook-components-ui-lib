import { FilterDefinition } from '../components/ListFilters/ListFilters.tsx';
type FilterValue = string | string[] | boolean | undefined;
type FilterConfig = Pick<FilterDefinition, "name" | "filterType" | "storageKey">;
interface UseFilterSearchParamsOptions {
    filters: FilterConfig[];
    /** Must be stable for the lifetime of the component (e.g. a module-level constant). */
    defaultValues: Record<string, FilterValue>;
}
export declare const useSearchParamFilters: ({ filters, defaultValues, }: UseFilterSearchParamsOptions) => {
    filterValues: Record<string, FilterValue>;
    onFilterChange: (newFilters: Record<string, FilterValue>) => void;
    resetFilters: () => void;
    hasNonDefaultFilters: boolean;
};
export {};
