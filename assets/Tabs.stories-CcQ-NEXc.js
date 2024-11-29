import{j as b}from"./jsx-runtime-DR9Q75dM.js";import{u as ne,D as ie}from"./DropdownMenu-B69azdip.js";import{c as T}from"./index-DbF_LCtC.js";import{i as re}from"./Check-f6fs0czz.js";import{r as d,R as h,c as D,g as se}from"./index-DRjF_FHU.js";import{c as oe,b as le,a as X,d as de,f as ce}from"./Collection-DBqu8l_V.js";import{n as F,d as w,e as ue,s as k,h as z,g as fe,i as I,f as be,y as J,w as me}from"./useFocusRing-COHXKEhw.js";import{$ as pe}from"./Hidden-CbCJUow4.js";import{a as he}from"./usePress-CEEQ2DfS.js";import{f as ye,d as $e}from"./SelectionManager-D9wyy2zQ.js";import{$ as Q}from"./useLabels-BGJSVpoH.js";import{$ as ve}from"./useHasTabbableChild-C_9zlhgH.js";import{$ as ge}from"./context-NQqpI-UJ.js";import{$ as xe}from"./useSingleSelectListState-BEB8k-UX.js";import{P as Pe}from"./Pill-CP8P5UDN.js";import"./index-C9umSHi1.js";import"./ChevronForward-Apw6tIHa.js";import"./KeyboardArrowDown-Dio4eISq.js";import"./index-C8hS7n0Q.js";import"./index-uWwxbAOW.js";import"./FocusScope-Cyqu5Mq1.js";import"./isScrollable-BSEN4xi5.js";import"./useControlledState-uSQY0H5C.js";import"./useListState-AUKOQrqC.js";import"./Close-a0dMVUhZ.js";import"./index-Bb4qSo10.js";const Y=new WeakMap;function C(e,t,a){return e?(typeof t=="string"&&(t=t.replace(/\s+/g,"")),`${Y.get(e)}-${a}-${t}`):""}function Se(e,t,a){let{key:n,isDisabled:r,shouldSelectOnPressUp:s}=e,{selectionManager:i,selectedKey:o}=t,l=n===o,c=r||t.isDisabled||t.selectionManager.isDisabled(n),{itemProps:u,isPressed:m}=ye({selectionManager:i,key:n,ref:a,isDisabled:c,shouldSelectOnPressUp:s,linkBehavior:"selection"}),p=C(t,n,"tab"),$=C(t,n,"tabpanel"),{tabIndex:P}=u,y=t.collection.getItem(n),S=F(y==null?void 0:y.props,{labelable:!0});delete S.id;let g=he(y==null?void 0:y.props);return{tabProps:w(S,g,u,{id:p,"aria-selected":l,"aria-disabled":c||void 0,"aria-controls":l?$:void 0,tabIndex:c?void 0:P,role:"tab"}),isSelected:l,isDisabled:c,isPressed:m}}function Ke(e,t,a){let n=ve(a)?void 0:0;var r;const s=C(t,(r=e.id)!==null&&r!==void 0?r:t==null?void 0:t.selectedKey,"tabpanel"),i=Q({...e,id:s,"aria-labelledby":C(t,t==null?void 0:t.selectedKey,"tab")});return{tabPanelProps:w(i,{tabIndex:n,role:"tabpanel","aria-describedby":e["aria-describedby"],"aria-details":e["aria-details"]})}}class Te{getKeyLeftOf(t){return this.flipDirection?this.getNextKey(t):this.getPreviousKey(t)}getKeyRightOf(t){return this.flipDirection?this.getPreviousKey(t):this.getNextKey(t)}isDisabled(t){var a,n;return this.disabledKeys.has(t)||!!(!((n=this.collection.getItem(t))===null||n===void 0||(a=n.props)===null||a===void 0)&&a.isDisabled)}getFirstKey(){let t=this.collection.getFirstKey();return t!=null&&this.isDisabled(t)&&(t=this.getNextKey(t)),t}getLastKey(){let t=this.collection.getLastKey();return t!=null&&this.isDisabled(t)&&(t=this.getPreviousKey(t)),t}getKeyAbove(t){return this.tabDirection?null:this.getPreviousKey(t)}getKeyBelow(t){return this.tabDirection?null:this.getNextKey(t)}getNextKey(t){do t=this.collection.getKeyAfter(t),t==null&&(t=this.collection.getFirstKey());while(this.isDisabled(t));return t}getPreviousKey(t){do t=this.collection.getKeyBefore(t),t==null&&(t=this.collection.getLastKey());while(this.isDisabled(t));return t}constructor(t,a,n,r=new Set){this.collection=t,this.flipDirection=a==="rtl"&&n==="horizontal",this.disabledKeys=r,this.tabDirection=n==="horizontal"}}function we(e,t,a){let{orientation:n="horizontal",keyboardActivation:r="automatic"}=e,{collection:s,selectionManager:i,disabledKeys:o}=t,{direction:l}=ge(),c=d.useMemo(()=>new Te(s,l,n,o),[s,o,n,l]),{collectionProps:u}=$e({ref:a,selectionManager:i,keyboardDelegate:c,selectOnFocus:r==="automatic",disallowEmptySelection:!0,scrollRef:a,linkBehavior:"selection"}),m=ue();Y.set(t,m);let p=Q({...e,id:m});return{tabListProps:{...w(u,p),role:"tablist","aria-orientation":n,tabIndex:void 0}}}function De(e){var t,a;let n=xe({...e,suppressTextValueWarning:!0,defaultSelectedKey:(a=(t=e.defaultSelectedKey)!==null&&t!==void 0?t:q(e.collection,e.disabledKeys?new Set(e.disabledKeys):new Set))!==null&&a!==void 0?a:void 0}),{selectionManager:r,collection:s,selectedKey:i}=n,o=d.useRef(i);return d.useEffect(()=>{let l=i;(r.isEmpty||l==null||!s.getItem(l))&&(l=q(s,n.disabledKeys),l!=null&&r.setSelectedKeys([l])),(l!=null&&r.focusedKey==null||!r.isFocused&&l!==o.current)&&r.setFocusedKey(l),o.current=l}),{...n,isDisabled:e.isDisabled||!1}}function q(e,t){let a=null;if(e){var n,r,s,i;for(a=e.getFirstKey();a!=null&&(t.has(a)||!((r=e.getItem(a))===null||r===void 0||(n=r.props)===null||n===void 0)&&n.isDisabled)&&a!==e.getLastKey();)a=e.getKeyAfter(a);a!=null&&(t.has(a)||!((i=e.getItem(a))===null||i===void 0||(s=i.props)===null||s===void 0)&&s.isDisabled)&&a===e.getLastKey()&&(a=e.getFirstKey())}return a}const N=d.createContext(null),x=d.createContext(null);function Ee(e,t){[e,t]=be(e,t,N);let{children:a,orientation:n="horizontal"}=e;return a=d.useMemo(()=>typeof a=="function"?a({orientation:n,defaultChildren:null}):a,[a,n]),h.createElement(le,{content:a},r=>h.createElement(Ce,{props:e,collection:r,tabsRef:t}))}function Ce({props:e,tabsRef:t,collection:a}){let{orientation:n="horizontal"}=e,r=De({...e,collection:a,children:void 0}),{focusProps:s,isFocused:i,isFocusVisible:o}=z({within:!0}),l=d.useMemo(()=>({orientation:n,isFocusWithin:i,isFocusVisible:o}),[n,i,o]),c=I({...e,defaultClassName:"react-aria-Tabs",values:l});return h.createElement("div",{...F(e),...s,...c,ref:t,slot:e.slot||void 0,"data-focused":i||void 0,"data-orientation":n,"data-focus-visible":o||void 0,"data-disabled":r.isDisabled||void 0},h.createElement(J,{values:[[N,e],[x,r]]},c.children))}const je=d.forwardRef(Ee);function Fe(e,t){return d.useContext(x)?h.createElement(Ie,{props:e,forwardedRef:t}):h.createElement(X,e)}function Ie({props:e,forwardedRef:t}){let a=d.useContext(x),{CollectionRoot:n}=d.useContext(de),{orientation:r="horizontal",keyboardActivation:s="automatic"}=me(N),i=k(t),{tabListProps:o}=we({...e,orientation:r,keyboardActivation:s},a,i),l=I({...e,children:null,defaultClassName:"react-aria-TabList",values:{orientation:r,state:a}}),c=F(e);return delete c.id,h.createElement("div",{...c,...o,ref:i,...l,"data-orientation":r||void 0},h.createElement(n,{collection:a.collection,persistedKeys:ce(a.selectionManager.focusedKey)}))}const Ne=d.forwardRef(Fe),Le=oe("item",(e,t,a)=>{let n=d.useContext(x),r=k(t),{tabProps:s,isSelected:i,isDisabled:o,isPressed:l}=Se({key:a.key,...e},n,r),{focusProps:c,isFocused:u,isFocusVisible:m}=z(),{hoverProps:p,isHovered:$}=fe({isDisabled:o,onHoverStart:e.onHoverStart,onHoverEnd:e.onHoverEnd,onHoverChange:e.onHoverChange}),P=I({...e,id:void 0,defaultClassName:"react-aria-Tab",values:{isSelected:i,isDisabled:o,isFocused:u,isFocusVisible:m,isPressed:l,isHovered:$}}),y=a.props.href?"a":"div";return h.createElement(y,{...w(s,c,p,P),ref:r,"data-selected":i||void 0,"data-disabled":o||void 0,"data-focused":u||void 0,"data-focus-visible":m||void 0,"data-pressed":l||void 0,"data-hovered":$||void 0})});function Re(e,t){const a=d.useContext(x);let n=k(t),{tabPanelProps:r}=Ke(e,a,n),{focusProps:s,isFocused:i,isFocusVisible:o}=z(),l=a.selectedKey===e.id,c=I({...e,defaultClassName:"react-aria-TabPanel",values:{isFocused:i,isFocusVisible:o,isInert:!l,state:a}});if(!l&&!e.shouldForceMount)return null;let u=F(e);delete u.id;let m=l?w(u,r,s,c):c;return h.createElement("div",{...m,ref:n,"data-focused":i||void 0,"data-focus-visible":o||void 0,inert:l?void 0:"true","data-inert":l?void 0:"true"},h.createElement(J,{values:[[N,null],[x,null]]},c.children))}const Ve=pe(Re);var Me="Expected a function",W=NaN,ke="[object Symbol]",ze=/^\s+|\s+$/g,Ae=/^[-+]0x[0-9a-f]+$/i,Oe=/^0b[01]+$/i,qe=/^0o[0-7]+$/i,We=parseInt,He=typeof D=="object"&&D&&D.Object===Object&&D,Ue=typeof self=="object"&&self&&self.Object===Object&&self,Be=He||Ue||Function("return this")(),_e=Object.prototype,Ge=_e.toString,Xe=Math.max,Je=Math.min,R=function(){return Be.Date.now()};function Qe(e,t,a){var n,r,s,i,o,l,c=0,u=!1,m=!1,p=!0;if(typeof e!="function")throw new TypeError(Me);t=H(t)||0,M(a)&&(u=!!a.leading,m="maxWait"in a,s=m?Xe(H(a.maxWait)||0,t):s,p="trailing"in a?!!a.trailing:p);function $(f){var v=n,K=r;return n=r=void 0,c=f,i=e.apply(K,v),i}function P(f){return c=f,o=setTimeout(g,t),u?$(f):i}function y(f){var v=f-l,K=f-c,O=t-v;return m?Je(O,s-K):O}function S(f){var v=f-l,K=f-c;return l===void 0||v>=t||v<0||m&&K>=s}function g(){var f=R();if(S(f))return A(f);o=setTimeout(g,y(f))}function A(f){return o=void 0,p&&n?$(f):(n=r=void 0,i)}function te(){o!==void 0&&clearTimeout(o),c=0,n=l=r=o=void 0}function ae(){return o===void 0?i:A(R())}function L(){var f=R(),v=S(f);if(n=arguments,r=this,l=f,v){if(o===void 0)return P(l);if(m)return o=setTimeout(g,t),$(l)}return o===void 0&&(o=setTimeout(g,t)),i}return L.cancel=te,L.flush=ae,L}function M(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Ye(e){return!!e&&typeof e=="object"}function Ze(e){return typeof e=="symbol"||Ye(e)&&Ge.call(e)==ke}function H(e){if(typeof e=="number")return e;if(Ze(e))return W;if(M(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=M(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(ze,"");var a=Oe.test(e);return a||qe.test(e)?We(e.slice(2),a?2:8):Ae.test(e)?W:+e}var et=Qe;const U=se(et);var Z=typeof window<"u"?d.useLayoutEffect:d.useEffect;function tt(e,t,a,n){const r=d.useRef(t);Z(()=>{r.current=t},[t]),d.useEffect(()=>{const s=window;if(!(s&&s.addEventListener))return;const i=o=>{r.current(o)};return s.addEventListener(e,i,n),()=>{s.removeEventListener(e,i,n)}},[e,a,n])}function at(e){const t=d.useRef(e);t.current=e,d.useEffect(()=>()=>{t.current()},[])}function nt(e,t=500,a){const n=d.useRef();at(()=>{n.current&&n.current.cancel()});const r=d.useMemo(()=>{const s=U(e,t,a),i=(...o)=>s(...o);return i.cancel=()=>{s.cancel()},i.isPending=()=>!!n.current,i.flush=()=>s.flush(),i},[e,t,a]);return d.useEffect(()=>{n.current=U(e,t,a)},[e,t,a]),r}var it=typeof window>"u";function rt(e={}){let{initializeWithValue:t=!0}=e;it&&(t=!1);const[a,n]=d.useState(()=>t?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),r=nt(n,e.debounceDelay);function s(){(e.debounceDelay?r:n)({width:window.innerWidth,height:window.innerHeight})}return tt("resize",s),Z(()=>{s()},[]),a}const V=(e,t={})=>{var a;return e?b.jsxs(b.Fragment,{children:[e.label,e.badge&&b.jsx(Pe,{className:T("ml-2",(a=e.badgeProps)==null?void 0:a.className),...t,...e.badgeProps,children:e.badge})]}):null},j=d.forwardRef(({items:e,className:t,...a},n)=>{const{breakpoints:r}=ne(),{width:s}=rt({initializeWithValue:!0}),[i,o]=d.useState(e==null?void 0:e[0]),l=s<r.sm,c=d.useCallback(u=>{const m=e.find(p=>p.id===u);o(m)},[e]);return b.jsxs(b.Fragment,{children:[l?b.jsx("div",{ref:n,className:"w-full",children:b.jsx(ie,{className:T("w-full",t),items:e.map(u=>({id:u.id,label:b.jsxs("span",{className:"flex items-center justify-between gap-2 w-full",children:[b.jsx("span",{className:"flex gap-2",children:V(u)}),u.id===(i==null?void 0:i.id)&&b.jsx(re,{})]}),onClick:()=>o(u)})),...a,children:V(i,{variant:"info"})})}):b.jsx(je,{ref:n,selectedKey:i==null?void 0:i.id,onSelectionChange:c,...a,children:b.jsx(st,{children:b.jsx(X,{items:e,children:u=>b.jsx(ee,{children:V(u,{variant:"info"})},u.id)})})}),b.jsx("div",{className:"mt-2",children:i==null?void 0:i.content})]})});j.displayName="Tabs";const st=({children:e,...t})=>b.jsx(Ne,{className:T("inline-flex h-10 items-center justify-center rounded-md text-muted-foreground"),...t,children:e}),ee=d.forwardRef(({children:e,...t},a)=>b.jsx(Le,{ref:a,className:T("inline-flex cursor-pointer items-center text-primary font-medium font-display dark:text-neutral-600 whitespace-nowrap rounded-sm px-3 py-1.5 text-sm outline-none ring-offset-background transition-all","data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2","data-[disabled]:pointer-events-none data-[disabled]:opacity-50","data-[selected]:bg-neutral data-[selected]:text-primary-focus dark:data-[selected]:text-neutral-900 data-[selected]:border-b-2 data-[selected]:border-neutral-300","group-data-[orientation=vertical]:w-full"),...t,children:e}));ee.displayName="Tab";const ot=d.forwardRef(({children:e,...t},a)=>b.jsx(Ve,{ref:a,className:T("mt-2 ring-offset-background","data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2"),...t,children:e}));ot.displayName="TabPanel";try{j.displayName="Tabs",j.__docgenInfo={description:"Tabs component for displaying a set of tabs that can switch between different content panels.",displayName:"Tabs",props:{items:{defaultValue:null,description:"Array of items to be rendered as tabs",name:"items",required:!0,type:{name:"TabItem[]"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: TabsRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: TabsRenderProps & { defaultClassName: string; }) => string)"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"'horizontal'"},description:"The orientation of the tabs.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},isDisabled:{defaultValue:null,description:`Whether the TabList is disabled.
Shows that a selection exists, but is not available in that circumstance.`,name:"isDisabled",required:!1,type:{name:"boolean"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((key: Key) => void)"}},selectedKey:{defaultValue:null,description:"The currently selected key in the collection (controlled).",name:"selectedKey",required:!1,type:{name:"Key | null"}},defaultSelectedKey:{defaultValue:null,description:"The initial selected key in the collection (uncontrolled).",name:"defaultSelectedKey",required:!1,type:{name:"Key"}},keyboardActivation:{defaultValue:{value:"'automatic'"},description:"Whether tabs are activated automatically on focus or manually.",name:"keyboardActivation",required:!1,type:{name:"enum",value:[{value:'"manual"'},{value:'"automatic"'}]}}}}}catch{}const Lt={component:j,parameters:{layout:"centered",controls:{sort:"requiredFirst"},docs:{controls:{sort:"requiredFirst"}}}},E={args:{items:[{id:"1",label:"Tab 1",content:"Content for Tab 1",badge:6},{id:"2",label:"Tab 2",content:"Content for Tab 2"},{id:"3",label:"Tab 3",content:"Content for Tab 3"}]}};var B,_,G;E.parameters={...E.parameters,docs:{...(B=E.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Tab 1",
      content: "Content for Tab 1",
      badge: 6
    }, {
      id: "2",
      label: "Tab 2",
      content: "Content for Tab 2"
    }, {
      id: "3",
      label: "Tab 3",
      content: "Content for Tab 3"
    }]
  }
}`,...(G=(_=E.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};const Rt=["Default"];export{E as Default,Rt as __namedExportsOrder,Lt as default};
