import { TreeItem, TreeViewData, TreeViewState } from '../types';
export declare const calculateSelectedState: (items: TreeItem["id"][], treeViewState: TreeViewState) => void;
interface InitializeItemStateOptions {
    existingTreeViewData?: TreeViewData;
    defaults?: {
        selection?: string[];
        expanded?: boolean;
    };
}
export declare const initializeTreeView: (items: TreeItem[], options?: InitializeItemStateOptions) => TreeViewData;
export {};
