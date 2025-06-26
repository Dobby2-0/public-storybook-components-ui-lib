import { TagItem } from './TagMenu.tsx';
import { Editor } from '@tiptap/react';
interface EditorToolbarOptions {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    fill?: boolean;
    color?: boolean;
    bulletList?: boolean;
    orderedList?: boolean;
    table?: boolean;
    tagMenu?: TagItem[];
}
interface EditorToolbarProps {
    editor: Editor;
    options?: EditorToolbarOptions;
    disabled?: boolean;
}
declare const EditorToolbar: ({ editor, options, disabled }: EditorToolbarProps) => import("react/jsx-runtime").JSX.Element;
export { EditorToolbar };
export type { EditorToolbarOptions };
