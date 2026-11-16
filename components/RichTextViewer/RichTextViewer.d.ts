export interface RichTextViewerProps {
    value: string;
    className?: string;
    contentStyle?: string;
    /**
     * Show a template as it reads when all data is available: the markers of
     * `#if … /if`, `#unless … /unless`, `#each … /each` and `#with … /with` are
     * removed and their content is shown once, and everything after an `else` is left
     * out. Without it the markers are shown as tags.
     *
     * @Default false
     */
    structuralTags?: boolean;
}
declare const RichTextViewer: ({ value, className, contentStyle, structuralTags, }: RichTextViewerProps) => import("react/jsx-runtime").JSX.Element;
export { RichTextViewer };
