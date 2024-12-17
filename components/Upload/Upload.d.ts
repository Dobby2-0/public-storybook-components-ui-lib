interface CommonUploadProps {
    /** label for the file input/dropzone */
    label?: string;
    /** description for the input/dropzone */
    description?: string;
    /** CSS classname for the component */
    className?: string;
}
interface UploadProps extends CommonUploadProps {
    /** current value (controlled) */
    files?: File[];
    /** optionally render DropZone instead of FileInput */
    isDropZone?: boolean;
    /** error message to be displayed */
    errorMessage?: string;
    /** callback to handle file selection */
    onFilesChange?: (files: File[] | File) => void;
}
/**
 *  Upload component available as single file input or file dropzone
 *
 *  based on `react-aria-components`
 */
declare const Upload: ({ errorMessage, isDropZone, ...props }: UploadProps) => import("react/jsx-runtime").JSX.Element;
export { Upload };
