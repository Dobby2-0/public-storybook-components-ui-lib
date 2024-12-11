import { SelectCommonProps } from './SelectBase';
/**
 * A select component that displays a collapsible list of options and allows a user to select one or more of them.
 *
 * Based on `React-aria-components`
 */
declare const MultiSelect: <T extends object>({ label, placeholder, description, variant, className, items, ...props }: SelectCommonProps<T>) => import("react/jsx-runtime").JSX.Element;
export { MultiSelect };
