import{j as e,r as i}from"./iframe-DtEeAOsY.js";import{C as G}from"./CardBasic-D2B3cg3b.js";import{C as H}from"./CardList-CXey278l.js";import{E as J}from"./EmptyState-Br6RTzcu.js";import{S as h}from"./Skeleton-DlBoc6NK.js";import"./preload-helper-Dp1pzeXC.js";import"./ErrorPage-S_YEXwZW.js";import"./Loader-B8XMVN5l.js";import"./Search-Fkm0XY52.js";const K=Array.from({length:12},(t,s)=>({id:`row-${String(s)}`,title:`Item ${String(s+1)}`,subtitle:`Subtitle for item ${String(s+1)}`})),B=t=>e.jsxs(G,{className:"p-2.5",children:[e.jsx("p",{className:"text-sm font-semibold",children:t.title}),e.jsx("p",{className:"text-xs text-neutral-600",children:t.subtitle})]}),Z=()=>e.jsxs(G,{className:"p-2.5 space-y-1.5",children:[e.jsx(h,{className:"h-3 w-32"}),e.jsx(h,{className:"h-4 w-48"}),e.jsx(h,{className:"h-3 w-20"})]}),ie={component:H,parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{className:"h-[400px] bg-neutral-100 p-2",children:e.jsx(t,{})})],args:{items:K,renderItem:B}},m={},c={args:{items:[],loading:!0,renderLoadingItem:Z,loadingItemCount:6}},d={args:{items:[]}},l={args:{items:[],emptyState:e.jsx(J,{title:"No invoices yet",description:"You'll see invoices here once your syndic sends them."})}},p={args:{items:[],error:new Error("Something went wrong")}},f=8,x=5,Q=1200,E=t=>Array.from({length:f},(s,r)=>{const o=t*f+r+1;return{id:`page-${String(t)}-row-${String(r)}`,title:`Item ${String(o)}`,subtitle:`Page ${String(t+1)} · position ${String(o)}`}}),U=()=>{const[t,s]=i.useState(()=>E(0)),[r,o]=i.useState(1),[a,j]=i.useState(!1),n=r<x,q=i.useCallback(()=>{if(!(a||!n))return j(!0),new Promise(z=>{setTimeout(()=>{s(S=>[...S,...E(r)]),o(S=>S+1),j(!1),z()},Q)})},[n,a,r]);return e.jsx(H,{items:t,loading:a,hasNextPage:n,handleLoadMore:q,renderItem:B,renderLoadingItem:Z,loadingItemCount:3,header:e.jsxs("div",{className:"mb-2 flex items-center justify-between rounded bg-neutral-150 p-2 text-xs text-neutral-600",children:[e.jsxs("span",{children:["Loaded ",String(t.length)," / ",String(x*f)," ","items (",String(r)," / ",String(x)," pages)"]}),e.jsx("span",{children:a?"Loading…":n?"Scroll to load more":"All loaded"})]})})},g={render:()=>e.jsx(U,{})},u={args:{header:e.jsx("div",{className:"p-2 text-sm font-semibold",children:"List header"}),footer:e.jsx("div",{className:"p-2 text-xs text-neutral-600",children:"End of list footer"})}};var y,w,I;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(I=(w=m.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var L,N,v;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: [],
    loading: true,
    renderLoadingItem: renderSkeletonRow,
    loadingItemCount: 6
  }
}`,...(v=(N=c.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var b,P,A;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var C,W,_;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: [],
    emptyState: <EmptyState title="No invoices yet" description="You'll see invoices here once your syndic sends them." />
  }
}`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var $,D,k;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    items: [],
    error: new Error("Something went wrong")
  }
}`,...(k=(D=p.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var M,R,O;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <InteractivePaginationDemo />
}`,...(O=(R=g.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var T,Y,F;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    header: <div className="p-2 text-sm font-semibold">List header</div>,
    footer: <div className="p-2 text-xs text-neutral-600">End of list footer</div>
  }
}`,...(F=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};const me=["Default","Loading","Empty","EmptyWithCustomState","WithError","WithPagination","WithHeaderAndFooter"];export{m as Default,d as Empty,l as EmptyWithCustomState,c as Loading,p as WithError,u as WithHeaderAndFooter,g as WithPagination,me as __namedExportsOrder,ie as default};
