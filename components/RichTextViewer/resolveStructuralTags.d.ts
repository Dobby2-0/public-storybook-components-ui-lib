/**
 * A template as it reads when all data is available: the markers of `#if … /if`,
 * `#unless … /unless`, `#each … /each` and `#with … /with` are removed and their
 * content is shown once, and everything after an `else` is left out. Markers that
 * can't be paired stay as they are.
 */
export declare const resolveStructuralTags: (html: string) => string;
