import { refs } from '../reference/libraryRefs.js';
import { createLibraryMarkup } from '../markup/libraryMrkup';

export function renderLibraryList(filmItems) {
  const libraryMarkup = createLibraryMarkup(filmItems);

  refs.libraryEl.innerHTML = libraryMarkup;
}
