!function(){function t(t){return t&&t.__esModule?t.default:t}var e={bodyEl:document.querySelector("body"),mainEl:document.querySelector("main"),logoEl:document.querySelector(".header-logo"),backdropEl:document.querySelector(".backdrop"),buttonCloseEl:document.querySelector(".modal__button"),bodyNoScrollEl:document.querySelector("[data-nonScroll]"),filmCardLinkEl:document.querySelector(".film-card__link"),filmsGalleryEl:document.querySelector(".films-gallery"),footerBtn:document.querySelector(".footer__btn")};function r(t){var e=[];return t.forEach((function(t){e.push(o.find((function(e){return e.id===t})).name)})),e.length>2&&(e=e.slice(0,2)).push("Other"),e}function n(t){return t.map((function(t){var e=t.original_title,n=t.release_date,o=t.genre_ids,i=t.poster_path,a=t.id,c=r(o);c.length>2&&(c=c.slice(0,2)).push("Other"),c=c.join(", ");var l=new Date(n).getFullYear();return'<div class="film-card">\n      <a class="film-card__link link" href="" id="'.concat(a,'">\n      <div class="film-card__img-box">\n        \n        <img class="film-card__img"\n          src="https://www.themoviedb.org/t/p/w500/').concat(i,'"\n          alt=""\n          \n        />\n        </div>\n      \n        <div class="film-card__info">\n          <h2 class="film-card__name film-card__item">\n            ').concat(e,'\n          </h2>\n          <p class="film-card__data film-card__item">\n            ').concat(c," | ").concat(l,"\n          </p>\n        </div>\n      </a>\n    </div>")})).join("")}var o=[];document.querySelector(".arrow-up");var i={bodyEl:document.querySelector("body"),backdropEl:document.querySelector(".backdrop"),buttonCloseEl:document.querySelector(".modal__button"),bodyNoScrollEl:document.querySelector("[data-nonScroll]"),filmCardLinkEl:document.querySelector(".film-card__link"),filmsGalleryEl:document.querySelector(".films-gallery"),footerBtn:document.querySelector(".footer__btn")},a={};function c(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,l,"next",t)}function l(t){c(i,n,o,a,l,"throw",t)}a(void 0)}))}};var l={},u=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=s(t,e,r);if("normal"===l.type){if(n=r.done?p:d,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",y={};function v(){}function m(){}function g(){}var b={};l(b,i,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(O([])));w&&w!==r&&n.call(w,i)&&(b=w);var E=g.prototype=v.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var l=s(t[o],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=g,l(E,"constructor",g),l(g,"constructor",m),m.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(k.prototype),l(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),l(E,c,"Generator"),l(E,i,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;q(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(l);try{regeneratorRuntime=u}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=u:Function("r","regeneratorRuntime = r")(u)}function s(t){return fetch("".concat("https://api.themoviedb.org/3/","/movie/").concat(t,"?api_key=").concat("45074c10b8f2ea3914a60876b2d17a1a")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))}function f(t){return'<img class="modal-card__img"\n     src="https://www.themoviedb.org/t/p/w500/'.concat(t.poster_path,'"\n     alt=""\n     id=""\n    />\n    <div class="modal-card__info">\n     <h2>').concat(t.title,'</h2>\n     <div class="table">\n     <ul class="table__parametr">\n       <li class="list">Vote/Votes </li>\n       <li class="list">Popularity </li>\n       <li class="list">Original Title </li>\n     </ul>\n         <ul class="table__value">\n       <li class="list"><span>').concat(t.vote_average,"</span>/<span>").concat(t.vote_count,'</span></li>\n       <li class="list">').concat(t.popularity,'</li>\n       <li class="list">').concat(t.original_title,"</li>\n     </ul>\n     </div>\n     <p>\n       <h3>About</h3>\n       <div>").concat(t.overview,'</div>\n     </p>\n     <button class="button">add to Watched</button>\n     <button class="button">add to queue</button>\n      </div>')}var d,h,p={},y=document.querySelector(".modal-card");function v(t){return m.apply(this,arguments)}function m(){return(m=t(a)(t(l).mark((function e(r){var n;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(r).then((function(t){return p=t}));case 2:return n=f(p),t.abrupt("return",y.innerHTML=n);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function g(t){i.backdropEl.classList.add("is-hidden"),i.bodyNoScrollEl.classList.remove("no-scroll"),y.innerHTML=""}function b(t){t.target===t.currentTarget&&(i.backdropEl.classList.add("is-hidden"),i.bodyNoScrollEl.classList.remove("no-scroll"))}function _(t){i.backdropEl.classList.remove("is-hidden"),i.bodyEl.addEventListener("keydown",(function t(e){e.code,i.backdropEl.classList.add("is-hidden"),i.bodyEl.removeEventListener("keydown",t)})),i.bodyNoScrollEl.classList.toggle("no-scroll"),i.backdropEl.addEventListener("click",b),i.buttonCloseEl.addEventListener("click",g)}function w(t){t.preventDefault(),t.target.closest(".film-card__link")&&(v(t.target.closest(".film-card__link").id),_())}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=894ef72300682f1db325dae2afe3e7e2&language=en-US").then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).then((function(t){o=t.genres})).catch((function(t){return console.log(t)})),(d=1,h="movie/week",fetch("".concat("https://api.themoviedb.org/3/trending/").concat(h,"?api_key=").concat("894ef72300682f1db325dae2afe3e7e2","&page=").concat(d)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))).then((function(t){!function(t,e){var r=n(t.results);e.insertAdjacentHTML("beforeend",r)}(t,document.querySelector(".films-gallery"))})),i.filmsGalleryEl.addEventListener("click",w),e.footerBtn.addEventListener("click",_),scrollToTop()}();
//# sourceMappingURL=index.0ecac084.js.map
