import{j as r}from"./iframe-CqGwk_ti.js";import{useMDXComponents as m}from"./index-BPy8P5i9.js";import{M as n,C as e}from"./blocks-Dsy_nyvh.js";import{F as p,D as s}from"./Form.stories-CluQ1LFF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B1OMVKlf.js";import"./index-DoAUk5tk.js";import"./Button-X43wK8IW.js";import"./utils-D6j8o2cJ.js";import"./ButtonBase-DSBFczeu.js";import"./Loader-CmdWk6mi.js";import"./Tooltip-1ieUy6fn.js";import"./index-DxEvt5nF.js";import"./Button-Dwr1gNo8.js";import"./FocusScope-DCpKNz2v.js";import"./Hidden-Bqruwxpo.js";import"./usePress-hZBHe2Y1.js";import"./RSPContexts-CvFpMR5G.js";import"./Separator-lWngIFzm.js";import"./Text-DnMX30Ln.js";import"./VisuallyHidden-C_QBSwm5.js";import"./Checkbox-CrtA_MKi.js";import"./Check-BmyTufyi.js";import"./CheckIndeterminateSmall-X4jGPod0.js";import"./Form-BGN6R7pS.js";import"./useToggleState-C6fD46XA.js";import"./useFormReset-CQoWzV1t.js";import"./ComboBox-Cx9AYTFp.js";import"./ListBox-Brm8ZzWy.js";import"./ListBox-Bi3p1sHS.js";import"./DragAndDrop-BeZ36J-G.js";import"./useLabel-vhRW4LVQ.js";import"./Pill-DPnpsQeB.js";import"./Input-CrrOXk0k.js";import"./SelectBase-DZ8QmnDR.js";import"./Label-DUsBgjQR.js";import"./index-CyAxdgCh.js";import"./variants-MbpVDsiM.js";import"./KeyboardArrowDown-BUfU2db7.js";import"./DateTimePicker-DquUE10f.js";import"./IconButton-OUFpSXxE.js";import"./ChevronBackward-sVm7fgtU.js";import"./ChevronForward-DU4pZRQl.js";import"./Calendar-CpdNUKiQ.js";import"./DetailPageHeader-DtAk1rg_.js";import"./FileIcon-Cs2m2biM.js";import"./Description-fCHGY-uH.js";import"./Zip-C09uS0Ak.js";import"./BulkActions-D0PwTkjb.js";import"./Select-BpWLgDHg.js";import"./Canvas-uFEInJZv.js";import"./ErrorMessage-NlEYki0l.js";import"./DeleteForever-BDdSQMgD.js";import"./DndList-BN1f9GhY.js";import"./sortable.esm-BY8Bus3z.js";import"./DragIndicator-Bz5VbE8A.js";import"./ErrorPage-Bx4ZP_zl.js";import"./FileList-CO2dZB6D.js";import"./Download-OhTaNcqF.js";import"./Warning-Gs_m3AO5.js";import"./ListFilters-C6VhM9QU.js";import"./Modal-CJlaBXEg.js";import"./use-is-mobile-BDfsqbkd.js";import"./FilterListOff-cDwjQQMg.js";import"./NumberField-CwYmROl-.js";import"./KeyboardArrowUp-6SD28W8v.js";import"./FieldError-DIm74mOC.js";import"./Group-BSMo81aw.js";import"./useTextField-COa8zqnB.js";import"./PDFViewer-CxLZXJmK.js";import"./Divider-CDy3HzMw.js";import"./Remove-DKW2sa02.js";import"./RadioGroup-BuZcIwX_.js";import"./Menu-6zl7Uf7V.js";import"./TableOutlined-wqStU2rY.js";import"./MoreHoriz-DGL920HY.js";import"./TableOptions-CI7wMuyA.js";import"./ViewColumn-CI_-dkhl.js";import"./TextField-Dk6xHM_x.js";import"./Toolbar-DCJyQr_z.js";import"./Search-f82-8nIS.js";import"./Underline-BqLJRycb.js";import"./ArrowBack-CeMKtK7J.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
