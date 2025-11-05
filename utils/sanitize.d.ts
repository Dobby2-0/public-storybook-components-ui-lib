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
export { sanitize, sanitizeHtmlToPlainText };
