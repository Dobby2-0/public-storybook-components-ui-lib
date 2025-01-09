import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{B as g}from"./Button-CiELxvHh.js";import{c as H}from"./index-By-mRCMU.js";import{r as x}from"./index-DRjF_FHU.js";import{u as L}from"./useTranslation-CB18ANDh.js";import"./index-wL3GxAOQ.js";import"./useFocusRing-BAhATwIy.js";import"./index-rX-Bn4lm.js";import"./platform-SeyP_Zfo.js";import"./ButtonBase-BnUH43P8.js";import"./Button-CyibnrWd.js";import"./Hidden-D-_eR-7_.js";import"./useFocusable-D3lBzjxr.js";import"./usePress-1rgcYdKS.js";import"./openLink--SV7cA94.js";import"./context-BLxVKTzt.js";const O=({title:s,titleId:a,...r})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":a,...r,children:[s?e.jsx("title",{id:a,children:s}):null,e.jsx("path",{d:"M3.378 15.3a.66.66 0 0 1-.481-.193.64.64 0 0 1-.197-.479V13q0-.27.094-.512.093-.245.3-.45l8.944-8.944a1.3 1.3 0 0 1 .953-.394q.266 0 .509.094.244.093.45.3l.956.956q.207.207.3.45.094.244.094.498 0 .27-.094.516a1.3 1.3 0 0 1-.3.449l-8.943 8.943a1.3 1.3 0 0 1-.96.394zm9.616-9.337.956-.957-.956-.956-.957.956z"})]}),o=x.forwardRef(({heading:s,enableEditing:a=!1,onEditingChange:r,onCancelEditing:c,onSaveChanges:m,editButtonText:W,children:A,className:T,defaultEditing:I=!1,...P},C)=>{const{t:p}=L("components"),[n,F]=x.useState(a&&I),u=f=>{F(!f),r==null||r(!f)},M=()=>{u(n),c==null||c()},R=()=>{u(n),m==null||m()},h=e.jsx(g,{variant:"ghost",prefix:e.jsx(O,{}),onPress:()=>u(n),children:W??p("Card.edit","Edit")}),z=e.jsx(g,{variant:"ghost",onPress:M,children:p("actions.cancel","Cancel",{ns:"common"})}),D=e.jsx(g,{variant:"primary",onPress:R,children:p("actions.saveChanges","Save changes",{ns:"common"})}),G=e.jsxs("div",{className:"grid grid-cols-[1fr_104px] gap-3.5 mb-2.5 pb-2.5 border-b border-neutral-200",children:[s,a&&!n&&h]});return e.jsxs("div",{ref:C,className:H("w-full bg-neutral rounded-md p-[15px]",a&&!s&&"grid grid-cols-[1fr_auto] gap-3.5",n&&"bg-neutral-150 dark:bg-neutral-300 grid-cols-none gap-0",T),...P,children:[s&&G,A,a&&!s&&!n&&h,n&&e.jsxs("div",{className:"w-full flex items-center justify-end gap-3.5 mt-3.5",children:[z,D]})]})});o.displayName="Card";try{o.displayName="Card",o.__docgenInfo={description:"",displayName:"Card",props:{heading:{defaultValue:null,description:"Optional heading element for the panel",name:"heading",required:!1,type:{name:"ReactNode"}},enableEditing:{defaultValue:{value:"false"},description:"Should the edit button be shown",name:"enableEditing",required:!1,type:{name:"boolean"}},defaultEditing:{defaultValue:{value:"false"},description:"Sets the initial state of the component for editing",name:"defaultEditing",required:!1,type:{name:"boolean"}},onEditingChange:{defaultValue:null,description:"Function called when the editing state changes",name:"onEditingChange",required:!1,type:{name:"((editing: boolean) => void)"}},onCancelEditing:{defaultValue:null,description:"Function called when editing is canceled",name:"onCancelEditing",required:!1,type:{name:"(() => void)"}},onSaveChanges:{defaultValue:null,description:"Function called when the user wants to save the changes made",name:"onSaveChanges",required:!1,type:{name:"(() => void)"}},editButtonText:{defaultValue:null,description:"",name:"editButtonText",required:!1,type:{name:"string"}}}}}catch{}const de={component:o},i={args:{children:"This is a simple card component."}},t={args:{enableEditing:!0,children:e.jsxs("div",{className:"grid grid-cols-2 gap-3.5",children:[e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-y-3.5",children:[e.jsx("p",{className:"font-medium",children:"Straat"}),e.jsx("span",{children:"Mechelsesteenweg"}),e.jsx("p",{className:"font-medium",children:"Nr."}),e.jsx("span",{children:"180"}),e.jsx("p",{className:"font-medium",children:"Bus"}),e.jsx("span",{children:"5"})]}),e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-y-3.5",children:[e.jsx("p",{className:"font-medium",children:"Postcode"}),e.jsx("span",{children:"2018"}),e.jsx("p",{className:"font-medium",children:"Gemeente"}),e.jsx("span",{children:"Antwerpen"}),e.jsx("p",{className:"font-medium",children:"Land"}),e.jsx("span",{children:"België"})]})]})}},d={args:{...t.args,heading:e.jsx("h2",{className:"text-lg font-display font-semibold",children:"Adres"})}},l={args:{defaultEditing:!0,...t.args,heading:e.jsx("h2",{className:"text-lg font-display font-semibold",children:"Adres"})}};var N,j,v;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "This is a simple card component."
  }
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var y,b,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var E,_,B;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...WithEditingElements.args,
    heading: <h2 className="text-lg font-display font-semibold">Adres</h2>
  }
}`,...(B=(_=d.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var S,q,V;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    defaultEditing: true,
    ...WithEditingElements.args,
    heading: <h2 className="text-lg font-display font-semibold">Adres</h2>
  }
}`,...(V=(q=l.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};const le=["Default","WithEditingElements","WithHeading","InEditingState"];export{i as Default,l as InEditingState,t as WithEditingElements,d as WithHeading,le as __namedExportsOrder,de as default};
