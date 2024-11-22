import { TreeItem, TreeViewProps, TreeViewSelection } from './types';
/**
 * The TreeView component lets users navigate hierarchical lists of data with nested levels that can be expanded and collapsed.
 *
 * Based on ´@radix-ui/react-accordion´
 */
declare const TreeView: ({ items, selectionMode, defaultExpanded, hideTriggerIcon, forceRootIcons, className, ...props }: TreeViewProps) => import("react/jsx-runtime").JSX.Element;
export { TreeView };
export type { TreeItem, TreeViewSelection };
