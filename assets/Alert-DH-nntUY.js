import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as o}from"./index-By-mRCMU.js";import{o as u,q as x}from"./Error-BdxeAqUo.js";import{i as w}from"./Close-a0dMVUhZ.js";import{q as g}from"./Info-CwC22AGT.js";import{c as v}from"./index-wL3GxAOQ.js";import{r as n}from"./index-DRjF_FHU.js";import{u as j}from"./useTranslation-BZwSnrkG.js";const b=({title:r,titleId:t,...a})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":t,...a,children:[r?e.jsx("title",{id:t,children:r}):null,e.jsx("path",{d:"m9 9.956 2.175 2.175a.62.62 0 0 0 .478.197.7.7 0 0 0 .478-.215.656.656 0 0 0 0-.956L9.956 8.991l2.175-2.167a.654.654 0 0 0 0-.955.656.656 0 0 0-.956 0L9 8.044 6.825 5.869a.65.65 0 0 0-.469-.207.65.65 0 0 0-.469.207.656.656 0 0 0-.001.956L8.044 9l-2.175 2.175a.61.61 0 0 0-.197.469.68.68 0 0 0 .215.469.656.656 0 0 0 .955.001zm.005 6.244a7 7 0 0 1-2.799-.562A7.3 7.3 0 0 1 3.91 14.09a7.3 7.3 0 0 1-1.547-2.296A7 7 0 0 1 1.8 8.99q0-1.49.562-2.794a7.26 7.26 0 0 1 3.843-3.834A7 7 0 0 1 9.01 1.8q1.49 0 2.794.562a7.29 7.29 0 0 1 3.834 3.839q.563 1.308.563 2.794a7 7 0 0 1-.562 2.799 7.26 7.26 0 0 1-3.839 3.843 7 7 0 0 1-2.794.563"})]}),y=v("relative flex flex-row items-center justify-between rounded-md px-4 py-3 text-sm",{variants:{variant:{information:"bg-neutral-150",confirmation:"bg-success",warning:"bg-warning",error:"bg-error"}},defaultVariants:{variant:"information"}}),s={information:"text-neutral-600",confirmation:"text-success-action",warning:"text-warning-action",error:"text-error-action"},A={information:e.jsx(g,{width:24,height:24}),confirmation:e.jsx(u,{width:24,height:24}),warning:e.jsx(x,{width:24,height:24}),error:e.jsx(b,{width:24,height:24})},i=n.forwardRef(({className:r,variant:t="information",onClose:a,hideIcon:m=!1,children:d,...f},p)=>{const{t:h}=j("common");return e.jsxs("div",{ref:p,role:"alert",className:o(y({variant:t}),r),...f,children:[!m&&e.jsx("div",{className:`mr-4 flex items-center ${s[t]}`,children:A[t]}),e.jsx("div",{className:"w-full",children:d}),a&&e.jsx("button",{"aria-label":h("close","Close"),name:"close",onClick:a,className:"ml-4 flex self-start cursor-pointer",children:e.jsx(w,{width:24,height:24,className:s[t]})})]})});i.displayName="Alert";const l=n.forwardRef(({className:r,...t},a)=>e.jsx("h5",{ref:a,className:o("my-0 font-semibold",r),...t,children:t.children}));l.displayName="AlertTitle";const c=n.forwardRef(({className:r,...t},a)=>e.jsx("div",{ref:a,className:o("text-sm [&_p]:leading-relaxed",r),...t}));c.displayName="AlertDescription";const k=Object.assign(i,{Title:l,Description:c});try{i.displayName="Alert",i.__docgenInfo={description:"Component that displays an alert to draw attention, supports multiple variants.",displayName:"Alert",props:{onClose:{defaultValue:null,description:`Optional callback function that is triggered when the alert's close button is clicked.
Can be used to remove or hide the alert from the view.`,name:"onClose",required:!1,type:{name:"(() => void)"}},hideIcon:{defaultValue:{value:"false"},description:"optional parm to hide the icon in the alert",name:"hideIcon",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"information"},description:`variants for the different types of alerts
information, confirmation, warning, error`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"information"'},{value:'"confirmation"'},{value:'"warning"'},{value:'"error"'}]}}}}}catch{}export{k as A};
