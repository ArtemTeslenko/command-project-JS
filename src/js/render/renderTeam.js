import { onOpenModal } from '../controls';
import { footerMarkup } from '../markup';

export function renderTeam(member) {
  const container = document.querySelector('.modal-card');
  container.innerHTML = footerMarkup(member);
}
