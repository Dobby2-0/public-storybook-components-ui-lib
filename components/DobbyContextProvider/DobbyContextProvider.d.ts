import { DobbyContextValue } from '../../types';
import { UNSAFE_PortalProvider as PortalProvider } from '@react-aria/overlays';
import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
interface DobbyContextProviderProps extends Partial<DobbyContextValue> {
    suspenseFallback?: ReactNode;
}
/**
 * Wrapper component that provides a unified context to its children
 */
declare const DobbyContextProvider: {
    ({ getContainer, navigate, i18nextInstance, maxVisibleToasts, suspenseFallback, children, }: PropsWithChildren<DobbyContextProviderProps>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { DobbyContextProvider, PortalProvider };
