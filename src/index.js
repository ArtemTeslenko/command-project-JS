import { refs } from './js/reference/homeRefs';
import {
  trendsControls,
  scrollToTop,
  onOpenModal,
  onOpenModalFilm,
  modalTemplate,
  openModalShowTeam,
  renderControl,
  showTeam,
  listenerBackFBAuth,
  listenerBack,
  listenerUserOut,
} from './js/controls';
import { onListenerSearchMovie } from './js/requests';

onListenerSearchMovie();
////onSearchPagination();
trendsControls();
// refs.filmsGalleryEl це дів карточки з рендера популярних
onOpenModalFilm(refs.filmsGalleryEl);
// зразок функції для відкриття чистої модалки
scrollToTop();
openModalShowTeam();
listenerBack(); // names for Vlad Sid
listenerBackFBAuth(); // names for Vlad Sid
listenerUserOut(); // names for Vlad Sid
//renderControl();
// listenerBack(); // names for Vlad Sid
// listenerBackFBAuth(); // names for Vlad Sid
// listenerUserOut(); // names for Vlad Sid
