interface RegionCheck {
    /** The names of the editable regions, in document order. */
    regions: string[];
    /** Why the regions cannot be read (a duplicate name, an element that is never closed, ...). */
    error?: string;
}
interface TagProblem {
    /** The start of the offending tag. */
    snippet: string;
    reason: string;
}
interface TemplateTag {
    /** The code of the tag, as it is in the template. */
    code: string;
    label: string;
}
/** The editable regions of a template, or the reason they cannot be read. */
declare const checkRegions: (template: string) => RegionCheck;
/** The tag nodes the backend converter would not turn back into Handlebars. */
declare const findUnconvertibleTagNodes: (template: string) => TagProblem[];
/**
 * The block markers (`#if`, `#unless`, `#each`, `#with`) that have no closer, and the
 * closers that have no opener. An `else` outside a block is reported too.
 */
declare const findUnpairedBlockMarkers: (template: string) => string[];
/**
 * Whether everything outside the editable regions is the same in both templates: the
 * editor only ever rewrites the content of a region, so a difference is a bug.
 */
declare const isOutsideOfRegionsUnchanged: (before: string, after: string) => boolean;
/** The regions whose content differs between both templates (also when a region is missing from one). */
declare const findChangedRegions: (before: string, after: string) => string[];
/** The distinct tags in a template (not the block markers), for the tag picker of the editor. */
declare const extractTags: (template: string) => TemplateTag[];
export { checkRegions, extractTags, findChangedRegions, findUnconvertibleTagNodes, findUnpairedBlockMarkers, isOutsideOfRegionsUnchanged, };
export type { RegionCheck, TagProblem, TemplateTag };
