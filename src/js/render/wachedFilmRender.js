import filmsCard from '../markup/templates/watchedFilmsMarkup.hbs';
import { getGenreName } from '../customFunction/getGenreName';

const libraryEl = document.querySelector('.library-gallery');
export function createGalleryList(filmItems) {
  for (i = 0; i < filmItems.length; i += 1) {
    filmItems[i].genre_ids.splice(2, 5, 'Other');
  }
  libraryEl.innerHTML = filmsCard(filmItems);
}
