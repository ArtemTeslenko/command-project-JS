const backdropEl = document.querySelector('.backdrop');
const buttonTestEl = document.querySelector('.test');
const buttonClose = document.querySelector('.modal-button');
const bodyEl = document.querySelector('body');
const footerBtn = document.querySelector('.footer__btn');

function onClouseModal(e) {
  backdropEl.classList.add('is-hidden');
}

function onClouseModalBackdrop(e) {
  if (e.target === e.currentTarget) {
    backdropEl.classList.add('is-hidden');
  }
  return;
}

function onOpenModal(e) {
  e.preventDefault();
  backdropEl.classList.remove('is-hidden');

  bodyEl.addEventListener('keydown', creatKeydownEscape);

  function creatKeydownEscape(e) {
    if (e.code === 'Escape') {
      backdropEl.classList.add('is-hidden');
      bodyEl.removeEventListener('keydown', creatKeydownEscape);
    }
  }
}

export function onClick(btn) {
  btn.addEventListener('click', onOpenModal);
  buttonClose.addEventListener('click', onClouseModal);
  backdropEl.addEventListener('click', onClouseModalBackdrop);
}
