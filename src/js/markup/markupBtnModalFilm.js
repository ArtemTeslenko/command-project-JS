import { FetchFilmId } from '../markup';

export function markupBtnModalFilm(film) {
  console.log(film.genres);
  // film.genres.map(film.genre);
  // let genres = getGenreName(film.genre_ids);
  const genres = film.genres.join(', ');
  console.log(genres);

  return `<img class="modal-card__img"
     src="https://www.themoviedb.org/t/p/w500/${film.poster_path}"
     alt=""
     id=""
    />
    <div class="modal-card__info">
     <h2 class="modal-card__title">${film.title}</h2>
     <div class="table">
     <ul class="table__parametr">
       <li class="list">Vote/Votes </li>
       <li class="list">Popularity </li>
       <li class="list">Original Title </li>
       <li class="list">Genre</li>
       
     </ul>
         <ul class="table__value">
       <li class="list"><span class="table__span-value">${film.vote_average}</span>/<span>${film.vote_count}</span></li>
       <li class="list">${film.popularity}</li>
       <li class="list">${film.original_title}</li>
       <li class="list"></li>
     </ul>
     </div>
     <p>
       <h3>About</h3>
       <div>${film.overview}</div>
     </p>
     <div class="button-add">
     <button class="button-add__watched button">add to Watched</button>
     <button class="button-add__queue button">add to queue</button>
      </div>
     </div>`;
}
