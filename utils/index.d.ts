import { ClassValue } from 'clsx';
/**
 * React classnames utility that combines Tailwind's twMerge with clsx.
 */
export declare const cn: (...inputs: ClassValue[]) => string;
export declare const capitalize: (value: string) => string;
export declare const getClassName: <T>(className: string | ((value?: T) => string) | undefined, value?: T) => string;
export declare const localizeCurrency: (amount?: number, locale?: string) => string;
