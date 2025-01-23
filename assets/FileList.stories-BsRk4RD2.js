import{F as d}from"./FileList-DsHj_jj5.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./IconButton-3VsyiOdu.js";import"./index-By-mRCMU.js";import"./useFocusRing-DmDxhQCI.js";import"./index-rX-Bn4lm.js";import"./platform-SeyP_Zfo.js";import"./ButtonBase-Cv97aE-9.js";import"./Loader-Cgl1KvpE.js";import"./index-wL3GxAOQ.js";import"./Button-B8-bwU7B.js";import"./Hidden-CICGlFC4.js";import"./useFocusable-Cuxsel3J.js";import"./usePress-76wSwCmG.js";import"./openLink--SV7cA94.js";import"./Pill-ByEbGEhU.js";import"./Close-a0dMVUhZ.js";import"./Description-BZTUmzGN.js";import"./index-BSPp2CQF.js";import"./useTranslation-DW3ljh-R.js";import"./context-BLxVKTzt.js";const T={component:d,argTypes:{actionButtons:{control:{type:"boolean"}}}},e={args:{files:[{id:"1",name:"file1.txt",size:100,type:"text",url:"https://example.com/file1.txt"},{id:"2",name:"image1.png",size:541,type:"image/png",url:"https://example.com/image1.png"}]}},t={args:{...e.args,actionButtons:{delete:g=>console.log(`Deleting ${g.name}`)}}},n={args:{files:[{id:"1",name:"file1.txt",size:100,type:"text",url:"https://example.com/file1.txt",loading:new Promise(()=>{})}]}};var o,i,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var a,s,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionButtons: {
      // eslint-disable-next-line no-console
      delete: file => console.log(\`Deleting \${file.name}\`)
    }
  }
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const j=["Default","WithActionButtonsConfig","WithLoadingFile"];export{e as Default,t as WithActionButtonsConfig,n as WithLoadingFile,j as __namedExportsOrder,T as default};
