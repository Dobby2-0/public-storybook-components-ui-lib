import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BbeNlDUO.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./RichTextEditor-D7xhMCnn.js";import{n as a,t as o}from"./Button-Cn9nmE68.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{a(),r(),s=t(),c=n(),l={component:i},u={args:{className:`min-w-[500px]`}},d=[{id:`1`,code:`Data.Building.Name`,localizedName:`Building name`,localizedDescription:`Name of the building`},{id:`2`,code:`Data.Meeting.Title`,localizedName:`Meeting title`,localizedDescription:`Title of the meeting`},{id:`3`,code:`Data.President.FirstName`,localizedName:`President first name`,localizedDescription:`First name of the president`},{id:`4`,code:`Data.President.LastName`,localizedName:`President last name`,localizedDescription:`Last name of the president`}],f={getRows(e){let t=d.slice(e.startRow,e.endRow);e.successCallback(t,d.length)}},p={args:{...u.args,toolbarOptions:{tagSelector:{tags:d,datasource:f,pageSize:d.length,totalCount:d.length}}}},m={args:{...u.args,value:`This is a disabled editor`,disabled:!0}},h={args:{className:`min-w-[400px] max-h-[250px]`,resizable:!1}},g={args:{...u.args,toolbarOptions:{image:!0}}},_={args:{...u.args,value:`<table class="custom-table"><thead><tr><th class="custom-header">Name</th><th class="custom-header">Role</th><th class="custom-header">Status</th></tr></thead><tbody><tr><td class="custom-cell">Jana De Letter</td><td class="custom-cell">Frontend Dev</td><td class="custom-cell">Active</td></tr><tr><td class="custom-cell">John Doe</td><td class="custom-cell">Backend Dev</td><td class="custom-cell">Inactive</td></tr></tbody></table>`,contentStyle:`.custom-table { border-collapse: collapse; width: 100%; background-color: #f0f4ff; } .custom-header { background-color: #3b5bdb; color: white; padding: 8px 12px; text-align: left; } .custom-cell { padding: 8px 12px; border-bottom: 1px solid #c5d0e6; }`}},v={args:{...u.args,value:`<div class="header-container">    <p class="second-page-header-title"><tag-node label="Data.Building.Name" value="Data.Building.Name"></tag-node> - <tag-node label="Title.Title" value="Title.Title"></tag-node></p> </div>`,contentStyle:`p { color: red; font-weight: bold; } .tag-node { background-color: yellow; padding: 2px 4px; border-radius: 4px; }`}},y=`rte-story-server`,b=()=>{try{let e=localStorage.getItem(y);if(e)return JSON.parse(e)}catch{}return{value:`<p style="margin: 0px; min-height: 20px;">Server-saved content</p>`,lastModifiedAt:new Date(`2020-01-01`).toISOString()}},x=e=>{let t=(0,s.useRef)(null),[n,r]=(0,s.useState)(b),a=(0,s.useRef)(n.value),l=(0,s.useCallback)(e=>{a.current=e},[]),u=(0,s.useCallback)(()=>{let e={value:a.current,lastModifiedAt:new Date().toISOString()};try{localStorage.setItem(y,JSON.stringify(e))}catch{}r(e)},[]),d=(0,s.useCallback)(()=>{t.current?.discardDraft()},[]);return(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,c.jsxs)(`p`,{className:`text-sm text-gray-500`,children:[`Server last updated:`,` `,new Date(n.lastModifiedAt).toLocaleString()]}),(0,c.jsx)(i,{...e,ref:t,value:n.value,lastModifiedAt:n.lastModifiedAt,onChange:l}),(0,c.jsxs)(`div`,{className:`flex gap-2`,children:[(0,c.jsx)(o,{onPress:u,children:`Save`}),(0,c.jsx)(o,{onPress:d,children:`Discard draft`})]})]})},S={args:{...u.args,saveToDraft:!0,localStorageKey:{id:`rte-draft`,entityType:`my-entity-type`,entityId:`my-entity-id`}},render:e=>(0,c.jsx)(x,{...e})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    className: "min-w-[500px]"
  }
}`,...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: "This is a disabled editor",
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    className: "min-w-[400px] max-h-[250px]",
    resizable: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    toolbarOptions: {
      image: true
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: \`<table class="custom-table"><thead><tr><th class="custom-header">Name</th><th class="custom-header">Role</th><th class="custom-header">Status</th></tr></thead><tbody><tr><td class="custom-cell">Jana De Letter</td><td class="custom-cell">Frontend Dev</td><td class="custom-cell">Active</td></tr><tr><td class="custom-cell">John Doe</td><td class="custom-cell">Backend Dev</td><td class="custom-cell">Inactive</td></tr></tbody></table>\`,
    contentStyle: ".custom-table { border-collapse: collapse; width: 100%; background-color: #f0f4ff; } .custom-header { background-color: #3b5bdb; color: white; padding: 8px 12px; text-align: left; } .custom-cell { padding: 8px 12px; border-bottom: 1px solid #c5d0e6; }"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: '<div class="header-container">    <p class="second-page-header-title"><tag-node label="Data.Building.Name" value="Data.Building.Name"></tag-node> - <tag-node label="Title.Title" value="Title.Title"></tag-node></p> </div>',
    contentStyle: "p { color: red; font-weight: bold; } .tag-node { background-color: yellow; padding: 2px 4px; border-radius: 4px; }"
  }
}`,...v.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithTagSelect`,`Disabled`,`NonResizable`,`WithImage`,`WithTableExistingStyles`,`WithHtmlContentAndCustomStyles`,`WithDiscardDraft`]})))()}w();export{u as Default,m as Disabled,h as NonResizable,S as WithDiscardDraft,v as WithHtmlContentAndCustomStyles,g as WithImage,_ as WithTableExistingStyles,p as WithTagSelect,C as __namedExportsOrder,l as default};