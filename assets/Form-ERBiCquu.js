import{j as r}from"./iframe-IslvRBGb.js";import{useMDXComponents as m}from"./index-lQmNPfxI.js";import{M as n,C as e}from"./blocks-BmSfsDVf.js";import{F as p,D as s}from"./Form.stories-CguZD-n8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BZlxtoq5.js";import"./index-Cbch12-H.js";import"./Button-DUM8JOoW.js";import"./utils-C6B9t3O6.js";import"./ButtonBase-NXF1GXp-.js";import"./Loader-T_2b7wZZ.js";import"./Tooltip-CmeBJxU8.js";import"./index-BmNcZ1yu.js";import"./Button-DxbPdh9h.js";import"./FocusScope-BOgms3gn.js";import"./Hidden-CQqtKji2.js";import"./usePress-DKyAX6ma.js";import"./RSPContexts-CorAOwmw.js";import"./Separator-B-k0VL2o.js";import"./Text-CIP2X7Zh.js";import"./VisuallyHidden-CzmSA3aT.js";import"./Checkbox-DMOeoN39.js";import"./Check-CRnGPrEV.js";import"./CheckIndeterminateSmall-CVFe9V-4.js";import"./Form-uvWJDn03.js";import"./useToggleState-94MHg_mu.js";import"./useFormReset-CFmvlgfk.js";import"./ComboBox-Cl1NydDA.js";import"./ListBox-C5vITzVC.js";import"./ListBox-CVk1NyQo.js";import"./DragAndDrop-DTXvTrbF.js";import"./useLabel-En4Ke3ok.js";import"./Pill-BzzvPF_l.js";import"./Input-tLrbbo3D.js";import"./SelectBase-qL-kfULV.js";import"./Label-C4Yeaf_b.js";import"./index-FGSPdM27.js";import"./variants-CQoh3Gqd.js";import"./KeyboardArrowDown-DvA8zz9P.js";import"./DateTimePicker-ClXj6mB1.js";import"./IconButton-BkOLW7OI.js";import"./ChevronBackward-C2Gh1A_M.js";import"./ChevronForward-C8vU5PcO.js";import"./Calendar-CLGNwAIX.js";import"./DetailPageHeader-DBAysnzV.js";import"./FileIcon-B-rp2JIQ.js";import"./Description-Dy_B-SQZ.js";import"./Zip-DS8OxPJP.js";import"./BulkActions-10kuLdQr.js";import"./Select-BLSoCFgC.js";import"./Canvas-NF29wRmv.js";import"./ErrorMessage-ByfCbuwF.js";import"./DeleteForever-B9uAvWY_.js";import"./DndList-B7n-1MBT.js";import"./sortable.esm-8MpodkoM.js";import"./DragIndicator-J9qhemMK.js";import"./ErrorPage-B-vQQc60.js";import"./FileList-DQFeVDWo.js";import"./Download-R28JTzm0.js";import"./Warning-BK3cit4L.js";import"./ListFilters-BNB0GH-v.js";import"./Modal-g2iaw9OS.js";import"./use-is-mobile-BvVbOMkz.js";import"./FilterListOff-DSY5kNJx.js";import"./NumberField-Z6Aqm2D4.js";import"./KeyboardArrowUp-NmgQ62Qo.js";import"./FieldError-Tb9_3zwe.js";import"./Group-BU-S841r.js";import"./useTextField-9e3qz17E.js";import"./PDFViewer-efQSniHm.js";import"./Divider-B0EIKoTz.js";import"./Remove-CMwVpLlO.js";import"./RadioGroup-DwwCdZPP.js";import"./Menu-BFC-VBwx.js";import"./TableOutlined-BloX4F_g.js";import"./MoreHoriz-PpOgutHn.js";import"./TableOptions-zEAqbXCX.js";import"./ViewColumn-BXRaAHWW.js";import"./TextField-VF7XzTl0.js";import"./Toolbar-ETAuXLkp.js";import"./Search-DIQQOEBA.js";import"./Underline-CIvi_h_5.js";import"./ArrowBack-DPYiYVzw.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
