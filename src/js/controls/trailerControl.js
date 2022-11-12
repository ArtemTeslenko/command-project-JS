import { refs } from '../reference/homeRefs';
import { modalTemplate } from '../controls';
import { trailerRequest } from '../requests';
const testEl = document.querySelector('.test-trailer-btn');
export function renderControl() {
  onClickBtnTest();
}
function onClickBtnTest() {
  trailerRequest();

  // refs.modalCardEl.innerHTML = trailerRequest();
  // func request
  // refs.modalCardEl.innerHTML = `<p>tdfvdfv</p>`;
  modalTemplate();
}

refs.modalCardEl.addEventListener('click', onClickImg);
function onClickImg(e) {
  trailerRequest(e.target);
  console.log(e.target);
}
