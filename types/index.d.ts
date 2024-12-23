import { breakpoints } from '@dobby2-0/styleguide';
import { default as i18next } from 'i18next';
import { ReactNode } from '../../node_modules/react';
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
    /**
     * The i18next instance to use for translations
     */
    i18nextInstance?: typeof i18next;
}
export interface CollectionItem {
    id: string;
    label: ReactNode;
}
/** Universal Address type, used in multiple API's */
export interface Address {
    street?: string;
    number?: string;
    box?: string;
    postalCode?: string;
    city?: string;
    country?: string;
}
export type ResolverFunction<T, U> = (item: T) => U;
export type FieldResolver<T, U> = keyof T | ResolverFunction<T, U>;
export type ResolverFunctionWithProps<T, U, V> = (item: T, extraProps: V) => U;
export type FieldResolverWithProps<T, U, V> = keyof T | ResolverFunctionWithProps<T, U, V>;
export {};
