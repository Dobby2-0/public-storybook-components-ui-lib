import { TreeItem, TreeItemStateRecord } from '../types';
export declare const initializeItemState: (items: TreeItem[], defaults?: {
    selection?: string[];
    expanded?: boolean;
}) => TreeItemStateRecord;
