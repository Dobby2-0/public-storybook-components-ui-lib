import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,l as n}from"./ButtonBase-Cy9ZVYms.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{Ot as i,t as a}from"./main-DS6peC0q.js";import{r as o,t as s}from"./FileList-BAXb3AYu.js";import{n as c,t as l}from"./FilePreviewModal-DeIKJ7ew.js";import{n as u,t as d}from"./Button-Ds_T9wV0.js";var f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{u(),o(),c(),t(),a(),f=r(),p={component:s,argTypes:{actionButtons:{control:{type:`boolean`}}}},m={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`},{id:`2`,name:`image1.png`,size:541,contentType:`image/png`,url:`https://example.com/image1.png`}]}},h={args:{...m.args,actionButtons:{view:(e,t)=>{console.log(`Viewing ${e.name}`),t(e.url)},download:(e,t)=>{console.log(`Downloading ${e.name}`),t(e.url,e.name,e.contentType)},delete:e=>console.log(`Deleting ${e.name}`)}}},g={args:{...m.args,actionButtons:(e,t)=>(0,f.jsxs)(`div`,{className:`flex items-center gap-2`,children:[`Custom actions for `,e.name,(0,f.jsx)(d,{variant:`delete`,onPress:()=>t.delete(e.id),children:`Delete`})]})}},_={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:new Promise(()=>void 0)}]}},v={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:Promise.reject(Error(`Failed to upload file`))},{id:`2`,name:`image1.png`,size:541,contentType:`image/png`,url:`https://example.com/image1.png`,loading:Promise.reject(Error())}]}},y={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:Promise.reject(Error(`Failed to upload file`))}],onFileLoadingError:({error:e})=>(0,f.jsxs)(`div`,{className:`flex items-center gap-1.5 text-amber-700`,children:[(0,f.jsx)(i,{}),` Custom error: `,e]})}},b=[{id:`1`,name:`image.jpg`,size:28100,contentType:`image/jpeg`,url:`https://fastly.picsum.photos/id/901/800/500.jpg?hmac=dLK8BC3gi5zSmd0U6wOoOcRAAyVrA9AqbZ4AnZhfrCs`},{id:`2`,size:102e4,name:`Dobby-Flyer.pdf`,contentType:`application/pdf`,url:`./src/assets/Dobby-Flyer.pdf`},{id:`3`,size:1,name:`unsupported.txt`,contentType:`text/plain`,url:`.`}],x=e=>e.url??``,S=()=>{let{handleView:e,previewModalProps:t}=n({resolveFileUrl:x});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{files:b,actionButtons:{view:e},"data-testid":`attachment-list`}),(0,f.jsx)(l,{...t})]})},C={render:()=>(0,f.jsx)(S,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionButtons: (file, defaultActionHandlers) => <div className="flex items-center gap-2">
        Custom actions for {file.name}
        <Button variant="delete" onPress={() => defaultActionHandlers.delete(file.id)}>
          Delete
        </Button>
      </div>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <FileListWithPreviewDemo />
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithActionButtonsConfig`,`WithActionButtonsOverride`,`WithLoadingFile`,`WithLoadingError`,`WithCustomErrorRenderer`,`WithFilePreview`]}))();export{m as Default,h as WithActionButtonsConfig,g as WithActionButtonsOverride,y as WithCustomErrorRenderer,C as WithFilePreview,v as WithLoadingError,_ as WithLoadingFile,w as __namedExportsOrder,p as default};