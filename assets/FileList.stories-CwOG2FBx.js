import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BbeNlDUO.js";import{n,t as r}from"./useTranslation-Du5dcnMR.js";import{t as i}from"./jsx-runtime-BB9-612F.js";import{n as a,t as o}from"./use-toast-B87R_Dyi.js";import{At as s,t as c}from"./main-CRAVX506.js";import{n as l,r as u,t as d}from"./files-BYcUzChq.js";import{n as f,t as p}from"./Button-DT_dToBO.js";import{r as m,t as h}from"./FileList-9ixfetBr.js";import{n as g,t as _}from"./ImageCarouselModal-Bweh5osa.js";import{n as v,t as y}from"./PDFViewerModal-D5HsR9an.js";var b,x,S;function C(){return(C=e((()=>{g(),v(),l(),b=t(),x=i(),S=({isOpen:e,onOpenChange:t,file:n,title:r,...i})=>{let a=n?.contentType??n?.type??``,o=r??n?.name,s=!!n?.url&&!a.includes(`pdf`)&&!a.startsWith(`image`);return(0,b.useEffect)(()=>{e&&s&&n?.url&&(i.onDownloadRequested?i.onDownloadRequested(n):d(n.url,n.name,n.contentType??n.type),t(!1))},[e,s]),n?.url?a.includes(`pdf`)?(0,x.jsx)(y,{isOpen:e,onOpenChange:t,url:n.url,fileId:n.id,title:o,fileName:n.name,...i}):a.startsWith(`image`)?(0,x.jsx)(_,{isOpen:e,onOpenChange:t,images:[{id:n.id,url:n.url,name:n.name,contentType:n.contentType}],...i}):null:null};try{S.displayName=`FilePreviewModal`,S.__docgenInfo={description:`Routes to PDFViewerModal or ImageCarouselModal based on contentType.
Falls back to a download for unsupported types.`,displayName:`FilePreviewModal`,filePath:`/home/runner/work/components-ui-lib/components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,methods:[],props:{isOpen:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`}],description:``,name:`isOpen`,parent:{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`},required:!0,tags:{},type:{name:`boolean`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`}],description:``,name:`onOpenChange`,parent:{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`},required:!0,tags:{},type:{name:`(isOpen: boolean) => void`}},file:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`}],description:``,name:`file`,parent:{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`},required:!1,tags:{},type:{name:`Attachment`}},title:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`}],description:``,name:`title`,parent:{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`},required:!1,tags:{},type:{name:`string`}},enableDownload:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`}],description:``,name:`enableDownload`,parent:{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`},required:!1,tags:{},type:{name:`boolean`}},onDownloadRequested:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`}],description:``,name:`onDownloadRequested`,parent:{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`},required:!1,tags:{},type:{name:`((file: Attachment) => void | Promise<void>)`}},className:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`}],description:``,name:`className`,parent:{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var w,T;function E(){return(E=e((()=>{o(),l(),w=t(),r(),T=({resolveFileUrl:e,onError:t,onDownloadRequested:r,...i})=>{let o=a(),{t:s}=n(`common`),[c,l]=(0,w.useState)(),[u,f]=(0,w.useState)(!1),p=(0,w.useCallback)((e,n,r,i)=>{let a=i instanceof Error?i:Error(n);t?t(a,r):o({title:s(e,n),variant:`error`,duration:3e3})},[t,o,s]),m=(0,w.useCallback)(async t=>{try{let n=await e(t);l({...t,url:n}),f(!0)}catch(e){p(`error.filePreviewFailed`,`Failed to load file preview`,t,e)}},[e,p]),h=(0,w.useCallback)(async t=>{if(r)await r(t);else try{let n=await e(t);await d(n,t.name,t.contentType)}catch(e){p(`error.fileDownloadFailed`,`Failed to download file`,t,e)}},[r,e,p]);return{handleView:m,handleDownload:h,previewModalProps:{file:c,isOpen:u,onOpenChange:f,onDownloadRequested:h,...i}}}})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{f(),m(),C(),E(),l(),c(),D=i(),O={component:h,argTypes:{actionButtons:{control:{type:`boolean`}}}},k={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`},{id:`2`,name:`image1.png`,size:541,contentType:`image/png`,url:`https://example.com/image1.png`}]}},A={args:{...k.args,actionButtons:{view:(e,t)=>{console.log(`Viewing ${e.name}`),t(e.url)},download:(e,t)=>{console.log(`Downloading ${e.name}`),t(e.url,e.name,e.contentType)},delete:e=>console.log(`Deleting ${e.name}`)}}},j={args:{...k.args,actionButtons:(e,t)=>(0,D.jsxs)(`div`,{className:`flex items-center gap-2`,children:[`Custom actions for `,e.name,(0,D.jsx)(p,{variant:`delete`,onPress:()=>t.delete(e.id),children:`Delete`})]})}},M={args:{files:[{id:`2f6c1c0e-8d3b-4a0e-9c43-6a1f3c2b7d11`,name:`persisted.pdf`,size:102e4,contentType:`application/pdf`,url:`./src/assets/Dobby-Flyer.pdf`},{id:`V1StGXR8_Z5jdHi6B-myT`,name:`not-saved-yet.pdf`,size:102e4,contentType:`application/pdf`,url:`./src/assets/Dobby-Flyer.pdf`}],actionButtons:{view:!0,delete:!0},isPreviewHidden:e=>!u(e.id)}},N={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:new Promise(()=>void 0)}]}},P={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:Promise.reject(Error(`Failed to upload file`))},{id:`2`,name:`image1.png`,size:541,contentType:`image/png`,url:`https://example.com/image1.png`,loading:Promise.reject(Error())}]}},F={args:{errorAsTooltip:!0,files:[{id:`1`,name:`report.pdf`,size:102e4,contentType:`application/pdf`,url:`https://example.com/report.pdf`},{id:`2`,name:`budget.xlsx`,size:24500,contentType:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,url:`https://example.com/budget.xlsx`,warning:`Will only be sent by email, not by letter`},{id:`3`,name:`presentation.pptx`,size:31e4,contentType:`application/vnd.openxmlformats-officedocument.presentationml.presentation`,url:`https://example.com/presentation.pptx`,warning:`Will only be sent by email, not by letter`}]}},I={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:Promise.reject(Error(`Failed to upload file`))}],onFileLoadingError:({error:e})=>(0,D.jsxs)(`div`,{className:`flex items-center gap-1.5 text-amber-700`,children:[(0,D.jsx)(s,{}),` Custom error: `,e]})}},L=[{id:`1`,name:`image.jpg`,size:28100,contentType:`image/jpeg`,url:`https://fastly.picsum.photos/id/901/800/500.jpg?hmac=dLK8BC3gi5zSmd0U6wOoOcRAAyVrA9AqbZ4AnZhfrCs`},{id:`2`,size:102e4,name:`Dobby-Flyer.pdf`,contentType:`application/pdf`,url:`./src/assets/Dobby-Flyer.pdf`},{id:`3`,size:1,name:`unsupported.txt`,contentType:`text/plain`,url:`.`}],R=e=>e.url??``,z=()=>{let{handleView:e,previewModalProps:t}=T({resolveFileUrl:R});return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(h,{files:L,actionButtons:{view:e},"data-testid":`attachment-list`}),(0,D.jsx)(S,{...t})]})},B={render:()=>(0,D.jsx)(z,{})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: "1",
      name: "file1.txt",
      size: 100,
      contentType: "text",
      url: "https://example.com/file1.txt"
    }, {
      id: "2",
      name: "image1.png",
      size: 541,
      contentType: "image/png",
      url: "https://example.com/image1.png"
    }]
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionButtons: {
      view: (file, original) => {
        // eslint-disable-next-line no-console
        console.log(\`Viewing \${file.name}\`);
        original(file.url);
      },
      download: (file, original) => {
        // eslint-disable-next-line no-console
        console.log(\`Downloading \${file.name}\`);
        original(file.url, file.name, file.contentType);
      },
      // eslint-disable-next-line no-console
      delete: file => console.log(\`Deleting \${file.name}\`)
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionButtons: (file, defaultActionHandlers) => <div className="flex items-center gap-2">
        Custom actions for {file.name}
        <Button variant="delete" onPress={() => defaultActionHandlers.delete(file.id)}>
          Delete
        </Button>
      </div>
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: "2f6c1c0e-8d3b-4a0e-9c43-6a1f3c2b7d11",
      name: "persisted.pdf",
      size: 1020000,
      contentType: "application/pdf",
      url: "./src/assets/Dobby-Flyer.pdf"
    }, {
      id: "V1StGXR8_Z5jdHi6B-myT",
      name: "not-saved-yet.pdf",
      size: 1020000,
      contentType: "application/pdf",
      url: "./src/assets/Dobby-Flyer.pdf"
    }],
    actionButtons: {
      view: true,
      delete: true
    },
    isPreviewHidden: file => !isPersistedAttachmentId(file.id)
  }
}`,...M.parameters?.docs?.source},description:{story:`The preview button is hidden for files that are not persisted yet (no uuid id)`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: "1",
      name: "file1.txt",
      size: 100,
      contentType: "text",
      url: "https://example.com/file1.txt",
      loading: new Promise(() => undefined)
    }]
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: "1",
      name: "file1.txt",
      size: 100,
      contentType: "text",
      url: "https://example.com/file1.txt",
      loading: Promise.reject(new Error("Failed to upload file"))
    }, {
      id: "2",
      name: "image1.png",
      size: 541,
      contentType: "image/png",
      url: "https://example.com/image1.png",
      loading: Promise.reject(new Error())
    }]
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    errorAsTooltip: true,
    files: [{
      id: "1",
      name: "report.pdf",
      size: 1020000,
      contentType: "application/pdf",
      url: "https://example.com/report.pdf"
    }, {
      id: "2",
      name: "budget.xlsx",
      size: 24500,
      contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      url: "https://example.com/budget.xlsx",
      warning: "Will only be sent by email, not by letter"
    }, {
      id: "3",
      name: "presentation.pptx",
      size: 310000,
      contentType: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      url: "https://example.com/presentation.pptx",
      warning: "Will only be sent by email, not by letter"
    }]
  }
}`,...F.parameters?.docs?.source},description:{story:`A warning is shown next to a valid file, without the error styling. It is hidden when the file also has an error.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: "1",
      name: "file1.txt",
      size: 100,
      contentType: "text",
      url: "https://example.com/file1.txt",
      loading: Promise.reject(new Error("Failed to upload file"))
    }],
    onFileLoadingError: ({
      error
    }) => <div className="flex items-center gap-1.5 text-amber-700">
        <ErrorIcon /> Custom error: {error}
      </div>
  }
}`,...I.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <FileListWithPreviewDemo />
}`,...B.parameters?.docs?.source}}},V=[`Default`,`WithActionButtonsConfig`,`WithActionButtonsOverride`,`WithPreviewHidden`,`WithLoadingFile`,`WithLoadingError`,`WithWarning`,`WithCustomErrorRenderer`,`WithFilePreview`]})))()}H();export{k as Default,A as WithActionButtonsConfig,j as WithActionButtonsOverride,I as WithCustomErrorRenderer,B as WithFilePreview,P as WithLoadingError,N as WithLoadingFile,M as WithPreviewHidden,F as WithWarning,V as __namedExportsOrder,O as default};