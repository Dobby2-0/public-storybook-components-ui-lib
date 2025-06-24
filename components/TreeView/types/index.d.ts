import { TooltipProps } from '../../Tooltip/Tooltip.tsx';
import { PressEvents } from '@react-types/shared/src/events';
import { HTMLAttributes, ReactNode } from '../../../../node_modules/react';
export interface TreeItem {
    id: string;
    label: string;
    icons?: {
        default?: ReactNode;
        expanded?: ReactNode;
    };
    defaultExpanded?: boolean;
    className?: string;
    children?: TreeItem[] | ReactNode;
    onClick?: (item: TreeItem, selected: TreeItemState["selected"]) => void;
}
export interface TreeItemState {
    /** IDs of ALL parent items */
    parents: TreeItem["id"][];
    /** IDs of ALL children items */
    children: TreeItem["id"][];
    selected: boolean | "indeterminate";
    expanded: boolean;
}
export type TreeViewState = Record<TreeItem["id"], TreeItemState>;
export interface TreeViewData {
    flatItems: Record<TreeItem["id"], TreeItem>;
    state: TreeViewState;
}
export interface TreeViewClassNameObject {
    base?: string;
    branch?: string | ((selected?: TreeItemState["selected"]) => string);
    leaf?: string | ((selected?: TreeItemState["selected"]) => string);
    popover?: string;
}
export interface TreeViewDefaultIcons {
    /** Default icon for parent elements */
    branch?: ReactNode;
    /** Default icon for expanded parent elements */
    expandedBranch?: ReactNode;
    /** Default icon for child elements */
    leaf?: ReactNode;
}
export type TreeViewSelection = Record<TreeItem["id"], {
    item: TreeItem;
    selected: TreeItemState["selected"];
}>;
export interface TreeViewProps {
    /** Selection mode for the entire tree */
    selectionMode?: "focus" | "checkbox";
    /** Data structure for the tree */
    items: TreeItem[];
    /** Styling for the tree and optionally its branches and leafs */
    className?: string | TreeViewClassNameObject;
    /** Expand all nodes in the tree on component mount */
    defaultExpanded?: boolean;
    /** List of IDs of the items that should be selected, nodes will expand so the item is visible */
    selectedItem?: TreeItem["id"] | TreeItem["id"][];
    /** List of IDs of the items that should initially be selected, nodes will expand so the item is visible */
    defaultSelection?: TreeItem["id"] | TreeItem["id"][];
    /** function called when an item is selected */
    onSelectionChange?: (selectionState: TreeViewSelection, trigger: TreeItem) => void;
    /** Object specifying the default icons to use */
    defaultIcons?: TreeViewDefaultIcons;
    /** Should the arrow trigger icon be hidden. Will be automatically hidden when asPopover is set to true */
    hideTriggerIcon?: boolean;
    /** Should the tree use popovers to open branches instead of accordion */
    asPopover?: boolean;
    /** force icons for the highest level items. Branches with no icon provided wil get a folder with an initial */
    forceRootIcons?: boolean;
    /** enable selecting a branch */
    enableBranchSelection?: boolean;
    /** will expand/collapse a branch only when clicking the trigger icon */
    onlyToggleOnTriggerIcon?: boolean;
    /** Use custom component for the tree leafs instead of regular button */
    leafRenderer?: (props: HTMLAttributes<HTMLElement> & PressEvents, item?: TreeItem) => ReactNode;
    /** Whether to enable tooltips on the TreeViewPopover trigger */
    enableTooltip?: boolean;
    /** Tooltip custmoization */
    tooltipProps?: Omit<TooltipProps, "content">;
}
