import { ReactNode, RefObject } from '../../../node_modules/react';
interface SidePanelTrackProps {
    position: "left" | "right";
    isOpen: boolean;
    preventDismissal: boolean;
    /** The panel itself, which is watched to find out whether it is still in view */
    panelRef: RefObject<HTMLElement | null>;
    backdropClassName?: string;
    onOpenChange: (isOpen: boolean) => void;
    /** Called when the panel is gone from view after it was closed, so it can be unmounted */
    onExited: () => void;
    children: ReactNode;
}
/**
 * Moves the panel in and out of view the way the React Aria Sheet does it, but relative to the
 * container instead of the viewport.
 *
 * The panel sits in a scroll area that is two containers wide, with an empty page next to it.
 * Opening and closing smooth scroll between the page with the panel and the empty page, so the
 * motion is the one of the browser. A swipe scrolls the same area, so it closes the panel when it
 * is swiped out of view. The backdrop fades with the scroll position.
 *
 * The panel is closed and unmounted as soon as it is completely out of view, which is before the
 * scroll has reached its end, like in the Sheet.
 */
declare const SidePanelTrack: ({ position, isOpen, preventDismissal, panelRef, backdropClassName, onOpenChange, onExited, children, }: SidePanelTrackProps) => import("react/jsx-runtime").JSX.Element;
export { SidePanelTrack };
