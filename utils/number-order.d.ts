/**
 * Determines the initial number based on the type of the provided number.
 */
export declare const getInitialNumber: (number: string) => "a" | "A" | "1";
/**
 * Increments a number based on the number before it and the old value of the
 * number. Supports multi-level numbers and handles uppercase, lowercase, and
 * numeric formats (eg. 1.a).
 *
 * `old` conveys the target depth of the result (how deep the item being
 * placed is meant to be), not just a type hint: if `before` is deeper than
 * `old`, the result drops back down to `old`'s depth (eg. previous "4.c",
 * old "5" -> "5") instead of tacking another level onto the deeper prefix.
 */
export declare const incrementToLevel: (before: string, old: string) => string;
/**
 * Returns the next sibling number after `before`, staying at `before`'s own
 * depth regardless of it (eg. "6.2.a" -> "6.2.b", "6" -> "7"). Use this when
 * appending a new item right after another one and there's no separate
 * "old" number to consider.
 */
export declare const incrementSibling: (before: string) => string;
