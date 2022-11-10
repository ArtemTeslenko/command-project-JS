import { refs } from '../reference/homeRefs';
import { refs } from '../reference/libraryRefs';
import { renderFilmCard } from '../render';
import { cleanFilmCard } from '../render/renderFilmCard';

// відкриває модалку (перевикористовувати)
export function modalTemplate(btn) {
  btn.addEventListener('click', onOpenModal);
}
// відкриває модалку з рендером картки фільму
export function onOpenModalFilm() {
  refs.filmsGalleryEl.addEventListener('click', onEventListenerClick);
  //  cleanFilmCard();
}

// функція закриває модалку (наприклад по кліку на кнопку) і очищає модалку clianFilmCard()
function onClouseModal() {
  refs.backdropEl.classList.add('is-hidden');
  refs.bodyNoScrollEl.classList.remove('no-scroll');
  //  cleanFilmCard();
}
// функція закриває модалку по кліку на backdrop
function onClouseModalBackdrop(e) {
  if (e.target === e.currentTarget) {
    refs.backdropEl.classList.add('is-hidden');
    refs.bodyNoScrollEl.classList.remove('no-scroll');
    // cleanFilmCard();
  }
  return;
}

// функція закриває модалку по кліку на Escape
function creatKeydownEscape(e) {
  {
    if (e.code === 'Escape') {
      refs.bodyNoScrollEl.classList.remove('no-scroll');
      refs.backdropEl.classList.add('is-hidden');
      refs.bodyEl.removeEventListener('keydown', creatKeydownEscape);
      // cleanFilmCard();
    }
  }
}

function commonClose() {
  refs.backdropEl.addEventListener('click', onClouseModalBackdrop);
  refs.buttonCloseEl.addEventListener('click', onClouseModal);
  refs.bodyEl.addEventListener('keydown', creatKeydownEscape);
}

// відкриває і закриває модалку
function onOpenModal() {
  refs.backdropEl.classList.remove('is-hidden');
  refs.bodyNoScrollEl.classList.add('no-scroll');
  commonClose();
}

// перевіряє умову відкриття модалки з рендером картки фільму
async function onEventListenerClick(e) {
  e.preventDefault();
  if (e.target.closest('.film-card__link')) {
    await renderFilmCard(e.target.closest('.film-card__link').id);
    onOpenModal();
  }
}
