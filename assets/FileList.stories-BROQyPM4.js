import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{Ot as n,t as r}from"./main-DS6peC0q.js";import{o as i,s as a,v as o,y as s}from"./hooks-aF4s158n.js";import{r as c,t as l}from"./FileList-BdBc43RS.js";import{n as u,t as d}from"./FilePreviewModal-CiMYb8Ar.js";import{n as f,t as p}from"./Button-CM4yQuba.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{f(),c(),u(),i(),o(),r(),m=t(),h={component:l,argTypes:{actionButtons:{control:{type:`boolean`}}}},g={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`},{id:`2`,name:`image1.png`,size:541,contentType:`image/png`,url:`https://example.com/image1.png`}]}},_={args:{...g.args,actionButtons:{view:(e,t)=>{console.log(`Viewing ${e.name}`),t(e.url)},download:(e,t)=>{console.log(`Downloading ${e.name}`),t(e.url,e.name,e.contentType)},delete:e=>console.log(`Deleting ${e.name}`)}}},v={args:{...g.args,actionButtons:(e,t)=>(0,m.jsxs)(`div`,{className:`flex items-center gap-2`,children:[`Custom actions for `,e.name,(0,m.jsx)(p,{variant:`delete`,onPress:()=>t.delete(e.id),children:`Delete`})]})}},y={args:{files:[{id:`2f6c1c0e-8d3b-4a0e-9c43-6a1f3c2b7d11`,name:`persisted.pdf`,size:102e4,contentType:`application/pdf`,url:`./src/assets/Dobby-Flyer.pdf`},{id:`V1StGXR8_Z5jdHi6B-myT`,name:`not-saved-yet.pdf`,size:102e4,contentType:`application/pdf`,url:`./src/assets/Dobby-Flyer.pdf`}],actionButtons:{view:!0,delete:!0},isPreviewHidden:e=>!s(e.id)}},b={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:new Promise(()=>void 0)}]}},x={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:Promise.reject(Error(`Failed to upload file`))},{id:`2`,name:`image1.png`,size:541,contentType:`image/png`,url:`https://example.com/image1.png`,loading:Promise.reject(Error())}]}},S={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:Promise.reject(Error(`Failed to upload file`))}],onFileLoadingError:({error:e})=>(0,m.jsxs)(`div`,{className:`flex items-center gap-1.5 text-amber-700`,children:[(0,m.jsx)(n,{}),` Custom error: `,e]})}},C=[{id:`1`,name:`image.jpg`,size:28100,contentType:`image/jpeg`,url:`https://fastly.picsum.photos/id/901/800/500.jpg?hmac=dLK8BC3gi5zSmd0U6wOoOcRAAyVrA9AqbZ4AnZhfrCs`},{id:`2`,size:102e4,name:`Dobby-Flyer.pdf`,contentType:`application/pdf`,url:`./src/assets/Dobby-Flyer.pdf`},{id:`3`,size:1,name:`unsupported.txt`,contentType:`text/plain`,url:`.`}],w=e=>e.url??``,T=()=>{let{handleView:e,previewModalProps:t}=a({resolveFileUrl:w});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{files:C,actionButtons:{view:e},"data-testid":`attachment-list`}),(0,m.jsx)(d,{...t})]})},E={render:()=>(0,m.jsx)(T,{})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionButtons: (file, defaultActionHandlers) => <div className="flex items-center gap-2">
        Custom actions for {file.name}
        <Button variant="delete" onPress={() => defaultActionHandlers.delete(file.id)}>
          Delete
        </Button>
      </div>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`The preview button is hidden for files that are not persisted yet (no uuid id)`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <FileListWithPreviewDemo />
}`,...E.parameters?.docs?.source}}},D=[`Default`,`WithActionButtonsConfig`,`WithActionButtonsOverride`,`WithPreviewHidden`,`WithLoadingFile`,`WithLoadingError`,`WithCustomErrorRenderer`,`WithFilePreview`]}))();export{g as Default,_ as WithActionButtonsConfig,v as WithActionButtonsOverride,S as WithCustomErrorRenderer,E as WithFilePreview,x as WithLoadingError,b as WithLoadingFile,y as WithPreviewHidden,D as __namedExportsOrder,h as default};