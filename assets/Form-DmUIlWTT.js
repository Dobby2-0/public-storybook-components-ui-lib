import{j as r}from"./iframe-Ff2s0Wa7.js";import{useMDXComponents as m}from"./index-BUKqIBOc.js";import{M as n,C as e}from"./blocks-BWykk6Mc.js";import{F as p,D as s}from"./Form.stories-DwZHSFvD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C1nCaLjx.js";import"./index-xi8jNSPF.js";import"./Button-B2nGv0Y0.js";import"./utils-DedG9-wU.js";import"./ButtonBase-C1BSoN7N.js";import"./Loader-CT8ByzBI.js";import"./Tooltip-DgWsh440.js";import"./index-LRkyAUEd.js";import"./Button-CQGhT4Ij.js";import"./FocusScope-DjT-hP5n.js";import"./Hidden-DeoHi4c3.js";import"./usePress-BYqqMwsO.js";import"./RSPContexts-j2BU7Axl.js";import"./Separator-DyvklDdo.js";import"./Text-Cg-gjy63.js";import"./VisuallyHidden-BtKN2TbE.js";import"./Checkbox-BlpeXcLe.js";import"./Check-DAAZZgS-.js";import"./CheckIndeterminateSmall-CU2i2Bza.js";import"./Form-jJBjopWq.js";import"./useToggleState-Z_ps1LuL.js";import"./useFormReset-dLaDw7ax.js";import"./ComboBox-BOH4DrkM.js";import"./ListBox-DxClmdKp.js";import"./ListBox-C0o7bD8l.js";import"./DragAndDrop-BrwPEaml.js";import"./useLabel-CF-xOa3P.js";import"./Pill-D_snA_wm.js";import"./Input-DSXWsPUE.js";import"./SelectBase-CqEPgxh4.js";import"./Label-CX6kCKkr.js";import"./index-DxjM8jOk.js";import"./variants-By0yCXqW.js";import"./KeyboardArrowDown-Dwp97ofS.js";import"./DateTimePicker-CXs03N8j.js";import"./IconButton-D_Bv-hF2.js";import"./ChevronBackward-Bv8VERD6.js";import"./ChevronForward-BG8bFhk2.js";import"./Calendar-CNXzjuZe.js";import"./DetailPageHeader-_N6aSScB.js";import"./FileIcon-Qig9J2su.js";import"./Description-C5Wabggh.js";import"./Zip-DUKhOLyR.js";import"./BulkActions-Jg29u0YC.js";import"./Select-69Q_9mSB.js";import"./Canvas-CuJFcSkA.js";import"./ErrorMessage-Ci6eNVnP.js";import"./DeleteForever-CdwKfMT0.js";import"./DndList-wBRcdm7m.js";import"./sortable.esm-PR-HnRQ3.js";import"./DragIndicator-BQK9cMlX.js";import"./ErrorPage-Dn8ONBzm.js";import"./FileList-BBDgWL3C.js";import"./Download-B06yWSef.js";import"./Warning-D7tyftVX.js";import"./ListFilters-CShppz-g.js";import"./Modal-DepAFN0q.js";import"./use-is-mobile-DtDI-eHc.js";import"./FilterListOff-DZuLfhrP.js";import"./NumberField-BqkmXi1A.js";import"./KeyboardArrowUp-DH7XOq6A.js";import"./FieldError-E01F8AMA.js";import"./Group-CxMk8V41.js";import"./useTextField-Cu4c8_PC.js";import"./PDFViewer-Bw_pYG-O.js";import"./Divider-DQkFv8yA.js";import"./Remove-CBALtlaw.js";import"./Menu-CfVDILg1.js";import"./TableOutlined-9KM0UD6Q.js";import"./MoreHoriz-BiCm5fHp.js";import"./TableOptions-BgKqdtxr.js";import"./ViewColumn-DpDNHLlw.js";import"./TextField-LirNgzw2.js";import"./Toolbar-BD8HUk5g.js";import"./Search-D007Iynt.js";import"./Underline-C77qBY9q.js";import"./ArrowBack-CaIGsGuE.js";import"./RadioGroup-DSrEN6IY.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
