import{j as r}from"./iframe-xNs60RAO.js";import{useMDXComponents as m}from"./index-DQYnEGKH.js";import{M as n,C as e}from"./blocks-BjrLpSYG.js";import{F as p,D as s}from"./Form.stories-C4aALlC7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DvkX0WGL.js";import"./index-BQkmhLdL.js";import"./Button-IIy-mMAx.js";import"./utils-kOvM0wlX.js";import"./ButtonBase-Cah5No2e.js";import"./Loader-DySeLuqF.js";import"./Tooltip-BS0-9Uhb.js";import"./index-B1xDLFoh.js";import"./Button-CbNA8j_n.js";import"./FocusScope-HfU7U7z4.js";import"./Hidden-Bke7puBK.js";import"./usePress-CfBsgoI1.js";import"./RSPContexts-CrkHLIAp.js";import"./Separator-H0GBRA_c.js";import"./Text-CfxXgIOk.js";import"./VisuallyHidden-DIGO1UZx.js";import"./Checkbox-b3n_LU8t.js";import"./Check-C8Iu3Mbw.js";import"./CheckIndeterminateSmall-CsEFJ_2Q.js";import"./Form-Cw_5LOoP.js";import"./useToggleState-DE6yqDin.js";import"./useFormReset-nyQVGvPQ.js";import"./ComboBox-CZ5ic9AG.js";import"./ListBox-1cdKDqGE.js";import"./ListBox-1D_bqHJP.js";import"./DragAndDrop-Dso0fY5z.js";import"./useLabel-BI0WJR49.js";import"./Pill-C8--2Nmm.js";import"./Input-yonS2zAm.js";import"./SelectBase-GF1Xp6mk.js";import"./Label-Ks4tByTG.js";import"./index-Btwbjr86.js";import"./variants-vcJcKm5D.js";import"./KeyboardArrowDown-B8dnAo4J.js";import"./DateTimePicker-qzBNUtc_.js";import"./IconButton-jFffP_Py.js";import"./ChevronBackward-BEroGQqa.js";import"./ChevronForward-hzS67vqC.js";import"./Calendar-DffA-ikb.js";import"./DetailPageHeader-BIt2uhq0.js";import"./FileIcon-C6NoiC4l.js";import"./Description-WQD9lXa_.js";import"./Zip-BITNhwID.js";import"./BulkActions-DF_6gCDH.js";import"./Select-CvbBmRQz.js";import"./Canvas-CCMEEQK3.js";import"./ErrorMessage-BT8hC85X.js";import"./DeleteForever-BLih57vf.js";import"./DndList-CSbtXM1-.js";import"./sortable.esm-B7Wgc5mc.js";import"./DragIndicator-D-_O5Sle.js";import"./ErrorPage-BO22cgHS.js";import"./FileList-Cgn00a_d.js";import"./Download-COC6_-L8.js";import"./Warning-0Ops-ied.js";import"./ListFilters-CuI-rZ2g.js";import"./Modal-Di0_ZRhX.js";import"./use-is-mobile-BI2iwzPX.js";import"./FilterListOff-DsrKvZbX.js";import"./NumberField-DbYq5_mo.js";import"./KeyboardArrowUp-BUZo6yhK.js";import"./FieldError-CF-Dhi17.js";import"./Group-DsedTlFL.js";import"./useTextField-C8Gz5ko0.js";import"./PDFViewer-Dk1_ufYY.js";import"./Divider-DQa1TRah.js";import"./Remove-CCyPEQ8h.js";import"./RadioGroup-8tX8vRbw.js";import"./Menu-C1jTPzZp.js";import"./TableOutlined-BPZFaREI.js";import"./MoreHoriz-BzTy4lO0.js";import"./TableOptions-6fvDdU8m.js";import"./ViewColumn-Cm1VG2kX.js";import"./TextField-IH2g3SaF.js";import"./Toolbar-VcJ_8R5U.js";import"./Search-BE44x017.js";import"./Underline-Oq_9T-6R.js";import"./ArrowBack-546ZuiNm.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
