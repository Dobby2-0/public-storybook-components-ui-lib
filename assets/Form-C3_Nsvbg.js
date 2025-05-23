import{j as r}from"./jsx-runtime-F1iDwNaf.js";import{useMDXComponents as n}from"./index-uDG1oqxT.js";import{M as m,C as e}from"./index-0BYnBvEq.js";import{F as p,D as s}from"./Form.stories-CqpVDhgX.js";import"./index-YTOF1_EJ.js";import"./iframe-CeLs6fAo.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-DaRLznJS.js";import"./index-DzfFlqCY.js";import"./index-UoR2Am_h.js";import"./useFocusRing-BhqMP7Wf.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-D7wFhVPI.js";import"./Loader-xB9gCnz2.js";import"./Button-BdmBsY1d.js";import"./Hidden-D7ttFcTv.js";import"./usePress-BUSFzwYD.js";import"./openLink-DdIfhzZQ.js";import"./Checkbox-BhHddGYK.js";import"./Check-d3BnqXpp.js";import"./RSPContexts-D68aBqj8.js";import"./Form-CGWYqixX.js";import"./useToggleState-BVIN833c.js";import"./useFormReset-DE659B4Z.js";import"./useControlledState-DSc3NtNd.js";import"./VisuallyHidden-dgF7iibt.js";import"./ComboBox-C32G1xl4.js";import"./ListBox-BvPJrXQZ.js";import"./ListBox-DgwY20GW.js";import"./Header-DYgvXHaf.js";import"./useDescription-DzZWTAGl.js";import"./FocusScope-BZe3pABC.js";import"./context-HK5jm6EM.js";import"./Separator-VQwpI8cE.js";import"./DragAndDrop-B_G89oNp.js";import"./Text-SKeF9n-L.js";import"./useLabel-D8vA6x2F.js";import"./useLabels-Cu4YAmyo.js";import"./useTranslation-Dw3DpAYw.js";import"./Pill-CnNhOt2h.js";import"./Close-CqA61BEN.js";import"./Input--1n2ZCo3.js";import"./index-Db92_y2_.js";import"./SelectBase-UoatXl6n.js";import"./Label-B2LZGk7B.js";import"./index-DFyT2So3.js";import"./Popover-OPBoO5qx.js";import"./Dialog-ok1EYznv.js";import"./PressResponder-DU6eNYGA.js";import"./ariaHideOutside-Dy5gdQvH.js";import"./PortalProvider-BV92Uc6C.js";import"./getScrollParent-C7zgn3BX.js";import"./variants-DIvSP2G7.js";import"./Info-Cvx1OggM.js";import"./KeyboardArrowDown-C_KWurVb.js";import"./DateTimePicker-L7pEEPj8.js";import"./IconButton-CDSJGyOm.js";import"./ChevronBackward-BCrEDMyZ.js";import"./ChevronForward-DTfmueCT.js";import"./Form-BT5MJfYl.js";import"./TextField-dRSS4a2-.js";import"./FieldError-BrTfLDfE.js";import"./RadioGroup-UZ75N1t3.js";import"./RichTextEditor-DcaU_1-o.js";import"./Menu-BTzehB-7.js";import"./Toolbar-DRPBS-KR.js";import"./Select-DnkWsalf.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:p}),`
`,r.jsx(o.h1,{id:"form",children:"Form"}),`
`,r.jsxs(o.p,{children:["The Form component provides a wrapper around ShadCN's ",r.jsx(o.code,{children:"react-hook-form"})," component."]}),`
`,r.jsx(e,{of:s}),`
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
`})})]})}function Cr(t={}){const{wrapper:o}={...n(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(i,{...t})}):i(t)}export{Cr as default};
