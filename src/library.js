import { refs } from './js/reference/libraryRefs';
import { onClickQueueAndWatchedOpen } from './js/customFunction/getBtnLibrary.js';
import { onOpenModalFilm, onWatchedOpen } from './js/controls';

onClickQueueAndWatchedOpen();
onWatchedOpen();
onOpenModalFilm(refs.libraryEl);
