import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from '../reference/homeRefs.js';
import { refs } from '../reference/libraryRefs';
import { renderLibraryList } from '../render';
import { getSavedUserFilm } from './data';

const STORAGE_WATCHED_KEY = 'watched';
const STORAGE_QUEUE_KEY = 'queue';
const successNotify = 'The movie added to the list';
const infoNotify = 'The movie has already been added to the list';
const warningNotify = 'List is empty!';

let watchedFilmList = [];
let queueFilmList = [];
try {
  watchedFilmList = [...JSON.parse(localStorage.getItem(STORAGE_WATCHED_KEY))];
  queueFilmList = [...JSON.parse(localStorage.getItem(STORAGE_QUEUE_KEY))];
} catch (error) {
  // console.log(error);
}

// Додае ключ та значення в Lokal Storage
export function addToLokalStorage(film) {
  refs.modalCardEl.addEventListener('click', onModalBtnClick);

  function onModalBtnClick(evt) {
    if (evt.target.classList.contains('button-add__watched')) {
      addToList(watchedFilmList, film);
      localStorage.setItem(
        STORAGE_WATCHED_KEY,
        JSON.stringify(watchedFilmList)
      );
    } else if (evt.target.classList.contains('button-add__queue')) {
      addToList(queueFilmList, film);
      localStorage.setItem(STORAGE_QUEUE_KEY, JSON.stringify(queueFilmList));
    }
    refs.modalCardEl.removeEventListener('click', onModalBtnClick);
  }
}

// Перевіряє масив на співпадння елементів
function addToList(arr, film) {
  if (!arr.find(item => item.id === film.id)) {
    arr.push(film);
    Notify.success(successNotify, {
      position: 'center-top',
    });
  } else {
    Notify.info(infoNotify, {
      position: 'center-top',
    });
  }
}

//Рендерить сторінку по даним з Lokal Storage
export function onWatchedOpen() {
  try {
    // const watchedItems = JSON.parse(localStorage.getItem(STORAGE_WATCHED_KEY));
    // renderLibraryList(watchedItems);
    getSavedUserFilm('watched');
  } catch (error) {
    // cleanRender(refs.libraryEl);
    Notify.warning(warningNotify, {
      position: 'center-top',
    });
  }
}

export function onQueueOpen() {
  try {
    getSavedUserFilm('queue');
    // const qeueItems = JSON.parse(localStorage.getItem(STORAGE_QUEUE_KEY));
    // renderLibraryList(qeueItems);
  } catch (error) {
    // cleanRender(refs.libraryEl);
    Notify.warning(warningNotify, {
      position: 'center-top',
    });
  }
}
