import { CardListProps } from '../CardList/CardList';
import { Ref } from '../../../node_modules/react';
export interface SelectableCardListHandle {
    /** Resets selection to empty and exits selection mode (no-op in "always" mode's selection-view). */
    clearSelection: () => void;
}
export interface SelectableCardListProps<T> extends Omit<CardListProps<T>, "pagination"> {
    /** Controlled selected ids — omit to let the component manage its own state. */
    selectedIds?: Set<string>;
    /** Controlled selection-mode flag — omit to let the component manage its own state. */
    isSelecting?: boolean;
    /**
     * Initial value for isSelecting when uncontrolled. Ignored if `isSelecting` is
     * controlled, or if `selectionTrigger="always"` (which forces it permanently true).
     */
    defaultIsSelecting?: boolean;
    /**
     * Controls how selection mode is entered.
     * - "longPress" (default): checkboxes are hidden until a card is long-pressed.
     * - "always": checkboxes are shown from the start; long press is disabled.
     */
    selectionTrigger?: "longPress" | "always";
    /** Fired whenever selection or selection-mode changes. */
    onSelectionChange?: (selectedIds: Set<string>, isSelecting: boolean) => void;
    ref?: Ref<SelectableCardListHandle>;
}
/**
 * `CardList` with built-in multi-select: long-press (or `selectionTrigger="always"`)
 * enters selection mode, rendering each item as a `SelectableCard`. Manages its
 * own selection state unless `selectedIds`/`isSelecting` are passed as controlled props.
 */
declare const SelectableCardList: <T>({ renderItem, keyExtractor, selectedIds: controlledSelectedIds, isSelecting: controlledIsSelecting, defaultIsSelecting, selectionTrigger, onSelectionChange, ref, ...cardListProps }: SelectableCardListProps<T>) => import("react/jsx-runtime").JSX.Element;
export { SelectableCardList };
