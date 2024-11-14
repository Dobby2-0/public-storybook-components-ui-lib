import { ReactNode } from '../../../node_modules/react';
interface TreeItem {
    id: string;
    name: string;
    icons?: {
        default?: ReactNode;
        expanded?: ReactNode;
    };
    className?: string;
    children?: TreeItem[];
    onClick?: (item: TreeItem) => void;
}
interface ClassNameObject {
    base?: string;
    branch?: string | ((selected: boolean) => string);
    leaf?: string | ((selected: boolean) => string);
    popover?: string;
}
interface DefaultIcons {
    /** Default icon for parent elements */
    branch?: ReactNode;
    /** Default icon for expanded parent elements */
    expandedBranch?: ReactNode;
    /** Default icon for child elements */
    leaf?: ReactNode;
}
interface CommonTreeViewProps {
    /** function called when selected item changes */
    onSelectChange?: (item: TreeItem) => void;
    /** Expand all nodes in the tree on component mount */
    defaultExpanded?: boolean;
    /** Object specifying the default icons to use */
    defaultIcons?: DefaultIcons;
    /** Should the arrow trigger icon be hidden. Will be automatically hidden when asPopover is set to true */
    hideTriggerIcon?: boolean;
    /** Should the tree use popovers to open branches instead of accordion */
    asPopover?: boolean;
    /** force icons for the highest level items. Branches with no icon provided wil get a folder with an initial */
    forceRootIcons?: boolean;
}
interface TreeViewProps extends CommonTreeViewProps {
    /** Data structure for the tree */
    items: TreeItem[];
    /** Styling for the tree and optionally its branches and leafs */
    className?: string | ClassNameObject;
    /** Id of the item that should initially be selected, nodes will expand so the item is visible */
    defaultSelected?: TreeItem["id"];
}
/**
 * The TreeView component lets users navigate hierarchical lists of data with nested levels that can be expanded and collapsed.
 *
 * Based on ´@radix-ui/react-accordion´
 */
declare const TreeView: ({ items, defaultSelected, onSelectChange, defaultExpanded, className, ...props }: TreeViewProps) => import("react/jsx-runtime").JSX.Element;
export { TreeView };
export type { TreeItem };
