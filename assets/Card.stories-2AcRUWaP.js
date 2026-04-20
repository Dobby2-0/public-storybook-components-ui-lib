import{r as t,u as U,j as e,c as y}from"./iframe-oEuJi57G.js";import{B as h}from"./Button-yqwJt3X3.js";import{o as X}from"./Edit-BMtpcVVT.js";import{a as Y}from"./index-BwlHY3mc.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BICVp3Ky.js";import"./ButtonBase-C9eLrQ21.js";import"./Loader-BiiYAKiC.js";import"./Tooltip-DDOk3jHc.js";import"./index-CDMsDVTg.js";import"./index-Dcmk_gEP.js";import"./usePress-CWjT6aHk.js";import"./Button-DwvsmACz.js";import"./FocusScope-BMqEpHqw.js";import"./Text-BlxRAdj_.js";import"./RSPContexts-mf7-MgP5.js";import"./Separator-DhMowLpU.js";import"./index-D74kYfOJ.js";import"./VisuallyHidden-BXUgwH2T.js";const u=t.forwardRef(({heading:a,removeHeadingBorder:I=!1,enableEditing:r=!1,onEditingChange:o,onCancelEditing:d,onSaveChanges:l,editButtonText:C,children:k,className:H,defaultEditing:L=!1,saveButtonProps:M,cancelButtonProps:R,...D},F)=>{const{t:f}=U("components"),x=Y(),[s,G]=t.useState(r&&L),[g,v]=t.useState(!1),i=t.useCallback(b=>{G(!b),o==null||o(!b)},[o]),O=t.useCallback(()=>{i(s),d==null||d()},[i,s,d]),z=t.useCallback(()=>{(async()=>{try{v(!0),await(l==null?void 0:l()),i(s)}finally{x()&&v(!1)}})()},[i,s,x,l]),N=e.jsx(h,{variant:"ghost",prefix:e.jsx(X,{}),onPress:()=>i(s),...M??{},children:C??f("Card.edit","Edit")}),J=e.jsx(h,{variant:"ghost",onPress:O,isDisabled:g,...R??{},children:f("actions.cancel","Cancel",{ns:"common"})}),K=e.jsxs(h,{variant:"primary",onPress:z,isLoading:g,children:[g,f("actions.saveChanges","Save changes",{ns:"common"})]}),Q=e.jsxs("div",{className:y("mb-2.5 border-neutral-200",r&&"grid grid-cols-[1fr_104px] gap-3.5",!I&&"pb-2.5 border-b"),children:[a,r&&!s&&N]});return e.jsxs("div",{ref:F,className:y("w-full bg-neutral rounded-md p-[15px]",r&&!a&&"grid grid-cols-[1fr_auto] gap-3.5",s&&"bg-neutral-150 dark:bg-neutral-300 grid-cols-none gap-0",H),...D,children:[a&&Q,k,r&&!a&&!s&&N,s&&e.jsxs("div",{className:"w-full flex items-center justify-end gap-3.5 mt-3.5",children:[J,K]})]})});u.displayName="Card";try{u.displayName="Card",u.__docgenInfo={description:"",displayName:"Card",props:{heading:{defaultValue:null,description:"Optional heading element for the panel",name:"heading",required:!1,type:{name:"ReactNode"}},removeHeadingBorder:{defaultValue:{value:"false"},description:"Remove the border underneath the optional heading",name:"removeHeadingBorder",required:!1,type:{name:"boolean"}},enableEditing:{defaultValue:{value:"false"},description:"Should the edit button be shown",name:"enableEditing",required:!1,type:{name:"boolean"}},defaultEditing:{defaultValue:{value:"false"},description:"Sets the initial state of the component for editing",name:"defaultEditing",required:!1,type:{name:"boolean"}},onEditingChange:{defaultValue:null,description:"Function called when the editing state changes",name:"onEditingChange",required:!1,type:{name:"((editing: boolean) => void)"}},onCancelEditing:{defaultValue:null,description:"Function called when editing is canceled",name:"onCancelEditing",required:!1,type:{name:"(() => void)"}},onSaveChanges:{defaultValue:null,description:"Function called when the user wants to save the changes made",name:"onSaveChanges",required:!1,type:{name:"(() => void | Promise<void>)"}},editButtonText:{defaultValue:null,description:"Text for the edit button",name:"editButtonText",required:!1,type:{name:"string"}},saveButtonProps:{defaultValue:null,description:"Extra button props for the save button",name:"saveButtonProps",required:!1,type:{name:"ButtonProps"}},cancelButtonProps:{defaultValue:null,description:"Extra button props for the cancel button",name:"cancelButtonProps",required:!1,type:{name:"ButtonProps"}}}}}catch{}const xe={component:u},c={args:{children:"This is a simple card component."}},n={args:{enableEditing:!0,children:e.jsxs("div",{className:"grid grid-cols-2 gap-3.5",children:[e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-y-3.5",children:[e.jsx("p",{className:"font-medium",children:"Straat"}),e.jsx("span",{children:"Mechelsesteenweg"}),e.jsx("p",{className:"font-medium",children:"Nr."}),e.jsx("span",{children:"180"}),e.jsx("p",{className:"font-medium",children:"Bus"}),e.jsx("span",{children:"5"})]}),e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-y-3.5",children:[e.jsx("p",{className:"font-medium",children:"Postcode"}),e.jsx("span",{children:"2018"}),e.jsx("p",{className:"font-medium",children:"Gemeente"}),e.jsx("span",{children:"Antwerpen"}),e.jsx("p",{className:"font-medium",children:"Land"}),e.jsx("span",{children:"België"})]})]}),onSaveChanges:()=>new Promise(a=>setTimeout(a,3e3))}},m={args:{...n.args,heading:e.jsx("h2",{className:"text-lg font-display font-semibold",children:"Adres"})}},p={args:{defaultEditing:!0,...n.args,heading:e.jsx("h2",{className:"text-lg font-display font-semibold",children:"Adres"})}};var j,B,E;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "This is a simple card component."
  }
}`,...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var _,w,P;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var S,q,V;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...WithEditingElements.args,
    heading: <h2 className="text-lg font-display font-semibold">Adres</h2>
  }
}`,...(V=(q=m.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var T,W,A;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    defaultEditing: true,
    ...WithEditingElements.args,
    heading: <h2 className="text-lg font-display font-semibold">Adres</h2>
  }
}`,...(A=(W=p.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const ve=["Default","WithEditingElements","WithHeading","InEditingState"];export{c as Default,p as InEditingState,n as WithEditingElements,m as WithHeading,ve as __namedExportsOrder,xe as default};
