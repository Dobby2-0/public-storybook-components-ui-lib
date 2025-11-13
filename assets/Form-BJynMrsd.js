import{j as r}from"./iframe-DZmofgpO.js";import{useMDXComponents as m}from"./index-CLVrcthM.js";import{M as n,C as e}from"./blocks-C_adbGPQ.js";import{F as p,D as s}from"./Form.stories-Dhx6TeHH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B06jorIC.js";import"./index-GmCXe-Gw.js";import"./Button-BH1oba4T.js";import"./utils-DJdyUCYz.js";import"./ButtonBase-CRdCDE_B.js";import"./Loader-C9aM8Q-l.js";import"./Tooltip-BSXbDCyU.js";import"./index-D2AQP8f5.js";import"./Button-WsOGcMQH.js";import"./FocusScope-BBv4nHRy.js";import"./Hidden-CnyXxbgY.js";import"./usePress-Bgs7fEjB.js";import"./RSPContexts-AqUGoMDJ.js";import"./Separator-CK7gM0HH.js";import"./Text-BrFivvbc.js";import"./VisuallyHidden-y1mIW2ey.js";import"./Checkbox-5X32Iean.js";import"./Check-Bo3iyQ4r.js";import"./CheckIndeterminateSmall-DhRvDG1I.js";import"./Form-cIrwtDE6.js";import"./useToggleState-DrwfV5UC.js";import"./useFormReset-nY073m1h.js";import"./ComboBox-DO5474Sw.js";import"./ListBox-Dfw-z1AZ.js";import"./ListBox-B30LKwB5.js";import"./DragAndDrop-BEdryB3c.js";import"./useLabel-ndVDMSb_.js";import"./Pill-kX4wjIIc.js";import"./Input-DHNMVIBm.js";import"./SelectBase-BU5ya8Bm.js";import"./Label-B2St2kWk.js";import"./index-Dz7sG3uj.js";import"./variants-D0Ynqsg7.js";import"./KeyboardArrowDown-CuCLI7n8.js";import"./DateTimePicker-Cmsi8EMJ.js";import"./IconButton-b6nZUUDt.js";import"./ChevronBackward-BfhCSdhh.js";import"./ChevronForward-BJWsst89.js";import"./Calendar-DDBFTgEP.js";import"./DetailPageHeader-nPCWqVwC.js";import"./FileIcon-D7uxzw25.js";import"./Description-CDn3c89G.js";import"./Zip-CIARd1gK.js";import"./BulkActions-_QC02jDu.js";import"./Select-Gsx6R7Z7.js";import"./Canvas-CP2Yzu0B.js";import"./ErrorMessage-DY97lv_g.js";import"./DeleteForever-CW52nUz4.js";import"./DndList-DgSg69QO.js";import"./sortable.esm-qMvJ0d42.js";import"./DragIndicator-C2ZUwjJG.js";import"./ErrorPage-BMsxXoQh.js";import"./FileList-B2lR3NzU.js";import"./Download-vrdUzA7H.js";import"./Warning-BTNqX6fG.js";import"./ListFilters-D2fdxO4O.js";import"./Modal-BGzzZ2M7.js";import"./use-is-mobile-fNvHs_8e.js";import"./FilterListOff-DWjHGo3F.js";import"./NumberField-KlgXaSCJ.js";import"./KeyboardArrowUp-b5R54WcL.js";import"./FieldError-r2f7VF4x.js";import"./Group-CdDg1JHz.js";import"./useTextField-DgaEEr48.js";import"./PDFViewer-DoQJD-gA.js";import"./Divider-BqteTFqy.js";import"./Remove-BbtXQRrT.js";import"./RadioGroup-CIQkpnqA.js";import"./Menu-DDEGL0bp.js";import"./TableOutlined-PNATB8l7.js";import"./MoreHoriz-B6Lm4KI9.js";import"./TableOptions-Cyykjz1Y.js";import"./ViewColumn-EgjxPq99.js";import"./TextField-C43X8FnJ.js";import"./Toolbar-DpWwf2_e.js";import"./Search-MQ5P7Zj_.js";import"./Underline-COgQCLNy.js";import"./ArrowBack-BsIQHD4x.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
