import { Description } from '@dobby2-0/icons';
import { ComponentProps } from '../../../node_modules/react';
interface FileIconProps extends ComponentProps<typeof Description> {
    /** The content type of the file */
    contentType?: string;
    /** The CSS className for the element */
    className?: string;
}
/**
 * FileIcon component to render icons based on file content type.
 */
declare const FileIcon: ({ contentType, className, ...props }: FileIconProps) => import("react/jsx-runtime").JSX.Element | undefined;
export { FileIcon };
