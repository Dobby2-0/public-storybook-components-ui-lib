import { DobbyContextValue } from '../../types';
import { PropsWithChildren } from '../../../node_modules/react';
interface DobbyContextProviderProps extends Partial<Omit<DobbyContextValue, "i18nextInstance">>, Required<Pick<DobbyContextValue, "i18nextInstance">> {
}
/**
 * Wrapper component that provides a unified context to its children
 */
declare const DobbyContextProvider: {
    ({ getContainer, breakpoints, navigate, i18nextInstance, children, }: PropsWithChildren<DobbyContextProviderProps>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { DobbyContextProvider };
