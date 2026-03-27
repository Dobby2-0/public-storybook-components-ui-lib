import{j as l,q as F}from"./iframe-CzO8tIKf.js";import{B as P}from"./Button-B_LfpQBC.js";import{F as W}from"./FileList-CjGkSqc8.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Bd97OsuJ.js";import"./ButtonBase-CMFW6auj.js";import"./Loader-yCy-tuy-.js";import"./Tooltip-BnQpK9jh.js";import"./index-jDvyA-sL.js";import"./Button-CpJ7snnK.js";import"./FocusScope-ChueHnOn.js";import"./Text-D3Raw8n8.js";import"./usePress-Dy-QiNP_.js";import"./index-CbyHUPuW.js";import"./index-Zlv7x9BX.js";import"./RSPContexts-B3cxRrW8.js";import"./Separator-DAynwQ_I.js";import"./index-I8rqpXNn.js";import"./VisuallyHidden-D4CgCFfs.js";import"./IconButton-CVvYJJz8.js";import"./FileIcon-NOqdJF0H.js";import"./Description-DjkT2qt0.js";import"./Zip-CzXswCuQ.js";import"./Pill-bxO7dmgs.js";import"./DeleteForever-BBmX2LxS.js";import"./Download-NQiHA-Ec.js";import"./Warning-BS8oeIUO.js";const oe={component:W,argTypes:{actionButtons:{control:{type:"boolean"}}}},n={args:{files:[{id:"1",name:"file1.txt",size:100,contentType:"text",url:"https://example.com/file1.txt"},{id:"2",name:"image1.png",size:541,contentType:"image/png",url:"https://example.com/image1.png"}]}},o={args:{...n.args,actionButtons:{view:(e,t)=>{console.log(`Viewing ${e.name}`),t(e.url)},download:(e,t)=>{console.log(`Downloading ${e.name}`),t(e.url,e.name,e.contentType)},delete:e=>console.log(`Deleting ${e.name}`)}}},r={args:{...n.args,actionButtons:(e,t)=>l.jsxs("div",{className:"flex items-center gap-2",children:["Custom actions for ",e.name,l.jsx(P,{variant:"delete",onPress:()=>t.delete(e.id),children:"Delete"})]})}},i={args:{files:[{id:"1",name:"file1.txt",size:100,contentType:"text",url:"https://example.com/file1.txt",loading:new Promise(()=>{})}]}},a={args:{files:[{id:"1",name:"file1.txt",size:100,contentType:"text",url:"https://example.com/file1.txt",loading:Promise.reject(new Error("Failed to upload file"))},{id:"2",name:"image1.png",size:541,contentType:"image/png",url:"https://example.com/image1.png",loading:Promise.reject(new Error)}]}},s={args:{files:[{id:"1",name:"file1.txt",size:100,contentType:"text",url:"https://example.com/file1.txt",loading:Promise.reject(new Error("Failed to upload file"))}],onFileLoadingError:({error:e})=>l.jsxs("div",{className:"flex items-center gap-1.5 text-amber-700",children:[l.jsx(F,{})," Custom error: ",e]})}};var m,p,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
