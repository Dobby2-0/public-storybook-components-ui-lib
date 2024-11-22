import { TreeItem, TreeViewState } from '../types';
export declare const calculateSelectedState: (items: TreeItem["id"][], treeViewState: TreeViewState) => void;
interface InitializeItemStateOptions {
    existingTreeViewData?: TreeViewData;
    defaults?: {
        selection?: string[];
        expanded?: boolean;
    };
}
interface TreeViewData {
    flatItems: Record<TreeItem["id"], TreeItem>;
    state: TreeViewState;
}
export declare const initializeTreeView: (items: TreeItem[], options?: InitializeItemStateOptions) => TreeViewData;
export {};
