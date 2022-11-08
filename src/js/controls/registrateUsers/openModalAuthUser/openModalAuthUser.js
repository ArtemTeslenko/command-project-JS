import { refs } from '../../../reference/homeRefs';
import { modalTemplate } from '../../../modal';
import { renderModalAuthUsers, renderModalRegUsers } from '../index';

refs.logIn.addEventListener('click', openModalAuth);

function openModalAuth(e) {
  e.preventDefault();

  modalTemplate(e.target);
  refs.modalCard.innerHTML = renderModalAuthUsers();

  const btnCloseModal = document.querySelector('.form-auth__button-close');
  const btnRegUsers = document.querySelector('.form-auth__button-reg');

  btnCloseModal.addEventListener('click', e => {
    e.preventDefault();
    refs.backdropEl.classList.toggle('is-hidden');
  });

  btnRegUsers.addEventListener('click', openModalReguser);
}

function openModalReguser(e) {
  e.preventDefault();

  refs.modalCard.innerHTML = renderModalRegUsers();

  const btnCloseModal = document.querySelector('.form-auth__button-close');
  const btnRegUsers = document.querySelector('.form-auth__button-reg');

  btnCloseModal.addEventListener('click', e => {
    e.preventDefault();
    refs.backdropEl.classList.toggle('is-hidden');
  });

  btnRegUsers.addEventListener('click', openModalAuth);
}
