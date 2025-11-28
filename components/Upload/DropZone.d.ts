import { Attachment, FileListProps } from '../FileList/FileList.tsx';
import { CommonUploadProps } from './Upload.tsx';
import { ReactNode } from '../../../node_modules/react';
import { DropZoneProps as AriaDropZoneProps, FileTriggerProps } from 'react-aria-components';
interface DropZoneProps extends Omit<AriaDropZoneProps, "onDrop" | "className">, CommonUploadProps, Pick<FileTriggerProps, "acceptedFileTypes">, Pick<FileListProps, "actionButtons" | "contrastMode" | "errorAsTooltip"> {
    allowsMultiple?: boolean;
    /**
     * current value (controlled)
     *
     * A utility function `fileToAttachment` is provided by this library to convert a `File` or an array of `File` to the required format.
     */
    files?: Attachment[];
    /**
     * initial files (uncontrolled)
     */
    initialFiles?: Attachment[];
    /** callback to handle file selection */
    onFileSelectionChange?: (files: Attachment[]) => void;
    /** Callback that is triggered when the `onFileAdd` callback rejects with an error */
    onFileAddError?: (file: Attachment, error?: string) => ReactNode | void;
}
declare const DropZone: ({ files, initialFiles, className, description, label, fileSizeLimit, acceptedFileTypes, actionButtons, onFileAdd, onFileSelectionChange, onFileReject, onFileAddError, allowsMultiple, contrastMode, displayDisallowedFiles, errorAsTooltip, ...props }: DropZoneProps) => import("react/jsx-runtime").JSX.Element;
export { DropZone };
export type { DropZoneProps };
