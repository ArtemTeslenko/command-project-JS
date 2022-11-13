import { refs } from '../reference/homeRefs';

export function openSpinnerHome() {
  refs.spinerHomeGalleryEl.classList.remove('isHidden-spiner');
}

export function closeSpinnerHome() {
  refs.spinerHomeGalleryEl.classList.add('isHidden-spiner');
}
