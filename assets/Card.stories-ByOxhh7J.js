import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{B as m}from"./Button-DGcoDfc9.js";import{c as I}from"./index-DbF_LCtC.js";import{r as h}from"./index-DRjF_FHU.js";import"./index-Bij0-_d0.js";import"./useFocusRing-CTUx4aJi.js";import"./index-rX-Bn4lm.js";import"./platform-SeyP_Zfo.js";import"./ButtonBase-Ci4ONu_x.js";import"./Button-DUand396.js";import"./Hidden-C-5vjR2A.js";import"./useFocusable-BlssCjI6.js";import"./usePress-BJWzjFmP.js";import"./openLink-Bn3ypVk4.js";const M=({title:s,titleId:n,...r})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":n,...r,children:[s?e.jsx("title",{id:n,children:s}):null,e.jsx("path",{d:"M3.378 15.3a.66.66 0 0 1-.481-.193.64.64 0 0 1-.197-.479V13q0-.27.094-.512.093-.245.3-.45l8.944-8.944a1.3 1.3 0 0 1 .953-.394q.266 0 .509.094.244.093.45.3l.956.956q.207.207.3.45.094.244.094.498 0 .27-.094.516a1.3 1.3 0 0 1-.3.449l-8.943 8.943a1.3 1.3 0 0 1-.96.394zm9.616-9.337.956-.957-.956-.956-.957.956z"})]}),l=h.forwardRef(({heading:s,enableEditing:n,onEditingChange:r,onCancelEditing:o,onSaveChanges:c,children:B,className:E,...q},W)=>{const[a,S]=h.useState(!1),p=g=>{S(!g),r==null||r(!g)},V=()=>{p(a),o==null||o()},A=()=>{p(a),c==null||c()},u=e.jsx(m,{variant:"ghost",prefix:e.jsx(M,{}),onPress:()=>p(a),children:"Bewerk"}),P=e.jsx(m,{variant:"ghost",onPress:V,children:"Annuleren"}),z=e.jsx(m,{variant:"primary",onPress:A,children:"Wijziging opslaan"}),F=e.jsxs("div",{className:"grid grid-cols-[1fr_104px] gap-3.5 mb-2.5 pb-2.5 border-b border-neutral-200",children:[s,n&&!a&&u]});return e.jsxs("div",{ref:W,className:I("w-full bg-neutral rounded-md p-[15px]",n&&!s&&"grid grid-cols-[1fr_104px] gap-3.5",a&&"bg-neutral-150 dark:bg-neutral-300 grid-cols-none gap-0",E),...q,children:[s&&F,B,n&&!s&&!a&&u,a&&e.jsxs("div",{className:"w-full flex items-center justify-end gap-3.5 mt-3.5",children:[P,z]})]})});l.displayName="Card";try{l.displayName="Card",l.__docgenInfo={description:"",displayName:"Card",props:{heading:{defaultValue:null,description:"Optional heading element for the panel",name:"heading",required:!1,type:{name:"ReactNode"}},enableEditing:{defaultValue:null,description:"Should the edit button be shown",name:"enableEditing",required:!1,type:{name:"boolean"}},onEditingChange:{defaultValue:null,description:"Function called when the editing state changes",name:"onEditingChange",required:!1,type:{name:"((editing: boolean) => void)"}},onCancelEditing:{defaultValue:null,description:"Function called when editing is canceled",name:"onCancelEditing",required:!1,type:{name:"(() => void)"}},onSaveChanges:{defaultValue:null,description:"Function called when the user wants to save the changes made",name:"onSaveChanges",required:!1,type:{name:"(() => void)"}}}}}catch{}const Y={component:l},i={args:{children:"This is a simple card component."}},t={args:{enableEditing:!0,children:e.jsxs("div",{className:"grid grid-cols-2 gap-3.5",children:[e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-y-3.5",children:[e.jsx("p",{className:"font-medium",children:"Straat"}),e.jsx("span",{children:"Mechelsesteenweg"}),e.jsx("p",{className:"font-medium",children:"Nr."}),e.jsx("span",{children:"180"}),e.jsx("p",{className:"font-medium",children:"Bus"}),e.jsx("span",{children:"5"})]}),e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-y-3.5",children:[e.jsx("p",{className:"font-medium",children:"Postcode"}),e.jsx("span",{children:"2018"}),e.jsx("p",{className:"font-medium",children:"Gemeente"}),e.jsx("span",{children:"Antwerpen"}),e.jsx("p",{className:"font-medium",children:"Land"}),e.jsx("span",{children:"België"})]})]})}},d={args:{...t.args,heading:e.jsx("h2",{className:"text-lg font-display font-semibold",children:"Adres"})}};var f,x,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "This is a simple card component."
  }
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var N,v,w;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    enableEditing: true,
    children: <div className="grid grid-cols-2 gap-3.5">
        <div className="grid grid-cols-[150px_1fr] gap-y-3.5">
          <p className="font-medium">Straat</p>
          <span>Mechelsesteenweg</span>
          <p className="font-medium">Nr.</p>
          <span>180</span>
          <p className="font-medium">Bus</p>
          <span>5</span>
        </div>
        <div className="grid grid-cols-[150px_1fr] gap-y-3.5">
          <p className="font-medium">Postcode</p>
          <span>2018</span>
          <p className="font-medium">Gemeente</p>
          <span>Antwerpen</span>
          <p className="font-medium">Land</p>
          <span>België</span>
        </div>
      </div>
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,b,_;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...WithEditingElements.args,
    heading: <h2 className="text-lg font-display font-semibold">Adres</h2>
  }
}`,...(_=(b=d.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const Z=["Default","WithEditingElements","WithHeading"];export{i as Default,t as WithEditingElements,d as WithHeading,Z as __namedExportsOrder,Y as default};
