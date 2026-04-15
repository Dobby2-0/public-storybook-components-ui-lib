import{j as r}from"./iframe-C1WlA_sY.js";import{useMDXComponents as i}from"./index-QLiWFzYi.js";import{M as e,C as m}from"./blocks-DxbVK3kE.js";import{F as p,D as s}from"./Form.stories-CnFSHTsW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BuXA5Et1.js";import"./index-DA45O8xF.js";import"./index-CGt66q3u.js";import"./Button-BYsnAU19.js";import"./utils-BOdOtusu.js";import"./ButtonBase-DIeRkI3C.js";import"./Loader-CKANN067.js";import"./Tooltip-CdjRkZRE.js";import"./index-DBm6DM46.js";import"./Button-C5TQC8Oa.js";import"./FocusScope-BYCV_QfQ.js";import"./Text-Dr8JR3Hw.js";import"./usePress-BzRlJuKw.js";import"./RSPContexts-CpK07g3-.js";import"./Separator-CT2jiVXP.js";import"./VisuallyHidden-CQg0wCvx.js";import"./Checkbox-BR2-5At7.js";import"./Check-CnS3B5P0.js";import"./CheckIndeterminateSmall-v2QS3R7s.js";import"./Form-uGs8sdRW.js";import"./useToggleState-Bh8oCb5g.js";import"./useFormReset-Dru9koG-.js";import"./ComboBox-Cg9CpA0_.js";import"./SingleComboBox-D4iUAf-l.js";import"./ListBox-CWSX9QwH.js";import"./ListBox-wjqhOybS.js";import"./DragAndDrop-DFfJixUn.js";import"./useLabel-BNugXr2z.js";import"./Pill-CDwSasNx.js";import"./Input-DonHzvoM.js";import"./SelectBase-D2rOiX7h.js";import"./sha256--kUdW-Qc.js";import"./Label-BSwcmczL.js";import"./index-Bwv-tviQ.js";import"./Label-BmTgxGGY.js";import"./variants-MEBY1FFp.js";import"./KeyboardArrowDown-BMnQhi0Q.js";import"./DateTimePicker-C_ioPQbc.js";import"./IconButton-Bifcy-fm.js";import"./ChevronBackward-sOWuBP4N.js";import"./ChevronForward-Dizgy0xy.js";import"./Calendar-CjEA50o_.js";import"./Form-BLOU5lTu.js";import"./ErrorMessage-CySwlmQA.js";import"./PhoneNumberField-kI3HSCfD.js";import"./index-C7CL5OQ7.js";import"./TextField-2MGaVYVI.js";import"./Group-DihpXM_7.js";import"./FieldError-OfPrGE2g.js";import"./useTextField-Crc9s_90.js";import"./RadioGroup-zCWfurmN.js";import"./RichTextEditor-BvqRPdxT.js";import"./Modal-Dj7IsLzl.js";import"./Select-DAPksUmX.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function ur(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{ur as default};
