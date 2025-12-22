import{j as r}from"./iframe-DxqB9boC.js";import{useMDXComponents as i}from"./index-D2vvQsCi.js";import{M as e,C as m}from"./blocks-BwU-A_FT.js";import{F as p,D as s}from"./Form.stories-DMGKP_yV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CK9kbaq8.js";import"./index-DxaqE9ox.js";import"./index-B9LOX3vE.js";import"./Button-o3sWl_8u.js";import"./utils-BZoaywRP.js";import"./ButtonBase-C25o3bVg.js";import"./Loader-BhEu2spN.js";import"./Tooltip-DzBZV5GE.js";import"./index-Di_7lRh5.js";import"./Button-BtF1-V-Y.js";import"./FocusScope-D7q5W6Y8.js";import"./Text-Ct9ZvIUR.js";import"./usePress-DnV8oE5s.js";import"./RSPContexts-CdKmEmBz.js";import"./Separator-FUyGumNk.js";import"./VisuallyHidden-DAEn6H89.js";import"./Checkbox-Bdax8M5c.js";import"./Check-pl2AuQkJ.js";import"./CheckIndeterminateSmall-ihGUtheH.js";import"./Form-C0Oc1coY.js";import"./useToggleState-DRyC_N8K.js";import"./useFormReset-TWeJgFen.js";import"./ComboBox-CoFh90Hq.js";import"./ListBox-CS_KHVbe.js";import"./ListBox-Dri4MaI7.js";import"./DragAndDrop-JFL9m-z7.js";import"./useLabel-BQM4SikJ.js";import"./Pill-aofiBUSp.js";import"./Input-SAGCCiTu.js";import"./SelectBase-e8haZN_B.js";import"./Label-437p-tUb.js";import"./index-BKqV3H35.js";import"./Label-DZUabfaG.js";import"./variants-DPxRw7vR.js";import"./KeyboardArrowDown-AvfzWT8M.js";import"./DateTimePicker-B-tbNxTW.js";import"./IconButton-BDhE7lLp.js";import"./ChevronBackward-DHU_Faid.js";import"./ChevronForward-jKDmmmPQ.js";import"./Calendar-Bz0Rc8cZ.js";import"./Form-BPv952fH.js";import"./ErrorMessage-7BPv6e7h.js";import"./RadioGroup-BNEywHDJ.js";import"./FieldError-B4A-GxZC.js";import"./RichTextEditor-CYzv6c2I.js";import"./Modal-mSz6SvSA.js";import"./Select-CjjI2z27.js";import"./TextField-CNXY365w.js";import"./Group-CXN2ynNl.js";import"./useTextField-BulLtujC.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
