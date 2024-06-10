var Vr=Object.defineProperty;var Tr=(e,t,i)=>t in e?Vr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var Lt=(e,t,i)=>(Tr(e,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();function be(){}function ks(e){return e()}function Cn(){return Object.create(null)}function Tt(e){e.forEach(ks)}function Ss(e){return typeof e=="function"}function Ir(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Lr(e){return Object.keys(e).length===0}function S(e,t){e.appendChild(t)}function vt(e,t,i){e.insertBefore(t,i||null)}function dt(e){e.parentNode&&e.parentNode.removeChild(e)}function Rs(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function E(e){return document.createElement(e)}function an(e){return document.createTextNode(e)}function Y(){return an(" ")}function Er(){return an("")}function Q(e,t,i,n){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i,n)}function St(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function F(e,t,i){const n=t.toLowerCase();n in e?e[n]=typeof e[n]=="boolean"&&i===""?!0:i:t in e?e[t]=typeof e[t]=="boolean"&&i===""?!0:i:St(e,t,i)}function Pr(e){return Array.from(e.childNodes)}let me;function de(e){me=e}function Ar(){if(!me)throw new Error("Function called outside component initialization");return me}function Or(e){Ar().$$.after_update.push(e)}const Ut=[],Vn=[];let Wt=[];const Tn=[],zr=Promise.resolve();let Ji=!1;function Nr(){Ji||(Ji=!0,zr.then(Ds))}function Zi(e){Wt.push(e)}const Li=new Set;let jt=0;function Ds(){if(jt!==0)return;const e=me;do{try{for(;jt<Ut.length;){const t=Ut[jt];jt++,de(t),Br(t.$$)}}catch(t){throw Ut.length=0,jt=0,t}for(de(null),Ut.length=0,jt=0;Vn.length;)Vn.pop()();for(let t=0;t<Wt.length;t+=1){const i=Wt[t];Li.has(i)||(Li.add(i),i())}Wt.length=0}while(Ut.length);for(;Tn.length;)Tn.pop()();Ji=!1,Li.clear(),de(e)}function Br(e){if(e.fragment!==null){e.update(),Tt(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Zi)}}function Mr(e){const t=[],i=[];Wt.forEach(n=>e.indexOf(n)===-1?t.push(n):i.push(n)),i.forEach(n=>n()),Wt=t}const _r=new Set;function Hr(e,t){e&&e.i&&(_r.delete(e),e.i(t))}function We(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function jr(e,t,i){const{fragment:n,after_update:s}=e.$$;n&&n.m(t,i),Zi(()=>{const r=e.$$.on_mount.map(ks).filter(Ss);e.$$.on_destroy?e.$$.on_destroy.push(...r):Tt(r),e.$$.on_mount=[]}),s.forEach(Zi)}function Ur(e,t){const i=e.$$;i.fragment!==null&&(Mr(i.after_update),Tt(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function qr(e,t){e.$$.dirty[0]===-1&&(Ut.push(e),Nr(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Gr(e,t,i,n,s,r,o=null,a=[-1]){const c=me;de(e);const l=e.$$={fragment:null,ctx:[],props:r,update:be,not_equal:s,bound:Cn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Cn(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=i?i(e,t.props||{},(d,v,...$)=>{const y=$.length?$[0]:v;return l.ctx&&s(l.ctx[d],l.ctx[d]=y)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](y),u&&qr(e,d)),v}):[],l.update(),u=!0,Tt(l.before_update),l.fragment=n?n(l.ctx):!1,t.target){if(t.hydrate){const d=Pr(t.target);l.fragment&&l.fragment.l(d),d.forEach(dt)}else l.fragment&&l.fragment.c();t.intro&&Hr(e.$$.fragment),jr(e,t.target,t.anchor),Ds()}de(c)}class Wr{constructor(){Lt(this,"$$");Lt(this,"$$set")}$destroy(){Ur(this,1),this.$destroy=be}$on(t,i){if(!Ss(i))return be;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(i),()=>{const s=n.indexOf(i);s!==-1&&n.splice(s,1)}}$set(t){this.$$set&&!Lr(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Xr="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Xr);const wt=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();wt.trustedTypes===void 0&&(wt.trustedTypes={createPolicy:(e,t)=>t});const Cs={configurable:!1,enumerable:!1,writable:!1};wt.FAST===void 0&&Reflect.defineProperty(wt,"FAST",Object.assign({value:Object.create(null)},Cs));const we=wt.FAST;if(we.getById===void 0){const e=Object.create(null);Reflect.defineProperty(we,"getById",Object.assign({value(t,i){let n=e[t];return n===void 0&&(n=i?e[t]=i():null),n}},Cs))}const fe=Object.freeze([]);function Vs(){const e=new WeakMap;return function(t){let i=e.get(t);if(i===void 0){let n=Reflect.getPrototypeOf(t);for(;i===void 0&&n!==null;)i=e.get(n),n=Reflect.getPrototypeOf(n);i=i===void 0?[]:i.slice(0),e.set(t,i)}return i}}const Ei=wt.FAST.getById(1,()=>{const e=[],t=[];function i(){if(t.length)throw t.shift()}function n(o){try{o.call()}catch(a){t.push(a),setTimeout(i,0)}}function s(){let a=0;for(;a<e.length;)if(n(e[a]),a++,a>1024){for(let c=0,l=e.length-a;c<l;c++)e[c]=e[c+a];e.length-=a,a=0}e.length=0}function r(o){e.length<1&&wt.requestAnimationFrame(s),e.push(o)}return Object.freeze({enqueue:r,process:s})}),Ts=wt.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let Pi=Ts;const pe=`fast-${Math.random().toString(36).substring(2,8)}`,Is=`${pe}{`,ln=`}${pe}`,R=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(Pi!==Ts)throw new Error("The HTML policy can only be set once.");Pi=e},createHTML(e){return Pi.createHTML(e)},isMarker(e){return e&&e.nodeType===8&&e.data.startsWith(pe)},extractDirectiveIndexFromMarker(e){return parseInt(e.data.replace(`${pe}:`,""))},createInterpolationPlaceholder(e){return`${Is}${e}${ln}`},createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder(e){return`<!--${pe}:${e}-->`},queueUpdate:Ei.enqueue,processUpdates:Ei.process,nextUpdate(){return new Promise(Ei.enqueue)},setAttribute(e,t,i){i==null?e.removeAttribute(t):e.setAttribute(t,i)},setBooleanAttribute(e,t,i){i?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;t!==null;t=e.firstChild)e.removeChild(t)},createTemplateWalker(e){return document.createTreeWalker(e,133,null,!1)}});class Ki{constructor(t,i){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=i}has(t){return this.spillover===void 0?this.sub1===t||this.sub2===t:this.spillover.indexOf(t)!==-1}subscribe(t){const i=this.spillover;if(i===void 0){if(this.has(t))return;if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else i.indexOf(t)===-1&&i.push(t)}unsubscribe(t){const i=this.spillover;if(i===void 0)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}notify(t){const i=this.spillover,n=this.source;if(i===void 0){const s=this.sub1,r=this.sub2;s!==void 0&&s.handleChange(n,t),r!==void 0&&r.handleChange(n,t)}else for(let s=0,r=i.length;s<r;++s)i[s].handleChange(n,t)}}class Ls{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var i;const n=this.subscribers[t];n!==void 0&&n.notify(t),(i=this.sourceSubscribers)===null||i===void 0||i.notify(t)}subscribe(t,i){var n;if(i){let s=this.subscribers[i];s===void 0&&(this.subscribers[i]=s=new Ki(this.source)),s.subscribe(t)}else this.sourceSubscribers=(n=this.sourceSubscribers)!==null&&n!==void 0?n:new Ki(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,i){var n;if(i){const s=this.subscribers[i];s!==void 0&&s.unsubscribe(t)}else(n=this.sourceSubscribers)===null||n===void 0||n.unsubscribe(t)}}const j=we.getById(2,()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,i=R.queueUpdate;let n,s=l=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(l){let u=l.$fastController||t.get(l);return u===void 0&&(Array.isArray(l)?u=s(l):t.set(l,u=new Ls(l))),u}const o=Vs();class a{constructor(u){this.name=u,this.field=`_${u}`,this.callback=`${u}Changed`}getValue(u){return n!==void 0&&n.watch(u,this.name),u[this.field]}setValue(u,d){const v=this.field,$=u[v];if($!==d){u[v]=d;const y=u[this.callback];typeof y=="function"&&y.call(u,$,d),r(u).notify(this.name)}}}class c extends Ki{constructor(u,d,v=!1){super(u,d),this.binding=u,this.isVolatileBinding=v,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(u,d){this.needsRefresh&&this.last!==null&&this.disconnect();const v=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const $=this.binding(u,d);return n=v,$}disconnect(){if(this.last!==null){let u=this.first;for(;u!==void 0;)u.notifier.unsubscribe(this,u.propertyName),u=u.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(u,d){const v=this.last,$=r(u),y=v===null?this.first:{};if(y.propertySource=u,y.propertyName=d,y.notifier=$,$.subscribe(this,d),v!==null){if(!this.needsRefresh){let m;n=void 0,m=v.propertySource[v.propertyName],n=this,u===m&&(this.needsRefresh=!0)}v.next=y}this.last=y}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let u=this.first;return{next:()=>{const d=u;return d===void 0?{value:void 0,done:!0}:(u=u.next,{value:d,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(l){s=l},getNotifier:r,track(l,u){n!==void 0&&n.watch(l,u)},trackVolatile(){n!==void 0&&(n.needsRefresh=!0)},notify(l,u){r(l).notify(u)},defineProperty(l,u){typeof u=="string"&&(u=new a(u)),o(l).push(u),Reflect.defineProperty(l,u.name,{enumerable:!0,get:function(){return u.getValue(this)},set:function(d){u.setValue(this,d)}})},getAccessors:o,binding(l,u,d=this.isVolatileBinding(l)){return new c(l,u,d)},isVolatileBinding(l){return e.test(l.toString())}})});function z(e,t){j.defineProperty(e,t)}const In=we.getById(3,()=>{let e=null;return{get(){return e},set(t){e=t}}});class ye{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return In.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){In.set(t)}}j.defineProperty(ye.prototype,"index");j.defineProperty(ye.prototype,"length");const ge=Object.seal(new ye);class cn{constructor(){this.targetIndex=0}}class Es extends cn{constructor(){super(...arguments),this.createPlaceholder=R.createInterpolationPlaceholder}}class un extends cn{constructor(t,i,n){super(),this.name=t,this.behavior=i,this.options=n}createPlaceholder(t){return R.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function Yr(e,t){this.source=e,this.context=t,this.bindingObserver===null&&(this.bindingObserver=j.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function Qr(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function Jr(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Zr(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function Kr(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function to(e){R.setAttribute(this.target,this.targetName,e)}function eo(e){R.setBooleanAttribute(this.target,this.targetName,e)}function io(e){if(e==null&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;t===void 0?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function no(e){this.target[this.targetName]=e}function so(e){const t=this.classVersions||Object.create(null),i=this.target;let n=this.version||0;if(e!=null&&e.length){const s=e.split(/\s+/);for(let r=0,o=s.length;r<o;++r){const a=s[r];a!==""&&(t[a]=n,i.classList.add(a))}}if(this.classVersions=t,this.version=n+1,n!==0){n-=1;for(const s in t)t[s]===n&&i.classList.remove(s)}}class hn extends Es{constructor(t){super(),this.binding=t,this.bind=Yr,this.unbind=Jr,this.updateTarget=to,this.isBindingVolatile=j.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,t!==void 0)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=no,this.cleanedTargetName==="innerHTML"){const i=this.binding;this.binding=(n,s)=>R.createHTML(i(n,s))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=eo;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=Qr,this.unbind=Kr;break;default:this.cleanedTargetName=t,t==="class"&&(this.updateTarget=so);break}}targetAtContent(){this.updateTarget=io,this.unbind=Zr}createBehavior(t){return new ro(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class ro{constructor(t,i,n,s,r,o,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=i,this.isBindingVolatile=n,this.bind=s,this.unbind=r,this.updateTarget=o,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){ye.setEvent(t);const i=this.binding(this.source,this.context);ye.setEvent(null),i!==!0&&t.preventDefault()}}let Ai=null;class dn{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Ai=this}static borrow(t){const i=Ai||new dn;return i.directives=t,i.reset(),Ai=null,i}}function oo(e){if(e.length===1)return e[0];let t;const i=e.length,n=e.map(o=>typeof o=="string"?()=>o:(t=o.targetName||t,o.binding)),s=(o,a)=>{let c="";for(let l=0;l<i;++l)c+=n[l](o,a);return c},r=new hn(s);return r.targetName=t,r}const ao=ln.length;function Ps(e,t){const i=t.split(Is);if(i.length===1)return null;const n=[];for(let s=0,r=i.length;s<r;++s){const o=i[s],a=o.indexOf(ln);let c;if(a===-1)c=o;else{const l=parseInt(o.substring(0,a));n.push(e.directives[l]),c=o.substring(a+ao)}c!==""&&n.push(c)}return n}function Ln(e,t,i=!1){const n=t.attributes;for(let s=0,r=n.length;s<r;++s){const o=n[s],a=o.value,c=Ps(e,a);let l=null;c===null?i&&(l=new hn(()=>a),l.targetName=o.name):l=oo(c),l!==null&&(t.removeAttributeNode(o),s--,r--,e.addFactory(l))}}function lo(e,t,i){const n=Ps(e,t.textContent);if(n!==null){let s=t;for(let r=0,o=n.length;r<o;++r){const a=n[r],c=r===0?t:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);typeof a=="string"?c.textContent=a:(c.textContent=" ",e.captureContentBinding(a)),s=c,e.targetIndex++,c!==t&&i.nextNode()}e.targetIndex--}}function co(e,t){const i=e.content;document.adoptNode(i);const n=dn.borrow(t);Ln(n,e,!0);const s=n.behaviorFactories;n.reset();const r=R.createTemplateWalker(i);let o;for(;o=r.nextNode();)switch(n.targetIndex++,o.nodeType){case 1:Ln(n,o);break;case 3:lo(n,o,r);break;case 8:R.isMarker(o)&&n.addFactory(t[R.extractDirectiveIndexFromMarker(o)])}let a=0;(R.isMarker(i.firstChild)||i.childNodes.length===1&&t.length)&&(i.insertBefore(document.createComment(""),i.firstChild),a=-1);const c=n.behaviorFactories;return n.release(),{fragment:i,viewBehaviorFactories:c,hostBehaviorFactories:s,targetOffset:a}}const Oi=document.createRange();class uo{constructor(t,i){this.fragment=t,this.behaviors=i,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const i=this.lastChild;if(t.previousSibling===i)return;const n=t.parentNode;let s=this.firstChild,r;for(;s!==i;)r=s.nextSibling,n.insertBefore(s,t),s=r;n.insertBefore(i,t)}}remove(){const t=this.fragment,i=this.lastChild;let n=this.firstChild,s;for(;n!==i;)s=n.nextSibling,t.appendChild(n),n=s;t.appendChild(i)}dispose(){const t=this.firstChild.parentNode,i=this.lastChild;let n=this.firstChild,s;for(;n!==i;)s=n.nextSibling,t.removeChild(n),n=s;t.removeChild(i);const r=this.behaviors,o=this.source;for(let a=0,c=r.length;a<c;++a)r[a].unbind(o)}bind(t,i){const n=this.behaviors;if(this.source!==t)if(this.source!==null){const s=this.source;this.source=t,this.context=i;for(let r=0,o=n.length;r<o;++r){const a=n[r];a.unbind(s),a.bind(t,i)}}else{this.source=t,this.context=i;for(let s=0,r=n.length;s<r;++s)n[s].bind(t,i)}}unbind(){if(this.source===null)return;const t=this.behaviors,i=this.source;for(let n=0,s=t.length;n<s;++n)t[n].unbind(i);this.source=null}static disposeContiguousBatch(t){if(t.length!==0){Oi.setStartBefore(t[0].firstChild),Oi.setEndAfter(t[t.length-1].lastChild),Oi.deleteContents();for(let i=0,n=t.length;i<n;++i){const s=t[i],r=s.behaviors,o=s.source;for(let a=0,c=r.length;a<c;++a)r[a].unbind(o)}}}}class En{constructor(t,i){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=i}create(t){if(this.fragment===null){let l;const u=this.html;if(typeof u=="string"){l=document.createElement("template"),l.innerHTML=R.createHTML(u);const v=l.content.firstElementChild;v!==null&&v.tagName==="TEMPLATE"&&(l=v)}else l=u;const d=co(l,this.directives);this.fragment=d.fragment,this.viewBehaviorFactories=d.viewBehaviorFactories,this.hostBehaviorFactories=d.hostBehaviorFactories,this.targetOffset=d.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const i=this.fragment.cloneNode(!0),n=this.viewBehaviorFactories,s=new Array(this.behaviorCount),r=R.createTemplateWalker(i);let o=0,a=this.targetOffset,c=r.nextNode();for(let l=n.length;o<l;++o){const u=n[o],d=u.targetIndex;for(;c!==null;)if(a===d){s[o]=u.createBehavior(c);break}else c=r.nextNode(),a++}if(this.hasHostBehaviors){const l=this.hostBehaviorFactories;for(let u=0,d=l.length;u<d;++u,++o)s[o]=l[u].createBehavior(t)}return new uo(i,s)}render(t,i,n){typeof i=="string"&&(i=document.getElementById(i)),n===void 0&&(n=i);const s=this.create(n);return s.bind(t,ge),s.appendTo(i),s}}const ho=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function J(e,...t){const i=[];let n="";for(let s=0,r=e.length-1;s<r;++s){const o=e[s];let a=t[s];if(n+=o,a instanceof En){const c=a;a=()=>c}if(typeof a=="function"&&(a=new hn(a)),a instanceof Es){const c=ho.exec(o);c!==null&&(a.targetName=c[2])}a instanceof cn?(n+=a.createPlaceholder(i.length),i.push(a)):n+=a}return n+=e[e.length-1],new En(n,i)}class et{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}}et.create=(()=>{if(R.supportsAdoptedStyleSheets){const e=new Map;return t=>new fo(t,e)}return e=>new vo(e)})();function fn(e){return e.map(t=>t instanceof et?fn(t.styles):[t]).reduce((t,i)=>t.concat(i),[])}function As(e){return e.map(t=>t instanceof et?t.behaviors:null).reduce((t,i)=>i===null?t:(t===null&&(t=[]),t.concat(i)),null)}const Os=Symbol("prependToAdoptedStyleSheets");function zs(e){const t=[],i=[];return e.forEach(n=>(n[Os]?t:i).push(n)),{prepend:t,append:i}}let Ns=(e,t)=>{const{prepend:i,append:n}=zs(t);e.adoptedStyleSheets=[...i,...e.adoptedStyleSheets,...n]},Bs=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(i=>t.indexOf(i)===-1)};if(R.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Ns=(e,t)=>{const{prepend:i,append:n}=zs(t);e.adoptedStyleSheets.splice(0,0,...i),e.adoptedStyleSheets.push(...n)},Bs=(e,t)=>{for(const i of t){const n=e.adoptedStyleSheets.indexOf(i);n!==-1&&e.adoptedStyleSheets.splice(n,1)}}}catch{}class fo extends et{constructor(t,i){super(),this.styles=t,this.styleSheetCache=i,this._styleSheets=void 0,this.behaviors=As(t)}get styleSheets(){if(this._styleSheets===void 0){const t=this.styles,i=this.styleSheetCache;this._styleSheets=fn(t).map(n=>{if(n instanceof CSSStyleSheet)return n;let s=i.get(n);return s===void 0&&(s=new CSSStyleSheet,s.replaceSync(n),i.set(n,s)),s})}return this._styleSheets}addStylesTo(t){Ns(t,this.styleSheets),super.addStylesTo(t)}removeStylesFrom(t){Bs(t,this.styleSheets),super.removeStylesFrom(t)}}let po=0;function go(){return`fast-style-class-${++po}`}class vo extends et{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=As(t),this.styleSheets=fn(t),this.styleClass=go()}addStylesTo(t){const i=this.styleSheets,n=this.styleClass;t=this.normalizeTarget(t);for(let s=0;s<i.length;s++){const r=document.createElement("style");r.innerHTML=i[s],r.className=n,t.append(r)}super.addStylesTo(t)}removeStylesFrom(t){t=this.normalizeTarget(t);const i=t.querySelectorAll(`.${this.styleClass}`);for(let n=0,s=i.length;n<s;++n)t.removeChild(i[n]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const Xe=Object.freeze({locate:Vs()}),bo={toView(e){return e?"true":"false"},fromView(e){return!(e==null||e==="false"||e===!1||e===0)}},pn={toView(e){if(e==null)return null;const t=e*1;return isNaN(t)?null:t.toString()},fromView(e){if(e==null)return null;const t=e*1;return isNaN(t)?null:t}};class Ye{constructor(t,i,n=i.toLowerCase(),s="reflect",r){this.guards=new Set,this.Owner=t,this.name=i,this.attribute=n,this.mode=s,this.converter=r,this.fieldName=`_${i}`,this.callbackName=`${i}Changed`,this.hasCallback=this.callbackName in t.prototype,s==="boolean"&&r===void 0&&(this.converter=bo)}setValue(t,i){const n=t[this.fieldName],s=this.converter;s!==void 0&&(i=s.fromView(i)),n!==i&&(t[this.fieldName]=i,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](n,i),t.$fastController.notify(this.name))}getValue(t){return j.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,i){this.guards.has(t)||(this.guards.add(t),this.setValue(t,i),this.guards.delete(t))}tryReflectToAttribute(t){const i=this.mode,n=this.guards;n.has(t)||i==="fromView"||R.queueUpdate(()=>{n.add(t);const s=t[this.fieldName];switch(i){case"reflect":const r=this.converter;R.setAttribute(t,this.attribute,r!==void 0?r.toView(s):s);break;case"boolean":R.setBooleanAttribute(t,this.attribute,s);break}n.delete(t)})}static collect(t,...i){const n=[];i.push(Xe.locate(t));for(let s=0,r=i.length;s<r;++s){const o=i[s];if(o!==void 0)for(let a=0,c=o.length;a<c;++a){const l=o[a];typeof l=="string"?n.push(new Ye(t,l)):n.push(new Ye(t,l.property,l.attribute,l.mode,l.converter))}}return n}}function b(e,t){let i;function n(s,r){arguments.length>1&&(i.property=r),Xe.locate(s.constructor).push(i)}if(arguments.length>1){i={},n(e,t);return}return i=e===void 0?{}:e,n}const Pn={mode:"open"},An={},tn=we.getById(4,()=>{const e=new Map;return Object.freeze({register(t){return e.has(t.type)?!1:(e.set(t.type,t),!0)},getByType(t){return e.get(t)}})});class ii{constructor(t,i=t.definition){typeof i=="string"&&(i={name:i}),this.type=t,this.name=i.name,this.template=i.template;const n=Ye.collect(t,i.attributes),s=new Array(n.length),r={},o={};for(let a=0,c=n.length;a<c;++a){const l=n[a];s[a]=l.attribute,r[l.name]=l,o[l.attribute]=l}this.attributes=n,this.observedAttributes=s,this.propertyLookup=r,this.attributeLookup=o,this.shadowOptions=i.shadowOptions===void 0?Pn:i.shadowOptions===null?void 0:Object.assign(Object.assign({},Pn),i.shadowOptions),this.elementOptions=i.elementOptions===void 0?An:Object.assign(Object.assign({},An),i.elementOptions),this.styles=i.styles===void 0?void 0:Array.isArray(i.styles)?et.create(i.styles):i.styles instanceof et?i.styles:et.create([i.styles])}get isDefined(){return!!tn.getByType(this.type)}define(t=customElements){const i=this.type;if(tn.register(this)){const n=this.attributes,s=i.prototype;for(let r=0,o=n.length;r<o;++r)j.defineProperty(s,n[r]);Reflect.defineProperty(i,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,i,this.elementOptions),this}}ii.forType=tn.getByType;const Ms=new WeakMap,mo={bubbles:!0,composed:!0,cancelable:!0};function zi(e){return e.shadowRoot||Ms.get(e)||null}class gn extends Ls{constructor(t,i){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=i;const n=i.shadowOptions;if(n!==void 0){const r=t.attachShadow(n);n.mode==="closed"&&Ms.set(t,r)}const s=j.getAccessors(t);if(s.length>0){const r=this.boundObservables=Object.create(null);for(let o=0,a=s.length;o<a;++o){const c=s[o].name,l=t[c];l!==void 0&&(delete t[c],r[c]=l)}}}get isConnected(){return j.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,j.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=t,!this.needsInitialization&&t!==null&&this.addStyles(t))}addStyles(t){const i=zi(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)i.append(t);else if(!t.isAttachedTo(i)){const n=t.behaviors;t.addStylesTo(i),n!==null&&this.addBehaviors(n)}}removeStyles(t){const i=zi(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)i.removeChild(t);else if(t.isAttachedTo(i)){const n=t.behaviors;t.removeStylesFrom(i),n!==null&&this.removeBehaviors(n)}}addBehaviors(t){const i=this.behaviors||(this.behaviors=new Map),n=t.length,s=[];for(let r=0;r<n;++r){const o=t[r];i.has(o)?i.set(o,i.get(o)+1):(i.set(o,1),s.push(o))}if(this._isConnected){const r=this.element;for(let o=0;o<s.length;++o)s[o].bind(r,ge)}}removeBehaviors(t,i=!1){const n=this.behaviors;if(n===null)return;const s=t.length,r=[];for(let o=0;o<s;++o){const a=t[o];if(n.has(a)){const c=n.get(a)-1;c===0||i?n.delete(a)&&r.push(a):n.set(a,c)}}if(this._isConnected){const o=this.element;for(let a=0;a<r.length;++a)r[a].unbind(o)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(t,ge);const i=this.behaviors;if(i!==null)for(const[n]of i)n.bind(t,ge);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;t!==null&&t.unbind();const i=this.behaviors;if(i!==null){const n=this.element;for(const[s]of i)s.unbind(n)}}onAttributeChangedCallback(t,i,n){const s=this.definition.attributeLookup[t];s!==void 0&&s.onAttributeChangedCallback(this.element,n)}emit(t,i,n){return this._isConnected?this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:i},mo),n))):!1}finishInitialization(){const t=this.element,i=this.boundObservables;if(i!==null){const s=Object.keys(i);for(let r=0,o=s.length;r<o;++r){const a=s[r];t[a]=i[a]}this.boundObservables=null}const n=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():n.template&&(this._template=n.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():n.styles&&(this._styles=n.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const i=this.element,n=zi(i)||i;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||R.removeChildNodes(n),t&&(this.view=t.render(i,n,i))}static forCustomElement(t){const i=t.$fastController;if(i!==void 0)return i;const n=ii.forType(t.constructor);if(n===void 0)throw new Error("Missing FASTElement definition.");return t.$fastController=new gn(t,n)}}function On(e){return class extends e{constructor(){super(),gn.forCustomElement(this)}$emit(t,i,n){return this.$fastController.emit(t,i,n)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,i,n){this.$fastController.onAttributeChangedCallback(t,i,n)}}}const ni=Object.assign(On(HTMLElement),{from(e){return On(e)},define(e,t){return new ii(e,t).define().type}});class vn{createCSS(){return""}createBehavior(){}}function _s(e,t){const i=[];let n="";const s=[];for(let r=0,o=e.length-1;r<o;++r){n+=e[r];let a=t[r];if(a instanceof vn){const c=a.createBehavior();a=a.createCSS(),c&&s.push(c)}a instanceof et||a instanceof CSSStyleSheet?(n.trim()!==""&&(i.push(n),n=""),i.push(a)):n+=a}return n+=e[e.length-1],n.trim()!==""&&i.push(n),{styles:i,behaviors:s}}function V(e,...t){const{styles:i,behaviors:n}=_s(e,t),s=et.create(i);return n.length&&s.withBehaviors(...n),s}class wo extends vn{constructor(t,i){super(),this.behaviors=i,this.css="";const n=t.reduce((s,r)=>(typeof r=="string"?this.css+=r:s.push(r),s),[]);n.length&&(this.styles=et.create(n))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function ot(e,...t){const{styles:i,behaviors:n}=_s(e,t);return new wo(i,n)}class yo{constructor(t,i){this.target=t,this.propertyName=i}bind(t){t[this.propertyName]=this.target}unbind(){}}function rt(e){return new un("fast-ref",yo,e)}const Hs=e=>typeof e=="function",xo=()=>null;function zn(e){return e===void 0?xo:Hs(e)?e:()=>e}function qt(e,t,i){const n=Hs(e)?e:()=>e,s=zn(t),r=zn(i);return(o,a)=>n(o,a)?s(o,a):r(o,a)}function $o(e){return function(t,i,n){return t.nodeType===1}}class js{constructor(t,i){this.target=t,this.options=i,this.source=null}bind(t){const i=this.options.property;this.shouldUpdate=j.getAccessors(t).some(n=>n.name===i),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(fe),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return this.options.filter!==void 0&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class Fo extends js{constructor(t,i){super(t,i)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Ce(e){return typeof e=="string"&&(e={property:e}),new un("fast-slotted",Fo,e)}class ko extends js{constructor(t,i){super(t,i),this.observer=null,i.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function So(e){return typeof e=="string"&&(e={property:e}),new un("fast-children",ko,e)}class si{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const ri=(e,t)=>J`
    <span
        part="end"
        ${rt("endContainer")}
        class=${i=>t.end?"end":void 0}
    >
        <slot name="end" ${rt("end")} @slotchange="${i=>i.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,oi=(e,t)=>J`
    <span
        part="start"
        ${rt("startContainer")}
        class="${i=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${rt("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;J`
    <span part="end" ${rt("endContainer")}>
        <slot
            name="end"
            ${rt("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`;J`
    <span part="start" ${rt("startContainer")}>
        <slot
            name="start"
            ${rt("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function p(e,t,i,n){var s=arguments.length,r=s<3?t:n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,i,r):o(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}const Ni=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(i){Reflect.defineMetadata(e,t,i)}},Reflect.defineMetadata=function(e,t,i){let n=Ni.get(i);n===void 0&&Ni.set(i,n=new Map),n.set(e,t)},Reflect.getOwnMetadata=function(e,t){const i=Ni.get(t);if(i!==void 0)return i.get(e)});class Ro{constructor(t,i){this.container=t,this.key=i}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,qs(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,i){const{container:n,key:s}=this;return this.container=this.key=void 0,n.registerResolver(s,new lt(s,t,i))}}function ae(e){const t=e.slice(),i=Object.keys(e),n=i.length;let s;for(let r=0;r<n;++r)s=i[r],Gs(s)||(t[s]=e[s]);return t}const Do=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton(e){return new lt(e,1,e)},transient(e){return new lt(e,2,e)}}),Bi=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Do.singleton})}),Nn=new Map;function Bn(e){return t=>Reflect.getOwnMetadata(e,t)}let Mn=null;const O=Object.freeze({createContainer(e){return new ve(null,Object.assign({},Bi.default,e))},findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:O.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(Us,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||O.getOrCreateDOMContainer()},getOrCreateDOMContainer(e,t){return e?e.$$container$$||new ve(e,Object.assign({},Bi.default,t,{parentLocator:O.findParentContainer})):Mn||(Mn=new ve(null,Object.assign({},Bi.default,t,{parentLocator:()=>null})))},getDesignParamtypes:Bn("design:paramtypes"),getAnnotationParamtypes:Bn("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return t===void 0&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=Nn.get(e);if(t===void 0){const i=e.inject;if(i===void 0){const n=O.getDesignParamtypes(e),s=O.getAnnotationParamtypes(e);if(n===void 0)if(s===void 0){const r=Object.getPrototypeOf(e);typeof r=="function"&&r!==Function.prototype?t=ae(O.getDependencies(r)):t=[]}else t=ae(s);else if(s===void 0)t=ae(n);else{t=ae(n);let r=s.length,o;for(let l=0;l<r;++l)o=s[l],o!==void 0&&(t[l]=o);const a=Object.keys(s);r=a.length;let c;for(let l=0;l<r;++l)c=a[l],Gs(c)||(t[c]=s[c])}}else t=ae(i);Nn.set(e,t)}return t},defineProperty(e,t,i,n=!1){const s=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let r=this[s];if(r===void 0&&(r=(this instanceof HTMLElement?O.findResponsibleContainer(this):O.getOrCreateDOMContainer()).get(i),this[s]=r,n&&this instanceof ni)){const a=this.$fastController,c=()=>{const u=O.findResponsibleContainer(this).get(i),d=this[s];u!==d&&(this[s]=r,a.notify(t))};a.subscribe({handleChange:c},"isConnected")}return r}})},createInterface(e,t){const i=typeof e=="function"?e:t,n=typeof e=="string"?e:e&&"friendlyName"in e&&e.friendlyName||Un,s=typeof e=="string"?!1:e&&"respectConnection"in e&&e.respectConnection||!1,r=function(o,a,c){if(o==null||new.target!==void 0)throw new Error(`No registration for interface: '${r.friendlyName}'`);if(a)O.defineProperty(o,a,r,s);else{const l=O.getOrCreateAnnotationParamTypes(o);l[c]=r}};return r.$isInterface=!0,r.friendlyName=n??"(anonymous)",i!=null&&(r.register=function(o,a){return i(new Ro(o,a??r))}),r.toString=function(){return`InterfaceSymbol<${r.friendlyName}>`},r},inject(...e){return function(t,i,n){if(typeof n=="number"){const s=O.getOrCreateAnnotationParamTypes(t),r=e[0];r!==void 0&&(s[n]=r)}else if(i)O.defineProperty(t,i,e[0]);else{const s=n?O.getOrCreateAnnotationParamTypes(n.value):O.getOrCreateAnnotationParamTypes(t);let r;for(let o=0;o<e.length;++o)r=e[o],r!==void 0&&(s[o]=r)}}},transient(e){return e.register=function(i){return xe.transient(e,e).register(i)},e.registerInRequestor=!1,e},singleton(e,t=Vo){return e.register=function(n){return xe.singleton(e,e).register(n)},e.registerInRequestor=t.scoped,e}}),Co=O.createInterface("Container");O.inject;const Vo={scoped:!1};class lt{constructor(t,i,n){this.key=t,this.strategy=i,this.state=n,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,i){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(i),this.strategy=0,this.resolving=!1,this.state}case 2:{const n=t.getFactory(this.state);if(n===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return n.construct(i)}case 3:return this.state(t,i,this);case 4:return this.state[0].resolve(t,i);case 5:return i.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var i,n,s;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return(s=(n=(i=t.getResolver(this.state))===null||i===void 0?void 0:i.getFactory)===null||n===void 0?void 0:n.call(i,t))!==null&&s!==void 0?s:null;default:return null}}}function _n(e){return this.get(e)}function To(e,t){return t(e)}class Io{constructor(t,i){this.Type=t,this.dependencies=i,this.transformers=null}construct(t,i){let n;return i===void 0?n=new this.Type(...this.dependencies.map(_n,t)):n=new this.Type(...this.dependencies.map(_n,t),...i),this.transformers==null?n:this.transformers.reduce(To,n)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const Lo={$isResolver:!0,resolve(e,t){return t}};function Ue(e){return typeof e.register=="function"}function Eo(e){return Ue(e)&&typeof e.registerInRequestor=="boolean"}function Hn(e){return Eo(e)&&e.registerInRequestor}function Po(e){return e.prototype!==void 0}const Ao=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Us="__DI_LOCATE_PARENT__",Mi=new Map;class ve{constructor(t,i){this.owner=t,this.config=i,this._parent=void 0,this.registerDepth=0,this.context=null,t!==null&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Co,Lo),t instanceof Node&&t.addEventListener(Us,n=>{n.composedPath()[0]!==this.owner&&(n.detail.container=this,n.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...i){return this.context=t,this.register(...i),this.context=null,this}register(...t){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let i,n,s,r,o;const a=this.context;for(let c=0,l=t.length;c<l;++c)if(i=t[c],!!qn(i))if(Ue(i))i.register(this,a);else if(Po(i))xe.singleton(i,i).register(this);else for(n=Object.keys(i),r=0,o=n.length;r<o;++r)s=i[n[r]],qn(s)&&(Ue(s)?s.register(this,a):this.register(s));return--this.registerDepth,this}registerResolver(t,i){Pe(t);const n=this.resolvers,s=n.get(t);return s==null?n.set(t,i):s instanceof lt&&s.strategy===4?s.state.push(i):n.set(t,new lt(t,4,[s,i])),i}registerTransformer(t,i){const n=this.getResolver(t);if(n==null)return!1;if(n.getFactory){const s=n.getFactory(this);return s==null?!1:(s.registerTransformer(i),!0)}return!1}getResolver(t,i=!0){if(Pe(t),t.resolve!==void 0)return t;let n=this,s;for(;n!=null;)if(s=n.resolvers.get(t),s==null){if(n.parent==null){const r=Hn(t)?this:n;return i?this.jitRegister(t,r):null}n=n.parent}else return s;return null}has(t,i=!1){return this.resolvers.has(t)?!0:i&&this.parent!=null?this.parent.has(t,!0):!1}get(t){if(Pe(t),t.$isResolver)return t.resolve(this,this);let i=this,n;for(;i!=null;)if(n=i.resolvers.get(t),n==null){if(i.parent==null){const s=Hn(t)?this:i;return n=this.jitRegister(t,s),n.resolve(i,this)}i=i.parent}else return n.resolve(i,this);throw new Error(`Unable to resolve key: ${String(t)}`)}getAll(t,i=!1){Pe(t);const n=this;let s=n,r;if(i){let o=fe;for(;s!=null;)r=s.resolvers.get(t),r!=null&&(o=o.concat(jn(r,s,n))),s=s.parent;return o}else for(;s!=null;)if(r=s.resolvers.get(t),r==null){if(s=s.parent,s==null)return fe}else return jn(r,s,n);return fe}getFactory(t){let i=Mi.get(t);if(i===void 0){if(Oo(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Mi.set(t,i=new Io(t,O.getDependencies(t)))}return i}registerFactory(t,i){Mi.set(t,i)}createChild(t){return new ve(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,i){if(typeof t!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(Ao.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(Ue(t)){const n=t.register(i);if(!(n instanceof Object)||n.resolve==null){const s=i.resolvers.get(t);if(s!=null)return s;throw new Error("A valid resolver was not returned from the static register method")}return n}else{if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const n=this.config.defaultResolver(t,i);return i.resolvers.set(t,n),n}}}}const _i=new WeakMap;function qs(e){return function(t,i,n){if(_i.has(n))return _i.get(n);const s=e(t,i,n);return _i.set(n,s),s}}const xe=Object.freeze({instance(e,t){return new lt(e,0,t)},singleton(e,t){return new lt(e,1,t)},transient(e,t){return new lt(e,2,t)},callback(e,t){return new lt(e,3,t)},cachedCallback(e,t){return new lt(e,3,qs(t))},aliasTo(e,t){return new lt(t,5,e)}});function Pe(e){if(e==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function jn(e,t,i){if(e instanceof lt&&e.strategy===4){const n=e.state;let s=n.length;const r=new Array(s);for(;s--;)r[s]=n[s].resolve(t,i);return r}return[e.resolve(t,i)]}const Un="(anonymous)";function qn(e){return typeof e=="object"&&e!==null||typeof e=="function"}const Oo=function(){const e=new WeakMap;let t=!1,i="",n=0;return function(s){return t=e.get(s),t===void 0&&(i=s.toString(),n=i.length,t=n>=29&&n<=100&&i.charCodeAt(n-1)===125&&i.charCodeAt(n-2)<=32&&i.charCodeAt(n-3)===93&&i.charCodeAt(n-4)===101&&i.charCodeAt(n-5)===100&&i.charCodeAt(n-6)===111&&i.charCodeAt(n-7)===99&&i.charCodeAt(n-8)===32&&i.charCodeAt(n-9)===101&&i.charCodeAt(n-10)===118&&i.charCodeAt(n-11)===105&&i.charCodeAt(n-12)===116&&i.charCodeAt(n-13)===97&&i.charCodeAt(n-14)===110&&i.charCodeAt(n-15)===88,e.set(s,t)),t}}(),Ae={};function Gs(e){switch(typeof e){case"number":return e>=0&&(e|0)===e;case"string":{const t=Ae[e];if(t!==void 0)return t;const i=e.length;if(i===0)return Ae[e]=!1;let n=0;for(let s=0;s<i;++s)if(n=e.charCodeAt(s),s===0&&n===48&&i>1||n<48||n>57)return Ae[e]=!1;return Ae[e]=!0}default:return!1}}function Gn(e){return`${e.toLowerCase()}:presentation`}const Oe=new Map,Ws=Object.freeze({define(e,t,i){const n=Gn(e);Oe.get(n)===void 0?Oe.set(n,t):Oe.set(n,!1),i.register(xe.instance(n,t))},forTag(e,t){const i=Gn(e),n=Oe.get(i);return n===!1?O.findResponsibleContainer(t).get(i):n||null}});class zo{constructor(t,i){this.template=t||null,this.styles=i===void 0?null:Array.isArray(i)?et.create(i):i instanceof et?i:et.create([i])}applyTo(t){const i=t.$fastController;i.template===null&&(i.template=this.template),i.styles===null&&(i.styles=this.styles)}}class it extends ni{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Ws.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(i={})=>new No(this===it?class extends it{}:this,t,i)}}p([z],it.prototype,"template",void 0);p([z],it.prototype,"styles",void 0);function le(e,t,i){return typeof e=="function"?e(t,i):e}class No{constructor(t,i,n){this.type=t,this.elementDefinition=i,this.overrideDefinition=n,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,i){const n=this.definition,s=this.overrideDefinition,o=`${n.prefix||i.elementPrefix}-${n.baseName}`;i.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const c=new zo(le(n.template,a,n),le(n.styles,a,n));a.definePresentation(c);let l=le(n.shadowOptions,a,n);a.shadowRootMode&&(l?s.shadowOptions||(l.mode=a.shadowRootMode):l!==null&&(l={mode:a.shadowRootMode})),a.defineElement({elementOptions:le(n.elementOptions,a,n),shadowOptions:l,attributes:le(n.attributes,a,n)})}})}}function Kt(e,...t){const i=Xe.locate(e);t.forEach(n=>{Object.getOwnPropertyNames(n.prototype).forEach(r=>{r!=="constructor"&&Object.defineProperty(e.prototype,r,Object.getOwnPropertyDescriptor(n.prototype,r))}),Xe.locate(n).forEach(r=>i.push(r))})}const Bo={horizontal:"horizontal",vertical:"vertical"};function Mo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function $e(...e){return e.every(t=>t instanceof HTMLElement)}function _o(e,t){return!e||!t||!$e(e)?void 0:Array.from(e.querySelectorAll(t)).filter(n=>n.offsetParent!==null)}function Ho(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}let Et;function jo(){if(typeof Et=="boolean")return Et;if(!Mo())return Et=!1,Et;const e=document.createElement("style"),t=Ho();t!==null&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),Et=!0}catch{Et=!1}finally{document.head.removeChild(e)}return Et}const Wn="resize",Xn="scroll";var Yn;(function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"})(Yn||(Yn={}));const Xs="ArrowDown",Ys="ArrowLeft",Qs="ArrowRight",Js="ArrowUp",bn="Enter",Zs="Home",Ks="End",Uo=" ";var Ct;(function(e){e.ltr="ltr",e.rtl="rtl"})(Ct||(Ct={}));var f;(function(e){e.Canvas="Canvas",e.CanvasText="CanvasText",e.LinkText="LinkText",e.VisitedText="VisitedText",e.ActiveText="ActiveText",e.ButtonFace="ButtonFace",e.ButtonText="ButtonText",e.Field="Field",e.FieldText="FieldText",e.Highlight="Highlight",e.HighlightText="HighlightText",e.GrayText="GrayText"})(f||(f={}));class _{}p([b({attribute:"aria-atomic"})],_.prototype,"ariaAtomic",void 0);p([b({attribute:"aria-busy"})],_.prototype,"ariaBusy",void 0);p([b({attribute:"aria-controls"})],_.prototype,"ariaControls",void 0);p([b({attribute:"aria-current"})],_.prototype,"ariaCurrent",void 0);p([b({attribute:"aria-describedby"})],_.prototype,"ariaDescribedby",void 0);p([b({attribute:"aria-details"})],_.prototype,"ariaDetails",void 0);p([b({attribute:"aria-disabled"})],_.prototype,"ariaDisabled",void 0);p([b({attribute:"aria-errormessage"})],_.prototype,"ariaErrormessage",void 0);p([b({attribute:"aria-flowto"})],_.prototype,"ariaFlowto",void 0);p([b({attribute:"aria-haspopup"})],_.prototype,"ariaHaspopup",void 0);p([b({attribute:"aria-hidden"})],_.prototype,"ariaHidden",void 0);p([b({attribute:"aria-invalid"})],_.prototype,"ariaInvalid",void 0);p([b({attribute:"aria-keyshortcuts"})],_.prototype,"ariaKeyshortcuts",void 0);p([b({attribute:"aria-label"})],_.prototype,"ariaLabel",void 0);p([b({attribute:"aria-labelledby"})],_.prototype,"ariaLabelledby",void 0);p([b({attribute:"aria-live"})],_.prototype,"ariaLive",void 0);p([b({attribute:"aria-owns"})],_.prototype,"ariaOwns",void 0);p([b({attribute:"aria-relevant"})],_.prototype,"ariaRelevant",void 0);p([b({attribute:"aria-roledescription"})],_.prototype,"ariaRoledescription",void 0);const en=e=>{const t=e.closest("[dir]");return t!==null&&t.dir==="rtl"?Ct.rtl:Ct.ltr};class qo{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,i)=>{var n;if(this.intersectionDetector!==null){if(this.observedElements.has(t)){(n=this.observedElements.get(t))===null||n===void 0||n.push(i);return}this.observedElements.set(t,[i]),this.intersectionDetector.observe(t)}},this.cancelRequestPosition=(t,i)=>{const n=this.observedElements.get(t);if(n!==void 0){const s=n.indexOf(i);s!==-1&&n.splice(s,1)}},this.initializeIntersectionDetector=()=>{wt.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(this.intersectionDetector===null)return;const i=[],n=[];t.forEach(s=>{var r;(r=this.intersectionDetector)===null||r===void 0||r.unobserve(s.target);const o=this.observedElements.get(s.target);o!==void 0&&(o.forEach(a=>{let c=i.indexOf(a);c===-1&&(c=i.length,i.push(a),n.push([])),n[c].push(s)}),this.observedElements.delete(s.target))}),i.forEach((s,r)=>{s(n[r])})},this.initializeIntersectionDetector()}}class C extends it{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=Ct.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(C.intersectionService.requestPosition(this,this.handleIntersection),C.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&C.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,C.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&C.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&C.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const i=t.find(r=>r.target===this),n=t.find(r=>r.target===this.anchorElement),s=t.find(r=>r.target===this.viewportElement);return i===void 0||s===void 0||n===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,n.boundingClientRect)||this.isRectDifferent(this.viewportRect,s.boundingClientRect)||this.isRectDifferent(this.regionRect,i.boundingClientRect)?(this.regionRect=i.boundingClientRect,this.anchorRect=n.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(s.boundingClientRect.x+document.documentElement.scrollLeft,s.boundingClientRect.y+document.documentElement.scrollTop,s.boundingClientRect.width,s.boundingClientRect.height):this.viewportRect=s.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,i)=>Math.abs(t.top-i.top)>this.updateThreshold||Math.abs(t.right-i.right)>this.updateThreshold||Math.abs(t.bottom-i.bottom)>this.updateThreshold||Math.abs(t.left-i.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=en(this),this.startObservers())},this.updateLayout=()=>{let t,i;if(this.horizontalPositioningMode!=="uncontrolled"){const r=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")i="center";else if(this.horizontalDefaultPosition!=="unset"){let v=this.horizontalDefaultPosition;if(v==="start"||v==="end"){const $=en(this);if($!==this.currentDirection){this.currentDirection=$,this.initialize();return}this.currentDirection===Ct.ltr?v=v==="start"?"left":"right":v=v==="start"?"right":"left"}switch(v){case"left":i=this.horizontalInset?"insetStart":"start";break;case"right":i=this.horizontalInset?"insetEnd":"end";break}}const o=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,a=this.anchorRect!==void 0?this.anchorRect.left:0,c=this.anchorRect!==void 0?this.anchorRect.right:0,l=this.anchorRect!==void 0?this.anchorRect.width:0,u=this.viewportRect!==void 0?this.viewportRect.left:0,d=this.viewportRect!==void 0?this.viewportRect.right:0;(i===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(i,a,c,l,u,d)<o)&&(i=this.getAvailableSpace(r[0],a,c,l,u,d)>this.getAvailableSpace(r[1],a,c,l,u,d)?r[0]:r[1])}if(this.verticalPositioningMode!=="uncontrolled"){const r=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")t="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end";break}const o=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,a=this.anchorRect!==void 0?this.anchorRect.top:0,c=this.anchorRect!==void 0?this.anchorRect.bottom:0,l=this.anchorRect!==void 0?this.anchorRect.height:0,u=this.viewportRect!==void 0?this.viewportRect.top:0,d=this.viewportRect!==void 0?this.viewportRect.bottom:0;(t===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,a,c,l,u,d)<o)&&(t=this.getAvailableSpace(r[0],a,c,l,u,d)>this.getAvailableSpace(r[1],a,c,l,u,d)?r[0]:r[1])}const n=this.getNextRegionDimension(i,t),s=this.horizontalPosition!==i||this.verticalPosition!==t;if(this.setHorizontalPosition(i,n),this.setVerticalPosition(t,n),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),s&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(t,i)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let n=0;switch(this.horizontalScaling){case"anchor":case"fill":n=this.horizontalViewportLock?this.viewportRect.width:i.width,this.regionWidth=`${n}px`;break;case"content":n=this.regionRect.width,this.regionWidth="unset";break}let s=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-n,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-n+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(s=(this.anchorRect.width-n)/2,this.translateX=this.baseHorizontalOffset+s,this.horizontalViewportLock){const r=this.anchorRect.left+s,o=this.anchorRect.right-s;r<this.viewportRect.left&&!(o>this.viewportRect.right)?this.translateX=this.translateX-(r-this.viewportRect.left):o>this.viewportRect.right&&!(r<this.viewportRect.left)&&(this.translateX=this.translateX-(o-this.viewportRect.right))}break}this.horizontalPosition=t},this.setVerticalPosition=(t,i)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let n=0;switch(this.verticalScaling){case"anchor":case"fill":n=this.verticalViewportLock?this.viewportRect.height:i.height,this.regionHeight=`${n}px`;break;case"content":n=this.regionRect.height,this.regionHeight="unset";break}let s=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-n,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-n+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(s=(this.anchorRect.height-n)/2,this.translateY=this.baseVerticalOffset+s,this.verticalViewportLock){const r=this.anchorRect.top+s,o=this.anchorRect.bottom-s;r<this.viewportRect.top&&!(o>this.viewportRect.bottom)?this.translateY=this.translateY-(r-this.viewportRect.top):o>this.viewportRect.bottom&&!(r<this.viewportRect.top)&&(this.translateY=this.translateY-(o-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,i,n,s,r,o)=>{const a=i-r,c=o-(i+s);switch(t){case"start":return a;case"insetStart":return a+s;case"insetEnd":return c+s;case"end":return c;case"center":return Math.min(a,c)*2+s}},this.getNextRegionDimension=(t,i)=>{const n={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return t!==void 0&&this.horizontalScaling==="fill"?n.width=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(n.width=this.anchorRect!==void 0?this.anchorRect.width:0),i!==void 0&&this.verticalScaling==="fill"?n.height=this.getAvailableSpace(i,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(n.height=this.anchorRect!==void 0?this.anchorRect.height:0),n},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Wn,this.update,{passive:!0}),window.addEventListener(Xn,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Wn,this.update),window.removeEventListener(Xn,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,i){this.$fastController.isConnected&&this.initialLayoutComplete&&(t==="auto"&&this.stopAutoUpdateEventListeners(),i==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),R.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}C.intersectionService=new qo;p([b],C.prototype,"anchor",void 0);p([b],C.prototype,"viewport",void 0);p([b({attribute:"horizontal-positioning-mode"})],C.prototype,"horizontalPositioningMode",void 0);p([b({attribute:"horizontal-default-position"})],C.prototype,"horizontalDefaultPosition",void 0);p([b({attribute:"horizontal-viewport-lock",mode:"boolean"})],C.prototype,"horizontalViewportLock",void 0);p([b({attribute:"horizontal-inset",mode:"boolean"})],C.prototype,"horizontalInset",void 0);p([b({attribute:"horizontal-threshold"})],C.prototype,"horizontalThreshold",void 0);p([b({attribute:"horizontal-scaling"})],C.prototype,"horizontalScaling",void 0);p([b({attribute:"vertical-positioning-mode"})],C.prototype,"verticalPositioningMode",void 0);p([b({attribute:"vertical-default-position"})],C.prototype,"verticalDefaultPosition",void 0);p([b({attribute:"vertical-viewport-lock",mode:"boolean"})],C.prototype,"verticalViewportLock",void 0);p([b({attribute:"vertical-inset",mode:"boolean"})],C.prototype,"verticalInset",void 0);p([b({attribute:"vertical-threshold"})],C.prototype,"verticalThreshold",void 0);p([b({attribute:"vertical-scaling"})],C.prototype,"verticalScaling",void 0);p([b({attribute:"fixed-placement",mode:"boolean"})],C.prototype,"fixedPlacement",void 0);p([b({attribute:"auto-update-mode"})],C.prototype,"autoUpdateMode",void 0);p([z],C.prototype,"anchorElement",void 0);p([z],C.prototype,"viewportElement",void 0);p([z],C.prototype,"initialLayoutComplete",void 0);const Go=(e,t)=>J`
    <button
        class="control"
        part="control"
        ?autofocus="${i=>i.autofocus}"
        ?disabled="${i=>i.disabled}"
        form="${i=>i.formId}"
        formaction="${i=>i.formaction}"
        formenctype="${i=>i.formenctype}"
        formmethod="${i=>i.formmethod}"
        formnovalidate="${i=>i.formnovalidate}"
        formtarget="${i=>i.formtarget}"
        name="${i=>i.name}"
        type="${i=>i.type}"
        value="${i=>i.value}"
        aria-atomic="${i=>i.ariaAtomic}"
        aria-busy="${i=>i.ariaBusy}"
        aria-controls="${i=>i.ariaControls}"
        aria-current="${i=>i.ariaCurrent}"
        aria-describedby="${i=>i.ariaDescribedby}"
        aria-details="${i=>i.ariaDetails}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-errormessage="${i=>i.ariaErrormessage}"
        aria-expanded="${i=>i.ariaExpanded}"
        aria-flowto="${i=>i.ariaFlowto}"
        aria-haspopup="${i=>i.ariaHaspopup}"
        aria-hidden="${i=>i.ariaHidden}"
        aria-invalid="${i=>i.ariaInvalid}"
        aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
        aria-label="${i=>i.ariaLabel}"
        aria-labelledby="${i=>i.ariaLabelledby}"
        aria-live="${i=>i.ariaLive}"
        aria-owns="${i=>i.ariaOwns}"
        aria-pressed="${i=>i.ariaPressed}"
        aria-relevant="${i=>i.ariaRelevant}"
        aria-roledescription="${i=>i.ariaRoledescription}"
        ${rt("control")}
    >
        ${oi(e,t)}
        <span class="content" part="content">
            <slot ${Ce("defaultSlottedContent")}></slot>
        </span>
        ${ri(e,t)}
    </button>
`,Qn="form-associated-proxy",Jn="ElementInternals",Zn=Jn in window&&"setFormValue"in window[Jn].prototype,Kn=new WeakMap;function tr(e){const t=class extends e{constructor(...i){super(...i),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Zn}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const i=this.proxy.labels,n=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=i?n.concat(Array.from(i)):n;return Object.freeze(s)}else return fe}valueChanged(i,n){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(i,n){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(i,n){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),R.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(i,n){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(i,n){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),R.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Zn)return null;let i=Kn.get(this);return i||(i=this.attachInternals(),Kn.set(this,i)),i}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(i=>this.proxy.removeEventListener(i,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(i,n,s){this.elementInternals?this.elementInternals.setValidity(i,n,s):typeof n=="string"&&this.proxy.setCustomValidity(n)}formDisabledCallback(i){this.disabled=i}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var i;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(n=>this.proxy.addEventListener(n,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Qn),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Qn)),(i=this.shadowRoot)===null||i===void 0||i.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var i;this.removeChild(this.proxy),(i=this.shadowRoot)===null||i===void 0||i.removeChild(this.proxySlot)}validate(i){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,i)}setFormValue(i,n){this.elementInternals&&this.elementInternals.setFormValue(i,n||i)}_keypressHandler(i){switch(i.key){case bn:if(this.form instanceof HTMLFormElement){const n=this.form.querySelector("[type=submit]");n==null||n.click()}break}}stopPropagation(i){i.stopPropagation()}};return b({mode:"boolean"})(t.prototype,"disabled"),b({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),b({attribute:"current-value"})(t.prototype,"currentValue"),b(t.prototype,"name"),b({mode:"boolean"})(t.prototype,"required"),z(t.prototype,"value"),t}class Wo extends it{}class Xo extends tr(Wo){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let ut=class extends Xo{constructor(){super(...arguments),this.handleClick=t=>{var i;this.disabled&&((i=this.defaultSlottedContent)===null||i===void 0?void 0:i.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,i){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),i==="submit"&&this.addEventListener("click",this.handleSubmission),t==="submit"&&this.removeEventListener("click",this.handleSubmission),i==="reset"&&this.addEventListener("click",this.handleFormReset),t==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const i=Array.from((t=this.control)===null||t===void 0?void 0:t.children);i&&i.forEach(n=>{n.addEventListener("click",this.handleClick)})}disconnectedCallback(){var t;super.disconnectedCallback();const i=Array.from((t=this.control)===null||t===void 0?void 0:t.children);i&&i.forEach(n=>{n.removeEventListener("click",this.handleClick)})}};p([b({mode:"boolean"})],ut.prototype,"autofocus",void 0);p([b({attribute:"form"})],ut.prototype,"formId",void 0);p([b],ut.prototype,"formaction",void 0);p([b],ut.prototype,"formenctype",void 0);p([b],ut.prototype,"formmethod",void 0);p([b({mode:"boolean"})],ut.prototype,"formnovalidate",void 0);p([b],ut.prototype,"formtarget",void 0);p([b],ut.prototype,"type",void 0);p([z],ut.prototype,"defaultSlottedContent",void 0);class ai{}p([b({attribute:"aria-expanded"})],ai.prototype,"ariaExpanded",void 0);p([b({attribute:"aria-pressed"})],ai.prototype,"ariaPressed",void 0);Kt(ai,_);Kt(ut,si,ai);function nn(e){const t=e.parentElement;if(t)return t;{const i=e.getRootNode();if(i.host instanceof HTMLElement)return i.host}return null}function Yo(e,t){let i=t;for(;i!==null;){if(i===e)return!0;i=nn(i)}return!1}const bt=document.createElement("div");function Qo(e){return e instanceof ni}class mn{setProperty(t,i){R.queueUpdate(()=>this.target.setProperty(t,i))}removeProperty(t){R.queueUpdate(()=>this.target.removeProperty(t))}}class Jo extends mn{constructor(t){super();const i=new CSSStyleSheet;i[Os]=!0,this.target=i.cssRules[i.insertRule(":host{}")].style,t.$fastController.addStyles(et.create([i]))}}class Zo extends mn{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class Ko extends mn{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const i=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[i].style}}}class er{constructor(t){this.store=new Map,this.target=null;const i=t.$fastController;this.style=document.createElement("style"),i.addStyles(this.style),j.getNotifier(i).subscribe(this,"isConnected"),this.handleChange(i,"isConnected")}targetChanged(){if(this.target!==null)for(const[t,i]of this.store.entries())this.target.setProperty(t,i)}setProperty(t,i){this.store.set(t,i),R.queueUpdate(()=>{this.target!==null&&this.target.setProperty(t,i)})}removeProperty(t){this.store.delete(t),R.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,i){const{sheet:n}=this.style;if(n){const s=n.insertRule(":host{}",n.cssRules.length);this.target=n.cssRules[s].style}else this.target=null}}p([z],er.prototype,"target",void 0);class ta{constructor(t){this.target=t.style}setProperty(t,i){R.queueUpdate(()=>this.target.setProperty(t,i))}removeProperty(t){R.queueUpdate(()=>this.target.removeProperty(t))}}class G{setProperty(t,i){G.properties[t]=i;for(const n of G.roots.values())Gt.getOrCreate(G.normalizeRoot(n)).setProperty(t,i)}removeProperty(t){delete G.properties[t];for(const i of G.roots.values())Gt.getOrCreate(G.normalizeRoot(i)).removeProperty(t)}static registerRoot(t){const{roots:i}=G;if(!i.has(t)){i.add(t);const n=Gt.getOrCreate(this.normalizeRoot(t));for(const s in G.properties)n.setProperty(s,G.properties[s])}}static unregisterRoot(t){const{roots:i}=G;if(i.has(t)){i.delete(t);const n=Gt.getOrCreate(G.normalizeRoot(t));for(const s in G.properties)n.removeProperty(s)}}static normalizeRoot(t){return t===bt?document:t}}G.roots=new Set;G.properties={};const Hi=new WeakMap,ea=R.supportsAdoptedStyleSheets?Jo:er,Gt=Object.freeze({getOrCreate(e){if(Hi.has(e))return Hi.get(e);let t;return e===bt?t=new G:e instanceof Document?t=R.supportsAdoptedStyleSheets?new Zo:new Ko:Qo(e)?t=new ea(e):t=new ta(e),Hi.set(e,t),t}});class Z extends vn{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,t.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Z.uniqueId(),Z.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new Z({name:typeof t=="string"?t:t.name,cssCustomPropertyName:typeof t=="string"?t:t.cssCustomPropertyName===void 0?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return typeof t.cssCustomProperty=="string"}static isDerivedDesignTokenValue(t){return typeof t=="function"}static getTokenById(t){return Z.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const i=B.getOrCreate(t).get(this);if(i!==void 0)return i;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,i){return this._appliedTo.add(t),i instanceof Z&&(i=this.alias(i)),B.getOrCreate(t).set(this,i),this}deleteValueFor(t){return this._appliedTo.delete(t),B.existsFor(t)&&B.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(bt,t),this}subscribe(t,i){const n=this.getOrCreateSubscriberSet(i);i&&!B.existsFor(i)&&B.getOrCreate(i),n.has(t)||n.add(t)}unsubscribe(t,i){const n=this.subscribers.get(i||this);n&&n.has(t)&&n.delete(t)}notify(t){const i=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach(n=>n.handleChange(i)),this.subscribers.has(t)&&this.subscribers.get(t).forEach(n=>n.handleChange(i))}alias(t){return i=>t.getValueFor(i)}}Z.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})();Z.tokensById=new Map;class ia{startReflection(t,i){t.subscribe(this,i),this.handleChange({token:t,target:i})}stopReflection(t,i){t.unsubscribe(this,i),this.remove(t,i)}handleChange(t){const{token:i,target:n}=t;this.add(i,n)}add(t,i){Gt.getOrCreate(i).setProperty(t.cssCustomProperty,this.resolveCSSValue(B.getOrCreate(i).get(t)))}remove(t,i){Gt.getOrCreate(i).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}}class na{constructor(t,i,n){this.source=t,this.token=i,this.node=n,this.dependencies=new Set,this.observer=j.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,ge))}}class sa{constructor(){this.values=new Map}set(t,i){this.values.get(t)!==i&&(this.values.set(t,i),j.getNotifier(this).notify(t.id))}get(t){return j.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const ce=new WeakMap,ue=new WeakMap;class B{constructor(t){this.target=t,this.store=new sa,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(i,n)=>{const s=Z.getTokenById(n);s&&(s.notify(this.target),this.updateCSSTokenReflection(i,s))}},ce.set(t,this),j.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof ni?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return ce.get(t)||new B(t)}static existsFor(t){return ce.has(t)}static findParent(t){if(bt!==t.target){let i=nn(t.target);for(;i!==null;){if(ce.has(i))return ce.get(i);i=nn(i)}return B.getOrCreate(bt)}return null}static findClosestAssignedNode(t,i){let n=i;do{if(n.has(t))return n;n=n.parent?n.parent:n.target!==bt?B.getOrCreate(bt):null}while(n!==null);return null}get parent(){return ue.get(this)||null}updateCSSTokenReflection(t,i){if(Z.isCSSDesignToken(i)){const n=this.parent,s=this.isReflecting(i);if(n){const r=n.get(i),o=t.get(i);r!==o&&!s?this.reflectToCSS(i):r===o&&s&&this.stopReflectToCSS(i)}else s||this.reflectToCSS(i)}}has(t){return this.assignedValues.has(t)}get(t){const i=this.store.get(t);if(i!==void 0)return i;const n=this.getRaw(t);if(n!==void 0)return this.hydrate(t,n),this.get(t)}getRaw(t){var i;return this.assignedValues.has(t)?this.assignedValues.get(t):(i=B.findClosestAssignedNode(t,this))===null||i===void 0?void 0:i.getRaw(t)}set(t,i){Z.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,i),Z.isDerivedDesignTokenValue(i)?this.setupBindingObserver(t,i):this.store.set(t,i)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const i=this.getRaw(t);i?this.hydrate(t,i):this.store.delete(t)}bind(){const t=B.findParent(this);t&&t.appendChild(this);for(const i of this.assignedValues.keys())i.notify(this.target)}unbind(){this.parent&&ue.get(this).removeChild(this)}appendChild(t){t.parent&&ue.get(t).removeChild(t);const i=this.children.filter(n=>t.contains(n));ue.set(t,this),this.children.push(t),i.forEach(n=>t.appendChild(n)),j.getNotifier(this.store).subscribe(t);for(const[n,s]of this.store.all())t.hydrate(n,this.bindingObservers.has(n)?this.getRaw(n):s)}removeChild(t){const i=this.children.indexOf(t);return i!==-1&&this.children.splice(i,1),j.getNotifier(this.store).unsubscribe(t),t.parent===this?ue.delete(t):!1}contains(t){return Yo(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),B.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),B.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,i){const n=Z.getTokenById(i);n&&(this.hydrate(n,this.getRaw(n)),this.updateCSSTokenReflection(this.store,n))}hydrate(t,i){if(!this.has(t)){const n=this.bindingObservers.get(t);Z.isDerivedDesignTokenValue(i)?n?n.source!==i&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,i)):this.setupBindingObserver(t,i):(n&&this.tearDownBindingObserver(t),this.store.set(t,i))}}setupBindingObserver(t,i){const n=new na(i,t,this);return this.bindingObservers.set(t,n),n}tearDownBindingObserver(t){return this.bindingObservers.has(t)?(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0):!1}}B.cssCustomPropertyReflector=new ia;p([z],B.prototype,"children",void 0);function ra(e){return Z.from(e)}const A=Object.freeze({create:ra,notifyConnection(e){return!e.isConnected||!B.existsFor(e)?!1:(B.getOrCreate(e).bind(),!0)},notifyDisconnection(e){return e.isConnected||!B.existsFor(e)?!1:(B.getOrCreate(e).unbind(),!0)},registerRoot(e=bt){G.registerRoot(e)},unregisterRoot(e=bt){G.unregisterRoot(e)}}),ji=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Ui=new Map,qe=new Map;let Xt=null;const he=O.createInterface(e=>e.cachedCallback(t=>(Xt===null&&(Xt=new nr(null,t)),Xt))),ir=Object.freeze({tagFor(e){return qe.get(e)},responsibleFor(e){const t=e.$$designSystem$$;return t||O.findResponsibleContainer(e).get(he)},getOrCreate(e){if(!e)return Xt===null&&(Xt=O.getOrCreateDOMContainer().get(he)),Xt;const t=e.$$designSystem$$;if(t)return t;const i=O.getOrCreateDOMContainer(e);if(i.has(he,!1))return i.get(he);{const n=new nr(e,i);return i.register(xe.instance(he,n)),n}}});function oa(e,t,i){return typeof e=="string"?{name:e,type:t,callback:i}:e}class nr{constructor(t,i){this.owner=t,this.container=i,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>ji.definitionCallbackOnly,t!==null&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const i=this.container,n=[],s=this.disambiguate,r=this.shadowRootMode,o={elementPrefix:this.prefix,tryDefineElement(a,c,l){const u=oa(a,c,l),{name:d,callback:v,baseClass:$}=u;let{type:y}=u,m=d,x=Ui.get(m),w=!0;for(;x;){const T=s(m,y,x);switch(T){case ji.ignoreDuplicate:return;case ji.definitionCallbackOnly:w=!1,x=void 0;break;default:m=T,x=Ui.get(m);break}}w&&((qe.has(y)||y===it)&&(y=class extends y{}),Ui.set(m,y),qe.set(y,m),$&&qe.set($,m)),n.push(new aa(i,m,y,r,v,w))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&A.registerRoot(this.designTokenRoot)),i.registerWithContext(o,...t);for(const a of n)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class aa{constructor(t,i,n,s,r,o){this.container=t,this.name=i,this.type=n,this.shadowRootMode=s,this.callback=r,this.willDefine=o,this.definition=null}definePresentation(t){Ws.define(this.name,t,this.container)}defineElement(t){this.definition=new ii(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return ir.tagFor(t)}}const la={separator:"separator",presentation:"presentation"};class wn extends it{constructor(){super(...arguments),this.role=la.separator,this.orientation=Bo.horizontal}}p([b],wn.prototype,"role",void 0);p([b],wn.prototype,"orientation",void 0);const K={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},ca={[K.menuitem]:"menuitem",[K.menuitemcheckbox]:"menuitemcheckbox",[K.menuitemradio]:"menuitemradio"};class at extends it{constructor(){super(...arguments),this.role=K.menuitem,this.hasSubmenu=!1,this.currentDirection=Ct.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case bn:case Uo:return this.invoke(),!1;case Qs:return this.expandAndFocus(),!1;case Ys:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case K.menuitemcheckbox:this.checked=!this.checked;break;case K.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case K.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>t.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(t){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=en(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,i){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),R.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}}p([b({mode:"boolean"})],at.prototype,"disabled",void 0);p([b({mode:"boolean"})],at.prototype,"expanded",void 0);p([z],at.prototype,"startColumnCount",void 0);p([b],at.prototype,"role",void 0);p([b({mode:"boolean"})],at.prototype,"checked",void 0);p([z],at.prototype,"submenuRegion",void 0);p([z],at.prototype,"hasSubmenu",void 0);p([z],at.prototype,"currentDirection",void 0);p([z],at.prototype,"submenu",void 0);Kt(at,si);const ua=(e,t)=>J`
    <template
        role="${i=>i.role}"
        aria-haspopup="${i=>i.hasSubmenu?"menu":void 0}"
        aria-checked="${i=>i.role!==K.menuitem?i.checked:void 0}"
        aria-disabled="${i=>i.disabled}"
        aria-expanded="${i=>i.expanded}"
        @keydown="${(i,n)=>i.handleMenuItemKeyDown(n.event)}"
        @click="${(i,n)=>i.handleMenuItemClick(n.event)}"
        @mouseover="${(i,n)=>i.handleMouseOver(n.event)}"
        @mouseout="${(i,n)=>i.handleMouseOut(n.event)}"
        class="${i=>i.disabled?"disabled":""} ${i=>i.expanded?"expanded":""} ${i=>`indent-${i.startColumnCount}`}"
    >
            ${qt(i=>i.role===K.menuitemcheckbox,J`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${qt(i=>i.role===K.menuitemradio,J`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${oi(e,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${ri(e,t)}
        ${qt(i=>i.hasSubmenu,J`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${t.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${qt(i=>i.expanded,J`
                <${e.tagFor(C)}
                    :anchorElement="${i=>i}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${i=>i.currentDirection}"
                    @loaded="${i=>i.submenuLoaded()}"
                    ${rt("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${e.tagFor(C)}>
            `)}
    </template>
`,ha=(e,t)=>J`
    <template
        slot="${i=>i.slot?i.slot:i.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(i,n)=>i.handleMenuKeyDown(n.event)}"
        @focusout="${(i,n)=>i.handleFocusOut(n.event)}"
    >
        <slot ${Ce("items")}></slot>
    </template>
`;let li=class sr extends it{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&$e(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();const i=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[i].setAttribute("tabindex","0"),this.focusIndex=i}},this.handleItemFocus=t=>{const i=t.target;this.menuItems!==void 0&&i!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(i),i.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||t.target===null||this.menuItems===void 0||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const i=t.target;if(this.expandedItem!==null&&i===this.expandedItem&&i.expanded===!1){this.expandedItem=null;return}i.expanded&&(this.expandedItem!==null&&this.expandedItem!==i&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=i,this.focusIndex=this.menuItems.indexOf(i),i.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const i=this.menuItems.filter(this.isMenuItemElement);i.length&&(this.focusIndex=0);function n(r){const o=r.getAttribute("role"),a=r.querySelector("[slot=start]");return o!==K.menuitem&&a===null||o===K.menuitem&&a!==null?1:o!==K.menuitem&&a!==null?2:0}const s=i.reduce((r,o)=>{const a=n(o);return r>a?r:a},0);i.forEach((r,o)=>{r.setAttribute("tabindex",o===0?"0":"-1"),r.addEventListener("expanded-change",this.handleExpandedChanged),r.addEventListener("focus",this.handleItemFocus),(r instanceof at||"startColumnCount"in r)&&(r.startColumnCount=s)})},this.changeHandler=t=>{if(this.menuItems===void 0)return;const i=t.target,n=this.menuItems.indexOf(i);if(n!==-1&&i.role==="menuitemradio"&&i.checked===!0){for(let r=n-1;r>=0;--r){const o=this.menuItems[r],a=o.getAttribute("role");if(a===K.menuitemradio&&(o.checked=!1),a==="separator")break}const s=this.menuItems.length-1;for(let r=n+1;r<=s;++r){const o=this.menuItems[r],a=o.getAttribute("role");if(a===K.menuitemradio&&(o.checked=!1),a==="separator")break}}},this.isMenuItemElement=t=>$e(t)&&sr.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,i){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),R.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!(t.defaultPrevented||this.menuItems===void 0))switch(t.key){case Xs:this.setFocus(this.focusIndex+1,1);return;case Js:this.setFocus(this.focusIndex-1,-1);return;case Ks:this.setFocus(this.menuItems.length-1,-1);return;case Zs:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}setFocus(t,i){if(this.menuItems!==void 0)for(;t>=0&&t<this.menuItems.length;){const n=this.menuItems[t];if(this.isFocusableElement(n)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,n.setAttribute("tabindex","0"),n.focus();break}t+=i}}};li.focusableElementRoles=ca;p([z],li.prototype,"items",void 0);class da extends it{}class fa extends tr(da){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const pa={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let nt=class extends fa{constructor(){super(...arguments),this.type=pa.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&R.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};p([b({attribute:"readonly",mode:"boolean"})],nt.prototype,"readOnly",void 0);p([b({mode:"boolean"})],nt.prototype,"autofocus",void 0);p([b],nt.prototype,"placeholder",void 0);p([b],nt.prototype,"type",void 0);p([b],nt.prototype,"list",void 0);p([b({converter:pn})],nt.prototype,"maxlength",void 0);p([b({converter:pn})],nt.prototype,"minlength",void 0);p([b],nt.prototype,"pattern",void 0);p([b({converter:pn})],nt.prototype,"size",void 0);p([b({mode:"boolean"})],nt.prototype,"spellcheck",void 0);p([z],nt.prototype,"defaultSlottedNodes",void 0);class rr{}Kt(rr,_);Kt(nt,si,rr);function ga(e,t,i){return e.nodeType!==Node.TEXT_NODE?!0:typeof e.nodeValue=="string"&&!!e.nodeValue.trim().length}const va=(e,t)=>J`
    <template
        class="
            ${i=>i.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Ce({property:"defaultSlottedNodes",filter:ga})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${oi(e,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${i=>i.handleTextInput()}"
                @change="${i=>i.handleChange()}"
                ?autofocus="${i=>i.autofocus}"
                ?disabled="${i=>i.disabled}"
                list="${i=>i.list}"
                maxlength="${i=>i.maxlength}"
                minlength="${i=>i.minlength}"
                pattern="${i=>i.pattern}"
                placeholder="${i=>i.placeholder}"
                ?readonly="${i=>i.readOnly}"
                ?required="${i=>i.required}"
                size="${i=>i.size}"
                ?spellcheck="${i=>i.spellcheck}"
                :value="${i=>i.value}"
                type="${i=>i.type}"
                aria-atomic="${i=>i.ariaAtomic}"
                aria-busy="${i=>i.ariaBusy}"
                aria-controls="${i=>i.ariaControls}"
                aria-current="${i=>i.ariaCurrent}"
                aria-describedby="${i=>i.ariaDescribedby}"
                aria-details="${i=>i.ariaDetails}"
                aria-disabled="${i=>i.ariaDisabled}"
                aria-errormessage="${i=>i.ariaErrormessage}"
                aria-flowto="${i=>i.ariaFlowto}"
                aria-haspopup="${i=>i.ariaHaspopup}"
                aria-hidden="${i=>i.ariaHidden}"
                aria-invalid="${i=>i.ariaInvalid}"
                aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
                aria-label="${i=>i.ariaLabel}"
                aria-labelledby="${i=>i.ariaLabelledby}"
                aria-live="${i=>i.ariaLive}"
                aria-owns="${i=>i.ariaOwns}"
                aria-relevant="${i=>i.ariaRelevant}"
                aria-roledescription="${i=>i.ariaRoledescription}"
                ${rt("control")}
            />
            ${ri(e,t)}
        </div>
    </template>
`,ba=(e,t)=>J`
    <template
        role="treeitem"
        slot="${i=>i.isNestedItem()?"item":void 0}"
        tabindex="-1"
        class="${i=>i.expanded?"expanded":""} ${i=>i.selected?"selected":""} ${i=>i.nested?"nested":""}
            ${i=>i.disabled?"disabled":""}"
        aria-expanded="${i=>i.childItems&&i.childItemLength()>0?i.expanded:void 0}"
        aria-selected="${i=>i.selected}"
        aria-disabled="${i=>i.disabled}"
        @focusin="${(i,n)=>i.handleFocus(n.event)}"
        @focusout="${(i,n)=>i.handleBlur(n.event)}"
        ${So({property:"childItems",filter:$o()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${qt(i=>i.childItems&&i.childItemLength()>0,J`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(i,n)=>i.handleExpandCollapseButtonClick(n.event)}"
                            ${rt("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${t.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${oi(e,t)}
                <slot></slot>
                ${ri(e,t)}
            </div>
        </div>
        ${qt(i=>i.childItems&&i.childItemLength()>0&&(i.expanded||i.renderCollapsedChildren),J`
                <div role="group" class="items" part="items">
                    <slot name="item" ${Ce("items")}></slot>
                </div>
            `)}
    </template>
`;function kt(e){return $e(e)&&e.getAttribute("role")==="treeitem"}class H extends it{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>kt(this.parentElement),this.handleExpandCollapseButtonClick=t=>{!this.disabled&&!t.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,i){this.$fastController.isConnected&&this.items.forEach(n=>{kt(n)&&(n.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){const t=this.childItems.filter(i=>kt(i));return t?t.length:0}}p([b({mode:"boolean"})],H.prototype,"expanded",void 0);p([b({mode:"boolean"})],H.prototype,"selected",void 0);p([b({mode:"boolean"})],H.prototype,"disabled",void 0);p([z],H.prototype,"focusable",void 0);p([z],H.prototype,"childItems",void 0);p([z],H.prototype,"items",void 0);p([z],H.prototype,"nested",void 0);p([z],H.prototype,"renderCollapsedChildren",void 0);Kt(H,si);const ma=(e,t)=>J`
    <template
        role="tree"
        ${rt("treeView")}
        @keydown="${(i,n)=>i.handleKeyDown(n.event)}"
        @focusin="${(i,n)=>i.handleFocus(n.event)}"
        @focusout="${(i,n)=>i.handleBlur(n.event)}"
        @click="${(i,n)=>i.handleClick(n.event)}"
        @selected-change="${(i,n)=>i.handleSelectedChange(n.event)}"
    >
        <slot ${Ce("slottedTreeItems")}></slot>
    </template>
`;class ci extends it{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1)){if(t.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&H.focusItem(this.currentFocused);return}this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target)}},this.handleBlur=t=>{t.target instanceof HTMLElement&&(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const i=this.getVisibleNodes();switch(t.key){case Zs:i.length&&H.focusItem(i[0]);return;case Ks:i.length&&H.focusItem(i[i.length-1]);return;case Ys:if(t.target&&this.isFocusableElement(t.target)){const n=t.target;n instanceof H&&n.childItemLength()>0&&n.expanded?n.expanded=!1:n instanceof H&&n.parentElement instanceof H&&H.focusItem(n.parentElement)}return!1;case Qs:if(t.target&&this.isFocusableElement(t.target)){const n=t.target;n instanceof H&&n.childItemLength()>0&&!n.expanded?n.expanded=!0:n instanceof H&&n.childItemLength()>0&&this.focusNextNode(1,t.target)}return;case Xs:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target);return;case Js:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target);return;case bn:this.handleClick(t);return}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!kt(t.target))return!0;const i=t.target;i.selected?(this.currentSelected&&this.currentSelected!==i&&(this.currentSelected.selected=!1),this.currentSelected=i):!i.selected&&this.currentSelected===i&&(this.currentSelected=null)},this.setItems=()=>{const t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(n=>{kt(n)&&(n.nested=this.nested)})},this.isFocusableElement=t=>kt(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),R.queueUpdate(()=>{this.setItems()})}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!kt(t.target))return!0;const i=t.target;i.disabled||(i.selected=!i.selected)}focusNextNode(t,i){const n=this.getVisibleNodes();if(!n)return;const s=n[n.indexOf(i)+t];$e(s)&&H.focusItem(s)}getValidFocusableItem(){const t=this.getVisibleNodes();let i=t.findIndex(this.isSelectedElement);return i===-1&&(i=t.findIndex(this.isFocusableElement)),i!==-1?t[i]:null}checkForNestedItems(){return this.slottedTreeItems.some(t=>kt(t)&&t.querySelector("[role='treeitem']"))}getVisibleNodes(){return _o(this,"[role='treeitem']")||[]}}p([b({attribute:"render-collapsed-nodes"})],ci.prototype,"renderCollapsedNodes",void 0);p([z],ci.prototype,"currentSelected",void 0);p([z],ci.prototype,"slottedTreeItems",void 0);class wa{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:i}=this,n=this.constructListener(t);n.bind(i)(),i.addListener(n),this.listenerCache.set(t,n)}unbind(t){const i=this.listenerCache.get(t);i&&(this.query.removeListener(i),this.listenerCache.delete(t))}}class Ve extends wa{constructor(t,i){super(t),this.styles=i}static with(t){return i=>new Ve(t,i)}constructListener(t){let i=!1;const n=this.styles;return function(){const{matches:r}=this;r&&!i?(t.$fastController.addStyles(n),i=r):!r&&i&&(t.$fastController.removeStyles(n),i=r)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const xt=Ve.with(window.matchMedia("(forced-colors)"));Ve.with(window.matchMedia("(prefers-color-scheme: dark)"));Ve.with(window.matchMedia("(prefers-color-scheme: light)"));class ya{constructor(t,i,n){this.propertyName=t,this.value=i,this.styles=n}bind(t){j.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){j.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,i){t[i]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}const ui="not-allowed",xa=":host([hidden]){display:none}";function te(e){return`${xa}:host{display:${e}}`}const q=jo()?"focus-visible":"focus";function Ot(e,t,i){return isNaN(e)||e<=t?t:e>=i?i:e}function qi(e,t,i){return isNaN(e)||e<=t?0:e>=i?1:e/(i-t)}function Pt(e,t,i){return isNaN(e)?t:t+e*(i-t)}function $a(e){const t=Math.round(Ot(e,0,255)).toString(16);return t.length===1?"0"+t:t}function ze(e,t,i){return isNaN(e)||e<=0?t:e>=1?i:t+e*(i-t)}function tt(e,t){const i=Math.pow(10,t);return Math.round(e*i)/i}class Fe{constructor(t,i,n){this.h=t,this.s=i,this.l=n}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.l)?new Fe(t.h,t.s,t.l):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new Fe(tt(this.h,t),tt(this.s,t),tt(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class W{constructor(t,i,n){this.l=t,this.a=i,this.b=n}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.a)&&!isNaN(t.b)?new W(t.l,t.a,t.b):null}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new W(tt(this.l,t),tt(this.a,t),tt(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}W.epsilon=216/24389;W.kappa=24389/27;class M{constructor(t,i,n,s){this.r=t,this.g=i,this.b=n,this.a=typeof s=="number"&&!isNaN(s)?s:1}static fromObject(t){return t&&!isNaN(t.r)&&!isNaN(t.g)&&!isNaN(t.b)?new M(t.r,t.g,t.b,t.a):null}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Pt(this.r,0,255))},${Math.round(Pt(this.g,0,255))},${Math.round(Pt(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Pt(this.r,0,255))},${Math.round(Pt(this.g,0,255))},${Math.round(Pt(this.b,0,255))},${Ot(this.a,0,1)})`}roundToPrecision(t){return new M(tt(this.r,t),tt(this.g,t),tt(this.b,t),tt(this.a,t))}clamp(){return new M(Ot(this.r,0,1),Ot(this.g,0,1),Ot(this.b,0,1),Ot(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return $a(Pt(t,0,255))}}class st{constructor(t,i,n){this.x=t,this.y=i,this.z=n}static fromObject(t){return t&&!isNaN(t.x)&&!isNaN(t.y)&&!isNaN(t.z)?new st(t.x,t.y,t.z):null}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new st(tt(this.x,t),tt(this.y,t),tt(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}st.whitePoint=new st(.95047,1,1.08883);function Fa(e){return e.r*.2126+e.g*.7152+e.b*.0722}function or(e){function t(i){return i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return Fa(new M(t(e.r),t(e.g),t(e.b),1))}function Gi(e,t,i){return i-t===0?0:(e-t)/(i-t)}function Wi(e,t,i){const n=Gi(e.r,t.r,i.r),s=Gi(e.g,t.g,i.g),r=Gi(e.b,t.b,i.b);return(n+s+r)/3}function ka(e,t,i=null){let n=0,s=i;return s!==null?n=Wi(e,t,s):(s=new M(0,0,0,1),n=Wi(e,t,s),n<=0&&(s=new M(1,1,1,1),n=Wi(e,t,s))),n=Math.round(n*1e3)/1e3,new M(s.r,s.g,s.b,n)}function ts(e){const t=Math.max(e.r,e.g,e.b),i=Math.min(e.r,e.g,e.b),n=t-i;let s=0;n!==0&&(t===e.r?s=60*((e.g-e.b)/n%6):t===e.g?s=60*((e.b-e.r)/n+2):s=60*((e.r-e.g)/n+4)),s<0&&(s+=360);const r=(t+i)/2;let o=0;return n!==0&&(o=n/(1-Math.abs(2*r-1))),new Fe(s,o,r)}function Sa(e,t=1){const i=(1-Math.abs(2*e.l-1))*e.s,n=i*(1-Math.abs(e.h/60%2-1)),s=e.l-i/2;let r=0,o=0,a=0;return e.h<60?(r=i,o=n,a=0):e.h<120?(r=n,o=i,a=0):e.h<180?(r=0,o=i,a=n):e.h<240?(r=0,o=n,a=i):e.h<300?(r=n,o=0,a=i):e.h<360&&(r=i,o=0,a=n),new M(r+s,o+s,a+s,t)}function Ra(e){const t=(e.l+16)/116,i=t+e.a/500,n=t-e.b/200,s=Math.pow(i,3),r=Math.pow(t,3),o=Math.pow(n,3);let a=0;s>W.epsilon?a=s:a=(116*i-16)/W.kappa;let c=0;e.l>W.epsilon*W.kappa?c=r:c=e.l/W.kappa;let l=0;return o>W.epsilon?l=o:l=(116*n-16)/W.kappa,a=st.whitePoint.x*a,c=st.whitePoint.y*c,l=st.whitePoint.z*l,new st(a,c,l)}function Da(e){function t(c){return c>W.epsilon?Math.pow(c,1/3):(W.kappa*c+16)/116}const i=t(e.x/st.whitePoint.x),n=t(e.y/st.whitePoint.y),s=t(e.z/st.whitePoint.z),r=116*n-16,o=500*(i-n),a=200*(n-s);return new W(r,o,a)}function Ca(e){function t(c){return c<=.04045?c/12.92:Math.pow((c+.055)/1.055,2.4)}const i=t(e.r),n=t(e.g),s=t(e.b),r=i*.4124564+n*.3575761+s*.1804375,o=i*.2126729+n*.7151522+s*.072175,a=i*.0193339+n*.119192+s*.9503041;return new st(r,o,a)}function Va(e,t=1){function i(o){return o<=.0031308?o*12.92:1.055*Math.pow(o,1/2.4)-.055}const n=i(e.x*3.2404542-e.y*1.5371385-e.z*.4985314),s=i(e.x*-.969266+e.y*1.8760108+e.z*.041556),r=i(e.x*.0556434-e.y*.2040259+e.z*1.0572252);return new M(n,s,r,t)}function Ta(e){return Da(Ca(e))}function Xi(e,t=1){return Va(Ra(e),t)}var es;(function(e){e[e.Burn=0]="Burn",e[e.Color=1]="Color",e[e.Darken=2]="Darken",e[e.Dodge=3]="Dodge",e[e.Lighten=4]="Lighten",e[e.Multiply=5]="Multiply",e[e.Overlay=6]="Overlay",e[e.Screen=7]="Screen"})(es||(es={}));function Ia(e,t){if(t.a>=1)return t;if(t.a<=0)return new M(e.r,e.g,e.b,1);const i=t.a*t.r+(1-t.a)*e.r,n=t.a*t.g+(1-t.a)*e.g,s=t.a*t.b+(1-t.a)*e.b;return new M(i,n,s,1)}function Ne(e,t,i){return isNaN(e)||e<=0?t:e>=1?i:new M(ze(e,t.r,i.r),ze(e,t.g,i.g),ze(e,t.b,i.b),ze(e,t.a,i.a))}var is;(function(e){e[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH"})(is||(is={}));const La=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Ge(e){const t=La.exec(e);if(t===null)return null;let i=t[1];if(i.length===3){const s=i.charAt(0),r=i.charAt(1),o=i.charAt(2);i=s.concat(s,r,r,o,o)}const n=parseInt(i,16);return isNaN(n)?null:new M(qi((n&16711680)>>>16,0,255),qi((n&65280)>>>8,0,255),qi(n&255,0,255),1)}function Qe(e,t){const i=e.relativeLuminance>t.relativeLuminance?e:t,n=e.relativeLuminance>t.relativeLuminance?t:e;return(i.relativeLuminance+.05)/(n.relativeLuminance+.05)}const ft=Object.freeze({create(e,t,i){return new Je(e,t,i)},from(e){return new Je(e.r,e.g,e.b)}});function Ea(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const i in t)if(typeof t[i]!=typeof e[i])return!1;return!0}class Je extends M{constructor(t,i,n){super(t,i,n,1),this.toColorString=this.toStringHexRGB,this.contrast=Qe.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=or(this)}static fromObject(t){return new Je(t.r,t.g,t.b)}}function sn(e,t,i=0,n=e.length-1){if(n===i)return e[i];const s=Math.floor((n-i)/2)+i;return t(e[s])?sn(e,t,i,s):sn(e,t,s+1,n)}const Pa=(-.1+Math.sqrt(.21))/2;function Te(e){return e.relativeLuminance<=Pa}function Bt(e){return Te(e)?-1:1}const ns={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function Aa(e,t,i){return typeof e=="number"?ke.from(ft.create(e,t,i)):ke.from(e)}function Oa(e,t){return Ea(e)?ht.from(e,t):ht.from(ft.create(e.r,e.g,e.b),t)}const ke=Object.freeze({create:Aa,from:Oa});class ht{constructor(t,i){this.closestIndexCache=new Map,this.source=t,this.swatches=i,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,i,n,s){n===void 0&&(n=this.closestIndexOf(t));let r=this.swatches;const o=this.lastIndex;let a=n;s===void 0&&(s=Bt(t));const c=l=>Qe(t,l)>=i;return s===-1&&(r=this.reversedSwatches,a=o-a),sn(r,c,a,o)}get(t){return this.swatches[t]||this.swatches[Ot(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let i=this.swatches.indexOf(t);if(i!==-1)return this.closestIndexCache.set(t.relativeLuminance,i),i;const n=this.swatches.reduce((s,r)=>Math.abs(r.relativeLuminance-t.relativeLuminance)<Math.abs(s.relativeLuminance-t.relativeLuminance)?r:s);return i=this.swatches.indexOf(n),this.closestIndexCache.set(t.relativeLuminance,i),i}static saturationBump(t,i){const s=ts(t).s,r=ts(i);if(r.s<s){const o=new Fe(r.h,s,r.l);return Sa(o)}return i}static ramp(t){const i=t/100;return i>.5?(i-.5)/.5:2*i}static createHighResolutionPalette(t){const i=[],n=Ta(M.fromObject(t).roundToPrecision(4)),s=Xi(new W(0,n.a,n.b)).clamp().roundToPrecision(4),r=Xi(new W(50,n.a,n.b)).clamp().roundToPrecision(4),o=Xi(new W(100,n.a,n.b)).clamp().roundToPrecision(4),a=new M(0,0,0),c=new M(1,1,1),l=o.equalValue(c)?0:14,u=s.equalValue(a)?0:14;for(let d=100+l;d>=0-u;d-=.5){let v;if(d<0){const $=d/u+1;v=Ne($,a,s)}else if(d<=50)v=Ne(ht.ramp(d),s,r);else if(d<=100)v=Ne(ht.ramp(d),r,o);else{const $=(d-100)/l;v=Ne($,o,c)}v=ht.saturationBump(r,v).roundToPrecision(4),i.push(ft.from(v))}return new ht(t,i)}static adjustEnd(t,i,n,s){const r=s===-1?i.swatches:i.reversedSwatches,o=l=>{const u=i.closestIndexOf(l);return s===1?i.lastIndex-u:u};s===1&&n.reverse();const a=t(n[n.length-2]);if(tt(Qe(n[n.length-1],n[n.length-2]),2)<a){n.pop();const l=i.colorContrast(r[i.lastIndex],a,void 0,s),u=o(l),d=o(n[n.length-2]),v=u-d;let $=1;for(let y=n.length-v-1;y<n.length;y++){const m=o(n[y]),x=y===n.length-1?i.lastIndex:m+$;n[y]=r[x],$++}}s===1&&n.reverse()}static createColorPaletteByContrast(t,i){const n=ht.createHighResolutionPalette(t),s=a=>{const c=i.stepContrast+i.stepContrast*(1-a.relativeLuminance)*i.stepContrastRamp;return tt(c,2)},r=[];let o=i.preserveSource?t:n.swatches[0];r.push(o);do{const a=s(o);o=n.colorContrast(o,a,void 0,1),r.push(o)}while(o.relativeLuminance>0);if(i.preserveSource){o=t;do{const a=s(o);o=n.colorContrast(o,a,void 0,-1),r.unshift(o)}while(o.relativeLuminance<1)}return this.adjustEnd(s,n,r,-1),i.preserveSource&&this.adjustEnd(s,n,r,1),r}static from(t,i){const n=i===void 0?ns:Object.assign(Object.assign({},ns),i);return new ht(t,Object.freeze(ht.createColorPaletteByContrast(t,n)))}}const Ze=ft.create(1,1,1),yn=ft.create(0,0,0),za=ft.create(.5,.5,.5),Yi=Ge("#0078D4"),Na=ft.create(Yi.r,Yi.g,Yi.b);function ar(e,t,i,n,s){const r=u=>u.contrast(Ze)>=s?Ze:yn,o=r(e),a=r(t),c=o.relativeLuminance===a.relativeLuminance?o:r(i),l=r(n);return{rest:o,hover:a,active:c,focus:l}}class hi{constructor(t,i,n,s){this.toColorString=()=>this.cssGradient,this.contrast=Qe.bind(null,this),this.createCSS=this.toColorString,this.color=new M(t,i,n),this.cssGradient=s,this.relativeLuminance=or(this.color),this.r=t,this.g=i,this.b=n}static fromObject(t,i){return new hi(t.r,t.g,t.b,i)}}const Ba=new M(0,0,0),Ma=new M(1,1,1);function lr(e,t,i,n,s,r,o,a,c=10,l=!1){const u=e.closestIndexOf(t);a===void 0&&(a=Bt(t));function d(I){if(l){const gt=e.closestIndexOf(t),Ht=e.get(gt),se=I.relativeLuminance<t.relativeLuminance?Ba:Ma,re=ka(Ge(I.toColorString()),Ge(Ht.toColorString()),se).roundToPrecision(2),Ee=Ia(Ge(t.toColorString()),re);return ft.from(Ee)}else return I}const v=u+a*i,$=v+a*(n-i),y=v+a*(s-i),m=v+a*(r-i),x=a===-1?0:100-c,w=a===-1?c:100;function T(I,gt){const Ht=e.get(I);if(gt){const se=e.get(I+a*o),re=a===-1?se:Ht,Ee=a===-1?Ht:se,Rn=`linear-gradient(${d(re).toColorString()} ${x}%, ${d(Ee).toColorString()} ${w}%)`;return hi.fromObject(re,Rn)}else return d(Ht)}return{rest:T(v,!0),hover:T($,!0),active:T(y,!1),focus:T(m,!0)}}function _a(e,t,i,n,s,r,o,a){const c=e.closestIndexOf(t),l=Bt(t),u=c+l*i,d=u+l*(n-i),v=u+l*(s-i),$=u+l*(r-i),y=`calc(100% - ${a})`;function m(x,w){const T=e.get(x);if(w){const I=e.get(x+l*o),gt=`linear-gradient(${T.toColorString()} ${y}, ${I.toColorString()} ${y}, ${I.toColorString()})`;return hi.fromObject(T,gt)}else return T}return{rest:m(u,!0),hover:m(d,!0),active:m(v,!1),focus:m($,!0)}}function Ha(e,t,i){return e.colorContrast(t,i)}function Yt(e,t,i,n,s,r,o,a){a==null&&(a=Bt(t));const c=e.closestIndexOf(e.colorContrast(t,i));return{rest:e.get(c+a*n),hover:e.get(c+a*s),active:e.get(c+a*r),focus:e.get(c+a*o)}}function ja(e,t,i,n,s,r,o,a=void 0,c,l,u,d,v,$=void 0){return Te(t)?Yt(e,t,c,l,u,d,v,$):Yt(e,t,i,n,s,r,o,a)}function Ua(e,t,i){return e.get(e.closestIndexOf(t)+Bt(t)*i)}function Vt(e,t,i,n,s,r,o){const a=e.closestIndexOf(t);return o==null&&(o=Bt(t)),{rest:e.get(a+o*i),hover:e.get(a+o*n),active:e.get(a+o*s),focus:e.get(a+o*r)}}function xn(e,t,i,n,s,r,o=void 0,a,c,l,u,d=void 0){return Te(t)?Vt(e,t,a,c,l,u,d):Vt(e,t,i,n,s,r,o)}function qa(e,t){return Te(t)?Ze:yn}function Ga(e,t,i){return Te(t)?yn:Ze}function Wa(e){return ft.create(e,e,e)}var rn;(function(e){e[e.LightMode=.98]="LightMode",e[e.DarkMode=.15]="DarkMode"})(rn||(rn={}));function Ie(e,t){return e.closestIndexOf(Wa(t))}function Xa(e,t){return e.get(Ie(e,t))}function Ya(e,t,i){return e.get(Ie(e,t)+i)}function cr(e,t,i){return e.get(Ie(e,t)+i*-1)}function Qa(e,t,i){return e.get(Ie(e,t)+i*-1*2)}function Ja(e,t,i){return e.get(Ie(e,t)+i*-1*3)}const Za={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:h}=A;function g(e){return A.create({name:e,cssCustomPropertyName:null})}const Qi=h("direction").withDefault(Ct.ltr),di=h("disabled-opacity").withDefault(.3),Ke=h("base-height-multiplier").withDefault(8);h("base-horizontal-spacing-multiplier").withDefault(3);const $n=h("density").withDefault(0),X=h("design-unit").withDefault(4),Rt=h("control-corner-radius").withDefault(4),Ka=h("layer-corner-radius").withDefault(8),mt=h("stroke-width").withDefault(1),yt=h("focus-stroke-width").withDefault(2),pt=h("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),tl=h("font-weight").withDefault(Za.Normal);function $t(e){return t=>{const i=e.getValueFor(t),n=tl.getValueFor(t);if(i.endsWith("px")){const s=Number.parseFloat(i.replace("px",""));if(s<=12)return`"wght" ${n}, "opsz" 8`;if(s>24)return`"wght" ${n}, "opsz" 36`}return`"wght" ${n}, "opsz" 10.5`}}const ur=h("type-ramp-base-font-size").withDefault("14px"),el=h("type-ramp-base-line-height").withDefault("20px"),il=h("type-ramp-base-font-variations").withDefault($t(ur)),hr=h("type-ramp-minus-1-font-size").withDefault("12px"),nl=h("type-ramp-minus-1-line-height").withDefault("16px"),sl=h("type-ramp-minus-1-font-variations").withDefault($t(hr)),dr=h("type-ramp-minus-2-font-size").withDefault("10px"),rl=h("type-ramp-minus-2-line-height").withDefault("14px"),ol=h("type-ramp-minus-2-font-variations").withDefault($t(dr)),fr=h("type-ramp-plus-1-font-size").withDefault("16px"),al=h("type-ramp-plus-1-line-height").withDefault("22px"),ll=h("type-ramp-plus-1-font-variations").withDefault($t(fr)),pr=h("type-ramp-plus-2-font-size").withDefault("20px"),cl=h("type-ramp-plus-2-line-height").withDefault("26px"),ul=h("type-ramp-plus-2-font-variations").withDefault($t(pr)),gr=h("type-ramp-plus-3-font-size").withDefault("24px"),hl=h("type-ramp-plus-3-line-height").withDefault("32px"),dl=h("type-ramp-plus-3-font-variations").withDefault($t(gr)),vr=h("type-ramp-plus-4-font-size").withDefault("28px"),fl=h("type-ramp-plus-4-line-height").withDefault("36px"),pl=h("type-ramp-plus-4-font-variations").withDefault($t(vr)),br=h("type-ramp-plus-5-font-size").withDefault("32px"),gl=h("type-ramp-plus-5-line-height").withDefault("40px"),vl=h("type-ramp-plus-5-font-variations").withDefault($t(br)),mr=h("type-ramp-plus-6-font-size").withDefault("40px"),bl=h("type-ramp-plus-6-line-height").withDefault("52px"),ml=h("type-ramp-plus-6-font-variations").withDefault($t(mr)),ee=h("base-layer-luminance").withDefault(rn.LightMode),ss=g("accent-fill-rest-delta").withDefault(0),rs=g("accent-fill-hover-delta").withDefault(-2),os=g("accent-fill-active-delta").withDefault(-5),as=g("accent-fill-focus-delta").withDefault(0),wl=g("accent-foreground-rest-delta").withDefault(0),yl=g("accent-foreground-hover-delta").withDefault(3),xl=g("accent-foreground-active-delta").withDefault(-8),$l=g("accent-foreground-focus-delta").withDefault(0),Fl=g("neutral-fill-rest-delta").withDefault(-1),kl=g("neutral-fill-hover-delta").withDefault(1),Sl=g("neutral-fill-active-delta").withDefault(0),Rl=g("neutral-fill-focus-delta").withDefault(0),Dl=g("neutral-fill-input-rest-delta").withDefault(-1),Cl=g("neutral-fill-input-hover-delta").withDefault(1),Vl=g("neutral-fill-input-active-delta").withDefault(0),Tl=g("neutral-fill-input-focus-delta").withDefault(-2),Be=g("neutral-fill-input-alt-rest-delta").withDefault(2),ls=g("neutral-fill-input-alt-hover-delta").withDefault(4),cs=g("neutral-fill-input-alt-active-delta").withDefault(6),us=g("neutral-fill-input-alt-focus-delta").withDefault(2),Nt=g("neutral-fill-layer-rest-delta").withDefault(-2),Il=g("neutral-fill-layer-hover-delta").withDefault(-3),Ll=g("neutral-fill-layer-active-delta").withDefault(-3),Me=g("neutral-fill-layer-alt-rest-delta").withDefault(-1),El=g("neutral-fill-secondary-rest-delta").withDefault(3),Pl=g("neutral-fill-secondary-hover-delta").withDefault(2),Al=g("neutral-fill-secondary-active-delta").withDefault(1),Ol=g("neutral-fill-secondary-focus-delta").withDefault(3),zl=g("neutral-fill-stealth-rest-delta").withDefault(0),Nl=g("neutral-fill-stealth-hover-delta").withDefault(3),Bl=g("neutral-fill-stealth-active-delta").withDefault(2),Ml=g("neutral-fill-stealth-focus-delta").withDefault(0),_l=g("neutral-fill-strong-rest-delta").withDefault(0),Hl=g("neutral-fill-strong-hover-delta").withDefault(8),jl=g("neutral-fill-strong-active-delta").withDefault(-5),Ul=g("neutral-fill-strong-focus-delta").withDefault(0),ql=g("neutral-stroke-rest-delta").withDefault(8),Gl=g("neutral-stroke-hover-delta").withDefault(12),Wl=g("neutral-stroke-active-delta").withDefault(6),Xl=g("neutral-stroke-focus-delta").withDefault(8),wr=g("neutral-stroke-control-rest-delta").withDefault(3),yr=g("neutral-stroke-control-hover-delta").withDefault(5),xr=g("neutral-stroke-control-active-delta").withDefault(5),$r=g("neutral-stroke-control-focus-delta").withDefault(5),Yl=g("neutral-stroke-divider-rest-delta").withDefault(4),hs=g("neutral-stroke-layer-rest-delta").withDefault(3),Ql=g("neutral-stroke-layer-hover-delta").withDefault(3),Jl=g("neutral-stroke-layer-active-delta").withDefault(3),Zl=g("neutral-stroke-strong-hover-delta").withDefault(0),Kl=g("neutral-stroke-strong-active-delta").withDefault(0),tc=g("neutral-stroke-strong-focus-delta").withDefault(0),ec=h("neutral-base-color").withDefault(za),P=g("neutral-palette").withDefault(e=>ke.from(ec.getValueFor(e))),ic=h("accent-base-color").withDefault(Na),fi=g("accent-palette").withDefault(e=>ke.from(ic.getValueFor(e))),nc=g("neutral-layer-card-container-recipe").withDefault({evaluate:e=>cr(P.getValueFor(e),ee.getValueFor(e),Nt.getValueFor(e))});h("neutral-layer-card-container").withDefault(e=>nc.getValueFor(e).evaluate(e));const sc=g("neutral-layer-floating-recipe").withDefault({evaluate:e=>Ya(P.getValueFor(e),ee.getValueFor(e),Nt.getValueFor(e))}),Fr=h("neutral-layer-floating").withDefault(e=>sc.getValueFor(e).evaluate(e)),rc=g("neutral-layer-1-recipe").withDefault({evaluate:e=>Xa(P.getValueFor(e),ee.getValueFor(e))}),oc=h("neutral-layer-1").withDefault(e=>rc.getValueFor(e).evaluate(e)),ac=g("neutral-layer-2-recipe").withDefault({evaluate:e=>cr(P.getValueFor(e),ee.getValueFor(e),Nt.getValueFor(e))});h("neutral-layer-2").withDefault(e=>ac.getValueFor(e).evaluate(e));const lc=g("neutral-layer-3-recipe").withDefault({evaluate:e=>Qa(P.getValueFor(e),ee.getValueFor(e),Nt.getValueFor(e))});h("neutral-layer-3").withDefault(e=>lc.getValueFor(e).evaluate(e));const cc=g("neutral-layer-4-recipe").withDefault({evaluate:e=>Ja(P.getValueFor(e),ee.getValueFor(e),Nt.getValueFor(e))});h("neutral-layer-4").withDefault(e=>cc.getValueFor(e).evaluate(e));const N=h("fill-color").withDefault(e=>oc.getValueFor(e));var ti;(function(e){e[e.normal=4.5]="normal",e[e.large=3]="large"})(ti||(ti={}));const pi=g("accent-fill-recipe").withDefault({evaluate:(e,t)=>ja(fi.getValueFor(e),t||N.getValueFor(e),5,ss.getValueFor(e),rs.getValueFor(e),os.getValueFor(e),as.getValueFor(e),void 0,8,ss.getValueFor(e),rs.getValueFor(e),os.getValueFor(e),as.getValueFor(e),void 0)}),Dt=h("accent-fill-rest").withDefault(e=>pi.getValueFor(e).evaluate(e).rest),Qt=h("accent-fill-hover").withDefault(e=>pi.getValueFor(e).evaluate(e).hover),Jt=h("accent-fill-active").withDefault(e=>pi.getValueFor(e).evaluate(e).active),gi=h("accent-fill-focus").withDefault(e=>pi.getValueFor(e).evaluate(e).focus),vi=g("foreground-on-accent-recipe").withDefault({evaluate:e=>ar(Dt.getValueFor(e),Qt.getValueFor(e),Jt.getValueFor(e),gi.getValueFor(e),ti.normal)}),uc=h("foreground-on-accent-rest").withDefault(e=>vi.getValueFor(e).evaluate(e).rest),hc=h("foreground-on-accent-hover").withDefault(e=>vi.getValueFor(e).evaluate(e).hover),dc=h("foreground-on-accent-active").withDefault(e=>vi.getValueFor(e).evaluate(e).active);h("foreground-on-accent-focus").withDefault(e=>vi.getValueFor(e).evaluate(e).focus);const bi=g("accent-foreground-recipe").withDefault({evaluate:(e,t)=>Yt(fi.getValueFor(e),t||N.getValueFor(e),9.5,wl.getValueFor(e),yl.getValueFor(e),xl.getValueFor(e),$l.getValueFor(e))}),fc=h("accent-foreground-rest").withDefault(e=>bi.getValueFor(e).evaluate(e).rest),pc=h("accent-foreground-hover").withDefault(e=>bi.getValueFor(e).evaluate(e).hover),gc=h("accent-foreground-active").withDefault(e=>bi.getValueFor(e).evaluate(e).active);h("accent-foreground-focus").withDefault(e=>bi.getValueFor(e).evaluate(e).focus);const mi=g("accent-stroke-control-recipe").withDefault({evaluate:(e,t)=>lr(P.getValueFor(e),t||N.getValueFor(e),-3,-3,-3,-3,10,1,void 0,!0)}),vc=h("accent-stroke-control-rest").withDefault(e=>mi.getValueFor(e).evaluate(e,Dt.getValueFor(e)).rest),bc=h("accent-stroke-control-hover").withDefault(e=>mi.getValueFor(e).evaluate(e,Qt.getValueFor(e)).hover),mc=h("accent-stroke-control-active").withDefault(e=>mi.getValueFor(e).evaluate(e,Jt.getValueFor(e)).active);h("accent-stroke-control-focus").withDefault(e=>mi.getValueFor(e).evaluate(e,gi.getValueFor(e)).focus);const wi=g("neutral-fill-recipe").withDefault({evaluate:(e,t)=>xn(P.getValueFor(e),t||N.getValueFor(e),Fl.getValueFor(e),kl.getValueFor(e),Sl.getValueFor(e),Rl.getValueFor(e),void 0,2,3,1,2,void 0)}),_e=h("neutral-fill-rest").withDefault(e=>wi.getValueFor(e).evaluate(e).rest),ds=h("neutral-fill-hover").withDefault(e=>wi.getValueFor(e).evaluate(e).hover),fs=h("neutral-fill-active").withDefault(e=>wi.getValueFor(e).evaluate(e).active);h("neutral-fill-focus").withDefault(e=>wi.getValueFor(e).evaluate(e).focus);const ie=g("neutral-fill-input-recipe").withDefault({evaluate:(e,t)=>xn(P.getValueFor(e),t||N.getValueFor(e),Dl.getValueFor(e),Cl.getValueFor(e),Vl.getValueFor(e),Tl.getValueFor(e),void 0,2,3,1,0,void 0)}),He=h("neutral-fill-input-rest").withDefault(e=>ie.getValueFor(e).evaluate(e).rest),ps=h("neutral-fill-input-hover").withDefault(e=>ie.getValueFor(e).evaluate(e).hover);h("neutral-fill-input-active").withDefault(e=>ie.getValueFor(e).evaluate(e).active);const gs=h("neutral-fill-input-focus").withDefault(e=>ie.getValueFor(e).evaluate(e).focus),yi=g("neutral-fill-input-alt-recipe").withDefault({evaluate:(e,t)=>xn(P.getValueFor(e),t||N.getValueFor(e),Be.getValueFor(e),ls.getValueFor(e),cs.getValueFor(e),us.getValueFor(e),1,Be.getValueFor(e),Be.getValueFor(e)-ls.getValueFor(e),Be.getValueFor(e)-cs.getValueFor(e),us.getValueFor(e),1)});h("neutral-fill-input-alt-rest").withDefault(e=>yi.getValueFor(e).evaluate(e).rest);h("neutral-fill-input-alt-hover").withDefault(e=>yi.getValueFor(e).evaluate(e).hover);h("neutral-fill-input-alt-active").withDefault(e=>yi.getValueFor(e).evaluate(e).active);h("neutral-fill-input-alt-focus").withDefault(e=>yi.getValueFor(e).evaluate(e).focus);const Fn=g("neutral-fill-layer-recipe").withDefault({evaluate:(e,t)=>Vt(P.getValueFor(e),t||N.getValueFor(e),Nt.getValueFor(e),Il.getValueFor(e),Ll.getValueFor(e),Nt.getValueFor(e),1)});h("neutral-fill-layer-rest").withDefault(e=>Fn.getValueFor(e).evaluate(e).rest);h("neutral-fill-layer-hover").withDefault(e=>Fn.getValueFor(e).evaluate(e).hover);h("neutral-fill-layer-active").withDefault(e=>Fn.getValueFor(e).evaluate(e).active);const wc=g("neutral-fill-layer-alt-recipe").withDefault({evaluate:(e,t)=>Vt(P.getValueFor(e),t||N.getValueFor(e),Me.getValueFor(e),Me.getValueFor(e),Me.getValueFor(e),Me.getValueFor(e))});h("neutral-fill-layer-alt-rest").withDefault(e=>wc.getValueFor(e).evaluate(e).rest);const Mt=g("neutral-fill-secondary-recipe").withDefault({evaluate:(e,t)=>Vt(P.getValueFor(e),t||N.getValueFor(e),El.getValueFor(e),Pl.getValueFor(e),Al.getValueFor(e),Ol.getValueFor(e))}),on=h("neutral-fill-secondary-rest").withDefault(e=>Mt.getValueFor(e).evaluate(e).rest),yc=h("neutral-fill-secondary-hover").withDefault(e=>Mt.getValueFor(e).evaluate(e).hover);h("neutral-fill-secondary-active").withDefault(e=>Mt.getValueFor(e).evaluate(e).active);const xc=h("neutral-fill-secondary-focus").withDefault(e=>Mt.getValueFor(e).evaluate(e).focus),ne=g("neutral-fill-stealth-recipe").withDefault({evaluate:(e,t)=>Vt(P.getValueFor(e),t||N.getValueFor(e),zl.getValueFor(e),Nl.getValueFor(e),Bl.getValueFor(e),Ml.getValueFor(e))}),Se=h("neutral-fill-stealth-rest").withDefault(e=>ne.getValueFor(e).evaluate(e).rest),xi=h("neutral-fill-stealth-hover").withDefault(e=>ne.getValueFor(e).evaluate(e).hover),$i=h("neutral-fill-stealth-active").withDefault(e=>ne.getValueFor(e).evaluate(e).active);h("neutral-fill-stealth-focus").withDefault(e=>ne.getValueFor(e).evaluate(e).focus);const Fi=g("neutral-fill-strong-recipe").withDefault({evaluate:(e,t)=>Yt(P.getValueFor(e),t||N.getValueFor(e),4.5,_l.getValueFor(e),Hl.getValueFor(e),jl.getValueFor(e),Ul.getValueFor(e))});h("neutral-fill-strong-rest").withDefault(e=>Fi.getValueFor(e).evaluate(e).rest);h("neutral-fill-strong-hover").withDefault(e=>Fi.getValueFor(e).evaluate(e).hover);h("neutral-fill-strong-active").withDefault(e=>Fi.getValueFor(e).evaluate(e).active);h("neutral-fill-strong-focus").withDefault(e=>Fi.getValueFor(e).evaluate(e).focus);const ki=g("neutral-foreground-recipe").withDefault({evaluate:(e,t)=>Yt(P.getValueFor(e),t||N.getValueFor(e),16,0,-19,-30,0)}),Zt=h("neutral-foreground-rest").withDefault(e=>ki.getValueFor(e).evaluate(e).rest);h("neutral-foreground-hover").withDefault(e=>ki.getValueFor(e).evaluate(e).hover);h("neutral-foreground-active").withDefault(e=>ki.getValueFor(e).evaluate(e).active);h("neutral-foreground-focus").withDefault(e=>ki.getValueFor(e).evaluate(e).focus);const Le=g("neutral-foreground-hint-recipe").withDefault({evaluate:(e,t)=>Ha(P.getValueFor(e),t||N.getValueFor(e),4.5)}),$c=h("neutral-foreground-hint").withDefault(e=>Le.getValueFor(e).evaluate(e)),Si=g("neutral-stroke-recipe").withDefault({evaluate:(e,t)=>Vt(P.getValueFor(e),t||N.getValueFor(e),ql.getValueFor(e),Gl.getValueFor(e),Wl.getValueFor(e),Xl.getValueFor(e))}),ei=h("neutral-stroke-rest").withDefault(e=>Si.getValueFor(e).evaluate(e).rest),Fc=h("neutral-stroke-hover").withDefault(e=>Si.getValueFor(e).evaluate(e).hover),kc=h("neutral-stroke-active").withDefault(e=>Si.getValueFor(e).evaluate(e).active);h("neutral-stroke-focus").withDefault(e=>Si.getValueFor(e).evaluate(e).focus);const Ri=g("neutral-stroke-control-recipe").withDefault({evaluate:(e,t)=>lr(P.getValueFor(e),t||N.getValueFor(e),wr.getValueFor(e),yr.getValueFor(e),xr.getValueFor(e),$r.getValueFor(e),5)}),Sc=h("neutral-stroke-control-rest").withDefault(e=>Ri.getValueFor(e).evaluate(e).rest),Rc=h("neutral-stroke-control-hover").withDefault(e=>Ri.getValueFor(e).evaluate(e).hover),Dc=h("neutral-stroke-control-active").withDefault(e=>Ri.getValueFor(e).evaluate(e).active);h("neutral-stroke-control-focus").withDefault(e=>Ri.getValueFor(e).evaluate(e).focus);const Cc=g("neutral-stroke-divider-recipe").withDefault({evaluate:(e,t)=>Ua(P.getValueFor(e),t||N.getValueFor(e),Yl.getValueFor(e))}),Vc=h("neutral-stroke-divider-rest").withDefault(e=>Cc.getValueFor(e).evaluate(e)),Di=g("neutral-stroke-input-recipe").withDefault({evaluate:(e,t)=>_a(P.getValueFor(e),t||N.getValueFor(e),wr.getValueFor(e),yr.getValueFor(e),xr.getValueFor(e),$r.getValueFor(e),20,mt.getValueFor(e)+"px")}),vs=h("neutral-stroke-input-rest").withDefault(e=>Di.getValueFor(e).evaluate(e).rest),Tc=h("neutral-stroke-input-hover").withDefault(e=>Di.getValueFor(e).evaluate(e).hover);h("neutral-stroke-input-active").withDefault(e=>Di.getValueFor(e).evaluate(e).active);h("neutral-stroke-input-focus").withDefault(e=>Di.getValueFor(e).evaluate(e).focus);const kn=g("neutral-stroke-layer-recipe").withDefault({evaluate:(e,t)=>Vt(P.getValueFor(e),t||N.getValueFor(e),hs.getValueFor(e),Ql.getValueFor(e),Jl.getValueFor(e),hs.getValueFor(e))});h("neutral-stroke-layer-rest").withDefault(e=>kn.getValueFor(e).evaluate(e).rest);h("neutral-stroke-layer-hover").withDefault(e=>kn.getValueFor(e).evaluate(e).hover);h("neutral-stroke-layer-active").withDefault(e=>kn.getValueFor(e).evaluate(e).active);const Ci=g("neutral-stroke-strong-recipe").withDefault({evaluate:(e,t)=>Yt(P.getValueFor(e),t||N.getValueFor(e),5.5,0,Zl.getValueFor(e),Kl.getValueFor(e),tc.getValueFor(e))});h("neutral-stroke-strong-rest").withDefault(e=>Ci.getValueFor(e).evaluate(e).rest);h("neutral-stroke-strong-hover").withDefault(e=>Ci.getValueFor(e).evaluate(e).hover);h("neutral-stroke-strong-active").withDefault(e=>Ci.getValueFor(e).evaluate(e).active);h("neutral-stroke-strong-focus").withDefault(e=>Ci.getValueFor(e).evaluate(e).focus);const Ic=g("focus-stroke-outer-recipe").withDefault({evaluate:e=>qa(P.getValueFor(e),N.getValueFor(e))}),Sn=h("focus-stroke-outer").withDefault(e=>Ic.getValueFor(e).evaluate(e)),Lc=g("focus-stroke-inner-recipe").withDefault({evaluate:e=>Ga(fi.getValueFor(e),N.getValueFor(e),Sn.getValueFor(e))}),Ec=h("focus-stroke-inner").withDefault(e=>Lc.getValueFor(e).evaluate(e)),Vi=g("foreground-on-accent-large-recipe").withDefault({evaluate:e=>ar(Dt.getValueFor(e),Qt.getValueFor(e),Jt.getValueFor(e),gi.getValueFor(e),ti.large)});h("foreground-on-accent-rest-large").withDefault(e=>Vi.getValueFor(e).evaluate(e).rest);h("foreground-on-accent-hover-large").withDefault(e=>Vi.getValueFor(e).evaluate(e,Qt.getValueFor(e)).hover);h("foreground-on-accent-active-large").withDefault(e=>Vi.getValueFor(e).evaluate(e,Jt.getValueFor(e)).active);h("foreground-on-accent-focus-large").withDefault(e=>Vi.getValueFor(e).evaluate(e,gi.getValueFor(e)).focus);const Pc=h("neutral-fill-inverse-rest-delta").withDefault(0),Ac=h("neutral-fill-inverse-hover-delta").withDefault(-3),Oc=h("neutral-fill-inverse-active-delta").withDefault(7),zc=h("neutral-fill-inverse-focus-delta").withDefault(0);function Nc(e,t,i,n,s,r){const o=Bt(t),a=e.closestIndexOf(e.colorContrast(t,14)),c=a+o*Math.abs(i-n),l=o===1?i<n:o*i>o*n;let u,d;return l?(u=a,d=c):(u=c,d=a),{rest:e.get(u),hover:e.get(d),active:e.get(u+o*s),focus:e.get(u+o*r)}}const Ti=g("neutral-fill-inverse-recipe").withDefault({evaluate:(e,t)=>Nc(P.getValueFor(e),t||N.getValueFor(e),Pc.getValueFor(e),Ac.getValueFor(e),Oc.getValueFor(e),zc.getValueFor(e))});h("neutral-fill-inverse-rest").withDefault(e=>Ti.getValueFor(e).evaluate(e).rest);h("neutral-fill-inverse-hover").withDefault(e=>Ti.getValueFor(e).evaluate(e).hover);h("neutral-fill-inverse-active").withDefault(e=>Ti.getValueFor(e).evaluate(e).active);h("neutral-fill-inverse-focus").withDefault(e=>Ti.getValueFor(e).evaluate(e).focus);const Re=ot`
  font-family: ${pt};
  font-size: ${ur};
  line-height: ${el};
  font-weight: initial;
  font-variation-settings: ${il};
`;ot`
  font-family: ${pt};
  font-size: ${hr};
  line-height: ${nl};
  font-weight: initial;
  font-variation-settings: ${sl};
`;ot`
  font-family: ${pt};
  font-size: ${dr};
  line-height: ${rl};
  font-weight: initial;
  font-variation-settings: ${ol};
`;ot`
  font-family: ${pt};
  font-size: ${fr};
  line-height: ${al};
  font-weight: initial;
  font-variation-settings: ${ll};
`;ot`
  font-family: ${pt};
  font-size: ${pr};
  line-height: ${cl};
  font-weight: initial;
  font-variation-settings: ${ul};
`;ot`
  font-family: ${pt};
  font-size: ${gr};
  line-height: ${hl};
  font-weight: initial;
  font-variation-settings: ${dl};
`;ot`
  font-family: ${pt};
  font-size: ${vr};
  line-height: ${fl};
  font-weight: initial;
  font-variation-settings: ${pl};
`;ot`
  font-family: ${pt};
  font-size: ${br};
  line-height: ${gl};
  font-weight: initial;
  font-variation-settings: ${vl};
`;ot`
  font-family: ${pt};
  font-size: ${mr};
  line-height: ${bl};
  font-weight: initial;
  font-variation-settings: ${ml};
`;const Ii=ot`
  outline: calc(${yt} * 1px) solid ${Sn};
  outline-offset: calc(${yt} * -1px);
`;ot`
  outline: calc(${yt} * 1px) solid ${Sn};
  outline-offset: calc(${mt} * 1px);
`;const ct=ot`(${Ke} + ${$n}) * ${X}`;function kr(e,t,i,n){var s=arguments.length,r=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,i,r):o(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}class Sr{constructor(t,i){this.cache=new WeakMap,this.ltr=t,this.rtl=i}bind(t){this.attach(t)}unbind(t){const i=this.cache.get(t);i&&Qi.unsubscribe(i)}attach(t){const i=this.cache.get(t)||new Bc(this.ltr,this.rtl,t),n=Qi.getValueFor(t);Qi.subscribe(i),i.attach(n),this.cache.set(t,i)}}class Bc{constructor(t,i,n){this.ltr=t,this.rtl=i,this.source=n,this.attached=null}handleChange({target:t,token:i}){this.attach(i.getValueFor(this.source))}attach(t){this.attached!==this[t]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const _t=A.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(e,t,i)=>{let n=.12,s=.14;t>16&&(n=.2,s=.24);const r=`0 0 2px rgba(0, 0, 0, ${n})`,o=`0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${s})`;return`${r}, ${o}`}}),Mc=A.create("elevation-shadow-card-rest-size").withDefault(4),_c=A.create("elevation-shadow-card-hover-size").withDefault(8),Hc=A.create("elevation-shadow-card-active-size").withDefault(0),jc=A.create("elevation-shadow-card-focus-size").withDefault(8);A.create("elevation-shadow-card-rest").withDefault(e=>_t.getValueFor(e).evaluate(e,Mc.getValueFor(e)));A.create("elevation-shadow-card-hover").withDefault(e=>_t.getValueFor(e).evaluate(e,_c.getValueFor(e)));A.create("elevation-shadow-card-active").withDefault(e=>_t.getValueFor(e).evaluate(e,Hc.getValueFor(e)));A.create("elevation-shadow-card-focus").withDefault(e=>_t.getValueFor(e).evaluate(e,jc.getValueFor(e)));const Uc=A.create("elevation-shadow-tooltip-size").withDefault(16);A.create("elevation-shadow-tooltip").withDefault(e=>_t.getValueFor(e).evaluate(e,Uc.getValueFor(e)));const qc=A.create("elevation-shadow-flyout-size").withDefault(32),Gc=A.create("elevation-shadow-flyout").withDefault(e=>_t.getValueFor(e).evaluate(e,qc.getValueFor(e))),Wc=A.create("elevation-shadow-dialog-size").withDefault(128);A.create("elevation-shadow-dialog").withDefault(e=>_t.getValueFor(e).evaluate(e,Wc.getValueFor(e)));const Xc=(e,t,i,n="[disabled]")=>V`
    ${te("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${Re}
      height: calc(${ct} * 1px);
      min-width: calc(${ct} * 1px);
      color: ${Zt};
      border-radius: calc(${Rt} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${mt} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${X} * 2 * ${$n})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${q} {
      ${Ii}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `,Yc=(e,t,i,n="[disabled]")=>V`
    .control {
      background: padding-box linear-gradient(${_e}, ${_e}),
        border-box ${Sc};
    }

    :host(${i}:hover) .control {
      background: padding-box linear-gradient(${ds}, ${ds}),
        border-box ${Rc};
    }

    :host(${i}:active) .control {
      background: padding-box linear-gradient(${fs}, ${fs}),
        border-box ${Dc};
    }

    :host(${n}) .control {
      background: padding-box linear-gradient(${_e}, ${_e}),
        border-box ${ei};
    }
  `.withBehaviors(xt(V`
        .control {
          background: ${f.ButtonFace};
          border-color: ${f.ButtonText};
          color: ${f.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          forced-color-adjust: none;
          background: ${f.HighlightText};
          border-color: ${f.Highlight};
          color: ${f.Highlight};
        }

        :host(${n}) .control {
          background: transparent;
          border-color: ${f.GrayText};
          color: ${f.GrayText};
        }

        .control:${q} {
          outline-color: ${f.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${f.LinkText};
          color: ${f.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${f.CanvasText};
          color: ${f.CanvasText};
        }
    `)),Qc=(e,t,i,n="[disabled]")=>V`
    .control {
      background: padding-box linear-gradient(${Dt}, ${Dt}),
        border-box ${vc};
      color: ${uc};
    }

    :host(${i}:hover) .control {
      background: padding-box linear-gradient(${Qt}, ${Qt}),
        border-box ${bc};
      color: ${hc};
    }

    :host(${i}:active) .control {
      background: padding-box linear-gradient(${Jt}, ${Jt}),
        border-box ${mc};
      color: ${dc};
    }

    :host(${n}) .control {
      background: ${Dt};
    }

    .control:${q} {
      box-shadow: 0 0 0 calc(${yt} * 1px) ${Ec} inset !important;
    }
  `.withBehaviors(xt(V`
        .control {
          forced-color-adjust: none;
          background: ${f.Highlight};
          color: ${f.HighlightText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: ${f.HighlightText};
          border-color: ${f.Highlight};
          color: ${f.Highlight};
        }

        :host(${n}) .control {
          background: transparent;
          border-color: ${f.GrayText};
          color: ${f.GrayText};
        }

        .control:${q} {
          outline-color: ${f.CanvasText};
          box-shadow: 0 0 0 calc(${yt} * 1px) ${f.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${f.LinkText};
          color: ${f.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${f.ButtonFace};
          border-color: ${f.LinkText};
          color: ${f.LinkText};
        }
      `)),Jc=(e,t,i,n="[disabled]")=>V`
    :host {
      color: ${fc};
    }

    .control {
      background: ${Se};
    }

    :host(${i}:hover) .control {
      background: ${xi};
      color: ${pc};
    }

    :host(${i}:active) .control {
      background: ${$i};
      color: ${gc};
    }

    :host(${n}) .control {
      background: ${Se};
    }
  `.withBehaviors(xt(V`
        :host {
          color: ${f.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: transparent;
          border-color: ${f.ButtonText};
          color: ${f.ButtonText};
        }

        :host(${n}) .control {
          background: transparent;
          color: ${f.GrayText};
        }

        .control:${q} {
          outline-color: ${f.CanvasText};
        }

        :host([href]) .control {
          color: ${f.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${f.LinkText};
          color: ${f.LinkText};
        }
      `)),Zc=(e,t,i,n="[disabled]")=>V`
    .control {
      background: transparent !important;
      border-color: ${ei};
    }

    :host(${i}:hover) .control {
      border-color: ${Fc};
    }

    :host(${i}:active) .control {
      border-color: ${kc};
    }

    :host(${n}) .control {
      background: transparent !important;
      border-color: ${ei};
    }
  `.withBehaviors(xt(V`
        .control {
          border-color: ${f.ButtonText};
          color: ${f.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: ${f.HighlightText};
          border-color: ${f.Highlight};
          color: ${f.Highlight};
        }

        :host(${n}) .control {
          border-color: ${f.GrayText};
          color: ${f.GrayText};
        }

        .control:${q} {
          outline-color: ${f.CanvasText};
        }

        :host([href]) .control {
          border-color: ${f.LinkText};
          color: ${f.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${f.CanvasText};
          color: ${f.CanvasText};
        }
      `)),Kc=(e,t,i,n="[disabled]")=>V`
    .control {
      background: ${Se};
    }

    :host(${i}:hover) .control {
      background: ${xi};
    }

    :host(${i}:active) .control {
      background: ${$i};
    }

    :host(${n}) .control {
      background: ${Se};
    }
  `.withBehaviors(xt(V`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${f.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: transparent;
          border-color: ${f.ButtonText};
          color: ${f.ButtonText};
        }

        :host(${n}) .control {
          background: transparent;
          color: ${f.GrayText};
        }
        
        .control:${q} {
          outline-color: ${f.CanvasText};
        }

        :host([href]) .control {
          color: ${f.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${f.LinkText};
          color: ${f.LinkText};
        }
      `)),tu=A.create("input-placeholder-rest").withDefault(e=>{const t=ie.getValueFor(e);return Le.getValueFor(e).evaluate(e,t.evaluate(e).rest)}),eu=A.create("input-placeholder-hover").withDefault(e=>{const t=ie.getValueFor(e);return Le.getValueFor(e).evaluate(e,t.evaluate(e).hover)}),iu=A.create("input-filled-placeholder-rest").withDefault(e=>{const t=Mt.getValueFor(e);return Le.getValueFor(e).evaluate(e,t.evaluate(e).rest)}),nu=A.create("input-filled-placeholder-hover").withDefault(e=>{const t=Mt.getValueFor(e);return Le.getValueFor(e).evaluate(e,t.evaluate(e).hover)}),su=(e,t,i)=>V`
  :host {
    ${Re}
    color: ${Zt};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${i} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${mt} * 1px) solid transparent;
    border-radius: calc(${Rt} * 1px);
    height: calc(${ct} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${Zt};
    cursor: pointer;
    ${Re}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${i},
  :host([readonly]) ${i},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${ui};
  }

  :host([disabled]) {
    opacity: ${di};
  }
`,ru=(e,t,i)=>V`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${yt} * 1px);
      bottom: 0;
      border-bottom: calc(${yt} * 1px) solid ${Dt};
      border-bottom-left-radius: calc(${Rt} * 1px);
      border-bottom-right-radius: calc(${Rt} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,ou=(e,t,i,n=":not([disabled]):not(:focus-within)")=>V`
  ${i} {
    background: padding-box linear-gradient(${He}, ${He}),
      border-box ${vs};
  }

  :host(${n}:hover) ${i} {
    background: padding-box linear-gradient(${ps}, ${ps}),
      border-box ${Tc};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: padding-box linear-gradient(${gs}, ${gs}),
      border-box ${vs};
  }
  
  :host([disabled]) ${i} {
    background: padding-box linear-gradient(${He}, ${He}),
      border-box ${ei};
  }

  .control::placeholder {
    color: ${tu};
  }

  :host(${n}:hover) .control::placeholder {
    color: ${eu};
  }
`,au=(e,t,i,n=":not([disabled]):not(:focus-within)")=>V`
  ${i} {
    background: ${on};
  }

  :host(${n}:hover) ${i} {
    background: ${yc};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: ${xc};
  }

  :host([disabled]) ${i} {
    background: ${on};
  }

  .control::placeholder {
    color: ${iu};
  }

  :host(${n}:hover) .control::placeholder {
    color: ${nu};
  }
`,lu=(e,t,i,n=":not([disabled]):not(:focus-within)")=>V`
  :host {
    color: ${f.ButtonText};
  }

  ${i} {
    background: ${f.ButtonFace};
    border-color: ${f.ButtonText};
  }

  :host(${n}:hover) ${i},
  :host(:not([disabled]):focus-within) ${i} {
    border-color: ${f.Highlight};
  }

  :host([disabled]) ${i} {
    opacity: 1;
    background: ${f.ButtonFace};
    border-color: ${f.GrayText};
  }

  .control::placeholder,
  :host(${n}:hover) .control::placeholder {
    color: ${f.CanvasText};
  }

  :host(:not([disabled]):focus) ${i} {
    ${Ii}
    outline-color: ${f.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${f.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${f.GrayText};
  }
`;function zt(e,t){return new ya("appearance",e,t)}const At=":not([disabled])",Ft="[disabled]",cu=(e,t)=>V`
    :host(${At}) .control {
      cursor: pointer;
    }

    :host(${Ft}) .control {
      cursor: ${ui};
    }

    @media (forced-colors: none) {
      :host(${Ft}) .control {
        opacity: ${di};
      }
    }

    ${Xc(e,t,At,Ft)}
  `.withBehaviors(zt("neutral",Yc(e,t,At,Ft)),zt("accent",Qc(e,t,At,Ft)),zt("lightweight",Jc(e,t,At,Ft)),zt("outline",Zc(e,t,At,Ft)),zt("stealth",Kc(e,t,At,Ft)));class Rr extends ut{appearanceChanged(t,i){t!==i&&(this.classList.add(i),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(i=>i.nodeType===Node.ELEMENT_NODE);t.length===1&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}kr([b],Rr.prototype,"appearance",void 0);const uu=Rr.compose({baseName:"button",baseClass:ut,template:Go,styles:cu,shadowOptions:{delegatesFocus:!0}}),hu=(e,t)=>V`
    ${te("block")} :host {
      background: ${Fr};
      border: calc(${mt} * 1px) solid transparent;
      border-radius: calc(${Ka} * 1px);
      box-shadow: ${Gc};
      padding: calc((${X} - ${mt}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${X} * 2px);
    }

    ::slotted(${e.tagFor(at)}) {
      margin: 0 calc(${X} * 1px);
    }

    ::slotted(${e.tagFor(wn)}) {
      margin: calc(${X} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${X} * 1px) 0;
      border: none;
      border-top: calc(${mt} * 1px) solid ${Vc};
    }
  `.withBehaviors(xt(V`
        :host([slot='submenu']) {
          background: ${f.Canvas};
          border-color: ${f.CanvasText};
        }
      `));class du extends li{connectedCallback(){super.connectedCallback(),N.setValueFor(this,Fr)}}const fu=du.compose({baseName:"menu",baseClass:li,template:ha,styles:hu}),pu=(e,t)=>V`
    ${te("grid")} :host {
      contain: layout;
      overflow: visible;
      ${Re}
      box-sizing: border-box;
      height: calc(${ct} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${Zt};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${Rt} * 1px);
      border: calc(${mt} * 1px) solid transparent;
      position: relative;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(32px, auto);
    }

    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-0) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) {
      grid-template-columns: minmax(32px, auto) minmax(32px, auto) 1fr minmax(32px, auto) minmax(32px, auto);
    }

    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) .start {
      grid-column: 2;
    }

    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${q}) {
      ${Ii}
    }

    :host(:not([disabled]):hover) {
      background: ${xi};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${$i};
      color: ${Zt};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${ui};
      opacity: ${di};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    :host(.indent-0[aria-haspopup='menu']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu'].indent-0) .content {
      grid-column-start: 1;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    slot[name='checkbox-indicator'],
    slot[name='radio-indicator'] {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${$c};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(xt(V`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${f.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${f.Highlight};
          color: ${f.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${q}) ::slotted([slot='end']:not(svg)) {
          color: ${f.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${f.Highlight};
          color: ${f.HighlightText};
        }
        :host(:${q}) {
          background: ${f.Highlight};
          outline-color: ${f.ButtonText};
          color: ${f.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${q}) {
          background: ${f.ButtonFace};
          color: ${f.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${q}) {
          outline-color: ${f.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${f.ButtonText};
          background: ${f.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${f.HighlightText};
          border-color: ${f.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${q}) .expanded-toggle,
            :host(:${q}) .checkbox,
            :host(:${q}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${q}) .checkbox,
            :host([checked]:${q}) .radio {
          border-color: ${f.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${f.Highlight};
          color: ${f.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${f.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${f.Highlight};
        }
      `),new Sr(V`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,V`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),gu=at.compose({baseName:"menu-item",template:ua,styles:pu,checkboxIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,expandCollapseGlyph:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>
    </svg>
  `,radioIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="2"/>
    </svg>
  `}),je=".root",vu=(e,t)=>V`
    ${te("inline-block")}

    ${su(e,t,je)}

    ${ru()}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${X} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors(zt("outline",ou(e,t,je)),zt("filled",au(e,t,je)),xt(lu(e,t,je)));class Dr extends nt{appearanceChanged(t,i){t!==i&&(this.classList.add(i),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}kr([b],Dr.prototype,"appearance",void 0);const bu=Dr.compose({baseName:"text-field",baseClass:nt,template:va,styles:vu,shadowOptions:{delegatesFocus:!0}}),mu=(e,t)=>V`
  :host([hidden]) {
    display: none;
  }

  ${te("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,wu=ci.compose({baseName:"tree-view",template:ma,styles:mu}),yu=V`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${ct} * -1px));
  }
  :host([selected])::after {
    left: calc(${yt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,xu=V`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${ct} * -1px));
  }
  :host([selected])::after {
    right: calc(${yt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,bs=ot`((${Ke} / 2) * ${X}) + ((${X} * ${$n}) / 2)`,$u=A.create("tree-item-expand-collapse-hover").withDefault(e=>{const t=ne.getValueFor(e);return t.evaluate(e,t.evaluate(e).hover).hover}),Fu=A.create("tree-item-expand-collapse-selected-hover").withDefault(e=>{const t=Mt.getValueFor(e);return ne.getValueFor(e).evaluate(e,t.evaluate(e).rest).hover}),ku=(e,t)=>V`
    ${te("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${Zt};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${pt};
      --expand-collapse-button-size: calc(${ct} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${Se};
      border: calc(${mt} * 1px) solid transparent;
      border-radius: calc(${Rt} * 1px);
      height: calc((${ct} + 1) * 1px);
    }

    :host(:${q}) .positioning-region {
      ${Ii}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${xi};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${$i};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${ct} * 1px);
      margin-inline-start: calc(${X} * 2px + 8px);
      ${Re}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${X} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${Rt} * 1px);
      ${""} width: calc((${bs} + (${X} * 2)) * 1px);
      height: calc((${bs} + (${X} * 2)) * 1px);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0 6px;
    }

    .expand-collapse-button svg {
      transition: transform 0.1s linear;
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
    }

    .start {
      ${""} margin-inline-end: calc(${X} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${X} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${di};
      cursor: ${ui};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${$u};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${on};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${Fu};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${ct} / 4) * 1px);
      width: 3px;
      height: calc((${ct} / 2) * 1px);
      ${""} background: ${Dt};
      border-radius: calc(${Rt} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${ct} * -1px);
    }
  `.withBehaviors(new Sr(yu,xu),xt(V`
        :host {
          color: ${f.ButtonText};
        }
        .positioning-region {
          border-color: ${f.ButtonFace};
          background: ${f.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${f.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${f.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${f.GrayText};
        }
        :host([selected])::after {
          background: ${f.HighlightText};
        }
        :host(:${q}) .positioning-region {
          forced-color-adjust: none;
          outline-color: ${f.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${f.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${f.ButtonFace};
          fill: ${f.ButtonText};
        }
      `)),Su=H.compose({baseName:"tree-item",template:ba,styles:ku,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `});function Ru(e){return ir.getOrCreate(e).withPrefix("fluent")}const Du={async getFiles(e){const t=[],i=e.entries();for await(const n of i)n[1].kind==="file"&&t.push(n[1]);return t},async getFile(e,t){let i=t.split("/"),n=null,s=e;for(let r=0;r<i.length;r++)try{if(s=await s.getDirectoryHandle(i[r],{create:!1}),r===i.length-1)try{return n=await s.getFileHandle(i[r],{create:!1}),n}catch(o){return console.error(o),null}}catch(o){return console.error(o),null}return null},async getDir(e,t){let i=t.split("/"),n=e;for(let s=0;s<i.length;s++)try{n=await n.getDirectoryHandle(i[s],{create:!1})}catch(r){return console.error(r),null}return n}};class De{constructor(t,i,n){Lt(this,"Name");Lt(this,"Author");Lt(this,"Description");Lt(this,"levels",new Map);this.Name=t,this.Author=i,this.Description=n}static getTemplate(){let t=this.templateLevel(["clean","battle"]),i=this.templateLevel(["clean1","clean2","battle1","battle2"]),n=new De("Name","Author","Description");return n.levels.set("global",new Map([["audioClipName","relative/path/to/audio"]])),n.levels.set("0-0",t),n.levels.set("0-1",t),n.levels.set("0-2",t),n.levels.set("0-3",t),n.levels.set("0-4",t),n.levels.set("0-5",this.templateLevel(["boss1","boss2"])),n.levels.set("1-1",this.templateLevel(["clean1","clean2","battle"])),n.levels.set("1-2",this.templateLevel(["clean0","clean1","clean2","battle0","battle1","battle2"])),n.levels.set("1-3",this.templateLevel(["clean","battle","boss"])),n.levels.set("1-4",this.templateLevel(["piano","intro","boss"])),n.levels.set("2-1",t),n.levels.set("2-2",t),n.levels.set("2-3",t),n.levels.set("2-4",this.templateLevel(["boss1","boss2"])),n.levels.set("3-1",i),n.levels.set("3-2",this.templateLevel(["intro1","intro2","boss"])),n.levels.set("4-1",t),n.levels.set("4-2",t),n.levels.set("4-3",this.templateLevel(["clean1","clean2","clean3","battle1","battle2","battle3"])),n.levels.set("4-4",this.templateLevel(["drone","bassline","intro","boss","outro"])),n.levels.set("5-1",t),n.levels.set("5-2",this.templateLevel(["boss1","boss2","boss3"])),n.levels.set("5-3",i),n.levels.set("5-4",this.templateLevel(["boss1","boss2"])),n.levels.set("6-1",this.templateLevel(["clean","battle","boss"])),n.levels.set("6-2",this.templateLevel(["boss"])),n.levels.set("7-1",this.templateLevel(["clean","battle","boss1","boss2"])),n.levels.set("7-2",i),n.levels.set("7-3",i),n.levels.set("7-4",this.templateLevel(["outside1","outside2","outside3","outside4","outside5","outside6","inside1","inside2","inside3","escape1","escape2","escape3"])),n.levels.set("P-1",this.templateLevel(["intro1","intro2","intro3","intro4","boss1","speech","boss2"])),n.levels.set("P-2",this.templateLevel(["intro","weezer","clean","battle","boss1","speech","boss2"])),n}static templateLevel(t){let i=new Map;return t.forEach(n=>{i.set(n,"relative/path/to/audio")}),i}static fromJson(t){let i;try{i=JSON.parse(t)}catch{return null}let n=new De(i.Name,i.Author,i.Description),s=i.levels,r=Object.keys(s);for(let o in r){let a=r[o],c=s[a],l=new Map,u=Object.keys(c);for(let d in u){let v=u[d],$=c[v];l.set(v,$)}n.levels.set(a,l)}return n}}function ms(e,t,i){const n=e.slice();return n[26]=t[i],n}function ws(e,t,i){const n=e.slice();return n[29]=t[i],n}function ys(e){let t,i,n,s,r,o,a=We(e[0].levels),c=[];for(let l=0;l<a.length;l+=1)c[l]=$s(ms(e,a,l));return{c(){t=E("fluent-tree-view"),i=an(`Root
			`);for(let l=0;l<c.length;l+=1)c[l].c();n=Y(),s=E("fluent-button"),s.textContent="+",F(s,"appearance","accent"),F(t,"class","w-full")},m(l,u){vt(l,t,u),S(t,i);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(t,null);S(t,n),S(t,s),r||(o=Q(s,"click",e[8]),r=!0)},p(l,u){if(u[0]&32257){a=We(l[0].levels);let d;for(d=0;d<a.length;d+=1){const v=ms(l,a,d);c[d]?c[d].p(v,u):(c[d]=$s(v),c[d].c(),c[d].m(t,n))}for(;d<c.length;d+=1)c[d].d(1);c.length=a.length}},d(l){l&&dt(t),Rs(c,l),r=!1,o()}}}function xs(e){let t,i,n,s,r,o,a,c,l,u,d,v;function $(...x){return e[17](e[26],e[29],...x)}function y(...x){return e[18](e[26],e[29],...x)}function m(){return e[19](e[26],e[29])}return{c(){t=E("fluent-tree-item"),i=E("fluent-text-field"),s=Y(),r=E("fluent-text-field"),a=Y(),c=E("fluent-button"),c.textContent="*",l=Y(),u=E("fluent-button"),u.textContent="-",F(i,"class","w-96"),F(i,"value",n=e[29][0]),F(r,"class","w-96"),F(r,"value",o=e[29][1]),F(c,"appearance","accent"),F(u,"class","danger"),F(u,"appearance","accent"),F(t,"expanded",!0),F(t,"class","w-full")},m(x,w){vt(x,t,w),S(t,i),S(t,s),S(t,r),S(t,a),S(t,c),S(t,l),S(t,u),d||(v=[Q(i,"change",$),Q(r,"change",y),Q(c,"click",Tu),Q(u,"click",m)],d=!0)},p(x,w){e=x,w[0]&1&&n!==(n=e[29][0])&&F(i,"value",n),w[0]&1&&o!==(o=e[29][1])&&F(r,"value",o)},d(x){x&&dt(t),d=!1,Tt(v)}}}function $s(e){let t,i,n,s,r,o,a,c,l,u,d;function v(...w){return e[15](e[26],...w)}function $(){return e[16](e[26])}let y=We(e[26][1]),m=[];for(let w=0;w<y.length;w+=1)m[w]=xs(ws(e,y,w));function x(){return e[20](e[26])}return{c(){t=E("fluent-tree-item"),i=E("fluent-text-field"),s=Y(),r=E("fluent-button"),r.textContent="-",o=Y();for(let w=0;w<m.length;w+=1)m[w].c();a=Y(),c=E("fluent-tree-item"),l=E("fluent-button"),l.textContent="+",F(i,"class","w-[49.25rem]"),F(i,"value",n=e[26][0]),F(r,"class","danger"),F(r,"appearance","accent"),F(l,"class","w-[52rem]"),F(l,"appearance","accent"),F(c,"expanded",!0),F(t,"expanded",!0)},m(w,T){vt(w,t,T),S(t,i),S(t,s),S(t,r),S(t,o);for(let I=0;I<m.length;I+=1)m[I]&&m[I].m(t,null);S(t,a),S(t,c),S(c,l),u||(d=[Q(i,"change",v),Q(r,"click",$),Q(l,"click",x)],u=!0)},p(w,T){if(e=w,T[0]&1&&n!==(n=e[26][0])&&F(i,"value",n),T[0]&28673){y=We(e[26][1]);let I;for(I=0;I<y.length;I+=1){const gt=ws(e,y,I);m[I]?m[I].p(gt,T):(m[I]=xs(gt),m[I].c(),m[I].m(t,a))}for(;I<m.length;I+=1)m[I].d(1);m.length=y.length}},d(w){w&&dt(t),Rs(m,w),u=!1,Tt(d)}}}function Fs(e){let t,i,n,s,r,o,a,c,l,u,d,v,$,y;return{c(){t=E("div"),i=E("div"),n=E("fluent-text-field"),s=Y(),r=E("fluent-text-field"),o=Y(),a=E("fluent-text-field"),c=Y(),l=E("div"),u=E("fluent-button"),u.textContent="Cancel",d=Y(),v=E("fluent-button"),v.textContent="Okay",F(n,"placeholder","UST Name"),F(n,"value",e[2]),F(r,"placeholder","Author"),F(r,"value",e[3]),F(a,"id","desc"),F(a,"placeholder","Description"),F(a,"value",e[4]),F(a,"class","h-[20rem]"),F(u,"class","flex-1 danger"),F(u,"appearance","accent"),F(v,"class","flex-1"),F(v,"appearance","accent"),St(l,"class","flex flex-row"),St(i,"class","w-[50rem] h-[30rem] bg-white rounded-lg p-4 flex flex-col"),St(t,"class","h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center")},m(m,x){vt(m,t,x),S(t,i),S(i,n),S(i,s),S(i,r),S(i,o),S(i,a),S(i,c),S(i,l),S(l,u),S(l,d),S(l,v),$||(y=[Q(n,"change",e[21]),Q(r,"change",e[22]),Q(a,"change",e[23]),Q(u,"click",e[24]),Q(v,"click",e[25])],$=!0)},p(m,x){x[0]&4&&F(n,"value",m[2]),x[0]&8&&F(r,"value",m[3]),x[0]&16&&F(a,"value",m[4])},d(m){m&&dt(t),$=!1,Tt(y)}}}function Cu(e){let t,i,n,s,r,o,a,c,l,u,d,v,$,y,m=e[0]!==null&&ys(e),x=e[1]&&Fs(e);return{c(){t=E("div"),i=E("fluent-button"),i.textContent="New UST",n=Y(),s=E("fluent-button"),s.textContent="Open UST",r=Y(),o=E("fluent-button"),o.textContent="Save UST file",a=Y(),c=E("fluent-button"),c.textContent="Export UST as zip",l=Y(),u=E("div"),m&&m.c(),d=Y(),x&&x.c(),v=Er(),F(i,"class","flex-1"),F(s,"class","flex-1"),F(o,"class","flex-1"),F(c,"class","flex-1"),St(t,"id","menubar"),St(t,"class","flex flex-row"),St(u,"id","ust-tree"),St(u,"class","flex flex-row w-full overflow-scroll svelte-1regrk")},m(w,T){vt(w,t,T),S(t,i),S(t,n),S(t,s),S(t,r),S(t,o),S(t,a),S(t,c),vt(w,l,T),vt(w,u,T),m&&m.m(u,null),vt(w,d,T),x&&x.m(w,T),vt(w,v,T),$||(y=[Q(i,"click",e[5]),Q(s,"click",e[6]),Q(o,"click",e[7])],$=!0)},p(w,T){w[0]!==null?m?m.p(w,T):(m=ys(w),m.c(),m.m(u,null)):m&&(m.d(1),m=null),w[1]?x?x.p(w,T):(x=Fs(w),x.c(),x.m(v.parentNode,v)):x&&(x.d(1),x=null)},i:be,o:be,d(w){w&&(dt(t),dt(l),dt(u),dt(d),dt(v)),m&&m.d(),x&&x.d(w),$=!1,Tt(y)}}}function Vu(e,t){if(t instanceof Map){let i={};return t.forEach((n,s)=>{i[s]=n}),i}else return t}const Tu=()=>null;function Iu(e,t,i){Ru().register(uu(),fu(),gu(),bu(),wu(),Su());let n=null,s=!1,r="",o="",a="";function c(){i(2,r=""),i(3,o=""),i(4,a=""),i(1,s=!0)}async function l(){let k;try{k=await window.showDirectoryPicker();let L=(await Du.getFiles(k)).filter(U=>U.name.endsWith(".ust")||U.name.endsWith(".ust.json"))[0];if(L){let It=await(await L.getFile()).text();i(0,n=De.fromJson(It)),n?(document.title=n.Name+" by "+n.Author+" - USTMakerWeb",console.log("Loaded UST file",n)):alert("Failed to load UST file")}else alert("No UST file found in directory")}catch(D){console.error(D)}}async function u(){if(n){let k=JSON.stringify(n,Vu,2);console.log("Saving UST file",n);let D=new Blob([k],{type:"application/json"});try{let L=await window.showSaveFilePicker({suggestedName:n.Name+".ust",types:[{description:"UST File",accept:{"*/*":[".ust.json",".ust"]}}]}),U=await L.createWritable();await U.write(D),await U.close(),alert("Saved UST file to "+L.name)}catch(L){console.error(L)}}}Or(()=>{let k=document.querySelectorAll("fluent-button.danger");ft.create(255,255,255),k.forEach(L=>{let U=ke.create(1,.1960784314,.1960784314);fi.setValueFor(L,U)});let D=document.getElementById("desc");D&&(Ke.setValueFor(D,80),console.log(Ke.getValueFor(D)))});function d(){n&&(n.levels.set("New Level",new Map),i(0,n))}function v(k,D){if(n){let L=n.levels.get(k);if(L){let U=new Map;for(let[It,oe]of n.levels)It===k?U.set(D,L):U.set(It,oe);i(0,n.levels=U,n),i(0,n)}}}function $(k){n&&(n.levels.delete(k),i(0,n))}function y(k){if(n){let D=n.levels.get(k);if(D){if(D.has("New Entry")){let L=1;for(;D.has("New Entry "+L);)L++;D.set("New Entry "+L,"")}else D.set("New Entry","");i(0,n)}}}function m(k,D,L){if(n){let U=n.levels.get(k);if(U){let It=U.get(D);if(It){let oe=new Map;for(let[Dn,Cr]of U)Dn===D?oe.set(L,It):oe.set(Dn,Cr);n.levels.set(k,oe),i(0,n)}}}}function x(k,D){var L;console.log(k,D),n&&((L=n.levels.get(k))==null||L.delete(D),i(0,n))}function w(k,D,L){if(n){let U=n.levels.get(k);U&&(U.set(D,L),i(0,n))}}return[n,s,r,o,a,c,l,u,d,v,$,y,m,x,w,(k,D)=>v(k[0],D.target.value),k=>$(k[0]),(k,D,L)=>m(k[0],D[0],L.target.value),(k,D,L)=>w(k[0],D[0],L.target.value),(k,D)=>x(k[0],D[0]),k=>y(k[0]),k=>i(2,r=k.target.value),k=>i(3,o=k.target.value),k=>i(4,a=k.target.value),()=>i(1,s=!1),()=>{i(0,n=De.getTemplate()),i(0,n.Name=r,n),i(0,n.Author=o,n),i(0,n.Description=a,n),document.title=n.Name+" by "+n.Author+" - USTMakerWeb",i(1,s=!1)}]}class Lu extends Wr{constructor(t){super(),Gr(this,t,Iu,Cu,Ir,{},null,[-1,-1])}}new Lu({target:document.getElementById("app")});
