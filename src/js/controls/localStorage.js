import { refs } from '../reference/homeRefs.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderLibraryList } from '../render';

const STORAGE_WATCHED_KEY = 'watched';
const STORAGE_QUEUE_KEY = 'queue';

let watchedFilmList = [];
let queueFilmList = [];
try {
  watchedFilmList = [...JSON.parse(localStorage.getItem(STORAGE_WATCHED_KEY))];
  queueFilmList = [...JSON.parse(localStorage.getItem(STORAGE_QUEUE_KEY))];
} catch (error) {
  console.log(error);
  console.log(error);
}

// Додае ключ та значення в Lokal Storage
export function addToLokalStorage(film) {
  console.log(film.id);
  refs.modalFilmEl.addEventListener('click', onModalBtnClick);

  function onModalBtnClick(evt) {
    if (evt.target.classList.contains('js-button-watched')) {
      addToList(watchedFilmList, film);
      localStorage.setItem(
        STORAGE_WATCHED_KEY,
        JSON.stringify(watchedFilmList)
      );
    } else if (evt.target.classList.contains('js-button-queue')) {
      addToList(queueFilmList, film);
      localStorage.setItem(STORAGE_QUEUE_KEY, JSON.stringify(queueFilmList));
    }
    refs.modalFilmEl.removeEventListener('click', onModalBtnClick);
  }
}

// Перевіряє масив на співпадння елементів
function addToList(arr, film) {
  if (!arr.find(item => item.id === film.id)) {
    arr.push(film);
    Notify.success('The movie has been added to the list');
  } else {
    Notify.info('The movie has already been added to the list');
  }
}

//Рендерить сторінку по даним з Lokal Storage
export function onMyLibraryOpen() {
  try {
    const filmItems = JSON.parse(localStorage.getItem(STORAGE_WATCHED_KEY));
    renderLibraryList(filmItems);
  } catch (error) {
    Notify.warning('List is empty!');
  }
}
