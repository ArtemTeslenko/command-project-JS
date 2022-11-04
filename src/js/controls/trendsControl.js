import { createFilmMarkup } from '../render';
import { cleanRender } from '../customFunction/functionCleanRender';
import { fetchFilmsTrends } from '../requests';
import { fetchGenreId } from '../requests';
export let genreIdArr = [];
export function trendsControls() {
  const refs = {
    // formEl: document.querySelector('.search-form'),
    ////galleryEl: document.querySelector('.films-gallery'),
    // paginationEl: document.querySelector('.pagination'),
    // paginationWrapEl: document.querySelector('.pagination__wrap'),
    // decrementBtnEl: document.querySelector(`button[data-action="decrement"]`),
    // incrementBtnEl: document.querySelector(`button[data-action="increment"]`),
  };
  let page = 1;

  fetchGenreId()
    .then(genreId => {
      genreIdArr = genreId.genres;
    })
    .catch(error => console.log(error));

  //   fetchFilmsTrends(page).then(response => {
  //     const imgMarkUp = createFilmMarkup(response.results);
  //     refs.galleryEl.insertAdjacentHTML('beforeend', imgMarkUp);
  fetchFilmsTrends(page);
}
