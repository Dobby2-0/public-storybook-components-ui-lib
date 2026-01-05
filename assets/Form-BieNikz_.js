import{j as r}from"./iframe-DE__fsll.js";import{useMDXComponents as i}from"./index-DMgS8p2K.js";import{M as e,C as m}from"./blocks-SVfbXn-4.js";import{F as p,D as s}from"./Form.stories-CGcElfS7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ck1VTmwL.js";import"./index-B1p23in3.js";import"./index-DFu8Eb9l.js";import"./Button-t22Ri4Sz.js";import"./utils-CJOnvcxP.js";import"./ButtonBase-CpMGeMwK.js";import"./Loader-Dgt1NCEf.js";import"./Tooltip-CG0qE1fu.js";import"./index-DCglHl2s.js";import"./Button-Cis6ftM6.js";import"./FocusScope-C-3mWcHq.js";import"./Text-BFA6QE2e.js";import"./usePress-CxAbq9k6.js";import"./RSPContexts-Bo0ROoLz.js";import"./Separator-CCL6C8Ru.js";import"./VisuallyHidden-Cr1pH87Y.js";import"./Checkbox-4ZMlTMb-.js";import"./Check-CWRKmbrU.js";import"./CheckIndeterminateSmall-D1A7JJ8v.js";import"./Form-UhUhkH5U.js";import"./useToggleState-BSksLaNR.js";import"./useFormReset-Bpciiqgr.js";import"./ComboBox-BIoJ6nxn.js";import"./SingleComboBox-D2oWAhtp.js";import"./ListBox-DTD1rxEo.js";import"./ListBox-BOQrLKVE.js";import"./DragAndDrop-ncihsILM.js";import"./useLabel-BpPHlk3a.js";import"./Pill-DJx_nP_n.js";import"./Input-C9UBon8y.js";import"./SelectBase-BhOytjIh.js";import"./Label-CjSyovPz.js";import"./index-Bf3SQzM7.js";import"./Label-t560HrcO.js";import"./variants-Dg7bcfzN.js";import"./KeyboardArrowDown-CIGxW-Zt.js";import"./DateTimePicker-Cyt1RwQ1.js";import"./IconButton-swzn-ArZ.js";import"./ChevronBackward-D64p-7-6.js";import"./ChevronForward-B507lNr8.js";import"./Calendar-B3NHFppk.js";import"./Form-CkS2cGId.js";import"./ErrorMessage-Cok-r2_j.js";import"./PhoneNumberField-WSbzwqQb.js";import"./index-C7CL5OQ7.js";import"./TextField-COzDZDQ8.js";import"./Group-BAnPj7Ly.js";import"./FieldError-BDgc5NlL.js";import"./useTextField-GmcVgQB9.js";import"./RadioGroup-BJ6bRg2b.js";import"./RichTextEditor-BOKPf7bG.js";import"./Modal-CdY-0WZU.js";import"./Select-CMrbvY8b.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function hr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{hr as default};
