import{j as r}from"./iframe-CuLNQ5qM.js";import{useMDXComponents as m}from"./index-DuP4AN3H.js";import{M as n,C as e}from"./blocks-BC7XshOD.js";import{F as p,D as s}from"./Form.stories-B-cSQ4x6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DXUTbohT.js";import"./index-CrBar2As.js";import"./Button-Bp7G-D43.js";import"./utils-wSy4n-XH.js";import"./ButtonBase-CsGptDal.js";import"./Loader-LmaJX3dD.js";import"./Tooltip-VHaYr6-V.js";import"./index-IwObjCqk.js";import"./Button-CvyKGAP8.js";import"./FocusScope-BIjy-W96.js";import"./Hidden-Di_AYg4b.js";import"./usePress-DMHr4mLT.js";import"./RSPContexts-BdvEGR9M.js";import"./Separator-14R0r7of.js";import"./Text-B_miRZie.js";import"./VisuallyHidden-CiNe9qaA.js";import"./Checkbox-Bmh4hRsm.js";import"./Check-iV-oDlQp.js";import"./CheckIndeterminateSmall-Cwl9pRQU.js";import"./Form-C1vrSYB1.js";import"./useToggleState-B4TQpw51.js";import"./useFormReset-CUZkaoY2.js";import"./ComboBox-BB3hucx-.js";import"./ListBox-D3nNT_JN.js";import"./ListBox-pXcoeCiW.js";import"./DragAndDrop-aF4IB1bh.js";import"./useLabel-B0jTk06P.js";import"./Pill-CLPpXBN2.js";import"./Input-CdGXcs2K.js";import"./SelectBase-Co99iJeO.js";import"./Label-Cu7qCeHX.js";import"./index-tk2EjdTx.js";import"./variants-Dii35SRl.js";import"./KeyboardArrowDown-DhDsgI_M.js";import"./DateTimePicker-BuNSrkVV.js";import"./IconButton-DmrEf_Kl.js";import"./ChevronBackward-D4-ZpKUb.js";import"./ChevronForward-lM4DB-Ms.js";import"./Calendar-Dzrsp4GW.js";import"./DetailPageHeader-BQi-jB3o.js";import"./FileIcon-DvYR_jk5.js";import"./Description-BzQgD02V.js";import"./Zip-DxmSwdo6.js";import"./BulkActions-ovzTNTN5.js";import"./Select-B-_kd03-.js";import"./Canvas-Di6As6K9.js";import"./ErrorMessage-DGCvGPMm.js";import"./DeleteForever-BIZgfZ4d.js";import"./DndList-DS-cbicM.js";import"./sortable.esm-BKHTbofa.js";import"./DragIndicator-ECaFDDlr.js";import"./ErrorPage-DgIXtc_N.js";import"./FileList-p9satWhs.js";import"./Download-DfS_thIL.js";import"./Warning-CDMUPF3V.js";import"./ListFilters-BhyYcBZ8.js";import"./Modal-BXk2JpAO.js";import"./use-is-mobile-Cq8H0Wj0.js";import"./FilterListOff-CqqdOcwM.js";import"./NumberField-Drxu8kyG.js";import"./KeyboardArrowUp-B3DWl_Cw.js";import"./FieldError-fz2jm99s.js";import"./Group-4WFWz4Ya.js";import"./useTextField-bqn8BSZS.js";import"./PDFViewer-BUn0PGiV.js";import"./Divider-CTv-ACaf.js";import"./Remove-CyrkY0Ll.js";import"./Menu-BIfK6ej7.js";import"./TableOutlined-CGLZ4LdG.js";import"./MoreHoriz-C1FQs29r.js";import"./TableOptions-DV-5GHMw.js";import"./ViewColumn-CYlqW5iD.js";import"./TextField-DCiYMfp5.js";import"./Toolbar-Dw5Cu-X9.js";import"./Search-K_X-FXbG.js";import"./Underline-DxFwvBFE.js";import"./ArrowBack-BArGEos5.js";import"./RadioGroup-5G2isH5a.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
