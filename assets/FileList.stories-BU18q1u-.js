import{j as s}from"./jsx-runtime-DiklIkkE.js";import{F as w}from"./FileList-C725p1-V.js";import{q as C}from"./Error-DhROLwo0.js";import"./index-DRjF_FHU.js";import"./IconButton-EqzkKAAa.js";import"./index-By-mRCMU.js";import"./useFocusRing-C_4b_X3M.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-CtcehF4j.js";import"./Loader-BJ2nfBAY.js";import"./index-wL3GxAOQ.js";import"./Button-BKhQ97MN.js";import"./Hidden-B-Jcd71u.js";import"./index-DXragnAo.js";import"./useFocusable-DnCBhn-b.js";import"./usePress-C3HQLG0P.js";import"./openLink-BmaUL4Js.js";import"./Pill-DvPdUunI.js";import"./Close-jTRcUcFO.js";import"./Description-CgMiPtzv.js";import"./index.browser-OxPLOBIU.js";import"./index-DfOB4grb.js";import"./useTranslation-BRXvhZwW.js";const X={component:w,argTypes:{actionButtons:{control:{type:"boolean"}}}},e={args:{files:[{id:"1",name:"file1.txt",size:100,type:"text",url:"https://example.com/file1.txt"},{id:"2",name:"image1.png",size:541,type:"image/png",url:"https://example.com/image1.png"}]}},r={args:{...e.args,actionButtons:{delete:t=>console.log(`Deleting ${t.name}`)}}},o={args:{...e.args,actionButtons:t=>s.jsxs("div",{children:["Custom actions for ",t.name]})}},n={args:{files:[{id:"1",name:"file1.txt",size:100,type:"text",url:"https://example.com/file1.txt",loading:new Promise(()=>{})}]}},i={args:{files:[{id:"1",name:"file1.txt",size:100,type:"text",url:"https://example.com/file1.txt",loading:Promise.reject(new Error("Failed to upload file"))},{id:"2",name:"image1.png",size:541,type:"image/png",url:"https://example.com/image1.png",loading:Promise.reject(new Error)}]}},a={args:{files:[{id:"1",name:"file1.txt",size:100,type:"text",url:"https://example.com/file1.txt",loading:Promise.reject(new Error("Failed to upload file"))}],onFileLoadingError:({error:t})=>s.jsxs("div",{className:"flex items-center gap-1.5 text-amber-700",children:[s.jsx(C,{})," Custom error: ",t]})}};var m,l,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionButtons: {
      // eslint-disable-next-line no-console
      delete: file => console.log(\`Deleting \${file.name}\`)
    }
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,x,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionButtons: file => <div>Custom actions for {file.name}</div>
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,E,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(E=n.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var z,j,F;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(F=(j=i.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var W,v,B;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(B=(v=a.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};const Y=["Default","WithActionButtonsConfig","WithActionButtonsOverride","WithLoadingFile","WithLoadingError","WithCustomErrorRenderer"];export{e as Default,r as WithActionButtonsConfig,o as WithActionButtonsOverride,a as WithCustomErrorRenderer,i as WithLoadingError,n as WithLoadingFile,Y as __namedExportsOrder,X as default};
