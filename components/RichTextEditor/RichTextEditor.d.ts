import { EditorToolbarOptions } from './EditorToolbar.tsx';
interface RichTextEditorProps {
    /** The value of the editor */
    value?: string;
    /** Handler called when the value changes */
    onChange?: (value: string) => void;
    /** The className of the editor */
    className?: string;
    /** Whether the editor and toolbar should be disabled */
    disabled?: boolean;
    /** configuration object for setting the available toolbar options */
    toolbarOptions?: EditorToolbarOptions;
}
/**
 * RichTextEditor component based on `@tiptap/react`.
 */
declare const RichTextEditor: ({ value, onChange, className, disabled, toolbarOptions, }: RichTextEditorProps) => import("react/jsx-runtime").JSX.Element | null;
export { RichTextEditor };
