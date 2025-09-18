import{j as r}from"./iframe-hbt803SA.js";import{useMDXComponents as i}from"./index-BCqDS3aN.js";import{M as e,C as m}from"./blocks-WIK9Uu9k.js";import{F as p,D as s}from"./Form.stories-CHjoVKN8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bn76eS9p.js";import"./index-Bh_rSLyT.js";import"./Button-CTfm598r.js";import"./utils-dcOOZwor.js";import"./ButtonBase-BCRUrUYn.js";import"./Loader-Ct8dMhnf.js";import"./Tooltip-B5-cZuTg.js";import"./index-BBokQijN.js";import"./Button-KKJR6GfS.js";import"./FocusScope-BEUdOiWm.js";import"./Hidden-BTnM5l8R.js";import"./usePress-DzmQcU2a.js";import"./RSPContexts-6LnyuNGY.js";import"./Separator-BknIrX87.js";import"./Text-rhfBl7DC.js";import"./VisuallyHidden-DhUISRXy.js";import"./Checkbox-B41mHljQ.js";import"./Check-Btoihq8H.js";import"./CheckIndeterminateSmall-Dtuzr66T.js";import"./Form-CvGTRu2N.js";import"./useToggleState-C0CQZ30A.js";import"./useFormReset-DS7pDQlT.js";import"./ComboBox-DabF85HV.js";import"./ListBox-CWvsX-IX.js";import"./ListBox-BIeqU0sv.js";import"./DragAndDrop-D11_0eoz.js";import"./useLabel-MIaq_0gq.js";import"./Pill-DIOcHtiH.js";import"./Input-BWAVfvnD.js";import"./SelectBase-vVryO8gr.js";import"./Label-B85BqeeT.js";import"./index-0p7-oNBR.js";import"./variants-BAEPOywq.js";import"./KeyboardArrowDown-CGn0g2tu.js";import"./DateTimePicker-C1bB0xNv.js";import"./IconButton-a4cQ2G18.js";import"./Calendar-fPYZINlJ.js";import"./ChevronBackward-BIQMzO5w.js";import"./ChevronForward-lx1hxQK6.js";import"./Form-a7IaKS39.js";import"./ErrorMessage-Bsbfq_Z2.js";import"./RadioGroup-BBHRUs7y.js";import"./FieldError-D2flAWcF.js";import"./RichTextEditor-CM-iDaCl.js";import"./Menu-RjmssxhL.js";import"./TableOutlined-CkO1AYHq.js";import"./Toolbar-l9wxkKue.js";import"./Underline-CwUFdnkm.js";import"./Select-CfGGkRUU.js";import"./TextField-D68W0LPN.js";import"./Group-BANydhuI.js";import"./useTextField-ssjgnsdv.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
