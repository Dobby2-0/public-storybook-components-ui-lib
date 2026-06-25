import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{Rt as n,t as r}from"./main-DS6peC0q.js";import{n as i,t as a}from"./Button-IBwj9S-v.js";import{i as o,n as s}from"./filter-persistence-C4RzR82C.js";import{n as c,t as l}from"./Select-d52zuaki.js";import{n as u,t as d}from"./Checkbox-DJkuwHNo.js";import{d as f,n as p,r as m,u as h}from"./hooks-By84nF74.js";import{n as g,t as _}from"./ListFilters-WxeTz3c6.js";import{n as v,t as y}from"./TextField-B_1oZSHU.js";import{n as b,t as x}from"./Switch-BinrPRfj.js";var S,C,w,T,E,D,O,k;e((()=>{i(),u(),g(),c(),b(),v(),p(),o(),r(),h(),S=t(),C={component:_},w=[{filterType:`single-select`,name:`createdAt`,placeholder:`Created at`,items:[{id:`day`,label:`Last 24 hours`},{id:`week`,label:`Last 7 days`},{id:`month`,label:`Last 30 days`},{id:`halfYear`,label:`Last 6 months`},{id:`year`,label:`Last year`}],labelResolver:e=>e.label,storageKey:`createdAt`},{filterType:`multi-select`,name:`status`,placeholder:`Status`,items:[{id:`PENDING`,label:`Pending approval`},{id:`APPROVED`,label:`Approved`},{id:`TO_BE_SOLVED`,label:`To be solved`},{id:`SOLVED`,label:`Solved`},{id:`REJECTED`,label:`Rejected`}],labelResolver:e=>e.label,storageKey:`status`},{filterType:`combobox`,name:`responsible`,placeholder:`Responsible user`,items:[{id:`1`,label:`John Doe`},{id:`2`,label:`Jane Doe`},{id:`3`,label:`Jeff`}],labelResolver:e=>e.label,storageKey:`responsible`}],T={args:{className:`w-[80vw]`,filterValues:{status:[`PENDING`,`APPROVED`]},filters:w.map(e=>({...e,storageKey:void 0}))}},E={args:{className:`w-[70vw]`,children:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(l,{items:[],placeholder:`Select an item`}),(0,S.jsx)(y,{placeholder:`Search...`}),(0,S.jsx)(d,{className:`min-h-8 pl-2`,children:`Check filter`}),(0,S.jsx)(x,{className:`min-h-8 pl-2`,children:`Toggle filter`})]})}},D=({...e})=>{let{filterValues:t,onFilterChange:r,resetFilters:i,hasNonDefaultFilters:o}=m({filters:e.filters??[],defaultValues:{status:[`PENDING`,`APPROVED`]}});return(0,S.jsxs)(`div`,{className:`flex flex-col items-start gap-4`,children:[(0,S.jsx)(_,{...e,filterValues:t,onFilterChange:r,enableResetButton:o,onResetFilters:i}),(0,S.jsx)(a,{variant:`delete`,prefix:(0,S.jsx)(n,{}),onPress:()=>s(!0),children:`Clear all persisted filters`})]})},O={args:{className:`w-[80vw]`,filters:w},render:e=>(0,S.jsx)(D,{...e}),decorators:[e=>(0,S.jsx)(f,{children:(0,S.jsx)(e,{})})]},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    className: "w-[70vw]",
    children: <>
        <Select items={[]} placeholder="Select an item" />
        <TextField placeholder="Search..." />
        <Checkbox className="min-h-8 pl-2">Check filter</Checkbox>
        <Switch className="min-h-8 pl-2">Toggle filter</Switch>
      </>
  }
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    className: "w-[80vw]",
    filters: filters
  },
  render: args => <PersistedStorageDemo {...args} />,
  decorators: [Story => <MemoryRouter>
        <Story />
      </MemoryRouter>]
}`,...O.parameters?.docs?.source}}},k=[`Default`,`CustomFilters`,`FiltersWithLocalStorageKey`]}))();export{E as CustomFilters,T as Default,O as FiltersWithLocalStorageKey,k as __namedExportsOrder,C as default};