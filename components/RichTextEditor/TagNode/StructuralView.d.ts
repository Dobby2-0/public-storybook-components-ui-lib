import { NodeViewProps } from '@tiptap/react';
/**
 * Frame around the content of an `#if … /if` pair. The content stays editable
 * (and can be emptied), but the frame itself cannot be removed: see
 * `createProtectStructuralTagsPlugin`.
 */
declare const StructuralView: ({ node }: NodeViewProps) => import("react/jsx-runtime").JSX.Element;
export default StructuralView;
