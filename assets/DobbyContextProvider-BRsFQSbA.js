import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{T as x,D as y,d as m}from"./index-DlSQN3eM.js";import{n as h}from"./index.browser-OxPLOBIU.js";import{r as i}from"./index-DRjF_FHU.js";import{$ as v}from"./PortalProvider-DG1WN5c3.js";import{c as T}from"./index-By-mRCMU.js";import{A as c}from"./Alert-Dpd35Ztu.js";import{$ as C}from"./openLink--SV7cA94.js";import{I as g}from"./useTranslation-BZwSnrkG.js";function V({i18n:e,defaultNS:o,children:s}){const a=i.useMemo(()=>({i18n:e,defaultNS:o}),[e,o]);return i.createElement(g.Provider,{value:a},s)}const D=()=>{const[e,o]=i.useState([]),s=i.useCallback(n=>{o(l=>l.filter(d=>d.id!==n))},[]),a=i.useCallback(n=>{const l=h(),r=()=>s(l),d=n.duration?setTimeout(r,n.duration):void 0;return o(u=>u.concat({...n,id:l,dismiss:r,timeout:d})),r},[s]);return i.useMemo(()=>({toasts:e,toast:a}),[e,a])},p=({maxVisibleToasts:e=5})=>{const{toasts:o}=i.useContext(x);return t.jsx("div",{className:"fixed bottom-4 right-4 z-50 flex flex-col space-y-2",children:o.slice(0,e).map(({id:s,title:a,description:n,className:l,action:r,variant:d,dismiss:u,...f})=>t.jsxs(c,{variant:d,onClose:u,className:T("animate-slide-in fade-in shadow-sm w-[300px]",l),...f,children:[a&&t.jsx(c.Title,{children:a}),n&&t.jsx(c.Description,{children:n}),r&&t.jsx("div",{className:"mt-2",children:r})]},s))})};try{p.displayName="Toaster",p.__docgenInfo={description:"Toaster component that displays a list of toast notifications.",displayName:"Toaster",props:{maxVisibleToasts:{defaultValue:{value:"5"},description:"",name:"maxVisibleToasts",required:!1,type:{name:"number"}}}}}catch{}const b=({getContainer:e=m.getContainer,breakpoints:o=m.breakpoints,navigate:s=m.navigate,i18nextInstance:a,maxVisibleToasts:n=m.maxVisibleToasts,children:l})=>{const r=D(),d=i.useMemo(()=>({getContainer:e,breakpoints:o,navigate:s,i18nextInstance:a}),[o,e,a,s]);return t.jsx(i.Suspense,{fallback:t.jsx("div",{children:"loading..."}),children:t.jsx(y.Provider,{value:d,children:t.jsx(x.Provider,{value:r,children:t.jsx(v,{getContainer:e,children:t.jsx(C,{navigate:s,children:t.jsxs(V,{i18n:a,children:[l,t.jsx(p,{maxVisibleToasts:n})]})})})})})})};b.displayName="DobbyContextProvider";try{b.displayName="DobbyContextProvider",b.__docgenInfo={description:"Wrapper component that provides a unified context to its children",displayName:"DobbyContextProvider",props:{maxVisibleToasts:{defaultValue:{value:"dobbyContextDefaultValues.maxVisibleToasts"},description:"Maximum number of toasts that can be visible at the same time",name:"maxVisibleToasts",required:!1,type:{name:"number"}},getContainer:{defaultValue:{value:"dobbyContextDefaultValues.getContainer"},description:"The container element that Dobby will use to render any components that need to be dynamically attached to the DOM. (e.g. modals)",name:"getContainer",required:!1,type:{name:"(() => HTMLElement | null)"}},breakpoints:{defaultValue:{value:"dobbyContextDefaultValues.breakpoints"},description:"Breakpoint definitions",name:"breakpoints",required:!1,type:{name:'{ [key: string]: number; sm: number; md: number; lg: number; xl: number; "2xl": number; }'}},navigate:{defaultValue:{value:"dobbyContextDefaultValues.navigate"},description:"The navigate function to use internally and expose through the useDobbyContext hook, to keep everything consistent across apps",name:"navigate",required:!1,type:{name:"((to: string | number, options?: NavigateOptions) => void)"}},i18nextInstance:{defaultValue:null,description:"The i18next instance to use for translations",name:"i18nextInstance",required:!1,type:{name:"i18n"}}}}}catch{}export{b as D};
