import{j as s,r}from"./iframe-CH7h3U8V.js";import{B as b}from"./Button-DcqqCYT8.js";import{R as _}from"./RichTextEditor-3GHz5Wzo.js";import"./preload-helper-Dp1pzeXC.js";import"./useHover-CZDmPdFS.js";import"./ButtonBase-K-oI949Y.js";import"./Loader-B_pZvink.js";import"./Tooltip-CcYb4GNc.js";import"./index-Bd1NXLw_.js";import"./Button-D6Gv_3si.js";import"./SelectionIndicator-JHbJ9Xkw.js";import"./index-J4h-2R7O.js";import"./index-BckUZTgf.js";import"./usePress-C8lzPp6I.js";import"./Text-BWkTEYgb.js";import"./useCollection-BOybYtgF.js";import"./index-D4A8TaiF.js";import"./VisuallyHidden-BCQz32Rf.js";import"./Autocomplete-CrI-MANm.js";import"./Modal-UlUxmg-0.js";import"./IconButton-BgMPRSY_.js";const fe={component:_},t={args:{className:"min-w-[500px]"}},o=[{id:"1",code:"Data.Building.Name",localizedName:"Building name",localizedDescription:"Name of the building"},{id:"2",code:"Data.Meeting.Title",localizedName:"Meeting title",localizedDescription:"Title of the meeting"},{id:"3",code:"Data.President.FirstName",localizedName:"President first name",localizedDescription:"First name of the president"},{id:"4",code:"Data.President.LastName",localizedName:"President last name",localizedDescription:"Last name of the president"}],q={getRows(e){const l=o.slice(e.startRow,e.endRow);e.successCallback(l,o.length)}},n={args:{...t.args,toolbarOptions:{tagSelector:{tags:o,datasource:q,pageSize:o.length,totalCount:o.length}}}},d={args:{...t.args,value:"This is a disabled editor",disabled:!0}},i={args:{className:"min-w-[400px] max-h-[250px]",resizable:!1}},m={args:{...t.args,toolbarOptions:{image:!0}}},u={args:{...t.args,value:'<table class="custom-table"><thead><tr><th class="custom-header">Name</th><th class="custom-header">Role</th><th class="custom-header">Status</th></tr></thead><tbody><tr><td class="custom-cell">Jana De Letter</td><td class="custom-cell">Frontend Dev</td><td class="custom-cell">Active</td></tr><tr><td class="custom-cell">John Doe</td><td class="custom-cell">Backend Dev</td><td class="custom-cell">Inactive</td></tr></tbody></table>',contentStyle:".custom-table { border-collapse: collapse; width: 100%; background-color: #f0f4ff; } .custom-header { background-color: #3b5bdb; color: white; padding: 8px 12px; text-align: left; } .custom-cell { padding: 8px 12px; border-bottom: 1px solid #c5d0e6; }"}},p={args:{...t.args,value:'<div class="header-container">    <p class="second-page-header-title"><tag-node label="Data.Building.Name" value="Data.Building.Name"></tag-node> - <tag-node label="Title.Title" value="Title.Title"></tag-node></p> </div>',contentStyle:"p { color: red; font-weight: bold; } .tag-node { background-color: yellow; padding: 2px 4px; border-radius: 4px; }"}},F="rte-story-server",G=()=>{try{const e=localStorage.getItem(F);if(e)return JSON.parse(e)}catch{}return{value:'<p style="margin: 0px; min-height: 20px;">Server-saved content</p>',lastModifiedAt:new Date("2020-01-01").toISOString()}},Q=e=>{const l=r.useRef(null),[c,K]=r.useState(G),h=r.useRef(c.value),H=r.useCallback(a=>{h.current=a},[]),V=r.useCallback(()=>{const a={value:h.current,lastModifiedAt:new Date().toISOString()};try{localStorage.setItem(F,JSON.stringify(a))}catch{}K(a)},[]),Y=r.useCallback(()=>{var a;(a=l.current)==null||a.discardDraft()},[]);return s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsxs("p",{className:"text-sm text-gray-500",children:["Server last updated:"," ",new Date(c.lastModifiedAt).toLocaleString()]}),s.jsx(_,{...e,ref:l,value:c.value,lastModifiedAt:c.lastModifiedAt,onChange:H}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(b,{onPress:V,children:"Save"}),s.jsx(b,{onPress:Y,children:"Discard draft"})]})]})},g={args:{...t.args,saveToDraft:!0,localStorageKey:{id:"rte-draft",entityType:"my-entity-type",entityId:"my-entity-id"}},render:e=>s.jsx(Q,{...e})};var f,x,D;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    className: "min-w-[500px]"
  }
}`,...(D=(x=t.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var S,v,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    toolbarOptions: {
      tagSelector: {
        tags,
        datasource,
        pageSize: tags.length,
        totalCount: tags.length
      }
    }
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var N,T,w;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: "This is a disabled editor",
    disabled: true
  }
}`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var R,z,k;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    className: "min-w-[400px] max-h-[250px]",
    resizable: false
  }
}`,...(k=(z=i.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var C,B,I;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    toolbarOptions: {
      image: true
    }
  }
}`,...(I=(B=m.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var O,W,j;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: \`<table class="custom-table"><thead><tr><th class="custom-header">Name</th><th class="custom-header">Role</th><th class="custom-header">Status</th></tr></thead><tbody><tr><td class="custom-cell">Jana De Letter</td><td class="custom-cell">Frontend Dev</td><td class="custom-cell">Active</td></tr><tr><td class="custom-cell">John Doe</td><td class="custom-cell">Backend Dev</td><td class="custom-cell">Inactive</td></tr></tbody></table>\`,
    contentStyle: ".custom-table { border-collapse: collapse; width: 100%; background-color: #f0f4ff; } .custom-header { background-color: #3b5bdb; color: white; padding: 8px 12px; text-align: left; } .custom-cell { padding: 8px 12px; border-bottom: 1px solid #c5d0e6; }"
  }
}`,...(j=(W=u.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var A,E,M;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: '<div class="header-container">    <p class="second-page-header-title"><tag-node label="Data.Building.Name" value="Data.Building.Name"></tag-node> - <tag-node label="Title.Title" value="Title.Title"></tag-node></p> </div>',
    contentStyle: "p { color: red; font-weight: bold; } .tag-node { background-color: yellow; padding: 2px 4px; border-radius: 4px; }"
  }
}`,...(M=(E=p.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var P,J,L;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    saveToDraft: true,
    localStorageKey: {
      id: "rte-draft",
      entityType: "my-entity-type",
      entityId: "my-entity-id"
    }
  },
  render: args => <DiscardDraftDemo {...args} />
}`,...(L=(J=g.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};const xe=["Default","WithTagSelect","Disabled","NonResizable","WithImage","WithTableExistingStyles","WithHtmlContentAndCustomStyles","WithDiscardDraft"];export{t as Default,d as Disabled,i as NonResizable,g as WithDiscardDraft,p as WithHtmlContentAndCustomStyles,m as WithImage,u as WithTableExistingStyles,n as WithTagSelect,xe as __namedExportsOrder,fe as default};
