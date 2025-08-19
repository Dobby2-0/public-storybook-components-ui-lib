import { HTMLAttributes, Ref } from '../../../node_modules/react';
interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
    ref?: Ref<HTMLParagraphElement>;
}
declare const ErrorMessage: {
    ({ className, ref, ...props }: ErrorMessageProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { ErrorMessage };
