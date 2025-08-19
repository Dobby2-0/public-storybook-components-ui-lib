import { Description } from '../field/Description.tsx';
import { ErrorMessage } from '../field/ErrorMessage.tsx';
import { Label } from '../field/Label.tsx';
import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, CSSProperties, ForwardedRef, HTMLAttributes, ReactElement, ReactNode, Ref } from '../../../node_modules/react';
import { ControllerProps, FieldPath, FieldValues, FormProviderProps, UseControllerProps, UseFormHandleSubmit } from 'react-hook-form';
interface FormFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> extends UseControllerProps<TFieldValues, TName> {
    render?: never;
    label?: ReactNode;
    description?: ReactNode;
    children: ReactElement | ControllerProps<TFieldValues, TName>["render"];
}
interface FormFieldWithRenderProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> extends ControllerProps<TFieldValues, TName> {
    label?: never;
    description?: never;
    children?: never;
}
interface FormItemProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>;
}
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: import('react-hook-form').FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
interface FormLabelProps extends ComponentPropsWithoutRef<typeof Label> {
    ref?: Ref<HTMLLabelElement>;
}
interface FormControlProps extends ComponentPropsWithoutRef<typeof Slot> {
    ref?: Ref<HTMLElement>;
}
interface FormDescriptionProps extends ComponentPropsWithoutRef<typeof Description> {
    ref?: Ref<HTMLParagraphElement>;
}
interface FormMessageProps extends ComponentPropsWithoutRef<typeof ErrorMessage> {
    ref?: ForwardedRef<HTMLParagraphElement>;
}
interface FormRef {
    submit: () => Promise<void>;
}
declare const useFormRef: () => import('../../../node_modules/react').RefObject<FormRef | null>;
interface FormProps<TFieldValues extends FieldValues, TContext, TTransformedValues extends FieldValues | undefined> extends FormProviderProps<TFieldValues, TContext, TTransformedValues> {
    onSubmit: Parameters<UseFormHandleSubmit<TFieldValues, TTransformedValues>>[0];
    onError?: Parameters<UseFormHandleSubmit<TFieldValues, TTransformedValues>>[1];
    style?: CSSProperties;
    className?: string;
    ref?: Ref<FormRef>;
}
/**
 * This Form component is a wrapper for react-hook-form, to simplify setup.\
 * It handles rendering the form and providing the necessary context to its children.\
 * Otherwise it behaves like the react-hook-form documentation describes.
 *
 * It also provides a set of components to use within the form:
 * - `Form.Field`
 * - `Form.Control`
 * - `Form.Description`
 * - `Form.Item`
 * - `Form.Label`
 * - `Form.Message`
 */
declare const Form: (<TFieldValues extends FieldValues, TContext, TTransformedValues extends FieldValues | undefined>(props: FormProps<TFieldValues, TContext, TTransformedValues> & {
    ref?: ForwardedRef<FormRef>;
}) => ReactElement) & {
    Field: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: FormFieldProps<TFieldValues, TName> | FormFieldWithRenderProps<TFieldValues, TName>) => import("react/jsx-runtime").JSX.Element;
    Item: {
        ({ className, ref, ...props }: FormItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Label: {
        ({ className, ref, ...props }: FormLabelProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Control: {
        ({ ref, ...props }: FormControlProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Description: {
        ({ ref, ...props }: FormDescriptionProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Message: {
        ({ children, ref, ...props }: FormMessageProps): import("react/jsx-runtime").JSX.Element | null;
        displayName: string;
    };
};
export { Form, useFormField, useFormRef };
