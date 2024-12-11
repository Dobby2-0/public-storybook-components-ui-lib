import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as y}from"./index-DbF_LCtC.js";import"./BulkActions-BwgbmNBG.js";import{I as j}from"./IconButton-BXIg79ky.js";import"./DobbyContextProvider-DBgfROFL.js";import{S as N}from"./Select-BnjIiA_5.js";import{h as v}from"./ArrowBack-2ExNkz_7.js";import"./index-DRjF_FHU.js";import"./useFocusRing-BVB6PmV2.js";import"./index-rX-Bn4lm.js";import"./platform-SeyP_Zfo.js";import"./ButtonBase-68n3dYyB.js";import"./index-Bb4qSo10.js";import"./Button-7nE4aMBy.js";import"./Hidden-Ds0v-K3J.js";import"./useFocusable-BbLMR9O8.js";import"./usePress-CUS98H1I.js";import"./openLink-CSxKP-Gt.js";import"./index-CEowX4h1.js";import"./PortalProvider-DG1WN5c3.js";import"./Pill-CP8P5UDN.js";import"./Close-a0dMVUhZ.js";import"./ListBox-Clc843B4.js";import"./Check-f6fs0czz.js";import"./ListBox-BkwDnmTO.js";import"./Collection-CDHXW_pb.js";import"./DragAndDrop-BfZcanoh.js";import"./context-ZKAK4bzY.js";import"./FocusScope-DunIJCUY.js";import"./isScrollable-BSEN4xi5.js";import"./useControlledState-uSQY0H5C.js";import"./Text-BL6Wbd-W.js";import"./useLabels-cBmkpLxc.js";import"./Popover-CG8Vj3nR.js";import"./Dialog-8WNBOsv2.js";import"./RSPContexts-DYuYEgz3.js";import"./ariaHideOutside-DuLZqUiR.js";import"./useLocalizedStringFormatter-CWPt16fG.js";import"./VisuallyHidden-6RwMXa54.js";import"./KeyboardArrowDown-Dio4eISq.js";import"./Info-CwC22AGT.js";import"./FieldError-DN1bKGw_.js";import"./Form-BlNwRkhz.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-CYpnU95f.js";import"./useFormReset-B-DssnCx.js";const B=({title:t,titleId:s,...o})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":s,...o,children:[t?e.jsx("title",{id:s,children:t}):null,e.jsx("path",{d:"M9 15.769a1.3 1.3 0 0 1-.46-.085 1.6 1.6 0 0 1-.421-.253q-.75-.656-1.622-1.537A17.5 17.5 0 0 1 4.875 12q-.75-1.012-1.237-2.11-.488-1.096-.488-2.184 0-2.512 1.669-4.21Q6.487 1.802 9 1.8q2.493 0 4.172 1.697 1.678 1.696 1.678 4.21 0 1.086-.497 2.193a11.7 11.7 0 0 1-1.237 2.119 16 16 0 0 1-1.613 1.884 34 34 0 0 1-1.622 1.528 1.6 1.6 0 0 1-.422.253A1.3 1.3 0 0 1 9 15.77M9 9q.563 0 .956-.394.394-.393.394-.956t-.394-.956A1.3 1.3 0 0 0 9 6.3q-.563 0-.956.394a1.3 1.3 0 0 0-.394.956q0 .563.394.956Q8.437 9 9 9"})]}),i=({title:t,subtitle:s,className:o,enableBackButton:b=!1,onBackButtonPress:g,children:w})=>e.jsxs("div",{className:y("w-full flex justify-between items-center bg-neutral-150 p-4 rounded-md mb-2.5 gap-2",o),children:[b&&e.jsx(j,{variant:"ghost",onPress:g,children:e.jsx(v,{})}),w??e.jsxs("div",{className:"flex flex-1 flex-col sm:flex-row gap-1 sm:gap-4 justify-between sm:items-center",children:[e.jsx("span",{className:"font-display font-semibold text-lg",children:t}),e.jsx("div",{className:"flex items-center text-neutral-700",children:s})]})]});try{i.displayName="DetailPageHeader",i.__docgenInfo={description:`Header component used for detail pages.

Can display either title and subtitle or custom children inside the component`,displayName:"DetailPageHeader",props:{title:{defaultValue:null,description:`Title to be shown in the header.

Will not be displayed when children are set.`,name:"title",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:`Subtitle to be shown in the header.

Will not be displayed when children are set.`,name:"subtitle",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"The CSS className for the element.",name:"className",required:!1,type:{name:"string"}},enableBackButton:{defaultValue:{value:"false"},description:"Should a button with backwards arrow be displayed.",name:"enableBackButton",required:!1,type:{name:"boolean"}},onBackButtonPress:{defaultValue:null,description:"Function to be called when pressing the back button.",name:"onBackButtonPress",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:`Optional content for the component.

Will be shown instead of a title and subtitle.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const be={component:i},a={args:{title:"My detail page",subtitle:e.jsxs(e.Fragment,{children:[e.jsx(B,{className:"mr-1.5"}),e.jsx("span",{children:"Steenweg op Brussel 127, 9200 Dendermonde"})]})}},r={args:{...a.args,enableBackButton:!0}},n={args:{children:e.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[e.jsxs("div",{className:"flex flex-1 flex-col gap-1 justify-between",children:[e.jsx("span",{className:"font-display font-semibold text-lg",children:"Common area hasn't been cleaned this week"}),e.jsx("div",{className:"flex items-center text-neutral-700 text-sm",children:"Created by User on 10 september 2024 - 14:37"})]}),e.jsx(N,{items:[{id:"1",label:"To be solved"}],placeholder:"Status"})]})}};var l,m,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "My detail page",
    subtitle: <>
        <LocationOn className="mr-1.5" />
        <span>Steenweg op Brussel 127, 9200 Dendermonde</span>
      </>
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,c,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    enableBackButton: true
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var f,h,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex flex-1 flex-col gap-1 justify-between">
          <span className="font-display font-semibold text-lg">
            Common area hasn&apos;t been cleaned this week
          </span>
          <div className="flex items-center text-neutral-700 text-sm">
            Created by User on 10 september 2024 - 14:37
          </div>
        </div>
        <Select items={[{
        id: "1",
        label: "To be solved"
      }]} placeholder="Status" />
      </div>
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const ge=["Default","WithBackButton","WithCustomContent"];export{a as Default,r as WithBackButton,n as WithCustomContent,ge as __namedExportsOrder,be as default};
