import { ReactElement, ReactNode } from '../../../node_modules/react';
interface Attachment {
    /** Unique internal identifier */
    id: string;
    /** Unique key */
    key?: string;
    /** Name of the attachment (including extension) */
    name: string;
    /** Attachment size in bytes */
    size: number;
    /** Attachment location URL */
    url: string;
    /** Attachment MIME type */
    type?: string;
    /** A promise that resolves when the file is done loading */
    loading?: Promise<Attachment | void>;
}
type ActionButtonFunction = (file: Attachment) => void | Promise<void>;
type ActionButton = boolean | ActionButtonFunction;
interface ActionButtons {
    view?: ActionButton;
    download?: ActionButton;
    delete?: ActionButton;
}
type ActionButtonRenderFunction = (file: Attachment) => ReactElement;
interface FileListProps {
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
}
/**
 * Displays a list of files with optional action buttons.
 */
declare const FileList: ({ files, actionButtons, onFilesChange, onFileLoadingError, }: FileListProps) => import("react/jsx-runtime").JSX.Element;
type FileToAttachmentResult<T> = T extends File ? Attachment : Attachment[];
declare const fileToAttachment: <T extends File | File[]>(file: T) => FileToAttachmentResult<T>;
export { FileList, fileToAttachment };
export type { Attachment, FileListProps };
