import { refs } from './js/reference/libraryRefs';
import { onQueueBtn } from './js/customFunction/getBtnLibrary.js';
import { onWatchedBtn } from './js/customFunction/getBtnLibrary.js';
import {
  onOpenModalFilm,
  onOpenModalFilmWatched,
  onWatchedOpen,
} from './js/controls';
import { openModalShowTeam } from './js/controls/showTeamControl';

refs.queueEl.addEventListener('click', onQueueBtn);
refs.watchedEl.addEventListener('click', onWatchedBtn);

onWatchedOpen();
onOpenModalFilm(refs.libraryEl);
openModalShowTeam();
