const e={logoEl:document.querySelector(".header-logo"),backdropEl:document.querySelector(".backdrop"),buttonCloseEl:document.querySelector(".modal__button"),bodyEl:document.querySelector("body"),mainEl:document.querySelector("main"),bodyNoScrollEl:document.querySelector("[data-nonScroll]")};function t(e){let t=[];return e.forEach((e=>{t.push(l.find((t=>t.id===e)).name)})),t.length>2&&(t=t.slice(0,2),t.push("Other")),t}function n(e){return e.map((({original_title:e,release_date:n,genre_ids:l,poster_path:o,id:a})=>{let i=t(l);i.length>2&&(i=i.slice(0,2),i.push("Other")),i=i.join(", ");return`<div class="film-card">\n      <a class="film-card__link link" href="">\n      <div class="film-card__img-box">\n        \n        <img class="film-card__img"\n          src="https://www.themoviedb.org/t/p/w500/${o}"\n          alt=""\n          id="${a}"\n        />\n        </div>\n      \n        <div class="film-card__info">\n          <h2 class="film-card__name film-card__item">\n            ${e}\n          </h2>\n          <p class="film-card__data film-card__item">\n            ${i} | ${new Date(n).getFullYear()}\n          </p>\n        </div>\n      </a>\n    </div>`})).join("")}let l=[];document.querySelector(".arrow-up");let o={};const a=document.querySelector(".modal-card");async function i(e){var t;await(t=e,fetch(`https://api.themoviedb.org/3//movie/${t}?api_key=45074c10b8f2ea3914a60876b2d17a1a`).then((e=>{if(!e.ok)throw new Error(e.status);return console.log(e),e.json()}))).then((e=>(o=e,o))),console.log("return",o);const n=`<img class="modal-card__img"\n     src="https://www.themoviedb.org/t/p/w500/${(l=o).poster_path}"\n     alt=""\n     id=""\n    />\n    <div class="modal-card__info">\n     <h2>${l.title}</h2>\n     <div class="table">\n     <ul class="table__parametr">\n       <li class="list">Vote/Votes </li>\n       <li class="list">Popularity </li>\n       <li class="list">Original Title </li>\n     </ul>\n         <ul class="table__value">\n       <li class="list"><span>${l.vote_average}</span>/<span>${l.vote_count}</span></li>\n       <li class="list">${l.popularity}</li>\n       <li class="list">${l.original_title}</li>\n     </ul>\n     </div>\n     <p>\n       <h3>About</h3>\n       <div>${l.overview}</div>\n     </p>\n     <button class="button">add to Watched</button>\n     <button class="button">add to queue</button>\n      </div>`;var l;return a.innerHTML=n}let r=0,s=0;function c(t){e.backdropEl.classList.add("is-hidden"),e.bodyNoScrollEl.classList.remove("no-scroll"),a.innerHTML=""}function d(t){t.target===t.currentTarget&&(e.backdropEl.classList.add("is-hidden"),e.bodyNoScrollEl.classList.remove("no-scroll"))}function u(t){e.backdropEl.classList.remove("is-hidden"),e.bodyEl.addEventListener("keydown",(function t(n){"Escape"===n.code&&(e.backdropEl.classList.add("is-hidden"),e.bodyEl.removeEventListener("keydown",t))})),e.bodyNoScrollEl.classList.toggle("no-scroll")}function m(e){e.preventDefault(),r=e.target,s=e.target.id,r!==e.currentTarget&&(i(s),u())}var h,p;fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=894ef72300682f1db325dae2afe3e7e2&language=en-US").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{l=e.genres})).catch((e=>console.log(e))),(h=1,p="movie/week",fetch(`https://api.themoviedb.org/3/trending/${p}?api_key=894ef72300682f1db325dae2afe3e7e2&page=${h}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>{!function(e,t){const l=n(e.results);t.insertAdjacentHTML("beforeend",l)}(e,document.querySelector(".films-gallery"))})),e.mainEl.addEventListener("click",m),e.buttonCloseEl.addEventListener("click",c),e.backdropEl.addEventListener("click",d);
//# sourceMappingURL=index.1b97200d.js.map
