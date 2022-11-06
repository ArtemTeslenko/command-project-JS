import { createLibraryMarkup } from '../markup/libraryMrkup';

const libraryEl = document.querySelector('.library-gallery');
export function createLibraryList(filmItems) {
  const libraryMarkup = createLibraryMarkup(filmItems);

  libraryEl.innerHTML = libraryMarkup;
}
