import{j as r}from"./iframe-JlWdiiHl.js";import{useMDXComponents as m}from"./index-BhVWiD1y.js";import{M as n,C as e}from"./blocks-PDwtMCX8.js";import{F as p,D as s}from"./Form.stories-Bq8bTr1W.js";import"./preload-helper-Dp1pzeXC.js";import"./index-w7GDP4sO.js";import"./index-DrDOyqoK.js";import"./Button-B0c4j5xB.js";import"./utils-B9FUAslD.js";import"./ButtonBase-ClZRLPcQ.js";import"./Loader-yx3fH-TK.js";import"./Tooltip-Cmi8As55.js";import"./index-ZEaINpS0.js";import"./Button-BK1PxoQt.js";import"./FocusScope-CP5yk3g1.js";import"./Hidden-CPBmKffQ.js";import"./usePress-CLQ8F3f5.js";import"./RSPContexts-BwV0qXfK.js";import"./Separator-CXMyKefx.js";import"./Text-DHtVhlPo.js";import"./VisuallyHidden-BHkR_MPK.js";import"./Checkbox-6CtY_9kf.js";import"./Check-Cb5d6i5Y.js";import"./CheckIndeterminateSmall-CIpvBwYI.js";import"./Form-vyoKoPzQ.js";import"./useToggleState-CioIQ3we.js";import"./useFormReset-EWgFTMOs.js";import"./ComboBox-31WOtWNo.js";import"./ListBox-DxlabwBd.js";import"./ListBox-B5O-leqc.js";import"./DragAndDrop-f39aXZ9P.js";import"./useLabel-Ck6TnA8s.js";import"./Pill-BpVr6TYj.js";import"./Input-Dz_NBn-4.js";import"./SelectBase-Bbck38Gg.js";import"./Label-Cozg5pd1.js";import"./index-hIpYKxdI.js";import"./variants-4kH4djqJ.js";import"./KeyboardArrowDown-Dkg1zN07.js";import"./DateTimePicker-DPowqRCh.js";import"./IconButton-BwOYIfxd.js";import"./ChevronBackward-BbK5jXni.js";import"./ChevronForward-CH0PbmrI.js";import"./Calendar-rvsLX6j7.js";import"./DetailPageHeader-BIkzNsJa.js";import"./FileIcon-D13FkPfo.js";import"./Description-DBxom4ao.js";import"./Zip-Bso_cuHN.js";import"./BulkActions-DiUiCme4.js";import"./Select-CIT7ufcF.js";import"./Canvas-Z_NSxsGA.js";import"./ErrorMessage-Ci8zoWda.js";import"./DeleteForever-BgK5_fnr.js";import"./DndList-B1x6f4rP.js";import"./sortable.esm-Cymz0TwX.js";import"./DragIndicator-CtzZX2s8.js";import"./ErrorPage-DsE4l2cC.js";import"./FileList-B8IwUKHC.js";import"./Download-C4Wvd07n.js";import"./Warning-DZ2APxsx.js";import"./ListFilters-prcieoAk.js";import"./Modal-B3BPmvJz.js";import"./use-is-mobile-01tpQQEt.js";import"./FilterListOff-B1XX2r4e.js";import"./NumberField-h3Q6eXyu.js";import"./KeyboardArrowUp-LPLqwFub.js";import"./FieldError-kogSkTAT.js";import"./Group-cK0uO5xB.js";import"./useTextField-DIidJVY1.js";import"./PDFViewer-ifQrzzdp.js";import"./Divider-DXeBYE44.js";import"./Remove-BiV5UJhb.js";import"./RadioGroup-B3in0CDn.js";import"./Menu-BOclpMxU.js";import"./TableOutlined-BstZpy1U.js";import"./MoreHoriz-DJiaH7_M.js";import"./TableOptions--hN_02iu.js";import"./ViewColumn-CUBFEZp4.js";import"./TextField-eACxTnCE.js";import"./Toolbar-BsEq2wSA.js";import"./Search-Dr0nUu7n.js";import"./Underline-R9cZCt3j.js";import"./ArrowBack-q3xWKirs.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
