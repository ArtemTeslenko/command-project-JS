// створює розмітку картки фільма
export function markupBtnModalFilm(film) {
  const genres = film.genres.map(film => film.name).join(', ');
  let imgSrc = `https://www.themoviedb.org/t/p/w500/${film.poster_path}`;
  if (!film.poster_path) {
    imgSrc = require('../../images/movie_time_22.jpg');
  }
  return `<div class="modal-card__size">
  <a class="modal-card__list" href="#" id="${film.id}">
  <img class="modal-card__img"
     src="${imgSrc}"
     alt="${film.title}"
     
    />
    </a>
    <div class="modal-card__info">
     <h2 class="modal-card__title">${film.title.toUpperCase()}</h2>
     <table class="table">
      <tbody>
        <tr class="table__line">
          <td class=" table__parametr">Vote/Votes</td>
          <td class="table__value">
       <span class="table__span-value">${film.vote_average.toFixed(1)}</span>
       <span class="table__value-slash">/</span>
       <span>${film.vote_count}</span></td>
        </tr> 
           <tr class="table__line">
          <td class="table__parametr" >Popularity</td>
          <td class="table__value">${film.popularity.toFixed(1)}</td>
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
     </div>
     </div>`;
}
