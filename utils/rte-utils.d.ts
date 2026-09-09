import { Sort } from '../components/Table/Ag-Grid/types';
import { SortModelItem } from 'ag-grid-community';
export declare const translateToHandlebarTags: (content?: string) => string | undefined;
export declare const replaceEmptyLines: (content?: string) => string | undefined;
export declare const pasteTagNodes: (content?: string) => string;
export declare const getTagSort: (sortModel?: SortModelItem[]) => Sort[];
