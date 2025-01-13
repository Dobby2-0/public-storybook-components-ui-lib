import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{I as K}from"./IconButton-Bu33w1wy.js";import{L as U}from"./Loader-Cgl1KvpE.js";import{P as V}from"./Pill-ByEbGEhU.js";import{o as F}from"./Description-BZTUmzGN.js";import{r as y}from"./index-DRjF_FHU.js";import{u as Z}from"./index-BSPp2CQF.js";import{u as H}from"./useTranslation-DW3ljh-R.js";const J=({title:t,titleId:i,...r})=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":i,...r,children:[t?s.jsx("title",{id:i,children:t}):null,s.jsx("path",{d:"M5.85 15.3q-.563 0-.956-.394a1.3 1.3 0 0 1-.394-.956v-9h-.225a.65.65 0 0 1-.478-.197.65.65 0 0 1-.197-.478.65.65 0 0 1 .197-.478.65.65 0 0 1 .478-.197H7.2v-.225a.65.65 0 0 1 .197-.478.65.65 0 0 1 .478-.197h2.25a.65.65 0 0 1 .478.197.65.65 0 0 1 .197.478V3.6h2.925a.65.65 0 0 1 .478.197.65.65 0 0 1 .197.478.65.65 0 0 1-.197.478.65.65 0 0 1-.478.197H13.5v9q0 .563-.394.956a1.3 1.3 0 0 1-.956.394zM9 10.406l1.031 1.031a.62.62 0 0 0 .478.197.7.7 0 0 0 .479-.215.656.656 0 0 0 0-.957L9.956 9.45l1.032-1.031a.656.656 0 0 0 0-.956.656.656 0 0 0-.957 0L9 8.493l-1.031-1.03a.65.65 0 0 0-.469-.207.65.65 0 0 0-.469.207.656.656 0 0 0 0 .956L8.044 9.45l-1.032 1.031a.61.61 0 0 0-.196.469.68.68 0 0 0 .215.469.656.656 0 0 0 .956 0z"})]}),X=({title:t,titleId:i,...r})=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":i,...r,children:[t?s.jsx("title",{id:i,children:t}):null,s.jsx("path",{d:"M4.05 15.3a1.3 1.3 0 0 1-.953-.403 1.3 1.3 0 0 1-.397-.947v-9.9q0-.543.397-.947A1.3 1.3 0 0 1 4.05 2.7h9.9q.557 0 .953.403.397.404.397.947v9.9q0 .544-.397.947a1.3 1.3 0 0 1-.953.403zm1.575-2.7h6.754a.31.31 0 0 0 .296-.187.31.31 0 0 0-.038-.357l-2.024-2.7a.3.3 0 0 0-.263-.15.3.3 0 0 0-.262.15L8.325 11.7l-1.088-1.444a.3.3 0 0 0-.262-.15.3.3 0 0 0-.263.15l-1.346 1.8a.3.3 0 0 0-.036.357q.098.186.295.187"})]});/**
 * filesize
 *
 * @copyright 2024 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 10.1.6
 */const C="array",Q="bit",R="bits",W="byte",q="bytes",b="",tt="exponent",et="function",O="iec",it="Invalid number",ot="Invalid rounding method",j="jedec",nt="object",z=".",st="round",rt="s",at="si",lt="kbit",ct="kB",dt=" ",ft="string",ut="0",E={symbol:{iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},fullform:{iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]}};function mt(t,{bits:i=!1,pad:r=!1,base:n=-1,round:c=2,locale:m=b,localeOptions:g={},separator:a=b,spacer:d=dt,symbols:f={},standard:l=b,output:u=ft,fullform:Y=!1,fullforms:T=[],exponent:N=-1,roundingMethod:$=st,precision:v=0}={}){let o=N,p=Number(t),e=[],h=0,B=b;l===at?(n=10,l=j):l===O||l===j?n=2:n===2?l=O:(n=10,l=j);const x=n===10?1e3:1024,k=Y===!0,_=p<0,A=Math[$];if(typeof t!="bigint"&&isNaN(t))throw new TypeError(it);if(typeof A!==et)throw new TypeError(ot);if(_&&(p=-p),(o===-1||isNaN(o))&&(o=Math.floor(Math.log(p)/Math.log(x)),o<0&&(o=0)),o>8&&(v>0&&(v+=8-o),o=8),u===tt)return o;if(p===0)e[0]=0,B=e[1]=E.symbol[l][i?R:q][o];else{h=p/(n===2?Math.pow(2,o*10):Math.pow(1e3,o)),i&&(h=h*8,h>=x&&o<8&&(h=h/x,o++));const w=Math.pow(10,o>0?c:0);e[0]=A(h*w)/w,e[0]===x&&o<8&&N===-1&&(e[0]=1,o++),B=e[1]=n===10&&o===1?i?lt:ct:E.symbol[l][i?R:q][o]}if(_&&(e[0]=-e[0]),v>0&&(e[0]=e[0].toPrecision(v)),e[1]=f[e[1]]||e[1],m===!0?e[0]=e[0].toLocaleString():m.length>0?e[0]=e[0].toLocaleString(m,g):a.length>0&&(e[0]=e[0].toString().replace(z,a)),r&&c>0){const w=e[0].toString(),M=a||(w.match(/(\D)/g)||[]).pop()||z,L=w.toString().split(M),S=L[1]||b,P=S.length,G=c-P;e[0]=`${L[0]}${M}${S.padEnd(P+G,ut)}`}return k&&(e[1]=T[o]?T[o]:E.fullform[l][o]+(i?Q:W)+(e[0]===1?b:rt)),u===C?e:u===nt?{value:e[0],symbol:e[1],exponent:o,unit:B}:e.join(d)}const ht=({file:t,actionHandlers:i,onAttachmentOverride:r})=>{const{t:n}=H(),c=Z(),[m,g]=y.useState(!!t.loading);return y.useEffect(()=>{t.loading&&(async()=>{const a=await t.loading;c()&&(a&&r(a),g(!1))})()},[t.loading,c]),m?s.jsx(U,{}):s.jsx(s.Fragment,{children:i.delete&&s.jsx(K,{variant:"delete",onPress:()=>{i.delete(t)},children:s.jsx(J,{title:n("actions.delete","Delete",{ns:"common"})})})})},D=({files:t,actionButtons:i=!0,onFilesChange:r})=>{const[n,c]=y.useState(t);y.useEffect(()=>{c(t)},[t]);const m=y.useMemo(()=>({delete:(typeof i=="boolean"?{delete:i}:i).delete?d=>{(async()=>{try{typeof i=="object"&&typeof i.delete=="function"&&await i.delete(d);const f=n==null?void 0:n.filter(l=>l!==d);c(f),r==null||r(f??[])}catch{}})()}:!1}),[i,n,r]),g=y.useCallback(a=>d=>{c(f=>{if(f){const l=f.findIndex(u=>u.id===a.id);if(l!==-1){const u=[...f];return u[l]=d,r==null||r(u),u}}return f})},[r]);return s.jsx("div",{children:n==null?void 0:n.map(a=>{var d;return s.jsxs("div",{className:"flex items-center gap-1.5 text-primary",children:[(d=a.type)!=null&&d.includes("image")?s.jsx(X,{}):s.jsx(F,{}),a.name,s.jsx(V,{children:mt(a.size,{round:0})}),s.jsx(ht,{file:a,actionHandlers:m,onAttachmentOverride:g(a)})]},a.id)})})},I=t=>t instanceof File?{id:`${t.name}_${t.lastModified}`,name:t.name,size:t.size,type:t.type,url:URL.createObjectURL(t)}:t.map(i=>I(i));try{D.displayName="FileList",D.__docgenInfo={description:"Displays a list of files with optional action buttons.",displayName:"FileList",props:{files:{defaultValue:null,description:"List of files to display.\n\nA utility function `fileToAttachment` is provided by this library to convert a `File` or an array of `File` to the required format.",name:"files",required:!1,type:{name:"Attachment[]"}},actionButtons:{defaultValue:{value:"true"},description:`Allows configuration of action buttons.
<br/><br/>
If the value is a boolean, it will show or hide the action buttons with their default behaviour.
<br/><br/>
If the value is an object, it will allow to configure the behaviour of the individual buttons, either a boolean for default behaviour show/hide, or a function that will be triggered when the corresponding button is pressed.`,name:"actionButtons",required:!1,type:{name:"boolean | ActionButtons"}},onFilesChange:{defaultValue:null,description:"Callback that triggers when the list of files changes",name:"onFilesChange",required:!1,type:{name:"((files: Attachment[]) => void)"}}}}}catch{}try{I.displayName="fileToAttachment",I.__docgenInfo={description:"",displayName:"fileToAttachment",props:{}}}catch{}export{D as F,I as f};
