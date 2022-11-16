import { refs } from './js/reference/libraryRefs';
import { onClickQueueAndWatchedOpen } from './js/customFunction';
import {
  onOpenModalFilm,
  onWatchedOpen,
  onOpenModalFilmWatched,
  openModalShowTeam,
} from './js/controls';

onClickQueueAndWatchedOpen();
onWatchedOpen();
openModalShowTeam();
onOpenModalFilm(refs.libraryEl);
