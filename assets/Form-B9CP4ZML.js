import{j as r}from"./iframe-DBnObzrn.js";import{useMDXComponents as i}from"./index-B-d3goPR.js";import{M as e,C as m}from"./blocks-NNKC2fCM.js";import{F as p,D as s}from"./Form.stories-llQlC9lh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DrnuBweW.js";import"./index-BkS5XzE6.js";import"./Button-Cr0T578r.js";import"./utils-CmXHMkFm.js";import"./ButtonBase-_YL9JEM3.js";import"./Loader-iGbdXS8B.js";import"./Tooltip-DpPc78rU.js";import"./index-D6OcNlQi.js";import"./Button-DiiHpJL5.js";import"./FocusScope-BV70u0ED.js";import"./Hidden-8XDs_WM2.js";import"./usePress-DksSrDjq.js";import"./RSPContexts-DZAnCItI.js";import"./Separator-CUfliJ99.js";import"./Text-CW5cJXdz.js";import"./VisuallyHidden-f3y7nvJ5.js";import"./Checkbox-D8z65cDt.js";import"./Check-DGxcuHpa.js";import"./CheckIndeterminateSmall-BuUM-0At.js";import"./Form-C4LMLapw.js";import"./useToggleState-IX7bVcGr.js";import"./useFormReset-CN8UB6uZ.js";import"./ComboBox-B41Eyrq0.js";import"./ListBox-9AX5Zh7m.js";import"./ListBox-CuZsGKT-.js";import"./DragAndDrop-Bxw30OqG.js";import"./useLabel-D5Tuz0kv.js";import"./Pill-CaSdWkbD.js";import"./Input-xMtkwtyt.js";import"./SelectBase-Xde6dxva.js";import"./Label-4NsE0O4c.js";import"./index-BJjYWeBn.js";import"./variants-l05g1hgj.js";import"./KeyboardArrowDown-C23FBmxV.js";import"./DateTimePicker-D1VGqTDA.js";import"./IconButton-qeGxb-lN.js";import"./Calendar-BTZrEX_d.js";import"./ChevronBackward-DNXIIbHE.js";import"./ChevronForward-C3K7TL4m.js";import"./Form-jr9y56VY.js";import"./ErrorMessage-92n_6AwV.js";import"./RadioGroup-9a9NeTHM.js";import"./FieldError-BWHVKqvx.js";import"./RichTextEditor-BTBFYMKe.js";import"./Menu-CdVV-b80.js";import"./TableOutlined-CaRHr-bV.js";import"./Toolbar-fFihhSAg.js";import"./Underline-BiRBTEvS.js";import"./Select-DspbnRlG.js";import"./TextField-B_GyZ1t3.js";import"./Group-DDgmA8bm.js";import"./useTextField-BzNqOxtQ.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
