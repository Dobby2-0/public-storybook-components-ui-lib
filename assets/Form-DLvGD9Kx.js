import{j as r}from"./iframe-DqPoarmI.js";import{useMDXComponents as m}from"./index-Ik4rmDYO.js";import{M as n,C as e}from"./blocks-B6wLEG_c.js";import{F as p,D as s}from"./Form.stories-dep0h6fu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYQZGd4f.js";import"./index-B7IbPqx7.js";import"./Button-22XK-pj8.js";import"./utils-DhrrRemw.js";import"./ButtonBase-BgxUPvbA.js";import"./Loader-BNpI1sTO.js";import"./Tooltip-DwUrrbV1.js";import"./index-Bf7Lu_8g.js";import"./Button-Cm2_iMFf.js";import"./FocusScope-DpjDel2o.js";import"./Hidden-D0b99FbT.js";import"./usePress-6Rd71Q99.js";import"./RSPContexts-D8Fm0ssB.js";import"./Separator-vACdU0XU.js";import"./Text-25-xGm_b.js";import"./VisuallyHidden-CsxY983Z.js";import"./Checkbox-8mygOt-R.js";import"./Check-D5rZOVsb.js";import"./CheckIndeterminateSmall-Cd-SV5e4.js";import"./Form-CVjWiZIk.js";import"./useToggleState-DgRI3rFF.js";import"./useFormReset-BSTYep8M.js";import"./ComboBox-Do5fb2b3.js";import"./ListBox-DUTPcIgW.js";import"./ListBox-CoIvpxI4.js";import"./DragAndDrop-DFwH3B7f.js";import"./useLabel-Cxt7HWZH.js";import"./Pill-4ZYKYFIq.js";import"./Input-Bvh6-KPS.js";import"./SelectBase-CQ5MM6K0.js";import"./Label-BxyBeU2R.js";import"./index-D-JzvDhh.js";import"./variants-BqybX_A8.js";import"./KeyboardArrowDown-YCSbb9N3.js";import"./DateTimePicker-DvCB9X_I.js";import"./IconButton-Bb8rl1kr.js";import"./ChevronBackward-XzNxR_aC.js";import"./ChevronForward-DT1QdD3c.js";import"./Calendar-CfX55UzT.js";import"./DetailPageHeader-Hipvh_Cy.js";import"./FileIcon-QZQpsxj8.js";import"./Description-AsqiIdp7.js";import"./Zip-B9UES7SN.js";import"./BulkActions-CTks_Ed8.js";import"./Select-D4DIvBlv.js";import"./Canvas-Qq1gwu1o.js";import"./ErrorMessage-CZzh9nsC.js";import"./DeleteForever-B8_8dbRw.js";import"./DndList-DLO_2JCN.js";import"./sortable.esm-DVZ9mhmn.js";import"./DragIndicator-qpsv-gTH.js";import"./ErrorPage-mPEElmdE.js";import"./FileList-BcbLQfVs.js";import"./Download-DnFz1kgz.js";import"./Warning-BLEC8Q1R.js";import"./ListFilters-jfEPdZIr.js";import"./Modal-d43S9O5w.js";import"./use-is-mobile-nNcKfSun.js";import"./FilterListOff-BjvOb9pj.js";import"./NumberField-D9JHHs5K.js";import"./KeyboardArrowUp-BP6zVADm.js";import"./FieldError-Bj-EdGUS.js";import"./Group-x2T9BI_o.js";import"./useTextField-qtkHt4Fo.js";import"./PDFViewer-mIU0TLwC.js";import"./Divider-CA59rH77.js";import"./Remove-B2zuCWX1.js";import"./RadioGroup-B2A3Z6sY.js";import"./Menu-BXvIstlE.js";import"./TableOutlined-DxWkb0u6.js";import"./MoreHoriz-CfuXvW5W.js";import"./TableOptions-DTkjTuEQ.js";import"./ViewColumn-CU8gpkz1.js";import"./TextField-DJGmVger.js";import"./Toolbar-0iRbNZTu.js";import"./Search-x9U6scPi.js";import"./Underline-ClK3ZWwl.js";import"./ArrowBack-BlDMBW_w.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
