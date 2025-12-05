import{j as r}from"./iframe-AuHChfR8.js";import{useMDXComponents as i}from"./index-DmAej4yN.js";import{M as e,C as m}from"./blocks-DaytiuoG.js";import{F as p,D as s}from"./Form.stories-MvIV6s_v.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CsgPiThP.js";import"./index-CCMtGYiC.js";import"./index-DjvNOQuR.js";import"./Button-DDZNJY-9.js";import"./utils-BabE-UFT.js";import"./ButtonBase-af4xbuQX.js";import"./Loader-AC6f68R3.js";import"./Tooltip-C7ILMvDf.js";import"./index-BzjgWfDE.js";import"./Button-B6MgONbo.js";import"./FocusScope-9az9tTJa.js";import"./Hidden-CLaRjale.js";import"./usePress-kTZ8LD1W.js";import"./RSPContexts-DdS4iVL4.js";import"./Separator-Dsp-CNcm.js";import"./Text-mSFoEL7R.js";import"./VisuallyHidden-DDCKDU00.js";import"./Checkbox-wDTv23S1.js";import"./Check-CAtPzBwY.js";import"./CheckIndeterminateSmall-CtS5Qc3K.js";import"./Form-Dp36w1d8.js";import"./useToggleState-CtKgZZdv.js";import"./useFormReset-YosUtBsy.js";import"./ComboBox-X2DERFyx.js";import"./ListBox-CcjibbUR.js";import"./ListBox-WrZOpUhW.js";import"./DragAndDrop-D2c1EfPm.js";import"./useLabel-DiW7coGv.js";import"./Pill-DvUUpkJh.js";import"./Input-aR4FQUuz.js";import"./SelectBase-CocifUuq.js";import"./Label-CHJze_Ty.js";import"./index-DFJopNyj.js";import"./variants-KP2RT6pP.js";import"./KeyboardArrowDown-D6iA8Zf5.js";import"./DateTimePicker-CqLToRit.js";import"./IconButton-DTqXDDVb.js";import"./ChevronBackward-B3lWWx_x.js";import"./ChevronForward-DLz9kcGZ.js";import"./Calendar-B4npkOSR.js";import"./Form-6lxDmRlZ.js";import"./ErrorMessage-BaW08f33.js";import"./RadioGroup-CZkaGgd2.js";import"./FieldError-Bpk62QQo.js";import"./RichTextEditor-Ly56ws1s.js";import"./Modal-CWRdL_i9.js";import"./Select-DtmF_50G.js";import"./TextField-QXu6iLae.js";import"./Group-CHX-g9al.js";import"./useTextField-BzFH_jw8.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
