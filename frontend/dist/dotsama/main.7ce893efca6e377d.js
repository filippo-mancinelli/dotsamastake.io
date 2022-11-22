"use strict";(self.webpackChunkdotsama=self.webpackChunkdotsama||[]).push([[179],{680:()=>{function q(e){return"function"==typeof e}function or(e){const n=e(r=>{Error.call(r),r.stack=(new Error).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}const ir=or(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map((r,o)=>`${o+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n});function mn(e,t){if(e){const n=e.indexOf(t);0<=n&&e.splice(n,1)}}class Fe{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const i of n)i.remove(this);else n.remove(this);const{initialTeardown:r}=this;if(q(r))try{r()}catch(i){t=i instanceof ir?i.errors:[i]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const i of o)try{wa(i)}catch(s){t=t??[],s instanceof ir?t=[...t,...s.errors]:t.push(s)}}if(t)throw new ir(t)}}add(t){var n;if(t&&t!==this)if(this.closed)wa(t);else{if(t instanceof Fe){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}}_hasParent(t){const{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){const{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&mn(n,t)}remove(t){const{_finalizers:n}=this;n&&mn(n,t),t instanceof Fe&&t._removeParent(this)}}function _a(e){return e instanceof Fe||e&&"closed"in e&&q(e.remove)&&q(e.add)&&q(e.unsubscribe)}function wa(e){q(e)?e():e.unsubscribe()}Fe.EMPTY=(()=>{const e=new Fe;return e.closed=!0,e})();const pt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},sr={setTimeout(e,t,...n){const{delegate:r}=sr;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){const{delegate:t}=sr;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function Ea(){}const $p=wo("C",void 0,void 0);function wo(e,t,n){return{kind:e,value:t,error:n}}let ht=null;class Do extends Fe{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,_a(t)&&t.add(this)):this.destination=zp}static create(t,n,r){return new yn(t,n,r)}next(t){this.isStopped?Co(function Up(e){return wo("N",e,void 0)}(t),this):this._next(t)}error(t){this.isStopped?Co(function Bp(e){return wo("E",void 0,e)}(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?Co($p,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const Gp=Function.prototype.bind;function Eo(e,t){return Gp.call(e,t)}class Wp{constructor(t){this.partialObserver=t}next(t){const{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){lr(r)}}error(t){const{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){lr(r)}else lr(t)}complete(){const{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){lr(n)}}}class yn extends Do{constructor(t,n,r){let o;if(super(),q(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&pt.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&Eo(t.next,i),error:t.error&&Eo(t.error,i),complete:t.complete&&Eo(t.complete,i)}):o=t}this.destination=new Wp(o)}}function lr(e){pt.useDeprecatedSynchronousErrorHandling?function qp(e){pt.useDeprecatedSynchronousErrorHandling&&ht&&(ht.errorThrown=!0,ht.error=e)}(e):function Da(e){sr.setTimeout(()=>{const{onUnhandledError:t}=pt;if(!t)throw e;t(e)})}(e)}function Co(e,t){const{onStoppedNotification:n}=pt;n&&sr.setTimeout(()=>n(e,t))}const zp={closed:!0,next:Ea,error:function Qp(e){throw e},complete:Ea},bo="function"==typeof Symbol&&Symbol.observable||"@@observable";function Ca(e){return e}let pe=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){const r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){const i=function Yp(e){return e&&e instanceof Do||function Zp(e){return e&&q(e.next)&&q(e.error)&&q(e.complete)}(e)&&_a(e)}(n)?n:new yn(n,r,o);return function ar(e){if(pt.useDeprecatedSynchronousErrorHandling){const t=!ht;if(t&&(ht={errorThrown:!1,error:null}),e(),t){const{errorThrown:n,error:r}=ht;if(ht=null,n)throw r}}else e()}(()=>{const{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return new(r=Ma(r))((o,i)=>{const s=new yn({next:a=>{try{n(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(n)}[bo](){return this}pipe(...n){return function ba(e){return 0===e.length?Ca:1===e.length?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}(n)(this)}toPromise(n){return new(n=Ma(n))((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function Ma(e){var t;return null!==(t=e??pt.Promise)&&void 0!==t?t:Promise}or(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}),function sh(){"function"==typeof Symbol&&Symbol.iterator&&Symbol}(),new pe(e=>e.complete()),Error;let xp=!0;!function sE(){xp=!1}()}},q=>{q(q.s=680)}]);