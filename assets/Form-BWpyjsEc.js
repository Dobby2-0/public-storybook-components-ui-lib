import{j as r}from"./iframe-Haw1DKUx.js";import{useMDXComponents as i}from"./index-DCx7rDmP.js";import{M as e,C as m}from"./blocks-eDTkWlaB.js";import{F as p,D as s}from"./Form.stories-Tl75tH5g.js";import"./preload-helper-Dp1pzeXC.js";import"./index-VDfa9Yd7.js";import"./index-_u_5_8Wm.js";import"./index-Cqz-IwDh.js";import"./Button-DaS0z1mH.js";import"./useHover-DIQUIVDf.js";import"./ButtonBase-CHyMSKuz.js";import"./Loader-D0e9TvUB.js";import"./Tooltip-fPaz-MUX.js";import"./index-BAJwUQ5N.js";import"./Button-CPvpyjbX.js";import"./SelectionIndicator-B7wHAUEF.js";import"./usePress-BNYHbE7L.js";import"./Text-CdO_0FZU.js";import"./useCollection-BvUTVi0Q.js";import"./VisuallyHidden-c6KQbon4.js";import"./Autocomplete-C-oUtxto.js";import"./Checkbox-e5s2xif-.js";import"./Check-CuV6tyPR.js";import"./CheckIndeterminateSmall-C2wxyDMm.js";import"./useFormValidation-DTTkiqbY.js";import"./useToggleState-ClxXHCgY.js";import"./useFormReset-BtWtdd4x.js";import"./ComboBox-D4o7e6hP.js";import"./ComboBoxListBox-Cy_RNGwe.js";import"./ListBox-ODSPyozM.js";import"./ListBox-DDa4asyx.js";import"./useLoadMoreSentinel-D7zhB2Dp.js";import"./useLabel-joTM3rHc.js";import"./Pill-B4yeB9BB.js";import"./Input-Cec0u_Wa.js";import"./SelectBase-BXI1ZtRy.js";import"./Label-BLPFtN-i.js";import"./index-ktF_j8pW.js";import"./Label-DGPd48RE.js";import"./variants-BzTFXJwJ.js";import"./KeyboardArrowDown-B2GsZAZp.js";import"./filter-persistence-OMSveu6C.js";import"./sha256-DKf_Qkf5.js";import"./DateTimePicker-BJZpwm5G.js";import"./IconButton-BXEMXCtx.js";import"./ChevronBackward-B7Pmn56a.js";import"./ChevronForward-DxrgIY-z.js";import"./Calendar-B6aZvLfc.js";import"./Form-AvoG_EVR.js";import"./ErrorMessage-D0E89wKe.js";import"./PhoneNumberField-BQUftfQV.js";import"./index-C7CL5OQ7.js";import"./TextField-CJZDso7S.js";import"./Group-jf1ySP4a.js";import"./useField-850B2brv.js";import"./useTextField-Dc1lo96t.js";import"./RadioGroup-B6Ogwhwg.js";import"./RichTextEditor-fnyhQv4Z.js";import"./Modal-DfvnNLnx.js";import"./Select-Bz7Dmxjp.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
