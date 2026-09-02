import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-BfNQUoGZ.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{n as i,t as a}from"./CardBasic-DMxfq8pc.js";import{n as o,t as s}from"./EmptyState-DowGoCE9.js";import{n as c,t as l}from"./CardList-LYCQfA-7.js";import{n as u,t as d}from"./Skeleton-BFd1uSaW.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;t((()=>{i(),c(),o(),u(),f=e(n(),1),p=r(),m=Array.from({length:12},(e,t)=>({id:`row-${String(t)}`,title:`Item ${String(t+1)}`,subtitle:`Subtitle for item ${String(t+1)}`})),h=e=>(0,p.jsxs)(a,{className:`p-2.5`,children:[(0,p.jsx)(`p`,{className:`text-sm font-semibold`,children:e.title}),(0,p.jsx)(`p`,{className:`text-xs text-neutral-600`,children:e.subtitle})]}),g=()=>(0,p.jsxs)(a,{className:`p-2.5 space-y-1.5`,children:[(0,p.jsx)(d,{className:`h-3 w-32`}),(0,p.jsx)(d,{className:`h-4 w-48`}),(0,p.jsx)(d,{className:`h-3 w-20`})]}),_={component:l,parameters:{layout:`fullscreen`},decorators:[e=>(0,p.jsx)(`div`,{className:`h-[400px] bg-neutral-100 p-2`,children:(0,p.jsx)(e,{})})],args:{items:m,renderItem:h}},v={},y={args:{items:[],loading:!0,renderLoadingItem:g,loadingItemCount:6}},b={args:{items:[]}},x={args:{items:[],emptyState:(0,p.jsx)(s,{title:`No invoices yet`,description:`You'll see invoices here once your syndic sends them.`})}},S={args:{items:[],error:Error(`Something went wrong`)}},C=8,w=5,T=1200,E=e=>Array.from({length:C},(t,n)=>{let r=e*C+n+1;return{id:`page-${String(e)}-row-${String(n)}`,title:`Item ${String(r)}`,subtitle:`Page ${String(e+1)} · position ${String(r)}`}}),D=()=>{let[e,t]=(0,f.useState)(()=>E(0)),[n,r]=(0,f.useState)(1),[i,a]=(0,f.useState)(!1),o=n<w;return(0,p.jsx)(l,{items:e,loading:i,hasNextPage:o,handleLoadMore:(0,f.useCallback)(()=>{if(!(i||!o))return a(!0),new Promise(e=>{setTimeout(()=>{t(e=>[...e,...E(n)]),r(e=>e+1),a(!1),e()},T)})},[o,i,n]),renderItem:h,renderLoadingItem:g,loadingItemCount:3,header:(0,p.jsxs)(`div`,{className:`mb-2 flex items-center justify-between rounded bg-neutral-150 p-2 text-xs text-neutral-600`,children:[(0,p.jsxs)(`span`,{children:[`Loaded `,String(e.length),` / `,String(w*C),` `,`items (`,String(n),` / `,String(w),` pages)`]}),(0,p.jsx)(`span`,{children:i?`Loading…`:o?`Scroll to load more`:`All loaded`})]})})},O={render:()=>(0,p.jsx)(D,{})},k={args:{header:(0,p.jsx)(`div`,{className:`p-2 text-sm font-semibold`,children:`List header`}),footer:(0,p.jsx)(`div`,{className:`p-2 text-xs text-neutral-600`,children:`End of list footer`})}},A=5,j=32,M=Array.from({length:j},(e,t)=>({id:`paged-row-${String(t)}`,title:`Item ${String(t+1)}`,subtitle:`Item ${String(t+1)} of ${String(j)}`})),N=Math.ceil(j/A),P=()=>{let[e,t]=(0,f.useState)(1);return(0,p.jsx)(l,{items:M.slice((e-1)*A,e*A),renderItem:h,pagination:{currentPage:e,totalPages:N,onCurrentPageChange:t}})},F={render:()=>(0,p.jsx)(P,{})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    loading: true,
    renderLoadingItem: renderSkeletonRow,
    loadingItemCount: 6
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    emptyState: <EmptyState title="No invoices yet" description="You'll see invoices here once your syndic sends them." />
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    error: new Error("Something went wrong")
  }
}`,...S.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePaginationDemo />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    header: <div className="p-2 text-sm font-semibold">List header</div>,
    footer: <div className="p-2 text-xs text-neutral-600">End of list footer</div>
  }
}`,...k.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <DiscretePaginationDemo />
}`,...F.parameters?.docs?.source}}},I=[`Default`,`Loading`,`Empty`,`EmptyWithCustomState`,`WithError`,`WithPagination`,`WithHeaderAndFooter`,`WithPageNavigation`]}))();export{v as Default,b as Empty,x as EmptyWithCustomState,y as Loading,S as WithError,k as WithHeaderAndFooter,F as WithPageNavigation,O as WithPagination,I as __namedExportsOrder,_ as default};