import { refs } from './js/reference/homeRefs';
import { trendsControls, scrollToTop } from './js/controls';
import { onOpenModalFilm, modalTemplate } from './js/controls';
import {} from './js/controls/registrateUsers';
import { onListenerSearchMovie } from './js/requests';
import {showTeam} from './js/controls';

trendsControls();
onOpenModalFilm();
// зразок функції для відкриття чистої модалки
modalTemplate(refs.footerBtn);
scrollToTop();
onListenerSearchMovie();
showTeam();
