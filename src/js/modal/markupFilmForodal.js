import { fetchFilmId } from './fetchFilmId';
import { markupBtnModalFilm } from '../markup';

let film;
const modalCardEl = document.querySelector('.modal-card');

export async function testFetchFilmId(id) {
  await fetchFilmId(id).then(respons => {
    console.log('respons_film 2', respons);
    console.log('respons.title', respons.title);
    console.log('film.poster_path', respons.original_title);
    film = respons;
    return film;
  });

  console.log('return', film);

  const marcup = markupBtnModalFilm(film);
  return modalCardEl.innerHTML = marcup;
  //----
  // const MarkUpFilmId = markupBtnModalFilm(respons);
  // modalEl.insertAdjacentHTML('beforeend', MarkUpFilmId);
  //---------------
}
// ----------
// export function testOnClickFetchFilmId(btn) {
//   btn.addEventListener('click', testFetchFilmId);
// }
// ------------
