import { ClassValue } from 'clsx';
/**
 * React classnames utility that combines Tailwind's twMerge with clsx.
 */
export declare const cn: (...inputs: ClassValue[]) => string;
export declare const capitalize: (value: string) => string;
export declare const getClassName: (value: string | ((selected: boolean) => string) | undefined, selected?: boolean) => string;
