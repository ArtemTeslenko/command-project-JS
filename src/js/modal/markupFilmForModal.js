import { fetchFilmId } from '../requests';
import { markupBtnModalFilm } from '../markup';
import { addToLokalStorage } from '../controls';

let film = {};
const modalCardEl = document.querySelector('.modal-card');

export async function fetchId(id) {
  await fetchFilmId(id).then(respons => {
    film = respons;
    return film;
  });

  addToLokalStorage(film);

  const marcup = markupBtnModalFilm(film);
  return (modalCardEl.innerHTML = marcup);
}

export function cleanFilmCard() {
  return (modalCardEl.innerHTML = '');
}
