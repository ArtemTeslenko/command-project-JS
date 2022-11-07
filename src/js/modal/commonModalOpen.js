// import { testOnClickFetchFilmId } from '../modal'
import { refs } from '../../js/reference/homeRefs';
import { refs } from '../../js/reference/libraryRefs';
import { FetchFilmId } from '../modal';
import { clianFilmCard } from './markupFilmForodal';


function onClouseModal(e) {
  refs.backdropEl.classList.add('is-hidden');
  refs.bodyNoScrollEl.classList.remove('no-scroll');
  clianFilmCard();
}

function onClouseModalBackdrop(e) {
  if (e.target === e.currentTarget) {
    refs.backdropEl.classList.add('is-hidden');
    refs.bodyNoScrollEl.classList.remove('no-scroll');
  }
  return;
}
function creatKeydownEscape(e) {
  {
    if (e.code === 'Escape') {
    }
    refs.backdropEl.classList.add('is-hidden');
    refs.bodyEl.removeEventListener('keydown', creatKeydownEscape);
  }
}

// відкриває і закриває модалку 
function onOpenModal(e) {
  refs.backdropEl.classList.remove('is-hidden');
  refs.bodyEl.addEventListener('keydown', creatKeydownEscape);
  refs.bodyNoScrollEl.classList.toggle('no-scroll');
  refs.backdropEl.addEventListener('click', onClouseModalBackdrop);
  refs.buttonCloseEl.addEventListener('click', onClouseModal);
}

// перевіряє умову відкриття модалки з рендером картки фільму
async function onEventListenerClick(e) {
  e.preventDefault();
  if (e.target.closest('.film-card__link')) {
    await FetchFilmId(e.target.closest('.film-card__link').id);
    onOpenModal();
  }
}
// відкриває модалку (перевикористовувати)
export function modalTemplate(btn) {
  btn.addEventListener('click', onOpenModal);
}
// відкриває модалку з рендером картки фільму
export function onOpenModalFilm() {
  refs.filmsGalleryEl.addEventListener('click', onEventListenerClick);
}
