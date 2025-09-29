import{j as r}from"./iframe-5IEfGzXE.js";import{useMDXComponents as i}from"./index-HBkqSDsX.js";import{M as e,C as m}from"./blocks-BnfWVK_C.js";import{F as p,D as s}from"./Form.stories-3DzVXOOH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CAUVJQTj.js";import"./index-BNlYiRcO.js";import"./Button-D0AYaC-b.js";import"./utils-BKnbYhMG.js";import"./ButtonBase-Dc1tPs-Z.js";import"./Loader-D-eBb8G3.js";import"./Tooltip-PRCnj6Ek.js";import"./index-BAPMv0ud.js";import"./Button-YbOQXSwu.js";import"./FocusScope-Cn5l4HhC.js";import"./Hidden-D7tuP1Wd.js";import"./usePress-DUQn-7pn.js";import"./RSPContexts-Dvv25O9r.js";import"./Separator-BEJMVifu.js";import"./Text-CFC3dFYq.js";import"./VisuallyHidden-DYW6wCxD.js";import"./Checkbox-CeqGG0dN.js";import"./Check-KM5_FBnh.js";import"./CheckIndeterminateSmall-SDCI3BER.js";import"./Form-DbIcEKmJ.js";import"./useToggleState-CQqpWyB2.js";import"./useFormReset-sL086Rpq.js";import"./ComboBox-DQIhlDaB.js";import"./ListBox-BGyWtMxo.js";import"./ListBox-CEJHGLxH.js";import"./DragAndDrop-Q54wldgl.js";import"./useLabel-3I_d-XAl.js";import"./Pill-CtlIgXQH.js";import"./Input-CxdRMaqW.js";import"./SelectBase-apQkj3La.js";import"./Label-DrZSU7v_.js";import"./index-DeZF6bs0.js";import"./variants-UCmfpRDY.js";import"./KeyboardArrowDown-BJFiUtkH.js";import"./DateTimePicker-B_ooU0Ie.js";import"./IconButton-Znak6CDw.js";import"./Calendar-dFsVUpBG.js";import"./ChevronBackward-D-fgW6hA.js";import"./ChevronForward-CtKu2t79.js";import"./Form-BnRlF3E4.js";import"./ErrorMessage-CmPIvEka.js";import"./RadioGroup-DgmvZX1-.js";import"./FieldError-DduBTgoF.js";import"./RichTextEditor-CrSsNz2P.js";import"./Menu-DlsbcFgn.js";import"./TableOutlined-CAH4lHTC.js";import"./Toolbar-BDjd40TT.js";import"./Underline-C3v5LpoY.js";import"./Select-6F4UM9ck.js";import"./TextField-CbRPf0J-.js";import"./Group-EhoiuwMk.js";import"./useTextField-CIVBn76s.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
