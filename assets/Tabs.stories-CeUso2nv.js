import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-BfNQUoGZ.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{t as i,z as a}from"./main-DS6peC0q.js";import{n as o,t as s}from"./Pill-Q8lFiUIM.js";import{n as c,t as l}from"./IconButton-Bk40YxPC.js";import{n as u,t as d}from"./Tabs-V8e2TT_c.js";var f,p,m,h,g,_,v,y,b,x,S;t((()=>{c(),o(),i(),f=e(n(),1),u(),p=r(),m={component:d},h={args:{items:[{id:`1`,label:`Tab 1`,content:(0,p.jsx)(`div`,{className:`flex items-center justify-center p-6`,children:(0,p.jsx)(s,{variant:`accent`,children:`Tab 1 content`})}),badge:6},{id:`2`,label:`Tab 2`,content:(0,p.jsx)(`div`,{className:`flex items-center justify-center p-6`,children:(0,p.jsx)(s,{variant:`info-4`,children:`Tab 2 content`})})},{id:`3`,label:`Tab 3`,content:(0,p.jsx)(`div`,{className:`flex items-center justify-center p-6`,children:(0,p.jsx)(s,{variant:`success`,children:`Tab 3 content`})})}]}},g={args:{...h.args,suffix:(0,p.jsx)(l,{variant:`secondary`,className:`shrink-0`,children:(0,p.jsx)(a,{})})}},_={args:{...h.args,forceMobile:!0}},v={args:{...h.args,maxWidth:`7.5rem`,items:[{id:`1`,label:`Tab with looooooooooooooooooooooooooooooooooooooooooooooooooong name`,content:(0,p.jsx)(`div`,{className:`flex items-center justify-center p-6`,children:(0,p.jsx)(s,{variant:`accent`,children:`Content of tab with long name`})}),badge:6},{id:`2`,label:`Tab 2`,content:(0,p.jsx)(`div`,{className:`flex items-center justify-center p-6`,children:(0,p.jsx)(s,{variant:`info-4`,children:`Tab 2 content`})})}]}},y={args:{items:[{id:`1`,label:`Tab 1`,content:`Content for Tab 1`},{id:`2`,label:`Tab 2 (disabled)`,content:`Content for Tab 2`,disabled:!0}]}},b=(0,f.lazy)(()=>new Promise(e=>setTimeout(()=>e({default:()=>(0,p.jsx)(`div`,{children:`Loaded after delay!`})}),3e3))),x={args:{items:[{id:`1`,label:`Eager Tab`,content:`Renders immediately`},{id:`2`,label:`Lazy Tab`,content:(0,p.jsx)(b,{})}],style:{width:`200px`,height:`140px`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Tab 1",
      content: <div className="flex items-center justify-center p-6">
            <Pill variant="accent">Tab 1 content</Pill>
          </div>,
      badge: 6
    }, {
      id: "2",
      label: "Tab 2",
      content: <div className="flex items-center justify-center p-6">
            <Pill variant="info-4">Tab 2 content</Pill>
          </div>
    }, {
      id: "3",
      label: "Tab 3",
      content: <div className="flex items-center justify-center p-6">
            <Pill variant="success">Tab 3 content</Pill>
          </div>
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    suffix: <IconButton variant="secondary" className="shrink-0">
        <MoreVert />
      </IconButton>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    forceMobile: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxWidth: "7.5rem",
    items: [{
      id: "1",
      label: "Tab with looooooooooooooooooooooooooooooooooooooooooooooooooong name",
      content: <div className="flex items-center justify-center p-6">
            <Pill variant="accent">Content of tab with long name</Pill>
          </div>,
      badge: 6
    }, {
      id: "2",
      label: "Tab 2",
      content: <div className="flex items-center justify-center p-6">
            <Pill variant="info-4">Tab 2 content</Pill>
          </div>
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Tab 1",
      content: "Content for Tab 1"
    }, {
      id: "2",
      label: "Tab 2 (disabled)",
      content: "Content for Tab 2",
      disabled: true
    }]
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Eager Tab",
      content: "Renders immediately"
    }, {
      id: "2",
      label: "Lazy Tab",
      content: <SlowContent />
    }],
    style: {
      width: "200px",
      height: "140px"
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithSuffix`,`WithForceMobile`,`ConstrainedTabs`,`WithDisabledTab`,`LazyTabContent`]}))();export{v as ConstrainedTabs,h as Default,x as LazyTabContent,y as WithDisabledTab,_ as WithForceMobile,g as WithSuffix,S as __namedExportsOrder,m as default};