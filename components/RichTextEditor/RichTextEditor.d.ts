import { RichTextEditorBaseProps } from './RichTextEditorBase.tsx';
interface RichTextEditorLocalStorageKey {
    id: string;
    entityType: string;
    entityId: string;
}
interface RichTextEditorHandle {
    /** Cancel path: removes the draft from localStorage and resets the editor to the last saved `value`. */
    discardDraft: () => void;
}
declare const RichTextEditor: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<RichTextEditorBaseProps, "fullscreen" | "onToggleFullscreen"> & {
    /** When provided, draft content is persisted to localStorage under `entityType/entityId/lastModified/rteId` */
    localStorageKey?: RichTextEditorLocalStorageKey;
    /** When true, draft content is persisted to localStorage. Requires `localStorageKey` to be set. */
    saveToDraft?: boolean;
    /** Timestamp of the last server-side save. A localStorage draft is only used when its timestamp is strictly newer than this value. */
    lastModifiedAt?: Date | string;
} & import('../../../node_modules/react').RefAttributes<RichTextEditorHandle>>;
export type { Tag } from './TagSelector.tsx';
export { RichTextEditor };
export type { RichTextEditorHandle, RichTextEditorLocalStorageKey };
