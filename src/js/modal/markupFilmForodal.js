import { fetchFilmId } from './fetchFilmId';
import { markupBtnModalFilm } from '../markup';
import { addToLokalStorage, addFilmProfail } from '../controls';

let film = {};
const modalCardEl = document.querySelector('.modal-card');

export async function FetchFilmId(id) {
  await fetchFilmId(id).then(respons => {
    film = respons;
    return film;
  });

  addToLokalStorage(film);

  const marcup = markupBtnModalFilm(film);
  modalCardEl.innerHTML = marcup;

  // Вызывает функцию для поска кнопод для добавления фильмов в просмотренные
  // путь controls --> data --> addFilmUsers
  return addFilmProfail(film);
}

export function clianFilmCard() {
  return (modalCardEl.innerHTML = '');
}
