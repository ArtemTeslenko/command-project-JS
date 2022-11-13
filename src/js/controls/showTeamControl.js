import member from '../../footerTeam.json';
import { refs } from '../reference/homeRefs';
import { refs } from '../reference/libraryRefs';
import { onOpenModal } from '../controls';
import { renderTeam } from '../render';

export function openModalShowTeam() {
  refs.footerBtn.addEventListener('click', showTeam);
}

function showTeam() {
  onOpenModal();
  renderTeam(member);
}
