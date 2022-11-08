import { refs } from '../../js/reference/libraryRefs';

export function onQueueBtn(event) {
  event.preventDefault();
  refs.watchedEl.classList.remove('is-active__btn');
  refs.queueEl.classList.add('is-active__btn');
}

export function onWatchedBtn(event) {
  event.preventDefault();
  refs.watchedEl.classList.add('is-active__btn');
  refs.queueEl.classList.remove('is-active__btn');
}
