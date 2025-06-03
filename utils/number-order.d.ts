/**
 * Determines the initial number based on the type of the provided number.
 */
export declare const getInitialNumber: (number: string) => "a" | "A" | "1";
/**
 * Increments a number based on the number before it and the old value of the number.
 * Supports multi-level numbers and handles uppercase, lowercase, and numeric formats (eg. 1.a).
 */
export declare const incrementNumber: (before: string, old: string) => string;
