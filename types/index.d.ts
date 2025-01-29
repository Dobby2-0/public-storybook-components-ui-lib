import { AlertProps } from '../components/Alert/Alert';
import { breakpoints } from '@dobby2-0/styleguide';
import { ToastProps } from '@radix-ui/react-toast';
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
    /**
     * Maximum number of toasts that can be visible at the same time
     */
    maxVisibleToasts?: number;
}
export interface ToastContextValue {
    /**
     * An array of Toast objects currently being displayed.
     */
    toasts: Toast[];
    /**
     * Function to add a new toast.
     * @example
     *  <Button onPress={() =>
          toast({
            title: toastTitle,
            children: "This is a test toast notification!",
            onClose: () => console.warn("Toast closed"),
            duration,
          })
        }>
        <p>Toast {id}</p>
      </Button>
     */
    toast: (props: ToasterProps) => void;
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
/**
 * Represents the properties for the Toaster component.
 *
 * @extends ToastProps
 * @extends AlertProps
 */
export type ToasterProps = ToastProps & AlertProps & {
    duration?: number;
    description?: string;
};
/**
 * Represents a Toast notification.
 * @extends ToasterProps
 *
 * @example
 * {
 *   title: "Success",
 *   description: "Your changes have been saved.",
 *   //other properties
 * }
 */
export type Toast = ToasterProps & {
    id: string;
    dismiss: () => void;
    action?: ReactNode;
    timeout?: NodeJS.Timeout;
};
export {};
