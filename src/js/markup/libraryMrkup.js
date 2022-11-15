export function createLibraryMarkup(arrFilms) {
  return arrFilms
    .map(film => {
      const { posterPath, genres, title, voteAverage, filmId } = film[1];
      return `<div class="film-card">
        <a class="film-card__link link" href="" id="${filmId}">
          <div class="film-card__img-box">
            <img
              class="film-card__img"
              src="https://www.themoviedb.org/t/p/w500${posterPath}"
              alt="${title}" 
              loading="lazy"
            />
          </div>
          <div class="film-card__info">
            <h2 class="film-card__name film-card__item">${title}</h2>
            <div class="film-card-wrap">
              <p class="film-card__data film-card__item">
                ${genres} 
                
              </p>
              <p class="film-card__average">${voteAverage.toFixed(1)}</p>
            </div>
          </div>
        </a>
      </div> `;
    })
    .join('');
}
