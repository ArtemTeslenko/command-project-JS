import { footerMarkup } from '../markup';
import { refs } from '../reference/homeRefs';
// import { cleanModal } from './renderFilmCard'; // to delete

export function renderTeam(member) {
  refs.modalCardEl.innerHTML = '<div class="team"></div>';
  const container = document.querySelector('.team'); //Ganna
  // container.innerHTML = footerMarkup(member);//Ganna
  container.innerHTML = footerMarkup(member); //Ganna
}
