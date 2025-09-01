import{j as l,q as P}from"./iframe-C_a4Gkrw.js";import{B as W}from"./Button-QEdCP9_K.js";import{F as C}from"./FileList-Bc3sASdn.js";import"./preload-helper-Dp1pzeXC.js";import"./utils--h9F20cq.js";import"./ButtonBase-Bnf7lv9Y.js";import"./Loader-DIMeN7KJ.js";import"./Tooltip-QjPG7mqh.js";import"./index-CGx-nm0a.js";import"./Button-Dvkxc8rW.js";import"./FocusScope-FY5DrnMd.js";import"./Hidden-5Vthnpa4.js";import"./usePress-BukzSSG8.js";import"./index-Bl4rPfcF.js";import"./index-CIZ1CI7H.js";import"./RSPContexts-Dk5NFcy1.js";import"./Separator-nikXjOg_.js";import"./Text-YCmlvS3e.js";import"./VisuallyHidden-ptHZAZuk.js";import"./IconButton-6f0nht3E.js";import"./FileIcon-D5VZYUJW.js";import"./Description-DNqwqUEH.js";import"./Pill-D0pqyBBM.js";import"./DeleteForever-BS9bsPEn.js";import"./Download-ebRE1vxl.js";const te={component:C,argTypes:{actionButtons:{control:{type:"boolean"}}}},t={args:{files:[{id:"1",name:"file1.txt",size:100,type:"text",url:"https://example.com/file1.txt"},{id:"2",name:"image1.png",size:541,type:"image/png",url:"https://example.com/image1.png"}]}},r={args:{...t.args,actionButtons:{view:(e,n)=>{console.log(`Viewing ${e.name}`),n(e.url)},download:(e,n)=>{console.log(`Downloading ${e.name}`),n(e.url,e.name)},delete:e=>console.log(`Deleting ${e.name}`)}}},o={args:{...t.args,actionButtons:(e,n)=>l.jsxs("div",{className:"flex items-center gap-2",children:["Custom actions for ",e.name,l.jsx(W,{variant:"delete",onPress:()=>n.delete(e.id),children:"Delete"})]})}},i={args:{files:[{id:"1",name:"file1.txt",size:100,type:"text",url:"https://example.com/file1.txt",loading:new Promise(()=>{})}]}},a={args:{files:[{id:"1",name:"file1.txt",size:100,type:"text",url:"https://example.com/file1.txt",loading:Promise.reject(new Error("Failed to upload file"))},{id:"2",name:"image1.png",size:541,type:"image/png",url:"https://example.com/image1.png",loading:Promise.reject(new Error)}]}},s={args:{files:[{id:"1",name:"file1.txt",size:100,type:"text",url:"https://example.com/file1.txt",loading:Promise.reject(new Error("Failed to upload file"))}],onFileLoadingError:({error:e})=>l.jsxs("div",{className:"flex items-center gap-1.5 text-amber-700",children:[l.jsx(P,{})," Custom error: ",e]})}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    files: [{
      id: "1",
      name: "file1.txt",
      size: 100,
      type: "text",
      url: "https://example.com/file1.txt"
    }, {
      id: "2",
      name: "image1.png",
      size: 541,
      type: "image/png",
      url: "https://example.com/image1.png"
    }]
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        original(file.url, file.name);
      },
      // eslint-disable-next-line no-console
      delete: file => console.log(\`Deleting \${file.name}\`)
    }
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,x,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionButtons: (file, defaultActionHandlers) => <div className="flex items-center gap-2">
        Custom actions for {file.name}
        <Button variant="delete" onPress={() => defaultActionHandlers.delete(file.id)}>
          Delete
        </Button>
      </div>
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var w,E,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    files: [{
      id: "1",
      name: "file1.txt",
      size: 100,
      type: "text",
      url: "https://example.com/file1.txt",
      loading: new Promise(() => undefined)
    }]
  }
}`,...(y=(E=i.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var v,B,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    files: [{
      id: "1",
      name: "file1.txt",
      size: 100,
      type: "text",
      url: "https://example.com/file1.txt",
      loading: Promise.reject(new Error("Failed to upload file"))
    }, {
      id: "2",
      name: "image1.png",
      size: 541,
      type: "image/png",
      url: "https://example.com/image1.png",
      loading: Promise.reject(new Error())
    }]
  }
}`,...(j=(B=a.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var z,D,F;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    files: [{
      id: "1",
      name: "file1.txt",
      size: 100,
      type: "text",
      url: "https://example.com/file1.txt",
      loading: Promise.reject(new Error("Failed to upload file"))
    }],
    onFileLoadingError: ({
      error
    }) => <div className="flex items-center gap-1.5 text-amber-700">
        <ErrorIcon /> Custom error: {error}
      </div>
  }
}`,...(F=(D=s.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const ne=["Default","WithActionButtonsConfig","WithActionButtonsOverride","WithLoadingFile","WithLoadingError","WithCustomErrorRenderer"];export{t as Default,r as WithActionButtonsConfig,o as WithActionButtonsOverride,s as WithCustomErrorRenderer,a as WithLoadingError,i as WithLoadingFile,ne as __namedExportsOrder,te as default};
