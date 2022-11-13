import { refs } from '../reference/homeRefs';
import { refs } from '../reference/libraryRefs';
import { onOpenModal } from '../controls/modalControl';
import member from '../../footerTeam.json';
import { renderTeam } from '../render';

function showTeam() {
  onOpenModal();
  renderTeam(member);
}

export function openModalShowTeam() {
  refs.footerBtn.addEventListener('click', showTeam);
}
