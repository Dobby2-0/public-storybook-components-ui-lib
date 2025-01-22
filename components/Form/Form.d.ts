import { CSSProperties, HTMLAttributes, ReactElement, ReactNode } from '../../../node_modules/react';
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
interface FormProps<TFieldValues extends FieldValues, TContext, TTransformedValues extends FieldValues | undefined> extends FormProviderProps<TFieldValues, TContext, TTransformedValues> {
    onSubmit?: Parameters<UseFormHandleSubmit<TFieldValues, TTransformedValues>>[0];
    onError?: Parameters<UseFormHandleSubmit<TFieldValues, TTransformedValues>>[1];
    style?: CSSProperties;
    className?: string;
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
declare const Form: (<TFieldValues extends FieldValues, TContext, TTransformedValues extends FieldValues | undefined>({ onSubmit, className, style, handleSubmit, children, ...props }: FormProps<TFieldValues, TContext, TTransformedValues>) => import("react/jsx-runtime").JSX.Element) & {
    Field: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: FormFieldProps<TFieldValues, TName> | FormFieldWithRenderProps<TFieldValues, TName>) => import("react/jsx-runtime").JSX.Element;
    Item: import('../../../node_modules/react').ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    Label: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<Omit<import('@radix-ui/react-label').LabelProps & import('../../../node_modules/react').RefAttributes<HTMLLabelElement>, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLLabelElement>, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLLabelElement>>;
    Control: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<import('@radix-ui/react-slot').SlotProps & import('../../../node_modules/react').RefAttributes<HTMLElement>, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLElement>>;
    Description: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLParagraphElement> & import('../../../node_modules/react').RefAttributes<HTMLParagraphElement>, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLParagraphElement>>;
    Message: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLParagraphElement> & import('../../../node_modules/react').RefAttributes<HTMLParagraphElement>, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLParagraphElement>>;
};
export { Form, useFormField };
