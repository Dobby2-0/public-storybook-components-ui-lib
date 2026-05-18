import{j as r}from"./iframe-B3WleBvn.js";import{useMDXComponents as i}from"./index-BODGuHnz.js";import{M as e,C as m}from"./blocks-DLwP1wWA.js";import{F as p,D as s}from"./Form.stories-BFh9iL8t.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BsuDJeu9.js";import"./index-C72FCE01.js";import"./index-BEdecYP6.js";import"./Button-Cducs9Gt.js";import"./useHover-9rdygDPi.js";import"./ButtonBase-CNE1x8X3.js";import"./Loader-Y6RaYNk1.js";import"./Tooltip-6Lh5zJlT.js";import"./index-1VjKsh7-.js";import"./Button-DpcLJ05n.js";import"./SelectionIndicator-dmGRJ_u3.js";import"./usePress-CN5B4D98.js";import"./Text-WbuJZRi-.js";import"./useCollection-DDPHmoIq.js";import"./VisuallyHidden-CV96hiTu.js";import"./Autocomplete-BmWpgatm.js";import"./Checkbox-vVxn5sVM.js";import"./Check-BUQ2toxi.js";import"./CheckIndeterminateSmall-wppKXwvx.js";import"./useFormValidation-C4cdew-v.js";import"./useToggleState-D0dwb6Vg.js";import"./useFormReset-CdO2iBhb.js";import"./ComboBox-BZX7hlgr.js";import"./ComboBoxListBox-IiuEPPeC.js";import"./ListBox-BLqYuVAI.js";import"./ListBox-BpkH_bJ_.js";import"./useLoadMoreSentinel-BU4DeyjU.js";import"./useLabel-DZYoA7kr.js";import"./Pill-CSI4z3xu.js";import"./Input-xLNo1aje.js";import"./SelectBase-Ahm1IR40.js";import"./Label-CdXMtSo3.js";import"./index-CSYHPqnc.js";import"./Label-5q_A0Sob.js";import"./variants-sYo_XFZ-.js";import"./KeyboardArrowDown-Dy8V8GGU.js";import"./filter-persistence-Bi7sX7bZ.js";import"./sha256-Hr4udksG.js";import"./DateTimePicker-Bp7oZqr4.js";import"./IconButton-DxuFyrBI.js";import"./ChevronBackward-Gk-Yp1fr.js";import"./ChevronForward-BKKlhuMN.js";import"./Calendar-C6WFDfhu.js";import"./Form-RHHMrhCW.js";import"./ErrorMessage-C7ZC4_Z-.js";import"./PhoneNumberField-BodSRjWa.js";import"./index-C7CL5OQ7.js";import"./TextField-Bj7CEQ1j.js";import"./Group-BNszYrWg.js";import"./useField-DQW0AXNt.js";import"./useTextField-DetZTYeO.js";import"./RadioGroup-CNnwUWek.js";import"./RichTextEditor-DFdGi2s3.js";import"./Modal-BKLgwIVo.js";import"./Select-BL5RU8ZX.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function fr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{fr as default};
