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
  onListenerSearchMovie,
  onFilterBtnClick,
} from './js/controls';

onListenerSearchMovie();
////onSearchPagination();
trendsControls();
// refs.filmsGalleryEl це дів карточки з рендера популярних
onOpenModalFilm(refs.filmsGalleryEl);
// зразок функції для відкриття чистої модалки
scrollToTop();
openModalShowTeam();
onFilterBtnClick();
listenerBack(); // names for Vlad Sid
listenerBackFBAuth(); // names for Vlad Sid
listenerUserOut(); // names for Vlad Sid
//renderControl();
// listenerBack(); // names for Vlad Sid
// listenerBackFBAuth(); // names for Vlad Sid
// listenerUserOut(); // names for Vlad Sid
