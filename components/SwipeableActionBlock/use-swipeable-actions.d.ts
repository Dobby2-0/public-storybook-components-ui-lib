interface UseSwipeableActionsProps {
    startActionsWidth: number;
    endActionsWidth: number;
    animationDuration?: number;
}
/** Hook to manage swipeable actions on a block element. */
declare const useSwipeableActions: ({ startActionsWidth, endActionsWidth, animationDuration, }: UseSwipeableActionsProps) => {
    readonly expanded: "" | "end" | "start";
    readonly resetSwipe: () => void;
    readonly isSwiping: "end" | "start" | null;
    readonly isTransitioning: boolean;
    readonly translateX: number;
    readonly swipeHandlers: import('react-swipeable').SwipeableHandlers;
};
export { useSwipeableActions };
