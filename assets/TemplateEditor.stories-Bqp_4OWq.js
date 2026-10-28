import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BbeNlDUO.js";import{t as n}from"./react-dom-DvEEGbPc.js";import{n as r,t as i}from"./useTranslation-Du5dcnMR.js";import{i as a,t as o}from"./utils-TgsCZh5h.js";import{t as s}from"./jsx-runtime-BB9-612F.js";import{c,t as l}from"./dist-DLE_H5Rv.js";import{n as u,t as d}from"./Dialog-C0wsIP_1.js";import{n as f,t as ee}from"./RichTextEditor-CYrDelY4.js";import{n as p,t as te}from"./EditorToolbar-9eOS9eQg.js";var m,h,g,_,v;function y(){return(y=e((()=>{m=t(),h=s(),g=6,_=(e,t,n)=>{let r=e.getBoundingClientRect(),i=e.offsetWidth?r.width/e.offsetWidth:1,a=e.offsetHeight?r.height/e.offsetHeight:1,o=t=>(t-r.left)/i-e.clientLeft+e.scrollLeft,s=t=>(t-r.top)/a-e.clientTop+e.scrollTop,c=e.clientWidth,l=Number.parseFloat(getComputedStyle(e).paddingBottom),u=Math.max(e.clientHeight,s(t.getBoundingClientRect().top)+t.scrollHeight+(Number.isNaN(l)?0:l));return{width:c,height:u,holes:n.map(e=>{let t=e.getBoundingClientRect(),n=Math.max(o(t.left)-6,0),r=Math.max(s(t.top)-6,0),i=Math.min(o(t.right)+6,c),a=Math.min(s(t.bottom)+6,u),l=Number.parseFloat(getComputedStyle(e).borderTopLeftRadius);return{x:n,y:r,width:i-n,height:a-r,radius:Math.max(Number.isNaN(l)?0:l,g)+6}})}},v=({container:e,content:t,regions:n,className:r})=>{let[i,a]=(0,m.useState)(null),o=`locked-overlay-${(0,m.useId)().replace(/[^a-zA-Z0-9_-]/g,``)}`;if((0,m.useEffect)(()=>{if(!e||!t)return;let r=()=>a(_(e,t,n)),i=new ResizeObserver(r);return i.observe(e),i.observe(t),n.forEach(e=>i.observe(e)),window.addEventListener(`resize`,r),()=>{i.disconnect(),window.removeEventListener(`resize`,r)}},[e,t,n]),!i)return null;let{width:s,height:c,holes:l}=i;return(0,h.jsx)(`div`,{"aria-hidden":!0,className:`pointer-events-none absolute top-0 left-0 overflow-hidden`,style:{width:`100%`,height:c,borderRadius:`inherit`},children:(0,h.jsxs)(`svg`,{className:r,width:s,height:c,children:[(0,h.jsxs)(`mask`,{id:o,children:[(0,h.jsx)(`rect`,{width:s,height:c,fill:`white`}),l.map((e,t)=>{let n=Math.min(e.radius,e.width/2,e.height/2);return(0,h.jsx)(`rect`,{x:e.x,y:e.y,width:e.width,height:e.height,rx:n,fill:`black`},t)})]}),(0,h.jsx)(`rect`,{width:s,height:c,fill:`currentColor`,mask:`url(#${o})`})]})})};try{6 .displayName=`PADDING`,6 .__docgenInfo={description:`How many pixels each cut-out extends beyond its region.`,displayName:`PADDING`,filePath:`/home/runner/work/components-ui-lib/components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,methods:[],props:{},tags:{}}}catch{}try{v.displayName=`LockedOverlay`,v.__docgenInfo={description:`Covers a container with a translucent layer that has the shape of each region cut out,
so everything that is not editable looks greyed out. Clicks pass through the overlay.
The cut-outs follow the regions when they grow, shrink or move.`,displayName:`LockedOverlay`,filePath:`/home/runner/work/components-ui-lib/components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,methods:[],props:{container:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`}],description:"The element the overlay covers. It must be `position: relative`.",name:`container`,parent:{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`},required:!0,tags:{},type:{name:`HTMLElement | null`}},content:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`}],description:`The content inside the container. Its height decides how far the overlay reaches.`,name:`content`,parent:{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`},required:!0,tags:{},type:{name:`HTMLElement | null`}},regions:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`}],description:`The elements that are cut out of the overlay.`,name:`regions`,parent:{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`},required:!0,tags:{},type:{name:`HTMLElement[]`}},className:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`}],description:``,name:`className`,parent:{fileName:`components-ui-lib/src/components/TemplateEditor/LockedOverlay.tsx`,name:`LockedOverlayProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var b,x,S,C,w,T,E,D,O,k,ne;function A(){return(A=e((()=>{b=/\sdata-editable(?![\w:-])(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/i,x=new Set([`area`,`base`,`br`,`col`,`embed`,`hr`,`img`,`input`,`link`,`meta`,`source`,`track`,`wbr`]),S=new Set([`script`,`style`,`textarea`,`title`]),C=e=>e>=65&&e<=90||e>=97&&e<=122,w=e=>C(e)||e>=48&&e<=57||e===95||e===58||e===45,T=(e,t)=>{let n=t+1,r=e[n]===`/`;if(r&&(n+=1),!C(e.charCodeAt(n)))return;let i=n;for(;w(e.charCodeAt(n));)n+=1;let a=n;for(;n<e.length&&e[n]!==`>`;){let t=e[n];if(t===`"`||t===`'`){let r=e.indexOf(t,n+1);if(r===-1)return null;n=r+1}else n+=1}return n>=e.length?null:{index:t,end:n+1,closing:r,name:e.slice(i,a),attrs:e.slice(a,n),selfClosing:e[n-1]===`/`}},E=(e,t)=>{let n=e.indexOf(`<`,t);for(;n!==-1;){if(e.startsWith(`<!--`,n)){let t=e.indexOf(`-->`,n+4);if(t===-1)return null;n=e.indexOf(`<`,t+3);continue}let t=T(e,n);if(t===null)return null;if(t)return t;n=e.indexOf(`<`,n+1)}return null},D=(e,t,n)=>{let r=RegExp(`</${t}\\s*>`,`gi`);r.lastIndex=n;let i=r.exec(e);return i?i.index:e.length},O=(e,t,n)=>{let r=1,i=n;for(let n=E(e,i);n;n=E(e,i)){i=n.end;let a=n.name.toLowerCase();if(a!==t)!n.closing&&S.has(a)&&!n.selfClosing&&(i=D(e,a,n.end));else if(n.closing){if(--r,r===0)return n.index}else n.selfClosing||(r+=1)}return-1},k=e=>{let t=[],n=new Set,r=0;for(let i=E(e,r);i;i=E(e,r)){if(r=i.end,i.closing)continue;let a=i.name.toLowerCase();if(S.has(a)&&!i.selfClosing){r=D(e,a,i.end);continue}let o=b.exec(i.attrs);if(!o)continue;if(x.has(a)||i.selfClosing)throw Error(`Editable element <${a}> must have content and a closing tag.`);let s=o[1]??o[2]??o[3],c=s===void 0||s===``?`region-${t.length}`:s;if(n.has(c))throw Error(`Duplicate data-editable region "${c}".`);n.add(c);let l=i.end,u=O(e,a,l);if(u===-1)throw Error(`Editable element <${a}> "${c}" is not closed.`);t.push({id:c,html:e.slice(l,u),start:l,end:u}),r=u}return t},ne=(e,t)=>{let n=k(e),r=e;for(let e of[...n].reverse()){let n=t[e.id];n!==void 0&&(r=r.slice(0,e.start)+n+r.slice(e.end))}return r}})))()}var j,M,re,N,P,F,ie,I,ae,oe,se,L,R,z,B,V;function H(){return(H=e((()=>{A(),j=/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi,M=/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi,re=/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi,N=/\{\{~?(?:[#/^]|else\b)[^}]*\}\}/g,P=/\ssrc\s*=\s*(?:"[^"]*&lt;tag-node[^"]*"|'[^']*&lt;tag-node[^']*')/gi,F=/<body\b[^>]*>([\s\S]*)<\/body\s*>/i,ie=/<head\b[^>]*>[\s\S]*?<\/head\s*>/i,I=/@font-face\s*\{[^}]*\}/gi,ae=/@page[^{]*\{[^}]*\}/gi,oe=/@(?:import|charset)\b[^;]*;/gi,se=/(^|[},\s])(?:html|body)(?=[\s,{.:#[>+~])/gi,L=new Set([`table`,`thead`,`tbody`,`tfoot`]),R=(e,t)=>e?.name===`tag-node`&&e.closing===t,z=e=>{let t=[];for(let n=E(e,0);n;n=E(e,n.end))t.push(n);let n=(t,n)=>e.slice(t,n).trim()===``,r=``,i=0,a=0;for(;a<t.length;){let o=a-1;for(;R(t[o+1],!1)&&R(t[o+2],!0)&&n(t[o+1].end,t[o+2].index)&&(o<a||n(t[o].end,t[o+1].index));)o+=2;if(o<a){a+=1;continue}let s=t[a-1],c=t[o+1],l=s!==void 0&&(!s.closing&&L.has(s.name.toLowerCase())||s.closing&&s.name.toLowerCase()===`tr`)&&n(s.end,t[a].index),u=c!==void 0&&(!c.closing&&c.name.toLowerCase()===`tr`||c.closing&&L.has(c.name.toLowerCase()))&&n(t[o].end,c.index);l&&u&&(r+=e.slice(i,t[a].index),r+=`<tr class="tpl-control"><td>${e.slice(t[a].index,t[o].end)}</td></tr>`,i=t[o].end),a=o+1}return r+e.slice(i)},B=e=>{let t=e;for(let n of[...k(e)].reverse())t=t.slice(0,n.start)+t.slice(n.end);let n=[];t=t.replace(j,(e,t)=>(n.push(t),``));let r=F.exec(t);t=r?r[1]:t.replace(ie,``);let i=t.replace(N,``).replace(P,``).replace(M,``).replace(re,``);return{html:z(i),css:n.join(`
`)}},V=(e,t)=>{let n=e.match(I)??[],r=e.replace(I,``).replace(ae,``).replace(oe,``).replace(se,`$1&`);return`${n.join(`
`)}\n.${t} {\n${r}\n}`}})))()}var U,W,G,K,q,J,Y;function ce(){return(ce=e((()=>{u(),p(),f(),y(),A(),H(),a(),U=t(),W=n(),i(),l(),G=s(),K=(e,t,n)=>{let r=e.view.posAtCoords({left:t,top:n});if(r){e.chain().focus().setTextSelection(r.pos).run();return}let{top:i}=e.view.dom.getBoundingClientRect();e.commands.focus(n<i?`start`:`end`)},q=new WeakMap,J=({template:e,onChange:t,className:n,dimLocked:r=!0,fullscreen:i=!1,onToggleFullscreen:a,...s})=>{let c=`tpl-${(0,U.useId)().replace(/:/g,``)}`,l=(0,U.useMemo)(()=>k(e),[e]),u=(0,U.useMemo)(()=>l.map(e=>e.id),[l]),d=(0,U.useMemo)(()=>B(e),[e]),f=(0,U.useMemo)(()=>V(d.css,c),[d.css,c]),[p,m]=(0,U.useState)(null),h=p?.element??null,g=d.html,_=(0,U.useCallback)(e=>{e&&q.get(e)!==g&&(e.innerHTML=g,q.set(e,g)),m(e&&{element:e})},[g]),y=(0,U.useMemo)(()=>{let e={},t=p?.element.querySelectorAll(`[data-editable]`);return u.forEach((n,r)=>{let i=t?.[r],a=i?.getAttribute(`data-editable`),o=a===null||a===``?`region-${r}`:a;i&&o===n&&(e[n]=i)}),e},[p,u]),[b,x]=(0,U.useState)(null),S=(0,U.useMemo)(()=>u.flatMap(e=>y[e]??[]),[u,y]),C=(0,U.useRef)({}),[w,T]=(0,U.useState)(null),E=(0,U.useCallback)(e=>T(t=>t&&!t.isDestroyed?t:e),[]),D=(0,U.useRef)(e);(0,U.useEffect)(()=>{D.current=e},[e]);let O=(0,U.useCallback)((e,n)=>{let r=ne(D.current,{[e]:n});r!==D.current&&(D.current=r,t?.(r))},[t]),A=(0,U.useCallback)(e=>{if(e.target.closest(`.ProseMirror`))return;let t=r?6:0,n;for(let r of u){let i=y[r]?.getBoundingClientRect();if(!i)continue;let a=t=>e.clientX>=i.left-t&&e.clientX<=i.right+t&&e.clientY>=i.top-t&&e.clientY<=i.bottom+t;if(a(0)){n=r;break}a(t)&&(n??=r)}let i=n===void 0?void 0:C.current[n];i&&!i.isDestroyed&&(e.preventDefault(),K(i,e.clientX,e.clientY))},[r,u,y]),j=(s.disabled??!1)||(s.readonly??!1);return(0,G.jsxs)(`div`,{className:o(`flex flex-col`,i&&`flex-1 min-h-0`,n),"aria-label":`template-editor`,children:[(0,G.jsx)(`style`,{children:f}),(0,G.jsx)(`style`,{children:`
        .${c} [data-editable] { cursor: text; }
        .${c} tag-node:not([data-editable] tag-node) { align-self: flex-start; background: #e5e7eb; border-radius: 10px; padding: 0 0.5em; }
        .${c} tag-node:not([data-editable] tag-node)::before { content: attr(label); }
        .${c} tag-node:is([label^="#"], [label^="/"], [label="else"]):not([data-editable] tag-node) { background: transparent; border: 1px dashed #94a3b8; color: #64748b; }
        .${c} tr.tpl-control > td { padding: 2px 4px !important; border: none !important; background: none !important; white-space: nowrap; }
      `}),w&&!w.isDestroyed&&(0,G.jsx)(`div`,{className:`sticky top-0 z-10`,children:(0,G.jsx)(te,{editor:w,options:s.toolbarOptions,disabled:j,fullscreen:i,onToggleFullscreen:a})}),(0,G.jsxs)(`div`,{ref:x,onMouseDown:A,className:o(`relative bg-control text-foreground border border-neutral-200 rounded-b-sm p-2`,i&&`flex-1 min-h-0 overflow-y-auto`),children:[(0,G.jsx)(`div`,{ref:_,className:c,"aria-label":`template-content`},d.html),r&&(0,G.jsx)(v,{container:b,content:h,regions:S,className:`text-neutral-900/10`})]}),u.map(e=>{let t=y[e];return t?(0,W.createPortal)((0,G.jsx)(ee,{...s,blendContent:!0,hideToolbar:!0,resizable:!1,value:l.find(t=>t.id===e)?.html??``,onChange:t=>O(e,t),onEditorReady:t=>{C.current[e]=t,E(t)},onEditorFocus:T}),t,e):null})]})},Y=e=>{let{t}=r(`components`),[n,i,a]=c(!1);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(J,{...e,onToggleFullscreen:i}),(0,G.jsx)(d,{isOpen:n,onOpenChange:a,size:`fill`,"aria-label":t(`TemplateEditor.ariaLabel`,`Template editor`),children:(0,G.jsx)(d.Body,{scroll:`none`,children:(0,G.jsx)(J,{...e,fullscreen:!0,onToggleFullscreen:i})})})]})};try{Y.displayName=`TemplateEditor`,Y.__docgenInfo={description:"Edits the `data-editable` parts of a full html document.\n\nThe template is shown inside one framed editor with a single toolbar shared by all\neditable regions, and can be opened fullscreen. It is a controlled component: feed\nthe `onChange` result back into `template`.",displayName:`TemplateEditor`,filePath:`/home/runner/work/components-ui-lib/components-ui-lib/src/components/TemplateEditor/TemplateEditor.tsx`,methods:[],props:{disabled:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Whether the editor and toolbar should be disabled`,name:`disabled`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},resizable:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Wether the content container should be resizable`,name:`resizable`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{Default:`true`},type:{name:`boolean`}},toolbarOptions:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`configuration object for setting the available toolbar options`,name:`toolbarOptions`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`EditorToolbarOptions`}},pageView:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Enables paper like page view`,name:`pageView`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},readonly:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Makes the editor read-only`,name:`readonly`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},spellcheckLanguage:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Language to use for spellchecking. Falls back to the current i18n language if not provided`,name:`spellcheckLanguage`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`SpellcheckLanguage`,value:[{value:`"fr"`},{value:`"en"`},{value:`"nl"`}]}},spellcheckEnabled:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Whether to enable spellchecking`,name:`spellcheckEnabled`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{Default:`true`},type:{name:`boolean`}},contentStyle:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Custom CSS styles to apply to the content area`,name:`contentStyle`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`string`}},disableContentPaste:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Disable pasting content`,name:`disableContentPaste`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},disableImagePaste:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Disable pasting images`,name:`disableImagePaste`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},disableContentDrop:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Disable dragging and dropping content`,name:`disableContentDrop`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},disableTrailingNode:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Disable adding a trailing node`,name:`disableTrailingNode`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},pasteWithoutFormatting:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`}],description:`Strip inline formatting from pasted content while keeping html structure`,name:`pasteWithoutFormatting`,parent:{fileName:`components-ui-lib/src/components/RichTextEditor/RichTextEditorBase.tsx`,name:`RichTextEditorBaseProps`},required:!1,tags:{},type:{name:`boolean`}},template:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/TemplateEditor.tsx`,name:`TypeLiteral`}],description:"The full html document. Elements marked with `data-editable` become editable regions.",name:`template`,required:!0,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/TemplateEditor.tsx`,name:`TypeLiteral`}],description:`Called with the full html document (template + edited regions) whenever a region changes.`,name:`onChange`,required:!1,tags:{},type:{name:`((template: string) => void)`}},className:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/TemplateEditor.tsx`,name:`TypeLiteral`}],description:`The className of the element wrapping the toolbar and the template`,name:`className`,required:!1,tags:{},type:{name:`string`}},dimLocked:{defaultValue:{value:`true`},declarations:[{fileName:`components-ui-lib/src/components/TemplateEditor/TemplateEditor.tsx`,name:`TypeLiteral`}],description:`Covers everything that is not editable with a gray overlay, so the editable regions
stand out`,name:`dimLocked`,required:!1,tags:{Default:`true`},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var le,X,ue,Z,de,Q,fe,$,pe;function me(){return(me=e((()=>{ce(),le=t(),X=s(),ue={component:Y},Z=e=>`<tag-node label="${e}" value="${e}"></tag-node>`,de=`<!DOCTYPE html>
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
              <p>${Z(`Building name`)}</p>
              <p>${Z(`Building address`)}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <div class="title">General meeting invitation</div>
      <div class="meta" data-editable="details">${Z(`Meeting date`)} at ${Z(`Meeting location`)}</div>
    </div>

    <div class="text-block" data-editable="intro">
      <p>${Z(`Salutation`)} ${Z(`First name`)} ${Z(`Last name`)},</p>
      <p>I hereby take the liberty of inviting you to the ${Z(`Meeting title`)} in accordance with BW art. 3.87 with the following agenda:</p>
    </div>

    <table class="agenda">
      <thead>
        <tr><th>#</th><th>Agenda item</th><th class="col-number">Required quota</th></tr>
      </thead>
      <tbody>
        ${Z(`#each Data.AgendaItems`)}
        <tr>
          <td>${Z(`Item.Number`)}</td>
          <td>${Z(`Item.Title`)}</td>
          <td class="col-number">${Z(`Item.RequiredQuota`)}</td>
        </tr>
        ${Z(`#if Item.Description`)}
        <tr class="description">
          <td></td>
          <td colspan="2">${Z(`Item.Description`)}</td>
        </tr>
        ${Z(`/if`)}
        ${Z(`/each`)}
        <tr class="total-row">
          <td colspan="2">Total quota</td>
          <td class="col-number">${Z(`Data.TotalQuota`)}</td>
        </tr>
      </tbody>
    </table>

    <div class="text-block">
      ${Z(`#if Data.QuorumReached`)}
      <p>The required quorum has been reached, so the meeting can decide validly.</p>
      ${Z(`else`)}
      <p>If the quorum is not reached, the meeting is repeated after at least fourteen days.</p>
      ${Z(`/if`)}
    </div>

    <div class="text-block">
      ${Z(`#if Data.AllowsProxies`)}
      <div class="text-block" data-editable="proxies">
        <p>You can be represented by written proxy. In accordance with article 3.87, §7 BW, no one may accept more than 3 proxies.</p>
      </div>
      ${Z(`/if`)}
    </div>

    <div class="text-block" data-editable="closing">
      <p>All documents can be reviewed by appointment at the syndic's office.</p>
    </div>

    <div class="signature">
      <p>Sincerely,</p>
      <p><strong>The syndic</strong></p>
    </div>

    <div class="footer">
      <span>Generated by Dobby${Z(`#if Data.Building.VatNumber`)} · VAT ${Z(`Data.Building.VatNumber`)}${Z(`/if`)}</span>
      <span>Page 1 of 1</span>
    </div>
  </div>
</body>
</html>`,Q=[`Building name`,`Building address`,`Meeting title`,`Meeting date`,`Meeting location`,`Salutation`,`First name`,`Last name`].map((e,t)=>({id:String(t),code:e,localizedName:e,localizedDescription:e})),fe={getRows(e){e.successCallback(Q.slice(e.startRow,e.endRow),Q.length)}},$={args:{template:de,toolbarOptions:{image:!0,tagSelector:{tags:Q,datasource:fe,pageSize:Q.length,totalCount:Q.length}}},render:e=>{let[t,n]=(0,le.useState)(e.template);return(0,X.jsxs)(`div`,{className:`flex flex-col gap-4 min-w-[800px]`,children:[(0,X.jsx)(Y,{...e,template:t,onChange:n}),(0,X.jsxs)(`details`,{children:[(0,X.jsx)(`summary`,{className:`cursor-pointer text-sm font-medium`,children:`Template HTML`}),(0,X.jsx)(`pre`,{className:`text-xs bg-neutral-800/10 p-2 rounded-sm whitespace-pre-wrap`,children:t})]})]})}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    template,
    toolbarOptions: {
      image: true,
      tagSelector: {
        tags,
        datasource,
        pageSize: tags.length,
        totalCount: tags.length
      }
    }
  },
  render: args => {
    const [value, setValue] = useState(args.template);
    return <div className="flex flex-col gap-4 min-w-[800px]">
        <TemplateEditor {...args} template={value} onChange={setValue} />
        <details>
          <summary className="cursor-pointer text-sm font-medium">
            Template HTML
          </summary>
          <pre className="text-xs bg-neutral-800/10 p-2 rounded-sm whitespace-pre-wrap">
            {value}
          </pre>
        </details>
      </div>;
  }
}`,...$.parameters?.docs?.source}}},pe=[`Default`]})))()}me();export{$ as Default,pe as __namedExportsOrder,ue as default};