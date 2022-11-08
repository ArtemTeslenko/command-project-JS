import { refs } from '../../js/reference/libraryRefs';

export function onQueueBtn(event) {
  refs.watchedEl.classList.remove('is-active__btn');
  refs.queueEl.classList.add('is-active__btn');
}

export function onWatchedBtn(event) {
  refs.watchedEl.classList.add('is-active__btn');
  refs.queueEl.classList.remove('is-active__btn');
}
