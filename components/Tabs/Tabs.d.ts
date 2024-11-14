import { ReactNode } from '../../../node_modules/react';
import { TabsProps as AriaTabsProps } from 'react-aria-components';
interface TabItem {
    id: string;
    label: ReactNode;
    content: ReactNode;
    labelSuffix?: ReactNode;
}
interface TabsComponentProps extends Omit<AriaTabsProps, "children"> {
    /**
     *  Array of items to be rendered as tabs
     */
    items: TabItem[];
}
/**
 * Tabs component for displaying a set of tabs that can switch between different content panels.
 *
 * @example
 * items: [
 *   {
 *     id: "1",
 *     label: "Tab 1",
 *     content: "Content for Tab 1",
 *     pill: {children: "6"},
 *   },
 *   {
 *     id: "2",
 *     label: "Tab 2",
 *     content: "Content for Tab 2",
 *   },
 * ]
 * <Tabs items={items} />
 */
declare const Tabs: import('../../../node_modules/react').ForwardRefExoticComponent<TabsComponentProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export { Tabs };
