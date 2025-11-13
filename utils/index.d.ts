import { Address, FieldResolver, FieldResolverWithProps } from '../types';
import { SeverityLevel } from '@sentry/react';
import { ClassValue } from 'clsx';
/**
 * React classnames utility that combines Tailwind's twMerge with clsx.
 */
export declare const cn: (...inputs: ClassValue[]) => string;
export declare const capitalize: (value: string) => string;
export declare const getClassName: <T>(className: string | ((value?: T) => string) | undefined, value?: T) => string;
export declare const localizeCurrency: (amount?: number, locale?: string) => string;
export declare const buildAddressString: (address?: Address) => string;
export declare const resolveField: <T, U>(item: T, fieldResolver?: FieldResolver<T, U>) => string | U;
export declare const resolveFieldWithProps: <T, U, V>(item: T, extraCallbackProps: V, fieldResolver?: FieldResolverWithProps<T, U, V>) => string | U;
export declare const captureEvent: (message: string, level: SeverityLevel) => string | undefined;
/** Initiates a native browser download */
export declare const downloadFile: (url: string, name: string, mimeType?: string) => Promise<void>;
/**
 * Concatenates the first and last name to a single string and omits any falsy values.
 *
 * By defalt the last name is shown first, followed by the first name.
 */
export declare const showFullName: (firstName?: string | null, lastName?: string | null, reverseOrder?: boolean) => string;
/**
 * Formats a number according to the specified locale and options.
 */
export declare const formatNumber: (value?: number, language?: string, options?: Intl.NumberFormatOptions) => string | undefined;
/**
 * Calculates the optimal query page size based on available height and row height.
 * Adds a 30% buffer to the visible rows. The page size will not exceed maxPageSize.
 */
export declare const getQueryPageSize: (availableHeight?: number, rowHeight?: number, maxPageSize?: number) => number;
export declare const moveArrayItem: <T>(arr: T[], oldIndex: number, newIndex: number) => T[];
/**
 * Function to get the item in the current locale from a list of localized items
 *
 * Will return the first item that matches the language or falls back to
 * "nl", "fr", or "en" (in that order) if no specific language is found.
 */
export declare const getLocalizedItem: <T extends {
    language?: string;
} | {
    languageCode?: string;
}>(items?: T[], language?: string) => T | undefined;
