interface TemplateRegion {
    /** Value of the `data-editable` attribute (or `region-<index>` when it has no value). */
    id: string;
    /** Inner HTML of the editable element, exactly as it appears in the template. */
    html: string;
    /** Offset in the template where the inner HTML starts. */
    start: number;
    /** Offset in the template where the inner HTML ends (start of the closing tag). */
    end: number;
}
interface Tag {
    /** Offset of the `<`. */
    index: number;
    /** Offset right after the `>`. */
    end: number;
    closing: boolean;
    name: string;
    /** Everything between the tag name and the `>`. */
    attrs: string;
    selfClosing: boolean;
}
/**
 * Finds the next start or end tag at or after `from`, skipping comments. Returns
 * null at the end of the template. Like a browser, an unclosed comment or quote
 * swallows the rest of the template, which keeps the scan linear.
 */
declare const nextTag: (template: string, from: number) => Tag | null;
/**
 * Finds every element carrying a `data-editable` attribute in a template string.
 *
 * The template is scanned as text, not parsed into a DOM, so everything outside
 * the regions (including Handlebars tokens in places where an HTML parser would
 * move them, such as between table rows) is left untouched. Nested editable
 * regions are not supported: elements inside a region are never reported.
 */
declare const parseTemplateRegions: (template: string) => TemplateRegion[];
/**
 * Returns the template with the content of the given regions replaced.
 * Everything outside the replaced regions stays byte-for-byte identical.
 * Region ids without a matching `data-editable` element are ignored.
 */
declare const applyTemplateRegions: (template: string, values: Record<string, string>) => string;
export { applyTemplateRegions, nextTag, parseTemplateRegions };
export type { Tag, TemplateRegion };
