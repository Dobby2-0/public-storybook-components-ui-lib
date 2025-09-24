import{j as r}from"./iframe-pCPVTgLY.js";import{useMDXComponents as i}from"./index-D_Ttm3mB.js";import{M as e,C as m}from"./blocks-CK5P8kgj.js";import{F as p,D as s}from"./Form.stories-CvyewBC6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BZCuiuLl.js";import"./index-BAH2mmZG.js";import"./Button-DJP_bHjW.js";import"./utils-KssRnhJo.js";import"./ButtonBase-CIbgKNRk.js";import"./Loader-CQzFzc2z.js";import"./Tooltip-B_jAPYcF.js";import"./index-Cjc6cs_a.js";import"./Button-BoVUN8m3.js";import"./FocusScope-CZzRTEYS.js";import"./Hidden-BFWSptsY.js";import"./usePress-B_HPZUlW.js";import"./RSPContexts-C7hTczkb.js";import"./Separator-YlK9KSKU.js";import"./Text-D4MUNd0p.js";import"./VisuallyHidden-BnoW5Exi.js";import"./Checkbox-D3eSWhO1.js";import"./Check-DMsJCCZz.js";import"./CheckIndeterminateSmall-DsXnaoE-.js";import"./Form-CDLsHdO9.js";import"./useToggleState-DcOLC0jY.js";import"./useFormReset-Xlvneez8.js";import"./ComboBox-xK4HB-cm.js";import"./ListBox-DR-3XH6b.js";import"./ListBox-DOlAEPS4.js";import"./DragAndDrop-D_3O_Mpu.js";import"./useLabel-Cl2QU3LM.js";import"./Pill-CqovfzcU.js";import"./Input-B0ehA1bT.js";import"./SelectBase-h7pFXi4a.js";import"./Label-CrxS0y54.js";import"./index-Ci0KHNEk.js";import"./variants-BUHBdf3E.js";import"./KeyboardArrowDown-3MN0zNXx.js";import"./DateTimePicker-fuqvePoJ.js";import"./IconButton-BEihGyTK.js";import"./Calendar-3lxsfFxX.js";import"./ChevronBackward-Dgooac8x.js";import"./ChevronForward-Dt1oniAv.js";import"./Form-FH5htBTW.js";import"./ErrorMessage-DTfL6Jyc.js";import"./RadioGroup-D3tUojcl.js";import"./FieldError-DjuhC6cz.js";import"./RichTextEditor-D_HCNJ7_.js";import"./Menu-Cnz1RhxO.js";import"./TableOutlined-csnQKFgQ.js";import"./Toolbar-CnWGVYce.js";import"./Underline-BE-Y38ky.js";import"./Select-BtifVWXe.js";import"./TextField-Dkvzi2S1.js";import"./Group-DpAvh8_h.js";import"./useTextField-2cEodO2u.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
