interface Attachment {
    id: string;
    name: string;
    size: number;
    url: string;
    type?: string;
    /** A promise that resolves when the file is done loading */
    loading?: Promise<Attachment | void>;
}
type ActionButton = boolean | ((file: Attachment) => void | Promise<void>);
interface ActionButtons {
    delete?: ActionButton;
}
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
     * */
    actionButtons?: boolean | ActionButtons;
    /** Callback that triggers when the list of files changes */
    onFilesChange?: (files: Attachment[]) => void;
}
/**
 * Displays a list of files with optional action buttons.
 */
declare const FileList: ({ files, actionButtons, onFilesChange, }: FileListProps) => import("react/jsx-runtime").JSX.Element;
type FileToAttachmentResult<T> = T extends File ? Attachment : Attachment[];
declare const fileToAttachment: <T extends File | File[]>(file: T) => FileToAttachmentResult<T>;
export { FileList, fileToAttachment };
export type { Attachment, FileListProps };
