import{j as r}from"./iframe-1Yz_zUdT.js";import{useMDXComponents as e}from"./index-BnZ4Xqi3.js";import{M as i,C as m}from"./blocks-CDJZvmh-.js";import{F as s,D as p}from"./Form.stories-SSuAi-AQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DU6_6nRx.js";import"./index-DYVwY4he.js";import"./Button-C54puD7r.js";import"./utils-XkaaT7kg.js";import"./ButtonBase-FTt2cV4v.js";import"./Loader-DgxdfNMK.js";import"./Tooltip-BcGoh_qj.js";import"./index-BCHpOzJG.js";import"./Button-BlO5GJxh.js";import"./FocusScope-Carh01ar.js";import"./Hidden-BU2FADyq.js";import"./usePress-380VholK.js";import"./RSPContexts-BpdN72CW.js";import"./Separator-5EF8TGDg.js";import"./Text-BuEkZB6r.js";import"./VisuallyHidden-z0uzQJ2D.js";import"./Checkbox-DxYMQLCA.js";import"./Check-Dkopy_ML.js";import"./Form-G_xdiTtm.js";import"./useToggleState-DIJ0WUIo.js";import"./useFormReset-GsD-KGES.js";import"./ComboBox-vIhahTqt.js";import"./ListBox-DbuI3tmc.js";import"./ListBox-BxkUpGNl.js";import"./DragAndDrop-xd10rApz.js";import"./useLabel-DGjbWylh.js";import"./Pill-B_FLuHTv.js";import"./Input-B3EYcxs0.js";import"./SelectBase-Bz1bHX3q.js";import"./Label-BWYCjb01.js";import"./index-BWzP0DZY.js";import"./variants-DtHbhhI0.js";import"./KeyboardArrowDown-BXc9ae1_.js";import"./DateTimePicker-BNnuo7Bc.js";import"./IconButton-xEmVPo0C.js";import"./ChevronBackward-DfmhpzTl.js";import"./ChevronForward-Dy6z4-83.js";import"./Form--zznYJoo.js";import"./TextField-BOeBLjKA.js";import"./FieldError-B9rNJxca.js";import"./Group-DaoF3GtV.js";import"./RadioGroup-Wx7WLcPt.js";import"./RichTextEditor-BK-CRD3q.js";import"./Menu-Bgjx4MM-.js";import"./Toolbar-CCq9KMPT.js";import"./Select-C1ZXrppn.js";function t(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{of:s}),`
`,r.jsx(o.h1,{id:"form",children:"Form"}),`
`,r.jsxs(o.p,{children:["The Form component provides a wrapper around ShadCN's ",r.jsx(o.code,{children:"react-hook-form"})," component."]}),`
`,r.jsx(m,{of:p}),`
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
`})})]})}function mr(n={}){const{wrapper:o}={...e(),...n.components};return o?r.jsx(o,{...n,children:r.jsx(t,{...n})}):t(n)}export{mr as default};
