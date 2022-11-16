import { createFilmMarkup } from '../markup';

export function filmsTrendRender(data, destinationEl) {
  const imgMarkUp = createFilmMarkup(data.results);
  destinationEl.insertAdjacentHTML('beforeend', imgMarkUp);
}
