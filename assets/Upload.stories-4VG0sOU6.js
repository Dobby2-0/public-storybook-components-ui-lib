import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{f as le,F as me}from"./FileList-DbjKgK0m.js";import{c as V}from"./index-By-mRCMU.js";import{q as oe}from"./Info-CwC22AGT.js";import{r as m,R as y}from"./index-DRjF_FHU.js";import{q as be,g as q,C as xe,i as he,b as se,j as $e,k as ge,r as ve,l as ye,p as ie,w as De,c as Z,a as we}from"./useFocusRing-DmDxhQCI.js";import{$ as Pe}from"./intlStrings-ZMTSFH_M.js";import{a as qe,b as C}from"./Text-w-xymXK0.js";import{$ as je}from"./useLabels-DHGrCtKF.js";import{a as Ee}from"./FocusScope-BD8VaRNk.js";import{$ as _,a as Ie,b as ke}from"./useDrop-DV2M16MX.js";import{a as ze}from"./Button-B8-bwU7B.js";import{$ as Ae}from"./useLocalizedStringFormatter-DDHaVjp6.js";import{$ as Ue}from"./VisuallyHidden-BC8uHK73.js";import{b as Ne}from"./Input-Br8Q7hRI.js";import{$ as Te}from"./PressResponder-DV9psGSD.js";import{c as ne}from"./FieldError-QM41p4cP.js";import{u as Be}from"./index-BSPp2CQF.js";import{B as de}from"./Button-DdqH8X-N.js";import{T as Le}from"./TextField-QT8f_CrK.js";import{u as ce}from"./useTranslation-DW3ljh-R.js";import"./IconButton-D_hyt9dF.js";import"./ButtonBase-Bxj9ETMT.js";import"./Loader-Cgl1KvpE.js";import"./index-wL3GxAOQ.js";import"./Pill-ByEbGEhU.js";import"./Close-a0dMVUhZ.js";import"./Description-BZTUmzGN.js";import"./index-rX-Bn4lm.js";import"./platform-SeyP_Zfo.js";import"./ariaHideOutside-7Z-f0sYi.js";import"./useDescription-vAR7K5Yy.js";import"./Hidden-CICGlFC4.js";import"./useFocusable-Cuxsel3J.js";import"./usePress-76wSwCmG.js";import"./openLink--SV7cA94.js";import"./context-C5A1kbiU.js";import"./useFormReset-B7wBBm0H.js";import"./useControlledState-uSQY0H5C.js";import"./Form-qpAKqtEj.js";import"./context-BLxVKTzt.js";const Ve=({title:e,titleId:l,...a})=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":l,...a,children:[e?t.jsx("title",{id:l,children:e}):null,t.jsx("g",{children:t.jsx("path",{d:"M4.945 14.4q-.558 0-.951-.397a1.3 1.3 0 0 1-.394-.953v-.675q0-.287.193-.481a.65.65 0 0 1 .478-.194q.285 0 .482.194.197.195.197.481v.675h8.1v-.675q0-.287.193-.481a.65.65 0 0 1 .478-.194q.284 0 .482.194.197.195.197.481v.675a1.3 1.3 0 0 1-.397.953 1.3 1.3 0 0 1-.954.397zM9.266 2.747a.7.7 0 0 0-.253-.047.68.68 0 0 0-.473.187L5.878 5.531a.67.67 0 0 0-.009.956q.215.207.49.216a.6.6 0 0 0 .475-.197l1.5-1.5v5.738q0 .287.197.48a.66.66 0 0 0 .482.195q.285 0 .478-.194a.66.66 0 0 0 .193-.481V5.006l1.481 1.5a.66.66 0 0 0 .478.206.71.71 0 0 0 .694-.685.62.62 0 0 0-.197-.477L9.478 2.887a.6.6 0 0 0-.212-.14"})})]}),L=new Map;function j(e,l){let a=L.get(e);if(!a){let c=new Set,o=n=>{for(let p of c)p(n)};a={listener:o,handlers:c},L.set(e,a),document.addEventListener(e,o)}return a.handlers.add(l),()=>{a.handlers.delete(l),a.handlers.size===0&&(document.removeEventListener(e,a.listener),L.delete(e))}}function Ce(e){let{isDisabled:l}=e,a=m.useRef(!1),{focusProps:c}=be({onFocusChange:r=>{a.current=r}}),o=q(r=>{a.current&&e.getItems&&r.preventDefault()}),n=q(r=>{if(!(!a.current||!e.getItems)&&(r.preventDefault(),r.clipboardData)){var i;_(r.clipboardData,e.getItems()),(i=e.onCopy)===null||i===void 0||i.call(e)}}),p=q(r=>{a.current&&e.onCut&&e.getItems&&r.preventDefault()}),f=q(r=>{!a.current||!e.onCut||!e.getItems||(r.preventDefault(),r.clipboardData&&(_(r.clipboardData,e.getItems()),e.onCut()))}),d=q(r=>{a.current&&e.onPaste&&r.preventDefault()}),s=q(r=>{if(!(!a.current||!e.onPaste)&&(r.preventDefault(),r.clipboardData)){let i=Ie(r.clipboardData);e.onPaste(i)}});return m.useEffect(()=>{if(!l)return xe(j("beforecopy",o),j("copy",n),j("beforecut",p),j("cut",f),j("beforepaste",d),j("paste",s))},[l,o,n,p,f,d,s]),{clipboardProps:c}}function Me(e){return e&&e.__esModule?e.default:e}const Se=m.createContext(null);function Ze(e,l){let{isDisabled:a=!1}=e;[e,l]=he(e,l,Se);let c=se(l),o=m.useRef(null),{dropProps:n,dropButtonProps:p,isDropTarget:f}=ke({...e,ref:o,hasDropButton:!0}),{buttonProps:d}=ze(p||{},o),{hoverProps:s,isHovered:r}=$e(e),{focusProps:i,isFocused:b,isFocusVisible:g}=ge(),v=Ae(Me(Pe),"react-aria-components"),w=ve(),$=e["aria-label"]||v.format("dropzoneLabel"),u=e["aria-labelledby"],x=[w,u].filter(Boolean).join(" "),h=je({"aria-label":$,"aria-labelledby":x}),{clipboardProps:ue}=Ce({isDisabled:a,onPaste:T=>{var D;return(D=e.onDrop)===null||D===void 0?void 0:D.call(e,{type:"drop",items:T,x:0,y:0,dropOperation:"copy"})}}),M=ye({...e,values:{isHovered:r,isFocused:b,isFocusVisible:g,isDropTarget:f,isDisabled:a},defaultClassName:"react-aria-DropZone"}),S=ie(e);return delete S.id,y.createElement(De,{values:[[qe,{id:w,slot:"label"}]]},y.createElement("div",{...Z(n,s,S),...M,slot:e.slot||void 0,ref:c,onClick:T=>{var D;let P=T.target;for(;P&&(!((D=c.current)===null||D===void 0)&&D.contains(P))&&!Ee(P);){if(P===c.current){var B;(B=o.current)===null||B===void 0||B.focus();break}P=P.parentElement}},"data-hovered":r||void 0,"data-focused":b||void 0,"data-focus-visible":g||void 0,"data-drop-target":f||void 0,"data-disabled":a||void 0},y.createElement(Ue,null,y.createElement("button",{...Z(d,i,ue,h),ref:o})),M.children))}const _e=m.forwardRef(Ze);function Fe(e,l){let{onSelect:a,acceptedFileTypes:c,allowsMultiple:o,defaultCamera:n,children:p,acceptDirectory:f,...d}=e,s=se(l),r=ie(d);return y.createElement(y.Fragment,null,y.createElement(Te,{onPress:()=>{var i,b;!((i=s.current)===null||i===void 0)&&i.value&&(s.current.value=""),(b=s.current)===null||b===void 0||b.click()}},p),y.createElement(Ne,{...r,type:"file",ref:s,style:{display:"none"},accept:c==null?void 0:c.toString(),onChange:i=>a==null?void 0:a(i.target.files),capture:n,multiple:o,webkitdirectory:f?"":void 0}))}const fe=m.forwardRef(Fe);var pe=(e=>(e.FILE_TYPE="fileType",e.FILE_SIZE="fileSize",e))(pe||{});const Oe=({file:e,description:l,label:a,className:c,fileSizeLimit:o,acceptedFileTypes:n,onFileAdd:p,onFileSelectionChange:f,onFileReject:d})=>{const s=Be(),{t:r}=ce("components"),[i,b]=m.useState(e),[g,v]=m.useState(!1);m.useEffect(()=>{b(e)},[e]);const w=m.useCallback($=>{(async()=>{const u=$==null?void 0:$[0];if(u){if(n&&!n.includes(u.type)){d==null||d(u,"fileType");return}if(o&&u.size>o){d==null||d(u,"fileSize");return}p&&v(!0);const x=await(p==null?void 0:p(u));if(s()){v(!1);const h=x??le(u);b(h),f==null||f(h)}}})()},[n,o,s,p,f,d]);return t.jsxs(t.Fragment,{children:[a&&t.jsx(ne,{className:V("text-sm font-medium leading-none text-neutral-800","group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-70","group-data-[invalid]:text-error-hover"),children:a}),t.jsxs("div",{className:"flex space-x-2.5",children:[t.jsx(Le,{prefix:t.jsx(Ve,{}),value:i==null?void 0:i.name,placeholder:r("Upload.placeholder","Choose file"),isReadOnly:!0,className:c}),t.jsx("div",{children:t.jsx(fe,{onSelect:w,acceptedFileTypes:n,children:t.jsx(de,{variant:"secondary",isLoading:g,children:r("Upload.pickFile","Pick file")})})})]}),l&&t.jsxs("div",{className:"flex gap-1 items-center text-sm text-neutral-600",children:[t.jsx(oe,{}),t.jsx(C,{slot:"description",children:l})]})]})},He=({files:e,className:l,description:a,label:c,fileSizeLimit:o,acceptedFileTypes:n,actionButtons:p,onFileAdd:f,onFileSelectionChange:d,onFileReject:s,...r})=>{const{t:i}=ce("components"),[b,g]=m.useState(e);m.useEffect(()=>{g(e)},[e]);const v=m.useCallback($=>{if(!$)return;let u=[...$];if((n||o)&&(u=u.filter(x=>n&&!n.includes(x.type)?(s==null||s(x,"fileType"),!1):o&&x.size>o?(s==null||s(x,"fileSize"),!1):!0)),u.length){const x=[...b??[],...u.map(h=>({...le(h),loading:Promise.resolve(f==null?void 0:f(h))}))];d==null||d(x),g(x)}},[n,o,b,f,s,d]),w=m.useCallback($=>{(async()=>{const x=(await Promise.all($.items.filter(h=>h.kind==="file").map(h=>h.getFile()))).filter(h=>h!==null);v(x)})()},[v]);return t.jsxs("div",{className:"space-y-2.5",children:[t.jsxs("div",{className:"space-y-1",children:[c&&t.jsx(ne,{className:V("text-sm font-medium leading-none text-neutral-800","group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-70","group-data-[invalid]:text-error-hover"),children:c}),t.jsx(_e,{onDrop:w,className:we(l,$=>V("flex px-2.5 py-5 w-full flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-primary dark:border-neutral-850 text-sm ring-offset-background","data-[drop-target]:border-primary data-[drop-target]:bg-neutral-200","data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",$)),...r,children:t.jsxs("div",{className:"flex items-center",children:[t.jsx(fe,{allowsMultiple:!0,onSelect:v,acceptedFileTypes:n,children:t.jsx(de,{variant:"ghost",className:" h-6 p-1 dark:text-brand-secondary",children:i("Upload.pickFile","Pick file")})}),t.jsx(C,{className:"mr-2",children:i("Upload.dropzonePlaceholder","or drag it here")})]})}),a&&t.jsxs("div",{className:"flex gap-1 items-center text-sm text-neutral-600",children:[t.jsx(oe,{}),t.jsx(C,{slot:"description",children:a})]})]}),t.jsx(me,{files:b,actionButtons:p,onFilesChange:g})]})},N=({errorMessage:e,...l})=>t.jsxs("div",{className:"space-y-1",children:[l.isDropZone?t.jsx(He,{...l}):t.jsx(Oe,{...l}),e&&t.jsx("p",{className:"text-sm text-error-foreground",children:e})]});N.RejectReason=pe;try{N.displayName="Upload",N.__docgenInfo={description:"Upload component available as single file input or file dropzone\n\nbased on `react-aria-components`",displayName:"Upload",props:{isDropZone:{defaultValue:null,description:"optionally render DropZone instead of FileInput",name:"isDropZone",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"error message to be displayed",name:"errorMessage",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label for the file input/dropzone",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Description for the input/dropzone",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"CSS classname for the component",name:"className",required:!1,type:{name:"string"}},fileSizeLimit:{defaultValue:null,description:"Maximum file size in bytes",name:"fileSizeLimit",required:!1,type:{name:"number"}},onFileAdd:{defaultValue:null,description:`Callback that is triggered when a new file is added.\\
The parameter is a File object instead of an Attachment.\\
If this callback returns an Attachment, it will be added to the list of files. Otherwise, the default Attachment transformation will be applied.`,name:"onFileAdd",required:!1,type:{name:"((file: File) => FileAddResult | Promise<FileAddResult>)"}},onFileReject:{defaultValue:null,description:"Callback that is triggered when a file is rejected due to file type or size constraints.\\\nThe RejectReason enum is exported through this component: `Upload.RejectReason`.",name:"onFileReject",required:!1,type:{name:"((file: File, reason: RejectReason) => void)"}},file:{defaultValue:null,description:"current value (controlled)\n\nA utility function `fileToAttachment` is provided by this library to convert a `File` or an array of `File` to the required format.",name:"file",required:!1,type:{name:"Attachment"}},onFileSelectionChange:{defaultValue:null,description:"callback to handle file selection",name:"onFileSelectionChange",required:!1,type:{name:"((file: Attachment) => void) | ((files: Attachment[]) => void)"}},acceptedFileTypes:{defaultValue:null,description:"Specifies what mime type of files are allowed.",name:"acceptedFileTypes",required:!1,type:{name:"string[]"}},files:{defaultValue:null,description:"current value (controlled)\n\nA utility function `fileToAttachment` is provided by this library to convert a `File` or an array of `File` to the required format.",name:"files",required:!1,type:{name:"Attachment[]"}},actionButtons:{defaultValue:null,description:`Allows configuration of action buttons.
<br/><br/>
If the value is a boolean, it will show or hide the action buttons with their default behaviour.
<br/><br/>
If the value is an object, it will allow to configure the behaviour of the individual buttons, either a boolean for default behaviour show/hide, or a function that will be triggered when the corresponding button is pressed.`,name:"actionButtons",required:!1,type:{name:"boolean | ActionButtons"}}}}}catch{}const Nt={component:N,argTypes:{file:{if:{arg:"isDropZone",truthy:!1}},files:{if:{arg:"isDropZone"}}}},E={description:"Upload a file",label:"Upload"},I={args:E},k={args:{...E,isDropZone:!0}},z={args:{...E,isDropZone:!0,files:[{id:"file1",name:"file1.txt",size:1024,type:"text/plain",url:"https://www.example.com/file1.txt"},{id:"file2",name:"file2.txt",size:2048,type:"text/plain",url:"https://www.example.com/file2.txt"}]}},A={args:{...E,description:"Upload a file (max 1MB)",label:"Upload (max 1MB)",fileSizeLimit:1024*1024}},U={args:{...E,description:"Upload a file (only .txt files)",label:"Upload (.txt only)",acceptedFileTypes:["text/plain"]}};var F,O,H;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(H=(O=I.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var R,W,G;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isDropZone: true
  }
}`,...(G=(W=k.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var Y,J,K;z.parameters={...z.parameters,docs:{...(Y=z.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(K=(J=z.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,ee;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    description: "Upload a file (max 1MB)",
    label: "Upload (max 1MB)",
    fileSizeLimit: 1024 * 1024
  }
}`,...(ee=(X=A.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var te,ae,re;U.parameters={...U.parameters,docs:{...(te=U.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    description: "Upload a file (only .txt files)",
    label: "Upload (.txt only)",
    acceptedFileTypes: ["text/plain"]
  }
}`,...(re=(ae=U.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const Tt=["Default","DragAndDrop","DragAndDropWithPreloadedFiles","LimitFileSize","LimitFileTypes"];export{I as Default,k as DragAndDrop,z as DragAndDropWithPreloadedFiles,A as LimitFileSize,U as LimitFileTypes,Tt as __namedExportsOrder,Nt as default};
