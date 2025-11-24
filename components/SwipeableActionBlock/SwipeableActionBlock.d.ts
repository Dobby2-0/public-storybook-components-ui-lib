import { ButtonProps } from '../Button/Button.tsx';
import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
type ActionButton = ButtonProps;
type ActionsProps = ActionButton[] | ((close: () => void) => ReactNode);
interface ClassNameObject {
    base?: string;
    container?: string;
    actions?: string;
}
interface SwipeableActionBlockProps extends PropsWithChildren {
    /** Action buttons to show when swiping from the start (left) side. */
    startActions?: ActionsProps;
    /** Action buttons to show when swiping from the end (right) side. */
    endActions?: ActionsProps;
    /** Additional class names for styling. Can be a string or an object with specific class names for different parts. */
    className?: string | ClassNameObject;
}
/** A block component that reveals action buttons when swiped left.*/
declare const SwipeableActionBlock: ({ startActions, endActions, children, className, }: SwipeableActionBlockProps) => import("react/jsx-runtime").JSX.Element;
export { SwipeableActionBlock };
