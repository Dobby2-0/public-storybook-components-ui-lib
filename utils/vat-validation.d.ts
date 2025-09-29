/**
 * Validates a VAT number.
 * Currently, only Belgian VAT numbers (starting with 'BE') are validated.
 * Any other country code is considered valid by default.
 */
export declare const isValidVAT: (vat: string) => boolean;
