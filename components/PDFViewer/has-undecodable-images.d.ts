interface PageWithImages {
    getOperatorList: () => Promise<{
        fnArray: number[];
        argsArray: unknown[];
    }>;
    objs: {
        has: (objId: string) => boolean;
        get: (objId: string) => unknown;
    };
}
/**
 * Checks whether pdf.js failed to decode any image on the given page.
 *
 * pdf.js does not throw when an image can't be decoded (e.g. a huge scan that doesn't fit in memory).
 * It only logs a warning and renders the page without the image. A failed image is stored as `null`
 * in the page's objects, which is what we look for here.
 */
declare const hasUndecodableImages: (page: PageWithImages) => Promise<boolean>;
export { hasUndecodableImages };
export type { PageWithImages };
