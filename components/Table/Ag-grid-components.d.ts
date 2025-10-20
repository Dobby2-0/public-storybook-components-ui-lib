import { RowMenuItem } from './Ag-grid-table.tsx';
import { Column, GridApi } from 'ag-grid-community';
import { Dispatch, SetStateAction } from '../../../node_modules/react';
declare const TableOptionsHeader: () => import("react/jsx-runtime").JSX.Element;
declare const ChevronCellRenderer: (onDetailsClick?: (id: string) => void) => {
    (props: {
        data?: {
            id?: string;
        };
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const MenuCellRenderer: (menuItems: RowMenuItem[]) => {
    (props: {
        data?: {
            id?: string;
        };
    }): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
declare const CheckboxCellRenderer: (selectedIds: Record<string, boolean>, setSelectedIds: Dispatch<SetStateAction<Record<string, boolean>>>, onRowSelectionChange?: (selectedIds: string[]) => void, allSelected?: boolean, setAllSelected?: Dispatch<SetStateAction<boolean>>, getVisibleRowIds?: () => string[], singleSelection?: boolean) => {
    (props: {
        data: {
            id: string;
        };
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SelectionHeaderCheckbox: (selectedIds: Record<string, boolean>, setSelectedIds: Dispatch<SetStateAction<Record<string, boolean>>>, allSelected: boolean, setAllSelected: Dispatch<SetStateAction<boolean>>, onRowSelectionChange?: (selectedIds: string[] | "all") => void, totalCount?: number) => {
    (): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const GridApiContext: import('../../../node_modules/react').Context<{
    api?: GridApi;
    columns?: Column[];
    saveColumnState?: (api: GridApi) => void;
}>;
export { CheckboxCellRenderer, ChevronCellRenderer, GridApiContext, MenuCellRenderer, SelectionHeaderCheckbox, TableOptionsHeader, };
