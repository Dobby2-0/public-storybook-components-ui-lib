import{j as r}from"./iframe-BNzyGInw.js";import{useMDXComponents as i}from"./index-DMYzpsSa.js";import{M as e,C as m}from"./blocks-CX-QxFhp.js";import{F as p,D as s}from"./Form.stories-DUWG-aGT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cde9lS8Q.js";import"./index-Bo-Ruxo_.js";import"./index-CXeldCEg.js";import"./Button-CI6KuKV5.js";import"./utils-Dlm2XOHV.js";import"./ButtonBase-KMKKr80I.js";import"./Loader-Dfd4fjR4.js";import"./Tooltip-PWVW5Nnn.js";import"./index-DH5D0aUc.js";import"./Button-DHKzDG8z.js";import"./FocusScope-8nXzWN-Y.js";import"./Text-B40xMfta.js";import"./usePress-CW0TlZGg.js";import"./RSPContexts-DrsKWjkf.js";import"./Separator-DGo6WF40.js";import"./VisuallyHidden-BMEkr2Go.js";import"./Checkbox-hcm4wUBO.js";import"./Check-N35m8Kn8.js";import"./CheckIndeterminateSmall-Bat8DHuE.js";import"./Form-efq6y-HI.js";import"./useToggleState-Duztzgal.js";import"./useFormReset-CJ7CqdAv.js";import"./ComboBox-oIuVmc31.js";import"./ListBox-WX2XCF3C.js";import"./ListBox-BM1lJpmi.js";import"./DragAndDrop-OV2wTULn.js";import"./useLabel-BTYvcJDq.js";import"./Pill-C-itjlAK.js";import"./Input-CRz-Sbts.js";import"./SelectBase-H1yZt9iV.js";import"./Label-DCKJq6q8.js";import"./index-CmMOcchx.js";import"./Label-gtIqMLxA.js";import"./variants-TuDvegBV.js";import"./KeyboardArrowDown-u5ryAxDG.js";import"./DateTimePicker-dGkfk8QP.js";import"./IconButton-BijAwHR7.js";import"./ChevronBackward-B37NFjJC.js";import"./ChevronForward-CwJyMRJD.js";import"./Calendar-BV4x2Pxi.js";import"./Form-BLIHBMka.js";import"./ErrorMessage-CJ1er9eM.js";import"./RadioGroup-CRAjSDTF.js";import"./FieldError-CI5qv2Wj.js";import"./RichTextEditor-sSSBK380.js";import"./Modal-CmGgr4Nd.js";import"./Select-B3T67SFw.js";import"./TextField-w-4xirjn.js";import"./Group-B2C_BuoH.js";import"./useTextField-CNFUyECM.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function cr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{cr as default};
