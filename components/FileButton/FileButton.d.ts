import { DobbyFile } from '../../types';
interface FileButtonProps {
    className?: string;
    /** The file to be shown */
    file: DobbyFile;
    /** Callback function when the button is pressed */
    onPress?: (file: DobbyFile, isUploaded?: boolean) => void | Promise<void>;
    /** Result from polling to check file upload status */
    pollingResult?: DobbyFile;
    /** Function to start polling for file upload status */
    startPolling?: (interval: number) => void;
    /** Function to stop polling for file upload status */
    stopPolling?: () => void;
    /** Should the fileName be hidden */
    hideName?: boolean;
    /** should the tooltip for the fileName be disabled */
    disableTooltip?: boolean;
}
/**
 * FileButton component for displaying the file type and/or name
 * Can handle polling for file upload status if the file is not yet uploaded
 */
declare const FileButton: ({ file, onPress, pollingResult, startPolling, stopPolling, className, hideName, disableTooltip, }: FileButtonProps) => import("react/jsx-runtime").JSX.Element;
export { FileButton };
