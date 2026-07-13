import { RefObject } from '../../../node_modules/react';
/**
 * Tracks whether the overlay is still performing its exit (fade-out) animation, so it can stay
 * mounted long enough for the animation to actually finish, instead of vanishing instantly or
 * flickering if the animation gets interrupted (e.g. re-hovering the trigger mid fade-out).
 */
declare const useExitAnimation: (ref: RefObject<HTMLElement | null>, isOpen: boolean) => boolean;
/** Tracks whether the overlay is still performing its enter (fade-in) animation. */
declare const useEnterAnimation: (ref: RefObject<HTMLElement | null>) => boolean;
export { useEnterAnimation, useExitAnimation };
