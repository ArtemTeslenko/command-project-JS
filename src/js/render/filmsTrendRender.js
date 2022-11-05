import { createFilmMarkup } from '../markup/trendfilmsMarkup';
const galleryEl = document.querySelector('.films-gallery');
export function filmsTrendRender(data) {
  const imgMarkUp = createFilmMarkup(data.results);
  galleryEl.insertAdjacentHTML('beforeend', imgMarkUp);
}
