import { refs } from '../reference/homeRefs';

export function paginationArrowHidden(page, totalPage) {
  btnDecrementEl = document.querySelector('.btn--decrement');
  btnIncrementEl = document.querySelector('.btn--increment');
  btnPaginationArrow = document.querySelector('.btn__pagination');
  if (page === 1) {
    console.log(btnDecrementEl);
    console.log(btnIncrementEl);
    btnDecrementEl.setAttribute('disabled', 'true');
  } else if (page === totalPage) {
    btnIncrementEl.setAttribute('disabled', 'true');
  } else if (btnPaginationArrow.hasAttribute('disabled')) {
    btnPaginationArrow.removeAttribute('disabled');
  }
}
