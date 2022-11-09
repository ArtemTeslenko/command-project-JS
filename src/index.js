import { refs } from './js/reference/homeRefs';
import { trendsControls, scrollToTop } from './js/controls';
import { onOpenModalFilm, modalTemplate } from './js/modal';
import {} from './js/controls/registrateUsers';
import { onListenerSearchMovie } from './js/requests';

trendsControls();
onOpenModalFilm();
// зразок функції для відкриття чистої модалки
modalTemplate(refs.footerBtn);
scrollToTop();
onListenerSearchMovie();
