import { SelectCommonProps } from './SelectBase';
/**
 * A select component that displays a collapsible list of options and allows a user to select one of them.
 *
 * Based on `React-aria-components`
 */
declare const SingleSelect: <T extends object>({ label, description, variant, className, items, ...props }: SelectCommonProps<T>) => import("react/jsx-runtime").JSX.Element;
export { SingleSelect };
