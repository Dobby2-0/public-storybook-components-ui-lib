import { ReactNode } from '../../../node_modules/react';
type ItemWithId = Record<never, unknown> & {
    id: string | number;
};
interface DndListProps<T extends ItemWithId> {
    /** Array of items used in the list */
    items: T[];
    /** Handler called when order change */
    onChange?: (items: T[]) => void;
    /** Child function that handles rendering for each item */
    children: (item: T) => ReactNode;
    /** The CSS className for the element */
    className?: string;
    /** Wheter re-ordering should be disabled */
    disabled?: boolean;
}
declare const DndList: (<T extends ItemWithId>({ items, onChange, children, className, disabled, }: DndListProps<T>) => import("react/jsx-runtime").JSX.Element) & {
    Item: ({ id, children }: {
        children?: ReactNode | undefined;
    } & {
        id: string | number;
    }) => import("react/jsx-runtime").JSX.Element;
    DragHandle: () => import("react/jsx-runtime").JSX.Element;
};
export { DndList };
