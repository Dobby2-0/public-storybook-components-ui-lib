import { MenuItem } from '../Menu/Menu.tsx';
import { Editor } from '@tiptap/react';
interface TagMenuProps {
    editor: Editor;
    items: MenuItem[];
    isDisabled?: boolean;
}
declare const TagMenu: ({ editor, items, isDisabled }: TagMenuProps) => import("react/jsx-runtime").JSX.Element;
export { TagMenu };
