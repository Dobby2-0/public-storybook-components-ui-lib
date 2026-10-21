/**
 * Maximum pixel count (width x height) of a single embedded image we dare to decode in the browser.
 * An 8-bit RGB(A) image needs 3-4 bytes per pixel, and pdf.js' JPEG decoder temporarily needs several
 * times that, so beyond this the worker runs out of memory (RangeError / "paused before potential
 * OOM crash"), which crashes the preview or leaves a blank page.
 */
declare const MAX_IMAGE_PIXELS = 80000000;
declare const MAX_IMAGE_PIXELS_IOS: number;
declare const getMaxImagePixels: () => number;
/**
 * Checks the raw bytes of a PDF for embedded images that are too large to decode.
 *
 * pdf.js can't tell us this in advance: it only warns, or crashes the worker, once it starts decoding.
 * Stream objects (such as images) can never be stored in compressed object streams, so their
 * dictionaries are always plain text in the file and can be read without decoding the image itself.
 */
declare const hasOversizedImages: (data: Uint8Array, maxPixels?: number) => boolean;
export { MAX_IMAGE_PIXELS, MAX_IMAGE_PIXELS_IOS, getMaxImagePixels, hasOversizedImages, };
