import { ExcludeNull } from '../../types';
import { VariantProps } from 'class-variance-authority';
import { CSSProperties } from '../../../node_modules/react';
declare const loaderVariants: (props?: ({
    variant?: "primary" | "secondary" | "delete" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface LoaderProps extends ExcludeNull<VariantProps<typeof loaderVariants>> {
    /** Size of the component in pixels */
    size?: number;
    /** Width of the animated line in pixels */
    strokeWidth?: number;
    /** Additional styles for the component */
    style?: CSSProperties;
    /** Additional class names for the component */
    className?: string;
}
/** Component for expressing an unspecified wait time of a process  */
declare const Loader: import('../../../node_modules/react').ForwardRefExoticComponent<LoaderProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export { Loader };
