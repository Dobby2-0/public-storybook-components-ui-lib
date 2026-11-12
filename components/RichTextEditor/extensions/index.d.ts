import { Extension, Node } from '@tiptap/core';
import { ParagraphOptions } from '@tiptap/extension-paragraph';
declare const TagNode: Node<any, any>;
/**
 * Block-level variant of TagNode for hidden structural tags
 * that sit between block elements.
 * As a block it round-trips without an auto-generated wrapping `<p>`.
 * Hidden tags inside a `<p>` stay inline (see TagNode).
 */
declare const TagBlockNode: Node<any, any>;
declare const DivNode: Node<any, any>;
declare const SectionNode: Node<any, any>;
declare const ParagraphNode: Node<ParagraphOptions, any>;
declare const BrNode: Node<any, any>;
declare const NbspNode: Node<any, any>;
declare const DisableImagePaste: Extension<any, any>;
declare const PasteWithoutFormatting: Extension<any, any>;
export * from './table';
export { BrNode, DisableImagePaste, DivNode, NbspNode, ParagraphNode, PasteWithoutFormatting, SectionNode, TagBlockNode, TagNode, };
