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
// onOpenModalFilm(refs.libraryEl); // to delete !!!check
openModalShowTeam();
