import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-BfNQUoGZ.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{n as i,t as a}from"./Select-B8qKeaFp.js";import{i as o,n as s,r as c,t as l}from"./Dialog-_QBzg0UI.js";import{n as u,t as d}from"./PDFViewer-HQWfTndF.js";import{n as f,t as p}from"./Button-DQHLT8si.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;t((()=>{m=e(n(),1),f(),u(),i(),s(),c(),h=r(),g={component:l,title:`Components/Dialog`,parameters:{docs:{description:{component:"Controlled dialog: the application owns `isOpen`. Its children are only mounted while the dialog is open, so put effects and state that belong to the dialog in a content component rendered as a child, not in the component that renders the `Dialog`. Pick a `size` instead of overriding widths or heights with classes."}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,`fill`,`fullscreen-mobile`],table:{defaultValue:{summary:`md`}}},dismissable:{control:`boolean`,table:{defaultValue:{summary:`true`}}}}},_=({label:e=`Open dialog`,children:t,...n})=>{let[r,i]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p,{onPress:()=>i(!0),children:e}),(0,h.jsx)(l,{...n,isOpen:r,onOpenChange:i,children:t})]})},v=e=>Array.from({length:e},(e,t)=>(0,h.jsxs)(`p`,{className:`mb-3 text-sm`,children:[`Paragraph `,t+1,`. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`]},t)),y={render:e=>(0,h.jsxs)(_,{...e,children:[(0,h.jsx)(l.Header,{title:`Sign up`}),(0,h.jsx)(l.Body,{children:(0,h.jsx)(`p`,{children:`This is the dialog content.`})}),(0,h.jsxs)(l.Footer,{children:[(0,h.jsx)(l.CloseButton,{variant:`ghost`,children:`Cancel`}),(0,h.jsx)(p,{children:`Save`})]})]})},b={args:{size:`sm`},render:y.render},x={args:{size:`lg`},render:y.render},S={name:`Long content scrolls inside the frame`,render:e=>(0,h.jsxs)(_,{...e,children:[(0,h.jsx)(l.Header,{title:`Terms and conditions`}),(0,h.jsx)(l.Body,{children:v(40)}),(0,h.jsx)(l.Footer,{children:(0,h.jsx)(l.CloseButton,{children:`Close`})})]})},C={render:e=>(0,h.jsxs)(_,{...e,children:[(0,h.jsx)(l.Header,{title:`Sign up`,hideClose:!0}),(0,h.jsx)(l.Body,{children:(0,h.jsx)(`p`,{children:`Close this dialog with the button below.`})}),(0,h.jsx)(l.Footer,{children:(0,h.jsx)(l.CloseButton,{children:`Close`})})]})},w={args:{dismissable:!1,isKeyboardDismissDisabled:!0},render:e=>(0,h.jsxs)(_,{...e,children:[(0,h.jsx)(l.Header,{title:`Unsaved changes`,hideClose:!0}),(0,h.jsx)(l.Body,{children:(0,h.jsx)(`p`,{children:`Neither the overlay nor Escape closes this dialog.`})}),(0,h.jsx)(l.Footer,{children:(0,h.jsx)(l.CloseButton,{children:`Got it`})})]})},T=()=>{let e=o(),[t,n]=(0,m.useState)(!1);return(0,h.jsx)(p,{isLoading:t,onPress:async()=>{n(!0),await new Promise(e=>setTimeout(e,1e3)),n(!1),e()},children:`Confirm`})},E={render:e=>(0,h.jsxs)(_,{...e,children:[(0,h.jsx)(l.Header,{title:`Confirm`}),(0,h.jsx)(l.Body,{children:(0,h.jsx)(`p`,{children:`Confirming takes a second, then the dialog closes itself.`})}),(0,h.jsxs)(l.Footer,{children:[(0,h.jsx)(l.CloseButton,{variant:`ghost`,children:`Cancel`}),(0,h.jsx)(T,{})]})]})},D=[{id:`1`,label:`Backlog`},{id:`2`,label:`In Progress`},{id:`3`,label:`In Review`},{id:`4`,label:`Done`}],O={name:`With a select inside`,parameters:{docs:{description:{story:`Manual check for content that renders in a portal outside the dialog. The option list of a Select is such content. To verify: open the dialog, open the select, then pick an option. Expected: the list appears above the dialog, picking an option selects it, and the dialog stays open. Only pressing the dark overlay (or Escape) may close the dialog. This is the case that made several screens add their own click-outside handler on the old modal which should not be necessary anymore for when using this component.`}}},render:e=>(0,h.jsxs)(_,{...e,children:[(0,h.jsx)(l.Header,{title:`Change status`}),(0,h.jsx)(l.Body,{children:(0,h.jsx)(a,{label:`Status`,placeholder:`Select a status`,items:D,labelResolver:`label`})}),(0,h.jsx)(l.Footer,{children:(0,h.jsx)(l.CloseButton,{children:`Close`})})]})},k={name:`Fill with a self-scrolling viewer`,args:{size:`fill`},render:e=>(0,h.jsxs)(_,{...e,children:[(0,h.jsx)(l.Header,{title:`Preview`}),(0,h.jsx)(l.Body,{scroll:`none`,children:(0,h.jsx)(d,{url:`./src/assets/Dobby-Flyer.pdf`,className:`min-h-0 flex-1`})})]})},A={args:{size:`fullscreen-mobile`},render:e=>(0,h.jsxs)(_,{...e,children:[(0,h.jsx)(l.Header,{title:`Image`}),(0,h.jsx)(l.Body,{scroll:`none`,children:(0,h.jsx)(`div`,{className:`flex flex-1 items-center justify-center bg-neutral-200`,children:`Full screen below 40rem, 90% of the viewport above`})})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  },
  render: Default.render
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  },
  render: Default.render
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Long content scrolls inside the frame",
  render: args => <DialogDemo {...args}>
      <Dialog.Header title="Terms and conditions" />
      <Dialog.Body>{paragraphs(40)}</Dialog.Body>
      <Dialog.Footer>
        <Dialog.CloseButton>Close</Dialog.CloseButton>
      </Dialog.Footer>
    </DialogDemo>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <DialogDemo {...args}>
      <Dialog.Header title="Sign up" hideClose />
      <Dialog.Body>
        <p>Close this dialog with the button below.</p>
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.CloseButton>Close</Dialog.CloseButton>
      </Dialog.Footer>
    </DialogDemo>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Default`,`Small`,`Large`,`LongContent`,`NoHeaderCloseButton`,`NotDismissable`,`CloseAfterAsyncWork`,`WithSelectInside`,`FillWithViewer`,`FullscreenOnMobile`]}))();export{E as CloseAfterAsyncWork,y as Default,k as FillWithViewer,A as FullscreenOnMobile,x as Large,S as LongContent,C as NoHeaderCloseButton,w as NotDismissable,b as Small,O as WithSelectInside,j as __namedExportsOrder,g as default};