import{j as r}from"./iframe-DItMUyuz.js";import{useMDXComponents as m}from"./index-C3aoiwhE.js";import{M as n,C as e}from"./blocks-CuUcGkXx.js";import{F as p,D as s}from"./Form.stories-CqK95-_f.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BlLvOc04.js";import"./index-Dn1WJ78Z.js";import"./Button-rP0BkDER.js";import"./utils-CDDBdGNq.js";import"./ButtonBase-Drw62Jq4.js";import"./Loader-DgPBNaV0.js";import"./Tooltip-VB1clTAK.js";import"./index-Bt_ueGGx.js";import"./Button-BiogDSkd.js";import"./FocusScope-CrkxwzSs.js";import"./Hidden-D0piI1_g.js";import"./usePress-DWDUijNk.js";import"./RSPContexts-COEWHn-7.js";import"./Separator-B-5V_2jI.js";import"./Text-CY-IC1ub.js";import"./VisuallyHidden-DlVhb33B.js";import"./Checkbox-BKelNTks.js";import"./Check-CT5nZNzc.js";import"./CheckIndeterminateSmall-BC7PMfxz.js";import"./Form-drt9ybVI.js";import"./useToggleState-DcG8rK_q.js";import"./useFormReset-Bd4qPnEd.js";import"./ComboBox-CRvesMgx.js";import"./ListBox-D7kMRR75.js";import"./ListBox-D_AYYiEK.js";import"./DragAndDrop-BY8TromW.js";import"./useLabel-DSUBmT6N.js";import"./Pill-B-diY4iP.js";import"./Input-qlXenizh.js";import"./SelectBase-Cy382Nfi.js";import"./Label-BfAYtU37.js";import"./index-TwhDy-SB.js";import"./variants-DrdoAPpS.js";import"./KeyboardArrowDown-15NzAQ-R.js";import"./DateTimePicker-qV-H3OTu.js";import"./IconButton-CSID9wDK.js";import"./ChevronBackward-_aSE3GEI.js";import"./ChevronForward-Ee2ifpTt.js";import"./Calendar-R-6aMxm8.js";import"./DetailPageHeader-DlFm4tvX.js";import"./FileIcon-B5nlbr-j.js";import"./Description-BKWO1D4d.js";import"./Zip-DeFT_GpR.js";import"./BulkActions-CNfprAFG.js";import"./Select-SKudxPit.js";import"./Canvas-LCIbQloT.js";import"./ErrorMessage-CAhsrsWj.js";import"./DeleteForever-GwI6JRYq.js";import"./DndList-B-lKX-w-.js";import"./sortable.esm-CYMplRLs.js";import"./DragIndicator-9yZ6yug0.js";import"./ErrorPage-BLioVxpa.js";import"./FileButton-ahEHw-UF.js";import"./use-toast-DqRJb430.js";import"./FileList-uwhq1Pvh.js";import"./Download-C4nV4zEH.js";import"./Warning-B3oqnZb_.js";import"./ListFilters-CAu3LQ8a.js";import"./Modal-Bpg04ITr.js";import"./use-is-mobile-Cgwllksd.js";import"./FilterListOff-CgZxGmJb.js";import"./NumberField-BSywKJzF.js";import"./KeyboardArrowUp-CBQ0F1k1.js";import"./FieldError-DVTnM1V8.js";import"./Group-DnBzkSMd.js";import"./useTextField-BAFVVoJ_.js";import"./PDFViewer-B1EnyDGO.js";import"./Divider-B9O0c6R9.js";import"./Remove-Cx1dtN7n.js";import"./Menu-J2s0XuBg.js";import"./TableOutlined-CtkqhySt.js";import"./MoreHoriz-D1rgDZVm.js";import"./TableOptions-Riq28o9V.js";import"./ViewColumn-kPq6PcV5.js";import"./TextField-CvPMyCEE.js";import"./Skeleton-DEppEyZO.js";import"./Toolbar-BY0GkaaN.js";import"./Search-oZrnAhvW.js";import"./Underline-BPLkBgRT.js";import"./ArrowBack-CYceF0oO.js";import"./RadioGroup-BOvlw6iP.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
`})})]})}function Gr(t={}){const{wrapper:o}={...m(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(i,{...t})}):i(t)}export{Gr as default};
