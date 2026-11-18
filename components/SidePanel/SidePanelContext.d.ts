interface SidePanelContextValue {
    close: () => void;
}
declare const SidePanelContext: import('../../../node_modules/react').Context<SidePanelContextValue | null>;
/**
 * Returns a function that closes the enclosing SidePanel, by calling its `onOpenChange(false)`.
 *
 * Use this to close after async work has succeeded. For a plain cancel button use
 * `SidePanel.CloseButton` instead.
 *
 * @throws when used outside of a SidePanel
 *
 * @example
 * const close = useSidePanelClose();
 * const handleApply = async () => {
 *   await save();
 *   close();
 * };
 */
declare const useSidePanelClose: () => () => void;
export { SidePanelContext, useSidePanelClose };
