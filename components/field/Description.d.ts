import { HTMLAttributes, Ref } from '../../../node_modules/react';
interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
    ref?: Ref<HTMLParagraphElement>;
}
declare const Description: {
    ({ className, ref, ...props }: DescriptionProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { Description };
