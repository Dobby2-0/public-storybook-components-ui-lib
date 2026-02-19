import{R as w}from"./RichTextEditor-HUWXskzN.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-Dt5ZFruU.js";import"./Loader-tH2ByKI6.js";import"./Modal-DZFjXjFx.js";import"./IconButton-D1enKiq_.js";import"./utils-C4ti3hoT.js";import"./ButtonBase-D_JUJID5.js";import"./Tooltip-CZ_WLqYu.js";import"./index-BkhYyv-i.js";import"./Button-DAxL8e33.js";import"./FocusScope-DiyDJAao.js";import"./Text-DMLuPAoM.js";import"./usePress-B5edpycu.js";import"./index-IBUjkAG-.js";import"./index-g_UJPtR6.js";import"./RSPContexts-CVFJqONS.js";import"./Separator-Ci-72ggl.js";import"./index-DBx7LphP.js";import"./VisuallyHidden-Blst52FW.js";const J={component:w},e={args:{className:"min-w-[500px]"}},a=[{id:"1",code:"Data.Building.Name",localizedName:"Building name",localizedDescription:"Name of the building"},{id:"2",code:"Data.Meeting.Title",localizedName:"Meeting title",localizedDescription:"Title of the meeting"},{id:"3",code:"Data.President.FirstName",localizedName:"President first name",localizedDescription:"First name of the president"},{id:"4",code:"Data.President.LastName",localizedName:"President last name",localizedDescription:"Last name of the president"}],T={getRows(i){const S=a.slice(i.startRow,i.endRow);i.successCallback(S,a.length)}},t={args:{...e.args,toolbarOptions:{tagSelector:{tags:a,datasource:T,pageSize:a.length,totalCount:a.length}}}},r={args:{...e.args,value:"This is a disabled editor",disabled:!0}},s={args:{className:"min-w-[400px] max-h-[250px]",resizable:!1}},o={args:{...e.args,toolbarOptions:{image:!0}}};var n,c,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    className: "min-w-[500px]"
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,u,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: "This is a disabled editor",
    disabled: true
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,D,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    className: "min-w-[400px] max-h-[250px]",
    resizable: false
  }
}`,...(f=(D=s.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var z,N,x;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    toolbarOptions: {
      image: true
    }
  }
}`,...(x=(N=o.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const K=["Default","WithTagSelect","Disabled","NonResizable","WithImage"];export{e as Default,r as Disabled,s as NonResizable,o as WithImage,t as WithTagSelect,K as __namedExportsOrder,J as default};
