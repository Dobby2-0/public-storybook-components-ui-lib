import { TreeItem } from '../components/TreeView/types';
export interface File {
    id: string;
    contentType?: string;
    fileType?: string;
    name?: string;
    path?: string;
    size?: number;
    key?: string;
    originalId?: string;
    isUploaded?: boolean;
    createdTimestamp?: string;
}
export interface FolderItem extends Omit<TreeItem, "id" | "children">, File {
    isFile: boolean;
    children?: FolderItem[];
}
export interface FolderEntry {
    id: string;
    name: string;
    value: FolderItem;
    parent?: string;
}
