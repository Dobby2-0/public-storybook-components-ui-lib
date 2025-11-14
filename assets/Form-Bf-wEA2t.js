import{j as r}from"./iframe-DgaJYh6P.js";import{useMDXComponents as m}from"./index-CelVyZOW.js";import{M as n,C as e}from"./blocks-OQXiZsTZ.js";import{F as p,D as s}from"./Form.stories-BV8RcSMN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BZBJBxMA.js";import"./index-CiTFHc9n.js";import"./Button-BdCjDUEF.js";import"./utils-zFreqGng.js";import"./ButtonBase-Bk2l1QtS.js";import"./Loader-CJN6q-l3.js";import"./Tooltip-B8M6KfTR.js";import"./index-IkpQ4eUl.js";import"./Button-D0GcZ5bi.js";import"./FocusScope-7mG_kVK-.js";import"./Hidden-Dy2nacwr.js";import"./usePress-DdZdM5TM.js";import"./RSPContexts-D0tqF-rp.js";import"./Separator-DsVPw386.js";import"./Text-gXLstkbP.js";import"./VisuallyHidden-D1bzEdbC.js";import"./Checkbox-CjOkL2-F.js";import"./Check-HdJbGISQ.js";import"./CheckIndeterminateSmall-BbZOkWSi.js";import"./Form-KQBNbKV7.js";import"./useToggleState-BHhUnQ2K.js";import"./useFormReset-olEtwpNT.js";import"./ComboBox-CUtcQin-.js";import"./ListBox-DPtY0Gvp.js";import"./ListBox-cDXTUcI_.js";import"./DragAndDrop-CVNm0mex.js";import"./useLabel-CzfMFNF9.js";import"./Pill-FruOqT-Z.js";import"./Input-TlsHfPwX.js";import"./SelectBase-BvwcziuG.js";import"./Label-CTEhDgI1.js";import"./index-CgzT9SyE.js";import"./variants-Da0BcmjJ.js";import"./KeyboardArrowDown-DNV-BVk4.js";import"./DateTimePicker-DY19mrac.js";import"./IconButton-TDc_s2fV.js";import"./ChevronBackward-FbXvCnmW.js";import"./ChevronForward-BwO0XRBI.js";import"./Calendar-CnZAxiCG.js";import"./DetailPageHeader-DyLNxeVu.js";import"./FileIcon-9EvfyYGP.js";import"./Description-gV_xFWu0.js";import"./Zip-DuTRaxgp.js";import"./BulkActions-B_3o93Oe.js";import"./Select-CXbuGZlm.js";import"./Canvas-DZq7I7zH.js";import"./ErrorMessage-BP27EmSr.js";import"./DeleteForever-9wJvu4RC.js";import"./DndList-BsWbMFiL.js";import"./sortable.esm-Dl49q8Ds.js";import"./DragIndicator-DfHGYZwT.js";import"./ErrorPage-D3_uGePi.js";import"./FileButton-CElRXgyd.js";import"./use-toast-DY_Xa0g3.js";import"./FileList-Cudmxc-1.js";import"./Download-DNcDoyHu.js";import"./Warning-Cu2XI0rB.js";import"./ListFilters-BS269r0j.js";import"./Modal-aWD5VUVE.js";import"./use-is-mobile-DAyZqDF7.js";import"./FilterListOff-BDURnKXn.js";import"./NumberField-BzT_C8lp.js";import"./KeyboardArrowUp-DLMGS6nC.js";import"./FieldError-Bqposku1.js";import"./Group-BCVgN9v5.js";import"./useTextField-9UyhzjZP.js";import"./PDFViewer-BR8vKx84.js";import"./Divider-aip-mbMC.js";import"./Remove-CJzKZcAA.js";import"./RadioGroup-BvZ0NYlZ.js";import"./Menu-DXmg9E6R.js";import"./TableOutlined-CELAjD3e.js";import"./MoreHoriz-CYS4JrMf.js";import"./TableOptions-DOEG9ki4.js";import"./ViewColumn-BwVhDPkR.js";import"./TextField-BAevXNNH.js";import"./Toolbar-B72oQCy9.js";import"./Search-CLCZU1OJ.js";import"./Underline-yQ66NvZ6.js";import"./ArrowBack-HOzfMhGm.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
