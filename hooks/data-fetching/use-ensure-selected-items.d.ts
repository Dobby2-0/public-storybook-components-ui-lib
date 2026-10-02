import { FieldResolver } from '../../types';
import { PaginatedField } from '../../types/paginated-data.ts';
import { OperationVariables, TypedDocumentNode } from '@apollo/client';
import { Key } from '@react-types/shared';
interface UseEnsureSelectedItemsConfig<TKey extends string, TNode> {
    /** A paginated connection query, e.g. an existing list query filtered by id. */
    query: TypedDocumentNode<Record<TKey, PaginatedField<TNode> | null | undefined>, OperationVariables>;
    dataPropertyName: TKey;
    ids: readonly Key[];
    items: TNode[];
    /** Called once per request, with at most `maxPageSize` ids.
     *  @default (ids) => ({first: ids.length, where: {id: {in: ids}}}) */
    buildVariables?: (ids: string[]) => OperationVariables;
    /** @default 50 */
    maxPageSize?: number;
    idResolver?: FieldResolver<TNode, string>;
    errorMessage?: string;
}
declare const useEnsureSelectedItems: <TKey extends string, TNode>({ query, dataPropertyName, ids, items, buildVariables, maxPageSize, idResolver, errorMessage, }: UseEnsureSelectedItemsConfig<TKey, TNode>) => {
    readonly items: TNode[];
    readonly loading: boolean;
    readonly error: unknown;
};
export { useEnsureSelectedItems };
export type { UseEnsureSelectedItemsConfig };
