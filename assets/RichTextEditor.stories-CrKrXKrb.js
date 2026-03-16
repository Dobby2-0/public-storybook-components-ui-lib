import{R as T}from"./RichTextEditor-Cb8-oiNR.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-C1iAjgAe.js";import"./Loader-CPB7YGoD.js";import"./Modal-BlknBZVR.js";import"./IconButton-C54kcoL9.js";import"./utils-DS_EBhle.js";import"./ButtonBase-DlVARpRa.js";import"./Tooltip-BONxuAzc.js";import"./index-DHOqbfdy.js";import"./Button-DxBzZRHu.js";import"./FocusScope-Bh0s01to.js";import"./Text-Bw1fWTcP.js";import"./usePress-DxKdZJ7l.js";import"./index-BduT9P8-.js";import"./index-BV3RjC92.js";import"./RSPContexts-CHokJQ0f.js";import"./Separator-D-C27o-b.js";import"./index-CD2zr-YI.js";import"./VisuallyHidden-BHHefcMY.js";const Q={component:T},e={args:{className:"min-w-[500px]"}},a=[{id:"1",code:"Data.Building.Name",localizedName:"Building name",localizedDescription:"Name of the building"},{id:"2",code:"Data.Meeting.Title",localizedName:"Meeting title",localizedDescription:"Title of the meeting"},{id:"3",code:"Data.President.FirstName",localizedName:"President first name",localizedDescription:"First name of the president"},{id:"4",code:"Data.President.LastName",localizedName:"President last name",localizedDescription:"Last name of the president"}],k={getRows(n){const R=a.slice(n.startRow,n.endRow);n.successCallback(R,a.length)}},t={args:{...e.args,toolbarOptions:{tagSelector:{tags:a,datasource:k,pageSize:a.length,totalCount:a.length}}}},r={args:{...e.args,value:"This is a disabled editor",disabled:!0}},s={args:{className:"min-w-[400px] max-h-[250px]",resizable:!1}},o={args:{...e.args,toolbarOptions:{image:!0}}},i={args:{...e.args,value:'<p style="margin: 0px; padding-bottom: 15px;">Met vriendelijke groeten,</p><p style="margin: 0px; padding-bottom: 15px;"></p><div style=""><p style="margin: 0px;"><tag-node label="Voornaam Medewerker" value="Data.ResponsibleEmployee.FirstName"></tag-node> <tag-node label="Achternaam medewerker" value="Data.ResponsibleEmployee.LastName"></tag-node></p><p style="margin: 0px;">Uw Syndicus</p></div><p style="margin: 0px;"></p>'}};var l,p,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
