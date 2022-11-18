import { footerMarkup } from '../markup';
import { refs } from '../reference/homeRefs';

export function renderTeam(member) {
  refs.modalCardEl.innerHTML = '<div class="team"></div>';
  const container = document.querySelector('.team'); //Ganna
  container.innerHTML = footerMarkup(member); //Ganna
}
