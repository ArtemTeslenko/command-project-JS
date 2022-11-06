// import { testOnClickFetchFilmId } from '../modal'
import { refs } from '../../js/reference/homeRefs';
import { FetchFilmId } from '../modal';
import { clianFilmCard } from './markupFilmForodal';

let filmCardLink = 0;
let filmCardLinkId = 0;


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

function onOpenModal(e) {
  refs.backdropEl.classList.remove('is-hidden');
  refs.bodyEl.addEventListener('keydown', creatKeydownEscape);

  refs.bodyNoScrollEl.classList.toggle('no-scroll');
  // // ----------
  // window.addEventListener('scroll', e => {
  //   window.scrollTo(0, 0);
  // });
  // //------------

  function creatKeydownEscape(e) {
    if (e.code === 'Escape') {
      refs.backdropEl.classList.add('is-hidden');
      refs.bodyEl.removeEventListener('keydown', creatKeydownEscape);
    }
  }
}

function onEventListenerClick(e) {
  e.preventDefault();
  filmCardLink = e.target;
  filmCardLinkId = e.target.id;
  if (filmCardLink !== e.currentTarget) {
    FetchFilmId(filmCardLinkId);
    onOpenModal(filmCardLink);
  }
}

export function onClick(btn) {
  btn.addEventListener('click', onOpenModal);
  refs.buttonCloseEl.addEventListener('click', onClouseModal);
  refs.backdropEl.addEventListener('click', onClouseModalBackdrop);
}

export function onOpenModalFilm(e) {
  refs.mainEl.addEventListener('click', onEventListenerClick);
  refs.buttonCloseEl.addEventListener('click', onClouseModal);
  refs.backdropEl.addEventListener('click', onClouseModalBackdrop);
}
