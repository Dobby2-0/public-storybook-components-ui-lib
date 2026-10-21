import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{n,t as r}from"./PDFViewer-BIQoKpyK.js";import{n as i,t as a}from"./Button-Cn9nmE68.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{i(),n(),o=t(),s=()=>{let e=[`<</Type /Catalog /Pages 2 0 R>>`,`<</Type /Pages /Kids [3 0 R] /Count 1>>`,`<</Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources <</Font <</F1 5 0 R>> /XObject <</Im1 6 0 R>>>>>>`,`<</Length 113>>
stream
BT /F1 24 Tf 72 700 Td (This page has an image that is too large to show) Tj ET
q 200 0 0 200 72 400 cm /Im1 Do Q
endstream`,`<</Type /Font /Subtype /Type1 /BaseFont /Helvetica>>`,`<</Type /XObject /Subtype /Image /Width 10000 /Height 10000 /ColorSpace /DeviceGray /BitsPerComponent 8 /Length 1>>
stream
0
endstream`],t=`%PDF-1.4
`,n=e.map((e,n)=>{let r=t.length;return t+=`${n+1} 0 obj\n${e}\nendobj\n`,r}),r=t.length;return t+=`xref\n0 ${e.length+1}\n0000000000 65535 f \n`,t+=n.map(e=>`${String(e).padStart(10,`0`)} 00000 n \n`).join(``),t+=`trailer\n<</Size ${e.length+1} /Root 1 0 R>>\nstartxref\n${r}\n%%EOF`,URL.createObjectURL(new Blob([t],{type:`application/pdf`}))},c={component:r,title:`Components/PDFViewer/Viewer`},l={args:{url:`./src/assets/Dobby-Flyer.pdf`,className:`w-[90vw] h-[75vh]`}},u={args:{...l.args,enableDownload:!0,fileName:`Dobby-Flyer.pdf`}},d={args:{...l.args,customControls:(0,o.jsx)(a,{children:`Do something`})}},f={args:{...u.args,url:s()}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    url: "./src/assets/Dobby-Flyer.pdf",
    className: "w-[90vw] h-[75vh]"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    enableDownload: true,
    fileName: "Dobby-Flyer.pdf"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    customControls: <Button>Do something</Button>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Download.args,
    url: createPdfWithOversizedImage()
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Download`,`WithCustomControls`,`WithSkippedImages`]})))()}m();export{l as Default,u as Download,d as WithCustomControls,f as WithSkippedImages,p as __namedExportsOrder,c as default};