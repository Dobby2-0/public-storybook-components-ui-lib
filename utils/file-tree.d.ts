import { File, FolderItem } from '../types/file-tree.ts';
export declare const buildFileStructure: <T extends File>(documents: T[]) => FolderItem[];
/** Sets loading prop for folder items based on separate list of ids */
export declare const mapLoadingFolderItems: (items: FolderItem[], loadingItemIds: Map<string, boolean>) => FolderItem[];
