import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{m as n,t as r}from"./main-DS6peC0q.js";import{n as i,t as a}from"./Upload-DMna9U01.js";import{n as o,t as s}from"./Button-R7BeAcnY.js";var c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{o(),r(),i(),c=t(),l={component:a,argTypes:{file:{if:{arg:`isDropZone`,truthy:!1}},files:{if:{arg:`isDropZone`}}}},u={description:`Upload a file`,label:`Upload`},d={args:u},f={args:{...u,isDropZone:!0}},p={args:{...u,isDropZone:!0,files:[{id:`file1`,name:`file1.txt`,size:1024,contentType:`text/plain`,url:`https://www.example.com/file1.txt`},{id:`file2`,name:`file2.txt`,size:2048,contentType:`text/plain`,url:`https://www.example.com/file2.txt`}]}},m={args:{...u,description:`Upload a file (max 1MB)`,label:`Upload (max 1MB)`,fileSizeLimit:1024*1024}},h={args:{...u,description:`Upload a file (only .txt files)`,label:`Upload (.txt only)`,acceptedFileTypes:[`text/plain`,`image/png`]}},g={args:{hiddenInput:!0,customTrigger:e=>(0,c.jsx)(s,{variant:`ghost`,isLoading:e,prefix:(0,c.jsx)(n,{}),className:`border border-neutral-700 text-neutral-700`,children:`Upload file`})}},_={args:{...u,description:`Upload a single file`,label:`Upload single file`,isDropZone:!0,allowsMultiple:!1}},v={args:{...f.args,description:`Upload an image (max width: 280px, max height: 110px)`,label:`Upload image with dimension limits`,acceptedFileTypes:[`image/png`,`image/jpeg`],fileWidthLimit:280,fileHeightLimit:110}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isDropZone: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isDropZone: true,
    files: [{
      id: "file1",
      name: "file1.txt",
      size: 1024,
      contentType: "text/plain",
      url: "https://www.example.com/file1.txt"
    }, {
      id: "file2",
      name: "file2.txt",
      size: 2048,
      contentType: "text/plain",
      url: "https://www.example.com/file2.txt"
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    description: "Upload a file (max 1MB)",
    label: "Upload (max 1MB)",
    fileSizeLimit: 1024 * 1024
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    description: "Upload a file (only .txt files)",
    label: "Upload (.txt only)",
    acceptedFileTypes: ["text/plain", "image/png"]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    hiddenInput: true,
    customTrigger: isLoading => <Button variant="ghost" isLoading={isLoading} prefix={<UploadIcon />} className="border border-neutral-700 text-neutral-700">
        Upload file
      </Button>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    description: "Upload a single file",
    label: "Upload single file",
    isDropZone: true,
    allowsMultiple: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...DragAndDrop.args,
    description: "Upload an image (max width: 280px, max height: 110px)",
    label: "Upload image with dimension limits",
    acceptedFileTypes: ["image/png", "image/jpeg"],
    fileWidthLimit: 280,
    fileHeightLimit: 110
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`DragAndDrop`,`DragAndDropWithPreloadedFiles`,`LimitFileSize`,`LimitFileTypes`,`HiddenInput`,`SingleDropZone`,`WidthAndHeightLimits`]}))();export{d as Default,f as DragAndDrop,p as DragAndDropWithPreloadedFiles,g as HiddenInput,m as LimitFileSize,h as LimitFileTypes,_ as SingleDropZone,v as WidthAndHeightLimits,y as __namedExportsOrder,l as default};