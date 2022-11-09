import { refs } from './js/reference/homeRefs';
import { trendsControls } from './js/controls';
import { onOpenModalFilm } from './js/controls';
import { modalTemplate } from './js/controls';
import { scrollToTop } from './js/controls';
import {} from './js/controls/registrateUsers';
import { onListenerSearchMovie } from './js/requests';

trendsControls();
onOpenModalFilm();
// зразок функції для відкриття чистої модалки
modalTemplate(refs.footerBtn);
scrollToTop();
onListenerSearchMovie();
