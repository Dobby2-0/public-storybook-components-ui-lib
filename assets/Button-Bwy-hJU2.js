import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{c as d}from"./index-iB5ESbfh.js";import{c as u}from"./index-Bb4qSo10.js";import{a as m}from"./useFocusRing-BDCLxdHg.js";import{B as p}from"./ButtonBase-DoRtuiK3.js";const c=u([],{variants:{size:{default:"h-8 px-[10px] py-[5px] text-[15px] ",sm:"h-[1.875rem] px-[5px] py-[6px] text-[13px]"}},defaultVariants:{size:"default"}}),a=({className:e,size:n="default",prefix:r,suffix:l,children:s,...i})=>t.jsxs(p,{className:m(e,o=>d(c({size:n,className:o}))),...i,children:[r,t.jsx("span",{className:"px-[5px]",children:s}),l]});try{a.displayName="Button",a.__docgenInfo={description:`Button component supporting multiple style variants and sizes

Prefix or suffix elements can be added around the button label with the corresponding parameters`,displayName:"Button",props:{prefix:{defaultValue:null,description:"Content added on the left side of child content",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"Content added on the right side of child content",name:"suffix",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:"Whether the button is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: ButtonRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: ButtonRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},onPress:{defaultValue:null,description:"Handler that is called when the press is released over the target.",name:"onPress",required:!1,type:{name:"((e: PressEvent) => void)"}},onPressStart:{defaultValue:null,description:"Handler that is called when a press interaction starts.",name:"onPressStart",required:!1,type:{name:"((e: PressEvent) => void)"}},onPressEnd:{defaultValue:null,description:`Handler that is called when a press interaction ends, either
over the target or when the pointer leaves the target.`,name:"onPressEnd",required:!1,type:{name:"((e: PressEvent) => void)"}},onPressChange:{defaultValue:null,description:"Handler that is called when the press state changes.",name:"onPressChange",required:!1,type:{name:"((isPressed: boolean) => void)"}},onPressUp:{defaultValue:null,description:`Handler that is called when a press is released over the target, regardless of
whether it started on the target or not.`,name:"onPressUp",required:!1,type:{name:"((e: PressEvent) => void)"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},"aria-expanded":{defaultValue:null,description:"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",name:"aria-expanded",required:!1,type:{name:'boolean | "true" | "false"'}},"aria-haspopup":{defaultValue:null,description:"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",name:"aria-haspopup",required:!1,type:{name:'boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog"'}},"aria-controls":{defaultValue:null,description:"Identifies the element (or elements) whose contents or presence are controlled by the current element.",name:"aria-controls",required:!1,type:{name:"string"}},"aria-pressed":{defaultValue:null,description:'Indicates the current "pressed" state of toggle buttons.',name:"aria-pressed",required:!1,type:{name:'boolean | "true" | "false" | "mixed"'}},type:{defaultValue:{value:"'button'"},description:"The behavior of the button when used in an HTML form.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},preventFocusOnPress:{defaultValue:null,description:`Whether to prevent focus from moving to the button when pressing it.

Caution, this can make the button inaccessible and should only be used when alternative keyboard interaction is provided,
such as ComboBox's MenuTrigger or a NumberField's increment/decrement control.`,name:"preventFocusOnPress",required:!1,type:{name:"boolean"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},form:{defaultValue:null,description:"The `<form>` element to associate the button with.\nThe value of this attribute must be the id of a `<form>` in the same document.",name:"form",required:!1,type:{name:"string"}},formAction:{defaultValue:null,description:`The URL that processes the information submitted by the button.
Overrides the action attribute of the button's form owner.`,name:"formAction",required:!1,type:{name:"string"}},formEncType:{defaultValue:null,description:"Indicates how to encode the form data that is submitted.",name:"formEncType",required:!1,type:{name:"string"}},formMethod:{defaultValue:null,description:"Indicates the HTTP method used to submit the form.",name:"formMethod",required:!1,type:{name:"string"}},formNoValidate:{defaultValue:null,description:"Indicates that the form is not to be validated when it is submitted.",name:"formNoValidate",required:!1,type:{name:"boolean"}},formTarget:{defaultValue:null,description:"Overrides the target attribute of the button's form owner.",name:"formTarget",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Submitted as a pair with the button's value as part of the form data.",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The value associated with the button's name when it's submitted with the form data.",name:"value",required:!1,type:{name:"string"}},isPending:{defaultValue:null,description:`Whether the button is in a pending state. This disables press and hover events
while retaining focusability, and announces the pending state to screen readers.`,name:"isPending",required:!1,type:{name:"boolean"}},onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"((isHovering: boolean) => void)"}},variant:{defaultValue:null,description:"Variants for different styles of the Button component.",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "ghost" | "delete" | null'}},size:{defaultValue:{value:"default"},description:"Diferent sizes available for the Button component.",name:"size",required:!1,type:{name:'"default" | "sm" | null'}}}}}catch{}export{a as B};
