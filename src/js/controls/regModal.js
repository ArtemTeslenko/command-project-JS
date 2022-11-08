import { registerRender } from '../render';
import { onClick } from '../modal';
import { refs } from '../reference/homeRefs';

export function regModal() {
  onClick(refs.logInBtn);
  registerRender();
}
