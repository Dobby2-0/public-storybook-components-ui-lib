import { CSSProperties, Ref, SVGAttributes } from '../../../../node_modules/react';
/**
 * Image type to export the canvas as.
 */
export type ExportImageType = "jpeg" | "png";
/**
 * Options for exporting the canvas as an image.
 */
export interface ExportImageOptions {
    /**
     * Width of the exported image.
     */
    readonly width?: number;
    /**
     * Height of the exported image.
     */
    readonly height?: number;
}
/**
 * Point on the canvas.
 *
 * @remarks
 * The origin (0, 0) is the top-left corner of the canvas.
 */
export interface Point {
    /**
     * The x coordinate of the point.
     */
    readonly x: number;
    /**
     * The y coordinate of the point.
     */
    readonly y: number;
}
/**
 * Path to draw on the canvas.
 */
export interface CanvasPath {
    /**
     * The paths to draw. Each path is an array of points.
     */
    readonly paths: Point[];
    /**
     * The stroke width of the path.
     */
    readonly strokeWidth: number;
    /**
     * Color of the stroke.
     */
    readonly strokeColor: string;
    /**
     * Whether the path is a draw mode or erase mode.
     */
    readonly drawMode: boolean;
    /**
     * The timestamp when the path was created. This is used to determine the order of the paths.
     *
     * @remarks
     * This will only be set when the withTimestamp option is set to true.
     */
    readonly startTimestamp?: number;
    /**
     * The timestamp when the path was last updated. This is used to determine the order of the paths.
     *
     * @remarks
     * This will only be set when the withTimestamp option is set to true.
     */
    readonly endTimestamp?: number;
}
/**
 * The pointer type to allow drawing with.
 *
 */
export type AllowOnlyPointerType = "all" | "pen" | "mouse" | "touch";
/**
 * Canvas component props.
 */
export interface CanvasProps {
    /** Reference */
    ref?: Ref<CanvasRef>;
    /**
     * Array of paths to be drawn on the canvas
     */
    paths: CanvasPath[];
    /**
     * Whether the user is currently drawing
     */
    isDrawing: boolean;
    /**
     * Callback to be called when the user starts drawing.
     * This is triggered when the user presses the mouse button or touches the canvas
     * with a pen or a touch screen.
     *
     * @param point - The point where the user started drawing
     * @param isEraser - Whether the user is using the eraser
     * @returns void
     */
    onPointerDown: (point: Point, isEraser?: boolean) => void;
    /**
     * Callback to be called when the user is drawing.
     * This is triggered when the user moves the mouse or pen or finger on the canvas.
     *
     * @param point - The point where the user is currently drawing
     * @param isEraser - Whether the user is using the eraser
     * @returns void
     */
    onPointerMove: (point: Point) => void;
    /**
     * Callback to be called when the user stops drawing.
     * This is triggered when the user releases the mouse button or lifts the pen or finger from the canvas.
     * @returns void
     */
    onPointerUp: () => void;
    /**
     * The pointer type to allow drawing with.
     * @defaultValue all
     */
    allowOnlyPointerType: AllowOnlyPointerType;
    /**
     * Background image to be displayed on the canvas.
     * This can be a URL or a base64 encoded image.
     * @defaultValue No background image is displayed
     */
    backgroundImage: string;
    /**
     * Background color of the canvas.
     * @defaultValue white
     */
    canvasColor: string;
    /**
     * Class name to be applied to the canvas.
     * @defaultValue react-sketch-canvas
     */
    className?: string;
    /**
     * Whether the canvas should be exported with the background image.
     * @defaultValue false
     */
    exportWithBackgroundImage: boolean;
    /**
     * Height of the canvas.
     * @defaultValue 100%
     */
    height: string;
    /**
     * ID of the canvas.
     * @defaultValue the ID is `react-sketch-canvas`
     */
    id?: string;
    /**
     * Set aspect ratio of the background image. For possible values check MDN docs
     * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
     */
    preserveBackgroundImageAspectRatio?: SVGAttributes<HTMLImageElement>["preserveAspectRatio"];
    /**
     * Style to be applied to the canvas.
     * @defaultValue No style is applied.
     */
    style: CSSProperties;
    /**
     * Style to be applied to the SVG.
     * @defaultValue No style is applied.
     */
    svgStyle: CSSProperties;
    /**
     * Whether the canvas should be exported with the viewBox.
     * @defaultValue false
     */
    withViewBox?: boolean;
    /**
     * Width of the canvas.
     * @defaultValue 100%
     */
    width: string;
    /**
     * Whether the canvas is read-only. This disables drawing on the canvas.
     * @defaultValue false
     */
    readOnly?: boolean;
}
/**
 * Canvas component ref
 */
export interface CanvasRef {
    /**
     * Export the canvas as an image.
     * This returns a promise that resolves to a data URL of the image.
     *
     * @param imageType - The type of image to be exported.
     * @param options - Options to be applied to the exported image.
     * @returns A promise that resolves to a data URL of the image.
     */
    exportImage: (imageType: ExportImageType, options?: ExportImageOptions) => Promise<string>;
    /**
     * Export the canvas as an SVG.
     * This returns a promise that resolves to a string of the SVG.
     *
     * @returns A promise that resolves to a string of the SVG.
     */
    exportSvg: () => Promise<string>;
}
/**
 * React Sketch Canvas component props.
 *
 * @remarks
 * This is an extension of the CanvasProps with additional props specific to the React Sketch Canvas component.
 */
export interface ReactSketchCanvasProps extends Partial<Omit<CanvasProps, "ref" | "paths" | "isDrawing" | "onPointerDown" | "onPointerMove" | "onPointerUp">> {
    /** Reference */
    ref?: Ref<ReactSketchCanvasRef>;
    /**
     * Width of the eraser.
     * @remarks This is only applicable when the eraseMode is set to true.
     *
     * @defaultValue 8
     */
    eraserWidth?: number;
    /**
     * Optional callback that is called when the user starts drawing.
     * This is triggered when the user when user creates a stroke on the canvas
     * with a pen or an eraser.
     *
     * @param updatedPaths - The updated paths drawn on the canvas
     */
    onChange?: (updatedPaths: CanvasPath[]) => void;
    /**
     * Optional callback that is called when the user creates a stroke on the canvas
     * with a pen or an eraser.
     *
     * @param path - The path drawn on the canvas
     * @param isEraser - Whether the user is using the eraser
     */
    onStroke?: (path: CanvasPath, isEraser: boolean) => void;
    /**
     * Color of the stroke.
     *
     * @remarks This is only applicable when the eraseMode is set to false.
     *
     * @defaultValue "red"
     */
    strokeColor?: string;
    /**
     * Width of the stroke.
     *
     * @remarks This is only applicable when the eraseMode is set to false.
     *
     * @defaultValue 4
     */
    strokeWidth?: number;
    /**
     * Whether to record the timestamp of the drawing. This will be stored in
     * the CanvasPath object in milliseconds. This can be used to calculate the time taken to draw
     * on the canvas.
     *
     * @remarks
     * use getSketchingTime method to get the time taken to draw on the canvas.
     *
     * @defaultValue false
     */
    withTimestamp?: boolean;
}
/**
 * React Sketch Canvas component ref.
 *
 * @remarks
 * This is an extension of the CanvasRef with additional methods specific to the React Sketch Canvas component.
 */
export interface ReactSketchCanvasRef extends CanvasRef {
    /**
     * Set the drawing mode to either draw or erase
     *
     * @param erase - Whether to set the mode to erase
     */
    eraseMode: (erase: boolean) => void;
    /**
     * Clear the canvas. This will remove all the paths drawn on the canvas.
     * But it will not clear the Undo/Redo stack.
     *
     * @remarks To clear the Undo/Redo stack, use the resetCanvas method.
     */
    clearCanvas: () => void;
    /**
     * Undo the last drawn path
     */
    undo: () => void;
    /**
     * Redo the last undone path
     */
    redo: () => void;
    /**
     * Export the paths draw on the canvas as a JSON object with list of CanvasPaths
     *
     * @returns Promise<CanvasPath[]> - The paths drawn on the canvas
     */
    exportPaths: () => Promise<CanvasPath[]>;
    /**
     * Import the paths to be drawn on the canvas.
     *
     * @remarks
     * This will remove all the existing paths on the canvas and replace them with the new paths.
     *
     * @param paths - The paths to be drawn on the canvas
     */
    loadPaths: (paths: CanvasPath[]) => void;
    /**
     * Get the current drawing time in milliseconds. This will only work if withTimestamp prop is set to true.
     *
     * @remarks
     * This does not include the idle time when the user is not drawing. It only includes the time when the user is drawing on the canvas.
     */
    getSketchingTime: () => Promise<number>;
    /**
     * Reset the canvas. This will remove all the paths drawn on the canvas and clear the Undo/Redo stack.
     *
     * @remarks
     * If you only want to clear the paths drawn on the canvas, use the clearCanvas method.
     */
    resetCanvas: () => void;
}
