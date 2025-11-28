import { Attachment } from '../FileList/FileList.tsx';
import { CommonUploadProps } from './Upload.tsx';
import { ReactNode } from '../../../node_modules/react';
import { FileTriggerProps } from 'react-aria-components';
interface FileInputProps extends CommonUploadProps, Pick<FileTriggerProps, "acceptedFileTypes"> {
    /**
     * current value (controlled)
     *
     * A utility function `fileToAttachment` is provided by this library to convert a `File` or an array of `File` to the required format.
     */
    file?: Attachment;
    /** callback to handle file selection */
    onFileSelectionChange?: (file: Attachment) => void;
    hiddenInput?: boolean;
    customTrigger?: (isLoading: boolean) => ReactNode;
}
declare const FileInput: ({ file, description, label, className, fileSizeLimit, acceptedFileTypes, onFileAdd, onFileSelectionChange, onFileReject, hiddenInput, customTrigger, displayDisallowedFiles, }: FileInputProps) => import("react/jsx-runtime").JSX.Element;
export { FileInput };
export type { FileInputProps };
