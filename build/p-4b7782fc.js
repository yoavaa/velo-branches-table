let e,t,n=!1,l=!1;const s="undefined"!=typeof window?window:{},o=s.document||{head:{}},r={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),i=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),u=new WeakMap,a=e=>"sc-"+e.o,f={},$=e=>"object"==(e=typeof e)||"function"===e,h=(e,t,...n)=>{let l=null,s=!1,o=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!$(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?d(null,l):l),o=s)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=d(e,null);return i.u=t,r.length>0&&(i.$=r),i},d=(e,t)=>({t:0,h:e,i:t,p:null,$:null,u:null}),p={},w=(e,t,n,l,o,c)=>{if(n!==l){let i=V(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,s=m(n),o=m(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if(i||"o"!==t[0]||"n"!==t[1]){const s=$(l);if((i||s&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&c||o)&&!s&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):V(s,u)?u.slice(2):u[2]+t.slice(3),n&&r.rel(e,t,n,!1),l&&r.ael(e,t,l,!1)}},y=/\s/,m=e=>e?e.split(y):[],b=(e,t,n,l)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,o=e&&e.u||f,r=t.u||f;for(l in o)l in r||w(s,l,o[l],void 0,n,t.t);for(l in r)w(s,l,o[l],r[l],n,t.t)},g=(t,l,s)=>{let r,c,i=l.$[s],u=0;if(null!==i.i)r=i.p=o.createTextNode(i.i);else{if(n||(n="svg"===i.h),r=i.p=o.createElementNS(n?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i.h),n&&"foreignObject"===i.h&&(n=!1),b(null,i,n),null!=e&&r["s-si"]!==e&&r.classList.add(r["s-si"]=e),i.$)for(u=0;u<i.$.length;++u)c=g(t,i,u),c&&r.appendChild(c);"svg"===i.h?n=!1:"foreignObject"===r.tagName&&(n=!0)}return r},v=(e,n,l,s,o,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=g(null,l,o),c&&(s[o].p=c,i.insertBefore(c,n)))},j=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.p.remove()},O=(e,t)=>e.h===t.h,S=(e,t)=>{const l=t.p=e.p,s=e.$,o=t.$,r=t.h,c=t.i;null===c?(n="svg"===r||"foreignObject"!==r&&n,"slot"===r||b(e,t,n),null!==s&&null!==o?((e,t,n,l)=>{let s,o=0,r=0,c=t.length-1,i=t[0],u=t[c],a=l.length-1,f=l[0],$=l[a];for(;o<=c&&r<=a;)null==i?i=t[++o]:null==u?u=t[--c]:null==f?f=l[++r]:null==$?$=l[--a]:O(i,f)?(S(i,f),i=t[++o],f=l[++r]):O(u,$)?(S(u,$),u=t[--c],$=l[--a]):O(i,$)?(S(i,$),e.insertBefore(i.p,u.p.nextSibling),i=t[++o],$=l[--a]):O(u,f)?(S(u,f),e.insertBefore(u.p,i.p),u=t[--c],f=l[++r]):(s=g(t&&t[r],n,r),f=l[++r],s&&i.p.parentNode.insertBefore(s,i.p));o>c?v(e,null==l[a+1]?null:l[a+1].p,n,l,r,a):r>a&&j(t,o,c)})(l,s,t,o):null!==o?(null!==e.i&&(l.textContent=""),v(l,null,t,o,0,o.length-1)):null!==s&&j(s,0,s.length-1),n&&"svg"===r&&(n=!1)):e.i!==c&&(l.data=c)},M=e=>F(e).m,k=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},C=(e,t)=>{if(e.t|=16,!(4&e.t))return k(e,e.v),Y((()=>x(e,t)));e.t|=512},x=(e,t)=>{const n=e.j;return L(void 0,(()=>P(e,n,t)))},P=async(n,l,s)=>{const r=n.m,c=r["s-rc"];s&&(e=>{const t=e.O,n=e.m,l=t.t,s=((e,t)=>{let n=a(t),l=D.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=u.get(e=e.head||e);s||u.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(n);((n,l)=>{const s=n.m,o=n.S||d(null,null),r=(e=>e&&e.h===p)(l)?l:h(null,null,l);t=s.tagName,r.h=null,r.t|=4,n.S=r,r.p=o.p=s.shadowRoot||s,e=s["s-sc"],S(o,r)})(n,E(n,l)),c&&(c.map((e=>e())),r["s-rc"]=void 0);{const e=r["s-p"],t=()=>T(n);0===e.length?t():(Promise.all(e).then(t),n.t|=4,e.length=0)}},E=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(t){_(t,e.m)}return t},T=e=>{const t=e.m,n=e.v;64&e.t||(e.t|=64,R(t),e.M(t),n||A()),e.g&&(e.g(),e.g=void 0),512&e.t&&X((()=>C(e,!1))),e.t&=-517},A=()=>{R(o.documentElement),X((()=>(e=>{const t=r.ce("appload",{detail:{namespace:"velo-branches-table"}});return e.dispatchEvent(t),t})(s)))},L=(e,t)=>e&&e.then?e.then(t):t(),R=e=>e.classList.add("hydrated"),U=(e,t,n)=>{if(t.k){const l=Object.entries(t.k),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>F(this).C.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=F(e),o=s.C.get(t),r=s.t,c=s.j;n=((e,t)=>null==e||$(e)?e:1&t?e+"":e)(n,l.k[t][0]),8&r&&void 0!==o||n===o||(s.C.set(t,n),c&&2==(18&r)&&C(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){r.jmp((()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},W=(e,t={})=>{const n=[],l=t.exclude||[],c=s.customElements,u=o.head,f=u.querySelector("meta[charset]"),$=o.createElement("style"),h=[];let d,p=!0;Object.assign(r,t),r.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>e[1].map((t=>{const s={t:t[0],o:t[1],k:t[2],P:t[3]};s.k=t[2];const o=s.o,u=class extends HTMLElement{constructor(e){super(e),N(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),p?h.push(this):r.jmp((()=>(e=>{if(0==(1&r.t)){const t=F(e),n=t.O,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){k(t,t.v=n);break}}n.k&&Object.entries(n.k).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=B(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(U(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){_(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=a(n);if(!D.has(t)){const l=()=>{};((e,t,n)=>{let l=D.get(e);i&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,D.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.v,r=()=>C(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){r.jmp((()=>{}))}componentOnReady(){return F(this).T}};s.A=e[0],l.includes(o)||c.get(o)||(n.push(o),c.define(o,U(u,s,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),p=!1,h.length?h.map((e=>e.connectedCallback())):r.jmp((()=>d=setTimeout(A,30)))},q=new WeakMap,F=e=>q.get(e),H=(e,t)=>q.set(t.j=e,t),N=(e,t)=>{const n={t:0,m:e,O:t,C:new Map};return n.T=new Promise((e=>n.M=e)),e["s-p"]=[],e["s-rc"]=[],q.set(e,n)},V=(e,t)=>t in e,_=(e,t)=>(0,console.error)(e,t),z=new Map,B=e=>{const t=e.o.replace(/-/g,"_"),n=e.A,l=z.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(z.set(n,e),e[t])),_)},D=new Map,G=[],I=[],J=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&r.t?X(Q):r.raf(Q))},K=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){_(e)}e.length=0},Q=()=>{K(G),K(I),(l=G.length>0)&&r.raf(Q)},X=e=>c().then(e),Y=J(I,!0);export{W as b,M as g,h,c as p,H as r}