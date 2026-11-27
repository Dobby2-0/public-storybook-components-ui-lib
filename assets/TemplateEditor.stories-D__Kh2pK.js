import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BbeNlDUO.js";import{t as n}from"./react-dom-DvEEGbPc.js";import{i as r,r as i}from"./ButtonBase-Bz9iAOXL.js";import{n as a,t as o}from"./useTranslation-Du5dcnMR.js";import{i as s,t as c}from"./utils-TgsCZh5h.js";import{t as l}from"./jsx-runtime-BB9-612F.js";import{c as u,t as d}from"./dist-DLE_H5Rv.js";import{P as f,it as p,t as m}from"./main-CfiIbi2k.js";import{n as h,t as g}from"./Button-B_lX6TGw.js";import{n as _,t as v}from"./Dialog-BmhYn3hm.js";import{n as y,t as ee}from"./RichTextEditor-BbtlO-O7.js";import{a as b,i as x,n as S,r as C,t as w}from"./structural-tags-CkeVtKXL.js";import{n as te,t as ne}from"./EditorToolbar-BHwDAjcL.js";var T,E,D,re,O;function k(){return(k=e((()=>{T=t(),E=l(),D=6,re=(e,t,n)=>{let r=e.getBoundingClientRect(),i=e.offsetWidth?r.width/e.offsetWidth:1,a=e.offsetHeight?r.height/e.offsetHeight:1,o=t=>(t-r.left)/i-e.clientLeft+e.scrollLeft,s=t=>(t-r.top)/a-e.clientTop+e.scrollTop,c=e.clientWidth,l=Number.parseFloat(getComputedStyle(e).paddingBottom),u=Math.max(e.clientHeight,s(t.getBoundingClientRect().top)+t.scrollHeight+(Number.isNaN(l)?0:l));return{width:c,height:u,holes:n.map(e=>{let t=e.getBoundingClientRect(),n=Math.max(o(t.left)-6,0),r=Math.max(s(t.top)-6,0),i=Math.min(o(t.right)+6,c),a=Math.min(s(t.bottom)+6,u),l=Number.parseFloat(getComputedStyle(e).borderTopLeftRadius);return{x:n,y:r,width:i-n,height:a-r,radius:Math.max(Number.isNaN(l)?0:l,D)+6}})}},O=({container:e,content:t,regions:n,className:r})=>{let[i,a]=(0,T.useState)(null),o=`locked-overlay-${(0,T.useId)().replace(/[^a-zA-Z0-9_-]/g,``)}`;if((0,T.useEffect)(()=>{if(!e||!t)return;let r=()=>a(re(e,t,n)),i=new ResizeObserver(r);return i.observe(e),i.observe(t),n.forEach(e=>i.observe(e)),window.addEventListener(`resize`,r),()=>{i.disconnect(),window.removeEventListener(`resize`,r)}},[e,t,n]),!i)return null;let{width:s,height:c,holes:l}=i;return(0,E.jsx)(`div`,{"aria-hidden":!0,className:`pointer-events-none absolute top-0 left-0 overflow-hidden`,style:{width:`100%`,height:c,borderRadius:`inherit`},children:(0,E.jsxs)(`svg`,{className:r,width:s,height:c,children:[(0,E.jsxs)(`mask`,{id:o,children:[(0,E.jsx)(`rect`,{width:s,height:c,fill:`white`}),l.map((e,t)=>{let n=Math.min(e.radius,e.width/2,e.height/2);return(0,E.jsx)(`rect`,{x:e.x,y:e.y,width:e.width,height:e.height,rx:n,fill:`black`},t)})]}),(0,E.jsx)(`rect`,{width:s,height:c,fill:`currentColor`,mask:`url(#${o})`})]})})};try{6 .displayName=`PADDING`,6 .__docgenInfo={description:`How many pixels each cut-out extends beyond its region.`,displayName:`PADDING`,filePath:`/home/runner/work/components-ui-lib/components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,methods:[],props:{},tags:{}}}catch{}try{O.displayName=`LockedOverlay`,O.__docgenInfo={description:`Covers a container with a translucent layer that has the shape of each region cut out,
so everything that is not editable looks greyed out. Clicks pass through the overlay.
The cut-outs follow the regions when they grow, shrink or move.`,displayName:`LockedOverlay`,filePath:`/home/runner/work/components-ui-lib/components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,methods:[],props:{container:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`}],description:"The element the overlay covers. It must be `position: relative`.",name:`container`,parent:{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`},required:!0,tags:{},type:{name:`HTMLElement | null`}},content:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`}],description:`The content inside the container. Its height decides how far the overlay reaches.`,name:`content`,parent:{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`},required:!0,tags:{},type:{name:`HTMLElement | null`}},regions:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`}],description:`The elements that are cut out of the overlay.`,name:`regions`,parent:{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`},required:!0,tags:{},type:{name:`HTMLElement[]`}},className:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`}],description:``,name:`className`,parent:{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var ie,ae,oe,se,ce,le,A,j,ue,M,de;function N(){return(N=e((()=>{ie=/\sdata-editable(?![\w:-])(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/i,ae=new Set([`area`,`base`,`br`,`col`,`embed`,`hr`,`img`,`input`,`link`,`meta`,`source`,`track`,`wbr`]),oe=new Set([`script`,`style`,`textarea`,`title`]),se=e=>e>=65&&e<=90||e>=97&&e<=122,ce=e=>se(e)||e>=48&&e<=57||e===95||e===58||e===45,le=(e,t)=>{let n=t+1,r=e[n]===`/`;if(r&&(n+=1),!se(e.charCodeAt(n)))return;let i=n;for(;ce(e.charCodeAt(n));)n+=1;let a=n;for(;n<e.length&&e[n]!==`>`;){let t=e[n];if(t===`"`||t===`'`){let r=e.indexOf(t,n+1);if(r===-1)return null;n=r+1}else n+=1}return n>=e.length?null:{index:t,end:n+1,closing:r,name:e.slice(i,a),attrs:e.slice(a,n),selfClosing:e[n-1]===`/`}},A=(e,t)=>{let n=e.indexOf(`<`,t);for(;n!==-1;){if(e.startsWith(`<!--`,n)){let t=e.indexOf(`-->`,n+4);if(t===-1)return null;n=e.indexOf(`<`,t+3);continue}let t=le(e,n);if(t===null)return null;if(t)return t;n=e.indexOf(`<`,n+1)}return null},j=(e,t,n)=>{let r=RegExp(`</${t}\\s*>`,`gi`);r.lastIndex=n;let i=r.exec(e);return i?i.index:e.length},ue=(e,t,n)=>{let r=1,i=n;for(let n=A(e,i);n;n=A(e,i)){i=n.end;let a=n.name.toLowerCase();if(a!==t)!n.closing&&oe.has(a)&&!n.selfClosing&&(i=j(e,a,n.end));else if(n.closing){if(--r,r===0)return n.index}else n.selfClosing||(r+=1)}return-1},M=e=>{let t=[],n=new Set,r=0;for(let i=A(e,r);i;i=A(e,r)){if(r=i.end,i.closing)continue;let a=i.name.toLowerCase();if(oe.has(a)&&!i.selfClosing){r=j(e,a,i.end);continue}let o=ie.exec(i.attrs);if(!o)continue;if(ae.has(a)||i.selfClosing)throw Error(`Editable element <${a}> must have content and a closing tag.`);let s=o[1]??o[2]??o[3],c=s===void 0||s===``?`region-${t.length}`:s;if(n.has(c))throw Error(`Duplicate data-editable region "${c}".`);n.add(c);let l=i.end,u=ue(e,a,l);if(u===-1)throw Error(`Editable element <${a}> "${c}" is not closed.`);t.push({id:c,html:e.slice(l,u),start:l,end:u}),r=u}return t},de=(e,t)=>{let n=M(e),r=e;for(let e of[...n].reverse()){let n=t[e.id];n!==void 0&&(r=r.slice(0,e.start)+n+r.slice(e.end))}return r}})))()}var fe,pe,me,he,ge,_e,ve,P,ye,be,xe,F,I,Se,L,Ce,we,Te,Ee,De,Oe,ke,Ae,je,R,Me,Ne,Pe,z,B,Fe,Ie,Le,Re,ze,Be,Ve;function He(){return(He=e((()=>{N(),b(),fe=/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi,pe=/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi,me=/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi,he=/\{\{~?(?:[#/^]|else\b)[^}]*\}\}/g,ge=/\ssrc\s*=\s*(?:"[^"]*&lt;tag-node[^"]*"|'[^']*&lt;tag-node[^']*')/gi,_e=/<body\b[^>]*>([\s\S]*)<\/body\s*>/i,ve=/<head\b[^>]*>[\s\S]*?<\/head\s*>/i,P=/@font-face\s*\{[^}]*\}/gi,ye=/@page[^{]*\{[^}]*\}/gi,be=/@(?:import|charset)\b[^;]*;/gi,xe=/(^|[},\s])(?:html|body)(?=[\s,{.:#[>+~])/gi,F=new Set([`table`,`thead`,`tbody`,`tfoot`]),I=(e,t)=>e?.name===`tag-node`&&e.closing===t,Se=new Set([`div`,`section`,`article`,`main`,`aside`,`header`,`footer`,`blockquote`,`li`,`td`,`th`]),L=new Set([`p`,`span`,`a`,`strong`,`b`,`em`,`i`,`u`,`small`,`label`,`sub`,`sup`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`]),Ce=new Set([`p`,`div`,`section`,`article`,`ul`,`ol`,`li`,`table`,`thead`,`tbody`,`tfoot`,`tr`,`td`,`th`,`blockquote`,`pre`,`hr`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`]),we=x.frame,Te=x.header,Ee=`${x.body} px-3!`,De=`struct-else-bar struct-else-bar-above struct-else-bar-below -mx-3! my-2! bg-neutral-200 px-3! py-1.5! text-sm font-medium text-neutral-900 select-none`,Oe=x.chip,ke=x.chipLabel,Ae=x.chipBody,je=x.chipElse,R=`bg-neutral-200 px-3! py-1.5! text-sm font-medium text-neutral-900 select-none`,Me=`h-2 border-x border-neutral-200 bg-control`,Ne=`tpl-fr`,Pe=new Set([`tr`,`tbody`,`thead`,`tfoot`]),z=(e,t)=>{let n=RegExp(`\\s${t}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`,`i`).exec(e);return n?n[1]??n[2]:void 0},B=e=>e.replace(/</g,`&lt;`),Fe=(e,t)=>{let n=e?.trim();return n===void 0||n===``?t:n},Ie=e=>{let t=[];for(let n=A(e,0);n;n=A(e,n.end))t.push(n);let n=[],r=()=>{for(let e=n.length-1;e>=0;--e)if(n[e].table)return n[e].table},i=[],a=[],o=[],s=1;for(let c=0;c<t.length;c+=1){let l=t[c],u=l.name.toLowerCase();if(Ce.has(u)&&o.push(l.index),l.closing){let e=n.length-1;for(;e>=0&&n[e].name!==u;)--e;e>=0&&(n.length=e);continue}if(u===`tag-node`){let a=t[c+1],o=z(l.attrs,`value`)?.trim()??``,s=C.test(o)?`start`:S.test(o)?`end`:w.test(o)?`else`:void 0;if(s&&I(a,!0)&&e.slice(l.end,a.index).trim()===``){let e=n[n.length-1],t=e!==void 0&&F.has(e.name);(!e||t||Se.has(e.name)||L.has(e.name))&&i.push({from:l.index,to:a.end,kind:s,helper:(s===`start`?C:S).exec(o)?.[1]??``,label:Fe(z(l.attrs,`label`),s===`else`?`else`:o),parent:e?.id??0,parentName:e?.name??``,inTable:t,table:t?r():void 0}),c+=1;continue}}if(ae.has(u)||l.selfClosing)continue;let d=n[n.length-1];d&&F.has(d.name)&&Pe.has(u)&&a.push({parent:d.id,name:l.name,from:l.index,to:l.end}),n.push({id:s,name:u,table:u===`table`?{columns:0,rowCells:0}:void 0}),s+=1;let f=r();f&&u===`tr`&&(f.rowCells=0),f&&(u===`td`||u===`th`)&&(f.rowCells+=parseInt(z(l.attrs,`colspan`)??`1`,10)||1,f.columns=Math.max(f.columns,f.rowCells))}return{markers:i,rows:a,blocks:o}},Le=(e,t,n)=>{let r=/(\sclass\s*=\s*)(["'])([^"']*)\2/i;if(r.test(e))return e.replace(r,(e,t,r,i)=>`${t}${r}${i} ${n}${r}`);let i=1+t.length;return`${e.slice(0,i)} class="${n}"${e.slice(i)}`},Re=e=>{let{markers:t,rows:n,blocks:r}=Ie(e),i=[],a=[],o=new Map,s=(t,n)=>!t.inTable&&(L.has(t.parentName)||e.slice(t.to,n.from).trim()!==``&&!r.some(e=>e>=t.to&&e<n.from)),c=(e,t,n)=>({top:r,bottom:i,above:a,below:o})=>{let s=[`p-0!`,r&&`pt-2!`,i&&`pb-2!`],c=[t,e.kind===`start`&&r&&`rounded-t-md!`,e.kind===`end`&&i&&`rounded-b-md! border-b`,(a||o)&&`struct-else-bar struct-else-bar-table`,a&&`struct-else-bar-above`,o&&`struct-else-bar-below`];return`<tr><td colspan="${Math.max(1,e.table?.columns??1)}" class="${s.filter(Boolean).join(` `)}"><div class="${c.filter(Boolean).join(` `)}">${n}</div></td></tr>`},l=(e,t,n)=>a.push({from:e.from,to:e.to,bar:e.inTable?{role:e.kind,parent:e.parent}:void 0,render:e.inTable?n:()=>t});for(let e of t)if(e.kind===`start`)i.push({start:e,elses:[]});else if(e.kind===`else`){let t=i[i.length-1];t?.start.parent===e.parent&&t.elses.push(e)}else{let t=i.length-1;for(;t>=0&&i[t].start.helper!==e.helper;)--t;if(t<0||i[t].start.parent!==e.parent)continue;let{start:r,elses:a}=i[t];i.length=t;let u=B(r.label),d=s(r,e);l(r,d?`<span class="${Oe}"><span class="${ke}">${u}</span><span class="${Ae}">`:`<div class="${we}"><div class="${Te}">${u}</div><div class="${Ee}">`,c(r,R,u));for(let e of a){let t=B(e.label);l(e,d?`<span class="${je}">${t}</span>`:`<div class="${De}">${t}</div>`,c(e,R,t))}l(e,d?`</span></span>`:`</div></div>`,c(e,Me,``)),r.inTable&&n.filter(t=>t.parent===r.parent&&t.from>=r.to&&t.to<=e.from).forEach(e=>o.set(e.from,e))}o.forEach(t=>a.push({from:t.from,to:t.to,render:()=>Le(e.slice(t.from,t.to),t.name,Ne)})),a.sort((e,t)=>e.from-t.from);let u=a.filter(e=>e.bar),d=(t,n)=>t?.bar!==void 0&&t.bar.parent===n?.bar?.parent&&e.slice(t.to,n.from).trim()===``,f=new Map;u.forEach((e,t)=>{let n=u[t-1],r=u[t+1];f.set(e,{top:e.bar?.role===`start`&&(!d(n,e)||n?.bar?.role===`end`),bottom:e.bar?.role===`end`&&(!d(e,r)||r?.bar?.role===`start`),above:e.bar?.role===`else`&&!d(n,e),below:(e.bar?.role===`start`||e.bar?.role===`else`)&&!d(e,r)})});let p=``,m=0;for(let t of a)p+=e.slice(m,t.from)+t.render(f.get(t)??{top:!1,bottom:!1,above:!1,below:!1}),m=t.to;return p+e.slice(m)},ze=e=>{let t=[];for(let n=A(e,0);n;n=A(e,n.end))t.push(n);let n=(t,n)=>e.slice(t,n).trim()===``,r=``,i=0,a=0;for(;a<t.length;){let o=a-1;for(;I(t[o+1],!1)&&I(t[o+2],!0)&&n(t[o+1].end,t[o+2].index)&&(o<a||n(t[o].end,t[o+1].index));)o+=2;if(o<a){a+=1;continue}let s=t[a-1],c=t[o+1],l=s!==void 0&&(!s.closing&&F.has(s.name.toLowerCase())||s.closing&&s.name.toLowerCase()===`tr`)&&n(s.end,t[a].index),u=c!==void 0&&(!c.closing&&c.name.toLowerCase()===`tr`||c.closing&&F.has(c.name.toLowerCase()))&&n(t[o].end,c.index);l&&u&&(r+=e.slice(i,t[a].index),r+=`<tr class="tpl-control"><td>${e.slice(t[a].index,t[o].end)}</td></tr>`,i=t[o].end),a=o+1}return r+e.slice(i)},Be=e=>{let t=e;for(let n of[...M(e)].reverse())t=t.slice(0,n.start)+t.slice(n.end);let n=[];t=t.replace(fe,(e,t)=>(n.push(t),``));let r=_e.exec(t);t=r?r[1]:t.replace(ve,``);let i=t.replace(he,``).replace(ge,``).replace(pe,``).replace(me,``);return{html:ze(Re(i)),css:n.join(`
`)}},Ve=(e,t)=>{let n=e.match(P)??[],r=e.replace(P,``).replace(ye,``).replace(be,``).replace(xe,`$1&`);return`${n.join(`
`)}\n.${t} {\n${r}\n}`}})))()}var V,Ue,H,We,U,W,G;function Ge(){return(Ge=e((()=>{_(),te(),y(),k(),N(),He(),s(),V=t(),Ue=n(),o(),d(),H=l(),We=(e,t,n)=>{let r=e.view.posAtCoords({left:t,top:n});if(r){e.chain().focus().setTextSelection(r.pos).run();return}let{top:i}=e.view.dom.getBoundingClientRect();e.commands.focus(n<i?`start`:`end`)},U=new WeakMap,W=({template:e,onChange:t,className:n,dimLocked:r=!0,fullscreen:i=!1,onToggleFullscreen:a,reportNormalisation:o=!1,...s})=>{let l=`tpl-${(0,V.useId)().replace(/:/g,``)}`,u=(0,V.useMemo)(()=>M(e),[e]),d=(0,V.useMemo)(()=>u.map(e=>e.id),[u]),f=(0,V.useMemo)(()=>Be(e),[e]),p=(0,V.useMemo)(()=>Ve(f.css,l),[f.css,l]),[m,h]=(0,V.useState)(null),g=m?.element??null,_=f.html,v=(0,V.useCallback)(e=>{e&&U.get(e)!==_&&(e.innerHTML=_,U.set(e,_)),h(e&&{element:e})},[_]),y=(0,V.useMemo)(()=>{let e={},t=m?.element.querySelectorAll(`[data-editable]`);return d.forEach((n,r)=>{let i=t?.[r],a=i?.getAttribute(`data-editable`),o=a===null||a===``?`region-${r}`:a;i&&o===n&&(e[n]=i)}),e},[m,d]),[b,x]=(0,V.useState)(null),S=(0,V.useMemo)(()=>d.flatMap(e=>y[e]??[]),[d,y]),C=(0,V.useRef)({}),[w,te]=(0,V.useState)(null),T=(0,V.useCallback)(e=>te(t=>t&&!t.isDestroyed?t:e),[]),E=(0,V.useRef)(e);(0,V.useEffect)(()=>{E.current=e},[e]);let D=(0,V.useCallback)((e,n)=>{let r=de(E.current,{[e]:n});r!==E.current&&(E.current=r,t?.(r))},[t]),re=(0,V.useCallback)(e=>{if(e.target.closest(`.ProseMirror`))return;let t=r?6:0,n;for(let r of d){let i=y[r]?.getBoundingClientRect();if(!i)continue;let a=t=>e.clientX>=i.left-t&&e.clientX<=i.right+t&&e.clientY>=i.top-t&&e.clientY<=i.bottom+t;if(a(0)){n=r;break}a(t)&&(n??=r)}let i=n===void 0?void 0:C.current[n];i&&!i.isDestroyed&&(e.preventDefault(),We(i,e.clientX,e.clientY))},[r,d,y]),k=(s.disabled??!1)||(s.readonly??!1);return(0,H.jsxs)(`div`,{className:c(`flex flex-col`,i&&`flex-1 min-h-0`,n),"aria-label":`template-editor`,children:[(0,H.jsx)(`style`,{children:p}),(0,H.jsx)(`style`,{children:`
        .${l} [data-editable] { cursor: text; }
        .${l} tag-node:not([data-editable] tag-node) { align-self: flex-start; background: #e5e7eb; border-radius: 10px; padding: 0 0.5em; }
        .${l} tag-node:not([data-editable] tag-node)::before { content: attr(label); }
        .${l} tag-node:is([label^="#"], [label^="/"], [label="else"]):not([data-editable] tag-node) { background: transparent; border: 1px dashed #94a3b8; color: #64748b; }
        .${l} [data-editable] .ProseMirror p { display: block !important; }
        /* A paragraph that only holds a <br> is one line in the document, but the editor adds a second, view-only break after it to make room for the caret. */
        .${l} [data-editable] .ProseMirror p > br:first-child:not(.ProseMirror-trailingBreak) + br.ProseMirror-trailingBreak:last-child { display: none; }
        /* The sides of a frame made of table rows. An inset shadow, not a border: collapsed cell borders are drawn half outside the table, so they would not line up with the borders of the bars. */
        .${l} .tpl-fr > :is(td, th):first-child, .${l} .tpl-fr > tr > :is(td, th):first-child { box-shadow: inset 1px 0 0 var(--neutral-200) !important; padding-left: 0.75rem !important; }
        .${l} .tpl-fr > :is(td, th):last-child, .${l} .tpl-fr > tr > :is(td, th):last-child { box-shadow: inset -1px 0 0 var(--neutral-200) !important; padding-right: 0.75rem !important; }
        .${l} .tpl-fr > :is(td, th):only-child, .${l} .tpl-fr > tr > :is(td, th):only-child { box-shadow: inset 1px 0 0 var(--neutral-200), inset -1px 0 0 var(--neutral-200) !important; }
        .${l} tr.tpl-control > td { padding: 2px 4px !important; border: none !important; background: none !important; white-space: nowrap; }
      `}),w&&!w.isDestroyed&&(0,H.jsx)(`div`,{className:`sticky top-0 z-10`,children:(0,H.jsx)(ne,{editor:w,options:s.toolbarOptions,disabled:k,fullscreen:i,onToggleFullscreen:a})}),(0,H.jsxs)(`div`,{ref:x,onMouseDown:re,className:c(`relative bg-control text-foreground border border-neutral-200 rounded-b-sm p-2`,i&&`flex-1 min-h-0 overflow-y-auto`),children:[(0,H.jsx)(`div`,{ref:v,className:l,"aria-label":`template-content`},f.html),r&&(0,H.jsx)(O,{container:b,content:g,regions:S,className:`text-neutral-900/10`})]}),d.map(e=>{let t=y[e];return t?(0,Ue.createPortal)((0,H.jsx)(ee,{...s,structuralTags:s.structuralTags??!0,disableTrailingNode:s.disableTrailingNode??!0,silentContentSync:!o,blendContent:!0,hideToolbar:!0,resizable:!1,value:u.find(t=>t.id===e)?.html??``,onChange:t=>D(e,t),onEditorReady:t=>{C.current[e]=t,T(t)},onEditorFocus:te}),t,e):null})]})},G=e=>{let{t}=a(`components`),[n,r,i]=u(!1);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(W,{...e,onToggleFullscreen:r}),(0,H.jsx)(v,{isOpen:n,onOpenChange:i,size:`fill`,"aria-label":t(`TemplateEditor.ariaLabel`,`Template editor`),children:(0,H.jsx)(v.Body,{scroll:`none`,children:(0,H.jsx)(W,{...e,fullscreen:!0,onToggleFullscreen:r})})})]})};try{G.displayName=`TemplateEditor`,G.__docgenInfo={description:"Edits the `data-editable` parts of a full html document.\n\nThe template is shown inside one framed editor with a single toolbar shared by all\neditable regions, and can be opened fullscreen. It is a controlled component: feed\nthe `onChange` result back into `template`.",displayName:`TemplateEditor`,filePath:`/home/runner/work/components-ui-lib/components-ui-lib/src/components/TemplateEditor/TemplateEditor.tsx`,methods:[],props:{autoFocus:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Focuses the start of the editor on mount. Never applies when the toolbar is hidden.`,name:`autoFocus`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{Default:`true`},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Whether the editor and toolbar should be disabled`,name:`disabled`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},resizable:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Wether the content container should be resizable`,name:`resizable`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{Default:`true`},type:{name:`boolean`}},contentStyle:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Custom CSS styles to apply to the content area`,name:`contentStyle`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`string`}},structuralTags:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:"Show the structural tags (`#if … /if`, `#unless … /unless`, `#each … /each`,\n`#with … /with` and their `else`) as frames around their content, which can be\nedited but not removed. Without it they are shown as separate tags.",name:`structuralTags`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{Default:`false`},type:{name:`boolean`}},toolbarOptions:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`configuration object for setting the available toolbar options`,name:`toolbarOptions`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`EditorToolbarOptions`}},pageView:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Enables paper like page view`,name:`pageView`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},readonly:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Makes the editor read-only`,name:`readonly`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},spellcheckLanguage:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Language to use for spellchecking. Falls back to the current i18n language if not provided`,name:`spellcheckLanguage`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`SpellcheckLanguage`,value:[{value:`"fr"`},{value:`"en"`},{value:`"nl"`}]}},spellcheckEnabled:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Whether to enable spellchecking`,name:`spellcheckEnabled`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{Default:`true`},type:{name:`boolean`}},disableContentPaste:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Disable pasting content`,name:`disableContentPaste`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},disableImagePaste:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Disable pasting images`,name:`disableImagePaste`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},disableContentDrop:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Disable dragging and dropping content`,name:`disableContentDrop`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},disableTrailingNode:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Disable adding a trailing node`,name:`disableTrailingNode`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},silentContentSync:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:"Do not call `onChange` when the editor rewrites a `value` it was given into its own\nform (added styles, hidden markers, ...). Only changes made in the editor are reported,\nso content nobody edited is not mistaken for an edit.",name:`silentContentSync`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},pasteWithoutFormatting:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Strip inline formatting from pasted content while keeping html structure`,name:`pasteWithoutFormatting`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},template:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/TemplateEditor.tsx`,name:`TypeLiteral`}],description:"The full html document. Elements marked with `data-editable` become editable regions.",name:`template`,required:!0,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/TemplateEditor.tsx`,name:`TypeLiteral`}],description:`Called with the full html document (template + edited regions) whenever a region changes.`,name:`onChange`,required:!1,tags:{},type:{name:`((template: string) => void)`}},reportNormalisation:{defaultValue:{value:`false`},declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/TemplateEditor.tsx`,name:`TypeLiteral`}],description:`The editor rewrites the content of a region into its own form when it loads it (added
styles, hidden markers, ...). By default that is not reported through \`onChange\`, so the
template only changes when the user edits a region. Set this to also report the
rewrite, to see what the editor makes of a template.`,name:`reportNormalisation`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/TemplateEditor.tsx`,name:`TypeLiteral`}],description:`The className of the element wrapping the toolbar and the template`,name:`className`,required:!1,tags:{},type:{name:`string`}},dimLocked:{defaultValue:{value:`true`},declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/TemplateEditor.tsx`,name:`TypeLiteral`}],description:`Covers everything that is not editable with a gray overlay, so the editable regions
stand out`,name:`dimLocked`,required:!1,tags:{Default:`true`},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var K,Ke,q,J;function qe(){return(qe=e((()=>{K=e=>`<tag-node label="${e}" value="${e}"></tag-node>`,Ke=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    @page { size: A4; margin: 12mm; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { font-family: Arial, sans-serif; color: #141e2c; font-size: 0.9rem; line-height: 1.5; }
    .page { display: flex; flex-direction: column; gap: 20px; padding: 8px 40px 16px; }
    table { width: 100%; border-collapse: collapse; }
    #header td { vertical-align: top; }
    .logo { display: flex; align-items: center; justify-content: center; width: 96px; height: 36px; border-radius: 6px; background: #141e2c; color: #fff; font-weight: 700; letter-spacing: 1px; }
    .grey-box { width: 8cm; margin-left: auto; padding: 1rem 1.25rem; border-radius: 1rem; background: #f0f1f6; }
    .title { font-size: 1rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }
    .meta { color: #666; font-size: 0.8rem; }
    .text-block { display: flex; flex-direction: column; gap: 0.75rem; }
    .agenda th { padding: 8px 4px; border-bottom: 1px solid #ddd; font-size: 0.7rem; text-align: left; text-transform: uppercase; }
    .agenda td { padding: 8px 4px; border-bottom: 1px solid #e5e5e5; font-size: 0.75rem; }
    .agenda .description td { color: #666; font-style: italic; }
    .col-number { text-align: right; }
    .total-row td { border-top: 1px solid #ddd; border-bottom: none; font-weight: 700; }
    .signature { page-break-inside: avoid; }
    .footer { display: flex; justify-content: space-between; padding-top: 8px; border-top: 1px solid #e4e5e7; color: #666; font-size: 0.7rem; }
    @media print { .agenda tr { break-inside: avoid; } }
  </style>
</head>
<body>
  <div class="page">
    <table id="header">
      <tbody>
        <tr>
          <td><div class="logo">LOGO</div></td>
          <td>
            <div class="grey-box" data-editable="building">
              <p><strong>Association of co-owners</strong></p>
              <p>${K(`Building name`)}</p>
              <p>${K(`Building address`)}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <div class="title">General meeting invitation</div>
      <div class="meta" data-editable="details">${K(`Meeting date`)} at ${K(`Meeting location`)}</div>
    </div>

    <div class="text-block" data-editable="intro">
      <p>${K(`Salutation`)} ${K(`First name`)} ${K(`Last name`)},</p>
      <p>I hereby take the liberty of inviting you to the ${K(`Meeting title`)} in accordance with BW art. 3.87 with the following agenda:</p>
    </div>

    <table class="agenda">
      <thead>
        <tr><th>#</th><th>Agenda item</th><th class="col-number">Required quota</th></tr>
      </thead>
      <tbody>
        ${K(`#each Data.AgendaItems`)}
        <tr>
          <td>${K(`Item.Number`)}</td>
          <td>${K(`Item.Title`)}</td>
          <td class="col-number">${K(`Item.RequiredQuota`)}</td>
        </tr>
        ${K(`#if Item.Description`)}
        <tr class="description">
          <td></td>
          <td colspan="2">${K(`Item.Description`)}</td>
        </tr>
        ${K(`/if`)}
        ${K(`/each`)}
        <tr class="total-row">
          <td colspan="2">Total quota</td>
          <td class="col-number">${K(`Data.TotalQuota`)}</td>
        </tr>
      </tbody>
    </table>

    <div class="text-block">
      ${K(`#if Data.QuorumReached`)}
      <p>The required quorum has been reached, so the meeting can decide validly.</p>
      ${K(`else`)}
      <p>If the quorum is not reached, the meeting is repeated after at least fourteen days.</p>
      ${K(`/if`)}
    </div>

    <div class="text-block">
      ${K(`#if Data.AllowsProxies`)}
      <div class="text-block" data-editable="proxies">
        <p>You can be represented by written proxy. In accordance with article 3.87, §7 BW, no one may accept more than 3 proxies.</p>
      </div>
      ${K(`/if`)}
    </div>

    <div class="text-block" data-editable="closing">
      <p>All documents can be reviewed by appointment at the syndic's office.</p>
    </div>

    <div class="signature">
      <p>Sincerely,</p>
      <p><strong>The syndic</strong></p>
    </div>

    <div class="footer">
      <span>Generated by Dobby${K(`#if Data.Building.VatNumber`)} · VAT ${K(`Data.Building.VatNumber`)}${K(`/if`)}</span>
      <span>Page 1 of 1</span>
    </div>
  </div>
</body>
</html>`,q=[`Building name`,`Building address`,`Meeting title`,`Meeting date`,`Meeting location`,`Salutation`,`First name`,`Last name`].map((e,t)=>({id:String(t),code:e,localizedName:e,localizedDescription:e})),J=`<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Minutes Cover Letter Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
        @page {
            size: A4;
            margin: 12mm 12mm 42mm 2cm;
        }

        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        * {
            margin: 0;
            padding: 0;
        }

        html,
        body {
            height: 100%;
            font-family: "roboto", sans-serif;
            color: #141e2c;
            font-size: 0.9rem;
        }

        body {
            line-height: 1.5;
            orphans: 3;
            widows: 3;
        }

        /* html and body styling are stripped by tiptap, so styles should be applied directly to each template's root element */
        #default-styling,
        #signature,
        .text-block,
        #letter-body,
        .invitation-agenda-items,
        .letter-body,
        .document-header,
        #letter-intro,
        #letter-body,
        .invitation-agenda-items,
        .minutes-wrapper,
        .meeting-details,
        .meeting-title .attendance-columns,
        #letter-body-bold,
        .container,
        #shared-footer,
        .header-container,
        #header {
            font-size: 0.9rem;
            line-height: 1.5;
        }

        img {
            display: block;
            max-width: 100%;
        }

        tag-node[hidden="true"] {
            display: none;
        }

        @media print {
            * {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
        }

        /* general classes */
        .word-break {
            word-break: break-word;
        }

        .bold-text {
            font-weight: bold;
        }

        .mw-700 {
            max-width: 700px;
        }

        .m-0 {
            margin: 0 !important;
        }

        .mb-10 {
            margin-bottom: 10px !important;
        }

        .ml-10 {
            margin-left: 10px !important;
        }

        .ml-15 {
            margin-left: 15px !important;
        }

        .pd-1rem {
            padding: 1rem !important;
        }

        .grey-box {
            background-color: #f0f1f6;
            border-radius: 1rem;
            padding: 1rem;
        }

        .text-block {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
        }

        .text-block p {
            margin: 0;
        }

        .text-section {
            display: flex;
            flex-direction: column;
            gap: 0.625rem;
        }

        .text-section p {
            margin: 0;
        }

        /* tables */
        table,
        table#header {
            width: 100%;
            table-layout: fixed;
            border-collapse: collapse;
            text-align: left;
        }

        /* header */
        #shared-header {
            gap: 20px;
        }

        #shared-header #shared-header-row {
            font-size: 1.2em;
            margin-bottom: 0;
            display: flex;
            justify-content: space-between;
        }

        #shared-header #shared-header-row th {
            display: flex;
            width: 100%;
        }

        #shared-header #shared-header-row th:last-child {
            justify-content: end;
        }

        #shared-header #header-logo {
            display: flex;
            flex: 0 1 auto;
            min-width: 0;
            padding-inline: 0.5rem;
            padding-right: 1.5rem;
            overflow: hidden;
        }

        #shared-header #header-logo img {
            width: auto;
            height: auto;
            max-width: 52mm;
            max-height: 28mm;
            object-fit: contain;
            object-position: left center;
            align-self: flex-start;
        }

        #shared-header #header-building {
            background-color: #f0f1f6;
            border-radius: 1rem;
            padding: 1.5rem 1.8rem;
            font-size: 0.9rem;
            font-weight: 300;
            line-height: 1.4em;
            margin-right: 1.3cm;
            width: 8.2cm;
        }

        #shared-header #header-building p:first-child {
            font-weight: 400;
        }

        th.section-header,
        td#title {
            font-size: 1rem;
        }

        td#title {
            font-weight: 700;
            text-transform: uppercase;
            padding-left: 0.5rem;
        }

        /* header from second page */
        .header-container {
            width: 100%;
            padding-bottom: 5px;
            margin-top: 4mm;
            text-align: center;
        }

        .second-page-header-title {
            font-size: 0.75rem;
            font-weight: 400;
            color: #141e2c;
        }

        /* footer */
        .footer-container {
            padding: 5px 12mm 0 12mm !important;
        }

        #shared-footer {
            font-size: 0.8rem;
        }

        #shared-footer #footer-main {
            margin-bottom: 1rem;
            border-top: 1px solid #e4e5e7;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            /* ? tekst begint bovenaan */
            gap: 1rem;
            padding: 0.5rem 1rem 0 0;
        }

        #shared-footer #footer-main td {
            width: 100%;
            margin-top: 0rem;
            vertical-align: top;
        }

        #shared-footer #footer-main #footer-left {
            display: flex;
            align-items: center;
            gap: 1ch;
            flex: 1 1 0;
        }

        #shared-footer #footer-main #footer-left img {
            height: 0.9em;
        }

        #shared-footer #footer-main #footer-center {
            text-align: center;
            flex: 1 1 0;
        }

        #shared-footer #footer-main #footer-right {
            text-align: right;
            flex: 1 1 0;
            white-space: nowrap;
        }

        #shared-footer p {
            margin: 0;
        }

        #shared-footer #footer-generated-by {
            text-align: center;
            font-size: 0.6rem;
            margin-top: 0.2rem;
            color: #141e2c;
        }

        #shared-footer #footer-main>div {
            width: 100%;
            margin-top: 0rem;
            vertical-align: top;
        }

        #signature {
            margin-top: 2rem;
            page-break-inside: avoid;
            break-inside: avoid;
        }

        #signature p {
            margin: 0;
            line-height: 1.5;
        }

        /* letter layout */
        #letter-intro {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: stretch;
            margin-top: 0.3rem;
            margin-bottom: 2rem;
        }

        #letter-meta {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
            flex: 1;
        }

        #letter-meta p {
            margin: 0;
        }

        #address-block {
            width: 8.2cm;
            border: 1px solid #e4e5e7;
            border-radius: 1rem;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 0.15rem;
            margin-top: 0.3cm;
            margin-left: auto;
            margin-right: 1.3cm;
            page-break-inside: avoid;
            break-inside: avoid;
        }

        #address-block p {
            margin: 0;
            line-height: 1.4;
        }

        /* Office address block (OfficeSettingHtmlTypeEnum.AddressBlock): every address line on its own line */
        #address-block .address-line {
            display: block;
        }

        /* Office address block: the registered label on the left, the frame (#address-block) on the right */
        #address-block-row {
            display: flex;
            align-items: flex-start;
        }

        /* At the height of the first line in the frame: the frame's margin-top + border + padding */
        #address-block-registered {
            font-weight: bold;
            font-size: 1rem;
            line-height: 1.4;
            margin-top: calc(0.3cm + 1px + 1rem);
        }

        /* Under the frame, ending at the right edge of the frame */
        #address-block-date {
            margin-top: 0.3cm;
            margin-right: 1.3cm;
            text-align: right;
        }

        /* Office address block in the envelope window (body.office-address-block, only on letters with the office address block).
            Positions from the top-left corner of the A4 page; the page area starts at 12mm from the top and 2cm from the left
            (@page), and ends at 198mm from the left. */
        /* The header out of the flow, at 13mm from the top: the address block doesn't depend on the height of the logo or the building box */
        .office-address-block #header {
            position: absolute;
            top: 1mm;
            left: 0;
        }

        /* Logo area: 20mm to 95mm from the left */
        .office-address-block #shared-header #header-logo {
            flex: 0 0 75mm;
            width: 75mm;
        }

        .office-address-block #shared-header #shared-header-row th:last-child {
            flex: 1 1 auto;
            width: auto;
        }

        /* Building box: aligned with the frame, 95mm to 190mm from the left, its text with the text in the frame (the frame's
            border + padding). At most 17mm high (13mm to 30mm), above the envelope window. What doesn't fit is cut. */
        .office-address-block #shared-header #header-building {
            width: 95mm;
            max-height: 17mm;
            overflow: hidden;
            margin-right: 8mm;
            padding: 2mm 1rem 2mm calc(1rem + 1px);
            font-size: 0.8rem;
            line-height: 1.4em;
        }

        /* The frame at 33mm from the top: its first line at 37mm (33mm + border 1px + padding 1rem). The registered label under it. */
        .office-address-block #address-block-row {
            flex-direction: column;
            align-items: flex-start;
            padding-top: 21mm;
        }

        /* Frame: 95mm to 190mm from the left */
        .office-address-block #address-block-row #address-block {
            width: 95mm;
            margin: 0 0 0 75mm;
        }

        /* Aligned with the text in the frame */
        .office-address-block #address-block-registered {
            margin-top: 2mm;
            margin-left: calc(75mm + 1px + 1rem);
        }

        .office-address-block #address-block-registered:empty {
            display: none;
        }

        /* Ending at the right edge of the frame */
        .office-address-block #address-block-date {
            margin-top: 2mm;
            margin-right: 8mm;
        }

        #info-block {
            width: 7cm;
            border: 1px solid #e4e5e7;
            border-radius: 1rem;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 0.15rem;
            margin-top: 0.3cm;
            margin-right: auto;
            page-break-inside: avoid;
            break-inside: avoid;
        }

        #info-block p {
            margin: 0;
            line-height: 1.4;
        }

        #letter-body {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-right: 1.3cm;
        }

        #letter-body p {
            margin: 0;
        }

        #letter-body-bold {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-right: 1.3cm;
            font-weight: bold;
        }

        #letter-body-bold p {
            margin: 0;
        }

        .document-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1em;
            margin-bottom: 0;
        }

        .document-title {
            font-weight: bold;
            font-size: 1rem;
            text-align: left;
        }

        .registered {
            font-weight: bold;
            font-size: 1rem;
            text-align: right;
            width: 8.2cm;
            margin-left: auto;
            margin-right: 1.3cm;
        }

        /* agenda items */
        .invitation-agenda-items {
            margin-right: 1.3cm;
        }

        .invitation-agenda-item {
            border-bottom: 1px solid #e4e5e7;
            padding-bottom: 0.3rem;
            margin-bottom: 0;
            break-inside: avoid;
            page-break-inside: avoid;
        }

        .invitation-agenda-item-header {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: baseline;
        }

        .invitation-agenda-item-number {
            white-space: nowrap;
            margin-right: 0.4rem;
            grid-column: 1;
            grid-row: 1;
        }

        .invitation-agenda-item-title {
            grid-column: 2;
            grid-row: 1;
        }

        .invitation-agenda-item-minimum-required {
            white-space: nowrap;
            grid-column: 3;
            grid-row: 1;
            text-align: right;
        }

        .invitation-agenda-item-description {
            margin: 0;
            grid-column: 2;
            grid-row: 2;
        }

        /* The agenda items as one table, a tbody per item (MeetingInvitationAgendaItemTable), laid out as the grid above */
        .invitation-agenda-item-table {
            width: 100%;
            border-collapse: collapse;
            table-layout: auto;
        }

        .invitation-agenda-item-table td {
            vertical-align: top;
            padding: 0;
        }

        .invitation-agenda-item-table td.invitation-agenda-item-number {
            width: 1%;
            padding-right: 0.2rem;
            font-weight: 500;
        }

        .invitation-agenda-item-table td.invitation-agenda-item-minimum-required {
            width: 1%;
            padding-left: 0.2rem;
        }

        .invitation-agenda-item-table td.invitation-agenda-item-title {
            width: auto;
            font-weight: 500;
        }

        /* An item isn't split over two pages */
        .invitation-agenda-item-table tbody.invitation-agenda-item-rows {
            break-inside: avoid;
            page-break-inside: avoid;
        }

        /* The line under an item, as .invitation-agenda-item */
        .invitation-agenda-item-table tr.invitation-agenda-item-last-row td {
            border-bottom: 1px solid #e4e5e7;
            padding-bottom: 0.3rem;
            color: #3d506b;
        }

        /* meeting attendance list */
        .attendance-columns {
            display: grid;
            grid-template-columns: fit-content(120px) 1fr;
            gap: 0.25rem 1rem;
            align-items: start;
            font-size: 0.75rem;
        }

        .container {
            width: 100%;
            background: #fff;
            padding: 0;
            margin-top: 1rem;
        }

        .meeting-title {
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 5px;
            letter-spacing: 0.5px;
        }

        .meeting-details {
            font-size: 0.75rem;
            color: #666;
            margin-bottom: 30px;
        }

        .container table {
            margin-bottom: 30px;
        }

        #attendance-thead {
            border-bottom: 1px solid #ddd;
            display: table-header-group;
        }

        #attendance-thead th {
            padding: 12px 4px;
            font-size: 0.7rem;
            font-weight: 600;
            text-transform: uppercase;
            color: #1a1a1a;
            letter-spacing: 0.5px;
            word-break: break-word;
        }

        .container td {
            font-size: 0.7rem;
            padding: 12px 4px;
            border-bottom: 1px solid #e5e5e5;
        }

        #attendance-thead th:first-child,
        .container td:first-child {
            padding-left: 0;
        }

        .col-quota {
            text-align: right;
        }

        .col-checkbox {
            text-align: center;
        }

        .col-signature p {
            font-size: 10px;
            text-align: center;
        }

        .col-signature img {
            display: block;
            margin: 0 auto;
        }

        .co-owner-name {
            font-weight: 400;
            color: #1a1a1a;
            margin-bottom: 3px;
        }

        .co-owner-address {
            color: #666;
            font-size: 0.7rem;
            white-space: nowrap;
            overflow: hidden;
        }

        .entities {
            color: #666;
            font-size: 0.7rem;
        }

        .checkbox {
            width: 14px;
            height: 14px;
            border: 1px solid #999;
            display: inline-block;
        }

        .checkbox.checked {
            background-color: #333;
            position: relative;
        }

        .checkbox.checked::after {
            content: '✓';
            color: #fff;
            position: absolute;
            top: -2px;
            left: 2px;
            font-size: 12px;
        }

        .signature-img {
            max-width: 80px;
            max-height: 30px;
        }

        .total-row,
        .total-row td {
            font-weight: 700;
            border-top: 1px solid #ddd;
            border-bottom: none;
            padding-top: 12px;
            padding-bottom: 4px;
        }

        .container hr {
            border: none;
            border-top: solid 1px #e5e5e5;
        }

        .container tbody tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            page-break-after: auto;
        }

        .container tbody tr.total-row {
            page-break-before: avoid !important;
            break-before: avoid !important;
            page-break-after: auto;
        }

        .container tbody tr:nth-last-child(2) {
            page-break-after: avoid !important;
        }

        @media print {
            .container tbody tr {
                page-break-inside: avoid !important;
                break-inside: avoid !important;
            }

            .container tbody tr.total-row {
                page-break-before: avoid !important;
                break-before: avoid !important;
            }

            .container tbody tr:nth-last-child(2) {
                page-break-after: avoid !important;
            }

            .container table {
                page-break-inside: auto;
            }

            #attendance-thead {
                display: table-header-group;
            }

            .container tfoot {
                display: table-footer-group;
            }
        }

        /* minutes items */
        .minutes-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .minutes-items {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .minutes-item {
            display: flex;
            flex-direction: column;
            margin-bottom: 12px;
            font-size: 0.75rem;
        }

        .minutes-item-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f0f1f6;
            border-radius: 1rem;
            padding: 0.83rem 1.5rem 0.70rem;
            margin-bottom: 0.5rem;
            break-after: avoid;
            page-break-after: avoid;
        }

        .minutes-item-title {
            margin: 0;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            line-height: 1;
        }

        .minutes-item-decision {
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            white-space: nowrap;
            line-height: 1;
        }

        .minutes-text {
            margin: 1rem 0;
            break-before: avoid;
            page-break-before: avoid;
        }

        .minutes-separator {
            border: none;
            border-top: 1px solid #e5e5e5;
            margin: 0.5rem 0;
        }

        .minutes-vote-summary {
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            gap: 0.15rem 1rem;
            break-inside: avoid;
            page-break-inside: avoid;
        }

        .votes-section {
            margin: 0;
        }

        .votes-label {
            font-weight: 700;
        }

        .votes-value {
            word-break: break-word;
        }

        .votes-list {
            list-style: disc;
            margin: 0;
            padding-left: 20px;
            line-height: 1;
        }

        .votes-list li {
            margin: 0;
            padding: 0;
            white-space: normal;
            line-height: 1.05;
        }

        .vote-participants {
            margin: 1px 0 0 20px;
            line-height: 1;
        }

        .vote-winner {
            color: green;
            font-weight: 600;
            text-decoration: underline;
        }

        .vote-results {
            width: calc(100% - 1.3cm);
            border-collapse: collapse;
            table-layout: fixed;
            margin-top: 4px;
            font-size: inherit;
        }

        .vote-results td {
            padding: 3px 0.75rem 3px 0;
            vertical-align: top;
        }

        .vote-results td.vote-type {
            font-weight: 600;
            white-space: nowrap;
            width: 90px;
        }

        .vote-results td.vote-count {
            white-space: nowrap;
            overflow: visible;
            width: 50px;
        }

        .vote-results td.vote-names {
            word-break: break-word;
        }

        .votes-results-block {
            break-inside: avoid;
            page-break-inside: avoid;
        }

        /* issue communication */
        .subject-block {
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 0.5rem;
            align-items: start;
        }

        .subject-content {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        .subject-content-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.25rem;
            align-items: baseline;
        }

        .greetings-inline {
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            gap: 0.25em;
        }

        .reply-instructions {
            border: 1px solid #C8D8F0;
            border-radius: 8px;
            background-color: #EEF4FF;
            padding: 12px;
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            font-size: 0.9em;
        }

        .reply-instructions td.reply-image {
            width: 55px;
            padding: 4px;
        }

        .reply-instructions td.reply-text {
            color: #5B8DEF;
            text-align: left;
        }

        .mail p {
            margin: 13px 0;
        }

        /* Office email footer: a table, not flex, for Outlook */
        .email-footer {
            border-collapse: collapse;
            margin-top: 16px;
        }

        .email-footer td {
            vertical-align: top;
            padding: 0 24px 0 0;
        }

        .email-footer td.email-footer-logo {
            vertical-align: middle;
        }

        .email-footer img {
            max-width: 120px;
            max-height: 80px;
        }

        .email-footer p {
            margin: 0 0 4px 0;
        }

        .email-footer-generated-by {
            margin-top: 16px;
            text-align: center;
            font-size: 0.8em;
            color: #5B6B8C;
        }
    </style>
</head>

<body>

    <div data-editable="before-agenda">
        <p id="letter-body-bold" style="display: block">Dear <tag-node label="Firstname receiver" value="ReceiverData.FirstName"></tag-node>
            <tag-node label="Name receiver" value="ReceiverData.Name"></tag-node>,
        </p>
        <br />
        <p id="letter-body" style="display: block">On behalf of the <strong>Co-owners' Association – <tag-node label="Building name" value="Data.Building.Name"></tag-node></strong>, we cordially invite you to the upcoming <tag-node label="Meeting type" value="localizedType Data.Meeting.MeetingType @root.CurrentLanguage"></tag-node>. This meeting will take place on <tag-node label="formatDateTime Data.Meeting.Date &quot;dddd d MMMM yyyy&quot; &quot;en-GB&quot;" value="formatDateTime Data.Meeting.Date &quot;dddd d MMMM yyyy&quot; &quot;en-GB&quot;"></tag-node> at <tag-node label="formatDateTime Data.Meeting.Date &quot;HH:mm&quot; &quot;en-GB&quot;" value="formatDateTime Data.Meeting.Date &quot;HH:mm&quot; &quot;en-GB&quot;"></tag-node>
            <tag-node label="If meeting has address" value="#if Data.Meeting.Address"></tag-node> at <tag-node label="Meeting address" value="Data.Meeting.Address"></tag-node>
            <tag-node label="end if " value="/if" hidden="true"></tag-node>.<tag-node label="If meeting has online participation link" value="#if Data.Meeting.RemoteMeetingLink" hidden="true"></tag-node> The online participation link is available via dobby.<tag-node label="end if " value="/if" hidden="true"></tag-node>
        </p>
        <br />
        <p id="letter-body">The meeting will proceed with the following agenda:</p>
    </div>

    <!-- READ only -->
    <div class="invitation-agenda-items">
        <table class="invitation-agenda-item-table" role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tag-node label="Foreach meeting item" value="#each Data.MeetingItems" hidden="true"></tag-node>
            <tag-node label="Meeting item in language" value="#with (localizedMeetingItem this @root.CurrentLanguage)" hidden="true"></tag-node>
            <tbody class="invitation-agenda-item-rows">
                <tr>
                    <td class="invitation-agenda-item-number">
                        <tag-node label="Meeting item number" value="../ItemNumber"></tag-node>.
                    </td>
                    <td class="invitation-agenda-item-title">
                        <tag-node label="Title in language" value="renderTags this.Title @root this.Language"></tag-node>
                    </td>
                    <td class="invitation-agenda-item-minimum-required">
                        <tag-node label="MeetingItem minimum required" value="minimumRequiredText ../MinimumRequired"></tag-node>
                    </td>
                </tr>
                <tr class="invitation-agenda-item-last-row">
                    <td></td>
                    <td class="invitation-agenda-item-description" colspan="2">
                        <tag-node label="Description in language" value="renderTags this.Description @root this.Language"></tag-node>
                    </td>
                </tr>
            </tbody>
            <tag-node label="end with" value="/with" hidden="true"></tag-node>
            <tag-node label="end each" value="/each" hidden="true"></tag-node>
        </table>
    </div>
    <!-- READ only -->

    <div data-editable="after-agenda">
        <p id="letter-body"><strong>Manage your participation via dobby:</strong></p>
        <p id="letter-body">To ensure the meeting runs smoothly, we kindly request you to use dobby. Via dobby, you can confirm your attendance in advance or assign a proxy. During the meeting, you can participate digitally and vote live, and subsequently sign the minutes.</p>
        <br />
        <p id="letter-body"><strong>Good to know:</strong></p>
        <ul style="padding-left: 20px; margin-right: 1.3cm">
            <li><strong>Valid Opening (Quorum):</strong> For a general meeting, at least 50% of the co-owners must be present or represented at the start of the meeting, together holding at least 50% of the shares (or the co-owners present must together hold at least 75% of the shares). If this is not the case, a second general meeting will be organized after at least fifteen days with the same agenda. This reconvened general meeting always opens legally, regardless of the number of co-owners present or shares represented.</li>
            <li><strong>Proxies:</strong> If you cannot attend, you can be represented via a proxy. Please note: a proxy holder may accept a maximum of 3 proxies, unless the total voting weight (including their own shares) remains below 10% of the total votes within the association. The property manager is legally not allowed to receive proxies.</li>
        </ul>
        <br />
        <p id="letter-body">We look forward to your attendance and to a successful meeting.</p>
        <br />

        <tag-node label="If there are attachments" value="#if (hasItems Batch.Attachments)" hidden="true"></tag-node>
        <p class="letter-body"><strong>Attachments to this invitation:</strong>
            <tag-node label="List of attachments" value="joinProperty Batch.Attachments &quot;FileName&quot;"></tag-node>
        </p>
        <tag-node label="end if " value="/if" hidden="true"></tag-node>
    </div>

</body>

</html>`})))()}var Je,Y,X,Ye,Xe,Ze,Qe,$e,et,tt,nt;function rt(){return(rt=e((()=>{N(),b(),Je=/^<tag-node\s+label="[^"]*"\s+value="[^"]*"[^>]*><\/tag-node>/i,Y=/<tag-node\b[^>]*>/gi,X=(e,t)=>{let n=RegExp(`\\s${t}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`,`i`).exec(e);return n?n[1]??n[2]:void 0},Ye=e=>e.replace(/&quot;/g,`"`).replace(/&#39;/g,`'`).replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&amp;/g,`&`),Xe=e=>{try{return{regions:M(e).map(e=>e.id)}}catch(e){return{regions:[],error:e instanceof Error?e.message:String(e)}}},Ze=e=>[...e.matchAll(Y)].filter(t=>!Je.test(e.slice(t.index))).map(e=>({snippet:e[0].slice(0,100),reason:`must look like <tag-node label="..." value="..."></tag-node>: label first, then value, no " in the label, and an end tag`})),Qe=e=>{let t=[],n=[];for(let r of e.matchAll(Y)){let e=X(r[0],`value`)?.trim()??``,i=X(r[0],`label`)?.trim(),a=i===void 0||i===``?e:i,o=C.exec(e);if(o){t.push({helper:o[1],label:a});continue}let s=S.exec(e);if(s){let e=t.length-1;for(;e>=0&&t[e].helper!==s[1];)--e;if(e<0){n.push(`${a}: no matching opener`);continue}t.splice(e+1).forEach(e=>{n.push(`${e.label}: never closed`)}),t.pop()}else w.test(e)&&t.length===0&&n.push(`${a}: else outside a block`)}return t.forEach(e=>n.push(`${e.label}: never closed`)),n},$e=e=>{let t=e;for(let n of[...M(e)].reverse())t=t.slice(0,n.start)+t.slice(n.end);return t},et=(e,t)=>$e(e)===$e(t),tt=(e,t)=>{let n=e=>new Map(M(e).map(e=>[e.id,e.html])),r=n(e),i=n(t);return[...new Set([...r.keys(),...i.keys()])].filter(e=>r.get(e)!==i.get(e))},nt=e=>{let t=new Map;for(let n of e.matchAll(Y)){let e=X(n[0],`value`);if(e===void 0)continue;let r=Ye(e).trim();C.test(r)||S.test(r)||w.test(r)||t.has(r)||t.set(r,{code:r,label:Ye(X(n[0],`label`)??r)})}return[...t.values()]}})))()}var Z,Q,it,at,ot,st,ct,lt,ut,$,dt,ft,pt;function mt(){return(mt=e((()=>{h(),qe(),Ge(),rt(),r(),m(),Z=t(),Q=l(),it={component:G},at={getRows(e){e.successCallback(q.slice(e.startRow,e.endRow),q.length)}},ot=e=>({getRows(t){t.successCallback(e.slice(t.startRow,t.endRow),e.length)}}),st=e=>({image:!0,tagSelector:{tags:e,datasource:ot(e),pageSize:e.length,totalCount:e.length},extraActions:(0,Q.jsx)(g,{variant:`ghost`,size:`sm`,prefix:(0,Q.jsx)(f,{}),onPress:()=>alert(`Open the preview here`),children:`Preview`})}),ct=e=>{let[t,n]=(0,Z.useState)(e.template);return(0,Q.jsxs)(`div`,{className:`flex flex-col gap-4 min-w-[800px]`,children:[(0,Q.jsx)(G,{...e,template:t,onChange:n}),(0,Q.jsxs)(`details`,{children:[(0,Q.jsx)(`summary`,{className:`cursor-pointer text-sm font-medium`,children:`Template HTML`}),(0,Q.jsx)(`pre`,{className:`text-xs bg-neutral-800/10 p-2 rounded-sm whitespace-pre-wrap`,children:t})]})]})},lt={args:{template:Ke,toolbarOptions:{image:!0,tagSelector:{tags:q,datasource:at,pageSize:q.length,totalCount:q.length}}},render:ct},ut=500,$=({ok:e,title:t,help:n,children:r})=>(0,Q.jsxs)(`li`,{className:`flex gap-2 text-sm`,children:[(0,Q.jsx)(`span`,{"aria-hidden":!0,className:`w-4 shrink-0 font-bold`,children:e===void 0?`•`:e?`✓`:`✗`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`font-medium`,children:t}),n&&(0,Q.jsx)(i,{content:n,customTrigger:!0,children:(0,Q.jsx)(`span`,{"aria-label":n,className:`ml-1 inline-flex align-middle text-neutral-700`,tabIndex:0,children:(0,Q.jsx)(p,{className:`size-4`})})}),r&&(0,Q.jsx)(`div`,{className:`text-xs text-neutral-700`,children:r})]})]}),dt=()=>{let[e,t]=(0,Z.useState)(J),[n,r]=(0,Z.useState)(J),[i,a]=(0,Z.useState)(J),[o,s]=(0,Z.useState)(0),[c,l]=(0,Z.useState)();(0,Z.useEffect)(()=>{if(e===n)return;let t=setTimeout(()=>{r(e),a(e),s(e=>e+1)},ut);return()=>clearTimeout(t)},[e,n]);let u=(0,Z.useMemo)(()=>Xe(n),[n]),d=(0,Z.useMemo)(()=>Ze(n),[n]),f=(0,Z.useMemo)(()=>Qe(n),[n]),p=(0,Z.useMemo)(()=>nt(n).map((e,t)=>({id:String(t),code:e.code,localizedName:e.label,localizedDescription:e.label})),[n]),m=(0,Z.useMemo)(()=>st(p),[p]),h=i!==n,_=!u.error&&h,v=_?et(n,i):void 0,y=_?tt(n,i):[];return(0,Q.jsxs)(`div`,{className:`flex flex-col gap-4 min-w-[800px]`,children:[(0,Q.jsx)(`p`,{className:`text-sm`,children:`Paste the HTML your backend generates. It is loaded into the editor below once you stop typing, and checked against what the editor and the backend converter expect.`}),(0,Q.jsx)(`textarea`,{"aria-label":`Template HTML to test`,className:`w-full h-48 p-2 font-mono text-xs border border-neutral-300 rounded-sm`,spellCheck:!1,value:e,onChange:e=>t(e.target.value)}),(0,Q.jsx)(`div`,{children:(0,Q.jsx)(g,{size:`sm`,variant:`secondary`,onPress:()=>t(J),children:`Revert to example`})}),(0,Q.jsxs)(`ul`,{className:`flex flex-col gap-2 p-3 border border-neutral-200 rounded-md`,children:[(0,Q.jsx)($,{ok:u.error===void 0&&u.regions.length>0,title:`Editable regions`,children:u.error??(u.regions.length>0?u.regions.join(`, `):`None found: nothing in this template is editable (no data-editable element).`)}),(0,Q.jsx)($,{ok:d.length===0,title:`Tag nodes the backend can convert back`,children:d.slice(0,5).map(e=>(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`code`,{children:e.snippet}),`: `,e.reason]},e.snippet))}),(0,Q.jsx)($,{ok:f.length===0,title:`Block markers are paired`,children:f.length>0?f.join(`; `):`Not checked: that an opener and its closer share a parent element. A pair that does not is shown as plain tags.`}),(0,Q.jsx)($,{ok:v,title:`Outside the regions the template is unchanged by the editor`,children:v===void 0?`Edit a region to check this.`:v?void 0:`The editor changed something outside the editable regions: please report this.`}),(0,Q.jsx)($,{title:`Regions parsed by the editor`,help:`The regions whose HTML differs from what you pasted. The editor normalises the content of a region when it loads it (for example it adds a style to paragraphs and lists, and hides block markers), so a region can be listed without anyone having typed in it. It is information, not an error: it shows which regions the backend gets back in a different form than it sent them.`,children:_?y.length>0?y.join(`, `):`None.`:`Edit a region to see which ones the editor rewrote.`})]}),u.error?(0,Q.jsxs)(`div`,{role:`alert`,className:`p-3 text-sm border border-red-300 rounded-md bg-red-50 text-red-900`,children:[`The template cannot be loaded into the editor: `,u.error]}):(0,Q.jsx)(G,{reportNormalisation:!0,template:i,onChange:a,toolbarOptions:m},o),(0,Q.jsxs)(`details`,{children:[(0,Q.jsx)(`summary`,{className:`cursor-pointer text-sm font-medium`,children:`Template HTML as the editor returns it`}),(0,Q.jsxs)(`div`,{className:`flex items-center gap-2 my-2`,children:[(0,Q.jsx)(g,{variant:`secondary`,onPress:()=>{navigator.clipboard.writeText(i).then(()=>l(i)).catch(()=>l(void 0))},children:`Copy as the editor writes it`}),(0,Q.jsx)(`span`,{className:`text-xs text-neutral-700`,children:c===i?`Copied.`:`Use it as the input: the editor then leaves the regions as they are.`})]}),(0,Q.jsx)(`pre`,{className:`text-xs bg-neutral-800/10 p-2 rounded-sm whitespace-pre-wrap`,children:i})]})]})},ft={args:{template:J},render:()=>(0,Q.jsx)(dt,{})},pt=[`Default`,`BackendOutputTest`]})))()}mt();export{ft as BackendOutputTest,lt as Default,pt as __namedExportsOrder,it as default};