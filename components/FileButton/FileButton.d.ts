import { UseFileDownloadOptions } from '../../hooks';
import { DobbyFile } from '../../types';
interface ClassNameObject {
    wrapper?: string;
    button?: string;
}
interface FileButtonProps extends Partial<UseFileDownloadOptions> {
    className?: string | ClassNameObject;
    /** The file to be shown */
    file: DobbyFile;
    /** Callback function when the button is pressed */
    onPress?: (file: DobbyFile) => void | Promise<void>;
    /** Should the fileName be hidden */
    hideName?: boolean;
    /** should the tooltip for the fileName be disabled */
    disableTooltip?: boolean;
}
/**
 * FileButton component for displaying the file type and/or name
 * Can handle polling for file upload status if the file is not yet uploaded
 */
declare const FileButton: ({ file, onPress, className, hideName, disableTooltip, checkFileStatus, loadFile, timeoutMs, }: FileButtonProps) => import("react/jsx-runtime").JSX.Element;
export { FileButton };
