import { PageInfo } from '../utils/table.ts';
export interface PaginatedField<TNode> {
    edges?: {
        node: TNode;
    }[];
    pageInfo?: PageInfo;
    totalCount?: number;
}
export type PaginatedResult<TName extends string, TNode> = Record<TName, PaginatedField<TNode>>;
