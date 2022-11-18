import { getGenreName } from '../customFunction';

export function createFilmMarkup(arrFilms) {
  return arrFilms
    .map(({ original_title, release_date, genre_ids, poster_path, id }) => {
      let genres = getGenreName(genre_ids);
      //genres.length === 0
      if (!genres.length) {
        genres = 'No genres';
      } else {
        if (genres.length > 2) {
          genres = genres.slice(0, 2);
          genres.push('Other');
        }
        genres = genres.join(', ');
      }
      let yearRelease;
      if (!release_date) {
        yearRelease = 'No date';
      } else {
        const date = new Date(release_date);
        yearRelease = date.getFullYear();
      }
      if (!release_date) {
        yearRelease = 'No date';
      } else {
        const date = new Date(release_date);
        yearRelease = date.getFullYear();
      }

      let imgSrc = 'https://www.themoviedb.org/t/p/w500' + poster_path;
      if (!poster_path) {
        imgSrc = require('../../images/movie_time_22.jpg'); //('../../images/no-photo.jpg')
      }

      return `<div class="film-card">
      <a class="film-card__link link" href="" id="${id}">
      <div class="film-card__img-box"> 
        <img class="film-card__img"
          src="${imgSrc}"
          alt="${original_title}"
        />
        </div>  
        <div class="film-card__info">
          <h2 class="film-card__name film-card__item">
            ${original_title}
          </h2>
          <p class="film-card__data film-card__item">
            ${genres} | ${yearRelease}
          </p>
        </div>
      </a>
    </div>`;
    })
    .join('');
}
