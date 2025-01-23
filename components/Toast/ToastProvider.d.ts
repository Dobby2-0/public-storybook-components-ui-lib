import { Alert } from '../../main';
import { ToastProps } from '@radix-ui/react-toast';
import { ComponentProps, PropsWithChildren, ReactNode } from '../../../node_modules/react';
export type ToasterProps = ToastProps & ComponentProps<typeof Alert> & {
    duration?: number;
};
export type Toast = ToasterProps & {
    id: string;
    dismiss: () => void;
    description?: string;
    action?: ReactNode;
};
interface ToastProviderProps extends PropsWithChildren {
    maxVisibleToasts?: number;
}
declare const ToastProvider: ({ children, maxVisibleToasts, }: ToastProviderProps) => import("react/jsx-runtime").JSX.Element;
declare const useToast: () => {
    toasts: Toast[];
    toast: (props: ToasterProps) => void;
    dismiss: (id: string) => void;
};
export { ToastProvider, useToast };
