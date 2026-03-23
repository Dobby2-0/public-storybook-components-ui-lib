import{j as r}from"./iframe-CQydS_nd.js";import{useMDXComponents as i}from"./index-Q4DFJ4vP.js";import{M as e,C as m}from"./blocks-N0QmHx70.js";import{F as p,D as s}from"./Form.stories-C-V1s0Uo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CIi0pB1t.js";import"./index-BRQh5Kkd.js";import"./index-B5zYb6Mj.js";import"./Button-BgCVV-U7.js";import"./utils-Cb6DKXJV.js";import"./ButtonBase-Xo-AvPpY.js";import"./Loader-CXGDRIQZ.js";import"./Tooltip-D9XFG4fY.js";import"./index-CAtuCoIc.js";import"./Button-Bmomuf-Y.js";import"./FocusScope-CEh1fZhw.js";import"./Text-0U7ASMGe.js";import"./usePress-BCLO8Ibo.js";import"./RSPContexts-B2C6m51m.js";import"./Separator-Di8Q68tt.js";import"./VisuallyHidden-CSSZzawZ.js";import"./Checkbox-Bxj2QRyy.js";import"./Check-BtpBDXrv.js";import"./CheckIndeterminateSmall-WZwYD1sV.js";import"./Form-DaNtxD9T.js";import"./useToggleState-DulKogaz.js";import"./useFormReset-BP8vDI7O.js";import"./ComboBox-BnLb2w2G.js";import"./SingleComboBox-PhCQL6bd.js";import"./ListBox-BfSmrrFc.js";import"./ListBox-Cl0mqXEA.js";import"./DragAndDrop-BzmezzB-.js";import"./useLabel-DIZx3457.js";import"./Pill-CbqXw_Z6.js";import"./Input-C9_CzVgI.js";import"./SelectBase-DdnH_xds.js";import"./sha256-4tBrSuDT.js";import"./Label-DPN3WSAu.js";import"./index-BBBOSXBq.js";import"./Label-aHG8ZUXA.js";import"./variants-BhTap0mv.js";import"./KeyboardArrowDown-CMl7N5mW.js";import"./DateTimePicker-nxDVcNZ5.js";import"./IconButton-CFxoqjut.js";import"./ChevronBackward-DxhTSEEn.js";import"./ChevronForward-BXI8ZFK5.js";import"./Calendar-kHRyAg3E.js";import"./Form-CAnR2wwJ.js";import"./ErrorMessage-YNZTOeOE.js";import"./PhoneNumberField-CcJE03wr.js";import"./index-C7CL5OQ7.js";import"./TextField-yMGp338o.js";import"./Group-CmAUNdu7.js";import"./FieldError-DnLuaYyc.js";import"./useTextField-D6ZBPyHK.js";import"./RadioGroup-D7-PQaRr.js";import"./RichTextEditor-rL3ZKr80.js";import"./Modal-joufA_lJ.js";import"./Select-CwUIF_Yf.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function ur(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{ur as default};
