import { refs } from '../../js/reference/libraryRefs';
import { onWatchedOpen, onQueueOpen } from '../controls';

export function onClickQueueAndWatchedOpen() {
  refs.queueEl.addEventListener('click', onQueueBtn);
  refs.watchedEl.addEventListener('click', onWatchedBtn);
}

function onQueueBtn() {
  refs.watchedEl.classList.remove('is-active__btn');
  refs.queueEl.classList.add('is-active__btn');

  onQueueOpen();
}

function onWatchedBtn() {
  refs.watchedEl.classList.add('is-active__btn');
  refs.queueEl.classList.remove('is-active__btn');

  onWatchedOpen();
}
