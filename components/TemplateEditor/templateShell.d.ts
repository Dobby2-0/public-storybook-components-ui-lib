interface TemplateShell {
    /** Body markup with the content of every editable region removed. */
    html: string;
    /** The template's own css (all `<style>` blocks), joined. */
    css: string;
}
/**
 * Prepares a template for display: removes the content of the editable regions
 * (the editors are mounted there instead), collects the css, strips scripts and
 * inline event handlers, removes handlebars block tokens, and keeps control-flow tag
 * nodes between table rows inside the table.
 */
declare const buildTemplateShell: (template: string) => TemplateShell;
/**
 * Scopes template css to a wrapper class using css nesting, so it cannot leak
 * into the surrounding application. `html` and `body` selectors target the wrapper.
 * `@font-face` rules are hoisted because they cannot be nested; `@import`, `@charset`
 * and `@page` are dropped.
 */
declare const scopeTemplateCss: (css: string, scopeClass: string) => string;
export { buildTemplateShell, scopeTemplateCss };
export type { TemplateShell };
