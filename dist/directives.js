var C=Object.defineProperty,k=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var P=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,R=(e,t)=>{for(var r in t||={})M.call(t,r)&&P(e,r,t[r]);if(d)for(var r of d(t))L.call(t,r)&&P(e,r,t[r]);return e},O=(e,t)=>k(e,w(t));var _=(e,t)=>{var r={};for(var a in e)M.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&d)for(var a of d(e))t.indexOf(a)<0&&L.call(e,a)&&(r[a]=e[a]);return r};var A="__cI4Mp6yr0__",l=e=>(...t)=>({id:A,def:e,args:t});var f=(e,t)=>{Object.entries(t).forEach(([r,a])=>{switch(r){case"className":{a.split(/\s{1,}/).forEach(n=>{let s=n.trim();s&&e.classList.add(s)});break}case"style":Object.assign(e.style,a);break;case"dataset":Object.assign(e.dataset,a);break;default:if(r.startsWith("[")&&r.endsWith("]")){let s=r.substring(1,r.length-1);a===!1?e.removeAttribute(s):e.setAttribute(s,a===!0?"":a)}else e[r]!==a&&(e[r]=a)}})};var N=e=>{let t=new Text(""),r=!1,a=()=>{r&&(t.replaceWith(e),r=!1)};return{node:e,classMap:n=>{Object.entries(n).forEach(([s,i])=>{i?e.classList.add(s):e.classList.remove(s)})},attrMap:n=>{Object.entries(n).forEach(([s,i])=>{i===!1?e.removeAttribute(s):e.setAttribute(s,i===!0?"":i)})},dataMap:n=>{Object.entries(n).forEach(([s,i])=>{i===!1?delete e.dataset[s]:e.dataset[s]=i===!0?"":i})},text:n=>{e.textContent!==n&&(e.textContent=n)},style:n=>f(e,{style:n}),attrs:n=>f(e,n),show:()=>{e.style.removeProperty("display"),a()},hide:()=>{e.style.setProperty("display","none"),a()},remove:()=>{r||(e.replaceWith(t),r=!0)}}};var $=l({type:"attr",callback:(e,t)=>{t.forEach(({node:r,args:[a]})=>{Object.defineProperty(e,a,{value:N(r)})})}});var j=l({type:"node",callback:(e,t)=>{t.forEach(({node:r,args:[a,n]})=>{let s=new Text(n||"");r.replaceWith(s),Object.defineProperty(e,a,{enumerable:!0,get:()=>s.textContent,set:i=>{let c=String(i);s.textContent!==c&&(s.textContent=c)}})})}});var x=e=>!!(e&&(e.constructor===Object||Object.getPrototypeOf(e)===null));var h="__PzroJBb1g__";var y=e=>x(e)&&"$id"in e&&e.$id===h;var g="__un3Mvl07V__",I=({container:e,items:t,node:r,ref:a,key:n=(c,{key:E})=>String(E),keyName:s="data-h-list-key",indexKeyName:i="data-h-list-index"})=>{let c=Array.isArray(t)?t.entries():t instanceof Map?t:t instanceof Set?Array.from(t).entries():Object.entries(t),E=new Map;for(let m of e.querySelectorAll(`:scope > [${s}]`))E.set(m.getAttribute(s),m);let p=0;for(let[m,D]of c){let u=String(m),b=String(n(D,{key:u,index:p})),T=E.get(b)||r(D,{key:u,index:p});E.delete(b);let o=y(T)?T.$node:T;if(!(o instanceof Element))throw new Error("Each list item must contain only a single root node");if(Math.abs(Number(o.getAttribute(i)||1/0)-p)>0&&(o.remove(),o.setAttribute(s,b),o.setAttribute(i,String(p)),e.append(o)),a){y(T)&&Object.defineProperty(o,g,{enumerable:!1,value:T});let v=g in o?o[g]:o;a(v,D,{key:u,index:p})}p++}E.forEach(m=>m.remove())};var H=e=>l({type:"attr",callback:(t,r)=>{r.forEach(({node:a,args:[n]})=>{let{name:s}=n,i=O(R({},n),{container:a});Object.defineProperty(t,s,{enumerable:!0,get:()=>i.items,set:c=>{i.items=c,I(i)}}),I(i)})}})(e);var V=l({type:"node",callback:(e,t)=>{t.forEach(({node:r,args:[a,n]})=>{r.appendChild(n.$node),Object.defineProperty(e,a,{value:n,enumerable:!0})})}});var S=l({type:"node",callback:(e,t)=>{t.forEach(({node:r,args:[a,n={}]})=>{r.replaceWith(a.$node);let p=Object.getOwnPropertyDescriptors(a),{$id:s,$node:i,$cb:c}=p,E=_(p,["$id","$node","$cb"]);n.directives!==!1&&Object.defineProperties(e,E),n.callbacks===!0&&a.$cb.forEach(m=>{e.$cb.add(m)})})}}),K=e=>S(e,{callbacks:!0,directives:!0});export{H as _list,S as _merge,K as _mergeAll,V as _nest,$ as _ref,j as _text};
//# sourceMappingURL=directives.js.map
