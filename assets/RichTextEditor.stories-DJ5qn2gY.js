import{R as T}from"./RichTextEditor-CsS6SXwm.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-xl7C9gCw.js";import"./Loader-BcD18_fO.js";import"./Modal-BZh4B78B.js";import"./IconButton-Bh3I_lUN.js";import"./utils-BiDm51pV.js";import"./ButtonBase-DPaWVYfy.js";import"./Tooltip-Cfge-tCO.js";import"./index-Blu3z9r8.js";import"./Button-Bu8smok8.js";import"./FocusScope-D8isUGv_.js";import"./Text-D5cwUL8u.js";import"./usePress-DcFN7CSJ.js";import"./index-BSQJTg1U.js";import"./index-BU6HB7TO.js";import"./RSPContexts-DGNFCy2_.js";import"./Separator-SGpDRDiO.js";import"./index-BkT8B2yE.js";import"./VisuallyHidden-B30ztpjt.js";const Q={component:T},e={args:{className:"min-w-[500px]"}},a=[{id:"1",code:"Data.Building.Name",localizedName:"Building name",localizedDescription:"Name of the building"},{id:"2",code:"Data.Meeting.Title",localizedName:"Meeting title",localizedDescription:"Title of the meeting"},{id:"3",code:"Data.President.FirstName",localizedName:"President first name",localizedDescription:"First name of the president"},{id:"4",code:"Data.President.LastName",localizedName:"President last name",localizedDescription:"Last name of the president"}],k={getRows(n){const R=a.slice(n.startRow,n.endRow);n.successCallback(R,a.length)}},t={args:{...e.args,toolbarOptions:{tagSelector:{tags:a,datasource:k,pageSize:a.length,totalCount:a.length}}}},r={args:{...e.args,value:"This is a disabled editor",disabled:!0}},s={args:{className:"min-w-[400px] max-h-[250px]",resizable:!1}},o={args:{...e.args,toolbarOptions:{image:!0}}},i={args:{...e.args,value:'<p style="margin: 0px; padding-bottom: 15px;">Met vriendelijke groeten,</p><p style="margin: 0px; padding-bottom: 15px;"></p><div style=""><p style="margin: 0px;"><tag-node label="Voornaam Medewerker" value="Data.ResponsibleEmployee.FirstName"></tag-node> <tag-node label="Achternaam medewerker" value="Data.ResponsibleEmployee.LastName"></tag-node></p><p style="margin: 0px;">Uw Syndicus</p></div><p style="margin: 0px;"></p>'}};var l,p,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    className: "min-w-[500px]"
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,c,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,b,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: "This is a disabled editor",
    disabled: true
  }
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,D,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    className: "min-w-[400px] max-h-[250px]",
    resizable: false
  }
}`,...(y=(D=s.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var N,f,v;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    toolbarOptions: {
      image: true
    }
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var w,z,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: '<p style="margin: 0px; padding-bottom: 15px;">Met vriendelijke groeten,</p><p style="margin: 0px; padding-bottom: 15px;"></p><div style=""><p style="margin: 0px;"><tag-node label="Voornaam Medewerker" value="Data.ResponsibleEmployee.FirstName"></tag-node> <tag-node label="Achternaam medewerker" value="Data.ResponsibleEmployee.LastName"></tag-node></p><p style="margin: 0px;">Uw Syndicus</p></div><p style="margin: 0px;"></p>'
  }
}`,...(S=(z=i.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const X=["Default","WithTagSelect","Disabled","NonResizable","WithImage","WithHtmlContent"];export{e as Default,r as Disabled,s as NonResizable,i as WithHtmlContent,o as WithImage,t as WithTagSelect,X as __namedExportsOrder,Q as default};
