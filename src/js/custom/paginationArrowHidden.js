export function paginationArrowHidden(page, totalPage) {
  const btnDecrementEl = document.querySelector('.btn--decrement');
  const btnIncrementEl = document.querySelector('.btn--increment');

  const btnPaginationArrow = document.querySelector('.btn__pagination');
  if (page === 1) {
    btnDecrementEl.setAttribute('hidden', 'true');
  } else if (page === totalPage) {
    btnIncrementEl.hidden = true;
  } else if (btnPaginationArrow.hasAttribute('hidden')) {
    btnPaginationArrow.removeAttribute('hidden');
  }
}
//disabled;
