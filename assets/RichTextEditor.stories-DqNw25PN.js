import{R as N}from"./RichTextEditor-CtDF-kOn.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-DzHgz_R0.js";import"./Loader-CoXJRd0A.js";import"./Modal-DUaf4VRM.js";import"./IconButton-BgibkKDI.js";import"./utils-BNSxeWSS.js";import"./ButtonBase-CmRWFr30.js";import"./Tooltip-BuHsfSag.js";import"./index-O5q8PLHp.js";import"./Button-CZJRwUcQ.js";import"./FocusScope-ufh2Eq3k.js";import"./Hidden-DDBldYzx.js";import"./usePress-B28ZCfrq.js";import"./index-lNHsNeNb.js";import"./index-Coa52mpR.js";import"./RSPContexts--LViVSKW.js";import"./Separator-BE4fQ99B.js";import"./Text-D5t9Swb1.js";import"./VisuallyHidden-CV11xDJs.js";const A={component:N},e={args:{className:"min-w-[500px]"}},a=[{id:"1",code:"Data.Building.Name",localizedName:"Building name",localizedDescription:"Name of the building"},{id:"2",code:"Data.Meeting.Title",localizedName:"Meeting title",localizedDescription:"Title of the meeting"},{id:"3",code:"Data.President.FirstName",localizedName:"President first name",localizedDescription:"First name of the president"},{id:"4",code:"Data.President.LastName",localizedName:"President last name",localizedDescription:"Last name of the president"}],f={getRows(o){const D=a.slice(o.startRow,o.endRow);o.successCallback(D,a.length)}},t={args:{...e.args,toolbarOptions:{tagSelector:{tags:a,datasource:f,pageSize:a.length,totalCount:a.length}}}},s={args:{...e.args,value:"This is a disabled editor",disabled:!0}},r={args:{className:"min-w-[400px] max-h-[250px]",resizable:!1}};var i,n,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    className: "min-w-[500px]"
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,g,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: "This is a disabled editor",
    disabled: true
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,b,z;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    className: "min-w-[400px] max-h-[250px]",
    resizable: false
  }
}`,...(z=(b=r.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};const G=["Default","WithTagSelect","Disabled","NonResizable"];export{e as Default,s as Disabled,r as NonResizable,t as WithTagSelect,G as __namedExportsOrder,A as default};
