import { Extension, Node } from '@tiptap/core';
import { Plugin } from '@tiptap/pm/state';
/**
 * Block-level `#if … /if` pair with editable content. Written to HTML as
 * `<structural-block>`; `serializeStructuralTags` turns that back into the two
 * marker tags, so removing the node removes both markers.
 */
declare const StructuralBlockNode: Node<any, any>;
/** Same as StructuralBlockNode, but wraps list items and lives inside a list. */
declare const StructuralListBlockNode: Node<any, any>;
/**
 * Inline pairs are drawn as full-width frames, which leaves two problems:
 *
 * 1. ProseMirror only adds its "separator + br" helper to textblocks, so a
 *    pair whose content is empty or ends with a tag has no place for the
 *    browser to draw a caret. The same helper is added to the end of that content.
 * 2. The browser cannot draw a caret directly before or after a full-width frame.
 *    When the cursor sits there, ProseMirror's own gap cursor element is drawn at
 *    that position (the same one block-level frames get) and the native caret is
 *    hidden. A real gap cursor selection is not possible here: it is only valid
 *    between blocks, not inside a paragraph.
 *
 * None of this is part of the content: only the editor draws it.
 */
declare const createInlineCaretPlugin: () => Plugin<any>;
/**
 * The `else` between the two branches of a pair, drawn as a divider inside
 * the frame. Written to HTML as `<structural-else>`, which `serializeStructuralTags`
 * turns back into the plain `else` marker.
 */
declare const StructuralElseNode: Node<any, any>;
/** Same as StructuralElseNode, for the `else` inside an inline pair. */
declare const StructuralElseInlineNode: Node<any, any>;
/**
 * Inline `#if … /if` pair around a run of text and tags inside one paragraph.
 * Written to HTML as `<structural-inline>`, which `serializeStructuralTags`
 * unwraps again, so the stored HTML has no extra element or line break.
 */
declare const StructuralInlineNode: Node<any, any>;
/**
 * Users may edit or empty the content of a pair, but not delete the
 * pair itself. Rejects any edit that leaves fewer pairs behind.
 * Loading content (`setContent`) and undo/redo are not affected.
 */
declare const createProtectStructuralTagsPlugin: () => Plugin<any>;
declare const ProtectStructuralTags: Extension<any, any>;
export { createInlineCaretPlugin, createProtectStructuralTagsPlugin, ProtectStructuralTags, StructuralBlockNode, StructuralElseInlineNode, StructuralElseNode, StructuralInlineNode, StructuralListBlockNode, };
