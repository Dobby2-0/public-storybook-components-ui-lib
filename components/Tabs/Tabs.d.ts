import { CollectionItem } from '../../types';
import { Key } from '@react-types/shared';
import { ComponentPropsWithoutRef, ReactNode } from '../../../node_modules/react';
import { TabsProps as AriaTabsProps } from 'react-aria-components';
import { Pill } from '../Pill/Pill';
interface TabItem extends CollectionItem {
    content: ReactNode;
    badge?: ReactNode;
    badgeProps?: ComponentPropsWithoutRef<typeof Pill>;
    disabled?: boolean;
}
interface ClassNameObject {
    base?: string;
    content?: string;
}
interface TabsProps extends Omit<AriaTabsProps, "children" | "className" | "onSelectionChange"> {
    /** Forces the filter bar to be displayed in mobile mode. */
    forceMobile?: boolean;
    /** Array of items to be rendered as tabs */
    items: TabItem[];
    /** Content to be added before the tablist */
    prefix?: ReactNode;
    /** Content to be added after the tablist */
    suffix?: ReactNode;
    /** Styling for the tablist and optionally its content */
    className?: string | ClassNameObject;
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (key: Key) => Promise<void> | void;
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
 *   },
 *   {
 *     id: "2",
 *     label: "Tab 2",
 *     content: "Content for Tab 2",
 *   },
 * ]
 * <Tabs items={items} />
 */
declare const Tabs: ({ forceMobile, items, className, selectedKey, defaultSelectedKey, onSelectionChange, prefix, suffix, ...props }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export { Tabs };
export type { TabItem };
