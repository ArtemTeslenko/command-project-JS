import { refs } from '../reference/homeRefs';
import { modalTemplate } from '../controls';
import { trailerRequest } from '../requests';
import { renderTrailer } from '../render';

export function funcHuianc() {
  const link = document.querySelector('.modal-card__list');
  link.addEventListener('click', trailerRequest);
}
