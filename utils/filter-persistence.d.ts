import { Key } from 'react-aria-components';
export declare const FILTER_TYPE_PREFIXES: {
    readonly "multi-select": "multi-select";
    readonly "single-select": "single-select";
    readonly "multi-combobox": "multi-combobox";
    readonly "single-combobox": "single-combobox";
};
export declare const loadFilterState: (filterType: keyof typeof FILTER_TYPE_PREFIXES, key: string | undefined, defaultSelectedKeys?: Set<Key>) => Set<Key> | undefined;
export declare const saveFilterState: (filterType: keyof typeof FILTER_TYPE_PREFIXES, key: string | undefined, value: Set<Key> | Key[]) => void;
/**
 * Remove all filter keys from localStorage and optionally reload the page.
 */
export declare const clearPersistedFilterState: (reloadPage?: boolean) => void;
/**
 * Remove persisted filter state for the current route from localStorage and optionally reload the page.
 */
export declare const clearPersistedFilterStateByRoute: (reloadPage?: boolean) => void;
