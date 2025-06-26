import { MenuItem } from '../Menu/Menu.tsx';
import { Editor } from '@tiptap/react';
type tagTextValue = `{{${string}}}`;
interface TagItem extends Omit<MenuItem, "textValue"> {
    textValue: tagTextValue;
}
interface TagMenuProps {
    editor: Editor;
    items: TagItem[];
    isDisabled?: boolean;
}
declare const TagMenu: ({ editor, items, isDisabled }: TagMenuProps) => import("react/jsx-runtime").JSX.Element;
export { TagMenu };
export type { TagItem };
