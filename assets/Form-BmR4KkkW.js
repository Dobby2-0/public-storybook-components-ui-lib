import{j as r}from"./iframe-7Nw882py.js";import{useMDXComponents as m}from"./index-BmopZi7f.js";import{M as n,C as e}from"./blocks-C3Evgm6Z.js";import{F as p,D as s}from"./Form.stories-BoT9ynvr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D9KqQCNK.js";import"./index-B1fTOt-b.js";import"./Button-DAIPiDKF.js";import"./utils-9iagpOxg.js";import"./ButtonBase-B1gHSSi2.js";import"./Loader-Cgo6IMUC.js";import"./Tooltip-BiYD_zex.js";import"./index-clrZ1K3m.js";import"./Button-BkIRXc69.js";import"./FocusScope-BCwe-NO5.js";import"./Hidden-C2VD6tQv.js";import"./usePress-BLFxd6qu.js";import"./RSPContexts-DcEn7IJ0.js";import"./Separator-BQuQ-gGr.js";import"./Text-OKTTPcry.js";import"./VisuallyHidden-BTVJqNYp.js";import"./Checkbox-SJWtcyYl.js";import"./Check-C6PhEKVN.js";import"./CheckIndeterminateSmall-CvwuF2UN.js";import"./Form-CQO96iQp.js";import"./useToggleState-CD1JY0gB.js";import"./useFormReset-BcBe1mL-.js";import"./ComboBox-BSWGMVR8.js";import"./ListBox-CWwHBDnm.js";import"./ListBox-C4DPiIPV.js";import"./DragAndDrop-ClwN77iD.js";import"./useLabel-B1ewOS0U.js";import"./Pill-BWY8YX_7.js";import"./Input-CE1lOgdF.js";import"./SelectBase-B9h6UP-o.js";import"./Label-BeRP0jQD.js";import"./index-CdXzJg40.js";import"./variants-BmBct39u.js";import"./KeyboardArrowDown-903MccPh.js";import"./DateTimePicker-D__H0fOO.js";import"./IconButton-B24tITV1.js";import"./ChevronBackward-CtSeq79J.js";import"./ChevronForward-Cc1jZ9gi.js";import"./Calendar-DAqiWFgm.js";import"./DetailPageHeader-C6tZ9w7y.js";import"./FileIcon-DWp7dFP7.js";import"./Description-B1VR_QjW.js";import"./Zip-B8ji_F1i.js";import"./BulkActions-bUuFeGWJ.js";import"./Select-DkCUicCh.js";import"./Canvas-DkasQlpv.js";import"./ErrorMessage-BXdWl9-K.js";import"./DeleteForever-2UG8bRSM.js";import"./DndList-0dk8MdeT.js";import"./sortable.esm-D6IbgN8B.js";import"./DragIndicator-BMXRH4N_.js";import"./ErrorPage-0YFzzYKt.js";import"./FileButton-YSB3N-Fb.js";import"./use-toast-fbnSF_zt.js";import"./FileList-CHIYd2rS.js";import"./Download-Dtk4Ehsk.js";import"./Warning-DV__a1pk.js";import"./ListFilters-bxmabpkZ.js";import"./Modal-DqR5fZwa.js";import"./use-is-mobile-oWKDr4Vz.js";import"./FilterListOff-CEoMcWhT.js";import"./NumberField-CDclLUzK.js";import"./KeyboardArrowUp-BbgTndoY.js";import"./FieldError-DsrimtWL.js";import"./Group-B_Kpqd5L.js";import"./useTextField-RJITynIQ.js";import"./PDFViewer-Ch0edj3B.js";import"./Divider-BQqDjAP5.js";import"./Remove-CsOGa_W3.js";import"./RadioGroup-Bnsaitzb.js";import"./Menu-WDAYyWUW.js";import"./TableOutlined-xLAbkDYG.js";import"./MoreHoriz-D6WHhXSV.js";import"./TableOptions-DrvAxXUl.js";import"./ViewColumn-ymB4RlUM.js";import"./TextField-DZGho2LB.js";import"./Skeleton-CmQmWkTG.js";import"./Toolbar-QaFVR2z-.js";import"./Search-BXeHG2Z0.js";import"./Underline-DRfHBynx.js";import"./ArrowBack-Cw90MyjA.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
