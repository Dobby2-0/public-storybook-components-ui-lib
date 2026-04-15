import{R as C}from"./RichTextEditor-DWPBIZPL.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BCvx5aIw.js";import"./Loader-DpWblGY1.js";import"./Modal-DXVYfh5D.js";import"./IconButton-C2bEEDI6.js";import"./utils-DT55uSEz.js";import"./ButtonBase-DrZK1uMj.js";import"./Tooltip-D-8X45XJ.js";import"./index-ChnMGnWF.js";import"./Button-C0e0lcau.js";import"./FocusScope-B5NpOBFv.js";import"./Text-CmDC0Fcx.js";import"./usePress-FVxBmJ3a.js";import"./index-CV_sOKXw.js";import"./index-DOmqlDl7.js";import"./RSPContexts-CDt80yYI.js";import"./Separator-DLrh4vZm.js";import"./index-DTcX34cl.js";import"./VisuallyHidden-CO0T0OMH.js";const $={component:C},e={args:{className:"min-w-[500px]"}},t=[{id:"1",code:"Data.Building.Name",localizedName:"Building name",localizedDescription:"Name of the building"},{id:"2",code:"Data.Meeting.Title",localizedName:"Meeting title",localizedDescription:"Title of the meeting"},{id:"3",code:"Data.President.FirstName",localizedName:"President first name",localizedDescription:"First name of the president"},{id:"4",code:"Data.President.LastName",localizedName:"President last name",localizedDescription:"Last name of the president"}],O={getRows(d){const W=t.slice(d.startRow,d.endRow);d.successCallback(W,t.length)}},a={args:{...e.args,toolbarOptions:{tagSelector:{tags:t,datasource:O,pageSize:t.length,totalCount:t.length}}}},s={args:{...e.args,value:"This is a disabled editor",disabled:!0}},o={args:{className:"min-w-[400px] max-h-[250px]",resizable:!1}},r={args:{...e.args,toolbarOptions:{image:!0}}},l={args:{...e.args,value:'<table class="custom-table"><thead><tr><th class="custom-header">Name</th><th class="custom-header">Role</th><th class="custom-header">Status</th></tr></thead><tbody><tr><td class="custom-cell">Jana De Letter</td><td class="custom-cell">Frontend Dev</td><td class="custom-cell">Active</td></tr><tr><td class="custom-cell">John Doe</td><td class="custom-cell">Backend Dev</td><td class="custom-cell">Inactive</td></tr></tbody></table>',contentStyle:".custom-table { border-collapse: collapse; width: 100%; background-color: #f0f4ff; } .custom-header { background-color: #3b5bdb; color: white; padding: 8px 12px; text-align: left; } .custom-cell { padding: 8px 12px; border-bottom: 1px solid #c5d0e6; }"}},c={args:{...e.args,value:'<div class="header-container">    <p class="second-page-header-title"><tag-node label="Data.Building.Name" value="Data.Building.Name"></tag-node> - <tag-node label="Title.Title" value="Title.Title"></tag-node></p> </div>',contentStyle:"p { color: red; font-weight: bold; } .tag-node { background-color: yellow; padding: 2px 4px; border-radius: 4px; }"}};var i,n,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    className: "min-w-[500px]"
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,b,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: "This is a disabled editor",
    disabled: true
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var D,f,S;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    className: "min-w-[400px] max-h-[250px]",
    resizable: false
  }
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var v,N,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    toolbarOptions: {
      image: true
    }
  }
}`,...(T=(N=r.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var w,y,z;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: \`<table class="custom-table"><thead><tr><th class="custom-header">Name</th><th class="custom-header">Role</th><th class="custom-header">Status</th></tr></thead><tbody><tr><td class="custom-cell">Jana De Letter</td><td class="custom-cell">Frontend Dev</td><td class="custom-cell">Active</td></tr><tr><td class="custom-cell">John Doe</td><td class="custom-cell">Backend Dev</td><td class="custom-cell">Inactive</td></tr></tbody></table>\`,
    contentStyle: ".custom-table { border-collapse: collapse; width: 100%; background-color: #f0f4ff; } .custom-header { background-color: #3b5bdb; color: white; padding: 8px 12px; text-align: left; } .custom-cell { padding: 8px 12px; border-bottom: 1px solid #c5d0e6; }"
  }
}`,...(z=(y=l.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var k,R,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: '<div class="header-container">    <p class="second-page-header-title"><tag-node label="Data.Building.Name" value="Data.Building.Name"></tag-node> - <tag-node label="Title.Title" value="Title.Title"></tag-node></p> </div>',
    contentStyle: "p { color: red; font-weight: bold; } .tag-node { background-color: yellow; padding: 2px 4px; border-radius: 4px; }"
  }
}`,...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const ee=["Default","WithTagSelect","Disabled","NonResizable","WithImage","WithTableExistingStyles","WithHtmlContentAndCustomStyles"];export{e as Default,s as Disabled,o as NonResizable,c as WithHtmlContentAndCustomStyles,r as WithImage,l as WithTableExistingStyles,a as WithTagSelect,ee as __namedExportsOrder,$ as default};
