import { ComponentPropsWithoutRef, Ref } from '../../../node_modules/react';
import * as LabelPrimitive from "@radix-ui/react-label";
interface LabelProps extends ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
    ref?: Ref<HTMLLabelElement>;
}
declare const Label: {
    ({ className, ref, ...props }: LabelProps): import("react/jsx-runtime").JSX.Element;
    displayName: string | undefined;
};
export { Label };
