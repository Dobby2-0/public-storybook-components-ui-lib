import { NodeViewProps } from '@tiptap/react';
/**
 * Frame around an inline `#if … /if` pair, i.e. a run of text and tags inside one
 * paragraph. The frame stays in the line of text, as a chip: the label on the left and
 * the content next to it, inside one border. It only exists in the editor: saving writes
 * the two plain markers back around the content, so the stored HTML and the sent email
 * keep the content on the same line. The content can be emptied, but the frame cannot be
 * removed.
 */
declare const StructuralInlineView: ({ node }: NodeViewProps) => import("react/jsx-runtime").JSX.Element;
export default StructuralInlineView;
