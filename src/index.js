import { refs } from './js/reference/homeRefs';
import { trendsControls } from './js/controls';
import { onOpenModalFilm } from './js/modal';
import { modalTemplate } from './js/modal';
import { scrollToTop } from './js/controls';
import {} from './js/controls/registrateUsers';
import {
  onEventListenerSearchMovie,
  onSearchMovie,
  onSearchSubmitMovie,
} from './js/requests/fetchSearchFilm';

trendsControls();
onOpenModalFilm();
// зразок функції для відкриття чистої модалки
modalTemplate(refs.footerBtn);
scrollToTop();
onEventListenerSearchMovie();
