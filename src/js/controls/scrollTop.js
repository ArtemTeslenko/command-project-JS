const scrollBtn = document.querySelector('.arrow-up');
function onScrollShowArrow() {
  if (window.scrollY > 700) {
    scrollBtn.classList.remove('isHiddenBtn');
  } else if (window.scrollY < 700) {
    scrollBtn.classList.add('isHiddenBtn');
  }
}
function onClickArrow() {
  window.scrollTo(0, 0);
}

export function scrollToTop() {
  window.addEventListener('scroll', onScrollShowArrow);
  scrollBtn.addEventListener('click', onClickArrow);
}
