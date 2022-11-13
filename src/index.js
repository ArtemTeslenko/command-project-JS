import { refs } from './js/reference/homeRefs';
import { trendsControls, scrollToTop, listenerUserOut } from './js/controls';
import { onOpenModalFilm, modalTemplate } from './js/controls';
import { showTeam } from './js/controls';
import { renderControl } from './js/controls';
// import {} from './js/controls/registrateUsers'; // names for Vlad Sid
import { onListenerSearchMovie } from './js/requests';
import {
  showTeam,
  listenerBackFBAuth,
  listenerBack,
  listenerUserOut,
} from './js/controls'; // names for Vlad Sid

onListenerSearchMovie();
////onSearchPagination();
trendsControls();
// refs.filmsGalleryEl це дів карточки з рендера популярних
onOpenModalFilm(refs.filmsGalleryEl);
// зразок функції для відкриття чистої модалки
modalTemplate(refs.footerBtn);
scrollToTop();
showTeam();
listenerBack(); // names for Vlad Sid
listenerBackFBAuth(); // names for Vlad Sid
listenerUserOut(); // names for Vlad Sid
//renderControl();
// listenerBack(); // names for Vlad Sid
// listenerBackFBAuth(); // names for Vlad Sid
// listenerUserOut(); // names for Vlad Sid
