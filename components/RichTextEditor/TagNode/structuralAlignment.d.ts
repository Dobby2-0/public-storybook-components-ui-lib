/**
 * A frame around a single element takes over that element's horizontal alignment,
 * so a block that is pushed aside with `margin-left: auto` (right) or
 * `margin: 0 auto` (center) stays there without the frame spanning the whole width.
 */
/** The one element a frame holds, or null (several elements, text, or another frame). */
export declare const getSingleChild: (content: Element) => HTMLElement | null;
/**
 * Which horizontal margins of the element are `auto`. Needs the computed value:
 * `getComputedStyle` only gives the used pixels. Without `computedStyleMap` nothing
 * is auto.
 */
export declare const getAutoMargins: (element: HTMLElement) => {
    left: boolean;
    right: boolean;
};
