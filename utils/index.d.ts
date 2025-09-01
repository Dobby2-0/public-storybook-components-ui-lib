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
export declare const downloadFile: (url: string, name: string) => Promise<void>;
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
