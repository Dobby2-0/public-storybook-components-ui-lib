import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{B as h}from"./Button-QLinDYZH.js";import{c as K}from"./index-By-mRCMU.js";import{r}from"./index-DRjF_FHU.js";import{u as Q}from"./index-BSPp2CQF.js";import{u as U}from"./useTranslation-BZwSnrkG.js";import"./index-wL3GxAOQ.js";import"./useFocusRing-DmDxhQCI.js";import"./index-rX-Bn4lm.js";import"./platform-SeyP_Zfo.js";import"./ButtonBase-Bq7SsEL2.js";import"./Loader-Cgl1KvpE.js";import"./Button-B8-bwU7B.js";import"./Hidden-CICGlFC4.js";import"./useFocusable-Cuxsel3J.js";import"./usePress-76wSwCmG.js";import"./openLink--SV7cA94.js";const X=({title:s,titleId:t,...n})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":t,...n,children:[s?e.jsx("title",{id:t,children:s}):null,e.jsx("path",{d:"M3.378 15.3a.66.66 0 0 1-.481-.193.64.64 0 0 1-.197-.479V13q0-.27.094-.512.093-.245.3-.45l8.944-8.944a1.3 1.3 0 0 1 .953-.394q.266 0 .509.094.244.093.45.3l.956.956q.207.207.3.45.094.244.094.498 0 .27-.094.516a1.3 1.3 0 0 1-.3.449l-8.943 8.943a1.3 1.3 0 0 1-.96.394zm9.616-9.337.956-.957-.956-.956-.957.956z"})]}),u=r.forwardRef(({heading:s,enableEditing:t=!1,onEditingChange:n,onCancelEditing:l,onSaveChanges:d,editButtonText:W,children:A,className:C,defaultEditing:M=!1,saveButtonProps:k,cancelButtonProps:L,...D},F)=>{const{t:g}=U("components"),x=Q(),[a,R]=r.useState(t&&M),[f,v]=r.useState(!1),o=r.useCallback(j=>{R(!j),n==null||n(!j)},[n]),z=r.useCallback(()=>{o(a),l==null||l()},[o,a,l]),G=r.useCallback(()=>{(async()=>{try{v(!0),await(d==null?void 0:d()),o(a)}finally{x()&&v(!1)}})()},[o,a,x,d]),N=e.jsx(h,{variant:"ghost",prefix:e.jsx(X,{}),onPress:()=>o(a),...k??{},children:W??g("Card.edit","Edit")}),H=e.jsx(h,{variant:"ghost",onPress:z,isDisabled:f,...L??{},children:g("actions.cancel","Cancel",{ns:"common"})}),O=e.jsxs(h,{variant:"primary",onPress:G,isLoading:f,children:[f,g("actions.saveChanges","Save changes",{ns:"common"})]}),J=e.jsxs("div",{className:"grid grid-cols-[1fr_104px] gap-3.5 mb-2.5 pb-2.5 border-b border-neutral-200",children:[s,t&&!a&&N]});return e.jsxs("div",{ref:F,className:K("w-full bg-neutral rounded-md p-[15px]",t&&!s&&"grid grid-cols-[1fr_auto] gap-3.5",a&&"bg-neutral-150 dark:bg-neutral-300 grid-cols-none gap-0",C),...D,children:[s&&J,A,t&&!s&&!a&&N,a&&e.jsxs("div",{className:"w-full flex items-center justify-end gap-3.5 mt-3.5",children:[H,O]})]})});u.displayName="Card";try{u.displayName="Card",u.__docgenInfo={description:"",displayName:"Card",props:{heading:{defaultValue:null,description:"Optional heading element for the panel",name:"heading",required:!1,type:{name:"ReactNode"}},enableEditing:{defaultValue:{value:"false"},description:"Should the edit button be shown",name:"enableEditing",required:!1,type:{name:"boolean"}},defaultEditing:{defaultValue:{value:"false"},description:"Sets the initial state of the component for editing",name:"defaultEditing",required:!1,type:{name:"boolean"}},onEditingChange:{defaultValue:null,description:"Function called when the editing state changes",name:"onEditingChange",required:!1,type:{name:"((editing: boolean) => void)"}},onCancelEditing:{defaultValue:null,description:"Function called when editing is canceled",name:"onCancelEditing",required:!1,type:{name:"(() => void)"}},onSaveChanges:{defaultValue:null,description:"Function called when the user wants to save the changes made",name:"onSaveChanges",required:!1,type:{name:"(() => void | Promise<void>)"}},editButtonText:{defaultValue:null,description:"Text for the edit button",name:"editButtonText",required:!1,type:{name:"string"}},saveButtonProps:{defaultValue:null,description:"Extra button props for the save button",name:"saveButtonProps",required:!1,type:{name:"ButtonProps"}},cancelButtonProps:{defaultValue:null,description:"Extra button props for the cancel button",name:"cancelButtonProps",required:!1,type:{name:"ButtonProps"}}}}}catch{}const ge={component:u},c={args:{children:"This is a simple card component."}},i={args:{enableEditing:!0,children:e.jsxs("div",{className:"grid grid-cols-2 gap-3.5",children:[e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-y-3.5",children:[e.jsx("p",{className:"font-medium",children:"Straat"}),e.jsx("span",{children:"Mechelsesteenweg"}),e.jsx("p",{className:"font-medium",children:"Nr."}),e.jsx("span",{children:"180"}),e.jsx("p",{className:"font-medium",children:"Bus"}),e.jsx("span",{children:"5"})]}),e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-y-3.5",children:[e.jsx("p",{className:"font-medium",children:"Postcode"}),e.jsx("span",{children:"2018"}),e.jsx("p",{className:"font-medium",children:"Gemeente"}),e.jsx("span",{children:"Antwerpen"}),e.jsx("p",{className:"font-medium",children:"Land"}),e.jsx("span",{children:"België"})]})]}),onSaveChanges:()=>new Promise(s=>setTimeout(s,3e3))}},m={args:{...i.args,heading:e.jsx("h2",{className:"text-lg font-display font-semibold",children:"Adres"})}},p={args:{defaultEditing:!0,...i.args,heading:e.jsx("h2",{className:"text-lg font-display font-semibold",children:"Adres"})}};var b,y,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "This is a simple card component."
  }
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var B,E,_;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(_=(E=i.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var P,S,q;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...WithEditingElements.args,
    heading: <h2 className="text-lg font-display font-semibold">Adres</h2>
  }
}`,...(q=(S=m.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var V,T,I;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultEditing: true,
    ...WithEditingElements.args,
    heading: <h2 className="text-lg font-display font-semibold">Adres</h2>
  }
}`,...(I=(T=p.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const fe=["Default","WithEditingElements","WithHeading","InEditingState"];export{c as Default,p as InEditingState,i as WithEditingElements,m as WithHeading,fe as __namedExportsOrder,ge as default};
