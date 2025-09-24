import{j as r}from"./iframe-BXPiHqVh.js";import{useMDXComponents as i}from"./index-C4io2ofV.js";import{M as e,C as m}from"./blocks-B8V4PcaQ.js";import{F as p,D as s}from"./Form.stories-CRBBOWcf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ck56ZRIC.js";import"./index-CV5CwA_g.js";import"./Button-SGnKbPfK.js";import"./utils-27_jShyO.js";import"./ButtonBase-CWuN4rLD.js";import"./Loader-CpqExlql.js";import"./Tooltip-Dsfyyiws.js";import"./index-oAELjn7x.js";import"./Button-DL1ibiOs.js";import"./FocusScope-LeIdZG5M.js";import"./Hidden-D1Hw5YaI.js";import"./usePress-BERwH68n.js";import"./RSPContexts-DUo2Ory4.js";import"./Separator-C6c3OyRV.js";import"./Text-CkWaM2ou.js";import"./VisuallyHidden-CFKJPVJm.js";import"./Checkbox-DBrhuibx.js";import"./Check-D3EqmVn0.js";import"./CheckIndeterminateSmall-FCtl4UOn.js";import"./Form-C0d0VHWy.js";import"./useToggleState-BJYMXqbA.js";import"./useFormReset-BNWauykT.js";import"./ComboBox-ClMiD0tx.js";import"./ListBox-ClReQz55.js";import"./ListBox-Dc8Rf_75.js";import"./DragAndDrop-g-1Jj11o.js";import"./useLabel-p0zgzcII.js";import"./Pill-BS3UKFjJ.js";import"./Input-EhCXtg5e.js";import"./SelectBase-DGq8wk-Q.js";import"./Label-DyldAfbl.js";import"./index-DfmHbOXW.js";import"./variants-B46FNICd.js";import"./KeyboardArrowDown-D7ccGzqt.js";import"./DateTimePicker-BYlydwq7.js";import"./IconButton-BG_U03XM.js";import"./Calendar-CCK7cJq_.js";import"./ChevronBackward-Ct3Y6xMF.js";import"./ChevronForward-BR0_PZyg.js";import"./Form-nzbiKfgs.js";import"./ErrorMessage-BhfNd0S-.js";import"./RadioGroup-C6OVA_jo.js";import"./FieldError-B1aTEQqg.js";import"./RichTextEditor-BMmZpZCN.js";import"./Menu-Fi2lGRT9.js";import"./TableOutlined-DfTqaxmT.js";import"./Toolbar-1xqnN-fw.js";import"./Underline-Dttgs30c.js";import"./Select-CcKr27BD.js";import"./TextField-wlM2cCV6.js";import"./Group-BlQGud67.js";import"./useTextField-DaWqdjWn.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
