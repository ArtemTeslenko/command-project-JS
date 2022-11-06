import { FetchFilmId } from '../markup';

export function markupBtnModalFilm(film) {
  return `<img class="modal-card__img"
     src="https://www.themoviedb.org/t/p/w500/${film.poster_path}"
     alt=""
     id=""
    />
    <div class="modal-card__info">
     <h2>${film.title}</h2>
     <ul>
       <li class="list">Vote/Votes <div><span>${film.vote_average}</span>/<span>${film.vote_count}</span></div></li>
       <li class="list">Popularity <span>${film.popularity}</span></li>
       <li class="list">Original Title <span>${film.original_title}</span></li>
     </ul>
     <p>
       <h3>About</h3>
       <div>${film.overview}</div>
     </p>
     <button class="button">add to Watched</button>
     <button class="button">add to queue</button>
      </div>`;
}
