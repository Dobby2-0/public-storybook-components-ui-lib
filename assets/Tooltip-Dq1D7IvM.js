import{j as m}from"./jsx-runtime-DR9Q75dM.js";import{P as _}from"./Popover-Dw_TTaSS.js";import{c as w}from"./index-DbF_LCtC.js";import{$ as I,p as W,j as q,c as P,e as A,A as L,B as M,w as k,i as F,y as H,h as z,z as U,l as K,a as Q}from"./useFocusRing-BFZpF-6e.js";import{h as Y,k as G,l as J,a as X}from"./Dialog-zzYE7tgT.js";import{$ as Z,a as ee}from"./useFocusable-DalZOgzL.js";import{R as s,r as i}from"./index-DRjF_FHU.js";import{F as te}from"./index-rX-Bn4lm.js";import{u as ae}from"./index-qv0nXmIi.js";const E=s.createContext(null);function ne(e){let{children:t}=e,a=i.useContext(E),[r,l]=i.useState(0),d=i.useMemo(()=>({parent:a,modalCount:r,addModal(){l(o=>o+1),a&&a.addModal()},removeModal(){l(o=>o-1),a&&a.removeModal()}}),[a,r]);return s.createElement(E.Provider,{value:d},t)}function re(){let e=i.useContext(E);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:void 0}}}function oe(e){let{modalProviderProps:t}=re();return s.createElement("div",{"data-overlay-container":!0,...e,...t})}function le(e){return s.createElement(ne,null,s.createElement(oe,e))}function ie(e){let t=I(),{portalContainer:a=t?null:document.body,...r}=e;if(s.useEffect(()=>{if(a!=null&&a.closest("[data-overlay-container]"))throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[a]),!a)return null;let l=s.createElement(le,r);return te.createPortal(l,a)}function de(e,t){let a=W(e,{labelable:!0}),{hoverProps:r}=q({onHoverStart:()=>t==null?void 0:t.open(!0),onHoverEnd:()=>t==null?void 0:t.close()});return{tooltipProps:P(a,r,{role:"tooltip"})}}function se(e,t,a){let{isDisabled:r,trigger:l}=e,d=A(),o=i.useRef(!1),n=i.useRef(!1),f=()=>{(o.current||n.current)&&t.open(n.current)},u=y=>{!o.current&&!n.current&&t.close(y)};i.useEffect(()=>{let y=C=>{a&&a.current&&C.key==="Escape"&&(C.stopPropagation(),t.close(!0))};if(t.isOpen)return document.addEventListener("keydown",y,!0),()=>{document.removeEventListener("keydown",y,!0)}},[a,t]);let $=()=>{l!=="focus"&&(L()==="pointer"?o.current=!0:o.current=!1,f())},v=()=>{l!=="focus"&&(n.current=!1,o.current=!1,u())},g=()=>{n.current=!1,o.current=!1,u(!0)},T=()=>{M()&&(n.current=!0,f())},c=()=>{n.current=!1,o.current=!1,u(!0)},{hoverProps:j}=q({isDisabled:r,onHoverStart:$,onHoverEnd:v}),{focusableProps:B}=Z({isDisabled:r,onFocus:T,onBlur:c},a);return{triggerProps:{"aria-describedby":t.isOpen?d:void 0,...P(B,j,{onPointerDown:g,onKeyDown:g})},tooltipProps:{id:d}}}const ue=1500,R=500;let h={},ce=0,x=!1,p=null,b=null;function S(e={}){let{delay:t=ue,closeDelay:a=R}=e,{isOpen:r,open:l,close:d}=Y(e),o=i.useMemo(()=>`${++ce}`,[]),n=i.useRef(null),f=i.useRef(d),u=()=>{h[o]=g},$=()=>{for(let c in h)c!==o&&(h[c](!0),delete h[c])},v=()=>{n.current&&clearTimeout(n.current),n.current=null,$(),u(),x=!0,l(),p&&(clearTimeout(p),p=null),b&&(clearTimeout(b),b=null)},g=c=>{c||a<=0?(n.current&&clearTimeout(n.current),n.current=null,f.current()):n.current||(n.current=setTimeout(()=>{n.current=null,f.current()},a)),p&&(clearTimeout(p),p=null),x&&(b&&clearTimeout(b),b=setTimeout(()=>{delete h[o],b=null,x=!1},Math.max(R,a)))},T=()=>{$(),u(),!r&&!p&&!x?p=setTimeout(()=>{p=null,x=!0,v()},t):r||v()};return i.useEffect(()=>{f.current=d},[d]),i.useEffect(()=>()=>{n.current&&clearTimeout(n.current),h[o]&&delete h[o]},[o]),{isOpen:r,open:c=>{!c&&t>0&&!n.current?T():v()},close:g}}const O=i.createContext(null),N=i.createContext(null);function fe(e){let t=S(e),a=i.useRef(null),{triggerProps:r,tooltipProps:l}=se(e,t,a);return s.createElement(k,{values:[[O,t],[N,{...l,triggerRef:a}]]},s.createElement(ee,{...r,ref:a},e.children))}function pe({UNSTABLE_portalContainer:e,...t},a){[t,a]=F(t,a,N);let r=i.useContext(O),l=S(t),d=t.isOpen!=null||t.defaultOpen!=null||!r?l:r,o=H(a,d.isOpen)||t.isExiting||!1;return!d.isOpen&&!o?null:s.createElement(ie,{portalContainer:e},s.createElement(he,{...t,tooltipRef:a,isExiting:o}))}const me=i.forwardRef(pe);function he(e){let t=i.useContext(O),a=i.useRef(null),[r,l]=i.useState(0);z(()=>{a.current&&t.isOpen&&l(a.current.getBoundingClientRect().width)},[t.isOpen,a]);let{overlayProps:d,arrowProps:o,placement:n}=G({placement:e.placement||"top",targetRef:e.triggerRef,overlayRef:e.tooltipRef,offset:e.offset,crossOffset:e.crossOffset,isOpen:t.isOpen,arrowSize:r,arrowBoundaryOffset:e.arrowBoundaryOffset,shouldFlip:e.shouldFlip,onClose:()=>t.close(!0)}),f=U(e.tooltipRef,!!n)||e.isEntering||!1,u=K({...e,defaultClassName:"react-aria-Tooltip",values:{placement:n,isEntering:f,isExiting:e.isExiting,state:t}});e=P(e,d);let{tooltipProps:$}=de(e,t);return s.createElement("div",{...$,ref:e.tooltipRef,...u,style:{...d.style,...u.style},"data-placement":n??void 0,"data-entering":f||void 0,"data-exiting":e.isExiting||void 0},s.createElement(J.Provider,{value:{...o,placement:n,ref:a}},u.children))}const D=w("group z-50 rounded-md px-1.5 text-xs animate-in fade-in-0 fill-neutral-900 dark:fill-neutral-200","bg-neutral-900 dark:bg-neutral-200 text-info-hover-foreground","data-[entering]:zoom-in-95","data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95","data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2"),be=({className:e,offset:t=7,overlayArrow:a,children:r,...l})=>m.jsxs(me,{offset:t,className:Q(e,d=>w(D,"px-3 py-1.5",d)),...l,children:[a&&m.jsx(X,{children:m.jsx("div",{className:w("group-data-[entering]:animate-in group-data-[entering]:fade-in-0 group-data-[entering]:zoom-in-0","group-data-[placement=top]:rotate-180 group-data-[placement=left]:rotate-90 group-data-[placement=right]:-rotate-90"),children:m.jsx("svg",{className:"fill-inherit",width:12,height:12,viewBox:"0 0 12 12",children:m.jsx("path",{d:"M0 12 L6 6 L12 12"})})})}),r]}),V=({children:e,content:t,overlayArrow:a=!0,asPopoverOnTouchScreen:r=!1,...l})=>{const d=ae("(hover: none)");return r&&d?m.jsx(_,{placement:"top",content:t,overlayArrow:a,...l,className:D,children:e}):m.jsxs(fe,{delay:500,closeDelay:300,children:[e,m.jsx(be,{overlayArrow:a,...l,children:t})]})};try{V.displayName="Tooltip",V.__docgenInfo={description:"A tooltip displays a description of an element on hover or focus.\n\nBased on `react-aria-components`",displayName:"Tooltip",props:{content:{defaultValue:null,description:"Content to be displayed in the tooltip element",name:"content",required:!0,type:{name:"ReactNode"}},overlayArrow:{defaultValue:{value:"true"},description:"Should an arrow be added to the tooltip pointing towards the trigger",name:"overlayArrow",required:!1,type:{name:"boolean"}},asPopoverOnTouchScreen:{defaultValue:{value:"false"},description:`Render the component as a Popover instead to support touch screen devices.
Clicking the trigger will both open the popover and fire any press/click events registered on the trigger.`,name:"asPopoverOnTouchScreen",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: TooltipRenderProps & { defaultClassName: string; }) => string)"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},offset:{defaultValue:{value:"7"},description:`The additional offset applied along the main axis between the element and its
anchor element.`,name:"offset",required:!1,type:{name:"number"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},isOpen:{defaultValue:null,description:"Whether the element is rendered.",name:"isOpen",required:!1,type:{name:"boolean"}},isEntering:{defaultValue:null,description:"Whether the tooltip is currently performing an entry animation.",name:"isEntering",required:!1,type:{name:"boolean"}},isExiting:{defaultValue:null,description:"Whether the tooltip is currently performing an exit animation.",name:"isExiting",required:!1,type:{name:"boolean"}},UNSTABLE_portalContainer:{defaultValue:{value:"document.body"},description:"The container element in which the overlay portal will be placed. This may have unknown behavior depending on where it is portalled to.",name:"UNSTABLE_portalContainer",required:!1,type:{name:"Element"}},containerPadding:{defaultValue:{value:"12"},description:`The placement padding that should be applied between the element and its
surrounding container.`,name:"containerPadding",required:!1,type:{name:"number"}},placement:{defaultValue:{value:"'top'"},description:"The placement of the tooltip with respect to the trigger.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"bottom left"'},{value:'"bottom right"'},{value:'"bottom start"'},{value:'"bottom end"'},{value:'"top left"'},{value:'"top right"'},{value:'"top start"'},{value:'"top end"'},{value:'"left top"'},{value:'"left bottom"'},{value:'"start top"'},{value:'"start bottom"'},{value:'"right top"'},{value:'"right bottom"'},{value:'"end top"'},{value:'"end bottom"'}]}},crossOffset:{defaultValue:{value:"0"},description:`The additional offset applied along the cross axis between the element and its
anchor element.`,name:"crossOffset",required:!1,type:{name:"number"}},shouldFlip:{defaultValue:{value:"true"},description:`Whether the element should flip its orientation (e.g. top to bottom or left to right) when
there is insufficient room for it to render completely.`,name:"shouldFlip",required:!1,type:{name:"boolean"}},triggerRef:{defaultValue:null,description:`The ref for the element which the tooltip positions itself with respect to.

When used within a TooltipTrigger this is set automatically. It is only required when used standalone.`,name:"triggerRef",required:!1,type:{name:"RefObject<Element | null>"}},arrowBoundaryOffset:{defaultValue:{value:"0"},description:"The minimum distance the arrow's edge should be from the edge of the overlay element.",name:"arrowBoundaryOffset",required:!1,type:{name:"number"}}}}}catch{}export{V as T};
