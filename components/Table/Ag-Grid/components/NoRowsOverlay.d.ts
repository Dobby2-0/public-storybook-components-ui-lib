import { EmptyStateContent } from '../types';
import { CustomNoRowsOverlayProps } from 'ag-grid-react';
export type NoRowsOverlayParams = CustomNoRowsOverlayProps & EmptyStateContent;
declare const NoRowsOverlay: ({ icon, title, description, action, }: NoRowsOverlayParams) => import("react/jsx-runtime").JSX.Element;
export { NoRowsOverlay };
