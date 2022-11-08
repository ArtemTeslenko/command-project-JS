import { refs } from './js/reference/homeRefs';
import { trendsControls } from './js/controls';
import { onOpenModalFilm } from './js/modal';
import {
  onEventListenerSearchMovie,
  onSearchMovie,
  onSearchSubmitMovie,
} from './js/requests/fetchSearchFilm';

trendsControls();
onOpenModalFilm();
onEventListenerSearchMovie();
