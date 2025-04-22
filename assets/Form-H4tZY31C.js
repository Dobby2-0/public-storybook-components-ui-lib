import{j as r}from"./jsx-runtime-F1iDwNaf.js";import{useMDXComponents as i}from"./index-uDG1oqxT.js";import{M as e,C as m}from"./index-hmUijz8-.js";import{F as p,D as s}from"./Form.stories-BBcT4Egr.js";import"./index-YTOF1_EJ.js";import"./iframe-D1lM6UDX.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-DvbuynIA.js";import"./index-D8pzxCuu.js";import"./index-D35RSF8M.js";import"./useFocusRing-D-wgUUcc.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-B-ii57d2.js";import"./Loader-Baa5_8E0.js";import"./Button-7f8y_zvV.js";import"./Hidden-M3sDKwVz.js";import"./useFocusable-vmrPwuET.js";import"./usePress-p5sBLxVT.js";import"./openLink-8mltwmIb.js";import"./Checkbox-DAZf3L4w.js";import"./Check-d3BnqXpp.js";import"./RSPContexts-uj8S1pO4.js";import"./Form-BLKTcZvd.js";import"./useToggleState-DfnBzNsv.js";import"./useFormReset--6kUkuP1.js";import"./useControlledState-BLnGQsC8.js";import"./VisuallyHidden-CDgroY5D.js";import"./ComboBox-JblCmThB.js";import"./ListBox-BBZAfUNV.js";import"./ListBox-CZjOv-TL.js";import"./Separator-C1X2q_dp.js";import"./useDescription-C95xtsuz.js";import"./context-C25lLDDD.js";import"./DragAndDrop-B_G89oNp.js";import"./Text-CQmUqx1y.js";import"./useLabel-CBu7iCIi.js";import"./useLabels-8AzKqWVl.js";import"./useTranslation-Dw3DpAYw.js";import"./Pill-nXyZZcJT.js";import"./Close-CqA61BEN.js";import"./Input-B0N-g_lA.js";import"./index-u5j6GQhH.js";import"./SelectBase-si6ecoRi.js";import"./Label-I-mfGoKZ.js";import"./index-DFyT2So3.js";import"./Popover-BbpNalHE.js";import"./Dialog-BefuiK4q.js";import"./PressResponder-D0p0uzSi.js";import"./ariaHideOutside-DhGW_aM0.js";import"./PortalProvider-D04PMIEq.js";import"./getScrollParent-hnAhvqFN.js";import"./variants-CsVkyiyE.js";import"./Info-Cvx1OggM.js";import"./KeyboardArrowDown-C_KWurVb.js";import"./DateTimePicker-9zVAcFEc.js";import"./IconButton-tTCTNwVC.js";import"./ChevronBackward-BCrEDMyZ.js";import"./ChevronForward-DTfmueCT.js";import"./Form-Z6RjQxfd.js";import"./TextField-Co1s2jza.js";import"./FieldError-Q-yUDIkC.js";import"./RadioGroup-aG7uf_PK.js";import"./Select-CDGD3rBx.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function Fr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{Fr as default};
