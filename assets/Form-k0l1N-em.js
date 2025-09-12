import{j as r}from"./iframe-CIaFx2q2.js";import{useMDXComponents as i}from"./index-D4JE-7Sp.js";import{M as e,C as m}from"./blocks-DjVbWMtg.js";import{F as p,D as s}from"./Form.stories-DlceDUiN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CcIytjnB.js";import"./index-uKKeEpF6.js";import"./Button-Blwzr2ZA.js";import"./utils-D-1pXXnN.js";import"./ButtonBase-67FoIazS.js";import"./Loader-LULHh8rS.js";import"./Tooltip-B20ROSUN.js";import"./index-BUWFphUH.js";import"./Button-q_8A41Mf.js";import"./FocusScope-DSlukKEN.js";import"./Hidden-DCSrIPOz.js";import"./usePress-8aWzuJ7v.js";import"./RSPContexts-7sqEX1iE.js";import"./Separator-CG6JFri3.js";import"./Text-CzIHxRsu.js";import"./VisuallyHidden-DhEKfe7W.js";import"./Checkbox-DJbvr-1j.js";import"./Check-G01i2Qjk.js";import"./Form-QcCe0raZ.js";import"./useToggleState-DrBD6W57.js";import"./useFormReset-wMgme_OD.js";import"./ComboBox-BSCx8bUx.js";import"./ListBox-C__S1f1y.js";import"./ListBox-BnuMuTQm.js";import"./DragAndDrop-B3UvGqJ7.js";import"./useLabel-6z3we1ld.js";import"./Pill-ipC1kgMn.js";import"./Input-C_DfLIqm.js";import"./SelectBase-BG0f1lR1.js";import"./Label-D922ixhj.js";import"./index-CsAEAbEi.js";import"./variants-CoVKe-fX.js";import"./KeyboardArrowDown-DdGS9cSB.js";import"./DateTimePicker-CTuCCFoR.js";import"./IconButton-DqibcTCX.js";import"./ChevronBackward-DKx10IwT.js";import"./ChevronForward-dvVZ_BYv.js";import"./Form-dfCnBPMV.js";import"./ErrorMessage-Dy0NJ09v.js";import"./RadioGroup-DqUMo9Ku.js";import"./FieldError-CkBKzc-U.js";import"./RichTextEditor-BekGRkFY.js";import"./Menu-zttevBa7.js";import"./Toolbar-DWOhx8AB.js";import"./Select-BIyCaghX.js";import"./TextField-CEtKi33r.js";import"./Group-Dh2ZJUtB.js";import"./useTextField-DDLAnkbv.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function sr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{sr as default};
