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
     <table class="table">
      <tbody>
        <tr class="table__line">
          <td class=" table__parametr">Vote/Votes</td>
          <td class="table__value"><span class="table__span-value">${
            film.vote_average
          }</span>
       <span class="table__value-slash">/</span>
       <span>${film.vote_count}</span></td>
        </tr> 
           <tr class="table__line">
          <td class="table__parametr">Popularity</td>
          <td class="table__value">${film.popularity}</td>
        </tr>
           <tr class="table__line">
          <td class="table__parametr">Original Title</td>
          <td class="table__value table-text">${film.original_title.toUpperCase()}</td>
        </tr>
           <tr class="table__line">
          <td class="table__parametr">Genre</td>
          <td class="table__value table-text">${genres}</td>
        </tr>
      </tbody>
     </table>    
     <p>
       <h3 class="about">ABOUT</h3>
       <div class="about-text">${film.overview}</div>
     </p>

     <div class="button-add">
     <button class="button-add__watched" name="watched">ADD TO WATCHED</button>
     <button class="button-add__queue" name="queue">ADD TO QUEUE</button>
      </div>
     </div>`;
}
