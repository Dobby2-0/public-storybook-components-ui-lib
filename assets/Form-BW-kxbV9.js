import{j as r}from"./iframe-C7KNxXq2.js";import{useMDXComponents as i}from"./index-UGt14G3X.js";import{M as e,C as m}from"./blocks-P5ohnZyp.js";import{F as p,D as s}from"./Form.stories-CuZiWKWD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-3qGBDUho.js";import"./index-BxQa0upA.js";import"./index-ClILm0VQ.js";import"./Button-Bm-0ouN-.js";import"./useHover-CGSK28vB.js";import"./ButtonBase-Be7vA8nu.js";import"./Loader-APQYjrvK.js";import"./Tooltip-CHgVR_2C.js";import"./index-BbVp1dd2.js";import"./Button-DTHNft8c.js";import"./SelectionIndicator-CHLWnz5K.js";import"./usePress-0VSSEFQY.js";import"./Text-6d857PzC.js";import"./useCollection-CCE1b6Mj.js";import"./VisuallyHidden-BNaasymY.js";import"./Autocomplete-CnbGb_u5.js";import"./Checkbox-CJaGR2QB.js";import"./Check-DwHA5HLs.js";import"./CheckIndeterminateSmall-BRiPLwNK.js";import"./useFormValidation-B7kFnU8D.js";import"./useToggleState-BtBeNumX.js";import"./useFormReset-99CuZihU.js";import"./ComboBox-tAHCtCvN.js";import"./ComboBoxListBox-C819BoMi.js";import"./ListBox-B2l4pM6B.js";import"./ListBox-fvggytBk.js";import"./useLoadMoreSentinel-DcspdZ6k.js";import"./useLabel-BYa6sWpw.js";import"./Pill-DgyECOOx.js";import"./Input-72RviXVG.js";import"./SelectBase-BD96hg3s.js";import"./Label-kNOOtCBX.js";import"./index-BVuWwcQA.js";import"./Label-C6r6U2Eo.js";import"./variants-KMHszoUn.js";import"./KeyboardArrowDown-BhIjvkCx.js";import"./filter-persistence-DkHe7_pO.js";import"./sha256-c80MUnA5.js";import"./DateTimePicker-DQFL_RJb.js";import"./IconButton-CZK1XdvV.js";import"./ChevronBackward-Cu2itRK_.js";import"./ChevronForward-nmANtsRu.js";import"./Calendar-YpVmLgtq.js";import"./Form-CE_ottxv.js";import"./ErrorMessage-CqvR9Kzj.js";import"./PhoneNumberField-DvTPG0Pi.js";import"./index-C7CL5OQ7.js";import"./TextField-BkjWO5Ss.js";import"./Group-CET_UDOr.js";import"./useField-BQ9w2mYH.js";import"./useTextField-B3a5yVp0.js";import"./RadioGroup-kxfvc4JA.js";import"./RichTextEditor-CRNEmizU.js";import"./Modal-B73cVcYH.js";import"./Select-Dm6SzPSo.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
`,r.jsx(o.h1,{id:"form",children:"Form"}),`
`,r.jsxs(o.p,{children:["The Form component provides a wrapper around ShadCN's ",r.jsx(o.code,{children:"react-hook-form"})," component."]}),`
`,r.jsx(m,{of:s}),`
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
`})})]})}function fr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{fr as default};
