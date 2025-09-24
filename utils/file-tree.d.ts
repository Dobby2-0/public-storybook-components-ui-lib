import { File, FolderItem } from '../types/file-tree.ts';
export declare const buildFileStructure: <T extends File>(documents: T[]) => FolderItem[];
