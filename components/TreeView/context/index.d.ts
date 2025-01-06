import { PopoverContentRef } from '../../Popover/Popover.tsx';
import { TreeItem, TreeViewClassNameObject, TreeViewProps } from '../types';
import { RefObject } from '../../../../node_modules/react';
export declare const TreeViewContext: import('../../../../node_modules/react').Context<{
    treeViewData: import('../types').TreeViewData;
    selectionMode: "checkbox" | "focus" | undefined;
    onSelectionChange: (id: string, selected: boolean) => void;
    onExpandChange: (itemId: TreeItem["id"], expanded: boolean) => void;
    registerPopoverRef: (ref: RefObject<PopoverContentRef>) => void;
    closeAllPopovers: () => void;
    defaultIcons: import('../types').TreeViewDefaultIcons | undefined;
    classNames: TreeViewClassNameObject | undefined;
    asPopover: boolean | undefined;
    hideTriggerIcon: boolean | undefined;
} | null>;
interface TreeViewContextValueProps extends Pick<TreeViewProps, "asPopover" | "defaultExpanded" | "defaultIcons" | "defaultSelection" | "hideTriggerIcon" | "items" | "onSelectionChange" | "selectionMode"> {
    classNames?: TreeViewClassNameObject;
}
/**
 * Manages the internal state of the TreeView component
 */
export declare const useTreeViewManager: ({ items, selectionMode, defaultSelection, defaultExpanded, onSelectionChange, defaultIcons, classNames, asPopover, hideTriggerIcon, }: TreeViewContextValueProps) => {
    contextValue: {
        treeViewData: import('../types').TreeViewData;
        selectionMode: "checkbox" | "focus" | undefined;
        onSelectionChange: (id: string, selected: boolean) => void;
        onExpandChange: (itemId: TreeItem["id"], expanded: boolean) => void;
        registerPopoverRef: (ref: RefObject<PopoverContentRef>) => void;
        closeAllPopovers: () => void;
        defaultIcons: import('../types').TreeViewDefaultIcons | undefined;
        classNames: TreeViewClassNameObject | undefined;
        asPopover: boolean | undefined;
        hideTriggerIcon: boolean | undefined;
    };
    itemsInternal: TreeItem[];
};
export {};
