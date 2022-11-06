// import { fetchTrending } from './requests';
import { renderBtnModalFilm } from './render';
import { onClick } from './modal';
import { trendsControls } from './controls';

import { createGalleryList } from './render/wachedFilmRender';
import { watchedItems, galleryItems } from './render/library-items';

const buttonTestEl = document.querySelector('.test');
export function renderAll() {
  // fetchTrending();
  trendsControls();
  createGalleryList(watchedItems);
  onClick(buttonTestEl);
  renderBtnModalFilm();
}
