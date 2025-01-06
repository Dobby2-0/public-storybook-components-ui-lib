import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{B as u}from"./Button-CzAE_IkZ.js";import{c as M}from"./index-By-mRCMU.js";import{r as f}from"./index-DRjF_FHU.js";import{u as R}from"./useTranslation-CB18ANDh.js";import"./index-wL3GxAOQ.js";import"./useFocusRing-BAhATwIy.js";import"./index-rX-Bn4lm.js";import"./platform-SeyP_Zfo.js";import"./ButtonBase-Fd1ZH_tw.js";import"./Button-CyibnrWd.js";import"./Hidden-D-_eR-7_.js";import"./useFocusable-D3lBzjxr.js";import"./usePress-1rgcYdKS.js";import"./openLink--SV7cA94.js";import"./context-BLxVKTzt.js";const z=({title:s,titleId:n,...t})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":n,...t,children:[s?e.jsx("title",{id:n,children:s}):null,e.jsx("path",{d:"M3.378 15.3a.66.66 0 0 1-.481-.193.64.64 0 0 1-.197-.479V13q0-.27.094-.512.093-.245.3-.45l8.944-8.944a1.3 1.3 0 0 1 .953-.394q.266 0 .509.094.244.093.45.3l.956.956q.207.207.3.45.094.244.094.498 0 .27-.094.516a1.3 1.3 0 0 1-.3.449l-8.943 8.943a1.3 1.3 0 0 1-.96.394zm9.616-9.337.956-.957-.956-.956-.957.956z"})]}),l=f.forwardRef(({heading:s,enableEditing:n,onEditingChange:t,onCancelEditing:o,onSaveChanges:c,editButtonText:E,children:q,className:S,...V},T)=>{const{t:m}=R("components"),[a,W]=f.useState(!1),p=h=>{W(!h),t==null||t(!h)},P=()=>{p(a),o==null||o()},A=()=>{p(a),c==null||c()},g=e.jsx(u,{variant:"ghost",prefix:e.jsx(z,{}),onPress:()=>p(a),children:E??m("Card.Edit","Edit")}),C=e.jsx(u,{variant:"ghost",onPress:P,children:m("actions.cancel","Cancel",{ns:"common"})}),F=e.jsx(u,{variant:"primary",onPress:A,children:m("actions.save_changes","Save changes",{ns:"common"})}),I=e.jsxs("div",{className:"grid grid-cols-[1fr_104px] gap-3.5 mb-2.5 pb-2.5 border-b border-neutral-200",children:[s,n&&!a&&g]});return e.jsxs("div",{ref:T,className:M("w-full bg-neutral rounded-md p-[15px]",n&&!s&&"grid grid-cols-[1fr_auto] gap-3.5",a&&"bg-neutral-150 dark:bg-neutral-300 grid-cols-none gap-0",S),...V,children:[s&&I,q,n&&!s&&!a&&g,a&&e.jsxs("div",{className:"w-full flex items-center justify-end gap-3.5 mt-3.5",children:[C,F]})]})});l.displayName="Card";try{l.displayName="Card",l.__docgenInfo={description:"",displayName:"Card",props:{heading:{defaultValue:null,description:"Optional heading element for the panel",name:"heading",required:!1,type:{name:"ReactNode"}},enableEditing:{defaultValue:null,description:"Should the edit button be shown",name:"enableEditing",required:!1,type:{name:"boolean"}},onEditingChange:{defaultValue:null,description:"Function called when the editing state changes",name:"onEditingChange",required:!1,type:{name:"((editing: boolean) => void)"}},onCancelEditing:{defaultValue:null,description:"Function called when editing is canceled",name:"onCancelEditing",required:!1,type:{name:"(() => void)"}},onSaveChanges:{defaultValue:null,description:"Function called when the user wants to save the changes made",name:"onSaveChanges",required:!1,type:{name:"(() => void)"}},editButtonText:{defaultValue:null,description:"",name:"editButtonText",required:!1,type:{name:"string"}}}}}catch{}const ae={component:l},i={args:{children:"This is a simple card component."}},r={args:{enableEditing:!0,children:e.jsxs("div",{className:"grid grid-cols-2 gap-3.5",children:[e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-y-3.5",children:[e.jsx("p",{className:"font-medium",children:"Straat"}),e.jsx("span",{children:"Mechelsesteenweg"}),e.jsx("p",{className:"font-medium",children:"Nr."}),e.jsx("span",{children:"180"}),e.jsx("p",{className:"font-medium",children:"Bus"}),e.jsx("span",{children:"5"})]}),e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-y-3.5",children:[e.jsx("p",{className:"font-medium",children:"Postcode"}),e.jsx("span",{children:"2018"}),e.jsx("p",{className:"font-medium",children:"Gemeente"}),e.jsx("span",{children:"Antwerpen"}),e.jsx("p",{className:"font-medium",children:"Land"}),e.jsx("span",{children:"België"})]})]})}},d={args:{...r.args,heading:e.jsx("h2",{className:"text-lg font-display font-semibold",children:"Adres"})}};var x,j,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "This is a simple card component."
  }
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var v,y,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,_,B;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...WithEditingElements.args,
    heading: <h2 className="text-lg font-display font-semibold">Adres</h2>
  }
}`,...(B=(_=d.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const ne=["Default","WithEditingElements","WithHeading"];export{i as Default,r as WithEditingElements,d as WithHeading,ne as __namedExportsOrder,ae as default};
