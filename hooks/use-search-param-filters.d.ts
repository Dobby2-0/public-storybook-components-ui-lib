import { FilterDefinition } from '../components/ListFilters/ListFilters.tsx';
type FilterValue = string | string[] | boolean | undefined;
type FilterConfig = Pick<FilterDefinition, "name" | "filterType" | "storageKey">;
interface UseFilterSearchParamsOptions {
    filters: FilterConfig[];
    defaultValues: Record<string, FilterValue>;
}
export declare const useSearchParamFilters: ({ filters, defaultValues, }: UseFilterSearchParamsOptions) => {
    filterValues: Record<string, FilterValue>;
    onFilterChange: (newFilters: Record<string, FilterValue>) => void;
    resetFilters: () => void;
    hasNonDefaultFilters: boolean;
};
export {};
