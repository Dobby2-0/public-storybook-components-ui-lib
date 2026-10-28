import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BbeNlDUO.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./Button-Dq7ffUGf.js";import{n as a,t as o}from"./Select-ByO6_9XJ.js";import{i as s,n as c,r as l,t as u}from"./Dialog-C0wsIP_1.js";import{n as d,t as f}from"./PDFViewer-CFzdp0l4.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{p=t(),r(),d(),a(),c(),l(),m=n(),h={component:u,title:`Components/Dialog`,parameters:{docs:{description:{component:"Controlled dialog: the application owns `isOpen`. Its children are only mounted while the dialog is open, so put effects and state that belong to the dialog in a content component rendered as a child, not in the component that renders the `Dialog`. Pick a `size` instead of overriding widths or heights with classes."}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,`fill`,`fullscreen-mobile`],table:{defaultValue:{summary:`md`}}},dismissable:{control:`boolean`,table:{defaultValue:{summary:`true`}}}}},g=({label:e=`Open dialog`,children:t,...n})=>{let[r,a]=(0,p.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{onPress:()=>a(!0),children:e}),(0,m.jsx)(u,{...n,isOpen:r,onOpenChange:a,children:t})]})},_=e=>Array.from({length:e},(e,t)=>(0,m.jsxs)(`p`,{className:`mb-3 text-sm`,children:[`Paragraph `,t+1,`. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`]},t)),v={render:e=>(0,m.jsxs)(g,{...e,children:[(0,m.jsx)(u.Header,{title:`Sign up`}),(0,m.jsx)(u.Body,{children:(0,m.jsx)(`p`,{children:`This is the dialog content.`})}),(0,m.jsxs)(u.Footer,{children:[(0,m.jsx)(u.CloseButton,{variant:`ghost`,children:`Cancel`}),(0,m.jsx)(i,{children:`Save`})]})]})},y={args:{size:`sm`},render:v.render},b={args:{size:`lg`},render:v.render},x={name:`Long content scrolls inside the frame`,render:e=>(0,m.jsxs)(g,{...e,children:[(0,m.jsx)(u.Header,{title:`Terms and conditions`}),(0,m.jsx)(u.Body,{children:_(40)}),(0,m.jsx)(u.Footer,{children:(0,m.jsx)(u.CloseButton,{children:`Close`})})]})},S={render:e=>(0,m.jsxs)(g,{...e,children:[(0,m.jsx)(u.Header,{title:`Sign up`,hideClose:!0}),(0,m.jsx)(u.Body,{children:(0,m.jsx)(`p`,{children:`Close this dialog with the button below.`})}),(0,m.jsx)(u.Footer,{children:(0,m.jsx)(u.CloseButton,{children:`Close`})})]})},C={args:{dismissable:!1,isKeyboardDismissDisabled:!0},render:e=>(0,m.jsxs)(g,{...e,children:[(0,m.jsx)(u.Header,{title:`Unsaved changes`,hideClose:!0}),(0,m.jsx)(u.Body,{children:(0,m.jsx)(`p`,{children:`Neither the overlay nor Escape closes this dialog.`})}),(0,m.jsx)(u.Footer,{children:(0,m.jsx)(u.CloseButton,{children:`Got it`})})]})},w=()=>{let e=s(),[t,n]=(0,p.useState)(!1);return(0,m.jsx)(i,{isLoading:t,onPress:async()=>{n(!0),await new Promise(e=>setTimeout(e,1e3)),n(!1),e()},children:`Confirm`})},T={render:e=>(0,m.jsxs)(g,{...e,children:[(0,m.jsx)(u.Header,{title:`Confirm`}),(0,m.jsx)(u.Body,{children:(0,m.jsx)(`p`,{children:`Confirming takes a second, then the dialog closes itself.`})}),(0,m.jsxs)(u.Footer,{children:[(0,m.jsx)(u.CloseButton,{variant:`ghost`,children:`Cancel`}),(0,m.jsx)(w,{})]})]})},E=[{id:`1`,label:`Backlog`},{id:`2`,label:`In Progress`},{id:`3`,label:`In Review`},{id:`4`,label:`Done`}],D={name:`With a select inside`,parameters:{docs:{description:{story:`Manual check for content that renders in a portal outside the dialog. The option list of a Select is such content. To verify: open the dialog, open the select, then pick an option. Expected: the list appears above the dialog, picking an option selects it, and the dialog stays open. Only pressing the dark overlay (or Escape) may close the dialog. This is the case that made several screens add their own click-outside handler on the old modal which should not be necessary anymore for when using this component.`}}},render:e=>(0,m.jsxs)(g,{...e,children:[(0,m.jsx)(u.Header,{title:`Change status`}),(0,m.jsx)(u.Body,{children:(0,m.jsx)(o,{label:`Status`,placeholder:`Select a status`,items:E,labelResolver:`label`})}),(0,m.jsx)(u.Footer,{children:(0,m.jsx)(u.CloseButton,{children:`Close`})})]})},O={name:`Fill with a self-scrolling viewer`,args:{size:`fill`},render:e=>(0,m.jsxs)(g,{...e,children:[(0,m.jsx)(u.Header,{title:`Preview`}),(0,m.jsx)(u.Body,{scroll:`none`,children:(0,m.jsx)(f,{url:`./src/assets/Dobby-Flyer.pdf`,className:`min-h-0 flex-1`})})]})},k={args:{size:`fullscreen-mobile`},render:e=>(0,m.jsxs)(g,{...e,children:[(0,m.jsx)(u.Header,{title:`Image`}),(0,m.jsx)(u.Body,{scroll:`none`,children:(0,m.jsx)(`div`,{className:`flex flex-1 items-center justify-center bg-neutral-200`,children:`Full screen below 40rem, 90% of the viewport above`})})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <DialogDemo {...args}>
      <Dialog.Header title="Sign up" />
      <Dialog.Body>
        <p>This is the dialog content.</p>
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.CloseButton variant="ghost">Cancel</Dialog.CloseButton>
        <Button>Save</Button>
      </Dialog.Footer>
    </DialogDemo>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  },
  render: Default.render
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  },
  render: Default.render
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Long content scrolls inside the frame",
  render: args => <DialogDemo {...args}>
      <Dialog.Header title="Terms and conditions" />
      <Dialog.Body>{paragraphs(40)}</Dialog.Body>
      <Dialog.Footer>
        <Dialog.CloseButton>Close</Dialog.CloseButton>
      </Dialog.Footer>
    </DialogDemo>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <DialogDemo {...args}>
      <Dialog.Header title="Sign up" hideClose />
      <Dialog.Body>
        <p>Close this dialog with the button below.</p>
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.CloseButton>Close</Dialog.CloseButton>
      </Dialog.Footer>
    </DialogDemo>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    dismissable: false,
    isKeyboardDismissDisabled: true
  },
  render: args => <DialogDemo {...args}>
      <Dialog.Header title="Unsaved changes" hideClose />
      <Dialog.Body>
        <p>Neither the overlay nor Escape closes this dialog.</p>
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.CloseButton>Got it</Dialog.CloseButton>
      </Dialog.Footer>
    </DialogDemo>
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <DialogDemo {...args}>
      <Dialog.Header title="Confirm" />
      <Dialog.Body>
        <p>Confirming takes a second, then the dialog closes itself.</p>
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.CloseButton variant="ghost">Cancel</Dialog.CloseButton>
        <SlowConfirm />
      </Dialog.Footer>
    </DialogDemo>
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "With a select inside",
  parameters: {
    docs: {
      description: {
        story: "Manual check for content that renders in a portal outside the dialog. The option list of a Select is such content. To verify: open the dialog, open the select, then pick an option. Expected: the list appears above the dialog, picking an option selects it, and the dialog stays open. Only pressing the dark overlay (or Escape) may close the dialog. This is the case that made several screens add their own click-outside handler on the old modal which should not be necessary anymore for when using this component."
      }
    }
  },
  render: args => <DialogDemo {...args}>
      <Dialog.Header title="Change status" />
      <Dialog.Body>
        <Select label="Status" placeholder="Select a status" items={items} labelResolver="label" />
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.CloseButton>Close</Dialog.CloseButton>
      </Dialog.Footer>
    </DialogDemo>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Fill with a self-scrolling viewer",
  args: {
    size: "fill"
  },
  render: args => <DialogDemo {...args}>
      <Dialog.Header title="Preview" />
      <Dialog.Body scroll="none">
        <PDFViewer url="./src/assets/Dobby-Flyer.pdf" className="min-h-0 flex-1" />
      </Dialog.Body>
    </DialogDemo>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    size: "fullscreen-mobile"
  },
  render: args => <DialogDemo {...args}>
      <Dialog.Header title="Image" />
      <Dialog.Body scroll="none">
        <div className="flex flex-1 items-center justify-center bg-neutral-200">
          Full screen below 40rem, 90% of the viewport above
        </div>
      </Dialog.Body>
    </DialogDemo>
}`,...k.parameters?.docs?.source}}},A=[`Default`,`Small`,`Large`,`LongContent`,`NoHeaderCloseButton`,`NotDismissable`,`CloseAfterAsyncWork`,`WithSelectInside`,`FillWithViewer`,`FullscreenOnMobile`]})))()}j();export{T as CloseAfterAsyncWork,v as Default,O as FillWithViewer,k as FullscreenOnMobile,b as Large,x as LongContent,S as NoHeaderCloseButton,C as NotDismissable,y as Small,D as WithSelectInside,A as __namedExportsOrder,h as default};