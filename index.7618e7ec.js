!function(){function t(t){return t&&t.__esModule?t.default:t}var e={logoEl:document.querySelector(".header-logo"),backdropEl:document.querySelector(".backdrop"),buttonCloseEl:document.querySelector(".modal__button"),bodyEl:document.querySelector("body"),mainEl:document.querySelector("main"),bodyNoScrollEl:document.querySelector("[data-nonScroll]")};function n(t){var e=[];return t.forEach((function(t){e.push(o.find((function(e){return e.id===t})).name)})),e.length>2&&(e=e.slice(0,2)).push("Other"),e}function r(t){return t.map((function(t){var e=t.original_title,r=t.release_date,o=t.genre_ids,i=t.poster_path,a=t.id,c=n(o);c.length>2&&(c=c.slice(0,2)).push("Other"),c=c.join(", ");var l=new Date(r).getFullYear();return'<div class="film-card">\n      <a class="film-card__link link" href="">\n      <div class="film-card__img-box">\n        \n        <img class="film-card__img"\n          src="https://www.themoviedb.org/t/p/w500/'.concat(i,'"\n          alt=""\n          id="').concat(a,'"\n        />\n        </div>\n      \n        <div class="film-card__info">\n          <h2 class="film-card__name film-card__item">\n            ').concat(e,'\n          </h2>\n          <p class="film-card__data film-card__item">\n            ').concat(c," | ").concat(l,"\n          </p>\n        </div>\n      </a>\n    </div>")})).join("")}var o=[];var i={};function a(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,l,"next",t)}function l(t){a(i,r,o,c,l,"throw",t)}c(void 0)}))}};var c={},l=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return N()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var l=s(t,e,n);if("normal"===l.type){if(r=n.done?p:h,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=p,n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function y(){}function m(){}function g(){}var w={};l(w,i,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(T([])));_&&_!==n&&r.call(_,i)&&(w=_);var E=g.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,i,a,c){var l=s(t[o],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,x(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return m.prototype=g,l(E,"constructor",g),l(g,"constructor",m),m.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(k.prototype),l(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new k(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),l(E,c,"Generator"),l(E,i,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(c);try{regeneratorRuntime=l}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=l:Function("r","regeneratorRuntime = r")(l)}function u(t){return fetch("".concat("https://api.themoviedb.org/3/","/movie/").concat(t,"?api_key=").concat("45074c10b8f2ea3914a60876b2d17a1a")).then((function(t){if(!t.ok)throw new Error(t.status);return console.log(t),t.json()}))}function s(t){return'<img class="modal-card__img"\n     src="https://www.themoviedb.org/t/p/w500/'.concat(t.poster_path,'"\n     alt=""\n     id=""\n    />\n    <div class="modal-card__info">\n     <h2>').concat(t.title,'</h2>\n     <div class="table">\n     <ul class="table__parametr">\n       <li class="list">Vote/Votes </li>\n       <li class="list">Popularity </li>\n       <li class="list">Original Title </li>\n     </ul>\n         <ul class="table__value">\n       <li class="list"><span>').concat(t.vote_average,"</span>/<span>").concat(t.vote_count,'</span></li>\n       <li class="list">').concat(t.popularity,'</li>\n       <li class="list">').concat(t.original_title,"</li>\n     </ul>\n     </div>\n     <p>\n       <h3>About</h3>\n       <div>").concat(t.overview,'</div>\n     </p>\n     <button class="button">add to Watched</button>\n     <button class="button">add to queue</button>\n      </div>')}var f={},h=document.querySelector(".modal-card");function d(t){return p.apply(this,arguments)}function p(){return(p=t(i)(t(c).mark((function e(n){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(n).then((function(t){return f=t}));case 2:return console.log("return",f),r=s(f),t.abrupt("return",h.innerHTML=r);case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var v,y,m=0,g=0;function w(t){e.backdropEl.classList.add("is-hidden"),e.bodyNoScrollEl.classList.remove("no-scroll"),h.innerHTML=""}function b(t){t.target===t.currentTarget&&(e.backdropEl.classList.add("is-hidden"),e.bodyNoScrollEl.classList.remove("no-scroll"))}function _(t){e.backdropEl.classList.remove("is-hidden"),e.bodyEl.addEventListener("keydown",(function t(n){"Escape"===n.code&&(e.backdropEl.classList.add("is-hidden"),e.bodyEl.removeEventListener("keydown",t))})),e.bodyNoScrollEl.classList.toggle("no-scroll")}function E(t){t.preventDefault(),m=t.target,g=t.target.id,m!==t.currentTarget&&(d(g),_())}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=894ef72300682f1db325dae2afe3e7e2&language=en-US").then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).then((function(t){o=t.genres})).catch((function(t){return console.log(t)})),(v=1,y="movie/week",fetch("".concat("https://api.themoviedb.org/3/trending/").concat(y,"?api_key=").concat("894ef72300682f1db325dae2afe3e7e2","&page=").concat(v)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))).then((function(t){!function(t,e){var n=r(t.results);e.insertAdjacentHTML("beforeend",n)}(t,document.querySelector(".films-gallery"))})),e.mainEl.addEventListener("click",E),e.buttonCloseEl.addEventListener("click",w),e.backdropEl.addEventListener("click",b)}();
//# sourceMappingURL=index.7618e7ec.js.map
