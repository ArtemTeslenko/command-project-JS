import { refs } from '../reference/homeRefs';
import { refs } from '../reference/libraryRefs';
import { fetchFilmId } from '../requests';
import { markupBtnModalFilm } from '../markup';
import { addToLokalStorage } from '../controls';

let film = {};

export async function renderFilmCard(id) {
  await fetchFilmId(id).then(respons => {
    film = respons;
    return film;
  });

  addToLokalStorage(film);

  const marcup = markupBtnModalFilm(film);
  return (refs.modalCardEl.innerHTML = marcup);
}

export function cleanFilmCard() {
      return refs.modalCardEl.innerHTML = '';
}
