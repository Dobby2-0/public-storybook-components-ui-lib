import { Attachment, FileListProps } from './types';
/**
 * Displays a list of files with optional action buttons.
 */
declare const FileList: ({ files, actionButtons, onFilesChange, onFileLoadingError, className, contrastMode, errorAsTooltip, }: FileListProps) => import("react/jsx-runtime").JSX.Element;
type FileToAttachmentResult<T> = T extends File ? Attachment : Attachment[];
declare const fileToAttachment: <T extends File | File[]>(file: T, id?: string) => FileToAttachmentResult<T>;
export { FileList, fileToAttachment };
export type { Attachment, FileListProps };
