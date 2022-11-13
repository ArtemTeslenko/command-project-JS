import { footerMarkup } from '../markup';

export function renderTeam(member) {
  // const qer = footerMarkup(member);
  // console.log(qer);
  const container = document.querySelector('.team');
  container.innerHTML = footerMarkup(member);
}
