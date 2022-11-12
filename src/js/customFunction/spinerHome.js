import { refs } from '../reference/homeRefs';

export function openSpinnerHome() {
  refs.spinerHomeGalleryEl.classList.remove('isHidden-spiner');
  document.addEventListener('keydown', onEscapeRemoveSpiner);
}

export function closeSpinnerHome() {
  refs.spinerHomeGalleryEl.classList.add('isHidden-spiner');
  document.removeEventListener('keydown', onEscapeRemoveSpiner);
}

function onEscapeRemoveSpiner(e) {
  e.preventDefault();
  console.log(e);
  if (e.code === 'Escape') {
    closeSpinnerHome();
  }
}
