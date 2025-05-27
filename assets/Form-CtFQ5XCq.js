import{j as r}from"./jsx-runtime-F1iDwNaf.js";import{useMDXComponents as n}from"./index-uDG1oqxT.js";import{M as m,C as e}from"./index-BaneB5gD.js";import{F as p,D as s}from"./Form.stories-Bx0U_dgX.js";import"./index-YTOF1_EJ.js";import"./iframe-C870inq3.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-Bx-O4Apd.js";import"./index-D8pzxCuu.js";import"./index-D35RSF8M.js";import"./useFocusRing-oRcX7meB.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-ABhSE4pt.js";import"./Loader-Baa5_8E0.js";import"./Button-Cw0J1ZsA.js";import"./Hidden-D7ttFcTv.js";import"./usePress-DLzaRTNK.js";import"./openLink-DdIfhzZQ.js";import"./Checkbox-D9Ip80yL.js";import"./Check-d3BnqXpp.js";import"./RSPContexts-D68aBqj8.js";import"./Form-DjYpDC-9.js";import"./useToggleState-DzP_SoC1.js";import"./useFormReset-BguYVHRZ.js";import"./useControlledState-DSc3NtNd.js";import"./VisuallyHidden-CdGMfvlm.js";import"./ComboBox-B54yc1p4.js";import"./ListBox-Dy93ub_7.js";import"./ListBox-BzCEAXuf.js";import"./Header-Cv_Why1g.js";import"./useDescription-D9n-bgck.js";import"./FocusScope-Ckyja6SP.js";import"./context-C679USxU.js";import"./Separator-D4ZJ3bCE.js";import"./DragAndDrop-B_G89oNp.js";import"./Text-CcVvtRkI.js";import"./useLabel-CK2XJzd6.js";import"./useLabels-CMjnz4Yz.js";import"./useTranslation-Dw3DpAYw.js";import"./Pill-opC8IMCH.js";import"./Close-CqA61BEN.js";import"./Input-sfUNcBih.js";import"./index-Db92_y2_.js";import"./SelectBase-BOrmiyQ0.js";import"./Label-I-mfGoKZ.js";import"./index-DFyT2So3.js";import"./Popover-DgqiR6ST.js";import"./Dialog-BhOZYiej.js";import"./PressResponder-1Ab0Ccdw.js";import"./ariaHideOutside-B1lZiDRj.js";import"./PortalProvider-BV92Uc6C.js";import"./getScrollParent-7nX62dkR.js";import"./variants-CsVkyiyE.js";import"./Info-Cvx1OggM.js";import"./KeyboardArrowDown-C_KWurVb.js";import"./DateTimePicker-BtoRiweO.js";import"./IconButton-CK5aqmEO.js";import"./ChevronBackward-BCrEDMyZ.js";import"./ChevronForward-DTfmueCT.js";import"./Form-B0NqgOev.js";import"./TextField-DT0hwX6A.js";import"./FieldError-BtNkri8q.js";import"./RadioGroup-Bs1rYdU0.js";import"./RichTextEditor-C3bsVZY2.js";import"./Menu-h0akf0Qe.js";import"./Toolbar-BHnspeJm.js";import"./Select-DxnrbX9b.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:p}),`
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
