import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as m}from"./index-DRjF_FHU.js";import{c as p}from"./index-By-mRCMU.js";import{o as S,q as W}from"./Error-BdxeAqUo.js";import{i as B}from"./Close-a0dMVUhZ.js";import{q as R}from"./Info-CwC22AGT.js";import{c as V}from"./index-wL3GxAOQ.js";const k=({title:r,titleId:t,...a})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":t,...a,children:[r?e.jsx("title",{id:t,children:r}):null,e.jsx("path",{d:"m9 9.956 2.175 2.175a.62.62 0 0 0 .478.197.7.7 0 0 0 .478-.215.656.656 0 0 0 0-.956L9.956 8.991l2.175-2.167a.654.654 0 0 0 0-.955.656.656 0 0 0-.956 0L9 8.044 6.825 5.869a.65.65 0 0 0-.469-.207.65.65 0 0 0-.469.207.656.656 0 0 0-.001.956L8.044 9l-2.175 2.175a.61.61 0 0 0-.197.469.68.68 0 0 0 .215.469.656.656 0 0 0 .955.001zm.005 6.244a7 7 0 0 1-2.799-.562A7.3 7.3 0 0 1 3.91 14.09a7.3 7.3 0 0 1-1.547-2.296A7 7 0 0 1 1.8 8.99q0-1.49.562-2.794a7.26 7.26 0 0 1 3.843-3.834A7 7 0 0 1 9.01 1.8q1.49 0 2.794.562a7.29 7.29 0 0 1 3.834 3.839q.563 1.308.563 2.794a7 7 0 0 1-.562 2.799 7.26 7.26 0 0 1-3.839 3.843 7 7 0 0 1-2.794.563"})]}),E=V("relative flex flex-row items-center rounded-md px-4 py-3 text-sm",{variants:{variant:{information:"bg-neutral-150",confirmation:"bg-success",warning:"bg-warning",error:"bg-error"}},defaultVariants:{variant:"information"}}),f={information:"text-neutral-600",confirmation:"text-success-action",warning:"text-warning-action",error:"text-error-action"},L={information:e.jsx(R,{width:24,height:24}),confirmation:e.jsx(S,{width:24,height:24}),warning:e.jsx(W,{width:24,height:24}),error:e.jsx(k,{width:24,height:24})},c=m.forwardRef(({className:r,variant:t="information",onClose:a,children:d,...N},q)=>e.jsxs("div",{ref:q,role:"alert",className:p(E({variant:t}),r),...N,children:[e.jsx("div",{className:`mr-4 flex items-center ${f[t]}`,children:L[t]}),e.jsx("div",{children:d}),a&&e.jsx(B,{width:24,height:24,className:`ml-4 flex self-start cursor-pointer ${f[t]}`,onClick:a,role:"button"})]}));c.displayName="Alert";const T=m.forwardRef(({className:r,...t},a)=>e.jsx("h5",{ref:a,className:p("my-0 text-base font-semibold",r),...t}));T.displayName="AlertTitle";const _=m.forwardRef(({className:r,...t},a)=>e.jsx("div",{ref:a,className:p("text-sm [&_p]:leading-relaxed",r),...t}));_.displayName="AlertDescription";const n=Object.assign(c,{Title:T,Description:_});try{c.displayName="Alert",c.__docgenInfo={description:"Component that displays an alert to draw attention, supports multiple variants.",displayName:"Alert",props:{onClose:{defaultValue:null,description:`Optional callback function that is triggered when the alert's close button is clicked.
Can be used to remove or hide the alert from the view.`,name:"onClose",required:!1,type:{name:"(() => void)"}},variant:{defaultValue:{value:"information"},description:`variants for the different types of alerts
information, confirmation, warning, error`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"information"'},{value:'"confirmation"'},{value:'"warning"'},{value:'"error"'}]}}}}}catch{}const H={component:n,argTypes:{variant:{control:{type:"select",options:["information","confirmation","warning","error"]}}},decorators:[(r,{args:t})=>{const[a,d]=m.useState(!0);return t.onClose&&(t.onClose=()=>d(!1)),e.jsx(e.Fragment,{children:a&&e.jsx(r,{...t})})}]},o={args:{variant:"information"},render:r=>e.jsx(n,{...r,children:e.jsx(n.Description,{children:"Boodschap van alert."})})},i={args:{variant:"information"},render:r=>e.jsxs(n,{...r,children:[e.jsx(n.Title,{children:"Custom title"}),e.jsx(n.Description,{children:"Boodschap van alert."})]})},s={args:{variant:"information",onClose:()=>alert("Alert closed!")},render:o.render},l={args:{variant:"information",onClose:()=>alert("Alert closed!")},render:i.render};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "information"
  },
  render: args => <Alert {...args}>
      <Alert.Description>Boodschap van alert.</Alert.Description>
    </Alert>
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,v,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "information"
  },
  render: args => <Alert {...args}>
      <Alert.Title>Custom title</Alert.Title>
      <Alert.Description>Boodschap van alert.</Alert.Description>
    </Alert>
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var A,j,C;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "information",
    onClose: () => alert("Alert closed!")
  },
  render: Default.render
}`,...(C=(j=s.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var b,y,D;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "information",
    onClose: () => alert("Alert closed!")
  },
  render: WithTitle.render
}`,...(D=(y=l.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const J=["Default","WithTitle","Closeable","CloseableWithTitle"];export{s as Closeable,l as CloseableWithTitle,o as Default,i as WithTitle,J as __namedExportsOrder,H as default};
