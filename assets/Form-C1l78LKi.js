import{j as r}from"./iframe-BNuhL9ER.js";import{useMDXComponents as m}from"./index-BfXpdwA1.js";import{M as n,C as e}from"./blocks-CADQpB83.js";import{F as p,D as s}from"./Form.stories-DIIDvCFj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Z9VK59Hf.js";import"./index-D8Zfcao_.js";import"./Button-RQtk8xWr.js";import"./utils-B6Vk5jXb.js";import"./ButtonBase-KQ8qlArb.js";import"./Loader-CbSR5Yl8.js";import"./Tooltip-B1KEof99.js";import"./index-wzoeaovd.js";import"./Button-B55BZ164.js";import"./FocusScope-BlIzbMWY.js";import"./Hidden-DO6oUOFb.js";import"./usePress-Dw6g1kp5.js";import"./RSPContexts-C9F26hFH.js";import"./Separator-CYNq1l07.js";import"./Text-DQ8xdPMM.js";import"./VisuallyHidden-EQRdyfzi.js";import"./Checkbox-CnTjL6HQ.js";import"./Check-CT0MFWhc.js";import"./CheckIndeterminateSmall-DKYKvVYf.js";import"./Form-J36-FgLE.js";import"./useToggleState-CnAgyEwY.js";import"./useFormReset-DobuYGFE.js";import"./ComboBox-MAECfuuI.js";import"./ListBox-FnRLs4W9.js";import"./ListBox-BYvLc884.js";import"./DragAndDrop-CdhDJrrJ.js";import"./useLabel-C5dGn1QH.js";import"./Pill-BzcrVBLa.js";import"./Input-CFmzbMI1.js";import"./SelectBase-DwzsoOT_.js";import"./Label-DeEc3xzD.js";import"./index-DOmeZP0c.js";import"./variants-BqY8yu-9.js";import"./KeyboardArrowDown-BN1vY0G-.js";import"./DateTimePicker-CjV5E1Vp.js";import"./IconButton-MsXj_TGY.js";import"./ChevronBackward-D6peKxfd.js";import"./ChevronForward-wMR7qsbX.js";import"./Calendar-C5TO4a7R.js";import"./DetailPageHeader-DcyTyv4n.js";import"./FileIcon-Dk51RXWR.js";import"./Description-BqkO7mz-.js";import"./Zip-Cq5YG7_F.js";import"./BulkActions-DzZzDxX-.js";import"./Select-DrStvkhQ.js";import"./Canvas-u2NPQgXL.js";import"./ErrorMessage-DEJgWhDM.js";import"./DeleteForever-AK5xwg5l.js";import"./DndList-DcSH8Izo.js";import"./sortable.esm-BZubOudE.js";import"./DragIndicator-C5Zp79dx.js";import"./ErrorPage-DlPgD31i.js";import"./FileList-CdE0Qlzn.js";import"./Download-CPdAhGMt.js";import"./Warning-B3q5YFRk.js";import"./ListFilters-D-lTpXY5.js";import"./Modal-J9TEoKDS.js";import"./use-is-mobile-KbYhFQJ3.js";import"./FilterListOff-CDTzYK37.js";import"./NumberField-Q2byEWj7.js";import"./KeyboardArrowUp-Cmp7E1L1.js";import"./FieldError-CNUwJBYi.js";import"./Group-DHG_Feuc.js";import"./useTextField-DvHxTAQn.js";import"./PDFViewer-BfYGdnoN.js";import"./Divider-qr8-HvYp.js";import"./Remove-Dbd8v5w6.js";import"./RadioGroup-CIayB7KU.js";import"./Menu-CnsCWsaZ.js";import"./TableOutlined-B1kI8a_x.js";import"./MoreHoriz-Ls4oj2eW.js";import"./TableOptions-CPXkJj2h.js";import"./ViewColumn-FxS2XRgU.js";import"./TextField-lPPuSPKz.js";import"./Toolbar-nXOItH1t.js";import"./Search-D8_1KbTU.js";import"./Underline-BE2DZrUR.js";import"./ArrowBack-Ban3ss7X.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
