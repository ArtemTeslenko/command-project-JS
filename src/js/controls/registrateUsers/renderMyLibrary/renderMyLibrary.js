// const btnNotAuth = document.querySelector('.btnNotAuth');
// const btnAuth = document.querySelectorAll('.btnAuth');
import { refs } from '../../../reference/homeRefs';

export function renderBtnAuth() {
  refs.btnNotAuth.classList.toggle('is-hidden');

  for (let i = 0; i < refs.btnAuth.length; i++) {
    refs.btnAuth[i].classList.toggle('is-hidden');
  }
}
