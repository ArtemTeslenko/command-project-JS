import { footerMarkup } from '../markup';

export function renderTeam(member) {
  const container = document.querySelector('.team');
  container.innerHTML = footerMarkup(member);
}
