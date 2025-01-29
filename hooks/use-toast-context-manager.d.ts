import { Toast, ToasterProps } from '../types';
declare const useToastContextManager: () => {
    toasts: Toast[];
    toast: (props: ToasterProps) => () => void;
};
export { useToastContextManager };
