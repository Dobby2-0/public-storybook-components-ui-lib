import { DobbyFile } from '../../../types';
import { ReactElement, ReactNode } from '../../../../node_modules/react';
export interface Attachment extends DobbyFile {
    /** Attachment location URL */
    url?: string;
    /** MIME type */
    type?: string;
    /** A promise that resolves when the file is done loading */
    loading?: Promise<Attachment | void>;
    /** An optional error message */
    error?: string;
}
export interface FileEntryActionsProps {
    file: Attachment;
    actionHandlers: ActionHandlers;
    defaultActionHandlers: DefaultActionHandlers;
    onLoadingError?: (error?: string) => void;
    onAttachmentOverride: (file: Attachment) => void;
}
export interface FileEntryProps extends Pick<FileListProps, "onFileLoadingError" | "errorAsTooltip">, Pick<FileEntryActionsProps, "defaultActionHandlers"> {
    file: Attachment;
    actionHandlers: ActionHandlers;
    onAttachmentOverride: (file: Attachment) => void;
    contrastMode?: boolean;
}
export interface FileListProps {
    /**
     * List of files to display.
     *
     * A utility function `fileToAttachment` is provided by this library to convert a `File` or an array of `File` to the required format.
     */
    files?: Attachment[];
    /**
     * Allows configuration of action buttons.
     * <br/><br/>
     * If the value is a boolean, it will show or hide the action buttons with their default behaviour.
     * <br/><br/>
     * If the value is an object, it will allow to configure the behaviour of the individual buttons, either a boolean for default behaviour show/hide, or a function that will be triggered when the corresponding button is pressed.
     * <br/><br/>
     * If the value is a ReactElement, it will replace the default action buttons.
     * */
    actionButtons?: boolean | ActionButtons | ActionButtonRenderFunction;
    /** Callback that triggers when the list of files changes */
    onFilesChange?: (files: Attachment[]) => void;
    /** Callback that triggers when an error occurs while handling file loading */
    onFileLoadingError?: (params: {
        error?: string;
        file: Attachment;
    }) => ReactNode | void;
    className?: string;
    contrastMode?: boolean;
    errorAsTooltip?: boolean;
}
export interface DefaultActionHandlers {
    view: (url: Attachment["url"]) => void;
    download: (url: Attachment["url"], fileName: Attachment["name"], contentType: Attachment["contentType"]) => void;
    delete: (fileId: Attachment["id"]) => void;
}
export type ActionButtonFunction<T = undefined> = T extends undefined ? (file: Attachment) => void | Promise<void> : (file: Attachment, original: T) => void | Promise<void>;
export type ActionButton<T = undefined> = boolean | ActionButtonFunction<T>;
export interface ActionButtons {
    view?: ActionButton<DefaultActionHandlers["view"]>;
    download?: ActionButton<DefaultActionHandlers["download"]>;
    delete?: ActionButton;
}
export type ActionHandlerFunction = (file: Attachment) => void | Promise<void>;
type ActionButtonRenderFunction = (file: Attachment, defaultActionHandlers: DefaultActionHandlers) => ReactElement;
export type ActionHandlers = {
    [key in keyof ActionButtons]: false | ActionHandlerFunction;
} | ActionButtonRenderFunction;
export {};
