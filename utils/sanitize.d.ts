/**
 * Sanitize HTML string and return safe HTML string.
 * Use when you intend to inject sanitized HTML into the DOM.
 */
export declare function sanitizeHtml(html: string): string;
/**
 * Sanitize HTML string and return plain text only.
 * Use when you want to strip tags and prevent XSS.
 */
export declare function sanitizeHtmlToPlainText(html: string): string;
