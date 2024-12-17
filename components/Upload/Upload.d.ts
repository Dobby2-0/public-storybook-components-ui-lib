interface UploadProps {
    /** current value (controlled) */
    files?: File[];
    /** optionally render DropZone instead of FileInput */
    isDropZone?: boolean;
    /** error message to be displayed */
    errorMessage?: string;
    /** description for the input/dropzone */
    description?: string;
    /** label for the file input/dropzone */
    label?: string;
    /** callback to handle file selection */
    onFilesChange?: (files: File[] | File) => void;
}
/** Upload component */
declare const Upload: ({ errorMessage, isDropZone, ...props }: UploadProps) => import("react/jsx-runtime").JSX.Element;
export { Upload };
