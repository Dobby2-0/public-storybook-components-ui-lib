interface CardSelectionContextValue {
    isSelecting: boolean;
    selectedIds: Set<string>;
    toggleSelected: (id: string) => void;
}
declare const CardSelectionContext: import('../../../node_modules/react').Context<CardSelectionContextValue | null>;
declare const useCardSelection: () => CardSelectionContextValue;
export { CardSelectionContext, useCardSelection };
