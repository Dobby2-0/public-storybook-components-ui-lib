import{R as N}from"./RichTextEditor-CRw6Tnnt.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-CplAapsX.js";import"./Loader-DO4ogSHn.js";import"./Modal-0H3481Qt.js";import"./IconButton-m9GXKDaS.js";import"./utils-BP1FQsAo.js";import"./ButtonBase-ZUXJNHQV.js";import"./Tooltip-DHBwmVO4.js";import"./index-DxhgBWXY.js";import"./Button-BmwiX6Hk.js";import"./FocusScope-Co7oTpXY.js";import"./Text-jeQCP_Xd.js";import"./usePress-DKuUVNPj.js";import"./index-CsyXmV7m.js";import"./index-RIj34x3n.js";import"./RSPContexts-B7LFnw2w.js";import"./Separator-Bj5eosGN.js";import"./index-1qNirS9T.js";import"./VisuallyHidden-BtQ6MD1n.js";const A={component:N},e={args:{className:"min-w-[500px]"}},a=[{id:"1",code:"Data.Building.Name",localizedName:"Building name",localizedDescription:"Name of the building"},{id:"2",code:"Data.Meeting.Title",localizedName:"Meeting title",localizedDescription:"Title of the meeting"},{id:"3",code:"Data.President.FirstName",localizedName:"President first name",localizedDescription:"First name of the president"},{id:"4",code:"Data.President.LastName",localizedName:"President last name",localizedDescription:"Last name of the president"}],f={getRows(o){const D=a.slice(o.startRow,o.endRow);o.successCallback(D,a.length)}},t={args:{...e.args,toolbarOptions:{tagSelector:{tags:a,datasource:f,pageSize:a.length,totalCount:a.length}}}},s={args:{...e.args,value:"This is a disabled editor",disabled:!0}},r={args:{className:"min-w-[400px] max-h-[250px]",resizable:!1}};var i,n,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
