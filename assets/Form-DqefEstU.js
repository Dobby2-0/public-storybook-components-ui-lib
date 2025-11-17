import{j as r}from"./iframe-VvmQDMUV.js";import{useMDXComponents as m}from"./index-D-lsK7qm.js";import{M as n,C as e}from"./blocks-BeFovot-.js";import{F as p,D as s}from"./Form.stories-Prt0cSYP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DRuU8XP6.js";import"./index-D62asJeA.js";import"./Button-0z0FQH9n.js";import"./utils-DkFD0z7s.js";import"./ButtonBase-C_mw4oeq.js";import"./Loader-B5ER55dg.js";import"./Tooltip-DBj5mVeg.js";import"./index-Bu8Yf5d1.js";import"./Button-HIMezUb0.js";import"./FocusScope-BOCe0r4G.js";import"./Hidden-D22h5HeX.js";import"./usePress-D04Njo7o.js";import"./RSPContexts-CZp4fpZn.js";import"./Separator-CDNXe9fK.js";import"./Text-Bmve_387.js";import"./VisuallyHidden-BerS9m0o.js";import"./Checkbox-B7IxmiU7.js";import"./Check-DfPCpNNs.js";import"./CheckIndeterminateSmall-BW918XiK.js";import"./Form-BJ2L-DG3.js";import"./useToggleState-CSF3by7S.js";import"./useFormReset-BnF48LGq.js";import"./ComboBox-BXyEu7du.js";import"./ListBox-DkOgAsbr.js";import"./ListBox-DG5tA9tV.js";import"./DragAndDrop-DIpoxwmp.js";import"./useLabel-mOv0FYO4.js";import"./Pill-BEvJfQe8.js";import"./Input-Cyya6AHz.js";import"./SelectBase-DuZJngbE.js";import"./Label-LgZfVoAp.js";import"./index-BAB0TDXu.js";import"./variants-B_52yQ26.js";import"./KeyboardArrowDown-gwyEh4Wq.js";import"./DateTimePicker-DffQFvy_.js";import"./IconButton-CH02gzLd.js";import"./ChevronBackward-CsMMem2U.js";import"./ChevronForward-DB7yKSBi.js";import"./Calendar-CNdUAyFn.js";import"./DetailPageHeader-8Kxlmrcz.js";import"./FileIcon-BkMb_zkh.js";import"./Description-gTA9ITS9.js";import"./Zip-nVUQIc0h.js";import"./BulkActions-BR6V89oA.js";import"./Select-CdZKh-tM.js";import"./Canvas-CXIGOO5j.js";import"./ErrorMessage-BMHnJsAx.js";import"./DeleteForever-C_2DNHyn.js";import"./DndList-Do47fXTQ.js";import"./sortable.esm-B7ZK_LXp.js";import"./DragIndicator-Bl1pUctn.js";import"./ErrorPage-BK-M8_hG.js";import"./FileButton-rVUlPyv2.js";import"./use-toast-1HNtQLbU.js";import"./FileList-C9s4NDps.js";import"./Download-DDuXWzBm.js";import"./Warning-6SmI6rOo.js";import"./ListFilters-CVNYeC_x.js";import"./Modal-DmZcgx8L.js";import"./use-is-mobile-24R23QZG.js";import"./FilterListOff-BFQY-y_r.js";import"./NumberField-BuDVdE42.js";import"./KeyboardArrowUp-Bso6APHM.js";import"./FieldError-DbY8IRqD.js";import"./Group-C2zZICyJ.js";import"./useTextField-Ba2dBEvo.js";import"./PDFViewer-BCbm6yS7.js";import"./Divider-LTXD_qHQ.js";import"./Remove-BMdZWSlH.js";import"./Menu-q-fnkDnf.js";import"./TableOutlined-Csghd7MI.js";import"./MoreHoriz-TQdpoSJo.js";import"./TableOptions-DsTXjz7P.js";import"./ViewColumn-B4tYAiVR.js";import"./TextField-_e_Uco0x.js";import"./Toolbar-DkXn9tWb.js";import"./Search-5pKoGkeM.js";import"./Underline-S6AGFt5X.js";import"./ArrowBack-BAoDFYt9.js";import"./RadioGroup-D4TBwzwK.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
`})})]})}function Br(t={}){const{wrapper:o}={...m(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(i,{...t})}):i(t)}export{Br as default};
