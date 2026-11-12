import { Card } from '../Card/Card';
import { ComponentProps, ReactNode } from '../../../node_modules/react';
export interface SelectableCardProps extends Omit<ComponentProps<typeof Card>, "highlighted" | "onClick"> {
    id: string;
    /** Called when the card is pressed while not in selection mode. */
    onPress?: () => void;
    /**
     * Long-press duration in ms before selection mode is entered.
     * @default 500
     */
    longPressDelay?: number;
    children: ReactNode;
}
/**
 * Card item for use inside `SelectableCardList`. Reads its selection state
 * from context — renders a checkbox and toggles selection once the list
 * enters selection mode, otherwise calls `onPress` as a normal tap.
 */
declare const SelectableCard: ({ id, onPress, longPressDelay, className, children, ...props }: SelectableCardProps) => import("react/jsx-runtime").JSX.Element;
export { SelectableCard };
