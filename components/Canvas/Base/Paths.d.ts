import { CanvasPath, Point } from '../types';
interface PathProps {
    id: string;
    paths: CanvasPath[];
}
interface SvgPathProps {
    paths: Point[];
    id: string;
    strokeWidth: number;
    strokeColor: string;
    command?: (point: Point, i: number, a: Point[]) => string;
}
/**
 * Generate SVG Path tag from the given points
 */
declare const SvgPath: ({ paths, id, strokeWidth, strokeColor, command, }: SvgPathProps) => import("react/jsx-runtime").JSX.Element;
declare const Paths: ({ id, paths }: PathProps) => import("react/jsx-runtime").JSX.Element;
export { Paths, SvgPath };
export type { SvgPathProps };
