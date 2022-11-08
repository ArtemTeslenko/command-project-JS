import { createLibraryMarkup } from '../markup/libraryMrkup';

const libraryEl = document.querySelector('.library-gallery');
export function renderLibraryList(filmItems) {
  const libraryMarkup = createLibraryMarkup(filmItems);

  libraryEl.innerHTML = libraryMarkup;
}
