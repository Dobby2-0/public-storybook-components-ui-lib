import { IDatasource, Sort } from '../Table/Ag-Grid/Ag-grid-table.tsx';
import { Editor } from '@tiptap/react';
export interface Tag {
    id: string;
    code?: string;
    localizedName?: string;
    localizedDescription?: string;
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
