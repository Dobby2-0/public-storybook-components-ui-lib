import * as RPNInput from "react-phone-number-input";
declare const PhoneNumberField: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<import('../TextField/TextField.tsx').TextFieldProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref" | "value" | "onChange"> & Omit<RPNInput.Props<import('../../../node_modules/react').ComponentClass<RPNInput.Props<RPNInput.DefaultInputComponentProps>, RPNInput.State<RPNInput.Props<RPNInput.DefaultInputComponentProps>>>>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
} & import('../../../node_modules/react').RefAttributes<import('../../../node_modules/react').Component<RPNInput.Props<RPNInput.DefaultInputComponentProps>, RPNInput.State<RPNInput.Props<RPNInput.DefaultInputComponentProps>>, any>>>;
export { isPossiblePhoneNumber } from 'react-phone-number-input';
export { PhoneNumberField };
