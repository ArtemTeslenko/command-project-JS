import { createFilmMarkup } from '../markup/trendfilmsMarkup';
//const galleryEl = document.querySelector('.films-gallery');
export function filmsTrendRender(data, destinationEl) {
  const imgMarkUp = createFilmMarkup(data.results);
  destinationEl.insertAdjacentHTML('beforeend', imgMarkUp);
}
