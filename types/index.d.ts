import { breakpoints } from '@dobby2-0/styleguide';
/**
 * Removes `null` as a possible value from all properties of an object.
 */
export type ExcludeNull<T> = {
    [P in keyof T]: Exclude<T[P], null>;
};
interface NavigateOptions {
    /**
     * Extra route state to pass to the new location, only used when `to` is a string
     */
    state?: unknown;
    /**
     * Whether to resolve relative URLs against the current origin, only used when `to` is a string and the context is configured to use this property.
     */
    fromRoot?: boolean;
}
export interface DobbyContextValue {
    /**
     * The container element that Dobby will use to render any components that need to be dynamically attached to the DOM. (e.g. modals)
     */
    getContainer: () => HTMLElement | null;
    /**
     * Breakpoint definitions
     */
    breakpoints: typeof breakpoints;
    /**
     * The navigate function to use internally and expose through the useDobbyContext hook, to keep everything consistent across apps
     */
    navigate: (to: string | number, options?: NavigateOptions) => void;
}
export {};
