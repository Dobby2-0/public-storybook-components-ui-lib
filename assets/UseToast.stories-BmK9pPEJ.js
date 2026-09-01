import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{a as n,o as r}from"./iframe-BRfQ10yL.js";import{D as i,E as a}from"./hooks-BgGPiXMA.js";import{n as o,t as s}from"./Button-nC1UjAyO.js";var c,l,u,d,f,p=e((()=>{a(),o(),r(),c=t(),l={component:n,title:`Hooks/useToast`,tags:[`!autodocs`,`!dev`]},u=({id:e,duration:t})=>{let n=i(),r=`Toast Title `+e;return(0,c.jsx)(s,{onPress:()=>n({title:r,children:`This is a test toast notification!`,onClose:()=>console.warn(`Toast closed`),duration:t}),children:(0,c.jsxs)(`p`,{children:[`Toast `,e]})})},d={render:()=>(0,c.jsx)(`div`,{className:`h-[200px] w-[500px]`,children:(0,c.jsx)(u,{id:`1`,duration:5e3})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="h-[200px] w-[500px]">
        <ToastButton id="1" duration={5000} />
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`]}));p();export{d as Default,f as __namedExportsOrder,l as default,p as t};