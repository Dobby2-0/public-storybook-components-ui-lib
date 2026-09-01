import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-BfNQUoGZ.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{n as i,t as a}from"./RichTextEditor-B0vtsv4a.js";import{n as o,t as s}from"./Button-DN3z36Ci.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;t((()=>{o(),i(),c=e(n(),1),l=r(),u={component:a},d={args:{className:`min-w-[500px]`}},f=[{id:`1`,code:`Data.Building.Name`,localizedName:`Building name`,localizedDescription:`Name of the building`},{id:`2`,code:`Data.Meeting.Title`,localizedName:`Meeting title`,localizedDescription:`Title of the meeting`},{id:`3`,code:`Data.President.FirstName`,localizedName:`President first name`,localizedDescription:`First name of the president`},{id:`4`,code:`Data.President.LastName`,localizedName:`President last name`,localizedDescription:`Last name of the president`}],p={getRows(e){let t=f.slice(e.startRow,e.endRow);e.successCallback(t,f.length)}},m={args:{...d.args,toolbarOptions:{tagSelector:{tags:f,datasource:p,pageSize:f.length,totalCount:f.length}}}},h={args:{...d.args,value:`This is a disabled editor`,disabled:!0}},g={args:{className:`min-w-[400px] max-h-[250px]`,resizable:!1}},_={args:{...d.args,toolbarOptions:{image:!0}}},v={args:{...d.args,value:`<table class="custom-table"><thead><tr><th class="custom-header">Name</th><th class="custom-header">Role</th><th class="custom-header">Status</th></tr></thead><tbody><tr><td class="custom-cell">Jana De Letter</td><td class="custom-cell">Frontend Dev</td><td class="custom-cell">Active</td></tr><tr><td class="custom-cell">John Doe</td><td class="custom-cell">Backend Dev</td><td class="custom-cell">Inactive</td></tr></tbody></table>`,contentStyle:`.custom-table { border-collapse: collapse; width: 100%; background-color: #f0f4ff; } .custom-header { background-color: #3b5bdb; color: white; padding: 8px 12px; text-align: left; } .custom-cell { padding: 8px 12px; border-bottom: 1px solid #c5d0e6; }`}},y={args:{...d.args,value:`<div class="header-container">    <p class="second-page-header-title"><tag-node label="Data.Building.Name" value="Data.Building.Name"></tag-node> - <tag-node label="Title.Title" value="Title.Title"></tag-node></p> </div>`,contentStyle:`p { color: red; font-weight: bold; } .tag-node { background-color: yellow; padding: 2px 4px; border-radius: 4px; }`}},b=`rte-story-server`,x=()=>{try{let e=localStorage.getItem(b);if(e)return JSON.parse(e)}catch{}return{value:`<p style="margin: 0px; min-height: 20px;">Server-saved content</p>`,lastModifiedAt:new Date(`2020-01-01`).toISOString()}},S=e=>{let t=(0,c.useRef)(null),[n,r]=(0,c.useState)(x),i=(0,c.useRef)(n.value),o=(0,c.useCallback)(e=>{i.current=e},[]),u=(0,c.useCallback)(()=>{let e={value:i.current,lastModifiedAt:new Date().toISOString()};try{localStorage.setItem(b,JSON.stringify(e))}catch{}r(e)},[]),d=(0,c.useCallback)(()=>{t.current?.discardDraft()},[]);return(0,l.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,l.jsxs)(`p`,{className:`text-sm text-gray-500`,children:[`Server last updated:`,` `,new Date(n.lastModifiedAt).toLocaleString()]}),(0,l.jsx)(a,{...e,ref:t,value:n.value,lastModifiedAt:n.lastModifiedAt,onChange:o}),(0,l.jsxs)(`div`,{className:`flex gap-2`,children:[(0,l.jsx)(s,{onPress:u,children:`Save`}),(0,l.jsx)(s,{onPress:d,children:`Discard draft`})]})]})},C={args:{...d.args,saveToDraft:!0,localStorageKey:{id:`rte-draft`,entityType:`my-entity-type`,entityId:`my-entity-id`}},render:e=>(0,l.jsx)(S,{...e})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    className: "min-w-[500px]"
  }
}`,...d.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: "This is a disabled editor",
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    className: "min-w-[400px] max-h-[250px]",
    resizable: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    toolbarOptions: {
      image: true
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: \`<table class="custom-table"><thead><tr><th class="custom-header">Name</th><th class="custom-header">Role</th><th class="custom-header">Status</th></tr></thead><tbody><tr><td class="custom-cell">Jana De Letter</td><td class="custom-cell">Frontend Dev</td><td class="custom-cell">Active</td></tr><tr><td class="custom-cell">John Doe</td><td class="custom-cell">Backend Dev</td><td class="custom-cell">Inactive</td></tr></tbody></table>\`,
    contentStyle: ".custom-table { border-collapse: collapse; width: 100%; background-color: #f0f4ff; } .custom-header { background-color: #3b5bdb; color: white; padding: 8px 12px; text-align: left; } .custom-cell { padding: 8px 12px; border-bottom: 1px solid #c5d0e6; }"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: '<div class="header-container">    <p class="second-page-header-title"><tag-node label="Data.Building.Name" value="Data.Building.Name"></tag-node> - <tag-node label="Title.Title" value="Title.Title"></tag-node></p> </div>',
    contentStyle: "p { color: red; font-weight: bold; } .tag-node { background-color: yellow; padding: 2px 4px; border-radius: 4px; }"
  }
}`,...y.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithTagSelect`,`Disabled`,`NonResizable`,`WithImage`,`WithTableExistingStyles`,`WithHtmlContentAndCustomStyles`,`WithDiscardDraft`]}))();export{d as Default,h as Disabled,g as NonResizable,C as WithDiscardDraft,y as WithHtmlContentAndCustomStyles,_ as WithImage,v as WithTableExistingStyles,m as WithTagSelect,w as __namedExportsOrder,u as default};