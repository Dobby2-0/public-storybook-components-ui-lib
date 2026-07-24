import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{Ot as n,t as r}from"./main-DS6peC0q.js";import{r as i,t as a}from"./FileList-DKFnxhKq.js";import{n as o,t as s}from"./Button-B8GKgIvi.js";var c,l,u,d,f,p,m,h,g;e((()=>{o(),i(),r(),c=t(),l={component:a,argTypes:{actionButtons:{control:{type:`boolean`}}}},u={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`},{id:`2`,name:`image1.png`,size:541,contentType:`image/png`,url:`https://example.com/image1.png`}]}},d={args:{...u.args,actionButtons:{view:(e,t)=>{console.log(`Viewing ${e.name}`),t(e.url)},download:(e,t)=>{console.log(`Downloading ${e.name}`),t(e.url,e.name,e.contentType)},delete:e=>console.log(`Deleting ${e.name}`)}}},f={args:{...u.args,actionButtons:(e,t)=>(0,c.jsxs)(`div`,{className:`flex items-center gap-2`,children:[`Custom actions for `,e.name,(0,c.jsx)(s,{variant:`delete`,onPress:()=>t.delete(e.id),children:`Delete`})]})}},p={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:new Promise(()=>void 0)}]}},m={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:Promise.reject(Error(`Failed to upload file`))},{id:`2`,name:`image1.png`,size:541,contentType:`image/png`,url:`https://example.com/image1.png`,loading:Promise.reject(Error())}]}},h={args:{files:[{id:`1`,name:`file1.txt`,size:100,contentType:`text`,url:`https://example.com/file1.txt`,loading:Promise.reject(Error(`Failed to upload file`))}],onFileLoadingError:({error:e})=>(0,c.jsxs)(`div`,{className:`flex items-center gap-1.5 text-amber-700`,children:[(0,c.jsx)(n,{}),` Custom error: `,e]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionButtons: (file, defaultActionHandlers) => <div className="flex items-center gap-2">
        Custom actions for {file.name}
        <Button variant="delete" onPress={() => defaultActionHandlers.delete(file.id)}>
          Delete
        </Button>
      </div>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithActionButtonsConfig`,`WithActionButtonsOverride`,`WithLoadingFile`,`WithLoadingError`,`WithCustomErrorRenderer`]}))();export{u as Default,d as WithActionButtonsConfig,f as WithActionButtonsOverride,h as WithCustomErrorRenderer,m as WithLoadingError,p as WithLoadingFile,g as __namedExportsOrder,l as default};