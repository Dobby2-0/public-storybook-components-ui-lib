import { RichTextEditorBaseProps } from '../RichTextEditor/RichTextEditorBase.tsx';
type TemplateEditorProps = Omit<RichTextEditorBaseProps, "value" | "onChange" | "hideToolbar" | "blendContent" | "onEditorReady" | "onEditorFocus" | "fullscreen" | "onToggleFullscreen" | "className"> & {
    /** The full html document. Elements marked with `data-editable` become editable regions. */
    template: string;
    /** Called with the full html document (template + edited regions) whenever a region changes. */
    onChange?: (template: string) => void;
    /** The className of the element wrapping the toolbar and the template */
    className?: string;
    /**
     * Covers everything that is not editable with a gray overlay, so the editable regions
     * stand out
     *
     * @Default true
     */
    dimLocked?: boolean;
};
/**
 * Edits the `data-editable` parts of a full html document.
 *
 * The template is shown inside one framed editor with a single toolbar shared by all
 * editable regions, and can be opened fullscreen. It is a controlled component: feed
 * the `onChange` result back into `template`.
 */
declare const TemplateEditor: (props: TemplateEditorProps) => import("react/jsx-runtime").JSX.Element;
export { TemplateEditor };
export type { TemplateEditorProps };
