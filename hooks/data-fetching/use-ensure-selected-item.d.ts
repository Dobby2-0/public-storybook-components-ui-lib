import { FieldResolver } from '../../types';
import { PaginatedField } from '../../types/paginated-data.ts';
import { OperationVariables, TypedDocumentNode } from '@apollo/client';
import { Key } from '@react-types/shared';
type QueryField<TNode> = TNode | null | undefined | PaginatedField<TNode>;
interface UseEnsureSelectedItemConfig<TKey extends string, TNode, TField extends QueryField<TNode> = TNode | null | undefined> {
    query: TypedDocumentNode<Record<TKey, TField>, OperationVariables>;
    dataPropertyName: TKey;
    /** The id to resolve. No request is made while this is undefined. */
    id: Key | undefined;
    /** The already-paginated items to merge the resolved node into. */
    items: TNode[];
    /**
     * Allows setting specific query variables besides the object id filter.
     *
     * @default (id) => ({where: {id: {eq: id}}})
     */
    buildVariables?: (id: string) => OperationVariables;
    /**
     * Extracts the node from the resolved field. Defaults to treating the
     * field as the node itself, for a singular query (e.g. `field(where: ...)`).
     *
     * Pass `resolveConnectionNode` if `query` is a paginated connection
     * instead (e.g. reusing an existing list query filtered by id).
     */
    resolveItem?: (field: TField) => TNode | undefined;
    idResolver?: FieldResolver<TNode, string>;
    errorMessage?: string;
}
/** For `query`s that are paginated connections rather than a singular field. */
declare const resolveConnectionNode: <TNode>(field: PaginatedField<TNode> | undefined) => TNode | undefined;
/**
 * Ensures a specific item (typically the current selection of a paginated
 * list) is present in `items` regardless of the currently loaded page
 * window, by fetching it individually by id and merging it in — instead of
 * paginating through the full list to find it.
 */
declare const useEnsureSelectedItem: <TKey extends string, TNode, TField extends QueryField<TNode> = TNode | null | undefined>({ query, dataPropertyName, id, items, buildVariables, resolveItem, idResolver, errorMessage, }: UseEnsureSelectedItemConfig<TKey, TNode, TField>) => {
    /** `items`, with the resolved selected item merged in if not already present. */
    readonly items: TNode[];
    /** Whether the by-id lookup is in flight. */
    readonly loading: boolean;
    /** The error from the by-id lookup, if any. */
    readonly error: import('@apollo/client').ApolloError | undefined;
};
export { resolveConnectionNode, useEnsureSelectedItem };
export type { UseEnsureSelectedItemConfig };
