import { IDatasource, Sort } from '../Table/Ag-Grid/Ag-grid-table.tsx';
import { Editor } from '@tiptap/react';
export interface LocalizedTag {
    languageCode?: string;
    name?: string;
    description?: string;
}
export interface Tag {
    id: string;
    code?: string;
    localizedTags?: LocalizedTag[];
}
interface TagDataProps {
    tags?: Tag[];
    datasource?: IDatasource;
    totalCount?: number;
    pageSize?: number;
    loading?: boolean;
    error?: Error;
    sort?: Sort;
    onSortChange?: (sort: Sort) => void;
    onSearchChange?: (searchText: string) => void;
}
interface TagSelectorProps {
    editor: Editor;
    tagData: TagDataProps;
    isDisabled?: boolean;
}
declare const TagSelector: ({ editor, tagData, isDisabled }: TagSelectorProps) => import("react/jsx-runtime").JSX.Element;
export { TagSelector };
export type { TagDataProps };
