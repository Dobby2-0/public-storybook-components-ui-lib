import{j as r}from"./jsx-runtime-F1iDwNaf.js";import{useMDXComponents as n}from"./index-uDG1oqxT.js";import{M as m,C as e}from"./index-V62peYIG.js";import{F as p,D as s}from"./Form.stories-GIpOF6Sa.js";import"./index-YTOF1_EJ.js";import"./iframe-uLLrTKJO.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-QRhzstof.js";import"./index-DzfFlqCY.js";import"./index-UoR2Am_h.js";import"./useFocusRing-BCcVRV1W.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-D4JL9d3O.js";import"./Loader-xB9gCnz2.js";import"./Button-aud4VQvi.js";import"./Hidden-D3qdwGc7.js";import"./useFocusable-CYgatKa4.js";import"./usePress-Qy4Tuk_n.js";import"./openLink-8mltwmIb.js";import"./Checkbox-Blxk_fY8.js";import"./Check-d3BnqXpp.js";import"./RSPContexts-uj8S1pO4.js";import"./Form-DWavI4Po.js";import"./useToggleState-D9RmVy5Z.js";import"./useFormReset-BucWXd6A.js";import"./useControlledState-BLnGQsC8.js";import"./VisuallyHidden-i3w_VAQN.js";import"./ComboBox-vYEBtf1I.js";import"./ListBox-BGkUxD74.js";import"./ListBox-_ZFYxsVb.js";import"./Collection-D72pwjyt.js";import"./DragAndDrop-B_G89oNp.js";import"./Separator-Bia4ZK9j.js";import"./useDescription-CQdQCKlk.js";import"./FocusScope-Bq1MVHph.js";import"./context-B1-8vjow.js";import"./Text-CUzL_Ejp.js";import"./useLabel-DvD-zg7_.js";import"./useLabels-Dzu6Vces.js";import"./useTranslation-Dw3DpAYw.js";import"./Pill-CnNhOt2h.js";import"./Close-CqA61BEN.js";import"./Input-Dv7UtOS7.js";import"./index-u5j6GQhH.js";import"./SelectBase-Cq206Xwi.js";import"./Label-B2LZGk7B.js";import"./index-DFyT2So3.js";import"./Popover-BSEKxwzL.js";import"./Dialog-CG1btdUR.js";import"./PressResponder-BL3btCGW.js";import"./useLocalizedStringFormatter-BIwj9O_3.js";import"./PortalProvider-D04PMIEq.js";import"./ariaHideOutside-7Z-f0sYi.js";import"./getScrollParent-CYkSmvrp.js";import"./variants-DIvSP2G7.js";import"./Info-Cvx1OggM.js";import"./KeyboardArrowDown-C_KWurVb.js";import"./DateTimePicker-DIGci4XF.js";import"./IconButton-DQNj9wk_.js";import"./ChevronBackward-BCrEDMyZ.js";import"./ChevronForward-DTfmueCT.js";import"./Form-DkOetedI.js";import"./TextField-DRThxf94.js";import"./FieldError-B5iDqI5P.js";import"./RadioGroup-CJJFkGZ1.js";import"./Select-pdx3DGIi.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:p}),`
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
`})})]})}function Er(t={}){const{wrapper:o}={...n(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(i,{...t})}):i(t)}export{Er as default};
