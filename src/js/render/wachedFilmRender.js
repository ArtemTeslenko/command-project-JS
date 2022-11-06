import filmsCard from '../markup/templates/watchedFilmsMarkup.hbs';

const libraryEl = document.querySelector('.library-gallery');
export function createGalleryList(filmItems) {
  libraryEl.innerHTML = filmsCard(filmItems);
}
