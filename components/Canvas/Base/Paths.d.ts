import { CanvasPath, Point } from '../types';
interface PathProps {
    id: string;
    paths: CanvasPath[];
}
declare const line: (pointA: Point, pointB: Point) => {
    length: number;
    angle: number;
};
declare const bezierCommand: (point: Point, i: number, a: Point[]) => string;
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
export { bezierCommand, line, Paths, SvgPath };
export type { SvgPathProps };
