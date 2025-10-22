import { GetRowIdParams } from 'ag-grid-community';
export declare const getColumnStateKey: (id?: string) => string | undefined;
export declare const getRowId: <T extends {
    id: string;
}>(params: GetRowIdParams<T>) => string;
