import { footerMarkup } from '../markup';
import { refs } from '../reference/homeRefs';
// import { cleanModal } from './renderFilmCard'; // to delete

export function renderTeam(member) {
  //const container = document.querySelector('.modal-card');//Ganna
  // container.innerHTML = footerMarkup(member);//Ganna
  refs.modalCardEl.innerHTML = footerMarkup(member); //Ganna
}
