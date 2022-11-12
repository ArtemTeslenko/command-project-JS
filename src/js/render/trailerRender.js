import { trailerMarkup } from '../markup';
import { modalTemplate } from '../controls';
import { refs } from '../reference/homeRefs';

export function renderTrailer(data) {
  refs.modalCardEl.innerHTML = trailerMarkup(data);
}
// из хом реф достать модалку
// в модалку зделать иннер хтмл резт визова маркап
//
