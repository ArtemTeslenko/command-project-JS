import { refs } from './js/reference/homeRefs.js';
import { trendsControls } from './js/controls';
import { onOpenModalFilm } from './js/modal';
import { modalTemplate } from './js/modal';
import { scrollToTop } from './js/controls';
import {} from './js/controls/registrateUsers';

trendsControls();
onOpenModalFilm();
// зразок функції для відкриття чистої модалки
modalTemplate(refs.footerBtn);
scrollToTop();
