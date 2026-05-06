import { CheckboxProps as AriaCheckboxProps } from 'react-aria-components';
declare const CheckboxGroup: (props: import('react-aria-components').CheckboxGroupProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | null;
/**
 * Toggleable checkbox component that supports an indeterminate state
 *
 * Builds upon `react-aria-components`
 */
declare const Checkbox: ({ className, children, ...props }: AriaCheckboxProps) => import("react/jsx-runtime").JSX.Element;
export { Checkbox, CheckboxGroup };
