import { DobbyContextValue, ToastContextValue } from '../types';
export declare const dobbyContextDefaultValues: DobbyContextValue;
export declare const DobbyContext: import('../../node_modules/react').Context<DobbyContextValue>;
export declare const ToastContext: import('../../node_modules/react').Context<ToastContextValue>;
/**
 * Returns the nearest enclosing Modal's own DOM element, or `null` outside any Modal. A Modal
 * can legitimately exceed the app's portal container (e.g. a fullscreen viewer), so anything
 * boundary-clamped against that container - like a Tooltip - should prefer this when present.
 */
export declare const ModalBoundaryContext: import('../../node_modules/react').Context<(() => Element | null) | null>;
