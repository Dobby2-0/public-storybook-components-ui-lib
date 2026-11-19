import { default as sanitizeHtml } from 'sanitize-html';
/**
 * Sanitize HTML string to prevent XSS.
 */
declare const sanitize: (html?: string, options?: sanitizeHtml.IOptions) => string;
/**
 * Sanitize HTML string and return plain text only.
 * Use when you want to strip tags and prevent XSS.
 */
declare const sanitizeHtmlToPlainText: (html?: string, options?: sanitizeHtml.IOptions) => string;
/**
 * Escape plain text so it survives being treated as HTML.
 * Use when saving text a user typed manually (e.g. "<abc>") into a field that is
 * read back with `sanitizeHtmlToPlainText`, which would otherwise strip it as a tag.
 * `sanitizeHtmlToPlainText` decodes the entities again, so this round-trips.
 */
declare const escapeHtml: (text?: string) => string;
export { escapeHtml, sanitize, sanitizeHtmlToPlainText };
