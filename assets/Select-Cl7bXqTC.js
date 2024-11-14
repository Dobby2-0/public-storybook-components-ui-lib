import{j as u}from"./jsx-runtime-Cw0GR0a5.js";import{c as x}from"./index-DEHCCq9W.js";import"./SVpyu8SL-kb1JahyB.js";import{s as N}from"./KeyboardArrowDown-BIpZZpcG.js";import{o as z}from"./Info-Dq1_dlTC.js";import{c as A}from"./index-Bb4qSo10.js";import{a as L,$ as U}from"./Button-CoFn26zJ.js";import{k as C,d as B,e as G,q as J,v as Q,w as X,f as k,x as M,h as Y,y as Z,u as ee,i as T,z as te,a as q}from"./useFocusRing-COlWfXo5.js";import{$ as ae,a as le,b as ie,c as re}from"./FieldError-mOHOEFEk.js";import{a as ne,$ as se,b as oe}from"./Form-_FoLAR_T.js";import{$ as de}from"./intlStrings-ZMTSFH_M.js";import{c as ce,d as ue}from"./ListBox-CO8fSrKd.js";import{d as fe,e as me,f as pe,g as be}from"./Dialog-C3i89GLb.js";import{a as j,b as he}from"./Text-DmzI781W.js";import{b as ve}from"./Collection-CA0OIEZf.js";import{r as f,R as b}from"./index-CTjT7uj6.js";import{$ as $e}from"./useSingleSelectListState-WiA2AzUx.js";import{$ as ye,a as ge}from"./DragAndDrop-Msm58r93.js";import{c as xe}from"./SelectionManager-B2MAkms-.js";import{$ as Pe}from"./useMenuTrigger-DX8xHMzw.js";import{$ as Se}from"./useFormReset-Dk63eIg3.js";import{a as qe}from"./VisuallyHidden-D6MjpNXd.js";import{$ as we}from"./useLocalizedStringFormatter-CfLVTgOs.js";import{L as Ve}from"./ListBox-BI-ncvZP.js";import{a as Ke}from"./Popover-Jhy2Mjt3.js";const O=new WeakMap;function Fe(e,t,a){let{keyboardDelegate:l,isDisabled:n,isRequired:o,name:i,validationBehavior:r="aria"}=e,d=ye({usage:"search",sensitivity:"base"}),c=f.useMemo(()=>l||new ge(t.collection,t.disabledKeys,null,d),[l,t.collection,t.disabledKeys,d]),{menuTriggerProps:s,menuProps:h}=Pe({isDisabled:n,type:"listbox"},t,a),p=m=>{switch(m.key){case"ArrowLeft":{m.preventDefault();let y=t.selectedKey!=null?c.getKeyAbove(t.selectedKey):c.getFirstKey();y&&t.setSelectedKey(y);break}case"ArrowRight":{m.preventDefault();let y=t.selectedKey!=null?c.getKeyBelow(t.selectedKey):c.getFirstKey();y&&t.setSelectedKey(y);break}}},{typeSelectProps:$}=xe({keyboardDelegate:c,selectionManager:t.selectionManager,onTypeSelect(m){t.setSelectedKey(m)}}),{isInvalid:P,validationErrors:w,validationDetails:K}=t.displayValidation,{labelProps:F,fieldProps:S,descriptionProps:g,errorMessageProps:D}=ae({...e,labelElementType:"span",isInvalid:P,errorMessage:e.errorMessage||w});$.onKeyDown=$.onKeyDownCapture,delete $.onKeyDownCapture;let R=C(e,{labelable:!0}),v=B($,s,S),V=G();return O.set(t,{isDisabled:n,isRequired:o,name:i,validationBehavior:r}),{labelProps:{...F,onClick:()=>{e.isDisabled||(a.current.focus(),J("keyboard"))}},triggerProps:B(R,{...v,isDisabled:n,onKeyDown:Q(v.onKeyDown,p,e.onKeyDown),onKeyUp:e.onKeyUp,"aria-labelledby":[V,v["aria-labelledby"],v["aria-label"]&&!v["aria-labelledby"]?v.id:null].filter(Boolean).join(" "),onFocus(m){t.isFocused||(e.onFocus&&e.onFocus(m),e.onFocusChange&&e.onFocusChange(!0),t.setFocused(!0))},onBlur(m){t.isOpen||(e.onBlur&&e.onBlur(m),e.onFocusChange&&e.onFocusChange(!1),t.setFocused(!1))}}),valueProps:{id:V},menuProps:{...h,autoFocus:t.focusStrategy||!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,disallowEmptySelection:!0,linkBehavior:"selection",onBlur:m=>{m.currentTarget.contains(m.relatedTarget)||(e.onBlur&&e.onBlur(m),e.onFocusChange&&e.onFocusChange(!1),t.setFocused(!1))},"aria-labelledby":[S["aria-labelledby"],v["aria-label"]&&!S["aria-labelledby"]?v.id:null].filter(Boolean).join(" ")},descriptionProps:g,errorMessageProps:D,isInvalid:P,validationErrors:w,validationDetails:K}}function De(e,t,a){let l=O.get(t)||{},{autoComplete:n,name:o=l.name,isDisabled:i=l.isDisabled}=e,{validationBehavior:r,isRequired:d}=l,c=X(),{visuallyHiddenProps:s}=qe();Se(e.selectRef,t.selectedKey,t.setSelectedKey),ne({validationBehavior:r,focus:()=>a.current.focus()},t,e.selectRef);var h;return{containerProps:{...s,"aria-hidden":!0,"data-react-aria-prevent-focus":!0,"data-a11y-ignore":"aria-hidden-focus"},inputProps:{type:"text",tabIndex:c==null||t.isFocused||t.isOpen?-1:0,style:{fontSize:16},onFocus:()=>a.current.focus(),disabled:i},selectProps:{tabIndex:-1,autoComplete:n,disabled:i,required:r==="native"&&d,name:o,value:(h=t.selectedKey)!==null&&h!==void 0?h:"",onChange:p=>t.setSelectedKey(p.target.value)}}}function Re(e){let{state:t,triggerRef:a,label:l,name:n,isDisabled:o}=e,i=f.useRef(null),{containerProps:r,inputProps:d,selectProps:c}=De({...e,selectRef:i},t,a);var s;return t.collection.size<=300?b.createElement("div",{...r,"data-testid":"hidden-select-container"},b.createElement("input",d),b.createElement("label",null,l,b.createElement("select",{...c,ref:i},b.createElement("option",null),[...t.collection.getKeys()].map(h=>{let p=t.collection.getItem(h);if(p.type==="item")return b.createElement("option",{key:p.key,value:p.key},p.textValue)})))):n?b.createElement("input",{type:"hidden",autoComplete:c.autoComplete,name:n,disabled:o,value:(s=t.selectedKey)!==null&&s!==void 0?s:""}):null}function Ce(e){let t=fe(e),[a,l]=f.useState(null),n=$e({...e,onSelectionChange:d=>{e.onSelectionChange!=null&&e.onSelectionChange(d),t.close(),o.commitValidation()}}),o=se({...e,value:n.selectedKey}),[i,r]=f.useState(!1);return{...o,...n,...t,focusStrategy:a,open(d=null){n.collection.size!==0&&(l(d),t.open())},toggle(d=null){n.collection.size!==0&&(l(d),t.toggle())},isFocused:i,setFocused:r}}function Ie(e){return e&&e.__esModule?e.default:e}const I=f.createContext(null),H=f.createContext(null);function _e(e,t){[e,t]=k(e,t,I);let{children:a,isDisabled:l=!1,isInvalid:n=!1,isRequired:o=!1}=e,i=f.useMemo(()=>typeof a=="function"?a({isOpen:!1,isDisabled:l,isInvalid:n,isRequired:o,isFocused:!1,isFocusVisible:!1,defaultChildren:null}):a,[a,l,n,o]);return b.createElement(ve,{content:i},r=>b.createElement(Be,{props:e,collection:r,selectRef:t}))}function Be({props:e,selectRef:t,collection:a}){let{validationBehavior:l}=M(oe)||{};var n,o;let i=(o=(n=e.validationBehavior)!==null&&n!==void 0?n:l)!==null&&o!==void 0?o:"native",r=Ce({...e,collection:a,children:void 0,validationBehavior:i}),{isFocusVisible:d,focusProps:c}=Y({within:!0}),s=f.useRef(null),[h,p]=Z(),{labelProps:$,triggerProps:P,valueProps:w,menuProps:K,descriptionProps:F,errorMessageProps:S,...g}=Fe({...ee(e),label:p,validationBehavior:i},r,s),[D,R]=f.useState(null),v=f.useCallback(()=>{s.current&&R(s.current.offsetWidth+"px")},[s]);me({ref:s,onResize:v});let V=f.useMemo(()=>({isOpen:r.isOpen,isFocused:r.isFocused,isFocusVisible:d,isDisabled:e.isDisabled||!1,isInvalid:g.isInvalid||!1,isRequired:e.isRequired||!1}),[r.isOpen,r.isFocused,d,e.isDisabled,g.isInvalid,e.isRequired]),m=T({...e,values:V,defaultClassName:"react-aria-Select"}),y=C(e);delete y.id;let _=f.useRef(null);return b.createElement(te,{values:[[I,e],[H,r],[W,w],[le,{...$,ref:h,elementType:"span"}],[L,{...P,ref:s,isPressed:r.isOpen}],[pe,r],[be,{trigger:"Select",triggerRef:s,scrollRef:_,placement:"bottom start",style:{"--trigger-width":D}}],[ce,{...K,ref:_}],[ue,r],[j,{slots:{description:F,errorMessage:S}}],[ie,g]]},b.createElement("div",{...y,...m,...c,ref:t,slot:e.slot||void 0,"data-focused":r.isFocused||void 0,"data-focus-visible":d||void 0,"data-open":r.isOpen||void 0,"data-disabled":e.isDisabled||void 0,"data-invalid":g.isInvalid||void 0,"data-required":e.isRequired||void 0}),b.createElement(Re,{state:r,triggerRef:s,label:p,name:e.name,isDisabled:e.isDisabled}))}const Ee=f.forwardRef(_e),W=f.createContext(null);function ke(e,t){var a,l;[e,t]=k(e,t,W);let n=f.useContext(H),{placeholder:o}=M(I),i=n.selectedKey!=null?n.collection.getItem(n.selectedKey):null,r=i==null?void 0:i.props.children;typeof r=="function"&&(r=r({isHovered:!1,isPressed:!1,isSelected:!1,isFocused:!1,isFocusVisible:!1,isDisabled:!1,selectionMode:"single",selectionBehavior:"toggle"}));let d=we(Ie(de),"react-aria-components");var c,s,h;let p=T({...e,defaultChildren:(c=r??o)!==null&&c!==void 0?c:d.format("selectPlaceholder"),defaultClassName:"react-aria-SelectValue",values:{selectedItem:(s=(a=n.selectedItem)===null||a===void 0?void 0:a.value)!==null&&s!==void 0?s:null,selectedText:(h=(l=n.selectedItem)===null||l===void 0?void 0:l.textValue)!==null&&h!==void 0?h:null,isPlaceholder:!i}}),$=C(e);return b.createElement("span",{ref:t,...$,...p,"data-placeholder":!i||void 0},b.createElement(j.Provider,{value:void 0},p.children))}const Me=f.forwardRef(ke),Te=A(["group flex flex-col gap-1.5 w-36"],{variants:{variant:{default:"[--bg-select-trigger:hsl(var(--control))] [--border-select-trigger:hsl(var(--neutral-200))] [--text-select:hsl(var(--foreground))] [--placeholder-select:hsl(var(--neutral-600))] [--fill-select-arrow:hsl(var(--neutral-800))] [--font-weight-select:400]",contrast:"[--bg-select-trigger:hsl(var(--neutral-100))] [--border-select-trigger:hsl(var(--neutral-100))] [--text-select:hsl(var(--brand-blue))] dark:[--text-select:hsl(var(--foreground))] [--placeholder-select:hsl(var(--brand-blue))] dark:[--placeholder-select:hsl(var(--neutral-600))] [--fill-select-arrow:hsl(var(--brand-blue))] dark:[--fill-select-arrow:hsl(var(--foreground))] [--font-weight-select:500]"}},defaultVariants:{variant:"default"}}),je=({className:e,...t})=>u.jsx(Me,{className:q(e,a=>x("line-clamp-1 text-[--text-select] data-[placeholder]:text-[--placeholder-select] font-[--font-weight-select]","[&>[slot=description]]:hidden",a)),...t}),Oe=({className:e,children:t,...a})=>u.jsx(U,{className:q(e,l=>x("flex h-8 w-full items-center justify-between whitespace-nowrap rounded-sm border border-[--border-select-trigger] bg-[--bg-select-trigger] px-2.5 py-1 text-sm","data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50","data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring","focus-visible:outline-none",l)),...a,children:q(t,l=>u.jsxs(u.Fragment,{children:[l,u.jsx(N,{"aria-hidden":"true",className:"ml-3 size-[1.125rem] fill-[--fill-select-arrow]"})]}))}),He=({className:e,children:t,...a})=>u.jsx(Ke,{className:q(e,l=>x("w-[var(--trigger-width)] bg-control text-foreground",l)),enableDialog:!1,...a,children:t}),We=({className:e,...t})=>u.jsx(Ve,{className:q(e,a=>x("max-h-[inherit] [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]",a)),...t}),E=({label:e,description:t,variant:a="default",className:l,items:n,...o})=>{const i=typeof l=="object"?l:{base:l};return u.jsxs(Ee,{"aria-label":"select",className:x(Te({variant:a,className:i==null?void 0:i.base})),...o,children:[e&&u.jsx(re,{className:x("text-sm font-medium leading-none text-neutral-800","data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70","group-data-[invalid]:text-error-hover"),children:e}),u.jsx(Oe,{children:u.jsx(je,{})}),t&&u.jsxs("div",{className:"flex gap-1 items-center text-sm text-neutral-600",children:[u.jsx(z,{}),u.jsx(he,{slot:"description",children:t})]}),u.jsx(He,{className:i==null?void 0:i.popover,children:u.jsx(We,{items:n,className:i==null?void 0:i.listbox})})]})};try{E.displayName="Select",E.__docgenInfo={description:"A select component that displays a collapsible list of options and allows a user to select one of them.\n\nBased on `React-aria-components`",displayName:"Select",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:'Omit<ListItemWithId, "children">[]'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ClassNameObject"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: SelectRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"The name of the input, used when submitting an HTML form.",name:"name",required:!1,type:{name:"string"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"((value: Key) => true | ValidationError | null)"}},placeholder:{defaultValue:null,description:"Temporary text that occupies the text input when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((key: Key) => void)"}},selectedKey:{defaultValue:null,description:"The currently selected key in the collection (controlled).",name:"selectedKey",required:!1,type:{name:"Key | null"}},defaultSelectedKey:{defaultValue:null,description:"The initial selected key in the collection (uncontrolled).",name:"defaultSelectedKey",required:!1,type:{name:"Key"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).",name:"autoComplete",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:'"default" | "contrast" | null'}}}}}catch{}export{E as S};
