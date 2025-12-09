import{j as r}from"./iframe-nfYaCMFG.js";import{useMDXComponents as i}from"./index-B5_5vHQb.js";import{M as e,C as m}from"./blocks-BPbfHFP-.js";import{F as p,D as s}from"./Form.stories-B48etogp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DU8kGLuZ.js";import"./index-O77fUrkO.js";import"./index-CgM6Dbo0.js";import"./Button-DaRav7Eg.js";import"./utils-DsplgZ5_.js";import"./ButtonBase-B4OT_qP6.js";import"./Loader-BRFPJhgB.js";import"./Tooltip-Da-VtRb-.js";import"./index-BvypQtYJ.js";import"./Button-BySXh0l7.js";import"./FocusScope-C9_LKvrg.js";import"./Hidden-DnULKSXS.js";import"./usePress-C-JupEBC.js";import"./RSPContexts-DznLQtVB.js";import"./Separator-DrIqXTMA.js";import"./Text-DIiBg8cY.js";import"./VisuallyHidden-BO-OLnWP.js";import"./Checkbox-C1jwuNDt.js";import"./Check-6HfRFboM.js";import"./CheckIndeterminateSmall-CXKy7Zlx.js";import"./Form-CdbOYzTr.js";import"./useToggleState-thq2lL_j.js";import"./useFormReset-B8WiHVig.js";import"./ComboBox-Dh7W8tEI.js";import"./ListBox-B8ieJs6S.js";import"./ListBox-BxMngG_4.js";import"./DragAndDrop-Cf3fUj8C.js";import"./useLabel-oY3WoAVJ.js";import"./Pill-DcHgFBvL.js";import"./Input-Dt4RYi3I.js";import"./SelectBase-CLFRtdhz.js";import"./Label-jyyH59mV.js";import"./index-ByjHB0Qw.js";import"./variants-Cu34kl6A.js";import"./KeyboardArrowDown-DsZyhcs8.js";import"./DateTimePicker-CPz4H4qU.js";import"./IconButton-BirmpWIl.js";import"./ChevronBackward-wgiBML_9.js";import"./ChevronForward-BzH-cPjo.js";import"./Calendar-DyXrrcys.js";import"./Form-VkqJRkGT.js";import"./ErrorMessage-Pr79d6fa.js";import"./RadioGroup-zW2D8BhM.js";import"./FieldError-BcU-KW9_.js";import"./RichTextEditor-BGrVrJst.js";import"./Modal-C-E0_4Qy.js";import"./Select-D5dX_469.js";import"./TextField-DqrJh11T.js";import"./Group-CsamGP6W.js";import"./useTextField-cikSAP15.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
