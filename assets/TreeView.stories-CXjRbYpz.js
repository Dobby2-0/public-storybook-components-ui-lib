import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BbeNlDUO.js";import{r as n,t as r}from"./Popover-D8NDVtI1.js";import{i,r as a}from"./ButtonBase-CU87ySkF.js";import{n as o,r as s}from"./Button-DJjw5v_p.js";import{n as c,t as l}from"./Checkbox-Cd_o4_ji.js";import{i as u,r as d,t as f}from"./utils-TgsCZh5h.js";import{t as p}from"./jsx-runtime-BB9-612F.js";import{n as m,t as h}from"./Loader-Cr3zxmi-.js";import{H as g,Ht as _,Kt as v,R as y,Rt as b,bt as x,ct as S,on as C,t as w,ut as T,v as E,vt as ee}from"./main-CRAVX506.js";import{a as te,i as ne,n as re,o as ie,r as ae,t as oe}from"./Accordion-CCICWjXK.js";import{r as se,t as ce}from"./Menu-Cf7AKuID.js";import{n as le,t as ue}from"./IconButton-D2vRkX0n.js";var de,fe,pe;function me(){return(me=e((()=>{de=(e,t)=>{e.length&&e.forEach(e=>{let n=t[e].children;t[e].selected=n.filter(e=>!t[e].children.length).reduce((e,n,r)=>{let i=t[n].selected;return r===0?i:[`indeterminate`,i].includes(e)?e:`indeterminate`},!1)})},fe=(e,t={existingTreeViewData:{flatItems:{},state:{}},defaults:{selection:[],expanded:!1}},n={flatItems:{},state:{}},r)=>e.reduce((e,n)=>{let i=t.existingTreeViewData?.state?.[n.id],a=r?e.state[r].selected:!1,o=i?{selected:i.selected,expanded:i.expanded}:{selected:a===!0||!!t.defaults?.selection?.includes(n.id)||!1,expanded:n?.defaultExpanded??(n.children?!!t.defaults?.expanded:!1)};return e.state[n.id]={parents:r?[...e.state[r].parents,r]:[],children:[],...o},e.state[n.id].parents.forEach(t=>{let r=e.state[t];r.children.push(n.id),o.selected&&(r.expanded=!0)}),Array.isArray(n.children)&&fe(n.children,t,e,n.id),e.flatItems[n.id]=n,e},n),pe=(e,t)=>{let n=fe(e,t);return de(Object.entries(n.state).filter(([,{children:e}])=>!!e.length).map(([e])=>e),n.state),n}})))()}function D(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}function O(e){return!!e&&!!e[R]}function k(e){return e?he(e)||Array.isArray(e)||!!e[He]||!!e.constructor?.[He]||M(e)||N(e):!1}function he(e){if(!e||typeof e!=`object`)return!1;let t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;let n=Object.hasOwnProperty.call(t,`constructor`)&&t.constructor;if(n===Object)return!0;if(typeof n!=`function`)return!1;let r=We.get(n);return r===void 0&&(r=Function.toString.call(n),We.set(n,r)),r===Ue}function A(e,t,n=!0){j(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function j(e){let t=e[R];return t?t.type_:Array.isArray(e)?1:M(e)?2:N(e)?3:0}function ge(e,t){return j(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function _e(e,t,n){let r=j(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function ve(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t}function M(e){return e instanceof Map}function N(e){return e instanceof Set}function P(e){return e.copy_||e.base_}function ye(e,t){if(M(e))return new Map(e);if(N(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let n=he(e);if(t===!0||t===`class_only`&&!n){let t=Object.getOwnPropertyDescriptors(e);delete t[R];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){let i=n[r],a=t[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(z(e),t)}{let t=z(e);if(t!==null&&n)return{...e};let r=Object.create(t);return Object.assign(r,e)}}function F(e,t=!1){return I(e)||O(e)||!k(e)||(j(e)>1&&Object.defineProperties(e,{set:B,add:B,clear:B,delete:B}),Object.freeze(e),t&&Object.values(e).forEach(e=>F(e,!0))),e}function be(){D(2)}function I(e){return typeof e!=`object`||!e||Object.isFrozen(e)}function L(e){let t=Ge[e];return t||D(0,e),t}function xe(){return V}function Se(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ce(e,t){t&&(L(`Patches`),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function we(e){Te(e),e.drafts_.forEach(De),e.drafts_=null}function Te(e){e===V&&(V=e.parent_)}function Ee(e){return V=Se(V,e)}function De(e){let t=e[R];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Oe(e,t){t.unfinalizedDrafts_=t.drafts_.length;let n=t.drafts_[0];return e!==void 0&&e!==n?(n[R].modified_&&(we(t),D(4)),k(e)&&(e=ke(t,e),t.parent_||je(t,e)),t.patches_&&L(`Patches`).generateReplacementPatches_(n[R].base_,e,t.patches_,t.inversePatches_)):e=ke(t,n,[]),we(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e===Ve?void 0:e}function ke(e,t,n){if(I(t))return t;let r=e.immer_.shouldUseStrictIteration(),i=t[R];if(!i)return A(t,(r,a)=>Ae(e,i,t,r,a,n),r),t;if(i.scope_!==e)return t;if(!i.modified_)return je(e,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;let t=i.copy_,a=t,o=!1;i.type_===3&&(a=new Set(t),t.clear(),o=!0),A(a,(r,a)=>Ae(e,i,t,r,a,n,o),r),je(e,t,!1),n&&e.patches_&&L(`Patches`).generatePatches_(i,n,e.patches_,e.inversePatches_)}return i.copy_}function Ae(e,t,n,r,i,a,o){if(i==null||typeof i!=`object`&&!o)return;let s=I(i);if(!s||o){if(O(i)){let o=ke(e,i,a&&t&&t.type_!==3&&!ge(t.assigned_,r)?a.concat(r):void 0);if(_e(n,r,o),O(o))e.canAutoFreeze_=!1;else return}else o&&n.add(i);if(k(i)&&!s){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[r]===i&&s)return;ke(e,i),(!t||!t.scope_.parent_)&&typeof r!=`symbol`&&(M(n)?n.has(r):Object.prototype.propertyIsEnumerable.call(n,r))&&je(e,i)}}}function je(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&F(t,n)}function Me(e,t){let n=Array.isArray(e),r={type_:+!!n,scope_:t?t.scope_:xe(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},i=r,a=Ke;n&&(i=[r],a=H);let{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,s}function Ne(e,t){let n=e[R];return(n?P(n):e)[t]}function Pe(e,t,n){let r=Fe(t,n);return r?`value`in r?r.value:r.get?.call(e.draft_):void 0}function Fe(e,t){if(!(t in e))return;let n=z(e);for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=z(n)}}function Ie(e){e.modified_||(e.modified_=!0,e.parent_&&Ie(e.parent_))}function Le(e){e.copy_||=ye(e.base_,e.scope_.immer_.useStrictShallowCopy_)}function Re(e,t){let n=M(e)?L(`MapSet`).proxyMap_(e,t):N(e)?L(`MapSet`).proxySet_(e,t):Me(e,t);return(t?t.scope_:xe()).drafts_.push(n),n}function ze(e){return O(e)||D(10,e),Be(e)}function Be(e){if(!k(e)||I(e))return e;let t=e[R],n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=ye(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=ye(e,!0);return A(n,(e,t)=>{_e(n,e,Be(t))},r),t&&(t.finalized_=!1),n}var Ve,He,R,z,Ue,We,B,Ge,V,Ke,H,qe,Je,Ye;function Xe(){return(Xe=e((()=>{Ve=Symbol.for(`immer-nothing`),He=Symbol.for(`immer-draftable`),R=Symbol.for(`immer-state`),z=Object.getPrototypeOf,Ue=Object.prototype.constructor.toString(),We=new WeakMap,B={value:be},Ge={},Ke={get(e,t){if(t===R)return e;let n=P(e);if(!ge(n,t))return Pe(e,n,t);let r=n[t];return e.finalized_||!k(r)?r:r===Ne(e.base_,t)?(Le(e),e.copy_[t]=Re(r,e)):r},has(e,t){return t in P(e)},ownKeys(e){return Reflect.ownKeys(P(e))},set(e,t,n){let r=Fe(P(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){let r=Ne(P(e),t),i=r?.[R];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(ve(n,r)&&(n!==void 0||ge(e.base_,t)))return!0;Le(e),Ie(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Ne(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Le(e),Ie(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let n=P(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!==`length`,enumerable:r.enumerable,value:n[t]}},defineProperty(){D(11)},getPrototypeOf(e){return z(e.base_)},setPrototypeOf(){D(12)}},H={},A(Ke,(e,t)=>{H[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),H.deleteProperty=function(e,t){return H.set.call(this,e,t,void 0)},H.set=function(e,t,n){return Ke.set.call(this,e[0],t,n,e[0])},qe=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(e,t,n)=>{if(typeof e==`function`&&typeof t!=`function`){let n=t;t=e;let r=this;return function(e=n,...i){return r.produce(e,e=>t.call(this,e,...i))}}typeof t!=`function`&&D(6),n!==void 0&&typeof n!=`function`&&D(7);let r;if(k(e)){let i=Ee(this),a=Re(e,void 0),o=!0;try{r=t(a),o=!1}finally{o?we(i):Te(i)}return Ce(i,n),Oe(r,i)}if(!e||typeof e!=`object`){if(r=t(e),r===void 0&&(r=e),r===Ve&&(r=void 0),this.autoFreeze_&&F(r,!0),n){let t=[],i=[];L(`Patches`).generateReplacementPatches_(e,r,t,i),n(t,i)}return r}D(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e==`function`)return(t,...n)=>this.produceWithPatches(t,t=>e(t,...n));let n,r;return[this.produce(e,t,(e,t)=>{n=e,r=t}),n,r]},typeof e?.autoFreeze==`boolean`&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy==`boolean`&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof e?.useStrictIteration==`boolean`&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){k(e)||D(8),O(e)&&(e=ze(e));let t=Ee(this),n=Re(e,void 0);return n[R].isManual_=!0,Te(t),n}finishDraft(e,t){let n=e&&e[R];(!n||!n.isManual_)&&D(9);let{scope_:r}=n;return Ce(r,t),Oe(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){let r=t[n];if(r.path.length===0&&r.op===`replace`){e=r.value;break}}n>-1&&(t=t.slice(n+1));let r=L(`Patches`).applyPatches_;return O(e)?r(e,t):this.produce(e,e=>r(e,t))}},Je=new qe,Ye=Je.produce})))()}function Ze(e){var t=(0,Qe.useState)(function(){return F(typeof e==`function`?e():e,!0)}),n=t[1];return[t[0],(0,Qe.useCallback)(function(e){n(typeof e==`function`?Ye(e):F(e))},[])]}var Qe;function $e(){return($e=e((()=>{Xe(),Qe=t()})))()}var U,W,et,tt,nt;function rt(){return(rt=e((()=>{me(),Xe(),U=t(),$e(),W=(0,U.createContext)(null),et=(e,t)=>{Object.keys(t).forEach(n=>{n!==e&&(t[n].selected=!1)})},tt=(e,t)=>{e.children.length&&e.children.forEach(n=>{t[n].selected=e.selected}),de(e.parents,t)},nt=({items:e,selectionMode:t,selectedItem:n,defaultSelection:r,defaultExpanded:i=!1,onSelectionChange:a,defaultIcons:o,classNames:s,asPopover:c,hideTriggerIcon:l,enableBranchSelection:u=!1,onlyToggleOnTriggerIcon:d=!1,leafRenderer:f,enableTooltip:p=!1,tooltipProps:m})=>{let h=(0,U.useRef)([]),g=(0,U.useRef)(e),_=(0,U.useMemo)(()=>pe(e,{defaults:{selection:n?[n].flat():r?[r].flat():void 0,expanded:i}}),[]),[v,y]=(0,U.useState)(e),[b,x]=Ze(_);(0,U.useEffect)(()=>{e!==g.current&&(g.current=e,y(e),x(t=>pe(e,{existingTreeViewData:t})))},[e]);let S=(0,U.useCallback)(e=>{e.current&&(h.current=[...h.current,e])},[]),C=(0,U.useCallback)(()=>{h.current.forEach(e=>{e.current?.close()})},[]),w=(0,U.useCallback)((e,n)=>{x(r=>{let i=r.state[e];i.selected=n,t===`focus`?et(e,r.state):tt(i,r.state);let o=ze(r);a?.(Object.entries(o.state).reduce((e,[t,n])=>({...e,[t]:{item:o.flatItems[t],selected:n.selected}}),{}),o.flatItems[e])})},[a,t,x]),T=(0,U.useCallback)(e=>{e in b.flatItems&&!b.state[e].selected&&(w(e,!0),b.state[e].parents.length&&b.state[e].parents.forEach(e=>{x(t=>{t.state[e].expanded=!0})}))},[w,x,b]);(0,U.useEffect)(()=>{n&&[n].flat().forEach(e=>{T(e)})},[n]);let E=(0,U.useCallback)((e,t)=>{x(n=>{n.state[e].expanded=t})},[x]);return{contextValue:(0,U.useMemo)(()=>({treeViewData:b,selectionMode:t,onSelectionChange:w,onExpandChange:E,registerPopoverRef:S,closeAllPopovers:C,defaultIcons:o,classNames:s,asPopover:c,hideTriggerIcon:l,enableBranchSelection:u,onlyToggleOnTriggerIcon:d,leafRenderer:f,enableTooltip:p,tooltipProps:m}),[c,s,C,o,u,E,w,l,f,d,S,t,b,p,m]),itemsInternal:v}}})))()}var G,K,it,at,ot,st,ct,lt,ut;function dt(){return(dt=e((()=>{le(),c(),m(),se(),n(),i(),rt(),u(),w(),G=t(),s(),ie(),K=p(),it=({items:e,selectionMode:t=`focus`,selectedItem:n,defaultSelection:r,defaultExpanded:i=!1,defaultIcons:a,hideTriggerIcon:o=!1,forceRootIcons:s=!1,className:c,asPopover:l,onSelectionChange:u,enableBranchSelection:d,onlyToggleOnTriggerIcon:p,leafRenderer:m,enableTooltip:h=!1,tooltipProps:g,..._})=>{let v=typeof c==`object`?c:{base:c},{contextValue:y,itemsInternal:b}=nt({items:e,selectionMode:t,selectedItem:n,defaultSelection:r,defaultExpanded:i,hideTriggerIcon:o,classNames:v,defaultIcons:a,asPopover:l,onSelectionChange:u,enableBranchSelection:d,onlyToggleOnTriggerIcon:p,leafRenderer:m,enableTooltip:h,tooltipProps:g});return(0,K.jsx)(W.Provider,{value:y,children:(0,K.jsx)(`div`,{className:f(`tree`,v.base),..._,children:b.map(e=>(0,K.jsx)(st,{item:e,forceIcon:s,addTooltip:h},e.id))})})},at=f(`group/leaf relative cursor-pointer px-[10px] flex items-center py-1.5 text-left text-sm`,`before:absolute before:rounded-lg before:left-0 before:w-full before:opacity-0 before:bg-accent/70 before:h-full before:-z-10`,`after:absolute after:rounded-lg after:left-0 after:w-full after:opacity-0 after:bg-neutral-900/15 after:h-full after:z-10 after:pointer-events-none`),ot=f(`before:opacity-100 before:bg-neutral-200 text-accent-foreground`),st=({item:e,forceIcon:t,addTooltip:n=!1})=>{let{treeViewData:r,selectionMode:i,defaultIcons:o,classNames:s,onSelectionChange:c,closeAllPopovers:u,enableBranchSelection:p,onlyToggleOnTriggerIcon:m,leafRenderer:_,tooltipProps:v}=(0,G.useContext)(W),{expanded:y,selected:b}=(0,G.useMemo)(()=>r.state[e.id],[e.id,r.state]),S=(0,G.useCallback)(t=>{c(e.id,t)},[e.id,c]),C=(0,G.useMemo)(()=>(0,K.jsxs)(K.Fragment,{children:[e.loading&&(0,K.jsx)(h,{className:`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20`}),i===`checkbox`&&(0,K.jsx)(l,{className:f(!e.children&&`mr-1.5`),isSelected:typeof b==`boolean`&&b,isIndeterminate:b===`indeterminate`,onChange:S,isDisabled:e.loading}),(0,K.jsx)(ut,{item:e,defaults:o,expanded:y,fallback:t?(0,K.jsx)(x,{className:`size-6`}):void 0,className:f(!t&&`mr-2`,t&&e.icons?.default&&`mx-[3px]`,e.loading&&`opacity-30`)}),!t&&(0,K.jsx)(`span`,{className:f(e.loading&&`opacity-30`),children:e.label}),e.menuActions&&(0,K.jsx)(ce,{items:e.menuActions,children:(0,K.jsx)(ue,{className:`ml-4`,variant:`ghost`,children:(0,K.jsx)(g,{})})})]}),[i,b,S,e,o,y,t]),w=f(at,i===`focus`&&{"hover:before:opacity-100":!0,[ot]:b===!0},e.className),T=f(w,t&&!e.icons?`py-1`:`py-1.5`,d(s?.leaf,b),e.loading&&`before:opacity-0 after:opacity-100 pointer-events-none`),E=(0,G.useCallback)(t=>()=>{let n=b;t&&(u(),n=i===`checkbox`&&!(Array.isArray(e.children)?e.children.length:e.children)?!b:!0,S(n)),e.onClick?.(e,n)},[u,S,e,b,i]);return e.children?(0,K.jsx)(ct,{item:e,onClick:E(!m&&p),baseClassName:w,leafClassName:T,forceIcon:t,children:m?(0,K.jsx)(`button`,{"aria-label":e.label,className:`flex flex-row flex-1 cursor-pointer`,onClick:E(p),children:C}):C}):(0,K.jsx)(`div`,{children:(0,K.jsx)(a,{content:e.label,...v,disabled:!n,children:_?_({"aria-label":e.label,className:T,children:C,onClick:E(!0),onPress:E(!0)},e):(0,K.jsx)(`button`,{"aria-label":e.label,className:T,onClick:E(!0),children:C})})})},ct=({item:e,onClick:t,baseClassName:n,leafClassName:r,forceIcon:i,children:s})=>{let{treeViewData:c,asPopover:l,classNames:u,selectionMode:p,hideTriggerIcon:m,onExpandChange:h,onlyToggleOnTriggerIcon:g,enableTooltip:_,tooltipProps:y}=(0,G.useContext)(W),{expanded:b,selected:x}=(0,G.useMemo)(()=>c.state[e.id],[e.id,c.state]),S=(0,G.useCallback)(t=>{h(e.id,t.includes(e.id))},[e,h]),C=Array.isArray(e.children)?e.children?.map(e=>(0,K.jsx)(st,{item:e},e.id)):e.children;if(l)return(0,K.jsx)(lt,{label:e.label,className:d(u?.popover),content:C,children:(0,K.jsx)(`div`,{className:f(n,`branch flex-1 w-full justify-normal transition-all`,d(u?.branch,x),`before:opacity-0 hover:before:opacity-0 p-0`),children:(0,K.jsx)(a,{content:e.label,disabled:!i||!_,...y,children:(0,K.jsxs)(o,{"aria-label":e.label,className:f(`w-full focus-visible:outline-hidden`,r,`m-0 border-0`),onPress:t,children:[s,i&&(0,K.jsx)(`span`,{className:`absolute inset-0 flex items-end bottom-1 justify-center text-neutral font-semibold text-[12px] leading-[1.5rem]`,children:e.label.slice(0,1)})]})})})});{let r={};p===`focus`&&!m?(r.chevronPosition=`left`,r.chevron=(0,K.jsx)(v,{className:`shrink-0 transition-transform duration-200 group-data-[state=open]/leaf:rotate-90`})):p===`checkbox`&&(r.chevronPosition=`right`);let i=f(n,`branch flex-1 w-full justify-normal transition-all`,d(u?.branch,x));return(0,K.jsx)(oe,{type:`multiple`,value:b?[e.id]:[],onValueChange:S,children:(0,K.jsxs)(ne,{value:e.id,id:e.id,children:[(0,K.jsx)(ae,{className:f(`flex flex-row items-center gap-2`,i),children:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(te,{id:e.id,"aria-label":e.label,className:`p-0`,onClick:t,...r,children:!g&&s}),g&&s]})}),(0,K.jsx)(re,{className:`overflow-hidden ml-0`,children:C})]})})}},lt=({label:e,className:t,content:n,children:i})=>{let{registerPopoverRef:a}=(0,G.useContext)(W),o=(0,G.useRef)(null);return(0,G.useEffect)(()=>{a(o)},[]),(0,K.jsx)(r,{ref:o,content:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`h3`,{className:`font-medium px-2 text-left`,children:e}),n]}),className:f(`fixed`,t),overlayArrow:!0,placement:`right top`,offset:16,children:i})},ut=({item:e,expanded:t,defaults:n,fallback:r,className:i})=>{let a=(t?e.icons?.expanded??n?.expandedBranch??n?.branch:e.icons?.default??(e.children?n?.branch:n?.leaf))??r;return a?(0,K.jsx)(`div`,{className:f(`shrink-0`,i),children:a}):null};try{it.displayName=`TreeView`,it.__docgenInfo={description:`The TreeView component lets users navigate hierarchical lists of data with nested levels that can be expanded and collapsed.

Based on ´@radix-ui/react-accordion´`,displayName:`TreeView`,filePath:`/home/runner/work/components-ui-lib/components-ui-lib/src/components/TreeView/TreeView.tsx`,methods:[],props:{selectionMode:{defaultValue:{value:`focus`},declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`Selection mode for the entire tree`,name:`selectionMode`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`enum`,raw:`"focus" | "checkbox"`,value:[{value:`"focus"`},{value:`"checkbox"`}]}},items:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`Data structure for the tree`,name:`items`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!0,tags:{},type:{name:`TreeItem[]`}},className:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`Styling for the tree and optionally its branches and leafs`,name:`className`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`string | TreeViewClassNameObject`}},defaultExpanded:{defaultValue:{value:`false`},declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`Expand all nodes in the tree on component mount`,name:`defaultExpanded`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`boolean`}},selectedItem:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`List of IDs of the items that should be selected, nodes will expand so the item is visible`,name:`selectedItem`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`string | string[]`}},defaultSelection:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`List of IDs of the items that should initially be selected, nodes will expand so the item is visible`,name:`defaultSelection`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`string | string[]`}},onSelectionChange:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`function called when an item is selected`,name:`onSelectionChange`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`((selectionState: TreeViewSelection, trigger: TreeItem) => void)`}},defaultIcons:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`Object specifying the default icons to use`,name:`defaultIcons`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`TreeViewDefaultIcons`}},hideTriggerIcon:{defaultValue:{value:`false`},declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`Should the arrow trigger icon be hidden. Will be automatically hidden when asPopover is set to true`,name:`hideTriggerIcon`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`boolean`}},asPopover:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`Should the tree use popovers to open branches instead of accordion`,name:`asPopover`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`boolean`}},forceRootIcons:{defaultValue:{value:`false`},declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`force icons for the highest level items. Branches with no icon provided wil get a folder with an initial`,name:`forceRootIcons`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`boolean`}},enableBranchSelection:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`enable selecting a branch`,name:`enableBranchSelection`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`boolean`}},onlyToggleOnTriggerIcon:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`will expand/collapse a branch only when clicking the trigger icon`,name:`onlyToggleOnTriggerIcon`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`boolean`}},leafRenderer:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`Use custom component for the tree leafs instead of regular button`,name:`leafRenderer`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`((props: HTMLAttributes<HTMLElement> & PressEvents, item?: TreeItem) => ReactNode)`}},enableTooltip:{defaultValue:{value:`false`},declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`Whether to enable tooltips on the TreeViewPopover trigger`,name:`enableTooltip`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`boolean`}},tooltipProps:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`}],description:`Tooltip custmoization`,name:`tooltipProps`,parent:{fileName:`components-ui-lib/src/components/TreeView/types/index.ts`,name:`TreeViewProps`},required:!1,tags:{},type:{name:`Omit<TooltipProps, "content">`}}},tags:{}}}catch{}})))()}var q,ft,J,Y,X,Z,Q,$,pt;function mt(){return(mt=e((()=>{w(),dt(),q=p(),ft={component:it,argTypes:{hideTriggerIcon:{control:`boolean`,if:{arg:`asPopover`,truthy:!1}}}},J={args:{items:[{id:`1`,label:`Item 1`},{id:`2`,label:`Item 2`,children:[{id:`3`,label:`Item 2.1`},{id:`4`,label:`Item 2.2`}]}]}},Y={args:{items:[{id:`1`,label:`Item 1`,menuActions:[{id:`menu-item-1`,label:`Alert me`,onPress:()=>alert(`clicked`)}]},{id:`2`,label:`Item 2`}]}},X={args:{items:[{id:`1`,label:`Dashboard`,icons:{default:(0,q.jsx)(T,{})}},{id:`2`,label:`Inbox`,children:[{id:`4`,label:`Meldingen`,icons:{default:(0,q.jsx)(y,{})}},{id:`5`,label:`Taken`,icons:{default:(0,q.jsx)(E,{})}}]},{id:`3`,label:`Administratie`,children:[{id:`6`,label:`Gebouwen`,icons:{default:(0,q.jsx)(C,{})}},{id:`7`,label:`Eigenaars`,icons:{default:(0,q.jsx)(S,{})}}]}]}},Z={args:{defaultIcons:{branch:(0,q.jsx)(x,{}),expandedBranch:(0,q.jsx)(ee,{}),leaf:(0,q.jsx)(b,{})},items:[{id:`1`,label:`Folder (empty)`,children:[]},{id:`2`,label:`Folder`,children:[{id:`3`,label:`File`},{id:`4`,label:`File`}]}],hideTriggerIcon:!0}},Q={args:{forceRootIcons:!0,asPopover:!0,items:[{id:`1`,label:`First item`,icons:{default:(0,q.jsx)(T,{})}},{id:`2`,label:`Second item`,children:[{id:`3`,label:`Item 2.1`,icons:{default:(0,q.jsx)(_,{})}},{id:`4`,label:`Item 2.2`,children:[{id:`5`,label:`Item 2.2.1`}]},{id:`6`,label:`Item 3.2`,children:[{id:`7`,label:`Item 3.2.1`},{id:`8`,label:`Item 3.2.2`}]}]}]}},$={args:{items:[{id:`1`,label:`Item 1`},{id:`2`,label:`Item 2`,children:[{id:`3`,label:`Item 3`,children:(0,q.jsx)(`div`,{children:`Item 3`})},{id:`4`,label:`Item 4`,children:[{id:`5`,label:`Item 5`},{id:`6`,label:`Item 6`}]},{id:`7`,label:`Item 7`,children:[{id:`8`,label:`Item 8`,children:[{id:`9`,label:`Item 9`}]}]}]}],selectionMode:`checkbox`}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Item 1",
      menuActions: [{
        id: "menu-item-1",
        label: "Alert me",
        onPress: () => alert("clicked")
      }]
    }, {
      id: "2",
      label: "Item 2"
    }]
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},pt=[`Default`,`DefaultWithMenuActions`,`LeafsWithIcons`,`AllWithIcons`,`ForcedIconsWithPopovers`,`CheckboxSelection`]})))()}mt();export{Z as AllWithIcons,$ as CheckboxSelection,J as Default,Y as DefaultWithMenuActions,Q as ForcedIconsWithPopovers,X as LeafsWithIcons,pt as __namedExportsOrder,ft as default};