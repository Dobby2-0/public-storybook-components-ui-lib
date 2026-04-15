import{j as l,q as F}from"./iframe-BCvx5aIw.js";import{B as P}from"./Button-BSFY9fVT.js";import{F as W}from"./FileList-D_Hwfa0y.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DT55uSEz.js";import"./ButtonBase-DrZK1uMj.js";import"./Loader-DpWblGY1.js";import"./Tooltip-D-8X45XJ.js";import"./index-ChnMGnWF.js";import"./Button-C0e0lcau.js";import"./FocusScope-B5NpOBFv.js";import"./Text-CmDC0Fcx.js";import"./usePress-FVxBmJ3a.js";import"./index-CV_sOKXw.js";import"./index-DOmqlDl7.js";import"./RSPContexts-CDt80yYI.js";import"./Separator-DLrh4vZm.js";import"./index-DTcX34cl.js";import"./VisuallyHidden-CO0T0OMH.js";import"./IconButton-C2bEEDI6.js";import"./FileIcon-CMGknZbS.js";import"./Description-BG9yNQUr.js";import"./Zip-cW3kILVE.js";import"./Pill-DpPdkJjw.js";import"./DeleteForever-y-b4Cjqn.js";import"./Download-DvtZia6D.js";import"./Warning-D6itRzX-.js";const oe={component:W,argTypes:{actionButtons:{control:{type:"boolean"}}}},n={args:{files:[{id:"1",name:"file1.txt",size:100,contentType:"text",url:"https://example.com/file1.txt"},{id:"2",name:"image1.png",size:541,contentType:"image/png",url:"https://example.com/image1.png"}]}},o={args:{...n.args,actionButtons:{view:(e,t)=>{console.log(`Viewing ${e.name}`),t(e.url)},download:(e,t)=>{console.log(`Downloading ${e.name}`),t(e.url,e.name,e.contentType)},delete:e=>console.log(`Deleting ${e.name}`)}}},r={args:{...n.args,actionButtons:(e,t)=>l.jsxs("div",{className:"flex items-center gap-2",children:["Custom actions for ",e.name,l.jsx(P,{variant:"delete",onPress:()=>t.delete(e.id),children:"Delete"})]})}},i={args:{files:[{id:"1",name:"file1.txt",size:100,contentType:"text",url:"https://example.com/file1.txt",loading:new Promise(()=>{})}]}},a={args:{files:[{id:"1",name:"file1.txt",size:100,contentType:"text",url:"https://example.com/file1.txt",loading:Promise.reject(new Error("Failed to upload file"))},{id:"2",name:"image1.png",size:541,contentType:"image/png",url:"https://example.com/image1.png",loading:Promise.reject(new Error)}]}},s={args:{files:[{id:"1",name:"file1.txt",size:100,contentType:"text",url:"https://example.com/file1.txt",loading:Promise.reject(new Error("Failed to upload file"))}],onFileLoadingError:({error:e})=>l.jsxs("div",{className:"flex items-center gap-1.5 text-amber-700",children:[l.jsx(F,{})," Custom error: ",e]})}};var m,p,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,g,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,x,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionButtons: (file, defaultActionHandlers) => <div className="flex items-center gap-2">
        Custom actions for {file.name}
        <Button variant="delete" onPress={() => defaultActionHandlers.delete(file.id)}>
          Delete
        </Button>
      </div>
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var w,y,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var T,v,B;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(v=a.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var j,z,D;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(D=(z=s.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const re=["Default","WithActionButtonsConfig","WithActionButtonsOverride","WithLoadingFile","WithLoadingError","WithCustomErrorRenderer"];export{n as Default,o as WithActionButtonsConfig,r as WithActionButtonsOverride,s as WithCustomErrorRenderer,a as WithLoadingError,i as WithLoadingFile,re as __namedExportsOrder,oe as default};
