import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{n as t,t as n}from"./useTranslation-Du5dcnMR.js";import{i as r,t as i}from"./utils-TgsCZh5h.js";import{t as a}from"./jsx-runtime-BB9-612F.js";import{W as o,gn as s,t as c}from"./main-CRAVX506.js";import{n as l,t as u}from"./Select-1mGJ_S1o.js";import{n as d,t as f}from"./IconButton-DAamU419.js";var p,m;function h(){return(h=e((()=>{d(),r(),c(),n(),p=a(),m=({title:e,subtitle:n,className:r,enableBackButton:a=!1,onBackButtonPress:o,children:c})=>{let{t:l}=t(`common`);return(0,p.jsxs)(`div`,{className:i(`group w-full flex justify-between items-center bg-neutral-150 p-4 rounded-md mb-2.5 gap-2`,r),children:[a&&(0,p.jsx)(f,{variant:`ghost`,onPress:o,tooltip:l(`actions.back`,`Back`),"aria-label":l(`actions.back`,`Back`),children:(0,p.jsx)(s,{})}),c??(0,p.jsxs)(`div`,{className:`content flex flex-1 flex-col sm:flex-row gap-1 sm:gap-4 justify-between sm:items-baseline`,children:[(0,p.jsx)(`span`,{className:`font-semibold text-lg`,children:e}),(0,p.jsx)(`div`,{className:`flex items-baseline text-neutral-700`,children:n})]})]})};try{m.displayName=`DetailPageHeader`,m.__docgenInfo={description:`Header component used for detail pages.

Can display either title and subtitle or custom children inside the component`,displayName:`DetailPageHeader`,filePath:`/home/runner/work/components-ui-lib/components-ui-lib/src/components/DetailPageHeader/DetailPageHeader.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/DetailPageHeader/DetailPageHeader.tsx`,name:`DetailPageHeaderProps`}],description:`Title to be shown in the header.

Will not be displayed when children are set.`,name:`title`,parent:{fileName:`components-ui-lib/src/components/DetailPageHeader/DetailPageHeader.tsx`,name:`DetailPageHeaderProps`},required:!1,tags:{},type:{name:`ReactNode`}},subtitle:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/DetailPageHeader/DetailPageHeader.tsx`,name:`DetailPageHeaderProps`}],description:`Subtitle to be shown in the header.

Will not be displayed when children are set.`,name:`subtitle`,parent:{fileName:`components-ui-lib/src/components/DetailPageHeader/DetailPageHeader.tsx`,name:`DetailPageHeaderProps`},required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/DetailPageHeader/DetailPageHeader.tsx`,name:`DetailPageHeaderProps`}],description:`The CSS className for the element.`,name:`className`,parent:{fileName:`components-ui-lib/src/components/DetailPageHeader/DetailPageHeader.tsx`,name:`DetailPageHeaderProps`},required:!1,tags:{},type:{name:`string`}},enableBackButton:{defaultValue:{value:`false`},declarations:[{fileName:`components-ui-lib/src/components/DetailPageHeader/DetailPageHeader.tsx`,name:`DetailPageHeaderProps`}],description:`Should a button with backwards arrow be displayed.`,name:`enableBackButton`,parent:{fileName:`components-ui-lib/src/components/DetailPageHeader/DetailPageHeader.tsx`,name:`DetailPageHeaderProps`},required:!1,tags:{},type:{name:`boolean`}},onBackButtonPress:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/DetailPageHeader/DetailPageHeader.tsx`,name:`DetailPageHeaderProps`}],description:`Function to be called when pressing the back button.`,name:`onBackButtonPress`,parent:{fileName:`components-ui-lib/src/components/DetailPageHeader/DetailPageHeader.tsx`,name:`DetailPageHeaderProps`},required:!1,tags:{},type:{name:`(() => void)`}},children:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/DetailPageHeader/DetailPageHeader.tsx`,name:`DetailPageHeaderProps`}],description:`Optional content for the component.

Will be shown instead of a title and subtitle.`,name:`children`,parent:{fileName:`components-ui-lib/src/components/DetailPageHeader/DetailPageHeader.tsx`,name:`DetailPageHeaderProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var g,_,v,y,b,x;function S(){return(S=e((()=>{h(),l(),c(),g=a(),_={component:m},v={args:{title:`My detail page`,subtitle:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{className:`mr-1.5 self-center`}),(0,g.jsx)(`span`,{children:`Steenweg op Brussel 127, 9200 Dendermonde`})]})}},y={args:{...v.args,enableBackButton:!0}},b={args:{children:(0,g.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-start sm:items-center gap-4`,children:[(0,g.jsxs)(`div`,{className:`flex flex-1 flex-col gap-1 justify-between`,children:[(0,g.jsx)(`span`,{className:`font-display font-semibold text-lg`,children:`Common area hasn't been cleaned this week`}),(0,g.jsx)(`div`,{className:`flex items-center text-neutral-700 text-sm`,children:`Created by User on 10 september 2024 - 14:37`})]}),(0,g.jsx)(u,{items:[{id:`1`,label:`To be solved`}],placeholder:`Status`})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "My detail page",
    subtitle: <>
        <LocationOn className="mr-1.5 self-center" />
        <span>Steenweg op Brussel 127, 9200 Dendermonde</span>
      </>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    enableBackButton: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithBackButton`,`WithCustomContent`]})))()}S();export{v as Default,y as WithBackButton,b as WithCustomContent,x as __namedExportsOrder,_ as default};