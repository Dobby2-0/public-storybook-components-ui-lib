import { arrayMove } from '@dnd-kit/sortable';
import { ReactNode } from '../../../node_modules/react';
type ItemWithId = Record<never, unknown> & {
    id: string | number;
};
interface DndListProps<T extends ItemWithId> {
    /** Array of items used in the list */
    items: T[];
    /** Handler called when order change, gets updated array of items */
    onChange?: (items: T[]) => void;
    /** Handler called when order change, gets dragged item and dropped position index */
    onDragEnd?: (item: T, newIndex: number) => void;
    /** Child function that handles rendering for each item */
    children: (item: T, index: number) => ReactNode;
    /** The CSS className for the element */
    className?: string;
    /** Wheter re-ordering should be disabled */
    disabled?: boolean;
}
declare const DndList: (<T extends ItemWithId>({ items, onChange, onDragEnd, children, className, disabled, }: DndListProps<T>) => import("react/jsx-runtime").JSX.Element) & {
    Item: ({ id, children }: {
        children?: ReactNode | undefined;
    } & {
        id: string | number;
    }) => import("react/jsx-runtime").JSX.Element;
    DragHandle: () => import("react/jsx-runtime").JSX.Element;
};
export { arrayMove, DndList };
