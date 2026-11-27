/**
 * Pairs block markers (`#if … /if`, `#unless … /unless`, `#each … /each` and
 * `#with … /with`) into wrapper elements so the editor can model them as a single
 * node (and remove it as a whole), and unpairs them again on the way out. The
 * stored HTML keeps the plain marker tags. A closer only closes an opener of the
 * same helper.
 *
 *   <tag-node value="#if X" hidden="true"> A <tag-node value="/if" hidden="true">
 *     <->
 *   <structural-block condition="#if X" label="…" end-label="…"> A </structural-block>
 *
 * Three wrappers: block (blocks in a td/div), list (items in a ul/ol) and
 * inline (a run of text and tags inside one paragraph or list item).
 *
 * An `else` (also `else if …` and `^`) between an opener and its closer becomes a
 * divider element inside the wrapper, so both branches can be edited.
 *
 * Markers that cannot be paired safely (unbalanced, wrong parent) are left
 * untouched.
 */
declare const BLOCK_TAG = "structural-block";
declare const LIST_TAG = "structural-list-block";
declare const INLINE_TAG = "structural-inline";
declare const ELSE_TAG = "structural-else";
declare const ELSE_INLINE_TAG = "structural-else-inline";
/** Elements that are blocks or part of a block structure (list items, table cells, …). */
declare const STRUCTURAL_ELEMENTS: Set<string>;
/** The helper a marker opens (`unless` for `#unless …`), or null. */
declare const startName: (node: Node) => string | null;
/** The helper a marker closes (`unless` for `/unless`), or null. */
declare const endName: (node: Node) => string | null;
declare const isElse: (node: Node) => boolean;
/** Stored HTML (marker tags) → editor HTML (structural wrappers). */
export declare const parseStructuralTags: (html: string | undefined) => string | undefined;
/** Editor HTML (structural wrappers) → stored HTML (marker tags). */
export declare const serializeStructuralTags: (html: string) => string;
export { BLOCK_TAG, ELSE_INLINE_TAG, ELSE_TAG, INLINE_TAG, isElse as isElseMarker, LIST_TAG, endName as markerCloses, startName as markerOpens, STRUCTURAL_ELEMENTS, };
