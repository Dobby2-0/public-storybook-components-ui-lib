import { TreeItem, TreeViewProps, TreeViewSelection } from './types';
/**
 * The TreeView component lets users navigate hierarchical lists of data with nested levels that can be expanded and collapsed.
 *
 * Based on ´@radix-ui/react-accordion´
 */
declare const TreeView: ({ items, selectionMode, selectedItem, defaultSelection, defaultExpanded, defaultIcons, hideTriggerIcon, forceRootIcons, className, asPopover, onSelectionChange, enableBranchSelection, onlyToggleOnTriggerIcon, leafRenderer, enableTooltip, tooltipProps, ...props }: TreeViewProps) => import("react/jsx-runtime").JSX.Element;
export { TreeView };
export type { TreeItem, TreeViewSelection };
