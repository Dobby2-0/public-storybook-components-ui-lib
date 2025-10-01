import{j as r}from"./iframe-mcWpFp50.js";import{useMDXComponents as i}from"./index-D4suhGiq.js";import{M as e,C as m}from"./blocks-B63ZZE6f.js";import{F as p,D as s}from"./Form.stories-BEBAlfQh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DZlVM2YG.js";import"./index-DBWMK8Cg.js";import"./Button-DpmyBk7z.js";import"./utils-BIP2b6Ak.js";import"./ButtonBase-BNkNVCYB.js";import"./Loader-MBCcwtmE.js";import"./Tooltip-FrDl5dX6.js";import"./index-BcAvtL0L.js";import"./Button-FMZxpkiS.js";import"./FocusScope-B0HwETIT.js";import"./Hidden-CR4Uk1Xy.js";import"./usePress-Cm_x9ZZD.js";import"./RSPContexts-B8Igx6HR.js";import"./Separator-Bub8ob_E.js";import"./Text-CqcJ-z6M.js";import"./VisuallyHidden-DVoHrb7c.js";import"./Checkbox-CNVEBaLf.js";import"./Check-Cd4NbGYs.js";import"./CheckIndeterminateSmall-AT3LxXUB.js";import"./Form-DxfmEQAa.js";import"./useToggleState-e8Ly1t59.js";import"./useFormReset-CmKVX6BS.js";import"./ComboBox-Dw-OQlcu.js";import"./ListBox-By5FreyA.js";import"./ListBox-yNW6rQ6N.js";import"./DragAndDrop-DIvIEoT2.js";import"./useLabel-CXlK4qqb.js";import"./Pill-Bl7PqWSX.js";import"./Input-5Z8j_2iN.js";import"./SelectBase-BNCxSjFh.js";import"./Label-C5ZfMUM-.js";import"./index-tKoVv7MJ.js";import"./variants-3gtrVTJ2.js";import"./KeyboardArrowDown-C7C3PDc4.js";import"./DateTimePicker-CITCUq3F.js";import"./IconButton-BnNZrLD6.js";import"./Calendar-Cuamt0uE.js";import"./ChevronBackward-BkGSv5aM.js";import"./ChevronForward-DxgT0DGQ.js";import"./Form-DMYzHFfl.js";import"./ErrorMessage-DerayRGm.js";import"./RadioGroup-BSLMMzAp.js";import"./FieldError-C0WsF8dr.js";import"./RichTextEditor-Boi1Tr0C.js";import"./Menu-BJEDWCcP.js";import"./TableOutlined-BJZm8FWW.js";import"./Toolbar-Dd5mYCmk.js";import"./Underline-DaTD9keU.js";import"./Select-CNt3jdam.js";import"./TextField-CFKP8CeJ.js";import"./Group-Ce2DRz3k.js";import"./useTextField-JBK0_Upz.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
