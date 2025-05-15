import { PropsWithChildren } from '../../../node_modules/react';
type DndListItemProps = PropsWithChildren & {
    id: string | number;
};
declare const DndListItem: ({ id, children }: DndListItemProps) => import("react/jsx-runtime").JSX.Element;
declare const DragHandle: () => import("react/jsx-runtime").JSX.Element;
export { DndListItem, DragHandle };
