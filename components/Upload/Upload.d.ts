import { Attachment } from '../FileList/FileList.tsx';
import { DropZoneProps } from './DropZone.tsx';
import { FileInputProps } from './FileInput.tsx';
import { TFunction } from 'i18next';
declare enum RejectReason {
    FILE_TYPE = "fileType",
    FILE_SIZE = "fileSize",
    FILE_DIMENSIONS = "fileDimensions"
}
export declare const validateFile: (file: File, acceptedFileTypes?: readonly string[], fileSizeLimit?: number, fileWidthLimit?: number, fileHeightLimit?: number, t?: TFunction) => Promise<{
    reason: RejectReason | null;
    error?: string;
}>;
export interface ClassNameObject {
    base?: string;
    fileList?: string;
}
type FileAddResult = Omit<Attachment, "loading"> | void;
export interface CommonUploadProps {
    /** error message to be displayed */
    errorMessage?: string;
    /** Label for the file input/dropzone */
    label?: string;
    /** Description for the input/dropzone */
    description?: string;
    /** CSS classname for the component */
    className?: string | ClassNameObject;
    /** Maximum file size in bytes */
    fileSizeLimit?: number;
    /**
     * Callback that is triggered when a new file is added.\
     * The parameter is a File object instead of an Attachment.\
     * If this callback returns an Attachment, it will be added to the list of files. Otherwise, the default Attachment transformation will be applied.
     */
    onFileAdd?: (file: File, attachmentId?: string) => FileAddResult | Promise<FileAddResult>;
    /**
     * Callback that is triggered when a file is rejected due to file type, size, or dimension constraints.\
     * The RejectReason enum is exported through this component: `Upload.RejectReason`.
     */
    onFileReject?: (file: File, reason: RejectReason) => void;
    /** Should files with unaccepted file types, files over the size limit, or files exceeding dimension limits be shown with an error state?
     *  By default these files are simply not added to the file list.
     */
    displayDisallowedFiles?: boolean;
    /** Maximum image width in pixels (only applies to image files) */
    fileWidthLimit?: number;
    /** Maximum image height in pixels (only applies to image files) */
    fileHeightLimit?: number;
}
interface FileInputUploadProps extends CommonUploadProps, Pick<FileInputProps, "file" | "onFileSelectionChange" | "acceptedFileTypes" | "hiddenInput" | "customTrigger"> {
    /** optionally render DropZone instead of FileInput */
    isDropZone?: false;
}
interface DropZoneUploadProps extends CommonUploadProps, Pick<DropZoneProps, "files" | "initialFiles" | "onFileSelectionChange" | "actionButtons" | "acceptedFileTypes" | "onFileAddError" | "contrastMode" | "allowsMultiple" | "errorAsTooltip"> {
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
