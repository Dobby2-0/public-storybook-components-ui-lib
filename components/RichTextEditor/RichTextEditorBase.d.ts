import { EditorToolbarOptions } from './EditorToolbar.tsx';
interface RichTextEditorBaseProps {
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
    /**
     * Wether the content container should be resizable
     *
     * @Default true
     */
    resizable?: boolean;
    /** Enables paper like page view */
    pageView?: boolean;
    /** Makes the editor read-only */
    readonly?: boolean;
    /** Wether the editor is in fullscreen mode */
    fullscreen?: boolean;
    /** Handler called when toggling fullscreen mode */
    onToggleFullscreen?: () => void;
}
/**
 * RichTextEditor component based on `@tiptap/react`.
 */
declare const RichTextEditorBase: ({ value, onChange, className, disabled, toolbarOptions, resizable, pageView, readonly, fullscreen, onToggleFullscreen, }: RichTextEditorBaseProps) => import("react/jsx-runtime").JSX.Element | undefined;
export default RichTextEditorBase;
export type { RichTextEditorBaseProps };
