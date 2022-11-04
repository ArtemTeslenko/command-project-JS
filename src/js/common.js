// import { fetchTrending } from './requests';
import { createFilmMarkup } from './render';
import { cleanRender } from './customFunction/functionCleanRender';
import { fetchFilmsTrends } from './requests';
import { fetchGenreId } from './requests';

export let genreIdArr = [];
let page = 1;
let totalPage;
import { onClick } from './modal';
export function renderAll() {
  // fetchTrending();
  onClick();
}
const refs = {
  formEl: document.querySelector('.search-form'),
  galleryEl: document.querySelector('.films-gallery'),
  paginationEl: document.querySelector('.pagination'),
  paginationWrapEl: document.querySelector('.pagination__wrap'),
  decrementBtnEl: document.querySelector(`button[data-action="decrement"]`),
  incrementBtnEl: document.querySelector(`button[data-action="increment"]`),
};

fetchGenreId()
  .then(genreId => {
    genreIdArr = genreId.genres;
    console.log('genreIdArr', genreIdArr);
  })
  .catch(error => console.log(error));

fetchFilmsTrends(page).then(response => {
  console.log('response', response);
  const imgMarkUp = createFilmMarkup(response.results);
  refs.galleryEl.insertAdjacentHTML('beforeend', imgMarkUp);
  console.log(response);
  console.log(response.results);
});

// export default function getGenreName(genre_ids) {
//   let genreName = [];
//   genre_ids.forEach(genre_id => {
//     console.log('ku', genreIdArr);
//     genreName.push(genreIdArr.find(genre => genre.id === genre_id).name);
//   });
//   return genreName;
// }
