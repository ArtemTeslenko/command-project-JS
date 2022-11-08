import { registerBtnModal } from '../markup';

export function registerRender() {
  const modalCardEl = document.querySelector('.modal-card');
  console.log(modalCardEl);
  const markup = registerBtnModal();
  console.log(markup);
  modalCardEl.innerHTML = markup;
}
