import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{B as f}from"./Button-BUAq0lp_.js";import{c as O}from"./index-By-mRCMU.js";import{r}from"./index-DRjF_FHU.js";import{u as J}from"./index-BSPp2CQF.js";import{u as K}from"./useTranslation-BZwSnrkG.js";import"./index-wL3GxAOQ.js";import"./useFocusRing-DmDxhQCI.js";import"./index-rX-Bn4lm.js";import"./platform-SeyP_Zfo.js";import"./ButtonBase-C9UrqI5D.js";import"./Loader-Cgl1KvpE.js";import"./Button-B8-bwU7B.js";import"./Hidden-CICGlFC4.js";import"./useFocusable-Cuxsel3J.js";import"./usePress-76wSwCmG.js";import"./openLink--SV7cA94.js";const Q=({title:s,titleId:n,...t})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":n,...t,children:[s?e.jsx("title",{id:n,children:s}):null,e.jsx("path",{d:"M3.378 15.3a.66.66 0 0 1-.481-.193.64.64 0 0 1-.197-.479V13q0-.27.094-.512.093-.245.3-.45l8.944-8.944a1.3 1.3 0 0 1 .953-.394q.266 0 .509.094.244.093.45.3l.956.956q.207.207.3.45.094.244.094.498 0 .27-.094.516a1.3 1.3 0 0 1-.3.449l-8.943 8.943a1.3 1.3 0 0 1-.96.394zm9.616-9.337.956-.957-.956-.956-.957.956z"})]}),u=r.forwardRef(({heading:s,enableEditing:n=!1,onEditingChange:t,onCancelEditing:l,onSaveChanges:o,editButtonText:W,children:A,className:C,defaultEditing:M=!1,...k},L)=>{const{t:g}=K("components"),x=J(),[a,D]=r.useState(n&&M),[h,v]=r.useState(!1),d=r.useCallback(j=>{D(!j),t==null||t(!j)},[t]),F=r.useCallback(()=>{d(a),l==null||l()},[d,a,l]),R=r.useCallback(()=>{(async()=>{try{v(!0),await(o==null?void 0:o()),d(a)}finally{x()&&v(!1)}})()},[d,a,x,o]),N=e.jsx(f,{variant:"ghost",prefix:e.jsx(Q,{}),onPress:()=>d(a),children:W??g("Card.edit","Edit")}),z=e.jsx(f,{variant:"ghost",onPress:F,isDisabled:h,children:g("actions.cancel","Cancel",{ns:"common"})}),G=e.jsxs(f,{variant:"primary",onPress:R,isLoading:h,children:[h,g("actions.saveChanges","Save changes",{ns:"common"})]}),H=e.jsxs("div",{className:"grid grid-cols-[1fr_104px] gap-3.5 mb-2.5 pb-2.5 border-b border-neutral-200",children:[s,n&&!a&&N]});return e.jsxs("div",{ref:L,className:O("w-full bg-neutral rounded-md p-[15px]",n&&!s&&"grid grid-cols-[1fr_auto] gap-3.5",a&&"bg-neutral-150 dark:bg-neutral-300 grid-cols-none gap-0",C),...k,children:[s&&H,A,n&&!s&&!a&&N,a&&e.jsxs("div",{className:"w-full flex items-center justify-end gap-3.5 mt-3.5",children:[z,G]})]})});u.displayName="Card";try{u.displayName="Card",u.__docgenInfo={description:"",displayName:"Card",props:{heading:{defaultValue:null,description:"Optional heading element for the panel",name:"heading",required:!1,type:{name:"ReactNode"}},enableEditing:{defaultValue:{value:"false"},description:"Should the edit button be shown",name:"enableEditing",required:!1,type:{name:"boolean"}},defaultEditing:{defaultValue:{value:"false"},description:"Sets the initial state of the component for editing",name:"defaultEditing",required:!1,type:{name:"boolean"}},onEditingChange:{defaultValue:null,description:"Function called when the editing state changes",name:"onEditingChange",required:!1,type:{name:"((editing: boolean) => void)"}},onCancelEditing:{defaultValue:null,description:"Function called when editing is canceled",name:"onCancelEditing",required:!1,type:{name:"(() => void)"}},onSaveChanges:{defaultValue:null,description:"Function called when the user wants to save the changes made",name:"onSaveChanges",required:!1,type:{name:"(() => void | Promise<void>)"}},editButtonText:{defaultValue:null,description:"Text for the edit button",name:"editButtonText",required:!1,type:{name:"string"}}}}}catch{}const pe={component:u},c={args:{children:"This is a simple card component."}},i={args:{enableEditing:!0,children:e.jsxs("div",{className:"grid grid-cols-2 gap-3.5",children:[e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-y-3.5",children:[e.jsx("p",{className:"font-medium",children:"Straat"}),e.jsx("span",{children:"Mechelsesteenweg"}),e.jsx("p",{className:"font-medium",children:"Nr."}),e.jsx("span",{children:"180"}),e.jsx("p",{className:"font-medium",children:"Bus"}),e.jsx("span",{children:"5"})]}),e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-y-3.5",children:[e.jsx("p",{className:"font-medium",children:"Postcode"}),e.jsx("span",{children:"2018"}),e.jsx("p",{className:"font-medium",children:"Gemeente"}),e.jsx("span",{children:"Antwerpen"}),e.jsx("p",{className:"font-medium",children:"Land"}),e.jsx("span",{children:"België"})]})]}),onSaveChanges:()=>new Promise(s=>setTimeout(s,3e3))}},m={args:{...i.args,heading:e.jsx("h2",{className:"text-lg font-display font-semibold",children:"Adres"})}},p={args:{defaultEditing:!0,...i.args,heading:e.jsx("h2",{className:"text-lg font-display font-semibold",children:"Adres"})}};var y,b,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "This is a simple card component."
  }
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var E,_,B;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
      </div>,
    onSaveChanges: () => new Promise(resolve => setTimeout(resolve, 3000))
  }
}`,...(B=(_=i.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var S,q,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...WithEditingElements.args,
    heading: <h2 className="text-lg font-display font-semibold">Adres</h2>
  }
}`,...(T=(q=m.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var P,V,I;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    defaultEditing: true,
    ...WithEditingElements.args,
    heading: <h2 className="text-lg font-display font-semibold">Adres</h2>
  }
}`,...(I=(V=p.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const ue=["Default","WithEditingElements","WithHeading","InEditingState"];export{c as Default,p as InEditingState,i as WithEditingElements,m as WithHeading,ue as __namedExportsOrder,pe as default};
