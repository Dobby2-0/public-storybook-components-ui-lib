import{j as r}from"./iframe-BpyaIFoj.js";import{useMDXComponents as m}from"./index-DWgZo8JS.js";import{M as n,C as e}from"./blocks-B6SV1-S4.js";import{F as p,D as s}from"./Form.stories-Bp1NpKzc.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cme_4wJ_.js";import"./index-BmY4FwaI.js";import"./Button-Bfur9YTP.js";import"./utils-BS6Lqt09.js";import"./ButtonBase-BMDkGtEB.js";import"./Loader-CQM-0ZIS.js";import"./Tooltip-Df7cJMCV.js";import"./index-DM8cAZNR.js";import"./Button-COvRattK.js";import"./FocusScope-D68Gc64D.js";import"./Hidden-BDM9tC_5.js";import"./usePress-CMrGCYWh.js";import"./RSPContexts-Dgzttmai.js";import"./Separator-DNUy2L-9.js";import"./Text-C2WQadjm.js";import"./VisuallyHidden-_74GO_fh.js";import"./Checkbox-RL1NP5rV.js";import"./Check-Dcaj50Xp.js";import"./CheckIndeterminateSmall-BVVsf-7p.js";import"./Form-GBbxPust.js";import"./useToggleState-C2CzFGAT.js";import"./useFormReset-DEWrhs1_.js";import"./ComboBox-BDE95nRM.js";import"./ListBox-6JcBGEi1.js";import"./ListBox-Bv4k51BK.js";import"./DragAndDrop-A6siLR-4.js";import"./useLabel-DFclWn5m.js";import"./Pill-CsqFngId.js";import"./Input-BBje26OK.js";import"./SelectBase-NeCc7q-V.js";import"./Label-2lTG2-ph.js";import"./index-CeL-c1GY.js";import"./variants-0kjuNmtO.js";import"./KeyboardArrowDown-fA--4-mO.js";import"./DateTimePicker-3s80h-1L.js";import"./IconButton-Cirh4ma1.js";import"./ChevronBackward-BOilAdaC.js";import"./ChevronForward-DJ4tIKzH.js";import"./Calendar-cHXQMppp.js";import"./DetailPageHeader-C_Ngy20b.js";import"./FileIcon-Bd1hxKcQ.js";import"./Description-D9lKJP-B.js";import"./Zip-D22FHcqq.js";import"./BulkActions-DJ21L8Ft.js";import"./Select-DZDamuVh.js";import"./Canvas-CkcS982X.js";import"./ErrorMessage-jOWyNAOz.js";import"./DeleteForever-CRRuY8i1.js";import"./DndList-DPAd97lk.js";import"./sortable.esm-CnAzs2HV.js";import"./DragIndicator-ZF9gy3Pm.js";import"./ErrorPage-CieZKDle.js";import"./FileList-D7-ebE37.js";import"./Download-BspBNpT1.js";import"./Warning-tpkphP9S.js";import"./ListFilters-Bm73VLdv.js";import"./Modal-Cu3dX4ia.js";import"./use-is-mobile-jV6PKnYP.js";import"./FilterListOff-B6XOo2i3.js";import"./NumberField-B9HmUYcg.js";import"./KeyboardArrowUp-D1O9ITTN.js";import"./FieldError-CUDC30OP.js";import"./Group-CxSmDhcN.js";import"./useTextField-rW4a0u7y.js";import"./PDFViewer-Dk_FmMYi.js";import"./Divider-DL1TNP3I.js";import"./Remove-CXy8hfDN.js";import"./RadioGroup-DQdVR4hB.js";import"./Menu-Bl0ZaV8O.js";import"./TableOutlined-jLKYSkry.js";import"./MoreHoriz-C_gA3JU-.js";import"./TableOptions-CEmkJR-F.js";import"./ViewColumn-DWDUKyyb.js";import"./TextField-BRYml3T4.js";import"./Toolbar-BA6RhggX.js";import"./Search-BiRaFBP5.js";import"./Underline-Bb3f6Yto.js";import"./ArrowBack-B8hUqtq1.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
`})})]})}function Vr(t={}){const{wrapper:o}={...m(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(i,{...t})}):i(t)}export{Vr as default};
