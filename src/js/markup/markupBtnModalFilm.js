import { FetchFilmId } from '../markup';

export function markupBtnModalFilm(film) {
  return `<img class="modal-card__img"
     src="https://www.themoviedb.org/t/p/w500/${film.poster_path}"
     alt=""
     id=""
    />
    <div class="modal-card__info">
     <h2>${film.title}</h2>
     <div class="table">
     <ul class="table__parametr">
       <li class="list">Vote/Votes </li>
       <li class="list">Popularity </li>
       <li class="list">Original Title </li>
     </ul>
         <ul class="table__value">
       <li class="list"><span>${film.vote_average}</span>/<span>${film.vote_count}</span></li>
       <li class="list">${film.popularity}</li>
       <li class="list">${film.original_title}</li>
     </ul>
     </div>
     <p>
       <h3>About</h3>
       <div>${film.overview}</div>
     </p>
     <button class="button">add to Watched</button>
     <button class="button">add to queue</button>
      </div>`;
}
