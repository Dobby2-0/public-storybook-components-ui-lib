import{j as a}from"./jsx-runtime-DR9Q75dM.js";import{f as le,F as me}from"./FileList-COvZ8nz9.js";import{L as se,D as ie}from"./Label-C3T7MHLE.js";import{$ as be,E as he,T as xe}from"./TextField-BNuoxWeu.js";import{c as $e}from"./index-By-mRCMU.js";import{q as oe}from"./Info-CwC22AGT.js";import{r as u,R as w}from"./index-DRjF_FHU.js";import{q as ge,h as k,C as ve,i as ye,b as ne,j as De,k as we,s as Pe,l as qe,p as de,x as je,c as Z,a as ke}from"./useFocusRing-C6fsr26g.js";import{$ as Ee}from"./intlStrings-ZMTSFH_M.js";import{b as Ie,a as N}from"./Text-B95919dy.js";import{$ as ze}from"./useLabels-BwPHAfF6.js";import{a as Le}from"./FocusScope-fwsqHtrM.js";import{$ as _,a as Ue,b as Ae}from"./useDrop-DrIdbzXF.js";import{a as Be}from"./Button-owB2lmPW.js";import{$ as Ce}from"./useLocalizedStringFormatter-xOf6gwda.js";import{$ as Te}from"./VisuallyHidden-DFrqKlNW.js";import{$ as Ve}from"./PressResponder-EaxQ970L.js";import{u as Me}from"./index-BSPp2CQF.js";import{B as ce}from"./Button-DeK0aHxP.js";import{u as fe}from"./useTranslation-BZwSnrkG.js";import"./IconButton-DLSZy0Ar.js";import"./ButtonBase-DR5xg7TT.js";import"./Loader-Cgl1KvpE.js";import"./index-wL3GxAOQ.js";import"./Pill-ByEbGEhU.js";import"./Close-a0dMVUhZ.js";import"./Description-BZTUmzGN.js";import"./index.browser-OxPLOBIU.js";import"./index-rX-Bn4lm.js";import"./Hidden-BxYS409O.js";import"./FieldError-yiHUmxL5.js";import"./Form-CGpa7FVA.js";import"./useFormReset-Bw3xsAfu.js";import"./useControlledState-uSQY0H5C.js";import"./useFocusable-DTzT9VHy.js";import"./platform-SeyP_Zfo.js";import"./ariaHideOutside-7Z-f0sYi.js";import"./useDescription-CqZCW_mX.js";import"./usePress-Do_Sz9oM.js";import"./openLink--SV7cA94.js";import"./context-gTjI1DPt.js";const Ne=({title:e,titleId:l,...r})=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":l,...r,children:[e?a.jsx("title",{id:l,children:e}):null,a.jsx("g",{children:a.jsx("path",{d:"M4.945 14.4q-.558 0-.951-.397a1.3 1.3 0 0 1-.394-.953v-.675q0-.287.193-.481a.65.65 0 0 1 .478-.194q.285 0 .482.194.197.195.197.481v.675h8.1v-.675q0-.287.193-.481a.65.65 0 0 1 .478-.194q.284 0 .482.194.197.195.197.481v.675a1.3 1.3 0 0 1-.397.953 1.3 1.3 0 0 1-.954.397zM9.266 2.747a.7.7 0 0 0-.253-.047.68.68 0 0 0-.473.187L5.878 5.531a.67.67 0 0 0-.009.956q.215.207.49.216a.6.6 0 0 0 .475-.197l1.5-1.5v5.738q0 .287.197.48a.66.66 0 0 0 .482.195q.285 0 .478-.194a.66.66 0 0 0 .193-.481V5.006l1.481 1.5a.66.66 0 0 0 .478.206.71.71 0 0 0 .694-.685.62.62 0 0 0-.197-.477L9.478 2.887a.6.6 0 0 0-.212-.14"})})]}),M=new Map;function E(e,l){let r=M.get(e);if(!r){let c=new Set,s=o=>{for(let p of c)p(o)};r={listener:s,handlers:c},M.set(e,r),document.addEventListener(e,s)}return r.handlers.add(l),()=>{r.handlers.delete(l),r.handlers.size===0&&(document.removeEventListener(e,r.listener),M.delete(e))}}function Se(e){let{isDisabled:l}=e,r=u.useRef(!1),{focusProps:c}=ge({onFocusChange:t=>{r.current=t}}),s=k(t=>{r.current&&e.getItems&&t.preventDefault()}),o=k(t=>{if(!(!r.current||!e.getItems)&&(t.preventDefault(),t.clipboardData)){var d;_(t.clipboardData,e.getItems()),(d=e.onCopy)===null||d===void 0||d.call(e)}}),p=k(t=>{r.current&&e.onCut&&e.getItems&&t.preventDefault()}),f=k(t=>{!r.current||!e.onCut||!e.getItems||(t.preventDefault(),t.clipboardData&&(_(t.clipboardData,e.getItems()),e.onCut()))}),n=k(t=>{r.current&&e.onPaste&&t.preventDefault()}),i=k(t=>{if(!(!r.current||!e.onPaste)&&(t.preventDefault(),t.clipboardData)){let d=Ue(t.clipboardData);e.onPaste(d)}});return u.useEffect(()=>{if(!l)return ve(E("beforecopy",s),E("copy",o),E("beforecut",p),E("cut",f),E("beforepaste",n),E("paste",i))},[l,s,o,p,f,n,i]),{clipboardProps:c}}function Ze(e){return e&&e.__esModule?e.default:e}const _e=u.createContext(null);function Fe(e,l){let{isDisabled:r=!1}=e;[e,l]=ye(e,l,_e);let c=ne(l),s=u.useRef(null),{dropProps:o,dropButtonProps:p,isDropTarget:f}=Ae({...e,ref:s,hasDropButton:!0}),{buttonProps:n}=Be(p||{},s),{hoverProps:i,isHovered:t}=De(e),{focusProps:d,isFocused:m,isFocusVisible:v}=we(),y=Ce(Ze(Ee),"react-aria-components"),D=Pe(),P=e["aria-label"]||y.format("dropzoneLabel"),x=e["aria-labelledby"],b=[D,x].filter(Boolean).join(" "),h=ze({"aria-label":P,"aria-labelledby":b}),{clipboardProps:$}=Se({isDisabled:r,onPaste:T=>{var q;return(q=e.onDrop)===null||q===void 0?void 0:q.call(e,{type:"drop",items:T,x:0,y:0,dropOperation:"copy"})}}),g=qe({...e,values:{isHovered:t,isFocused:m,isFocusVisible:v,isDropTarget:f,isDisabled:r},defaultClassName:"react-aria-DropZone"}),S=de(e);return delete S.id,w.createElement(je,{values:[[Ie,{id:D,slot:"label"}]]},w.createElement("div",{...Z(o,i,S),...g,slot:e.slot||void 0,ref:c,onClick:T=>{var q;let j=T.target;for(;j&&(!((q=c.current)===null||q===void 0)&&q.contains(j))&&!Le(j);){if(j===c.current){var V;(V=s.current)===null||V===void 0||V.focus();break}j=j.parentElement}},"data-hovered":t||void 0,"data-focused":m||void 0,"data-focus-visible":v||void 0,"data-drop-target":f||void 0,"data-disabled":r||void 0},w.createElement(Te,null,w.createElement("button",{...Z(n,d,$,h),ref:s})),g.children))}const Oe=u.forwardRef(Fe);function Re(e,l){let{onSelect:r,acceptedFileTypes:c,allowsMultiple:s,defaultCamera:o,children:p,acceptDirectory:f,...n}=e,i=ne(l),t=de(n);return w.createElement(w.Fragment,null,w.createElement(Ve,{onPress:()=>{var d,m;!((d=i.current)===null||d===void 0)&&d.value&&(i.current.value=""),(m=i.current)===null||m===void 0||m.click()}},p),w.createElement(be,{...t,type:"file",ref:i,style:{display:"none"},accept:c==null?void 0:c.toString(),onChange:d=>r==null?void 0:r(d.target.files),capture:o,multiple:s,webkitdirectory:f?"":void 0}))}const pe=u.forwardRef(Re);var ue=(e=>(e.FILE_TYPE="fileType",e.FILE_SIZE="fileSize",e))(ue||{});const He=({file:e,description:l,label:r,className:c,fileSizeLimit:s,acceptedFileTypes:o,onFileAdd:p,onFileSelectionChange:f,onFileReject:n})=>{const i=Me(),{t}=fe("components"),[d,m]=u.useState(e),[v,y]=u.useState(!1);u.useEffect(()=>{m(e)},[e]);const D=u.useCallback(P=>{(async()=>{const x=P==null?void 0:P[0];if(x){if(o&&!o.includes(x.type)){n==null||n(x,"fileType");return}if(s&&x.size>s){n==null||n(x,"fileSize");return}p&&y(!0);const b=await(p==null?void 0:p(x));if(i()){y(!1);const h=b??le(x);m(h),f==null||f(h)}}})()},[o,s,i,p,f,n]);return a.jsxs(a.Fragment,{children:[r&&a.jsx(se,{children:r}),a.jsxs("div",{className:"flex space-x-2.5",children:[a.jsx(xe,{prefix:a.jsx(Ne,{}),value:d==null?void 0:d.name,placeholder:t("Upload.placeholder","Choose file"),isReadOnly:!0,className:c}),a.jsx("div",{children:a.jsx(pe,{onSelect:D,acceptedFileTypes:o,children:a.jsx(ce,{variant:"secondary",isLoading:v,children:t("Upload.pickFile","Pick file")})})})]}),l&&a.jsxs(ie,{className:"flex gap-1 items-center",children:[a.jsx(oe,{}),a.jsx(N,{slot:"description",children:l})]})]})},We=({files:e,className:l,description:r,label:c,fileSizeLimit:s,acceptedFileTypes:o,actionButtons:p,onFileAdd:f,onFileSelectionChange:n,onFileReject:i,onFileAddError:t,...d})=>{const{t:m}=fe("components"),[v,y]=u.useState(e);u.useEffect(()=>{y(e)},[e]);const D=u.useCallback(b=>{if(!b)return;let h=[...b];if((o||s)&&(h=h.filter($=>o&&!o.includes($.type)?(i==null||i($,"fileType"),!1):s&&$.size>s?(i==null||i($,"fileSize"),!1):!0)),h.length){const $=[...v??[],...h.map(g=>({...le(g),loading:Promise.resolve(f==null?void 0:f(g))}))];n==null||n($),y($)}},[o,s,v,f,i,n]),P=u.useCallback(b=>{(async()=>{const $=(await Promise.all(b.items.filter(g=>g.kind==="file").map(g=>g.getFile()))).filter(g=>g!==null);D($)})()},[D]),x=u.useCallback(({file:b,error:h})=>t==null?void 0:t(b,h),[t]);return a.jsxs("div",{className:"space-y-2.5",children:[a.jsxs("div",{className:"space-y-1",children:[c&&a.jsx(se,{children:c}),a.jsx(Oe,{onDrop:P,className:ke(l,b=>$e("flex px-2.5 py-5 w-full flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-primary dark:border-neutral-850 text-sm ring-offset-background","data-[drop-target]:border-primary data-[drop-target]:bg-neutral-200","data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",b)),...d,children:a.jsxs("div",{className:"flex items-center",children:[a.jsx(pe,{allowsMultiple:!0,onSelect:D,acceptedFileTypes:o,children:a.jsx(ce,{variant:"ghost",className:" h-6 p-1 dark:text-brand-secondary",children:m("Upload.pickFile","Pick file")})}),a.jsx(N,{className:"mr-2",children:m("Upload.dropzonePlaceholder","or drag it here")})]})}),r&&a.jsxs(ie,{className:"flex gap-1 items-center",children:[a.jsx(oe,{}),a.jsx(N,{slot:"description",children:r})]})]}),a.jsx(me,{files:v,actionButtons:p,onFilesChange:y,onFileLoadingError:x})]})},C=({errorMessage:e,...l})=>a.jsxs("div",{className:"space-y-1",children:[l.isDropZone?a.jsx(We,{...l}):a.jsx(He,{...l}),e&&a.jsx(he,{children:e})]});C.RejectReason=ue;try{C.displayName="Upload",C.__docgenInfo={description:"Upload component available as single file input or file dropzone\n\nbased on `react-aria-components`",displayName:"Upload",props:{isDropZone:{defaultValue:null,description:"optionally render DropZone instead of FileInput",name:"isDropZone",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"error message to be displayed",name:"errorMessage",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label for the file input/dropzone",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Description for the input/dropzone",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"CSS classname for the component",name:"className",required:!1,type:{name:"string"}},fileSizeLimit:{defaultValue:null,description:"Maximum file size in bytes",name:"fileSizeLimit",required:!1,type:{name:"number"}},onFileAdd:{defaultValue:null,description:`Callback that is triggered when a new file is added.\\
The parameter is a File object instead of an Attachment.\\
If this callback returns an Attachment, it will be added to the list of files. Otherwise, the default Attachment transformation will be applied.`,name:"onFileAdd",required:!1,type:{name:"((file: File) => FileAddResult | Promise<FileAddResult>)"}},onFileReject:{defaultValue:null,description:"Callback that is triggered when a file is rejected due to file type or size constraints.\\\nThe RejectReason enum is exported through this component: `Upload.RejectReason`.",name:"onFileReject",required:!1,type:{name:"((file: File, reason: RejectReason) => void)"}},file:{defaultValue:null,description:"current value (controlled)\n\nA utility function `fileToAttachment` is provided by this library to convert a `File` or an array of `File` to the required format.",name:"file",required:!1,type:{name:"Attachment"}},onFileSelectionChange:{defaultValue:null,description:"callback to handle file selection",name:"onFileSelectionChange",required:!1,type:{name:"((file: Attachment) => void) | ((files: Attachment[]) => void)"}},acceptedFileTypes:{defaultValue:null,description:"Specifies what mime type of files are allowed.",name:"acceptedFileTypes",required:!1,type:{name:"string[]"}},files:{defaultValue:null,description:"current value (controlled)\n\nA utility function `fileToAttachment` is provided by this library to convert a `File` or an array of `File` to the required format.",name:"files",required:!1,type:{name:"Attachment[]"}},actionButtons:{defaultValue:null,description:`Allows configuration of action buttons.
<br/><br/>
If the value is a boolean, it will show or hide the action buttons with their default behaviour.
<br/><br/>
If the value is an object, it will allow to configure the behaviour of the individual buttons, either a boolean for default behaviour show/hide, or a function that will be triggered when the corresponding button is pressed.
<br/><br/>
If the value is a ReactElement, it will replace the default action buttons.`,name:"actionButtons",required:!1,type:{name:"boolean | ActionButtons | ActionButtonRenderFunction"}},onFileAddError:{defaultValue:null,description:"Callback that is triggered when the `onFileAdd` callback rejects with an error",name:"onFileAddError",required:!1,type:{name:"((file: Attachment, error?: string) => void | ReactNode)"}}}}}catch{}const Ct={component:C,argTypes:{file:{if:{arg:"isDropZone",truthy:!1}},files:{if:{arg:"isDropZone"}}}},I={description:"Upload a file",label:"Upload"},z={args:I},L={args:{...I,isDropZone:!0}},U={args:{...I,isDropZone:!0,files:[{id:"file1",name:"file1.txt",size:1024,type:"text/plain",url:"https://www.example.com/file1.txt"},{id:"file2",name:"file2.txt",size:2048,type:"text/plain",url:"https://www.example.com/file2.txt"}]}},A={args:{...I,description:"Upload a file (max 1MB)",label:"Upload (max 1MB)",fileSizeLimit:1024*1024}},B={args:{...I,description:"Upload a file (only .txt files)",label:"Upload (.txt only)",acceptedFileTypes:["text/plain"]}};var F,O,R;z.parameters={...z.parameters,docs:{...(F=z.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(R=(O=z.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var H,W,G;L.parameters={...L.parameters,docs:{...(H=L.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isDropZone: true
  }
}`,...(G=(W=L.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var Y,J,K;U.parameters={...U.parameters,docs:{...(Y=U.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isDropZone: true,
    files: [{
      id: "file1",
      name: "file1.txt",
      size: 1024,
      type: "text/plain",
      url: "https://www.example.com/file1.txt"
    }, {
      id: "file2",
      name: "file2.txt",
      size: 2048,
      type: "text/plain",
      url: "https://www.example.com/file2.txt"
    }]
  }
}`,...(K=(J=U.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,ee;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    description: "Upload a file (max 1MB)",
    label: "Upload (max 1MB)",
    fileSizeLimit: 1024 * 1024
  }
}`,...(ee=(X=A.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var te,ae,re;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    description: "Upload a file (only .txt files)",
    label: "Upload (.txt only)",
    acceptedFileTypes: ["text/plain"]
  }
}`,...(re=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const Tt=["Default","DragAndDrop","DragAndDropWithPreloadedFiles","LimitFileSize","LimitFileTypes"];export{z as Default,L as DragAndDrop,U as DragAndDropWithPreloadedFiles,A as LimitFileSize,B as LimitFileTypes,Tt as __namedExportsOrder,Ct as default};
