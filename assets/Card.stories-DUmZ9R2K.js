import{j as e}from"./jsx-runtime-F1iDwNaf.js";import{B as x}from"./Button-DCvI_gvQ.js";import{c as y}from"./index-D8pzxCuu.js";import{r as n}from"./index-YTOF1_EJ.js";import{a as U}from"./index-u5j6GQhH.js";import{u as X}from"./useTranslation-Dw3DpAYw.js";import"./index-D35RSF8M.js";import"./useFocusRing-B1ouhyhB.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-D9NrWT9H.js";import"./Loader-Baa5_8E0.js";import"./Button-C7PApyUU.js";import"./Hidden-BjV2exVj.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./useFocusable-GFIwMB8r.js";import"./usePress-BLmxXolk.js";import"./openLink-8mltwmIb.js";const Y=({title:s,titleId:o,...t})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":o,...t,children:[s?e.jsx("title",{id:o,children:s}):null,e.jsx("path",{d:"M3.378 15.3a.66.66 0 0 1-.481-.193.64.64 0 0 1-.197-.479V13q0-.27.094-.512.093-.245.3-.45l8.944-8.944a1.3 1.3 0 0 1 .953-.394q.266 0 .509.094.244.093.45.3l.956.956q.207.207.3.45.094.244.094.498 0 .27-.094.516a1.3 1.3 0 0 1-.3.449l-8.943 8.943a1.3 1.3 0 0 1-.96.394zm9.616-9.337.956-.957-.956-.956-.957.956z"})]}),g=n.forwardRef(({heading:s,removeHeadingBorder:o=!1,enableEditing:t=!1,onEditingChange:l,onCancelEditing:d,onSaveChanges:c,editButtonText:C,children:M,className:k,defaultEditing:H=!1,saveButtonProps:L,cancelButtonProps:R,...D},F)=>{const{t:f}=X("components"),v=U(),[a,z]=n.useState(t&&H),[h,b]=n.useState(!1),i=n.useCallback(j=>{z(!j),l==null||l(!j)},[l]),G=n.useCallback(()=>{i(a),d==null||d()},[i,a,d]),O=n.useCallback(()=>{(async()=>{try{b(!0),await(c==null?void 0:c()),i(a)}finally{v()&&b(!1)}})()},[i,a,v,c]),N=e.jsx(x,{variant:"ghost",prefix:e.jsx(Y,{}),onPress:()=>i(a),...L??{},children:C??f("Card.edit","Edit")}),J=e.jsx(x,{variant:"ghost",onPress:G,isDisabled:h,...R??{},children:f("actions.cancel","Cancel",{ns:"common"})}),K=e.jsxs(x,{variant:"primary",onPress:O,isLoading:h,children:[h,f("actions.saveChanges","Save changes",{ns:"common"})]}),Q=e.jsxs("div",{className:y("grid grid-cols-[1fr_104px] gap-3.5 mb-2.5 border-neutral-200",!o&&"pb-2.5 border-b"),children:[s,t&&!a&&N]});return e.jsxs("div",{ref:F,className:y("w-full bg-neutral rounded-md p-[15px]",t&&!s&&"grid grid-cols-[1fr_auto] gap-3.5",a&&"bg-neutral-150 dark:bg-neutral-300 grid-cols-none gap-0",k),...D,children:[s&&Q,M,t&&!s&&!a&&N,a&&e.jsxs("div",{className:"w-full flex items-center justify-end gap-3.5 mt-3.5",children:[J,K]})]})});g.displayName="Card";try{g.displayName="Card",g.__docgenInfo={description:"",displayName:"Card",props:{heading:{defaultValue:null,description:"Optional heading element for the panel",name:"heading",required:!1,type:{name:"ReactNode"}},removeHeadingBorder:{defaultValue:{value:"false"},description:"Remove the border underneath the optional heading",name:"removeHeadingBorder",required:!1,type:{name:"boolean"}},enableEditing:{defaultValue:{value:"false"},description:"Should the edit button be shown",name:"enableEditing",required:!1,type:{name:"boolean"}},defaultEditing:{defaultValue:{value:"false"},description:"Sets the initial state of the component for editing",name:"defaultEditing",required:!1,type:{name:"boolean"}},onEditingChange:{defaultValue:null,description:"Function called when the editing state changes",name:"onEditingChange",required:!1,type:{name:"((editing: boolean) => void)"}},onCancelEditing:{defaultValue:null,description:"Function called when editing is canceled",name:"onCancelEditing",required:!1,type:{name:"(() => void)"}},onSaveChanges:{defaultValue:null,description:"Function called when the user wants to save the changes made",name:"onSaveChanges",required:!1,type:{name:"(() => void | Promise<void>)"}},editButtonText:{defaultValue:null,description:"Text for the edit button",name:"editButtonText",required:!1,type:{name:"string"}},saveButtonProps:{defaultValue:null,description:"Extra button props for the save button",name:"saveButtonProps",required:!1,type:{name:"ButtonProps"}},cancelButtonProps:{defaultValue:null,description:"Extra button props for the cancel button",name:"cancelButtonProps",required:!1,type:{name:"ButtonProps"}}}}}catch{}const he={component:g},m={args:{children:"This is a simple card component."}},r={args:{enableEditing:!0,children:e.jsxs("div",{className:"grid grid-cols-2 gap-3.5",children:[e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-y-3.5",children:[e.jsx("p",{className:"font-medium",children:"Straat"}),e.jsx("span",{children:"Mechelsesteenweg"}),e.jsx("p",{className:"font-medium",children:"Nr."}),e.jsx("span",{children:"180"}),e.jsx("p",{className:"font-medium",children:"Bus"}),e.jsx("span",{children:"5"})]}),e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-y-3.5",children:[e.jsx("p",{className:"font-medium",children:"Postcode"}),e.jsx("span",{children:"2018"}),e.jsx("p",{className:"font-medium",children:"Gemeente"}),e.jsx("span",{children:"Antwerpen"}),e.jsx("p",{className:"font-medium",children:"Land"}),e.jsx("span",{children:"België"})]})]}),onSaveChanges:()=>new Promise(s=>setTimeout(s,3e3))}},p={args:{...r.args,heading:e.jsx("h2",{className:"text-lg font-display font-semibold",children:"Adres"})}},u={args:{defaultEditing:!0,...r.args,heading:e.jsx("h2",{className:"text-lg font-display font-semibold",children:"Adres"})}};var B,w,E;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "This is a simple card component."
  }
}`,...(E=(w=m.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var _,P,q;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(P=r.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var S,V,T;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...WithEditingElements.args,
    heading: <h2 className="text-lg font-display font-semibold">Adres</h2>
  }
}`,...(T=(V=p.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var I,W,A;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    defaultEditing: true,
    ...WithEditingElements.args,
    heading: <h2 className="text-lg font-display font-semibold">Adres</h2>
  }
}`,...(A=(W=u.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const xe=["Default","WithEditingElements","WithHeading","InEditingState"];export{m as Default,u as InEditingState,r as WithEditingElements,p as WithHeading,xe as __namedExportsOrder,he as default};
