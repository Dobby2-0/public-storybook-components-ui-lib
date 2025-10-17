import{j as r}from"./iframe-n181mq3D.js";import{useMDXComponents as i}from"./index-BlyjVrQ8.js";import{M as e,C as m}from"./blocks-2pSplB1C.js";import{F as p,D as s}from"./Form.stories-Ddyg6u9A.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DGIxAsde.js";import"./index-WBFsckyM.js";import"./Button-DAI6QtwY.js";import"./utils-DPqjRg3c.js";import"./ButtonBase-ntosiJYG.js";import"./Loader-5v3J4sKC.js";import"./Tooltip-Dwpn2_1L.js";import"./index-hLNeMUxU.js";import"./Button-D6Xaooh9.js";import"./FocusScope-D1WlAMuX.js";import"./Hidden-CzZ-MfBG.js";import"./usePress-14EQ3Yds.js";import"./RSPContexts-BjQGfZ66.js";import"./Separator-BDdfzw_L.js";import"./Text-CThsNmpJ.js";import"./VisuallyHidden-DnzB2pVy.js";import"./Checkbox-SGB_ky42.js";import"./Check-jw-3n7Gq.js";import"./CheckIndeterminateSmall-C-268Yq7.js";import"./Form-Bmqdd2sr.js";import"./useToggleState-BTdDEvn4.js";import"./useFormReset-NFbgU8oY.js";import"./ComboBox-DbJ4m7WC.js";import"./ListBox-4BwGctk7.js";import"./ListBox-C3uXcLjw.js";import"./DragAndDrop-gDc9PS78.js";import"./useLabel-sOdn13FD.js";import"./Pill-BZ5CAC_T.js";import"./Input-Ce1DH0ox.js";import"./SelectBase-DWc4m9xt.js";import"./Label-RJ_mwkhl.js";import"./index-DW8HR16_.js";import"./variants-B3SOX74r.js";import"./KeyboardArrowDown-CGaiqFQB.js";import"./DateTimePicker-CO0OT1V4.js";import"./IconButton-BbaeprOr.js";import"./Calendar-DY4Wpi0v.js";import"./ChevronBackward-CG4TiP7o.js";import"./ChevronForward-DEIxgLvF.js";import"./Form-Dg8PIODn.js";import"./ErrorMessage-C0mkr38w.js";import"./RadioGroup-ZH_O14ya.js";import"./FieldError-B8WRr68i.js";import"./RichTextEditor-HycZr4XU.js";import"./Menu-DW71UQVI.js";import"./TableOutlined-DOQKQzvr.js";import"./Toolbar-D-dMCn_D.js";import"./Underline-CtQ_MAlo.js";import"./Select-BoRaU8Nk.js";import"./TextField-C3K_Crnk.js";import"./Group-AIrs5DKi.js";import"./useTextField-DJD6lX7z.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
`,r.jsx(o.h1,{id:"form",children:"Form"}),`
`,r.jsxs(o.p,{children:["The Form component provides a wrapper around ShadCN's ",r.jsx(o.code,{children:"react-hook-form"})," component."]}),`
`,r.jsx(m,{of:s}),`
`,r.jsx(o.h2,{id:"validation",children:"Validation"}),`
`,r.jsxs(o.p,{children:["To handle validation, create a ",r.jsx(o.code,{children:"zod"})," schema to pass to the component."]}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{children:`import {z} from "zod";

const formSchema = z.object({
  text: z.string().min(2, {
    message: "Text must be at least 2 characters long",
  }),
  number: z.coerce.number({
    required_error: "Number is required",
  }),
  checkbox: z.boolean(),
  select: z
    .object({id: z.string(), label: z.string(), value: z.string()})
    .optional(),
  combobox: z
    .object({id: z.string(), label: z.string(), value: z.string()})
    .optional(),
  radiogroup: z.string().optional(),
});
type FormSchema = z.infer<typeof formSchema>;
`})}),`
`,r.jsx(o.h2,{id:"submit-and-validation-error-handling",children:"Submit and validation error handling"}),`
`,r.jsxs(o.p,{children:["This component wraps the default ",r.jsx(o.code,{children:"react-hook-form"})," submit props."]}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{children:`import {FieldErrors} from "react-hook-form";

const onSubmit = (values: FormSchema) => {
  console.log(values);
};

const onError = (errors: FieldErrors<FormSchema>) => {
  console.error("form errors!", errors);
};

<Form onSubmit={onSubmit} onError={onError} />
`})}),`
`,r.jsx(o.h2,{id:"external-submit",children:"External submit"}),`
`,r.jsx(o.p,{children:"To submit the form without pressing the submit button, you can add a ref and call submit that way."}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{children:`const formRef = useFormRef();

<Form ref={formRef} {...props}/>;

formRef.current?.submit();
`})})]})}function lr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{lr as default};
