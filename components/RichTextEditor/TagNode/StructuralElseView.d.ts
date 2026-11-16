import { NodeViewProps } from '@tiptap/react';
/**
 * The `else` of a pair: a full-width bar between its two branches, styled like
 * the frame's header. The white parts above and below it get rounded corners where
 * they meet the bar (see `struct-else-bar` in rte-structural.css). Block-level, so it
 * sits between the paragraphs or list items of a frame. The label is the tag's label.
 */
declare const StructuralElseView: ({ node, editor, getPos }: NodeViewProps) => import("react/jsx-runtime").JSX.Element;
/** The `else` inside an inline pair: a small bar chip between the branches. */
declare const StructuralElseInlineView: ({ node }: NodeViewProps) => import("react/jsx-runtime").JSX.Element;
export default StructuralElseView;
export { StructuralElseInlineView };
