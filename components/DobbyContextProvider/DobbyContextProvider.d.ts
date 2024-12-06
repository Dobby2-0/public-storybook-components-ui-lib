import { DobbyContextValue } from '../../types';
import { PropsWithChildren } from '../../../node_modules/react';
/**
 * Wrapper component that provides a unified context to its children
 */
declare const DobbyContextProvider: {
    ({ getContainer, breakpoints, navigate, children, }: PropsWithChildren<Partial<DobbyContextValue>>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { DobbyContextProvider };
