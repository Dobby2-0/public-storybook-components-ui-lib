import{R}from"./RichTextEditor-DU72W0DP.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-CzO8tIKf.js";import"./Loader-yCy-tuy-.js";import"./Modal-BSY-t_rE.js";import"./IconButton-CVvYJJz8.js";import"./utils-Bd97OsuJ.js";import"./ButtonBase-CMFW6auj.js";import"./Tooltip-BnQpK9jh.js";import"./index-jDvyA-sL.js";import"./Button-CpJ7snnK.js";import"./FocusScope-ChueHnOn.js";import"./Text-D3Raw8n8.js";import"./usePress-Dy-QiNP_.js";import"./index-CbyHUPuW.js";import"./index-Zlv7x9BX.js";import"./RSPContexts-B3cxRrW8.js";import"./Separator-DAynwQ_I.js";import"./index-I8rqpXNn.js";import"./VisuallyHidden-D4CgCFfs.js";const V={component:R},e={args:{className:"min-w-[500px]"}},a=[{id:"1",code:"Data.Building.Name",localizedName:"Building name",localizedDescription:"Name of the building"},{id:"2",code:"Data.Meeting.Title",localizedName:"Meeting title",localizedDescription:"Title of the meeting"},{id:"3",code:"Data.President.FirstName",localizedName:"President first name",localizedDescription:"First name of the president"},{id:"4",code:"Data.President.LastName",localizedName:"President last name",localizedDescription:"Last name of the president"}],y={getRows(n){const C=a.slice(n.startRow,n.endRow);n.successCallback(C,a.length)}},t={args:{...e.args,toolbarOptions:{tagSelector:{tags:a,datasource:y,pageSize:a.length,totalCount:a.length}}}},r={args:{...e.args,value:"This is a disabled editor",disabled:!0}},o={args:{className:"min-w-[400px] max-h-[250px]",resizable:!1}},s={args:{...e.args,toolbarOptions:{image:!0}}},i={args:{...e.args,value:'<div class="header-container">    <p class="second-page-header-title"><tag-node label="Data.Building.Name" value="Data.Building.Name"></tag-node> - <tag-node label="Title.Title" value="Title.Title"></tag-node></p> </div>',contentStyle:"p { color: red; font-weight: bold; } .tag-node { background-color: yellow; padding: 2px 4px; border-radius: 4px; }"}};var l,d,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    className: "min-w-[500px]"
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,h,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: "This is a disabled editor",
    disabled: true
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var D,N,f;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    className: "min-w-[400px] max-h-[250px]",
    resizable: false
  }
}`,...(f=(N=o.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var x,S,T;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    toolbarOptions: {
      image: true
    }
  }
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var z,v,w;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: '<div class="header-container">    <p class="second-page-header-title"><tag-node label="Data.Building.Name" value="Data.Building.Name"></tag-node> - <tag-node label="Title.Title" value="Title.Title"></tag-node></p> </div>',
    contentStyle: "p { color: red; font-weight: bold; } .tag-node { background-color: yellow; padding: 2px 4px; border-radius: 4px; }"
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const X=["Default","WithTagSelect","Disabled","NonResizable","WithImage","WithHtmlContentAndCustomStyles"];export{e as Default,r as Disabled,o as NonResizable,i as WithHtmlContentAndCustomStyles,s as WithImage,t as WithTagSelect,X as __namedExportsOrder,V as default};
