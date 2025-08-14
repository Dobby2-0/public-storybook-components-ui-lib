import { PopoverContentRef } from '../../Popover/Popover.tsx';
import { TreeItem, TreeViewClassNameObject, TreeViewProps } from '../types';
import { RefObject } from '../../../../node_modules/react';
export declare const TreeViewContext: import('../../../../node_modules/react').Context<{
    treeViewData: import('../types').TreeViewData;
    selectionMode: "checkbox" | "focus" | undefined;
    onSelectionChange: (id: string, selected: boolean) => void;
    onExpandChange: (itemId: TreeItem["id"], expanded: boolean) => void;
    registerPopoverRef: (ref: RefObject<PopoverContentRef | null>) => void;
    closeAllPopovers: () => void;
    defaultIcons: import('../types').TreeViewDefaultIcons | undefined;
    classNames: TreeViewClassNameObject | undefined;
    asPopover: boolean | undefined;
    hideTriggerIcon: boolean | undefined;
    enableBranchSelection: boolean;
    onlyToggleOnTriggerIcon: boolean;
    leafRenderer: ((props: import('../../../../node_modules/react').HTMLAttributes<HTMLElement> & import('react-aria').PressEvents, item?: TreeItem) => import('../../../../node_modules/react').ReactNode) | undefined;
    enableTooltip: boolean;
    tooltipProps: Omit<import('../../Tooltip/Tooltip').TooltipProps, "content"> | undefined;
} | null>;
interface TreeViewContextValueProps extends Pick<TreeViewProps, "asPopover" | "defaultExpanded" | "defaultIcons" | "selectedItem" | "defaultSelection" | "hideTriggerIcon" | "items" | "onSelectionChange" | "selectionMode" | "enableBranchSelection" | "onlyToggleOnTriggerIcon" | "leafRenderer" | "enableTooltip" | "tooltipProps"> {
    classNames?: TreeViewClassNameObject;
}
/**
 * Manages the internal state of the TreeView component
 */
export declare const useTreeViewManager: ({ items, selectionMode, selectedItem, defaultSelection, defaultExpanded, onSelectionChange, defaultIcons, classNames, asPopover, hideTriggerIcon, enableBranchSelection, onlyToggleOnTriggerIcon, leafRenderer, enableTooltip, tooltipProps, }: TreeViewContextValueProps) => {
    contextValue: {
        treeViewData: import('../types').TreeViewData;
        selectionMode: "checkbox" | "focus" | undefined;
        onSelectionChange: (id: string, selected: boolean) => void;
        onExpandChange: (itemId: TreeItem["id"], expanded: boolean) => void;
        registerPopoverRef: (ref: RefObject<PopoverContentRef | null>) => void;
        closeAllPopovers: () => void;
        defaultIcons: import('../types').TreeViewDefaultIcons | undefined;
        classNames: TreeViewClassNameObject | undefined;
        asPopover: boolean | undefined;
        hideTriggerIcon: boolean | undefined;
        enableBranchSelection: boolean;
        onlyToggleOnTriggerIcon: boolean;
        leafRenderer: ((props: import('../../../../node_modules/react').HTMLAttributes<HTMLElement> & import('react-aria').PressEvents, item?: TreeItem) => import('../../../../node_modules/react').ReactNode) | undefined;
        enableTooltip: boolean;
        tooltipProps: Omit<import('../../Tooltip/Tooltip').TooltipProps, "content"> | undefined;
    };
    itemsInternal: TreeItem[];
};
export {};
