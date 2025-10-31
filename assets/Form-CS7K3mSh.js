import{j as r}from"./iframe-cWmR0RA0.js";import{useMDXComponents as m}from"./index-BEfsfwQc.js";import{M as n,C as e}from"./blocks-Bmnuw511.js";import{F as p,D as s}from"./Form.stories-RPs14L5R.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BdmCJmHw.js";import"./index-CbVDRwwe.js";import"./Button-BmeSwfsK.js";import"./utils-DANM3Yhz.js";import"./ButtonBase-CNM21T1D.js";import"./Loader-fYHsT7Mc.js";import"./Tooltip-D_gyujFE.js";import"./index-DqP9FTCV.js";import"./Button-D33AB1AL.js";import"./FocusScope-D1FOTx7Z.js";import"./Hidden-C04a7Jfz.js";import"./usePress-B7f2xl3D.js";import"./RSPContexts-CZUNsAI9.js";import"./Separator-CwBMJrYt.js";import"./Text-B6m3pqfR.js";import"./VisuallyHidden-DmuXfuGd.js";import"./Checkbox-Ctam3EEq.js";import"./Check-DJfcJKLz.js";import"./CheckIndeterminateSmall-C_azNviH.js";import"./Form-DNMalyG1.js";import"./useToggleState-D788A18u.js";import"./useFormReset-BQulKOlJ.js";import"./ComboBox-JQk1A2_n.js";import"./ListBox-ZeEvjtok.js";import"./ListBox-C1CBplYT.js";import"./DragAndDrop-CZoR4VWh.js";import"./useLabel-opnwvkWr.js";import"./Pill-glUImDlb.js";import"./Input-D9_Roog8.js";import"./SelectBase-BvL6Jgin.js";import"./Label-DgdJfSeo.js";import"./index-DymFpdQR.js";import"./variants-Co94fyhb.js";import"./KeyboardArrowDown-Kd9x3ms5.js";import"./DateTimePicker-kEh1VUpj.js";import"./IconButton-BKj4AuYV.js";import"./ChevronBackward-BcSI34Qy.js";import"./ChevronForward-CN9et6mH.js";import"./Calendar-C09BV8Gy.js";import"./DetailPageHeader-BwyqoP7J.js";import"./FileIcon-DTBPKkd3.js";import"./Description-JoJ3LNHP.js";import"./Zip-wLmaHlS4.js";import"./BulkActions-CLYnUdUP.js";import"./Select-Dk_aorhe.js";import"./Canvas-Cxp7iWPO.js";import"./ErrorMessage-Y5G5dUni.js";import"./DeleteForever-ekwy72s2.js";import"./DndList-uDmjwQmV.js";import"./sortable.esm-BxwmsuAG.js";import"./DragIndicator-D4_pG1r4.js";import"./ErrorPage-BgWYkEO7.js";import"./FileList-DRN-vO8E.js";import"./Download-DgLmbIlZ.js";import"./Warning-Ba358OFB.js";import"./ListFilters-3_5u8-9y.js";import"./Modal-Da6noF8a.js";import"./use-is-mobile-F29SvEve.js";import"./FilterListOff-BYEoZxvd.js";import"./NumberField-CHWCrwiZ.js";import"./KeyboardArrowUp-DGg3xmTR.js";import"./FieldError-BgWjfQd-.js";import"./Group-04EosYzC.js";import"./useTextField-Cau5wiZH.js";import"./PDFViewer-un4LgbVk.js";import"./Divider-BqUgSGuY.js";import"./Remove-q6ZDcmkJ.js";import"./RadioGroup-or_yauFK.js";import"./Menu-JpsPvmWU.js";import"./TableOutlined-Dvb_bf7O.js";import"./MoreHoriz-D5OgLKwT.js";import"./TableOptions-CqfZIYRE.js";import"./ViewColumn-B-wHUTVl.js";import"./TextField-ahEB65hY.js";import"./Toolbar-BsEh5Az5.js";import"./Search-CZa2eq4B.js";import"./Underline-ClsCD1X-.js";import"./ArrowBack-BfHuYe8Y.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
