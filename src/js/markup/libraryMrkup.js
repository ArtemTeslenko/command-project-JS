export function createLibraryMarkup(arrFilms) {
  return arrFilms
    .map(
      ({ original_title, release_date, genres, poster_path, vote_average }) => {
        let genreArr = [];
        genres.forEach(genre => {
          genreArr.push(genre.name);
        });
        if (genreArr.length > 3) {
          genreArr.splice(2, 5, 'Other');
        }
        release_date = release_date.split('').slice(0, 4).join('');
        vote_average = vote_average.toFixed(1);

        return `<div class="film-card">
  <a class="film-card__link link" href="">
    <div class="film-card__img-box">
      <img
        class="film-card__img"
        src="https://www.themoviedb.org/t/p/w500${poster_path}"
        alt="${original_title}"
        loading="lazy"
      />
    </div>
    <div class="film-card__info">
      <h2 class="film-card__name film-card__item">${original_title}</h2>
      <div class="film-card-wrap">
        <p class="film-card__data film-card__item">
          ${genreArr} | ${release_date}
        </p>
        <p class="film-card__average">${vote_average}</p>
      </div>
    </div>
  </a>
</div> `;
      }
    )
    .join('');
}
