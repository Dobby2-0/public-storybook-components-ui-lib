import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BbeNlDUO.js";import{n,t as r}from"./useTranslation-Du5dcnMR.js";import{t as i}from"./jsx-runtime-BB9-612F.js";import{Ot as a,t as o}from"./main-ozH-4KY0.js";import{n as s,t as c}from"./use-toast-BB_etrbn.js";import{n as l,r as u,t as d}from"./files-CLm_4yeH.js";import{r as f,t as p}from"./FileList-DzOoDhP-.js";import{n as m,t as h}from"./ImageCarouselModal-nFAVmvpb.js";import{n as g,t as _}from"./PDFViewerModal-CpzcP23E.js";import{n as v,t as y}from"./Button-Cn9nmE68.js";var b,x,S;function C(){return(C=e((()=>{m(),g(),l(),b=t(),x=i(),S=({isOpen:e,onOpenChange:t,file:n,title:r,...i})=>{let a=n?.contentType??n?.type??``,o=r??n?.name,s=!!n?.url&&!a.includes(`pdf`)&&!a.startsWith(`image`);return(0,b.useEffect)(()=>{e&&s&&n?.url&&(i.onDownloadRequested?i.onDownloadRequested(n):d(n.url,n.name,n.contentType??n.type),t(!1))},[e,s]),n?.url?a.includes(`pdf`)?(0,x.jsx)(_,{isOpen:e,onOpenChange:t,url:n.url,fileId:n.id,title:o,fileName:n.name,...i}):a.startsWith(`image`)?(0,x.jsx)(h,{isOpen:e,onOpenChange:t,images:[{id:n.id,url:n.url,name:n.name,contentType:n.contentType}],...i}):null:null};try{S.displayName=`FilePreviewModal`,S.__docgenInfo={description:`Routes to PDFViewerModal or ImageCarouselModal based on contentType.
Falls back to a download for unsupported types.`,displayName:`FilePreviewModal`,filePath:`/home/runner/work/components-ui-lib/components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,methods:[],props:{isOpen:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`}],description:``,name:`isOpen`,parent:{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`},required:!0,tags:{},type:{name:`boolean`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`}],description:``,name:`onOpenChange`,parent:{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`},required:!0,tags:{},type:{name:`(isOpen: boolean) => void`}},file:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`}],description:``,name:`file`,parent:{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`},required:!1,tags:{},type:{name:`Attachment`}},title:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`}],description:``,name:`title`,parent:{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`},required:!1,tags:{},type:{name:`string`}},enableDownload:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`}],description:``,name:`enableDownload`,parent:{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`},required:!1,tags:{},type:{name:`boolean`}},onDownloadRequested:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`}],description:``,name:`onDownloadRequested`,parent:{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`},required:!1,tags:{},type:{name:`((file: Attachment) => void | Promise<void>)`}},className:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`}],description:``,name:`className`,parent:{fileName:`components-ui-lib/src/components/FilePreviewModal/FilePreviewModal.tsx`,name:`FilePreviewModalProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var w,T;function E(){return(E=e((()=>{c(),l(),w=t(),r(),T=({resolveFileUrl:e,onError:t,onDownloadRequested:r,...i})=>{let a=s(),{t:o}=n(`common`),[c,l]=(0,w.useState)(),[u,f]=(0,w.useState)(!1),p=(0,w.useCallback)((e,n,r,i)=>{let s=i instanceof Error?i:Error(n);t?t(s,r):a({title:o(e,n),variant:`error`,duration:3e3})},[t,a,o]),m=(0,w.useCallback)(async t=>{try{let n=await e(t);l({...t,url:n}),f(!0)}catch(e){p(`error.filePreviewFailed`,`Failed to load file preview`,t,e)}},[e,p]),h=(0,w.useCallback)(async t=>{if(r)await r(t);else try{let n=await e(t);await d(n,t.name,t.contentType)}catch(e){p(`error.fileDownloadFailed`,`Failed to download file`,t,e)}},[r,e,p]);return{handleView:m,handleDownload:h,previewModalProps:{file:c,isOpen:u,onOpenChange:f,onDownloadRequested:h,...i}}}})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{v(),f(),C(),E(),l(),o(),D=i(),O={component:p,argTypes:{actionButtons:{control:{type:`boolean`}}}},k={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`},{id:`2`,name:`image1.png`,size:541,contentType:`image/png`,url:`https://example.com/image1.png`}]}},A={args:{...k.args,actionButtons:{view:(e,t)=>{console.log(`Viewing ${e.name}`),t(e.url)},download:(e,t)=>{console.log(`Downloading ${e.name}`),t(e.url,e.name,e.contentType)},delete:e=>console.log(`Deleting ${e.name}`)}}},j={args:{...k.args,actionButtons:(e,t)=>(0,D.jsxs)(`div`,{className:`flex items-center gap-2`,children:[`Custom actions for `,e.name,(0,D.jsx)(y,{variant:`delete`,onPress:()=>t.delete(e.id),children:`Delete`})]})}},M={args:{files:[{id:`2f6c1c0e-8d3b-4a0e-9c43-6a1f3c2b7d11`,name:`persisted.pdf`,size:102e4,contentType:`application/pdf`,url:`./src/assets/Dobby-Flyer.pdf`},{id:`V1StGXR8_Z5jdHi6B-myT`,name:`not-saved-yet.pdf`,size:102e4,contentType:`application/pdf`,url:`./src/assets/Dobby-Flyer.pdf`}],actionButtons:{view:!0,delete:!0},isPreviewHidden:e=>!u(e.id)}},N={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:new Promise(()=>void 0)}]}},P={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:Promise.reject(Error(`Failed to upload file`))},{id:`2`,name:`image1.png`,size:541,contentType:`image/png`,url:`https://example.com/image1.png`,loading:Promise.reject(Error())}]}},F={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:Promise.reject(Error(`Failed to upload file`))}],onFileLoadingError:({error:e})=>(0,D.jsxs)(`div`,{className:`flex items-center gap-1.5 text-amber-700`,children:[(0,D.jsx)(a,{}),` Custom error: `,e]})}},I=[{id:`1`,name:`image.jpg`,size:28100,contentType:`image/jpeg`,url:`https://fastly.picsum.photos/id/901/800/500.jpg?hmac=dLK8BC3gi5zSmd0U6wOoOcRAAyVrA9AqbZ4AnZhfrCs`},{id:`2`,size:102e4,name:`Dobby-Flyer.pdf`,contentType:`application/pdf`,url:`./src/assets/Dobby-Flyer.pdf`},{id:`3`,size:1,name:`unsupported.txt`,contentType:`text/plain`,url:`.`}],L=e=>e.url??``,R=()=>{let{handleView:e,previewModalProps:t}=T({resolveFileUrl:L});return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(p,{files:I,actionButtons:{view:e},"data-testid":`attachment-list`}),(0,D.jsx)(S,{...t})]})},z={render:()=>(0,D.jsx)(R,{})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <FileListWithPreviewDemo />
}`,...z.parameters?.docs?.source}}},B=[`Default`,`WithActionButtonsConfig`,`WithActionButtonsOverride`,`WithPreviewHidden`,`WithLoadingFile`,`WithLoadingError`,`WithCustomErrorRenderer`,`WithFilePreview`]})))()}V();export{k as Default,A as WithActionButtonsConfig,j as WithActionButtonsOverride,F as WithCustomErrorRenderer,z as WithFilePreview,P as WithLoadingError,N as WithLoadingFile,M as WithPreviewHidden,B as __namedExportsOrder,O as default};