import { PopoverContentRef } from '../../Popover/Popover.tsx';
import { TreeItem, TreeViewClassNameObject, TreeViewProps } from '../types';
import { RefObject } from '../../../../node_modules/react';
export declare const TreeViewContext: import('../../../../node_modules/react').Context<{
    selectionMode: "checkbox" | "focus" | undefined;
    getItemState: (itemId: string) => {
        selected: boolean | "indeterminate";
        expanded: boolean;
    };
    onSelectionChange: (id: string, selected: boolean) => void;
    onExpandChange: (itemId: TreeItem["id"], expanded: boolean) => void;
    registerPopoverRef: (ref: RefObject<PopoverContentRef>) => void;
    closeAllPopovers: () => void;
    classNames?: TreeViewClassNameObject;
    asPopover?: boolean | undefined;
    defaultIcons?: import('../types').TreeViewDefaultIcons | undefined;
    forceRootIcons?: boolean | undefined;
    hideTriggerIcon?: boolean | undefined;
} | null>;
interface TreeViewContextValueProps extends Pick<TreeViewProps, "asPopover" | "defaultExpanded" | "defaultIcons" | "defaultSelection" | "forceRootIcons" | "hideTriggerIcon" | "items" | "onSelectionChange" | "selectionMode"> {
    classNames?: TreeViewClassNameObject;
}
export declare const useTreeViewContextValue: ({ items, selectionMode, defaultSelection, defaultExpanded, onSelectionChange, ...otherProps }: TreeViewContextValueProps) => {
    selectionMode: "checkbox" | "focus" | undefined;
    getItemState: (itemId: string) => {
        selected: boolean | "indeterminate";
        expanded: boolean;
    };
    onSelectionChange: (id: string, selected: boolean) => void;
    onExpandChange: (itemId: TreeItem["id"], expanded: boolean) => void;
    registerPopoverRef: (ref: RefObject<PopoverContentRef>) => void;
    closeAllPopovers: () => void;
    classNames?: TreeViewClassNameObject;
    asPopover?: boolean | undefined;
    defaultIcons?: import('../types').TreeViewDefaultIcons | undefined;
    forceRootIcons?: boolean | undefined;
    hideTriggerIcon?: boolean | undefined;
};
export {};
