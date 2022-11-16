import { refs } from '../reference/homeRefs';

export function scrollToTop() {
  window.addEventListener('scroll', onScrollShowArrow);
  refs.scrollBtnEl.addEventListener('click', onClickArrow);
}

function onScrollShowArrow() {
  if (window.scrollY > 700) {
    refs.scrollBtnEl.classList.remove('isHiddenBtn');
  } else if (window.scrollY < 700) {
    refs.scrollBtnEl.classList.add('isHiddenBtn');
  }
}

function onClickArrow() {
  window.scrollTo(0, 0);
}
