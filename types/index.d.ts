/**
 * Removes `null` as a possible value from all properties of an object.
 */
export type ExcludeNull<T> = {
    [P in keyof T]: Exclude<T[P], null>;
};
export interface DobbyContextValue {
    /**
     * The container element that Dobby will use to render any components that need to be dynamically attached to the DOM. (e.g. modals)
     */
    getContainer: () => HTMLElement | null;
}
