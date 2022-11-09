!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequire8f96;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire8f96=i),i.register("90xte",(function(e,t){e.exports=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("66S3m")})),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),i.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),i.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),i.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return o.apply(null,arguments)};var r,n=(r=i("gD1JV"))&&r.__esModule?r:{default:r};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=a()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return r&&n.default(a,r.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),i.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),i.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=a(i("ds8z5")),n=a(i("l5bVx"));function a(e){return e&&e.__esModule?e:{default:e}}})),i.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=i("fVNic"))&&r.__esModule?r:{default:r}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.32715428.js","66S3m":"movie_time_22.967cf7aa.jpg","2hvCh":"index.d4ff44c2.js"}'));var a=i("51gX1"),o=i("5ciJU"),s=i("bpxeT"),u=i("2TvXO");i("51gX1");var c=i("gqyaY");s=i("bpxeT"),u=i("2TvXO");function l(e){return fetch("".concat("https://api.themoviedb.org/3/","/movie/").concat(e,"?api_key=").concat("45074c10b8f2ea3914a60876b2d17a1a")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function f(e){var t=e.genres.map((function(e){return e.name})).join(", "),r="https://www.themoviedb.org/t/p/w500/".concat(e.poster_path);return null===e.poster_path&&(r=i("90xte")),'<img class="modal-card__img"\n     src="'.concat(r,'"\n     alt=""\n     id=""\n    />\n    <div class="modal-card__info">\n     <h2 class="modal-card__title">').concat(e.title.toUpperCase(),'</h2>\n     <table class="table">\n      <tbody>\n        <tr class="table__line">\n          <td class=" table__parametr">Vote/Votes</td>\n          <td class="table__value"><span class="table__span-value">').concat(e.vote_average,'</span>\n       <span class="table__value-slash">/</span>\n       <span>').concat(e.vote_count,'</span></td>\n        </tr> \n           <tr class="table__line">\n          <td class="table__parametr" >Popularity</td>\n          <td class="table__value">').concat(e.popularity,'</td>\n        </tr>\n           <tr class="table__line">\n          <td class="table__parametr">Original Title</td>\n          <td class="table__value table-text">').concat(e.original_title.toUpperCase(),'</td>\n        </tr>\n           <tr class="table__line">\n          <td class="table__parametr">Genre</td>\n          <td class="table__value table-text">').concat(t,'</td>\n        </tr>\n      </tbody>\n     </table>    \n     <p>\n       <h3 class="about">ABOUT</h3>\n       <div class="about-text">').concat(e.overview,'</div>\n     </p>\n\n     <div class="button-add">\n     <button class="button-add__watched">ADD TO WATCHED</button>\n     <button class="button-add__queue">ADD TO QUEUE</button>\n      </div>\n     </div>')}i("2jUT0"),i("7HQsY");o=i("5ciJU");var d={},h=document.querySelector(".modal-card");function p(e){return v.apply(this,arguments)}function v(){return(v=e(s)(e(u).mark((function t(r){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(r).then((function(e){return d=e}));case 2:return(0,o.addToLokalStorage)(d),n=f(d),e.abrupt("return",h.innerHTML=n);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function m(){c.refs.backdropEl.classList.add("is-hidden"),c.refs.bodyNoScrollEl.classList.remove("no-scroll"),h.innerHTML=""}function g(e){e.target===e.currentTarget&&(c.refs.backdropEl.classList.add("is-hidden"),c.refs.bodyNoScrollEl.classList.remove("no-scroll"))}function y(e){"Escape"===e.code&&(c.refs.bodyNoScrollEl.classList.remove("no-scroll"),c.refs.backdropEl.classList.add("is-hidden"),c.refs.bodyEl.removeEventListener("keydown",y))}function b(e){c.refs.backdropEl.classList.remove("is-hidden"),c.refs.bodyEl.addEventListener("keydown",y),c.refs.bodyNoScrollEl.classList.add("no-scroll"),c.refs.backdropEl.addEventListener("click",g),c.refs.buttonCloseEl.addEventListener("click",m)}function k(e){return _.apply(this,arguments)}function _(){return(_=e(s)(e(u).mark((function t(r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!r.target.closest(".film-card__link")){e.next=5;break}return e.next=4,p(r.target.closest(".film-card__link").id);case 4:b();case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function w(e){e.preventDefault(),a.refs.backdropAuth.classList.toggle("is-hidden")}(a=i("51gX1")).refs.logIn.addEventListener("click",w),a.refs.btnCloseForm.addEventListener("click",w),a.refs.btnRegUser.addEventListener("click",(function(e){return e.preventDefault(),"Register"===e.target.textContent?function(){a.refs.titelForm.textContent="Registration",a.refs.btnSubmit.textContent="Register",a.refs.titleQuestionUser.textContent="Do have an account?",a.refs.btnRegUser.textContent="Auth"}():function(){a.refs.titelForm.textContent="Login",a.refs.btnSubmit.textContent="LogIn",a.refs.titleQuestionUser.textContent="Do`t have an account?",a.refs.btnRegUser.textContent="Register"}()}));s=i("bpxeT");var I={};Object.defineProperty(I,"__esModule",{value:!0}),I.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var x={};function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(x,"__esModule",{value:!0}),x.default=function(e,t,r){t&&T(e.prototype,t);r&&T(e,r);return e};var E=i("hKHmD"),S=i("8nrFW"),O=(u=i("2TvXO"),s=i("bpxeT"),{});Object.defineProperty(O,"__esModule",{value:!0}),O.default=function(e,t){return R.default(e)||C.default(e,t)||P.default(e,t)||A.default()};var R=N(i("8slrw")),C=N(i("7AJDX")),A=N(i("ifqQW")),P=N(i("auk6i"));function N(e){return e&&e.__esModule?e:{default:e}}S=i("8nrFW"),u=i("2TvXO");var D=i("ds8z5"),L={};Object.defineProperty(L,"__esModule",{value:!0}),L.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U.default(e,t)};var M,U=(M=i("gD1JV"))&&M.__esModule?M:{default:M};S=i("8nrFW");var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(e){return z(e)};var F=W(i("ge8co")),V=W(i("cZGw3")),H=W(i("fVNic")),B=W(i("gD1JV"));function W(e){return e&&e.__esModule?e:{default:e}}function z(e){var t="function"==typeof Map?new Map:void 0;return z=function(e){if(null===e||!V.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return F.default(e,arguments,H.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),B.default(r,e)},z(e)}var q={};Object.defineProperty(q,"__esModule",{value:!0}),q.default=function(e){var t=K.default();return function(){var r,n=G.default(e);if(t){var i=G.default(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return J.default(this,r)}};var K=X(i("aTHs7")),G=X(i("fVNic")),J=X(i("jmhxu"));function X(e){return e&&e.__esModule?e:{default:e}}var Y,$,Q,Z=Y={};function ee(){throw new Error("setTimeout has not been defined")}function te(){throw new Error("clearTimeout has not been defined")}function re(e){if($===setTimeout)return setTimeout(e,0);if(($===ee||!$)&&setTimeout)return $=setTimeout,setTimeout(e,0);try{return $(e,0)}catch(t){try{return $.call(null,e,0)}catch(t){return $.call(this,e,0)}}}!function(){try{$="function"==typeof setTimeout?setTimeout:ee}catch(e){$=ee}try{Q="function"==typeof clearTimeout?clearTimeout:te}catch(e){Q=te}}();var ne,ie=[],ae=!1,oe=-1;function se(){ae&&ne&&(ae=!1,ne.length?ie=ne.concat(ie):oe=-1,ie.length&&ue())}function ue(){if(!ae){var e=re(se);ae=!0;for(var t=ie.length;t;){for(ne=ie,ie=[];++oe<t;)ne&&ne[oe].run();oe=-1,t=ie.length}ne=null,ae=!1,function(e){if(Q===clearTimeout)return clearTimeout(e);if((Q===te||!Q)&&clearTimeout)return Q=clearTimeout,clearTimeout(e);try{Q(e)}catch(t){try{return Q.call(null,e)}catch(t){return Q.call(this,e)}}}(e)}}function ce(e,t){this.fun=e,this.array=t}function le(){}Z.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];ie.push(new ce(e,t)),1!==ie.length||ae||re(ue)},ce.prototype.run=function(){this.fun.apply(null,this.array)},Z.title="browser",Z.browser=!0,Z.env={},Z.argv=[],Z.version="",Z.versions={},Z.on=le,Z.addListener=le,Z.once=le,Z.off=le,Z.removeListener=le,Z.removeAllListeners=le,Z.emit=le,Z.prependListener=le,Z.prependOnceListener=le,Z.listeners=function(e){return[]},Z.binding=function(e){throw new Error("process.binding is not supported")},Z.cwd=function(){return"/"},Z.chdir=function(e){throw new Error("process.chdir is not supported")},Z.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fe=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},de={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,h=63&c;u||(h=64,o||(d=64)),n.push(r[l],r[f],r[d],r[h])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(fe(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var a=r[e.charAt(i++)],o=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(n.push(c),64!==s){var l=o<<4&240|s>>2;if(n.push(l),64!==u){var f=s<<6&192|u;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},he=function(e){return function(e){var t=fe(e);return de.encodeByteArray(t,!0)}(e).replace(/\./g,"")},pe=function(e){try{return de.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ve(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var me=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},ge=function(){try{return me()||function(){if(void 0!==Y&&void 0!==Y.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&pe(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},ye=function(e){var t,r;return null===(r=null===(t=ge())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},be=function(){var e;return null===(e=ge())||void 0===e?void 0:e.config},ke=function(e){var t;return null===(t=ge())||void 0===t?void 0:t["_".concat(e)]},_e=function(){"use strict";function t(){var r=this;e(I)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return e(x)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var we=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(t,i,a){var o;return e(I)(this,n),(o=r.call(this,i)).code=t,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(e(D)(o),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(D)(o),Ie.prototype.create),o}return n}(e(j)(Error)),Ie=function(){"use strict";function t(r,n,i){e(I)(this,t),this.service=r,this.serviceName=n,this.errors=i}return e(x)(t,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?xe(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new we(a,u,i);return c}}]),t}();function xe(e,t){return e.replace(Te,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var Te=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Se(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(Oe(l)&&Oe(f)){if(!Se(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,h=!1,p=void 0;try{for(var v,m=n[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var g=v.value;if(!r.includes(g))return!1}}catch(e){h=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(h)throw p}}return!0}function Oe(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Re(t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=function(t,n){var i=e(O)(n.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){r.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return r.length?"&"+r.join("&"):""}function Ce(t){var r={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=e(O)(t.split("="),2),i=n[0],a=n[1];r[decodeURIComponent(i)]=decodeURIComponent(a)}})),r}function Ae(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe=function(){"use strict";function t(r,n){var i=this;e(I)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){r(i)})).catch((function(e){i.error(e)}))}return e(x)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=Ne),void 0===n.error&&(n.error=Ne),void 0===n.complete&&(n.complete=Ne);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Ne(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function De(e){return e&&e._delegate?e._delegate:e}var Le=function(){"use strict";function t(r,n,i){e(I)(this,t),this.name=r,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(x)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Me="[DEFAULT]",Ue=function(){"use strict";function t(r,n){e(I)(this,t),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(x)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new _e;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:Me})}catch(e){}var r=!0,n=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=e(O)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(s)(e(u).mark((function r(){var n;return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(t.instances.values()),r.next=3,Promise.all(e(S)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(S)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.options,n=void 0===r?{}:r,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:n}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=e(O)(c.value,2),d=f[0],h=f[1],p=this.normalizeInstanceIdentifier(d);i===p&&h.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var a=this.instances.get(n);return a&&e(a,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,a=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,a=this.instances.get(r);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===Me?void 0:t),options:i}),this.instances.set(r,a),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(a,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;return this.component?this.component.multipleInstances?e:Me:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,Fe,Ve=function(){"use strict";function t(r){e(I)(this,t),this.name=r,this.providers=new Map}return e(x)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ue(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),He=(E=i("hKHmD"),S=i("8nrFW"),[]);(Fe=je||(je={}))[Fe.DEBUG=0]="DEBUG",Fe[Fe.VERBOSE=1]="VERBOSE",Fe[Fe.INFO=2]="INFO",Fe[Fe.WARN=3]="WARN",Fe[Fe.ERROR=4]="ERROR",Fe[Fe.SILENT=5]="SILENT";var Be,We={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},ze=je.INFO,qe=(Be={},e(E)(Be,je.DEBUG,"log"),e(E)(Be,je.VERBOSE,"log"),e(E)(Be,je.INFO,"info"),e(E)(Be,je.WARN,"warn"),e(E)(Be,je.ERROR,"error"),Be),Ke=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var o;if(!(r<t.logLevel)){var s=(new Date).toISOString(),u=qe[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(S)(i)))}},Ge=function(){"use strict";function t(r){e(I)(this,t),this.name=r,this._logLevel=ze,this._logHandler=Ke,this._userLogHandler=null,He.push(this)}return e(x)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in je))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?We[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,je.DEBUG].concat(e(S)(r))),this._logHandler.apply(this,[this,je.DEBUG].concat(e(S)(r)))}},{key:"log",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,je.VERBOSE].concat(e(S)(r))),this._logHandler.apply(this,[this,je.VERBOSE].concat(e(S)(r)))}},{key:"info",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,je.INFO].concat(e(S)(r))),this._logHandler.apply(this,[this,je.INFO].concat(e(S)(r)))}},{key:"warn",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,je.WARN].concat(e(S)(r))),this._logHandler.apply(this,[this,je.WARN].concat(e(S)(r)))}},{key:"error",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,je.ERROR].concat(e(S)(r))),this._logHandler.apply(this,[this,je.ERROR].concat(e(S)(r)))}}]),t}();s=i("bpxeT");var Je={};Object.defineProperty(Je,"__esModule",{value:!0}),Je.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Xe.default(e,t,r[t])}))}return e};var Xe=function(e){return e&&e.__esModule?e:{default:e}}(i("hKHmD"));var Ye,$e;S=i("8nrFW"),u=i("2TvXO"),S=i("8nrFW");var Qe=new WeakMap,Ze=new WeakMap,et=new WeakMap,tt=new WeakMap,rt=new WeakMap;var nt={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return Ze.get(e);if("objectStoreNames"===t)return e.objectStoreNames||et.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ot(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function it(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?($e||($e=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(st(this),r),ot(Qe.get(this))}:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return ot(t.apply(st(this),r))}:function(r){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[st(this),r].concat(e(S)(i)));return et.set(s,r.sort?r.sort():[r]),ot(s)}}function at(e){return"function"==typeof e?it(e):(e instanceof IDBTransaction&&function(e){if(!Ze.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),n()},a=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Ze.set(e,t)}}(e),t=e,(Ye||(Ye=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,nt):e);var t}function ot(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(ot(t.result)),n()},a=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&Qe.set(e,t)})).catch((function(){})),rt.set(r,t),r;var t,r;if(tt.has(e))return tt.get(e);var n=at(e);return n!==e&&(tt.set(e,n),rt.set(n,e)),n}var st=function(e){return rt.get(e)};function ut(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,a=r.blocking,o=r.terminated,s=indexedDB.open(e,t),u=ot(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(ot(s.result),e.oldVersion,e.newVersion,ot(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var ct=["get","getKey","getAll","getAllKeys","count"],lt=["put","add","delete","clear"],ft=new Map;function dt(t,r){if(t instanceof IDBDatabase&&!(r in t)&&"string"==typeof r){if(ft.get(r))return ft.get(r);var n=r.replace(/FromIndex$/,""),i=r!==n,a=lt.includes(n);if(n in(i?IDBIndex:IDBObjectStore).prototype&&(a||ct.includes(n))){var o,c=(o=e(s)(e(u).mark((function t(r){var o,s,c,l,f,d,h=arguments;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o=h.length,s=new Array(o>1?o-1:0),c=1;c<o;c++)s[c-1]=h[c];return f=this.transaction(r,a?"readwrite":"readonly"),d=f.store,i&&(d=d.index(s.shift())),t.next=7,Promise.all([(l=d)[n].apply(l,e(S)(s)),a&&f.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return o.apply(this,arguments)});return ft.set(r,c),c}}}nt=function(t){return e(Je)({},t,{get:function(e,r,n){return dt(e,r)||t.get(e,r,n)},has:function(e,r){return!!dt(e,r)||t.has(e,r)}})}(nt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ht=function(){"use strict";function t(r){e(I)(this,t),this.container=r}return e(x)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var pt,vt,mt="@firebase/app",gt="0.8.3",yt=new Ge("@firebase/app"),bt="[DEFAULT]",kt=(pt={},e(E)(pt,mt,"fire-core"),e(E)(pt,"@firebase/app-compat","fire-core-compat"),e(E)(pt,"@firebase/analytics","fire-analytics"),e(E)(pt,"@firebase/analytics-compat","fire-analytics-compat"),e(E)(pt,"@firebase/app-check","fire-app-check"),e(E)(pt,"@firebase/app-check-compat","fire-app-check-compat"),e(E)(pt,"@firebase/auth","fire-auth"),e(E)(pt,"@firebase/auth-compat","fire-auth-compat"),e(E)(pt,"@firebase/database","fire-rtdb"),e(E)(pt,"@firebase/database-compat","fire-rtdb-compat"),e(E)(pt,"@firebase/functions","fire-fn"),e(E)(pt,"@firebase/functions-compat","fire-fn-compat"),e(E)(pt,"@firebase/installations","fire-iid"),e(E)(pt,"@firebase/installations-compat","fire-iid-compat"),e(E)(pt,"@firebase/messaging","fire-fcm"),e(E)(pt,"@firebase/messaging-compat","fire-fcm-compat"),e(E)(pt,"@firebase/performance","fire-perf"),e(E)(pt,"@firebase/performance-compat","fire-perf-compat"),e(E)(pt,"@firebase/remote-config","fire-rc"),e(E)(pt,"@firebase/remote-config-compat","fire-rc-compat"),e(E)(pt,"@firebase/storage","fire-gcs"),e(E)(pt,"@firebase/storage-compat","fire-gcs-compat"),e(E)(pt,"@firebase/firestore","fire-fst"),e(E)(pt,"@firebase/firestore-compat","fire-fst-compat"),e(E)(pt,"fire-js","fire-js"),e(E)(pt,"firebase","fire-js-all"),pt),_t=new Map,wt=new Map;function It(e,t){try{e.container.addComponent(t)}catch(r){yt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function xt(e){var t=e.name;if(wt.has(t))return yt.debug("There were multiple attempts to register component ".concat(t,".")),!1;wt.set(t,e);var r=!0,n=!1,i=void 0;try{for(var a,o=_t.values()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){It(a.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!0}function Tt(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Et=(vt={},e(E)(vt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(E)(vt,"bad-app-name","Illegal App name: '{$appName}"),e(E)(vt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(E)(vt,"app-deleted","Firebase App named '{$appName}' already deleted"),e(E)(vt,"no-options","Need to provide options, when not being deployed to hosting via source."),e(E)(vt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(E)(vt,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(E)(vt,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(E)(vt,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(E)(vt,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(E)(vt,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),vt),St=new Ie("app","Firebase",Et),Ot=function(){"use strict";function t(r,n,i){var a=this;e(I)(this,t),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Le("app",(function(){return a}),"PUBLIC"))}return e(x)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}]),t}(),Rt="9.13.0";function Ct(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;if("object"!=typeof t){var n=t;t={name:n}}var i=Object.assign({name:bt,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw St.create("bad-app-name",{appName:String(a)});if(r||(r=be()),!r)throw St.create("no-options");var o=_t.get(a);if(o){if(Se(r,o.options)&&Se(i,o.config))return o;throw St.create("duplicate-app",{appName:a})}var s=new Ve(a),u=!0,c=!1,l=void 0;try{for(var f,d=wt.values()[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var h=f.value;s.addComponent(h)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var p=new Ot(r,i,s);return _t.set(a,p),p}function At(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=_t.get(e);if(!t&&e===bt)return Ct();if(!t)throw St.create("no-app",{appName:e});return t}function Pt(e,t,r){var n,i=null!==(n=kt[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void yt.warn(s.join(" "))}xt(new Le("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nt="firebase-heartbeat-store",Dt=null;function Lt(){return Dt||(Dt=ut("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Nt)}}).catch((function(e){throw St.create("idb-open",{originalErrorMessage:e.message})}))),Dt}function Mt(e){return Ut.apply(this,arguments)}function Ut(){return(Ut=e(s)(e(u).mark((function t(r){var n,i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Lt();case 4:return i=e.sent,e.abrupt("return",i.transaction(Nt).objectStore(Nt).get(Vt(r)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof we?yt.warn(e.t0.message):(a=St.create("idb-get",{originalErrorMessage:null===(n=e.t0)||void 0===n?void 0:n.message}),yt.warn(a.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function jt(e,t){return Ft.apply(this,arguments)}function Ft(){return(Ft=e(s)(e(u).mark((function t(r,n){var i,a,o,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Lt();case 4:return a=e.sent,o=a.transaction(Nt,"readwrite"),s=o.objectStore(Nt),e.next=9,s.put(n,Vt(r));case 9:return e.abrupt("return",o.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof we?yt.warn(e.t0.message):(c=St.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),yt.warn(c.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Vt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht=function(){"use strict";function t(r){var n=this;e(I)(this,t),this.container=r,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new qt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return e(x)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(s)(e(u).mark((function r(){var n,i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),a=Bt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(s)(e(u).mark((function r(){var n,i,a,o,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(n=Bt(),i=Wt(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=he(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=n,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),r)})))()}}]),t}();function Bt(){return(new Date).toISOString().substring(0,10)}function Wt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=r.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Kt(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:a.agent,dates:[a.date]}),Kt(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var zt,qt=function(){"use strict";function t(r){e(I)(this,t),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(x)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(s)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(s)(e(u).mark((function r(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Mt(t.app);case 9:return n=e.sent,e.abrupt("return",n||{heartbeats:[]});case 11:case"end":return e.stop()}}),r)})))()}},{key:"overwrite",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,r.read();case 10:return a=e.sent,e.abrupt("return",jt(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),n)})))()}},{key:"add",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i,a;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return a=n.sent,n.abrupt("return",jt(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(S)(a.heartbeats).concat(e(S)(t.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),t}();function Kt(e){return he(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt="",xt(new Le("platform-logger",(function(e){return new ht(e)}),"PRIVATE")),xt(new Le("heartbeat",(function(e){return new Ht(e)}),"PRIVATE")),Pt(mt,gt,zt),Pt(mt,gt,"esm2017"),Pt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Pt("firebase","9.13.0","app");D=i("ds8z5"),s=i("bpxeT"),E=i("hKHmD");var Gt={};Object.defineProperty(Gt,"__esModule",{value:!0}),Gt.default=function(e,t,r){return Xt(e,t,r)};var Jt=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function Xt(e,t,r){return(Xt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=Jt.default(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r||e):i.value}})(e,t,r)}var Yt=i("fVNic");S=i("8nrFW"),u=i("2TvXO");function $t(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create;function Qt(){return e(E)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Zt=Qt,er=new Ie("auth","Firebase",Qt()),tr=new Ge("@firebase/auth");function rr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;tr.logLevel<=je.ERROR&&(a=tr).error.apply(a,["Auth (".concat(Rt,"): ").concat(t)].concat(e(S)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];throw or.apply(void 0,[t].concat(e(S)(n)))}function ir(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return or.apply(void 0,[t].concat(e(S)(n)))}function ar(t,r,n){var i=Object.assign(Object.assign({},Zt()),e(E)({},r,n));return new Ie("auth","Firebase",i).create(r,{appName:t.name})}function or(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=n[0],u=e(S)(n.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(S)(u)))}return(a=er).create.apply(a,[t].concat(e(S)(n)))}function sr(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(!t)throw or.apply(void 0,[r].concat(e(S)(i)))}function ur(e){var t="INTERNAL ASSERTION FAILED: "+e;throw rr(t),new Error(t)}function cr(e,t){e||ur(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lr=new Map;function fr(e){cr(e instanceof Function,"Expected a class definition");var t=lr.get(e);return t?(cr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,lr.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e,t){var r=Tt(e,"auth");if(r.isInitialized()){var n=r.getImmediate();if(Se(r.getOptions(),null!=t?t:{}))return n;nr(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function pr(){return"http:"===vr()||"https:"===vr()}function vr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!pr()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gr=function(){"use strict";function t(r,n){e(I)(this,t),this.shortDelay=r,this.longDelay=n,cr(n>r,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(x)(t,[{key:"get",value:function(){return mr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(e,t){cr(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var br,kr=function(){"use strict";function t(){e(I)(this,t)}return e(x)(t,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),_r=(br={},e(E)(br,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(E)(br,"MISSING_CUSTOM_TOKEN","internal-error"),e(E)(br,"INVALID_IDENTIFIER","invalid-email"),e(E)(br,"MISSING_CONTINUE_URI","internal-error"),e(E)(br,"INVALID_PASSWORD","wrong-password"),e(E)(br,"MISSING_PASSWORD","internal-error"),e(E)(br,"EMAIL_EXISTS","email-already-in-use"),e(E)(br,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(E)(br,"INVALID_IDP_RESPONSE","invalid-credential"),e(E)(br,"INVALID_PENDING_TOKEN","invalid-credential"),e(E)(br,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(E)(br,"MISSING_REQ_TYPE","internal-error"),e(E)(br,"EMAIL_NOT_FOUND","user-not-found"),e(E)(br,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(E)(br,"EXPIRED_OOB_CODE","expired-action-code"),e(E)(br,"INVALID_OOB_CODE","invalid-action-code"),e(E)(br,"MISSING_OOB_CODE","internal-error"),e(E)(br,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(E)(br,"INVALID_ID_TOKEN","invalid-user-token"),e(E)(br,"TOKEN_EXPIRED","user-token-expired"),e(E)(br,"USER_NOT_FOUND","user-token-expired"),e(E)(br,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(E)(br,"INVALID_CODE","invalid-verification-code"),e(E)(br,"INVALID_SESSION_INFO","invalid-verification-id"),e(E)(br,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(E)(br,"MISSING_SESSION_INFO","missing-verification-id"),e(E)(br,"SESSION_EXPIRED","code-expired"),e(E)(br,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(E)(br,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(E)(br,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(E)(br,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(E)(br,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(E)(br,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(E)(br,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(E)(br,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(E)(br,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(E)(br,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(E)(br,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),br),wr=new gr(3e4,6e4);function Ir(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function xr(e,t,r,n){return Tr.apply(this,arguments)}function Tr(){return Tr=e(s)(e(u).mark((function t(r,n,i,a){var o,c=arguments;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",Er(r,o,e(s)(e(u).mark((function t(){var o,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===n?s=a:o={body:JSON.stringify(a)}),c=Re(Object.assign({key:r.config.apiKey},s)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",kr.fetch()(Cr(r,r.config.apiHost,i,c),Object.assign({method:n,headers:l,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Tr.apply(this,arguments)}function Er(e,t,r){return Sr.apply(this,arguments)}function Sr(){return(Sr=e(s)(e(u).mark((function t(r,n,i){var a,o,s,c,l,f,d,h,p;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r._canInitEmulator=!1,a=Object.assign(Object.assign({},_r),n),t.prev=2,o=new Ar(r),t.next=6,Promise.race([i(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw Pr(r,"account-exists-with-different-credential",c);case 13:if(!s.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=s.ok?c.errorMessage:c.error.message,f=e(O)(l.split(" : "),2),d=f[0],h=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){t.next=23;break}throw Pr(r,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==d){t.next=27;break}throw Pr(r,"email-already-in-use",c);case 27:if("USER_DISABLED"!==d){t.next=29;break}throw Pr(r,"user-disabled",c);case 29:if(p=a[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!h){t.next=34;break}throw ar(r,p,h);case 34:nr(r,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof we)){t.next=41;break}throw t.t0;case 41:nr(r,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Or(e,t,r,n){return Rr.apply(this,arguments)}function Rr(){return Rr=e(s)(e(u).mark((function t(r,n,i,a){var o,s,c=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,xr(r,n,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&nr(r,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),Rr.apply(this,arguments)}function Cr(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?yr(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Ar=function(){"use strict";function t(r){var n=this;e(I)(this,t),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(ir(r.auth,"network-request-failed"))}),wr.get())}))}return e(x)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Pr(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=ir(e,t,n);return i.customData._tokenResponse=r,i}function Nr(e,t){return Dr.apply(this,arguments)}function Dr(){return(Dr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(r,n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xr(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Lr(e,t){return Mr.apply(this,arguments)}function Mr(){return(Mr=e(s)(e(u).mark((function t(r,n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xr(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){return jr=e(s)(e(u).mark((function t(r){var n,i,a,o,s,c,l=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]&&l[1],i=De(r),e.next=4,i.getIdToken(n);case 4:return a=e.sent,sr((o=Vr(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,c=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:Ur(Fr(o.auth_time)),issuedAtTime:Ur(Fr(o.iat)),expirationTime:Ur(Fr(o.exp)),signInProvider:c||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),jr.apply(this,arguments)}function Fr(e){return 1e3*Number(e)}function Vr(t){var r,n=e(O)(t.split("."),3),i=n[0],a=n[1],o=n[2];if(void 0===i||void 0===a||void 0===o)return rr("JWT malformed, contained fewer than 3 sections"),null;try{var s=pe(a);return s?JSON.parse(s):(rr("Failed to decode base64 JWT payload"),null)}catch(e){return rr("Caught error parsing JWT payload as JSON",null===(r=e)||void 0===r?void 0:r.toString()),null}}function Hr(e,t){return Br.apply(this,arguments)}function Br(){return Br=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(r,n){var i=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof we&&Wr(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Br.apply(this,arguments)}function Wr(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zr=function(){"use strict";function t(r){e(I)(this,t),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(x)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(t),n=this;this.timerId=setTimeout(e(s)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),t)}))),r)}}},{key:"iteration",value:function(){var t=this;return e(s)(e(u).mark((function r(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(n=e.t0)||void 0===n?void 0:n.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}}]),t}(),qr=function(){"use strict";function t(r,n){e(I)(this,t),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return e(x)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Ur(this.lastLoginAt),this.creationTime=Ur(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(e){return Gr.apply(this,arguments)}function Gr(){return(Gr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(r){var n,i,a,o,s,c,l,f,d,h,p;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.auth,e.next=4,r.getIdToken();case 4:return a=e.sent,e.next=7,Hr(r,Lr(i,{idToken:a}));case 7:sr(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],r._notifyReloadListener(s),c=(null===(n=s.providerUserInfo)||void 0===n?void 0:n.length)?Yr(s.providerUserInfo):[],l=Xr(r.providerData,c),f=r.isAnonymous,d=!(r.email&&s.passwordHash||(null==l?void 0:l.length)),h=!!f&&d,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new qr(s.createdAt,s.lastLoginAt),isAnonymous:h},Object.assign(r,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Jr(){return(Jr=e(s)(e(u).mark((function t(r){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=De(r),e.next=3,Kr(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xr(t,r){var n=t.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return e(S)(n).concat(e(S)(r))}function Yr(e){return e.map((function(e){var t=e.providerId,r=$t(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function $r(e,t){return Qr.apply(this,arguments)}function Qr(){return(Qr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(r,n){var i;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Er(r,{},e(s)(e(u).mark((function t(){var i,a,o,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Re({grant_type:"refresh_token",refresh_token:n}).slice(1),a=r.config,o=a.tokenApiHost,s=a.apiKey,c=Cr(r,o,"/v1/token","key=".concat(s)),e.next=5,r._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",kr.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zr=function(){"use strict";function t(){e(I)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(x)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){sr(e.idToken,"internal-error"),sr(void 0!==e.idToken,"internal-error"),sr(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,sr(r=Vr(t),"internal-error"),sr(void 0!==r.exp,"internal-error"),sr(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(s)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(sr(!n.accessToken||n.refreshToken,t,"user-token-expired"),r||!n.accessToken||n.isExpired){e.next=3;break}return e.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){e.next=7;break}return e.next=6,n.refresh(t,n.refreshToken);case 6:return e.abrupt("return",n.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,r){var n=this;return e(s)(e(u).mark((function i(){var a,o,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$r(t,r);case 2:a=e.sent,o=a.accessToken,s=a.refreshToken,c=a.expiresIn,n.updateTokensAndExpiration(o,s,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return ur("not implemented")}}],[{key:"fromJSON",value:function(e,r){var n=r.refreshToken,i=r.accessToken,a=r.expirationTime,o=new t;return n&&(sr("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(sr("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(sr("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e,t){sr("string"==typeof e||void 0===e,"internal-error",{appName:t})}var tn=function(){"use strict";function t(r){e(I)(this,t);var n=r.uid,i=r.auth,a=r.stsTokenManager,o=$t(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(S)(o.providerData):[],this.metadata=new qr(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(x)(t,[{key:"getIdToken",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Hr(r,r.stsTokenManager.getToken(r.auth,t));case 2:if(sr(i=e.sent,r.auth,"internal-error"),r.accessToken===i){e.next=9;break}return r.accessToken=i,e.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return jr.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Jr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(sr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){sr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(s)(e(u).mark((function i(){var a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(t),a=!0),!r){e.next=5;break}return e.next=5,Kr(n);case 5:return e.next=7,n.auth._persistUserIfCurrent(n);case 7:a&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(s)(e(u).mark((function r(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return n=e.sent,e.next=5,Hr(t,Nr(t.auth,{idToken:n}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,r){var n,i,a,o,s,u,c,l,f=null!==(n=r.displayName)&&void 0!==n?n:void 0,d=null!==(i=r.email)&&void 0!==i?i:void 0,h=null!==(a=r.phoneNumber)&&void 0!==a?a:void 0,p=null!==(o=r.photoURL)&&void 0!==o?o:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,y=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,b=r.uid,k=r.emailVerified,_=r.isAnonymous,w=r.providerData,I=r.stsTokenManager;sr(b&&I,e,"internal-error");var x=Zr.fromJSON(this.name,I);sr("string"==typeof b,e,"internal-error"),en(f,e.name),en(d,e.name),sr("boolean"==typeof k,e,"internal-error"),sr("boolean"==typeof _,e,"internal-error"),en(h,e.name),en(p,e.name),en(v,e.name),en(m,e.name),en(g,e.name),en(y,e.name);var T=new t({uid:b,auth:e,email:d,emailVerified:k,displayName:f,isAnonymous:_,photoURL:p,phoneNumber:h,tenantId:v,stsTokenManager:x,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(T.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(T._redirectEventId=m),T}},{key:"_fromIdTokenResponse",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(s)(e(u).mark((function a(){var o,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new Zr).updateFromServerResponse(n),s=new t({uid:n.localId,auth:r,stsTokenManager:o,isAnonymous:i}),e.next=5,Kr(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),rn=function(){"use strict";function t(){e(I)(this,t),this.type="NONE",this.storage={}}return e(x)(t,[{key:"_isAvailable",value:function(){return e(s)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,r){var n=this;return e(s)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.storage[t]=r;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete r.storage[t];case 1:case"end":return e.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.type="NONE";var nn=rn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var on=function(){"use strict";function t(r,n,i){e(I)(this,t),this.persistence=r,this.auth=n,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=an(this.userKey,o.apiKey,s),this.fullPersistenceKey=an("persistence",o.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(x)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(s)(e(u).mark((function r(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return n=e.sent,e.abrupt("return",n?tn._fromJSON(t.auth,n):null);case 4:case"end":return e.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.getCurrentUser();case 4:return i=e.sent,e.next=7,r.removeCurrentUser();case 7:if(r.persistence=t,!i){e.next=10;break}return e.abrupt("return",r.setCurrentUser(i));case 10:case"end":return e.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(s)(e(u).mark((function a(){var o,c,l,f,d,h,p,v,m,g,y,b,k;return e(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.length){a.next=2;break}return a.abrupt("return",new t(fr(nn),r,i));case 2:return a.next=4,Promise.all(n.map(function(){var t=e(s)(e(u).mark((function t(r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:o=a.sent.filter((function(e){return e})),c=o[0]||fr(nn),l=an(i,r.config.apiKey,r.name),f=null,d=!0,h=!1,p=void 0,a.prev=9,v=n[Symbol.iterator]();case 11:if(d=(m=v.next()).done){a.next=29;break}return g=m.value,a.prev=13,a.next=16,g._get(l);case 16:if(!(y=a.sent)){a.next=22;break}return b=tn._fromJSON(r,y),g!==c&&(f=b),c=g,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:d=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),h=!0,p=a.t1;case 35:a.prev=35,a.prev=36,d||null==v.return||v.return();case 38:if(a.prev=38,!h){a.next=41;break}throw p;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(k=o.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&k.length){a.next=46;break}return a.abrupt("return",new t(c,r,i));case 46:if(c=k[0],!f){a.next=50;break}return a.next=50,c._set(l,f.toJSON());case 50:return a.next=52,Promise.all(n.map(function(){var t=e(s)(e(u).mark((function t(r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===c){e.next=8;break}return e.prev=1,e.next=4,r._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return a.abrupt("return",new t(c,r,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(un(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(hn(t))return"Blackberry";if(pn(t))return"Webos";if(cn(t))return"Safari";if((t.includes("chrome/")||ln(t))&&!t.includes("edge/"))return"Chrome";if(dn(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function un(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve();return/firefox\//i.test(e)}function cn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ln(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve();return/crios\//i.test(e)}function fn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve();return/iemobile/i.test(e)}function dn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve();return/android/i.test(e)}function hn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve();return/blackberry/i.test(e)}function pn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve();return/webos/i.test(e)}function vn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function mn(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve();return vn(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function gn(){return((e=ve()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function yn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve();return vn(e)||dn(e)||pn(e)||hn(e)||/windows phone/i.test(e)||fn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bn(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=sn(ve());break;case"Worker":t="".concat(sn(ve()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Rt,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kn=function(){"use strict";function t(r){e(I)(this,t),this.auth=r,this.queue=[]}return e(x)(t,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i,a,o,s,c,l,f,d,h,p,v,m,g,y;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:a=[],e.prev=4,o=!0,s=!1,c=void 0,e.prev=6,l=r.queue[Symbol.iterator]();case 8:if(o=(f=l.next()).done){e.next=16;break}return d=f.value,e.next=12,d(t);case 12:d.onAbort&&a.push(d.onAbort);case 13:o=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),s=!0,c=e.t0;case 22:e.prev=22,e.prev=23,o||null==l.return||l.return();case 25:if(e.prev=25,!s){e.next=28;break}throw c;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),a.reverse(),h=!0,p=!1,v=void 0,e.prev=36,m=a[Symbol.iterator]();!(h=(g=m.next()).done);h=!0){y=g.value;try{y()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),p=!0,v=e.t2;case 44:e.prev=44,e.prev=45,h||null==m.return||m.return();case 47:if(e.prev=47,!p){e.next=50;break}throw v;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw r.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),n,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),_n=function(){"use strict";function t(r,n,i){e(I)(this,t),this.app=r,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new In(this),this.idTokenSubscription=new In(this),this.beforeStateQueue=new kn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=er,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=i.sdkClientVersion}return e(x)(t,[{key:"_initializeWithPersistence",value:function(t,r){r&&(this._popupRedirectResolver=fr(r));var n=this;return this._initializationPromise=this.queue(e(s)(e(u).mark((function i(){var a,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,on.create(n,t);case 5:if(n.persistenceManager=e.sent,!n._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=n._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,n._popupRedirectResolver._initialize(n);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(o=n.currentUser)||void 0===o?void 0:o.uid)||null,!n._deleted){e.next=21;break}return e.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(s)(e(u).mark((function r(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(n=e.sent,t.currentUser||n){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!n||t.currentUser.uid!==n.uid){e.next=12;break}return t._currentUser._assign(n),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(n,!0);case 14:case"end":return e.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i,a,o,s,c,l,f;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,s=!1,!t||!r.config.authDomain){e.next=15;break}return e.next=9,r.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=r.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==o?void 0:o._redirectEventId,e.next=13,r.tryRedirectSignIn(t);case 13:f=e.sent,c&&c!==l||!(null==f?void 0:f.user)||(o=f.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,r.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",r.directlySetCurrentUser(null));case 33:return sr(r._popupRedirectResolver,r,"argument-error"),e.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",r.directlySetCurrentUser(o));case 38:return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,r._popupRedirectResolver._completeRedirectFn(r,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,r._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Kr(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(i=e.t0)||void 0===i?void 0:i.code)){e.next=10;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 10:return e.abrupt("return",r.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?De(t):null)&&sr(i.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),e.abrupt("return",r._updateCurrentUser(i&&i._clone(r)));case 3:case"end":return e.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(s)(e(u).mark((function i(){return e(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&sr(n.tenantId===t.tenantId,n,"tenant-id-mismatch"),r){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",n.queue(e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.directlySetCurrentUser(t);case 2:n.notifyAuthListeners();case 3:case"end":return e.stop()}}),r)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),r)})))()}},{key:"setPersistence",value:function(t){var r=this;return this.queue(e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.assertedPersistence.setPersistence(fr(t));case 2:case"end":return e.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new Ie("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,r){var n=this;return e(s)(e(u).mark((function i(){var a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.redirectPersistenceManager){e.next=9;break}return sr(i=t&&fr(t)||r._popupRedirectResolver,r,"argument-error"),e.next=5,on.create(r,[fr(i._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=e.sent,e.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=e.sent;case 9:return e.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return e.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i,a;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(e(s)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=r._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(a=r.redirectUser)||void 0===a?void 0:a._redirectEventId)!==t){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(t){var r=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return sr(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var r=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.currentUser&&r.currentUser!==t&&r._currentUser._stopProactiveRefresh(),t&&r.isProactiveRefreshEnabled&&t._startProactiveRefresh(),r.currentUser=t,!t){e.next=8;break}return e.next=6,r.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,r.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return sr(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bn(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(s)(e(u).mark((function r(){var n,i,a;return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e(E)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),r.next=5,null===(n=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(a=r.sent)&&(i["X-Firebase-Client"]=a),r.abrupt("return",i);case 8:case"end":return r.stop()}}),r)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e){return De(e)}var In=function(){"use strict";function t(r){var n,i,a=this;e(I)(this,t),this.auth=r,this.observer=null,this.addObserver=(i=new Pe((function(e){return a.observer=e}),n)).subscribe.bind(i)}return e(x)(t,[{key:"next",get:function(){return sr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function xn(t,r,n){var i=wn(t);sr(i._canInitEmulator,i,"emulator-config-failed"),sr(/^https?:\/\//.test(r),i,"invalid-emulator-scheme");var a=!!(null==n?void 0:n.disableWarnings),o=Tn(r),s=function(t){var r=Tn(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(r.length));if(!n)return{host:"",port:null};var i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:En(i.substr(o.length+1))}}var s=e(O)(i.split(":"),2);return{host:s[0],port:En(s[1])}}(r),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Tn(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function En(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Sn=function(){"use strict";function t(r,n){e(I)(this,t),this.providerId=r,this.signInMethod=n}return e(x)(t,[{key:"toJSON",value:function(){return ur("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return ur("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return ur("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return ur("not implemented")}}]),t}();function On(e,t){return Rn.apply(this,arguments)}function Rn(){return(Rn=e(s)(e(u).mark((function t(r,n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xr(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Cn(e,t){return An.apply(this,arguments)}function An(){return(An=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(r,n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:signInWithPassword",Ir(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Pn(e,t){return Nn.apply(this,arguments)}function Nn(){return(Nn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(r,n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:signInWithEmailLink",Ir(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Dn(e,t){return Ln.apply(this,arguments)}function Ln(){return(Ln=e(s)(e(u).mark((function t(r,n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:signInWithEmailLink",Ir(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mn=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(I)(this,n),(o=r.call(this,"password",a))._email=t,o._password=i,o._tenantId=s,o}return e(x)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var r=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Cn(t,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Pn(t,{email:r._email,oobCode:r._password}));case 5:nr(t,"internal-error");case 6:case"end":return e.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(t,r){var n=this;return e(s)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",On(t,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",Dn(t,{idToken:r,email:n._email,oobCode:n._password}));case 5:nr(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(Sn);function Un(e,t){return jn.apply(this,arguments)}function jn(){return(jn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(r,n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:signInWithIdp",Ir(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fn=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(){var t;return e(I)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(x)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Un(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,Un(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Un(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Re(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nr("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=$t(t,["providerId","signInMethod"]);if(!r||!i)return null;var o=new n(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),n}(Sn);function Vn(e,t){return Hn.apply(this,arguments)}function Hn(){return(Hn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(r,n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xr(r,"POST","/v1/accounts:sendVerificationCode",Ir(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Bn(){return(Bn=e(s)(e(u).mark((function t(r,n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:signInWithPhoneNumber",Ir(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Wn(){return(Wn=e(s)(e(u).mark((function t(r,n){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Or(r,"POST","/v1/accounts:signInWithPhoneNumber",Ir(r,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Pr(r,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var zn=e(E)({},"USER_NOT_FOUND","user-not-found");function qn(){return(qn=e(s)(e(u).mark((function t(r,n){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",Or(r,"POST","/v1/accounts:signInWithPhoneNumber",Ir(r,i),zn));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kn=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(t){var i;return e(I)(this,n),(i=r.call(this,"phone","phone")).params=t,i}return e(x)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Bn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Wn.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return qn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(Sn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn=function(){"use strict";function t(r){var n,i,a,o,s,u;e(I)(this,t);var c=Ce(Ae(r)),l=null!==(n=c.apiKey)&&void 0!==n?n:null,f=null!==(i=c.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);sr(l&&f&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=f,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(x)(t,null,[{key:"parseLink",value:function(e){var r=function(e){var t=Ce(Ae(e)).link,r=t?Ce(Ae(t)).deep_link_id:null,n=Ce(Ae(e)).deep_link_id;return(n?Ce(Ae(n)).link:null)||n||r||t||e}(e);try{return new t(r)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jn=function(){"use strict";function t(){e(I)(this,t),this.providerId=t.PROVIDER_ID}return e(x)(t,null,[{key:"credential",value:function(e,t){return Mn._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=Gn.parseLink(t);return sr(r,"argument-error"),Mn._fromEmailAndCode(e,r.code,r.tenantId)}}]),t}();Jn.PROVIDER_ID="password",Jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xn=function(){"use strict";function t(r){e(I)(this,t),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return e(x)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Yn=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(){var t;return e(I)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(x)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(S)(this.scopes)}}]),n}(Xn),$n=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(){return e(I)(this,n),r.call(this,"facebook.com")}return e(x)(n,null,[{key:"credential",value:function(e){return Fn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Yn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n.FACEBOOK_SIGN_IN_METHOD="facebook.com",$n.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Qn=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(){var t;return e(I)(this,n),(t=r.call(this,"google.com")).addScope("profile"),t}return e(x)(n,null,[{key:"credential",value:function(e,t){return Fn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(Yn);Qn.GOOGLE_SIGN_IN_METHOD="google.com",Qn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zn=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(){return e(I)(this,n),r.call(this,"github.com")}return e(x)(n,null,[{key:"credential",value:function(e){return Fn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Yn);Zn.GITHUB_SIGN_IN_METHOD="github.com",Zn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ei=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(){return e(I)(this,n),r.call(this,"twitter.com")}return e(x)(n,null,[{key:"credential",value:function(e,t){return Fn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(Yn);function ti(e,t){return ri.apply(this,arguments)}function ri(){return(ri=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(r,n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:signUp",Ir(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ei.TWITTER_SIGN_IN_METHOD="twitter.com",ei.PROVIDER_ID="twitter.com";var ni=function(){"use strict";function t(r){e(I)(this,t),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return e(x)(t,null,[{key:"_fromIdTokenResponse",value:function(r,n,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(s)(e(u).mark((function o(){var s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,tn._fromIdTokenResponse(r,i,a);case 2:return s=e.sent,c=ii(i),l=new t({user:s,providerId:c,_tokenResponse:i,operationType:n}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),o)})))()}},{key:"_forOperation",value:function(r,n,i){return e(s)(e(u).mark((function a(){var o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._updateTokensIfNecessary(i,!0);case 2:return o=ii(i),e.abrupt("return",new t({user:r,providerId:o,_tokenResponse:i,operationType:n}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function ii(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ai=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(t,i,a,o){var s,u;return e(I)(this,n),(s=r.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(e(D)(s),n.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return e(x)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(we);function oi(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw ai._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e,t){return ui.apply(this,arguments)}function ui(){return ui=e(s)(e(u).mark((function t(r,n){var i,a,o=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=Hr,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",ni._forOperation(r,"link",a));case 14:case"end":return e.stop()}}),t)}))),ui.apply(this,arguments)}function ci(e,t){return li.apply(this,arguments)}function li(){return li=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(r,n){var i,a,o,s,c,l,f,d=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>2&&void 0!==d[2]&&d[2],o=r.auth,s="reauthenticate",e.prev=4,e.next=7,Hr(r,oi(o,s,n,r),i);case 7:return sr((c=e.sent).idToken,o,"internal-error"),sr(l=Vr(c.idToken),o,"internal-error"),f=l.sub,sr(r.uid===f,o,"user-mismatch"),e.abrupt("return",ni._forOperation(r,s,c));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(a=e.t0)||void 0===a?void 0:a.code)&&nr(o,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),li.apply(this,arguments)}function fi(e,t){return di.apply(this,arguments)}function di(){return di=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(r,n){var i,a,o,s,c=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,oi(r,a,n);case 4:return o=e.sent,e.next=7,ni._fromIdTokenResponse(r,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,r._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),di.apply(this,arguments)}function hi(e,t){return pi.apply(this,arguments)}function pi(){return(pi=e(s)(e(u).mark((function t(r,n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fi(wn(r),n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vi(e,t,r){return mi.apply(this,arguments)}function mi(){return(mi=e(s)(e(u).mark((function t(r,n,i){var a,o,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=wn(r),e.next=3,ti(a,{returnSecureToken:!0,email:n,password:i});case 3:return o=e.sent,e.next=6,ni._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function gi(e,t,r){return hi(De(e),Jn.credential(t,r))}function yi(e,t,r,n){return De(e).onIdTokenChanged(t,r,n)}function bi(e,t,r){return De(e).beforeAuthStateChanged(t,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ki(e,t){return xr(e,"POST","/v2/accounts/mfaEnrollment:start",Ir(e,t))}new WeakMap;var _i="__sak",wi=function(){"use strict";function t(r,n){e(I)(this,t),this.storageRetriever=r,this.type=n}return e(x)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(_i,"1"),this.storage.removeItem(_i),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ii=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(){var t,i;return e(I)(this,n),(t=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,r){return t.onStorageEvent(e,r)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(cn(i=ve())||vn(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=yn(),t._shouldAllowMigration=!0,t}return e(x)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var a=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},o=this.storage.getItem(n);gn()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,r){var i=this,a=this;return e(s)(e(u).mark((function o(){return e(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(Gt)(e(Yt)(n.prototype),"_set",i).call(a,t,r);case 2:a.localCache[t]=JSON.stringify(r);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(t){var r=this,i=this;return e(s)(e(u).mark((function a(){var o;return e(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Gt)(e(Yt)(n.prototype),"_get",r).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var r=this,i=this;return e(s)(e(u).mark((function a(){return e(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Gt)(e(Yt)(n.prototype),"_remove",r).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),n}(wi);Ii.type="LOCAL";var xi=Ii,Ti=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(){return e(I)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(x)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(wi);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ti.type="SESSION";var Ei=Ti;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){return Promise.all(t.map((r=e(s)(e(u).mark((function t(r){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return r.apply(this,arguments)})));var r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oi=function(){"use strict";function t(r){e(I)(this,t),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(x)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i,a,o,c,l,f,d,h;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=(i=t).data,o=a.eventId,c=a.eventType,l=a.data,null==(f=r.handlersMap[c])?void 0:f.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:o,eventType:c}),d=Array.from(f).map(function(){var t=e(s)(e(u).mark((function t(r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.next=9,Si(d);case 9:h=n.sent,i.ports[0].postMessage({status:"done",eventId:o,eventType:c,response:h});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var r=this.receivers.find((function(t){return t.isListeningto(e)}));if(r)return r;var n=new t(e);return this.receivers.push(n),n}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ri(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oi.receivers=[];var Ci=function(){"use strict";function t(r){e(I)(this,t),this.target=r,this.handlers=new Set}return e(x)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(s)(e(u).mark((function a(){var o,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var u=Ri("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),n);c={messageChannel:o,onMessage:function(t){var r=t;if(r.data.eventId===u)switch(r.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(r.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(c),o.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:u,data:r},[o.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pi(){return void 0!==Ai().WorkerGlobalScope&&"function"==typeof Ai().importScripts}function Ni(){return Di.apply(this,arguments)}function Di(){return(Di=e(s)(e(u).mark((function t(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Li="firebaseLocalStorageDb",Mi="firebaseLocalStorage",Ui="fbase_key",ji=function(){"use strict";function t(r){e(I)(this,t),this.request=r}return e(x)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),t}();function Fi(e,t){return e.transaction([Mi],t?"readwrite":"readonly").objectStore(Mi)}function Vi(){var e=indexedDB.deleteDatabase(Li);return new ji(e).toPromise()}function Hi(){var t=indexedDB.open(Li,1);return new Promise((function(r,n){t.addEventListener("error",(function(){n(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Mi,{keyPath:Ui})}catch(e){n(e)}})),t.addEventListener("success",e(s)(e(u).mark((function n(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Mi)){e.next=12;break}return i.close(),e.next=5,Vi();case 5:return e.t0=r,e.next=8,Hi();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:r(i);case 13:case"end":return e.stop()}}),n)}))))}))}function Bi(e,t,r){return Wi.apply(this,arguments)}function Wi(){return(Wi=e(s)(e(u).mark((function t(r,n,i){var a,o;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Fi(r,!0).put((a={},e(E)(a,Ui,n),e(E)(a,"value",i),a)),t.abrupt("return",new ji(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function zi(e,t){return qi.apply(this,arguments)}function qi(){return(qi=e(s)(e(u).mark((function t(r,n){var i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Fi(r,!1).get(n),e.next=3,new ji(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ki(e,t){var r=Fi(e,!0).delete(t);return new ji(r).toPromise()}var Gi=function(){"use strict";function t(){e(I)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(x)(t,[{key:"_openDb",value:function(){var t=this;return e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Hi();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),r)})))()}},{key:"_withRetries",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,r._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pi()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(s)(e(u).mark((function r(){return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.receiver=Oi._getInstance(Pi()?self:null),t.receiver._subscribe("keyChanged",function(){var r=e(s)(e(u).mark((function r(n,i){var a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(s)(e(u).mark((function t(r,n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var t=this;return e(s)(e(u).mark((function r(){var n,i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Ni();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Ci(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(n=a[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(t){var r=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,r.sender._send("keyChanged",{key:t},r.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(s)(e(u).mark((function t(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Hi();case 5:return r=e.sent,e.next=8,Bi(r,_i,"1");case 8:return e.next=10,Ki(r,_i);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var r=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,r.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,r){var n=this;return e(s)(e(u).mark((function i(){return e(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(e(s)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Bi(e,t,r)}));case 2:return n.localCache[t]=r,e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return zi(e,t)}));case 2:return i=e.sent,r.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Ki(e,t)}));case 2:return delete r.localCache[t],e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var t=this;return e(s)(e(u).mark((function r(){var n,i,a,o,s,c,l,f,d,h,p,v,m,g,y,b,k;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Fi(e,!1).getAll();return new ji(t).toPromise()}));case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,c=void 0,e.prev=10,l=n[Symbol.iterator]();!(o=(f=l.next()).done);o=!0)d=f.value,h=d.fbase_key,p=d.value,a.add(h),JSON.stringify(t.localCache[h])!==JSON.stringify(p)&&(t.notifyListeners(h,p),i.push(h));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,c=e.t0;case 18:e.prev=18,e.prev=19,o||null==l.return||l.return();case 21:if(e.prev=21,!s){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,g=void 0,e.prev=27,y=Object.keys(t.localCache)[Symbol.iterator]();!(v=(b=y.next()).done);v=!0)k=b.value,t.localCache[k]&&!a.has(k)&&(t.notifyListeners(k,null),i.push(k));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,g=e.t1;case 35:e.prev=35,e.prev=36,v||null==y.return||y.return();case 38:if(e.prev=38,!m){e.next=41;break}throw g;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Gi.type="LOCAL";var Ji=Gi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e,t){return xr(e,"POST","/v2/accounts/mfaSignIn:start",Ir(e,t))}function Yi(e){return new Promise((function(t,r){var n,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=ir("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(a)}))}function $i(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$i("rcb"),new gr(3e4,6e4);var Qi="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e,t,r){return ea.apply(this,arguments)}function ea(){return(ea=e(s)(e(u).mark((function t(r,n,i){var a,o,s,c,l,f,d,h;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,sr("string"==typeof o,r,"argument-error"),sr(i.type===Qi,r,"argument-error"),!("session"in(s="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(c=s.session,!("phoneNumber"in s)){e.next=19;break}return sr("enroll"===c.type,r,"internal-error"),e.next=15,ki(r,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return sr("signin"===c.type,r,"internal-error"),sr(f=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,Xi(r,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:o}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Vn(r,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return h=e.sent.sessionInfo,e.abrupt("return",h);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ta=function(){"use strict";function t(r){e(I)(this,t),this.providerId=t.PROVIDER_ID,this.auth=wn(r)}return e(x)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Zi(this.auth,e,De(t))}}],[{key:"credential",value:function(e,t){return Kn._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var r=e;return t.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?Kn._fromTokenResponse(r,n):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ra(e,t){return t?fr(t):(sr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ta.PROVIDER_ID="phone",ta.PHONE_SIGN_IN_METHOD="phone";var na=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(t){var i;return e(I)(this,n),(i=r.call(this,"custom","custom")).params=t,i}return e(x)(n,[{key:"_getIdTokenResponse",value:function(e){return Un(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Un(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Un(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(Sn);function ia(e){return fi(e.auth,new na(e),e.bypassAuthState)}function aa(e){var t=e.auth,r=e.user;return sr(r,t,"internal-error"),ci(r,new na(e),e.bypassAuthState)}function oa(e){return sa.apply(this,arguments)}function sa(){return(sa=e(s)(e(u).mark((function t(r){var n,i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,sr(i=r.user,n,"internal-error"),e.abrupt("return",si(i,new na(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ua=function(){"use strict";function t(r,n,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(I)(this,t),this.auth=r,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return e(x)(t,[{key:"execute",value:function(){var t,r=this;return new Promise((t=e(s)(e(u).mark((function t(n,i){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,r.resolver._initialize(r.auth);case 4:return r.eventManager=e.sent,e.next=7,r.onExecution();case 7:r.eventManager.registerConsumer(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,r){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i,a,o,s,c,l,f;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,s=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return r.reject(c),e.abrupt("return");case 4:return f={auth:r.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:r.user,bypassAuthState:r.bypassAuthState},e.prev=5,e.t0=r,e.next=9,r.getIdpTask(l)(f);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),r.reject(e.t2);case 16:case"end":return e.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ia;case"linkViaPopup":case"linkViaRedirect":return oa;case"reauthViaPopup":case"reauthViaRedirect":return aa;default:nr(this.auth,"internal-error")}}},{key:"resolve",value:function(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),ca=new gr(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var la=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(t,i,a,o,s){var u;return e(I)(this,n),(u=r.call(this,t,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=e(D)(u),u}return e(x)(n,[{key:"executeNotNull",value:function(){var t=this;return e(s)(e(u).mark((function r(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return sr(n=e.sent,t.auth,"internal-error"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){var t=this;return e(s)(e(u).mark((function r(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return cr(1===t.filter.length,"Popup operations only handle one event"),n=Ri(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],n);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=n,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(ir(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(ir(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(ir(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,ca.get())};t()}}]),n}(ua);la.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fa=new Map,da=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(I)(this,n),(a=r.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(x)(n,[{key:"execute",value:function(){var t=this,r=this;return e(s)(e(u).mark((function i(){var a,o;return e(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=fa.get(r.auth._key())){i.next=21;break}return i.prev=2,i.next=5,ha(r.resolver,r.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(Gt)(e(Yt)(n.prototype),"execute",t).call(r);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:fa.set(r.auth._key(),a);case 21:return r.bypassAuthState||fa.set(r.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var r=this,i=this,a=function(){return e(Gt)(e(Yt)(n.prototype),"onAuthEvent",r)};return e(s)(e(u).mark((function r(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",a().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(n=e.sent)){e.next=16;break}return i.user=n,e.abrupt("return",a().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){return e(s)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),n}(ua);function ha(e,t){return pa.apply(this,arguments)}function pa(){return(pa=e(s)(e(u).mark((function t(r,n){var i,a,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ga(n),a=ma(r),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function va(e,t){fa.set(e._key(),t)}function ma(e){return fr(e._redirectPersistence)}function ga(e){return an("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(e,t){return ba.apply(this,arguments)}function ba(){return ba=e(s)(e(u).mark((function t(r,n){var i,a,o,s,c,l=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=wn(r),o=ra(a,n),s=new da(a,o,i),e.next=6,s.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,n);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),ba.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ka=function(){"use strict";function t(r){e(I)(this,t),this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(x)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wa(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!wa(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(ir(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(_a(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(_a(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function _a(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function wa(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function Ia(e){return xa.apply(this,arguments)}function xa(){return xa=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(r){var n,i=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",xr(r,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),t)}))),xa.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ta=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ea=/^https?/;function Sa(){return(Sa=e(s)(e(u).mark((function t(r){var n,i,a,o,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Ia(r);case 4:n=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=n[Symbol.iterator]();case 8:if(i=(c=s.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!Oa(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:nr(r,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Oa(e){var t=hr(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===i}if(!Ea.test(n))return!1;if(Ta.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ra=new gr(3e4,6e4);function Ca(){var t=Ai().___jsl,r=!0,n=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(S)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}var Aa=null;function Pa(e){return Aa=Aa||function(e){return new Promise((function(t,r){var n,i,a;function o(){Ca(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Ca(),r(ir(e,"network-request-failed"))},timeout:Ra.get()})}if(null===(i=null===(n=Ai().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Ai().gapi)||void 0===a?void 0:a.load)){var s=$i("iframefcb");return Ai()[s]=function(){gapi.load?o():r(ir(e,"network-request-failed"))},Yi("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}o()}})).catch((function(e){throw Aa=null,e}))}(e),Aa}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Na=new gr(5e3,15e3),Da={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},La=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ma(e){var t=e.config;sr(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?yr(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:Rt},i=La.get(e.config.apiHost);i&&(n.eid=i);var a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),"".concat(r,"?").concat(Re(n).slice(1))}function Ua(e){return ja.apply(this,arguments)}function ja(){return ja=e(s)(e(u).mark((function t(r){var n,i;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Pa(r);case 2:return n=t.sent,sr(i=Ai().gapi,r,"internal-error"),t.abrupt("return",n.open({where:document.body,url:Ma(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Da,dontclear:!0},(function(t){return new Promise((n=e(s)(e(u).mark((function n(i,a){var o,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){Ai().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=ir(r,"network-request-failed"),s=Ai().setTimeout((function(){a(o)}),Na.get()),t.ping(c).then(c,(function(){a(o)}));case 7:case"end":return e.stop()}}),n)}))),function(e,t){return n.apply(this,arguments)}));var n})));case 6:case"end":return t.stop()}}),t)}))),ja.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Va="_blank",Ha="http://localhost",Ba=function(){"use strict";function t(r){e(I)(this,t),this.window=r,this.associatedEvent=null}return e(x)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Wa(t,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Fa),{width:i.toString(),height:a.toString(),top:o,left:s}),l=ve().toLowerCase();n&&(u=ln(l)?Va:n),un(l)&&(r=r||Ha,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,r){var n=e(O)(r,2),i=n[0],a=n[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(mn(l)&&"_self"!==u)return za(r||"",u),new Ba(null);var d=window.open(r||"",u,f);sr(d,t,"popup-blocked");try{d.focus()}catch(e){}return new Ba(d)}function za(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qa="__/auth/handler",Ka="emulator/auth/handler";function Ga(t,r,n,i,a,o){sr(t.config.authDomain,t,"auth-domain-config-required"),sr(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Rt,eventId:a};if(r instanceof Xn){r.setDefaultLanguage(t.languageCode),s.providerId=r.providerId||"",Ee(r.getCustomParameters())||(s.customParameters=JSON.stringify(r.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,d=Object.entries(o||{})[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var h=e(O)(f.value,2),p=h[0],v=h[1];s[p]=v}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(r instanceof Yn){var m=r.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}t.tenantId&&(s.tid=t.tenantId);var g,y,b=s,k=!0,_=!1,w=void 0;try{for(var I,x=Object.keys(b)[Symbol.iterator]();!(k=(I=x.next()).done);k=!0){var T=I.value;void 0===b[T]&&delete b[T]}}catch(e){_=!0,w=e}finally{try{k||null==x.return||x.return()}finally{if(_)throw w}}return"".concat((g=t,y=g.config,y.emulator?yr(y,Ka):"https://".concat(y.authDomain,"/").concat(qa)),"?").concat(Re(b).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ja="webStorageSupport",Xa=function(){"use strict";function t(){e(I)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ei,this._completeRedirectFn=ya,this._overrideRedirectResult=va}return e(x)(t,[{key:"_openPopup",value:function(t,r,n,i){var a=this;return e(s)(e(u).mark((function o(){var s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return cr(null===(s=a.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),c=Ga(t,r,n,hr(),i),e.abrupt("return",Wa(t,c,Ri()));case 4:case"end":return e.stop()}}),o)})))()}},{key:"_openRedirect",value:function(t,r,n,i){var a=this;return e(s)(e(u).mark((function o(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._originValidation(t);case 2:return o=Ga(t,r,n,hr(),i),Ai().location.href=o,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,a=n.promise;return i?Promise.resolve(i):(cr(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch((function(){delete t.eventManagers[r]})),o}},{key:"initAndGetManager",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ua(t);case 2:return i=e.sent,a=new ka(t),i.register("authEvent",(function(e){return sr(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),r.eventManagers[t._key()]={manager:a},r.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Ja,{type:Ja},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),nr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Sa.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return yn()||cn()||vn()}}]),t}(),Ya=Xa,$a=function(t){"use strict";e(L)(n,t);var r=e(q)(n);function n(t){var i;return e(I)(this,n),(i=r.call(this,"phone")).credential=t,i}return e(x)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return xr(e,"POST","/v2/accounts/mfaEnrollment:finalize",Ir(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return xr(e,"POST","/v2/accounts/mfaSignIn:finalize",Ir(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function t(r){e(I)(this,t),this.factorId=r}return e(x)(t,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ur("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(I)(this,t)}return e(x)(t,null,[{key:"assertion",value:function(e){return $a._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Qa="@firebase/auth",Za="0.20.11",eo=function(){"use strict";function t(r){e(I)(this,t),this.auth=r,this.internalListeners=new Map}return e(x)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var r=this;return e(s)(e(u).mark((function n(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.assertAuthConfigured(),e.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,r.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){sr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var to,ro=ke("authIdTokenMaxAge")||300,no=null,io=function(t){return r=e(s)(e(u).mark((function r(n){var i,a,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n,!e.t0){e.next=5;break}return e.next=4,n.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>ro)){e.next=9;break}return e.abrupt("return");case 9:if(o=null==i?void 0:i.token,no!==o){e.next=12;break}return e.abrupt("return");case 12:return no=o,e.next=15,fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return e.stop()}}),r)}))),function(e){return r.apply(this,arguments)};var r};to="Browser",xt(new Le("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=n.options,o=a.apiKey,s=a.authDomain;return function(e,t){sr(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),sr(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:o,authDomain:s,clientPlatform:to,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bn(to)},i=new _n(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(fr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),xt(new Le("auth-internal",(function(e){var t=wn(e.getProvider("auth").getImmediate());return new eo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(Qa,Za,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(to)),Pt(Qa,Za,"esm2017");var ao=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At(),t=Tt(e,"auth");if(t.isInitialized())return t.getImmediate();var r=dr(e,{popupRedirectResolver:Ya,persistence:[Ji,xi,Ei]}),n=ke("authTokenSyncURL");if(n){var i=io(n);bi(r,i,(function(){return i(r.currentUser)})),yi(r,(function(e){return i(e)}))}var a=ye("auth");return a&&xn(r,"http://".concat(a)),r}(Ct({apiKey:"AIzaSyD3jSQv2WOE_n61TrtkJRoZUBs4LT-bYkA",authDomain:"teamproject-filmoteka.firebaseapp.com",projectId:"teamproject-filmoteka",storageBucket:"teamproject-filmoteka.appspot.com",messagingSenderId:"1061812312194",appId:"1:1061812312194:web:74e64ebe4fba458f60bc9b",databaseURL:"https://teamproject-filmoteka-default-rtdb.europe-west1.firebasedatabase.app/"}));a=i("51gX1");function oo(){a.refs.btnNotAuth.classList.toggle("is-hidden");for(var e=0;e<a.refs.btnAuth.length;e++)a.refs.btnAuth[e].classList.toggle("is-hidden")}(a=i("51gX1")).refs.formAuth.addEventListener("submit",(function(e){e.preventDefault();var t={email:"",password:""},r=a.refs.labelEmail,n=a.refs.lablePassword;if(""===r.value||""===n.value)return console.log("Please fill in all the fields!");t.email=r.value,t.password=n.value;var i=t.email,o=t.password;"Register"!==a.refs.btnSubmit.textContent?gi(ao,i,o).then((function(e){e.user;console.log("Вход выполнен")})).catch((function(e){e.code;var t=e.message;console.log(e),console.log(t),console.log("Вход не выполнен")})):vi(ao,i,o).then((function(e){e.user;console.log("Регистрация успешна")})).catch((function(e){var t=e.code,r=e.message;console.log(t),console.log(r),console.log("Ошибка регистрации")}));e.currentTarget.reset()})),(a=i("51gX1")).refs.logOut.addEventListener("click",(function(e){e.preventDefault(),localStorage.clear(),(t=ao,De(t).signOut()).then((function(){oo(),console.log("Выход из аккаунта выполнен!!!")})).catch((function(e){console.log("Выход из аккаунта не выполнен!!!"),console.log(e)}));var t}));var so=i("6r6gH");(0,o.trendsControls)(),c.refs.filmsGalleryEl.addEventListener("click",k),a.refs.footerBtn.addEventListener("click",b),(0,o.scrollToTop)(),(0,so.onListenerSearchMovie)()}();
//# sourceMappingURL=index.32715428.js.map
