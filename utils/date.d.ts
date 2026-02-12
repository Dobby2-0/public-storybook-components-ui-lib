export declare const formatDateString: (date: Date | string | number, formatStr: string, config?: {
    locale?: string;
}) => string;
export declare const formatDate: (date?: string) => string | undefined;
export declare const formatDateTime: (date?: string) => string | undefined;
export declare const formatTime: (date?: string) => string | undefined;
export type DateFilterType = "day" | "week" | "month" | "halfYear" | "year";
/**
 * Returns a Date object for the given filter type for x amount of time in the past (e.g. "day" returns a Date object for 24 hours ago).
 * @param filter - The filter type (e.g. "day", "week", etc.)
 * @returns Date or undefined if filter is not recognized
 */
export declare function getDateFromFilter(filter: DateFilterType): Date | undefined;
