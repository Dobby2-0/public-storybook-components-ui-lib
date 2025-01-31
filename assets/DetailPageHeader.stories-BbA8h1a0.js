import{j as m}from"./jsx-runtime-DR9Q75dM.js";import{c as le}from"./index-By-mRCMU.js";import{c as de}from"./index-DRjF_FHU.js";import"./BulkActions-D4xcXMnO.js";import{I as me}from"./IconButton-DbkmtpEa.js";import"./DobbyContextProvider-BRsFQSbA.js";import"./FileList-CAm9X8Nz.js";import"./Form-DRyTS_Dg.js";import"./Loader-Cgl1KvpE.js";import"./RadioGroup-Ijd77uHY.js";import{S as fe}from"./Select-DjjPRgO5.js";import"./TextField-Jrribeej.js";import"./Tooltip-qs9nbyqA.js";import{h as he}from"./ArrowBack-2ExNkz_7.js";import"./useTranslation-BZwSnrkG.js";import"./useFocusRing-BWUU1kMe.js";import"./index-rX-Bn4lm.js";import"./platform-SeyP_Zfo.js";import"./ButtonBase-BA52Or5m.js";import"./index-wL3GxAOQ.js";import"./Button-BmI6QyOV.js";import"./Hidden-3y5knXN0.js";import"./useFocusable-C701Y3LS.js";import"./usePress-8Gc9NV6T.js";import"./openLink--SV7cA94.js";import"./index-DlSQN3eM.js";import"./index.browser-OxPLOBIU.js";import"./PortalProvider-DG1WN5c3.js";import"./Alert-Dpd35Ztu.js";import"./CheckCircle-Ciw2kuSm.js";import"./Close-a0dMVUhZ.js";import"./Error-BKB7cmKQ.js";import"./Info-CwC22AGT.js";import"./Pill-ByEbGEhU.js";import"./Description-BZTUmzGN.js";import"./index-BSPp2CQF.js";import"./Label-C3T7MHLE.js";import"./index-CrDvLK-b.js";import"./FieldError-C2OjUulo.js";import"./Text-CYCjNin1.js";import"./useLabels-Pvxio8V_.js";import"./Form-BPFCzTC-.js";import"./useControlledState-uSQY0H5C.js";import"./FocusScope-Ds0qzRnM.js";import"./context-CfhCFD4s.js";import"./useFormReset-29dva5OZ.js";import"./VisuallyHidden-DOCgl12y.js";import"./ListBox-DLnjnFjF.js";import"./Check-f6fs0czz.js";import"./ListBox-ColFdnOe.js";import"./Collection-CKo7FAVI.js";import"./DragAndDrop-SWM1ETZk.js";import"./isScrollable-BSEN4xi5.js";import"./useDescription-BEeojJp4.js";import"./Popover-xe9GNMkb.js";import"./Dialog-CgYtMAXa.js";import"./RSPContexts-BlCrYygD.js";import"./PressResponder-2k5FZZvl.js";import"./ariaHideOutside-7Z-f0sYi.js";import"./getScrollParent-BL0kfGii.js";import"./useLocalizedStringFormatter-C4j5Xp9z.js";import"./variants-CuMcQlp7.js";import"./KeyboardArrowDown-Dio4eISq.js";import"./Input-CXtscATe.js";const pe=({title:v,titleId:B,...x})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":B,...x,children:[v?m.jsx("title",{id:B,children:v}):null,m.jsx("path",{d:"M9 15.769a1.3 1.3 0 0 1-.46-.085 1.6 1.6 0 0 1-.421-.253q-.75-.656-1.622-1.537A17.5 17.5 0 0 1 4.875 12q-.75-1.012-1.237-2.11-.488-1.096-.488-2.184 0-2.512 1.669-4.21Q6.487 1.802 9 1.8q2.493 0 4.172 1.697 1.678 1.696 1.678 4.21 0 1.086-.497 2.193a11.7 11.7 0 0 1-1.237 2.119 16 16 0 0 1-1.613 1.884 34 34 0 0 1-1.622 1.528 1.6 1.6 0 0 1-.422.253A1.3 1.3 0 0 1 9 15.77M9 9q.563 0 .956-.394.394-.393.394-.956t-.394-.956A1.3 1.3 0 0 0 9 6.3q-.563 0-.956.394a1.3 1.3 0 0 0-.394.956q0 .563.394.956Q8.437 9 9 9"})]});var $e={exports:{}};(function(v,B){(function(x,w){v.exports=w()})(de,function(){var x=1e3,w=6e4,Y=36e5,C="millisecond",_="second",j="minute",k="hour",g="day",A="week",$="month",Z="quarter",y="year",N="date",z="Invalid Date",ae=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,oe=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ue={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var r=["th","st","nd","rd"],e=s%100;return"["+s+(r[(e-20)%10]||r[e]||r[0])+"]"}},F=function(s,r,e){var n=String(s);return!n||n.length>=r?s:""+Array(r+1-n.length).join(e)+s},ce={s:F,z:function(s){var r=-s.utcOffset(),e=Math.abs(r),n=Math.floor(e/60),t=e%60;return(r<=0?"+":"-")+F(n,2,"0")+":"+F(t,2,"0")},m:function s(r,e){if(r.date()<e.date())return-s(e,r);var n=12*(e.year()-r.year())+(e.month()-r.month()),t=r.clone().add(n,$),i=e-t<0,a=r.clone().add(n+(i?-1:1),$);return+(-(n+(e-t)/(i?t-a:a-t))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:$,y,w:A,d:g,D:N,h:k,m:j,s:_,ms:C,Q:Z}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},H="en",M={};M[H]=ue;var E="$isDayjsObject",J=function(s){return s instanceof L||!(!s||!s[E])},I=function s(r,e,n){var t;if(!r)return H;if(typeof r=="string"){var i=r.toLowerCase();M[i]&&(t=i),e&&(M[i]=e,t=i);var a=r.split("-");if(!t&&a.length>1)return s(a[0])}else{var u=r.name;M[u]=r,t=u}return!n&&t&&(H=t),t||!n&&H},l=function(s,r){if(J(s))return s.clone();var e=typeof r=="object"?r:{};return e.date=s,e.args=arguments,new L(e)},o=ce;o.l=I,o.i=J,o.w=function(s,r){return l(s,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var L=function(){function s(e){this.$L=I(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[E]=!0}var r=s.prototype;return r.parse=function(e){this.$d=function(n){var t=n.date,i=n.utc;if(t===null)return new Date(NaN);if(o.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var a=t.match(ae);if(a){var u=a[2]-1||0,c=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)):new Date(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)}}return new Date(t)}(e),this.init()},r.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},r.$utils=function(){return o},r.isValid=function(){return this.$d.toString()!==z},r.isSame=function(e,n){var t=l(e);return this.startOf(n)<=t&&t<=this.endOf(n)},r.isAfter=function(e,n){return l(e)<this.startOf(n)},r.isBefore=function(e,n){return this.endOf(n)<l(e)},r.$g=function(e,n,t){return o.u(e)?this[n]:this.set(t,e)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(e,n){var t=this,i=!!o.u(n)||n,a=o.p(e),u=function(D,h){var b=o.w(t.$u?Date.UTC(t.$y,h,D):new Date(t.$y,h,D),t);return i?b:b.endOf(g)},c=function(D,h){return o.w(t.toDate()[D].apply(t.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(h)),t)},d=this.$W,f=this.$M,p=this.$D,O="set"+(this.$u?"UTC":"");switch(a){case y:return i?u(1,0):u(31,11);case $:return i?u(1,f):u(0,f+1);case A:var S=this.$locale().weekStart||0,T=(d<S?d+7:d)-S;return u(i?p-T:p+(6-T),f);case g:case N:return c(O+"Hours",0);case k:return c(O+"Minutes",1);case j:return c(O+"Seconds",2);case _:return c(O+"Milliseconds",3);default:return this.clone()}},r.endOf=function(e){return this.startOf(e,!1)},r.$set=function(e,n){var t,i=o.p(e),a="set"+(this.$u?"UTC":""),u=(t={},t[g]=a+"Date",t[N]=a+"Date",t[$]=a+"Month",t[y]=a+"FullYear",t[k]=a+"Hours",t[j]=a+"Minutes",t[_]=a+"Seconds",t[C]=a+"Milliseconds",t)[i],c=i===g?this.$D+(n-this.$W):n;if(i===$||i===y){var d=this.clone().set(N,1);d.$d[u](c),d.init(),this.$d=d.set(N,Math.min(this.$D,d.daysInMonth())).$d}else u&&this.$d[u](c);return this.init(),this},r.set=function(e,n){return this.clone().$set(e,n)},r.get=function(e){return this[o.p(e)]()},r.add=function(e,n){var t,i=this;e=Number(e);var a=o.p(n),u=function(f){var p=l(i);return o.w(p.date(p.date()+Math.round(f*e)),i)};if(a===$)return this.set($,this.$M+e);if(a===y)return this.set(y,this.$y+e);if(a===g)return u(1);if(a===A)return u(7);var c=(t={},t[j]=w,t[k]=Y,t[_]=x,t)[a]||1,d=this.$d.getTime()+e*c;return o.w(d,this)},r.subtract=function(e,n){return this.add(-1*e,n)},r.format=function(e){var n=this,t=this.$locale();if(!this.isValid())return t.invalidDate||z;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=o.z(this),u=this.$H,c=this.$m,d=this.$M,f=t.weekdays,p=t.months,O=t.meridiem,S=function(h,b,W,V){return h&&(h[b]||h(n,i))||W[b].slice(0,V)},T=function(h){return o.s(u%12||12,h,"0")},D=O||function(h,b,W){var V=h<12?"AM":"PM";return W?V.toLowerCase():V};return i.replace(oe,function(h,b){return b||function(W){switch(W){case"YY":return String(n.$y).slice(-2);case"YYYY":return o.s(n.$y,4,"0");case"M":return d+1;case"MM":return o.s(d+1,2,"0");case"MMM":return S(t.monthsShort,d,p,3);case"MMMM":return S(p,d);case"D":return n.$D;case"DD":return o.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return S(t.weekdaysMin,n.$W,f,2);case"ddd":return S(t.weekdaysShort,n.$W,f,3);case"dddd":return f[n.$W];case"H":return String(u);case"HH":return o.s(u,2,"0");case"h":return T(1);case"hh":return T(2);case"a":return D(u,c,!0);case"A":return D(u,c,!1);case"m":return String(c);case"mm":return o.s(c,2,"0");case"s":return String(n.$s);case"ss":return o.s(n.$s,2,"0");case"SSS":return o.s(n.$ms,3,"0");case"Z":return a}return null}(h)||a.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(e,n,t){var i,a=this,u=o.p(n),c=l(e),d=(c.utcOffset()-this.utcOffset())*w,f=this-c,p=function(){return o.m(a,c)};switch(u){case y:i=p()/12;break;case $:i=p();break;case Z:i=p()/3;break;case A:i=(f-d)/6048e5;break;case g:i=(f-d)/864e5;break;case k:i=f/Y;break;case j:i=f/w;break;case _:i=f/x;break;default:i=f}return t?i:o.a(i)},r.daysInMonth=function(){return this.endOf($).$D},r.$locale=function(){return M[this.$L]},r.locale=function(e,n){if(!e)return this.$L;var t=this.clone(),i=I(e,n,!0);return i&&(t.$L=i),t},r.clone=function(){return o.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},s}(),Q=L.prototype;return l.prototype=Q,[["$ms",C],["$s",_],["$m",j],["$H",k],["$W",g],["$M",$],["$y",y],["$D",N]].forEach(function(s){Q[s[1]]=function(r){return this.$g(r,s[0],s[1])}}),l.extend=function(s,r){return s.$i||(s(r,L,l),s.$i=!0),l},l.locale=I,l.isDayjs=J,l.unix=function(s){return l(1e3*s)},l.en=M[H],l.Ls=M,l.p={},l})})($e);const R=({title:v,subtitle:B,className:x,enableBackButton:w=!1,onBackButtonPress:Y,children:C})=>m.jsxs("div",{className:le("w-full flex justify-between items-center bg-neutral-150 p-4 rounded-md mb-2.5 gap-2",x),children:[w&&m.jsx(me,{variant:"ghost",onPress:Y,children:m.jsx(he,{})}),C??m.jsxs("div",{className:"flex flex-1 flex-col sm:flex-row gap-1 sm:gap-4 justify-between sm:items-center",children:[m.jsx("span",{className:"font-display font-semibold text-lg",children:v}),m.jsx("div",{className:"flex items-center text-neutral-700",children:B})]})]});try{R.displayName="DetailPageHeader",R.__docgenInfo={description:`Header component used for detail pages.

Can display either title and subtitle or custom children inside the component`,displayName:"DetailPageHeader",props:{title:{defaultValue:null,description:`Title to be shown in the header.

Will not be displayed when children are set.`,name:"title",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:`Subtitle to be shown in the header.

Will not be displayed when children are set.`,name:"subtitle",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"The CSS className for the element.",name:"className",required:!1,type:{name:"string"}},enableBackButton:{defaultValue:{value:"false"},description:"Should a button with backwards arrow be displayed.",name:"enableBackButton",required:!1,type:{name:"boolean"}},onBackButtonPress:{defaultValue:null,description:"Function to be called when pressing the back button.",name:"onBackButtonPress",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:`Optional content for the component.

Will be shown instead of a title and subtitle.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const jt={component:R},q={args:{title:"My detail page",subtitle:m.jsxs(m.Fragment,{children:[m.jsx(pe,{className:"mr-1.5"}),m.jsx("span",{children:"Steenweg op Brussel 127, 9200 Dendermonde"})]})}},P={args:{...q.args,enableBackButton:!0}},U={args:{children:m.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[m.jsxs("div",{className:"flex flex-1 flex-col gap-1 justify-between",children:[m.jsx("span",{className:"font-display font-semibold text-lg",children:"Common area hasn't been cleaned this week"}),m.jsx("div",{className:"flex items-center text-neutral-700 text-sm",children:"Created by User on 10 september 2024 - 14:37"})]}),m.jsx(fe,{items:[{id:"1",label:"To be solved"}],placeholder:"Status"})]})}};var G,K,X;q.parameters={...q.parameters,docs:{...(G=q.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: "My detail page",
    subtitle: <>
        <LocationOn className="mr-1.5" />
        <span>Steenweg op Brussel 127, 9200 Dendermonde</span>
      </>
  }
}`,...(X=(K=q.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var ee,te,re;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    enableBackButton: true
  }
}`,...(re=(te=P.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,se,ie;U.parameters={...U.parameters,docs:{...(ne=U.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(se=U.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const kt=["Default","WithBackButton","WithCustomContent"];export{q as Default,P as WithBackButton,U as WithCustomContent,kt as __namedExportsOrder,jt as default};
