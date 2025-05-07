interface ColorPickerProps {
    selectedColor?: string;
    onChange: (color?: string) => void;
    type?: "color" | "fill";
    isDisabled?: boolean;
}
declare const ColorPicker: ({ onChange, type, selectedColor, isDisabled, }: ColorPickerProps) => import("react/jsx-runtime").JSX.Element;
export { ColorPicker };
