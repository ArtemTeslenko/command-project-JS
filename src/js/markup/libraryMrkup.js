export function createLibraryMarkup(arrFilms) {
  return arrFilms
    .map(
      ({
        original_title,
        release_date,
        genre_ids,
        poster_path,
        id,
        vote_average,
      }) => {
        if (genre_ids.length > 3) {
          genre_ids.splice(2, 5, 'Other');
        }
        release_date = release_date.split('').slice(0, 4).join('');
        vote_average = vote_average.toFixed(1);
        return ` <div class='film-card'>
    <div class='film-card__img-box'>
      <a class='film-card__link link' href=''>
        <img
          class='film-card__img'
          src='${poster_path}'
          alt='${original_title}'
          loading='lazy'
        /></a></div>
    <div class='film-card__info'>
      <h2 class='film-card__name film-card__item'>
        ${original_title}
      </h2>
      <div class='film-card-wrap'>
        <p class='film-card__data film-card__item'>
          ${genre_ids}
          |
          ${release_date}
        </p>
        <p class='film-card__average'>
          ${vote_average}
        </p></div>
    </div>
  </div>`;
      }
    )
    .join('');
}
