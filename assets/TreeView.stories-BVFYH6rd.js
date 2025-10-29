import{r as f,j as o,c as C,p as H}from"./iframe-Ff2s0Wa7.js";import{i as Ve,t as Re,h as Ze,e as en,z as nn,a as tn,b as rn}from"./Task-CTXJlofK.js";import{s as an}from"./Dashboard-CmqBTKyU.js";import{o as ln}from"./Description-C5Wabggh.js";import{C as on}from"./Checkbox-BlpeXcLe.js";import{g as sn}from"./index-LRkyAUEd.js";import{T as Me}from"./Tooltip-DgWsh440.js";import{i as cn}from"./ChevronForward-BG8bFhk2.js";import{$ as dn}from"./Button-CQGhT4Ij.js";import{A as fn,a as un,d as pn,b as hn,c as mn}from"./Accordion-B93_QnvQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Check-DAAZZgS-.js";import"./CheckIndeterminateSmall-CU2i2Bza.js";import"./RSPContexts-j2BU7Axl.js";import"./utils-DedG9-wU.js";import"./Form-jJBjopWq.js";import"./usePress-BYqqMwsO.js";import"./index-C1nCaLjx.js";import"./index-xi8jNSPF.js";import"./useToggleState-Z_ps1LuL.js";import"./useFormReset-dLaDw7ax.js";import"./VisuallyHidden-BtKN2TbE.js";import"./Hidden-DeoHi4c3.js";import"./FocusScope-DjT-hP5n.js";import"./Separator-DyvklDdo.js";import"./Text-Cg-gjy63.js";import"./KeyboardArrowDown-Dwp97ofS.js";import"./index-DxjM8jOk.js";const qe=(e,n)=>{e.length&&e.forEach(t=>{const r=n[t].children;n[t].selected=r.filter(i=>!n[i].children.length).reduce((i,a,l)=>{const c=n[a].selected;return l===0?c:["indeterminate",c].includes(i)?i:"indeterminate"},!1)})},We=(e,n={existingTreeViewData:{flatItems:{},state:{}},defaults:{selection:[],expanded:!1}},t={flatItems:{},state:{}},r)=>e.reduce((i,a)=>{var h,b,_,I,v;const l=(b=(h=n.existingTreeViewData)==null?void 0:h.state)==null?void 0:b[a.id],s=r?i.state[r].selected:!1,c=l?{selected:l.selected,expanded:l.expanded}:{selected:s===!0||!!((I=(_=n.defaults)==null?void 0:_.selection)!=null&&I.includes(a.id))||!1,expanded:(a==null?void 0:a.defaultExpanded)??(a.children?!!((v=n.defaults)!=null&&v.expanded):!1)};return i.state[a.id]={parents:r?[...i.state[r].parents,r]:[],children:[],...c},i.state[a.id].parents.forEach(p=>{const m=i.state[p];m.children.push(a.id),c.selected&&(m.expanded=!0)}),Array.isArray(a.children)&&We(a.children,n,i,a.id),i.flatItems[a.id]=a,i},t),be=(e,n)=>{const t=We(e,n);return qe(Object.entries(t.state).filter(([,{children:r}])=>!!r.length).map(([r])=>r),t.state),t};var Be=Symbol.for("immer-nothing"),ye=Symbol.for("immer-draftable"),g=Symbol.for("immer-state");function j(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var D=Object.getPrototypeOf;function O(e){return!!e&&!!e[g]}function z(e){var n;return e?$e(e)||Array.isArray(e)||!!e[ye]||!!((n=e.constructor)!=null&&n[ye])||Q(e)||Y(e):!1}var bn=Object.prototype.constructor.toString();function $e(e){if(!e||typeof e!="object")return!1;const n=D(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===bn}function K(e,n){J(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,r)=>n(r,t,e))}function J(e){const n=e[g];return n?n.type_:Array.isArray(e)?1:Q(e)?2:Y(e)?3:0}function ie(e,n){return J(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Le(e,n,t){const r=J(e);r===2?e.set(n,t):r===3?e.add(t):e[n]=t}function yn(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Q(e){return e instanceof Map}function Y(e){return e instanceof Set}function F(e){return e.copy_||e.base_}function ae(e,n){if(Q(e))return new Map(e);if(Y(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=$e(e);if(n===!0||n==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(e);delete r[g];let i=Reflect.ownKeys(r);for(let a=0;a<i.length;a++){const l=i[a],s=r[l];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(r[l]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[l]})}return Object.create(D(e),r)}else{const r=D(e);if(r!==null&&t)return{...e};const i=Object.create(r);return Object.assign(i,e)}}function V(e,n=!1){return Z(e)||O(e)||!z(e)||(J(e)>1&&(e.set=e.add=e.clear=e.delete=_n),Object.freeze(e),n&&Object.entries(e).forEach(([t,r])=>V(r,!0))),e}function _n(){j(2)}function Z(e){return Object.isFrozen(e)}var gn={};function E(e){const n=gn[e];return n||j(0,e),n}var R;function Ge(){return R}function xn(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function _e(e,n){n&&(E("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function le(e){oe(e),e.drafts_.forEach(In),e.drafts_=null}function oe(e){e===R&&(R=e.parent_)}function ge(e){return R=xn(R,e)}function In(e){const n=e[g];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function xe(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[g].modified_&&(le(n),j(4)),z(e)&&(e=U(n,e),n.parent_||X(n,e)),n.patches_&&E("Patches").generateReplacementPatches_(t[g].base_,e,n.patches_,n.inversePatches_)):e=U(n,t,[]),le(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Be?e:void 0}function U(e,n,t){if(Z(n))return n;const r=n[g];if(!r)return K(n,(i,a)=>Ie(e,r,n,i,a,t)),n;if(r.scope_!==e)return n;if(!r.modified_)return X(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let a=i,l=!1;r.type_===3&&(a=new Set(i),i.clear(),l=!0),K(a,(s,c)=>Ie(e,r,i,s,c,t,l)),X(e,i,!1),t&&e.patches_&&E("Patches").generatePatches_(r,t,e.patches_,e.inversePatches_)}return r.copy_}function Ie(e,n,t,r,i,a,l){if(O(i)){const s=a&&n&&n.type_!==3&&!ie(n.assigned_,r)?a.concat(r):void 0,c=U(e,i,s);if(Le(t,r,c),O(c))e.canAutoFreeze_=!1;else return}else l&&t.add(i);if(z(i)&&!Z(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;U(e,i),(!n||!n.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&X(e,i)}}function X(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&V(n,t)}function vn(e,n){const t=Array.isArray(e),r={type_:t?1:0,scope_:n?n.scope_:Ge(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=fe;t&&(i=[r],a=M);const{revoke:l,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=l,s}var fe={get(e,n){if(n===g)return e;const t=F(e);if(!ie(t,n))return Pn(e,t,n);const r=t[n];return e.finalized_||!z(r)?r:r===te(e.base_,n)?(re(e),e.copy_[n]=ce(r,e)):r},has(e,n){return n in F(e)},ownKeys(e){return Reflect.ownKeys(F(e))},set(e,n,t){const r=He(F(e),n);if(r!=null&&r.set)return r.set.call(e.draft_,t),!0;if(!e.modified_){const i=te(F(e),n),a=i==null?void 0:i[g];if(a&&a.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(yn(t,i)&&(t!==void 0||ie(e.base_,n)))return!0;re(e),se(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return te(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,re(e),se(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=F(e),r=Reflect.getOwnPropertyDescriptor(t,n);return r&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:r.enumerable,value:t[n]}},defineProperty(){j(11)},getPrototypeOf(e){return D(e.base_)},setPrototypeOf(){j(12)}},M={};K(fe,(e,n)=>{M[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});M.deleteProperty=function(e,n){return M.set.call(this,e,n,void 0)};M.set=function(e,n,t){return fe.set.call(this,e[0],n,t,e[0])};function te(e,n){const t=e[g];return(t?F(t):e)[n]}function Pn(e,n,t){var i;const r=He(n,t);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function He(e,n){if(!(n in e))return;let t=D(e);for(;t;){const r=Object.getOwnPropertyDescriptor(t,n);if(r)return r;t=D(t)}}function se(e){e.modified_||(e.modified_=!0,e.parent_&&se(e.parent_))}function re(e){e.copy_||(e.copy_=ae(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var wn=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,r)=>{if(typeof n=="function"&&typeof t!="function"){const a=t;t=n;const l=this;return function(c=a,...h){return l.produce(c,b=>t.call(this,b,...h))}}typeof t!="function"&&j(6),r!==void 0&&typeof r!="function"&&j(7);let i;if(z(n)){const a=ge(this),l=ce(n,void 0);let s=!0;try{i=t(l),s=!1}finally{s?le(a):oe(a)}return _e(a,r),xe(i,a)}else if(!n||typeof n!="object"){if(i=t(n),i===void 0&&(i=n),i===Be&&(i=void 0),this.autoFreeze_&&V(i,!0),r){const a=[],l=[];E("Patches").generateReplacementPatches_(n,i,a,l),r(a,l)}return i}else j(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(l,...s)=>this.produceWithPatches(l,c=>n(c,...s));let r,i;return[this.produce(n,t,(l,s)=>{r=l,i=s}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){z(e)||j(8),O(e)&&(e=Ke(e));const n=ge(this),t=ce(e,void 0);return t[g].isManual_=!0,oe(n),t}finishDraft(e,n){const t=e&&e[g];(!t||!t.isManual_)&&j(9);const{scope_:r}=t;return _e(r,n),xe(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const i=n[t];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}t>-1&&(n=n.slice(t+1));const r=E("Patches").applyPatches_;return O(e)?r(e,n):this.produce(e,i=>r(i,n))}};function ce(e,n){const t=Q(e)?E("MapSet").proxyMap_(e,n):Y(e)?E("MapSet").proxySet_(e,n):vn(e,n);return(n?n.scope_:Ge()).drafts_.push(t),t}function Ke(e){return O(e)||j(10,e),Ue(e)}function Ue(e){if(!z(e)||Z(e))return e;const n=e[g];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=ae(e,n.scope_.immer_.useStrictShallowCopy_)}else t=ae(e,!0);return K(t,(r,i)=>{Le(t,r,Ue(i))}),n&&(n.finalized_=!1),t}var x=new wn,Cn=x.produce;x.produceWithPatches.bind(x);x.setAutoFreeze.bind(x);x.setUseStrictShallowCopy.bind(x);x.applyPatches.bind(x);x.createDraft.bind(x);x.finishDraft.bind(x);function jn(e){var n=f.useState(function(){return V(typeof e=="function"?e():e,!0)}),t=n[1];return[n[0],f.useCallback(function(r){t(typeof r=="function"?Cn(r):V(r))},[])]}const ee=f.createContext(null),Tn=(e,n)=>{Object.keys(n).forEach(t=>{t!==e&&(n[t].selected=!1)})},Sn=(e,n)=>{e.children.length&&e.children.forEach(t=>{n[t].selected=e.selected}),qe(e.parents,n)},kn=({items:e,selectionMode:n,selectedItem:t,defaultSelection:r,defaultExpanded:i=!1,onSelectionChange:a,defaultIcons:l,classNames:s,asPopover:c,hideTriggerIcon:h,enableBranchSelection:b=!1,onlyToggleOnTriggerIcon:_=!1,leafRenderer:I,enableTooltip:v=!1,tooltipProps:p})=>{const m=f.useRef([]),P=f.useRef(e),S=f.useMemo(()=>be(e,{defaults:{selection:t?[t].flat():r?[r].flat():void 0,expanded:i}}),[]),[T,w]=f.useState(e),[d,y]=jn(S);f.useEffect(()=>{e!==P.current&&(P.current=e,w(e),y(u=>be(e,{existingTreeViewData:u})))},[e]);const N=f.useCallback(u=>{u.current&&(m.current=[...m.current,u])},[]),ue=f.useCallback(()=>{m.current.forEach(u=>{var k;(k=u.current)==null||k.close()})},[]),q=f.useCallback((u,k)=>{y(A=>{const he=A.state[u];he.selected=k,n==="focus"?Tn(u,A.state):Sn(he,A.state);const ne=Ke(A);a==null||a(Object.entries(ne.state).reduce((Qe,[me,Ye])=>({...Qe,[me]:{item:ne.flatItems[me],selected:Ye.selected}}),{}),ne.flatItems[u])})},[a,n,y]),Je=f.useCallback(u=>{u in d.flatItems&&!d.state[u].selected&&(q(u,!0),d.state[u].parents.length&&d.state[u].parents.forEach(k=>{y(A=>{A.state[k].expanded=!0})}))},[q,y,d]);f.useEffect(()=>{t&&[t].flat().forEach(u=>{Je(u)})},[t]);const pe=f.useCallback((u,k)=>{y(A=>{A.state[u].expanded=k})},[y]);return{contextValue:f.useMemo(()=>({treeViewData:d,selectionMode:n,onSelectionChange:q,onExpandChange:pe,registerPopoverRef:N,closeAllPopovers:ue,defaultIcons:l,classNames:s,asPopover:c,hideTriggerIcon:h,enableBranchSelection:b,onlyToggleOnTriggerIcon:_,leafRenderer:I,enableTooltip:v,tooltipProps:p}),[c,s,ue,l,b,pe,q,h,I,_,N,n,d,v,p]),itemsInternal:T}},de=({items:e,selectionMode:n="focus",selectedItem:t,defaultSelection:r,defaultExpanded:i=!1,defaultIcons:a,hideTriggerIcon:l=!1,forceRootIcons:s=!1,className:c,asPopover:h,onSelectionChange:b,enableBranchSelection:_,onlyToggleOnTriggerIcon:I,leafRenderer:v,enableTooltip:p=!1,tooltipProps:m,...P})=>{const S=typeof c=="object"?c:{base:c},{contextValue:T,itemsInternal:w}=kn({items:e,selectionMode:n,selectedItem:t,defaultSelection:r,defaultExpanded:i,hideTriggerIcon:l,classNames:S,defaultIcons:a,asPopover:h,onSelectionChange:b,enableBranchSelection:_,onlyToggleOnTriggerIcon:I,leafRenderer:v,enableTooltip:p,tooltipProps:m});return o.jsx(ee.Provider,{value:T,children:o.jsx("div",{className:C("tree",S.base),...P,children:w.map(d=>o.jsx(Xe,{item:d,forceIcon:s,addTooltip:p},d.id))})})},An=C("group/leaf relative cursor-pointer px-[10px] flex items-center py-1.5 text-left text-sm","before:absolute before:rounded-lg before:left-0 before:w-full before:opacity-0 before:bg-accent/70 before:h-full before:-z-10"),Fn=C("before:opacity-100 before:bg-neutral-200 text-accent-foreground"),Xe=({item:e,forceIcon:n,addTooltip:t=!1})=>{const{treeViewData:r,selectionMode:i,defaultIcons:a,classNames:l,onSelectionChange:s,closeAllPopovers:c,enableBranchSelection:h,onlyToggleOnTriggerIcon:b,leafRenderer:_,tooltipProps:I}=f.useContext(ee),{expanded:v,selected:p}=f.useMemo(()=>r.state[e.id],[e.id,r.state]),m=f.useCallback(d=>{s(e.id,d)},[e.id,s]),P=f.useMemo(()=>{var d;return o.jsxs(o.Fragment,{children:[i==="checkbox"&&o.jsx(on,{isSelected:typeof p=="boolean"?p:!1,isIndeterminate:p==="indeterminate",onChange:m}),o.jsx(Dn,{item:e,defaults:a,expanded:v,fallback:n?o.jsx(Ve,{className:"size-6"}):void 0,className:C(!n&&"mr-2",n&&((d=e.icons)==null?void 0:d.default)&&"mx-[3px]")}),!n&&o.jsx("span",{children:e.label})]})},[i,p,m,e,a,v,n]),S=C(An,i==="focus"&&{"hover:before:opacity-100":!0,[Fn]:p===!0},e.className),T=C(S,n&&!e.icons?"py-1":"py-1.5",H(l==null?void 0:l.leaf,p)),w=f.useCallback(d=>()=>{var N;let y=p;d&&(c(),i==="checkbox"&&!(Array.isArray(e.children)?e.children.length:e.children)?y=!p:y=!0,m(y)),(N=e.onClick)==null||N.call(e,e,y)},[c,m,e,p,i]);return e.children?o.jsx(zn,{item:e,onClick:w(!b&&h),baseClassName:S,leafClassName:T,forceIcon:n,children:b?o.jsx("button",{"aria-label":e.label,className:"flex flex-row flex-1 cursor-pointer",onClick:w(h),children:P}):P}):o.jsx("div",{children:o.jsx(Me,{content:e.label,...I,disabled:!t,children:_?_({"aria-label":e.label,className:T,children:P,onClick:w(!0),onPress:w(!0)},e):o.jsx("button",{"aria-label":e.label,className:T,onClick:w(!0),children:P})})})},zn=({item:e,onClick:n,baseClassName:t,leafClassName:r,forceIcon:i,children:a})=>{var w;const{treeViewData:l,asPopover:s,classNames:c,selectionMode:h,hideTriggerIcon:b,onExpandChange:_,onlyToggleOnTriggerIcon:I,enableTooltip:v,tooltipProps:p}=f.useContext(ee),{expanded:m,selected:P}=f.useMemo(()=>l.state[e.id],[e.id,l.state]),S=f.useCallback(d=>{_(e.id,d.includes(e.id))},[e,_]),T=Array.isArray(e.children)?(w=e.children)==null?void 0:w.map(d=>o.jsx(Xe,{item:d},d.id)):e.children;if(s)return o.jsx(En,{label:e.label,className:H(c==null?void 0:c.popover),content:T,children:o.jsx("div",{className:C(t,"branch flex-1 w-full justify-normal transition-all",H(c==null?void 0:c.branch,P),"before:opacity-0 hover:before:opacity-0 p-0"),children:o.jsx(Me,{content:e.label,disabled:!i||!v,...p,children:o.jsxs(dn,{"aria-label":e.label,className:C("w-full focus-visible:outline-hidden",r,"m-0 border-0"),onPress:n,children:[a,i&&o.jsx("span",{className:"absolute inset-0 flex items-end bottom-1 justify-center text-neutral font-semibold text-[12px] leading-[1.5rem]",children:e.label.slice(0,1)})]})})})});{const d={};h==="focus"&&!b?(d.chevronPosition="left",d.chevron=o.jsx(cn,{className:"shrink-0 transition-transform duration-200 group-data-[state=open]/leaf:rotate-90"})):h==="checkbox"&&(d.chevronPosition="right");const y=C(t,"branch flex-1 w-full justify-normal transition-all",H(c==null?void 0:c.branch,P));return o.jsx(fn,{type:"multiple",value:m?[e.id]:[],onValueChange:S,children:o.jsxs(un,{value:e.id,id:e.id,children:[o.jsx(pn,{className:C("flex flex-row items-center gap-2",y),children:o.jsxs(o.Fragment,{children:[o.jsx(hn,{id:e.id,"aria-label":e.label,className:"p-0",onClick:n,...d,children:!I&&a}),I&&a]})}),o.jsx(mn,{className:"overflow-hidden ml-0",children:T})]})})}},En=({label:e,className:n,content:t,children:r})=>{const{registerPopoverRef:i}=f.useContext(ee),a=f.useRef(null);f.useEffect(()=>{i(a)},[]);const l=o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"font-medium px-2 text-left",children:e}),t]});return o.jsx(sn,{ref:a,content:l,className:C("fixed",n),overlayArrow:!0,placement:"right top",offset:16,children:r})},Dn=({item:e,expanded:n,defaults:t,fallback:r,className:i})=>{var l,s;const a=(n?((l=e.icons)==null?void 0:l.expanded)??(t==null?void 0:t.expandedBranch)??(t==null?void 0:t.branch):((s=e.icons)==null?void 0:s.default)??(e.children?t==null?void 0:t.branch:t==null?void 0:t.leaf))??r;return a?o.jsx("div",{className:C("shrink-0",i),children:a}):null};try{de.displayName="TreeView",de.__docgenInfo={description:`The TreeView component lets users navigate hierarchical lists of data with nested levels that can be expanded and collapsed.

Based on ´@radix-ui/react-accordion´`,displayName:"TreeView",props:{selectionMode:{defaultValue:{value:"focus"},description:"Selection mode for the entire tree",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"focus"'}]}},items:{defaultValue:null,description:"Data structure for the tree",name:"items",required:!0,type:{name:"TreeItem[]"}},className:{defaultValue:null,description:"Styling for the tree and optionally its branches and leafs",name:"className",required:!1,type:{name:"string | TreeViewClassNameObject"}},defaultExpanded:{defaultValue:{value:"false"},description:"Expand all nodes in the tree on component mount",name:"defaultExpanded",required:!1,type:{name:"boolean"}},selectedItem:{defaultValue:null,description:"List of IDs of the items that should be selected, nodes will expand so the item is visible",name:"selectedItem",required:!1,type:{name:"string | string[]"}},defaultSelection:{defaultValue:null,description:"List of IDs of the items that should initially be selected, nodes will expand so the item is visible",name:"defaultSelection",required:!1,type:{name:"string | string[]"}},onSelectionChange:{defaultValue:null,description:"function called when an item is selected",name:"onSelectionChange",required:!1,type:{name:"((selectionState: TreeViewSelection, trigger: TreeItem) => void)"}},defaultIcons:{defaultValue:null,description:"Object specifying the default icons to use",name:"defaultIcons",required:!1,type:{name:"TreeViewDefaultIcons"}},hideTriggerIcon:{defaultValue:{value:"false"},description:"Should the arrow trigger icon be hidden. Will be automatically hidden when asPopover is set to true",name:"hideTriggerIcon",required:!1,type:{name:"boolean"}},asPopover:{defaultValue:null,description:"Should the tree use popovers to open branches instead of accordion",name:"asPopover",required:!1,type:{name:"boolean"}},forceRootIcons:{defaultValue:{value:"false"},description:"force icons for the highest level items. Branches with no icon provided wil get a folder with an initial",name:"forceRootIcons",required:!1,type:{name:"boolean"}},enableBranchSelection:{defaultValue:null,description:"enable selecting a branch",name:"enableBranchSelection",required:!1,type:{name:"boolean"}},onlyToggleOnTriggerIcon:{defaultValue:null,description:"will expand/collapse a branch only when clicking the trigger icon",name:"onlyToggleOnTriggerIcon",required:!1,type:{name:"boolean"}},leafRenderer:{defaultValue:null,description:"Use custom component for the tree leafs instead of regular button",name:"leafRenderer",required:!1,type:{name:"((props: HTMLAttributes<HTMLElement> & PressEvents, item?: TreeItem) => ReactNode)"}},enableTooltip:{defaultValue:{value:"false"},description:"Whether to enable tooltips on the TreeViewPopover trigger",name:"enableTooltip",required:!1,type:{name:"boolean"}},tooltipProps:{defaultValue:null,description:"Tooltip custmoization",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "content">'}}}}}catch{}const dt={component:de,argTypes:{hideTriggerIcon:{control:"boolean",if:{arg:"asPopover",truthy:!1}}}},W={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2",children:[{id:"3",label:"Item 2.1"},{id:"4",label:"Item 2.2"}]}]}},B={args:{items:[{id:"1",label:"Dashboard",icons:{default:o.jsx(Re,{})}},{id:"2",label:"Inbox",children:[{id:"4",label:"Meldingen",icons:{default:o.jsx(Ze,{})}},{id:"5",label:"Taken",icons:{default:o.jsx(en,{})}}]},{id:"3",label:"Administratie",children:[{id:"6",label:"Gebouwen",icons:{default:o.jsx(nn,{})}},{id:"7",label:"Eigenaars",icons:{default:o.jsx(tn,{})}}]}]}},$={args:{defaultIcons:{branch:o.jsx(Ve,{}),expandedBranch:o.jsx(rn,{}),leaf:o.jsx(ln,{})},items:[{id:"1",label:"Folder (empty)",children:[]},{id:"2",label:"Folder",children:[{id:"3",label:"File"},{id:"4",label:"File"}]}],hideTriggerIcon:!0}},L={args:{forceRootIcons:!0,asPopover:!0,items:[{id:"1",label:"First item",icons:{default:o.jsx(Re,{})}},{id:"2",label:"Second item",children:[{id:"3",label:"Item 2.1",icons:{default:o.jsx(an,{})}},{id:"4",label:"Item 2.2",children:[{id:"5",label:"Item 2.2.1"}]},{id:"6",label:"Item 3.2",children:[{id:"7",label:"Item 3.2.1"},{id:"8",label:"Item 3.2.2"}]}]}]}},G={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2",children:[{id:"3",label:"Item 3",children:o.jsx("div",{children:"Item 3"})},{id:"4",label:"Item 4",children:[{id:"5",label:"Item 5"},{id:"6",label:"Item 6"}]},{id:"7",label:"Item 7",children:[{id:"8",label:"Item 8",children:[{id:"9",label:"Item 9"}]}]}]}],selectionMode:"checkbox"}};var ve,Pe,we;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Item 1"
    }, {
      id: "2",
      label: "Item 2",
      children: [{
        id: "3",
        label: "Item 2.1"
      }, {
        id: "4",
        label: "Item 2.2"
      }]
    }]
  }
}`,...(we=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:we.source}}};var Ce,je,Te;B.parameters={...B.parameters,docs:{...(Ce=B.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Dashboard",
      icons: {
        default: <GridView />
      }
    }, {
      id: "2",
      label: "Inbox",
      children: [{
        id: "4",
        label: "Meldingen",
        icons: {
          default: <Notifications />
        }
      }, {
        id: "5",
        label: "Taken",
        icons: {
          default: <Task />
        }
      }]
    }, {
      id: "3",
      label: "Administratie",
      children: [{
        id: "6",
        label: "Gebouwen",
        icons: {
          default: <Business />
        }
      }, {
        id: "7",
        label: "Eigenaars",
        icons: {
          default: <Group />
        }
      }]
    }]
  }
}`,...(Te=(je=B.parameters)==null?void 0:je.docs)==null?void 0:Te.source}}};var Se,ke,Ae;$.parameters={...$.parameters,docs:{...(Se=$.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    defaultIcons: {
      branch: <Folder />,
      expandedBranch: <FolderOpen />,
      leaf: <Description />
    },
    items: [{
      id: "1",
      label: "Folder (empty)",
      children: []
    }, {
      id: "2",
      label: "Folder",
      children: [{
        id: "3",
        label: "File"
      }, {
        id: "4",
        label: "File"
      }]
    }],
    hideTriggerIcon: true
  }
}`,...(Ae=(ke=$.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var Fe,ze,Ee;L.parameters={...L.parameters,docs:{...(Fe=L.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    forceRootIcons: true,
    asPopover: true,
    items: [{
      id: "1",
      label: "First item",
      icons: {
        default: <GridView />
      }
    }, {
      id: "2",
      label: "Second item",
      children: [{
        id: "3",
        label: "Item 2.1",
        icons: {
          default: <Dashboard />
        }
      }, {
        id: "4",
        label: "Item 2.2",
        children: [{
          id: "5",
          label: "Item 2.2.1"
        }]
      }, {
        id: "6",
        label: "Item 3.2",
        children: [{
          id: "7",
          label: "Item 3.2.1"
        }, {
          id: "8",
          label: "Item 3.2.2"
        }]
      }]
    }]
  }
}`,...(Ee=(ze=L.parameters)==null?void 0:ze.docs)==null?void 0:Ee.source}}};var De,Oe,Ne;G.parameters={...G.parameters,docs:{...(De=G.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Item 1"
    }, {
      id: "2",
      label: "Item 2",
      children: [{
        id: "3",
        label: "Item 3",
        children: <div>Item 3</div>
      }, {
        id: "4",
        label: "Item 4",
        children: [{
          id: "5",
          label: "Item 5"
        }, {
          id: "6",
          label: "Item 6"
        }]
      }, {
        id: "7",
        label: "Item 7",
        children: [{
          id: "8",
          label: "Item 8",
          children: [{
            id: "9",
            label: "Item 9"
          }]
        }]
      }]
    }],
    selectionMode: "checkbox"
  }
}`,...(Ne=(Oe=G.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};const ft=["Default","LeafsWithIcons","AllWithIcons","forcedIconsWithPopovers","CheckboxSelection"];export{$ as AllWithIcons,G as CheckboxSelection,W as Default,B as LeafsWithIcons,ft as __namedExportsOrder,dt as default,L as forcedIconsWithPopovers};
