import { testFetchFilmId } from '../markup';

export function markupBtnModalFilm(f) {
  return `<img class="modal-card__img"
     src="https://www.themoviedb.org/t/p/w500/${f.poster_path}"
     alt=""
     id=""
    />
    <div class="modal-card__info">
     <h2>${f.title}</h2>
     <ul>
       <li class="list">Vote/Votes <div><span>${f.vote_average}</span>/<span>${f.vote_count}</span></div></li>
       <li class="list">Popularity <span>${f.popularity}</span></li>
       <li class="list">Original Title <span>${f.original_title}</span></li>
     </ul>
     <p>
       <h3>About</h3>
       <div>${f.overview}</div>
     </p>
     <button class="button">add to Watched</button>
     <button class="button">add to queue</button>
      </div>`;
}

// ${poster_path}

// https://www.themoviedb.org/t/p/w500//3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg

// /3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg
