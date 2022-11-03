const e=document.querySelector("main");fetch("https://api.themoviedb.org/3/trending/all/day?api_key=45074c10b8f2ea3914a60876b2d17a1a&page=1").then((e=>e.json())).then((t=>function(t){return t.results.map((t=>e.insertAdjacentHTML("beforeend",`<img src="https://image.tmdb.org/t/p/w500/${t.poster_path}"/>`)))}(t)));
//# sourceMappingURL=index.445aa814.js.map
