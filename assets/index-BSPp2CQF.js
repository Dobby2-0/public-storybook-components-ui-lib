import{c as g,g as C,r as f}from"./index-DRjF_FHU.js";var F="Expected a function",x=NaN,D="[object Symbol]",_=/^\s+|\s+$/g,$=/^[-+]0x[0-9a-f]+$/i,H=/^0b[01]+$/i,A=/^0o[0-7]+$/i,B=parseInt,P=typeof g=="object"&&g&&g.Object===Object&&g,G=typeof self=="object"&&self&&self.Object===Object&&self,N=P||G||Function("return this")(),U=Object.prototype,V=U.toString,Q=Math.max,X=Math.min,S=function(){return N.Date.now()};function J(e,n,u){var r,o,s,i,t,d,l=0,L=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(F);n=M(n)||0,y(u)&&(L=!!u.leading,m="maxWait"in u,s=m?Q(M(u.maxWait)||0,n):s,v="trailing"in u?!!u.trailing:v);function E(c){var a=r,b=o;return r=o=void 0,l=c,i=e.apply(b,a),i}function O(c){return l=c,t=setTimeout(h,n),L?E(c):i}function W(c){var a=c-d,b=c-l,T=n-a;return m?X(T,s-b):T}function j(c){var a=c-d,b=c-l;return d===void 0||a>=n||a<0||m&&b>=s}function h(){var c=S();if(j(c))return I(c);t=setTimeout(h,W(c))}function I(c){return t=void 0,v&&r?E(c):(r=o=void 0,i)}function k(){t!==void 0&&clearTimeout(t),l=0,r=d=o=t=void 0}function z(){return t===void 0?i:I(S())}function w(){var c=S(),a=j(c);if(r=arguments,o=this,d=c,a){if(t===void 0)return O(d);if(m)return t=setTimeout(h,n),E(d)}return t===void 0&&(t=setTimeout(h,n)),i}return w.cancel=k,w.flush=z,w}function y(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function K(e){return!!e&&typeof e=="object"}function Y(e){return typeof e=="symbol"||K(e)&&V.call(e)==D}function M(e){if(typeof e=="number")return e;if(Y(e))return x;if(y(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=y(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(_,"");var u=H.test(e);return u||A.test(e)?B(e.slice(2),u?2:8):$.test(e)?x:+e}var Z=J;const R=C(Z);var p=typeof window<"u"?f.useLayoutEffect:f.useEffect;function q(e,n,u,r){const o=f.useRef(n);p(()=>{o.current=n},[n]),f.useEffect(()=>{const s=window;if(!(s&&s.addEventListener))return;const i=t=>{o.current(t)};return s.addEventListener(e,i,r),()=>{s.removeEventListener(e,i,r)}},[e,u,r])}var ee=typeof window>"u";function ue(e,{defaultValue:n=!1,initializeWithValue:u=!0}={}){const r=t=>ee?n:window.matchMedia(t).matches,[o,s]=f.useState(()=>u?r(e):n);function i(){s(r(e))}return p(()=>{const t=window.matchMedia(e);return i(),t.addListener?t.addListener(i):t.addEventListener("change",i),()=>{t.removeListener?t.removeListener(i):t.removeEventListener("change",i)}},[e]),o}function ne(e){const n=f.useRef(e);n.current=e,f.useEffect(()=>()=>{n.current()},[])}function te(e,n=500,u){const r=f.useRef();ne(()=>{r.current&&r.current.cancel()});const o=f.useMemo(()=>{const s=R(e,n,u),i=(...t)=>s(...t);return i.cancel=()=>{s.cancel()},i.isPending=()=>!!r.current,i.flush=()=>s.flush(),i},[e,n,u]);return f.useEffect(()=>{r.current=R(e,n,u)},[e,n,u]),o}function ce(){const e=f.useRef(!1);return f.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),f.useCallback(()=>e.current,[])}var re=typeof window>"u";function se(e={}){let{initializeWithValue:n=!0}=e;re&&(n=!1);const[u,r]=f.useState(()=>n?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),o=te(r,e.debounceDelay);function s(){(e.debounceDelay?o:r)({width:window.innerWidth,height:window.innerHeight})}return q("resize",s),p(()=>{s()},[]),u}export{ue as a,se as b,ce as u};
