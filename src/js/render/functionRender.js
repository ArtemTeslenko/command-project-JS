import getGenreName from '../common.js';

export function createFilmMarkup(arrFilms) {
  return arrFilms
    .map(({ original_title, release_date, genre_ids, poster_path }) => {
      console.log(original_title, release_date, genre_ids, poster_path);
      let genres = getGenreName(genre_ids);
      const date = new Date(release_date);
      const yearRelease = date.getFullYear();
      return `<div class="film-card">
      <div class="film-card__img-box">
        <a class="film-card__link link" href="">
        <img class="film-card__img"
          src="https://www.themoviedb.org/t/p/w500/${poster_path}"
          alt=""
        />
        </a></div>
      
        <div class="film-card__info">
          <h2 class="film-card__name film-card__item">
            ${original_title}
          </h2>
          <p class="film-card__data film-card__item">
            ${genres} | ${yearRelease}
          </p>
        </div>
      
    </div>`;
    })
    .join('');
}
// function getGenreName(genre_ids) {
//   console.log('genre_ids', genre_ids);
//   let genreName = [];
//   genre_ids.forEach(genre_id => {
//     console.log('ku', genreIdArr);
//     genreName.push(genreIdArr.find(genre => genre.id === genre_id).name);
//   });
//   return genreName;
// }
