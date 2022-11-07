import { FetchFilmId } from '../markup';
import { getGenreName } from '../customFunction/getGenreName';

// створює розмітку картки фільма
export function markupBtnModalFilm(film) {
  const genres = film.genres.map(film => film.name).join(', ');

  return `<img class="modal-card__img"
     src="https://www.themoviedb.org/t/p/w500/${film.poster_path}"
     alt=""
     id=""
    />
    <div class="modal-card__info">
     <h2 class="modal-card__title">${film.title.toUpperCase()}</h2>
     <div class="table">
     <ul class="table__parametr">
       <li class="table__parametr-list list">Vote/Votes </li>
       <li class="table__parametr-list list">Popularity </li>
       <li class="table__parametr-list list">Original Title </li>
       <li class="table__parametr-list list">Genre</li>
     </ul>

         <ul class="table__value">
       <li class="table__value-list list"><span class="table__span-value">${
         film.vote_average
       }</span class="table__value-slash">/<span>${film.vote_count}</span></li>
       <li class="table__value-list list">${film.popularity}</li>
       <li class="table__value-list table-text list">${film.original_title.toUpperCase()}</li>
       <li class="table__value-list table-text list">${genres}</li>
     </ul>
     </div>
     <p>
       <h3 class="about">ABOUT</h3>
       <div class="about-text">${film.overview}</div>
     </p>
     <div class="button-add">
     <button class="button-add__watched button">add to Watched</button>
     <button class="button-add__queue button">add to queue</button>
      </div>
     </div>`;
}
