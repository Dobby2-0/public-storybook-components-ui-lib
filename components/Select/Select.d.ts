import { SelectCommonProps } from './SelectBase.tsx';
interface SelectBaseProps<T extends object> extends SelectCommonProps<T> {
    multiple?: boolean;
}
/**
 * A select component that displays a collapsible list of options and allows a user to select one of them.
 *
 * Based on `React-aria-components`
 */
declare const Select: <T extends object>({ multiple, ...props }: SelectBaseProps<T>) => import("react/jsx-runtime").JSX.Element;
export { Select };
