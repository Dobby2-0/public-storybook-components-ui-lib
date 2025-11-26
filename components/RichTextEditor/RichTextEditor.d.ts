import { RichTextEditorBaseProps } from './RichTextEditorBase.tsx';
type RichTextEditorProps = Omit<RichTextEditorBaseProps, "fullscreen" | "onToggleFullscreen">;
declare const RichTextEditor: ({ value, onChange, ...props }: RichTextEditorProps) => import("react/jsx-runtime").JSX.Element;
export type { Tag } from './TagSelector.tsx';
export { RichTextEditor };
