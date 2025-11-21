import{j as r}from"./iframe-BNnN4MmS.js";import{useMDXComponents as m}from"./index-DzokCO8p.js";import{M as n,C as e}from"./blocks-CA-emouC.js";import{F as p,D as s}from"./Form.stories-Cvs4AN1i.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DVk5Avbs.js";import"./index-pnAaiu9d.js";import"./Button-CJZUwJ_Z.js";import"./utils-cuul9-mM.js";import"./ButtonBase-DBk1Id1q.js";import"./Loader-C5JNIkHB.js";import"./Tooltip-DpswSR1y.js";import"./index-Ct0qmGSf.js";import"./Button-DHVIX8xh.js";import"./FocusScope-BdluV1yS.js";import"./Hidden-C9-RUt87.js";import"./usePress-CpSiXQTN.js";import"./RSPContexts-CcQhJdYD.js";import"./Separator-A4hyt2l7.js";import"./Text-CmVhqKLU.js";import"./VisuallyHidden-zKfq8fxw.js";import"./Checkbox-DVNkPSSD.js";import"./Check-D0EhUYqc.js";import"./CheckIndeterminateSmall-SJWldmAf.js";import"./Form-BTXG6m2w.js";import"./useToggleState-B88Cn5l8.js";import"./useFormReset-B4fozcLM.js";import"./ComboBox-DNM57PWm.js";import"./ListBox-BuNMU1H0.js";import"./ListBox-s1D17cQx.js";import"./DragAndDrop-B0Vvj8gH.js";import"./useLabel-BKK0Q91T.js";import"./Pill-5jjB8f2B.js";import"./Input-DSguzKrS.js";import"./SelectBase-D-otatPg.js";import"./Label-DP_i8hYI.js";import"./index-CiBnTYQo.js";import"./variants-Dd5aisLQ.js";import"./KeyboardArrowDown-h4hbwNoC.js";import"./DateTimePicker-D-mxA75_.js";import"./IconButton-D5C6V7U6.js";import"./ChevronBackward-07dS8Ecs.js";import"./ChevronForward-CK06Vq3o.js";import"./Calendar-Cspsycmk.js";import"./DetailPageHeader-DIYyzI6q.js";import"./FileIcon-Du9kC95A.js";import"./Description-kcxEFu-p.js";import"./Zip-BnKF5biS.js";import"./BulkActions-Dnz6QMSl.js";import"./Select-EB9wlXNH.js";import"./Canvas-D3FS8-tV.js";import"./ErrorMessage-DElq4S3R.js";import"./DeleteForever-CzzpxLoX.js";import"./DndList-DN8F3XBE.js";import"./sortable.esm-CSGAS-xo.js";import"./DragIndicator-DosuMmBj.js";import"./ErrorPage-hiI5_-yH.js";import"./FileButton-D0G3yeIh.js";import"./use-toast-9nsvNDB7.js";import"./FileList-CFlzhkjk.js";import"./Download-C3_OvyuM.js";import"./Warning-xKvdHz1W.js";import"./ListFilters-Dr_P7E13.js";import"./Modal-BBBbMGex.js";import"./use-is-mobile-DkeE2EUn.js";import"./FilterListOff-DkkVCJ6t.js";import"./NumberField-9HkdxCvf.js";import"./KeyboardArrowUp-C1dkkAfp.js";import"./FieldError-BZKyQ0DM.js";import"./Group-CrBNg-XP.js";import"./useTextField-Bq5lJmCf.js";import"./PDFViewer-A1Iol9un.js";import"./Divider-CXvK9cST.js";import"./Remove-B7mkNyNX.js";import"./RadioGroup-ClUBXjSl.js";import"./Menu-8Dpuc8vm.js";import"./TableOutlined-4tOb6AAu.js";import"./MoreHoriz-Dzx4w868.js";import"./TableOptions-te9ZMq6V.js";import"./ViewColumn-DMBqApWQ.js";import"./TextField-ket3pYNR.js";import"./Skeleton-CDhxHpLH.js";import"./Toolbar-CQOch82Z.js";import"./Search-BeveVgzB.js";import"./Underline-DIV6AWjM.js";import"./ArrowBack-DVEnvyCb.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
