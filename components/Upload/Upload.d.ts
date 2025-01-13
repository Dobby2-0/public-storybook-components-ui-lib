import { Attachment, FileListProps } from '../FileList/FileList.tsx';
import { DropZoneProps as AriaDropZoneProps, FileTriggerProps } from 'react-aria-components';
interface DropZoneProps extends Omit<AriaDropZoneProps, "onDrop" | "className">, CommonUploadProps, Pick<FileTriggerProps, "acceptedFileTypes">, Pick<FileListProps, "actionButtons"> {
    onFilesChange?: (files: Attachment[]) => void;
    value?: Attachment[];
}
interface CommonUploadProps {
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
    onFileAdd?: (file: File) => Attachment | void | Promise<Attachment | void>;
}
interface UploadBaseProps<T> extends CommonUploadProps {
    /**
     * current value (controlled)
     *
     * A utility function `fileToAttachment` is provided by this library to convert a `File` or an array of `File` to the required format.
     */
    value?: T;
    /** optionally render DropZone instead of FileInput */
    isDropZone?: boolean;
    /** error message to be displayed */
    errorMessage?: string;
    /** callback to handle file selection */
    onFilesChange?: (file: T) => void;
}
interface FileInputUploadProps extends UploadBaseProps<Attachment> {
    isDropZone?: false;
}
interface DropZoneUploadProps extends UploadBaseProps<Attachment[]>, Pick<FileTriggerProps, "acceptedFileTypes">, Pick<DropZoneProps, "actionButtons"> {
    isDropZone: true;
}
/**
 *  Upload component available as single file input or file dropzone
 *
 *  based on `react-aria-components`
 */
declare const Upload: ({ errorMessage, ...props }: FileInputUploadProps | DropZoneUploadProps) => import("react/jsx-runtime").JSX.Element;
export { Upload };
