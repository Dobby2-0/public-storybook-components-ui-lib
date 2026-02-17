import { TagDataProps } from './TagSelector.tsx';
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
    undoRedo?: boolean;
    tagSelector?: TagDataProps;
    fullscreen?: boolean;
    image?: boolean;
}
interface EditorToolbarProps {
    editor: Editor;
    options?: EditorToolbarOptions;
    disabled?: boolean;
    fullscreen?: boolean;
    onToggleFullscreen?: () => void;
}
declare const EditorToolbar: ({ editor, options, disabled, fullscreen, onToggleFullscreen, }: EditorToolbarProps) => import("react/jsx-runtime").JSX.Element;
export { EditorToolbar };
export type { EditorToolbarOptions };
