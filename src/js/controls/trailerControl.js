import { refs } from '../reference/homeRefs';
import { modalTemplate } from '../controls';
import { trailerRequest } from '../requests';
import { renderTrailer } from '../render';
const testEl = document.querySelector('.test-trailer-btn');
// export function renderControl() {
//   onClickBtnTest();
// }
// function onClickBtnTest() {
//   trailerRequest();

//   // refs.modalCardEl.innerHTML = trailerRequest();
//   // func request
//   // refs.modalCardEl.innerHTML = `<p>tdfvdfv</p>`;
//   modalTemplate();
// }

// refs.modalCardEl.addEventListener('click', onClickImg);
// function onClickImg(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   const link = document.querySelector('.modal-card__list');
//   // const targetEl = e.target.closest('.modal-card__list');
//   console.log(e.target);

//
//   //console.log(e.target);
// }

export function funcHuianc() {
  const link = document.querySelector('.modal-card__list');
  link.addEventListener('click', trailerRequest);
}
