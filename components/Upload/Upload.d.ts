import { Attachment, FileListProps } from '../FileList/FileList.tsx';
import { ReactNode } from '../../../node_modules/react';
import { DropZoneProps as AriaDropZoneProps, FileTriggerProps } from 'react-aria-components';
declare enum RejectReason {
    FILE_TYPE = "fileType",
    FILE_SIZE = "fileSize"
}
interface FileInputProps extends CommonUploadProps, Pick<FileTriggerProps, "acceptedFileTypes"> {
    /**
     * current value (controlled)
     *
     * A utility function `fileToAttachment` is provided by this library to convert a `File` or an array of `File` to the required format.
     */
    file?: Attachment;
    /** callback to handle file selection */
    onFileSelectionChange?: (file: Attachment) => void;
}
interface DropZoneProps extends Omit<AriaDropZoneProps, "onDrop" | "className">, CommonUploadProps, Pick<FileTriggerProps, "acceptedFileTypes">, Pick<FileListProps, "actionButtons"> {
    /**
     * current value (controlled)
     *
     * A utility function `fileToAttachment` is provided by this library to convert a `File` or an array of `File` to the required format.
     */
    files?: Attachment[];
    /** callback to handle file selection */
    onFileSelectionChange?: (files: Attachment[]) => void;
    /** Callback that is triggered when the `onFileAdd` callback rejects with an error */
    onFileAddError?: (file: Attachment, error?: string) => ReactNode | void;
}
type FileAddResult = Omit<Attachment, "loading"> | void;
interface CommonUploadProps {
    /** error message to be displayed */
    errorMessage?: string;
    /** Label for the file input/dropzone */
    label?: string;
    /** Description for the input/dropzone */
    description?: string;
    /** CSS classname for the component */
    className?: string;
    /** Maximum file size in bytes */
    fileSizeLimit?: number;
    /**
     * Callback that is triggered when a new file is added.\
     * The parameter is a File object instead of an Attachment.\
     * If this callback returns an Attachment, it will be added to the list of files. Otherwise, the default Attachment transformation will be applied.
     */
    onFileAdd?: (file: File) => FileAddResult | Promise<FileAddResult>;
    /**
     * Callback that is triggered when a file is rejected due to file type or size constraints.\
     * The RejectReason enum is exported through this component: `Upload.RejectReason`.
     */
    onFileReject?: (file: File, reason: RejectReason) => void;
}
interface FileInputUploadProps extends CommonUploadProps, Pick<FileInputProps, "file" | "onFileSelectionChange" | "acceptedFileTypes"> {
    /** optionally render DropZone instead of FileInput */
    isDropZone?: false;
}
interface DropZoneUploadProps extends CommonUploadProps, Pick<DropZoneProps, "files" | "onFileSelectionChange" | "actionButtons" | "acceptedFileTypes" | "onFileAddError"> {
    /** optionally render DropZone instead of FileInput */
    isDropZone: true;
}
/**
 *  Upload component available as single file input or file dropzone
 *
 *  based on `react-aria-components`
 */
declare const Upload: {
    ({ errorMessage, ...props }: FileInputUploadProps | DropZoneUploadProps): import("react/jsx-runtime").JSX.Element;
    RejectReason: typeof RejectReason;
};
export { Upload };
