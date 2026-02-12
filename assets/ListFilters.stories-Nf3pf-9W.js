import{r as m,j as c}from"./iframe-kQ4c0Yd4.js";import{B as D}from"./Button-lo6HiPPu.js";import{C as U}from"./Checkbox-DYv1N2nT.js";import{u as K,a as V,L,M as k}from"./ListFilters-DeFCyozO.js";import{S as _}from"./Select-Dl2XxC0M.js";import{S as M}from"./Switch-BU4k94Im.js";import{T as B}from"./TextField-CxcR5a-b.js";import{l as G,s as J,b as I,c as W}from"./filter-persistence-B2k8HGbF.js";import"./index-BdQGwq14.js";import{t as z}from"./DeleteForever--SQoLjBY.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DPXshW9P.js";import"./ButtonBase-BpYW2jkj.js";import"./Loader-DjZ1s7xl.js";import"./Tooltip-CmWwC_Gn.js";import"./index-D16zF9jG.js";import"./Button-D608CtPn.js";import"./FocusScope-DkD1PnN3.js";import"./Text-Cwsk3i_t.js";import"./usePress-B8mkcqOZ.js";import"./RSPContexts-5x-4Vb2P.js";import"./Separator-VWgbKG7T.js";import"./index-CsrIcV8I.js";import"./VisuallyHidden-BlpfzwTX.js";import"./Check-D25DeetW.js";import"./CheckIndeterminateSmall-9dsMXkLz.js";import"./Form-BAEkLNOt.js";import"./useToggleState-CFok9aME.js";import"./useFormReset-CKSokcbg.js";import"./ComboBox-l4D5-AkA.js";import"./SingleComboBox-DX2BZiZu.js";import"./ListBox-K-Qqiy2W.js";import"./ListBox-BpfY284Z.js";import"./DragAndDrop-BMAYr92j.js";import"./useLabel-5XbI8qbE.js";import"./Pill-isobBUI8.js";import"./Input-BR-csXWD.js";import"./IconButton-c5jZQzoy.js";import"./Modal-DrQ8QXZN.js";import"./use-is-mobile-CmmD2s6J.js";import"./sha256-BId82lFL.js";import"./Replay-DPA6DHPJ.js";import"./Label-BW0j8DJ7.js";import"./index-B4w9o77p.js";import"./Label-C4rnxR7f.js";import"./ErrorMessage-DGgwhh91.js";import"./Group-Ct_khpsc.js";import"./FieldError-CsYXbYdm.js";import"./useTextField-BD8tn0LI.js";import"./variants-DBAXpt0D.js";import"./KeyboardArrowDown-ClwYFSnh.js";import"./index-DYkG9jtj.js";/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((i,a)=>{let n=e[a];return i.concat(Array.isArray(n)?n.map(o=>[a,o]):[[a,n]])},[]))}function Y(e,i){let a=b(e);return i&&i.forEach((n,o)=>{a.has(o)||i.getAll(o).forEach(p=>{a.append(o,p)})}),a}const q="6";try{window.__reactRouterVersion=q}catch{}var P;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(P||(P={}));var v;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(v||(v={}));function Q(e){let i=m.useRef(b(e)),a=m.useRef(!1),n=K(),o=m.useMemo(()=>Y(n.search,a.current?null:i.current),[n.search]),p=V(),S=m.useCallback((f,t)=>{const r=b(typeof f=="function"?f(o):f);a.current=!0,p("?"+r,t)},[p,o]);return[o,S]}const F=e=>({"single-select":"single-select","multi-select":"multi-select",combobox:"single-combobox"})[e],X=({filters:e,defaultValues:i})=>{const[a,n]=Q(),o=m.useMemo(()=>{const t={...i};for(const r of e){const s=a.get(r.name);if(s!==null)r.filterType==="multi-select"?t[r.name]=s.split(","):t[r.name]=s;else if(r.storageKey){const l=G(F(r.filterType),r.storageKey);if(l!=null&&l.size){const u=Array.from(l);t[r.name]=r.filterType==="multi-select"?u:u[0]}}}return t},[a]);m.useEffect(()=>{for(const t of e){if(!t.storageKey)continue;const r=o[t.name];if(r!==void 0&&r!==!1){const s=Array.isArray(r)?r:[r];J(F(t.filterType),t.storageKey,s)}}},[o,e]),m.useEffect(()=>{const t=new URLSearchParams(a);let r=!1;for(const[s,l]of Object.entries(o)){const u=a.get(s),g=l!==void 0&&l!==!1?Array.isArray(l)?l.join(","):String(l):null;g!==u&&(r=!0,g?t.set(s,g):t.delete(s))}r&&n(t,{replace:!0})},[]);const p=m.useCallback(t=>{const r=new URLSearchParams(a);for(const[s,l]of Object.entries(t))l!==void 0&&l!==!1&&!(Array.isArray(l)&&l.length===0)?r.set(s,Array.isArray(l)?l.join(","):String(l)):r.delete(s);n(r,{replace:!0})},[a,n]),S=m.useCallback(()=>{I();const t=new URLSearchParams(a);for(const r of e)t.delete(r.name);for(const[r,s]of Object.entries(i))s!==void 0&&s!==!1&&t.set(r,Array.isArray(s)?s.join(","):String(s));n(t,{replace:!0})},[a,n,e,i]),f=m.useMemo(()=>{for(const t of Object.keys(i)){const r=o[t],s=i[t];if(Array.isArray(r)&&Array.isArray(s)){if(r.length!==s.length||!r.every(l=>s.includes(l)))return!0}else if(r!==s)return!0}for(const t of Object.keys(o))if(!(t in i)&&o[t]!==void 0)return!0;return!1},[o,i]);return{filterValues:o,onFilterChange:p,resetFilters:S,hasNonDefaultFilters:f}},Xe={component:L},O=[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label,storageKey:"createdAt"},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label,storageKey:"status"},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label,storageKey:"responsible"}],d={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:O.map(e=>({...e,storageKey:void 0}))}},h={args:{className:"w-[70vw]",children:c.jsxs(c.Fragment,{children:[c.jsx(_,{items:[],placeholder:"Select an item"}),c.jsx(B,{placeholder:"Search..."}),c.jsx(U,{className:"min-h-8 pl-2",children:"Check filter"}),c.jsx(M,{className:"min-h-8 pl-2",children:"Toggle filter"})]})}},Z=({...e})=>{const{filterValues:i,onFilterChange:a,resetFilters:n,hasNonDefaultFilters:o}=X({filters:e.filters??[],defaultValues:{status:["PENDING","APPROVED"]}});return c.jsxs("div",{className:"flex flex-col items-start gap-4",children:[c.jsx(L,{...e,filterValues:i,onFilterChange:a,enableResetButton:o,onResetFilters:n}),c.jsx(D,{variant:"delete",prefix:c.jsx(z,{}),onPress:()=>W(),children:"Clear all persisted filters"})]})},y={args:{className:"w-[80vw]",filters:O},render:e=>c.jsx(Z,{...e}),decorators:[e=>c.jsx(k,{children:c.jsx(e,{})})]};var R,w,x;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    className: "w-[80vw]",
    filterValues: {
      status: ["PENDING", "APPROVED"]
    },
    filters: filters.map(x => ({
      ...x,
      storageKey: undefined
    }))
  }
}`,...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var A,j,E;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    className: "w-[70vw]",
    children: <>
        <Select items={[]} placeholder="Select an item" />
        <TextField placeholder="Search..." />
        <Checkbox className="min-h-8 pl-2">Check filter</Checkbox>
        <Switch className="min-h-8 pl-2">Toggle filter</Switch>
      </>
  }
}`,...(E=(j=h.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var N,T,C;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    className: "w-[80vw]",
    filters: filters
  },
  render: args => <PersistedStorageDemo {...args} />,
  decorators: [Story => <MemoryRouter>
        <Story />
      </MemoryRouter>]
}`,...(C=(T=y.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const Ze=["Default","CustomFilters","FiltersWithLocalStorageKey"];export{h as CustomFilters,d as Default,y as FiltersWithLocalStorageKey,Ze as __namedExportsOrder,Xe as default};
