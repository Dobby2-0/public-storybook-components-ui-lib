import { ReactSketchCanvasProps, ReactSketchCanvasRef } from './types';
import { Ref } from '../../../node_modules/react';
interface CanvasProps extends ReactSketchCanvasProps {
    ref?: Ref<ReactSketchCanvasRef>;
    /** Label above the input */
    label?: string;
    /** Additional descriptive text shown below the input */
    description?: string;
    /** Optional error message desplayed below the input and description */
    errorMessage?: string;
    /** Add button to reset the canvas */
    enableResetButton?: boolean;
}
/**
 * A simple canvas component using react-sketch-canvas
 *
 * The content can be exported as a base64 encoded PNG using the `exportImage` method on the ref.
 * @example
 * const canvasRef = useRef<CanvasRef>(null);
 *
 * const handleExport = async () => {
 *   const data = await canvasRef.current?.exportImage("png");
 *
 *   // Do something with the base64 encoded PNG data
 * };
 *
 * <Canvas ref={canvasRef} />
 */
declare const Canvas: ({ ref, label, description, errorMessage, enableResetButton, className, ...props }: CanvasProps) => import("react/jsx-runtime").JSX.Element;
export { Canvas };
export type { ReactSketchCanvasRef as CanvasRef };
