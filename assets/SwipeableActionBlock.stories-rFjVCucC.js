import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{Rt as n,Xt as r,en as i,ln as a,pn as o,t as s,w as c,yt as l}from"./main-DS6peC0q.js";import{a as u,i as d,t as f}from"./main-jXz3oU4p.js";import{t as p}from"./IconButton-DmTMahil.js";var m,h,g,_,v,y;e((()=>{u(),f(),s(),m=t(),h={component:d},g={args:{startActions:[{children:`Action with delay`,className:`bg-secondary-focus text-secondary-focus-foreground`,onPress:async()=>{await new Promise(e=>setTimeout(e,1e3))}}],endActions:[{children:(0,m.jsxs)(`span`,{className:`flex flex-col items-center gap-0.5`,children:[(0,m.jsx)(r,{className:`shrink-0`}),(0,m.jsx)(`span`,{children:`Approve`})]}),className:`bg-success text-success-foreground min-w-20`},{children:(0,m.jsxs)(`span`,{className:`flex flex-col items-center gap-0.5`,children:[(0,m.jsx)(n,{className:`shrink-0`}),(0,m.jsx)(`span`,{children:`Delete`})]}),className:`bg-error text-error-foreground min-w-20`}],children:(0,m.jsxs)(`div`,{className:`flex items-center justify-between w-80 h-20 sm:w-100 p-4 rounded-md overflow-hidden bg-control text-primary font-medium`,children:[(0,m.jsx)(o,{}),(0,m.jsx)(`span`,{children:`Swipe me left or right!`}),(0,m.jsx)(a,{})]}),className:{container:`rounded-md overflow-hidden`,actions:`gap-1`}}},_={args:{endActions:[{children:(0,m.jsxs)(`span`,{className:`flex flex-col items-center gap-0.5`,children:[(0,m.jsx)(l,{className:`shrink-0`}),(0,m.jsx)(`span`,{children:`Flag`})]}),className:`bg-warning text-warning-foreground min-w-20`}],children:(0,m.jsxs)(`div`,{className:`flex items-center justify-between w-80 h-20 sm:w-100 p-4 rounded-md overflow-hidden bg-control text-primary font-medium`,children:[(0,m.jsx)(o,{}),(0,m.jsx)(`span`,{children:`I can only swipe left`}),(0,m.jsx)(i,{})]}),className:{container:`rounded-md overflow-hidden`,actions:`gap-1`}}},v={args:{startActions:e=>(0,m.jsx)(p,{variant:`primary`,className:`size-20`,onPress:e,children:(0,m.jsx)(c,{})}),children:(0,m.jsxs)(`div`,{className:`flex items-center justify-between w-80 h-20 sm:w-100 p-4 rounded-md overflow-hidden bg-control text-primary font-medium`,children:[(0,m.jsx)(i,{}),(0,m.jsx)(`span`,{children:`I can only swipe right`}),(0,m.jsx)(a,{})]}),className:{container:`rounded-md overflow-hidden`,actions:`gap-1`}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    startActions: [{
      children: "Action with delay",
      className: "bg-secondary-focus text-secondary-focus-foreground",
      onPress: async () => {
        await new Promise(res => setTimeout(res, 1000));
      }
    }],
    endActions: [{
      children: <span className="flex flex-col items-center gap-0.5">
            <CheckCircle className="shrink-0" />
            <span>Approve</span>
          </span>,
      className: "bg-success text-success-foreground min-w-20"
    }, {
      children: <span className="flex flex-col items-center gap-0.5">
            <DeleteForever className="shrink-0" />
            <span>Delete</span>
          </span>,
      className: "bg-error text-error-foreground min-w-20"
    }],
    children: <div className="flex items-center justify-between w-80 h-20 sm:w-100 p-4 rounded-md overflow-hidden bg-control text-primary font-medium">
        <ArrowBack />
        <span>Swipe me left or right!</span>
        <ArrowForward />
      </div>,
    className: {
      container: "rounded-md overflow-hidden",
      actions: "gap-1"
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    endActions: [{
      children: <span className="flex flex-col items-center gap-0.5">
            <Flag className="shrink-0" />
            <span>Flag</span>
          </span>,
      className: "bg-warning text-warning-foreground min-w-20"
    }],
    children: <div className="flex items-center justify-between w-80 h-20 sm:w-100 p-4 rounded-md overflow-hidden bg-control text-primary font-medium">
        <ArrowBack />
        <span>I can only swipe left</span>
        <Cancel />
      </div>,
    className: {
      container: "rounded-md overflow-hidden",
      actions: "gap-1"
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    startActions: close => <IconButton variant="primary" className="size-20" onPress={close}>
        <Send />
      </IconButton>,
    children: <div className="flex items-center justify-between w-80 h-20 sm:w-100 p-4 rounded-md overflow-hidden bg-control text-primary font-medium">
        <Cancel />
        <span>I can only swipe right</span>
        <ArrowForward />
      </div>,
    className: {
      container: "rounded-md overflow-hidden",
      actions: "gap-1"
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`SingleSide`,`CustomNode`]}))();export{v as CustomNode,g as Default,_ as SingleSide,y as __namedExportsOrder,h as default};