import { HtmlHTMLAttributes, PropsWithChildren, ReactNode } from '../../../node_modules/react';
interface ListProps extends PropsWithChildren<HtmlHTMLAttributes<HTMLUListElement>> {
    /** custom divider for the list */
    divider?: ReactNode;
}
/**
 * A List component that renders children as a list, with an optional custom divider between list items.
 *
 * @example with custom divider
 * <List customDivider={<div>*********</div>}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </List>
 */
declare const List: ({ children, divider, className, ...props }: ListProps) => import("react/jsx-runtime").JSX.Element;
export { List };
