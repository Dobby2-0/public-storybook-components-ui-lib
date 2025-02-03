import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{P as z}from"./Pill-ByEbGEhU.js";import{L as U}from"./ListBox-BrZEcryf.js";import{a as G}from"./Popover-CZJUG74c.js";import{d as J}from"./variants-CuMcQlp7.js";import{c as T,r as M,b as Q}from"./index-By-mRCMU.js";import{s as X}from"./KeyboardArrowDown-Dio4eISq.js";import{d as Y,e as Z}from"./Dialog-CgYtMAXa.js";import{r as l}from"./index-DRjF_FHU.js";import{$ as ee}from"./Button-BmI6QyOV.js";import{a as j}from"./useFocusRing-BWUU1kMe.js";import{L as B,D as C}from"./Label-C3T7MHLE.js";import{q as L}from"./Info-CwC22AGT.js";import{a as W}from"./Text-CYCjNin1.js";const I=l.forwardRef(({className:t,children:a,...i},d)=>e.jsx(ee,{ref:d,className:j(t,n=>T("flex h-8 w-full items-center justify-between whitespace-nowrap rounded-sm border border-[--border-trigger] bg-[--bg-trigger] pl-2.5 pr-1 py-1 text-sm","data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50","data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring","focus-visible:outline-none",n)),...i,children:j(a,n=>e.jsxs(e.Fragment,{children:[n,e.jsx("div",{className:"flex items-center justify-center ml-2 size-6 rounded-sm bg-transparent group-data-[open]:bg-secondary-focus",children:e.jsx(X,{"aria-hidden":"true",className:"size-[1.125rem] fill-[--fill-arrow]"})})]}))}));I.displayName="SelectTrigger";const H=({label:t,showLabelAsPlaceholder:a,className:i,children:d})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:T("shrink line-clamp-1 text-[--text] data-[placeholder]:text-[--placeholder] font-[--font-weight]","[&>[slot=description]]:hidden",a&&"text-[--placeholder]",i),children:t}),d]}),D=({className:t,children:a,...i})=>e.jsx(G,{className:j(t,d=>T("w-[var(--trigger-width)] bg-control text-foreground",d)),enableDialog:!1,...i,children:a}),P=({className:t,...a})=>e.jsx(U,{className:j(t,i=>T("max-h-[inherit] [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]",i)),...a}),A=({className:t,triggerRef:a,variant:i,children:d})=>{const[n,o]=l.useState(null),w=l.useCallback(()=>{a.current&&o(a.current.offsetWidth+"px")},[a]);Y({ref:a,onResize:w});const p=l.useMemo(()=>({trigger:"Select",triggerRef:a,placement:"bottom start",style:{"--trigger-width":n}}),[a,n]);return e.jsx(Z.Provider,{value:p,children:e.jsx("div",{"aria-label":"select",className:T(J({variant:i,className:t})),children:d})})};try{I.displayName="SelectTrigger",I.__docgenInfo={description:"",displayName:"SelectTrigger",props:{triggerRef:{defaultValue:null,description:"",name:"triggerRef",required:!0,type:{name:"RefObject<HTMLButtonElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ClassNameObject"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "borderless" | "contrast" | null'}}}}}catch{}const N=({label:t,placeholder:a,description:i,variant:d="default",className:n,items:o,disallowEmptySelection:w,selectedKeys:p,defaultSelectedKeys:F,disabledKeys:g,onSelectionChange:f,idResolver:V,...h})=>{const{children:b,labelResolver:K}=h,R=b?{children:b}:{labelResolver:K},[S,q]=l.useState(!1),u=l.useRef(null),[r,O]=l.useState(p??F??void 0),x=l.useCallback(y=>{q(y)},[]),E=l.useCallback(y=>{O(y==="all"?new Set(o.keys()):y);const c=o.filter(m=>y==="all"?!0:y.has(M(m,V)));f==null||f(c)},[V,o,f]),s=l.useMemo(()=>typeof n=="object"?n:{base:n},[n]);return e.jsxs(A,{triggerRef:u,variant:d,className:s==null?void 0:s.base,children:[t&&e.jsx(B,{children:t}),e.jsx(I,{ref:u,onPress:()=>q(!0),...h,children:e.jsx(H,{label:r!=null&&r.size&&t?t:a,showLabelAsPlaceholder:!(r!=null&&r.size),children:!!(r!=null&&r.size)&&e.jsx(z,{className:"shrink-0 bg-primary text-neutral dark:text-neutral-1000 h-5 min-w-5 px-0 justify-around",children:r==null?void 0:r.size})})}),i&&e.jsxs(C,{className:"flex gap-1 items-center",children:[e.jsx(L,{}),e.jsx(W,{slot:"description",children:i})]}),e.jsx(D,{triggerRef:u,isOpen:S,onOpenChange:x,className:s==null?void 0:s.popover,children:e.jsx(P,{items:o,idResolver:V,selectionMode:"multiple",selectedKeys:p??r,onSelectionChange:E,disallowEmptySelection:w,disabledKeys:g,className:s==null?void 0:s.listbox,...R})})]})};try{N.displayName="MultiSelect",N.__docgenInfo={description:"A select component that displays a collapsible list of options and allows a user to select one or more of them.\n\nBased on `React-aria-components`",displayName:"MultiSelect",props:{onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((selectedItems: T[]) => void)"}},selectedKeys:{defaultValue:null,description:"The currently selected keys in the collection (controlled).",name:"selectedKeys",required:!1,type:{name:"Set<Key>"}},defaultSelectedKeys:{defaultValue:null,description:"The initial selected keys in the collection (uncontrolled).",name:"defaultSelectedKeys",required:!1,type:{name:"Set<Key>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ClassNameObject"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},disallowEmptySelection:{defaultValue:null,description:"",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},name:{defaultValue:null,description:"The name of the input, used when submitting an HTML form.",name:"name",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).",name:"autoComplete",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Temporary text that occupies the text input when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"((value: Key) => true | ValidationError | null)"}},selectedKey:{defaultValue:null,description:"The currently selected key in the collection (controlled).",name:"selectedKey",required:!1,type:{name:"Key | null"}},defaultSelectedKey:{defaultValue:null,description:"The initial selected key in the collection (uncontrolled).",name:"defaultSelectedKey",required:!1,type:{name:"Key"}},isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:'"default" | "borderless" | "contrast" | null'}},children:{defaultValue:null,description:"Function that will be called with an item as the first argument and an object with extra props for the underlying ListBoxItem as the second argument. It must return a ReactNode.",name:"children",required:!1,type:{name:'ResolverFunctionWithProps<T, ReactNode, Omit<ListBoxItemProps<object>, "id" | "value" | "textValue">>'}},labelResolver:{defaultValue:null,description:`Field to use as the item label, defaults to result of the "itemId" resolution.<br/>
If a function is provided, it will be called with an item as the first argument and an object with extra props for the underlying ListBoxItem as the second argument. It must return a ReactNode.`,name:"labelResolver",required:!1,type:{name:'string | number | symbol | ResolverFunctionWithProps<T, ReactNode, Omit<ListBoxItemProps<object>, "id" | "value" | "textValue">>'}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},idResolver:{defaultValue:null,description:`Field to use as the item id, defaults to "id".<br/>
If a function is provided, it will be called with an item as the first argument. It must return a string.`,name:"idResolver",required:!1,type:{name:"string | number | symbol | ResolverFunction<T, string>"}}}}}catch{}const te=(t,a)=>t?new Set([t]):a?new Set([a]):void 0,_=({label:t,placeholder:a,description:i,variant:d="default",className:n,items:o,disallowEmptySelection:w,selectedKey:p,defaultSelectedKey:F,onSelectionChange:g,idResolver:f,...V})=>{const{children:h,labelResolver:b}=V,K=h?{children:h}:{labelResolver:b},[R,S]=l.useState(!1),q=l.useRef(null),[u,r]=l.useState(te(p,F)),[O,x]=l.useState(),E=l.useCallback(m=>{S(m)},[]),s=l.useCallback(m=>{const v=o.filter($=>m==="all"?!0:m.has(M($,f)));return v.length?x(h?h(v[0],{}):b?Q(v[0],{},b):M(v[0],"id")):x(void 0),v[0]},[h,f,o,b]),y=l.useCallback(m=>{S(!1),r(m==="all"?new Set(o.keys()):m);const v=s(m);g==null||g(v)},[s,o,g]);l.useEffect(()=>{u&&s(u)},[s,u]);const c=l.useMemo(()=>typeof n=="object"?n:{base:n},[n]);return e.jsxs(A,{triggerRef:q,variant:d,className:c==null?void 0:c.base,children:[t&&e.jsx(B,{children:t}),e.jsx(I,{ref:q,onPress:()=>S(!0),...V,children:e.jsx(H,{label:O??a,showLabelAsPlaceholder:!(u!=null&&u.size)})}),i&&e.jsxs(C,{className:"flex gap-1 items-center",children:[e.jsx(L,{}),e.jsx(W,{slot:"description",children:i})]}),e.jsx(D,{triggerRef:q,isOpen:R,onOpenChange:E,className:c==null?void 0:c.popover,children:e.jsx(P,{items:o,idResolver:f,selectionMode:"single",selectedKeys:p?[p]:u,disallowEmptySelection:w,onSelectionChange:y,className:c==null?void 0:c.listbox,...K})})]})};try{_.displayName="SingleSelect",_.__docgenInfo={description:"A select component that displays a collapsible list of options and allows a user to select one of them.\n\nBased on `React-aria-components`",displayName:"SingleSelect",props:{onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((selectedItem: T) => void)"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ClassNameObject"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},disallowEmptySelection:{defaultValue:null,description:"",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},name:{defaultValue:null,description:"The name of the input, used when submitting an HTML form.",name:"name",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).",name:"autoComplete",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Temporary text that occupies the text input when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"((value: Key) => true | ValidationError | null)"}},selectedKey:{defaultValue:null,description:"The currently selected key in the collection (controlled).",name:"selectedKey",required:!1,type:{name:"Key | null"}},defaultSelectedKey:{defaultValue:null,description:"The initial selected key in the collection (uncontrolled).",name:"defaultSelectedKey",required:!1,type:{name:"Key"}},isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:'"default" | "borderless" | "contrast" | null'}},children:{defaultValue:null,description:"Function that will be called with an item as the first argument and an object with extra props for the underlying ListBoxItem as the second argument. It must return a ReactNode.",name:"children",required:!1,type:{name:'ResolverFunctionWithProps<T, ReactNode, Omit<ListBoxItemProps<object>, "id" | "value" | "textValue">>'}},labelResolver:{defaultValue:null,description:`Field to use as the item label, defaults to result of the "itemId" resolution.<br/>
If a function is provided, it will be called with an item as the first argument and an object with extra props for the underlying ListBoxItem as the second argument. It must return a ReactNode.`,name:"labelResolver",required:!1,type:{name:'string | number | symbol | ResolverFunctionWithProps<T, ReactNode, Omit<ListBoxItemProps<object>, "id" | "value" | "textValue">>'}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},idResolver:{defaultValue:null,description:`Field to use as the item id, defaults to "id".<br/>
If a function is provided, it will be called with an item as the first argument. It must return a string.`,name:"idResolver",required:!1,type:{name:"string | number | symbol | ResolverFunction<T, string>"}}}}}catch{}const ae=t=>t.selectionMode==="multiple",k=t=>ae(t)?e.jsx(N,{...t}):e.jsx(_,{...t});try{k.displayName="Select",k.__docgenInfo={description:"A select component that displays a collapsible list of options and allows a user to select one of them.\n\nBased on `React-aria-components`",displayName:"Select",props:{selectionMode:{defaultValue:null,description:"",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((selectedItem: T) => void) | ((selectedItems: T[]) => void)"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ClassNameObject"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},disallowEmptySelection:{defaultValue:null,description:"",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},name:{defaultValue:null,description:"The name of the input, used when submitting an HTML form.",name:"name",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).",name:"autoComplete",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Temporary text that occupies the text input when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"((value: Key) => true | ValidationError | null)"}},selectedKey:{defaultValue:null,description:"The currently selected key in the collection (controlled).",name:"selectedKey",required:!1,type:{name:"Key | null"}},defaultSelectedKey:{defaultValue:null,description:"The initial selected key in the collection (uncontrolled).",name:"defaultSelectedKey",required:!1,type:{name:"Key"}},isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "borderless" | "contrast" | null'}},children:{defaultValue:null,description:"Function that will be called with an item as the first argument and an object with extra props for the underlying ListBoxItem as the second argument. It must return a ReactNode.",name:"children",required:!1,type:{name:'ResolverFunctionWithProps<T, ReactNode, Omit<ListBoxItemProps<object>, "id" | "value" | "textValue">>'}},labelResolver:{defaultValue:null,description:`Field to use as the item label, defaults to result of the "itemId" resolution.<br/>
If a function is provided, it will be called with an item as the first argument and an object with extra props for the underlying ListBoxItem as the second argument. It must return a ReactNode.`,name:"labelResolver",required:!1,type:{name:'string | number | symbol | ResolverFunctionWithProps<T, ReactNode, Omit<ListBoxItemProps<object>, "id" | "value" | "textValue">>'}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},idResolver:{defaultValue:null,description:`Field to use as the item id, defaults to "id".<br/>
If a function is provided, it will be called with an item as the first argument. It must return a string.`,name:"idResolver",required:!1,type:{name:"string | number | symbol | ResolverFunction<T, string>"}},selectedKeys:{defaultValue:null,description:"The currently selected keys in the collection (controlled).",name:"selectedKeys",required:!1,type:{name:"Set<Key>"}},defaultSelectedKeys:{defaultValue:null,description:"The initial selected keys in the collection (uncontrolled).",name:"defaultSelectedKeys",required:!1,type:{name:"Set<Key>"}}}}}catch{}export{k as S};
