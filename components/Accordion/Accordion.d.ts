import { ComponentPropsWithoutRef, ReactNode } from '../../../node_modules/react';
import * as AccordionPrimitive from "@radix-ui/react-accordion";
declare const Accordion: import('../../../node_modules/react').ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
declare const AccordionItem: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
interface AccordionTriggerProps extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
    /** Additional class name for the chevron */
    chevron?: ReactNode;
    /** Where to render the chevron, if undefined chevron isn't shown */
    chevronPosition?: "left" | "right";
}
declare const AccordionTrigger: import('../../../node_modules/react').ForwardRefExoticComponent<AccordionTriggerProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
