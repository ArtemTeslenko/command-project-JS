import { refs } from '../reference/homeRefs';
export function paginationBtnHidden(page, totalPage) {
  if (page < 6) {
    if (refs.paginationEl.classList.contains('item--hidden-mob--2')) {
      refs.paginationEl.classList.remove('item--hidden-mob--2');
    }
    if (refs.paginationEl.classList.contains('item--hidden-mob--3')) {
      refs.paginationEl.classList.remove('item--hidden-mob--3');
    }
    refs.paginationEl.classList.add('item--hidden-mob--1');
  }
  if (page >= 6 && page <= totalPage - 5) {
    if (refs.paginationEl.classList.contains('item--hidden-mob--1')) {
      refs.paginationEl.classList.remove('item--hidden-mob--1');
    }
    if (refs.paginationEl.classList.contains('item--hidden-mob--3')) {
      refs.paginationEl.classList.remove('item--hidden-mob--3');
    }
    refs.paginationEl.classList.add('item--hidden-mob--2');
  }
  if (page > totalPage - 5) {
    if (refs.paginationEl.classList.contains('item--hidden-mob--1')) {
      refs.paginationEl.classList.remove('item--hidden-mob--1');
    }
    if (refs.paginationEl.classList.contains('item--hidden-mob--2')) {
      refs.paginationEl.classList.remove('item--hidden-mob--2');
    }
    refs.paginationEl.classList.add('item--hidden-mob--3');
  }
}
